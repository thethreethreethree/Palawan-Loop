import { useState } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { Mail, Lock, AlertCircle } from 'lucide-react'
import AuthShell from '../components/AuthShell.jsx'
import { useAuth } from '../context/AuthContext.jsx'

export default function Login() {
  const { login } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from || '/dashboard'

  const [form, setForm] = useState({ email: '', password: '' })
  const [error, setError] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    setError('')
    const res = login(form)
    if (res.ok) navigate(from, { replace: true })
    else setError(res.error)
  }

  return (
    <AuthShell quote="“Turned up, everything handled, just rode and made friends.”">
      <h1 className="text-3xl font-extrabold text-ink">Welcome back, rider.</h1>
      <p className="mt-2 text-ink/60">Log in to manage your trips and bookings.</p>

      {error && (
        <div className="mt-6 flex items-center gap-2 rounded-xl bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
          <AlertCircle size={16} /> {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
        <div>
          <label className="field-label" htmlFor="email">Email</label>
          <div className="relative">
            <Mail size={18} className="pointer-events-none absolute left-3.5 top-3.5 text-ink/30" />
            <input
              id="email"
              type="email"
              required
              autoComplete="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="field-input pl-11"
              placeholder="you@email.com"
            />
          </div>
        </div>

        <div>
          <label className="field-label" htmlFor="password">Password</label>
          <div className="relative">
            <Lock size={18} className="pointer-events-none absolute left-3.5 top-3.5 text-ink/30" />
            <input
              id="password"
              type="password"
              required
              autoComplete="current-password"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              className="field-input pl-11"
              placeholder="••••••••"
            />
          </div>
        </div>

        <button type="submit" className="btn-primary w-full !py-3.5">Log in</button>
      </form>

      <p className="mt-6 text-center text-sm text-ink/60">
        New here?{' '}
        <Link to="/signup" state={{ from }} className="font-semibold text-brand-600 hover:underline">
          Create an account
        </Link>
      </p>
      <p className="mt-3 text-center text-xs text-ink/35">
        Demo only — accounts are stored locally in your browser.
      </p>
    </AuthShell>
  )
}
