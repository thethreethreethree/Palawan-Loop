import { useState } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { User, Mail, Lock, AlertCircle, Check } from 'lucide-react'
import AuthShell from '../components/AuthShell.jsx'
import { useAuth } from '../context/AuthContext.jsx'

const perks = ['Reserve trips with a $50 deposit', 'Manage all your bookings', 'Faster checkout next time']

export default function Signup() {
  const { signup } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from || '/dashboard'

  const [form, setForm] = useState({ name: '', email: '', password: '', confirm: '' })
  const [error, setError] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    setError('')
    if (form.password.length < 6) return setError('Password must be at least 6 characters.')
    if (form.password !== form.confirm) return setError('Passwords don’t match.')
    const res = signup({ name: form.name, email: form.email, password: form.password })
    if (res.ok) navigate(from, { replace: true })
    else setError(res.error)
  }

  return (
    <AuthShell quote="“The small group size made all the difference.”">
      <h1 className="text-3xl font-extrabold text-ink">Start your Loop.</h1>
      <p className="mt-2 text-ink/60">Create an account in seconds — no card required to sign up.</p>

      <ul className="mt-5 space-y-2">
        {perks.map((p) => (
          <li key={p} className="flex items-center gap-2 text-sm text-ink/70">
            <Check size={16} className="text-brand-500" strokeWidth={3} /> {p}
          </li>
        ))}
      </ul>

      {error && (
        <div className="mt-6 flex items-center gap-2 rounded-xl bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
          <AlertCircle size={16} /> {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
        <div>
          <label className="field-label" htmlFor="name">Full name</label>
          <div className="relative">
            <User size={18} className="pointer-events-none absolute left-3.5 top-3.5 text-ink/30" />
            <input
              id="name"
              type="text"
              required
              autoComplete="name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="field-input pl-11"
              placeholder="Alex Rider"
            />
          </div>
        </div>

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

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="field-label" htmlFor="password">Password</label>
            <div className="relative">
              <Lock size={18} className="pointer-events-none absolute left-3.5 top-3.5 text-ink/30" />
              <input
                id="password"
                type="password"
                required
                autoComplete="new-password"
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                className="field-input pl-11"
                placeholder="6+ characters"
              />
            </div>
          </div>
          <div>
            <label className="field-label" htmlFor="confirm">Confirm</label>
            <div className="relative">
              <Lock size={18} className="pointer-events-none absolute left-3.5 top-3.5 text-ink/30" />
              <input
                id="confirm"
                type="password"
                required
                autoComplete="new-password"
                value={form.confirm}
                onChange={(e) => setForm({ ...form, confirm: e.target.value })}
                className="field-input pl-11"
                placeholder="Repeat password"
              />
            </div>
          </div>
        </div>

        <button type="submit" className="btn-primary w-full !py-3.5">Create account</button>
      </form>

      <p className="mt-6 text-center text-sm text-ink/60">
        Already have an account?{' '}
        <Link to="/login" state={{ from }} className="font-semibold text-brand-600 hover:underline">
          Log in
        </Link>
      </p>
      <p className="mt-3 text-center text-xs text-ink/35">
        Demo only — accounts are stored locally in your browser.
      </p>
    </AuthShell>
  )
}
