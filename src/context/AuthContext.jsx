import { createContext, useContext, useEffect, useMemo, useState } from 'react'

/**
 * DEMO AUTH ONLY.
 * Accounts live in localStorage and passwords are stored in plain text — this
 * is a front-end prototype, NOT real authentication. When a backend is added,
 * replace this provider with real signup/login API calls + hashed passwords +
 * httpOnly session cookies. The component API below is kept deliberately small
 * so that swap is a drop-in.
 */
const AuthContext = createContext(null)

const USERS_KEY = 'pl_users'
const SESSION_KEY = 'pl_session'

function readUsers() {
  try {
    return JSON.parse(localStorage.getItem(USERS_KEY)) || []
  } catch {
    return []
  }
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)

  // Restore the session on first load.
  useEffect(() => {
    try {
      const email = localStorage.getItem(SESSION_KEY)
      if (email) {
        const found = readUsers().find((u) => u.email === email)
        if (found) setUser({ name: found.name, email: found.email })
      }
    } catch {
      /* ignore */
    }
  }, [])

  function signup({ name, email, password }) {
    const users = readUsers()
    const normalized = email.trim().toLowerCase()
    if (users.some((u) => u.email === normalized)) {
      return { ok: false, error: 'An account with that email already exists.' }
    }
    const record = { name: name.trim(), email: normalized, password }
    localStorage.setItem(USERS_KEY, JSON.stringify([...users, record]))
    localStorage.setItem(SESSION_KEY, normalized)
    setUser({ name: record.name, email: record.email })
    return { ok: true }
  }

  function login({ email, password }) {
    const normalized = email.trim().toLowerCase()
    const found = readUsers().find((u) => u.email === normalized)
    if (!found || found.password !== password) {
      return { ok: false, error: 'Email or password is incorrect.' }
    }
    localStorage.setItem(SESSION_KEY, normalized)
    setUser({ name: found.name, email: found.email })
    return { ok: true }
  }

  function logout() {
    localStorage.removeItem(SESSION_KEY)
    setUser(null)
  }

  const value = useMemo(() => ({ user, signup, login, logout }), [user])
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used within an AuthProvider')
  return ctx
}
