import { useEffect, useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { Menu, X, LogOut, LayoutDashboard } from 'lucide-react'
import Logo from './Logo.jsx'
import { useAuth } from '../context/AuthContext.jsx'

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/tour', label: 'The Loop' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/about', label: 'About' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  function handleLogout() {
    logout()
    setOpen(false)
    navigate('/')
  }

  const linkClass = ({ isActive }) =>
    `relative text-sm font-semibold transition-colors hover:text-brand-600 ${
      isActive ? 'text-brand-600' : 'text-ink/70'
    }`

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 shadow-sm backdrop-blur-md' : 'bg-white/70 backdrop-blur'
      }`}
    >
      <nav className="container-px flex h-[72px] items-center justify-between">
        <Link to="/" aria-label="Palawan Loop home" onClick={() => setOpen(false)}>
          <Logo />
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.end} className={linkClass}>
              {l.label}
            </NavLink>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          {user ? (
            <>
              <Link to="/dashboard" className="btn-ghost px-4 py-2 text-sm">
                <LayoutDashboard size={16} /> {user.name.split(' ')[0]}
              </Link>
              <button onClick={handleLogout} className="text-sm font-semibold text-ink/60 hover:text-ink">
                <LogOut size={16} className="-mt-0.5 mr-1 inline" />
                Log out
              </button>
            </>
          ) : (
            <Link to="/login" className="text-sm font-semibold text-ink/70 hover:text-brand-600">
              Log in
            </Link>
          )}
          <Link to="/book" className="btn-primary px-5 py-2.5">
            Book Now
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="grid h-11 w-11 place-items-center rounded-xl text-ink lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="fixed inset-0 top-[72px] z-40 bg-white lg:hidden">
          <div className="container-px flex flex-col gap-1 py-6">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.end}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `rounded-2xl px-4 py-4 text-lg font-semibold ${
                    isActive ? 'bg-brand-50 text-brand-700' : 'text-ink/80'
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}

            <div className="mt-4 flex flex-col gap-3 border-t border-slate-100 pt-6">
              {user ? (
                <>
                  <Link to="/dashboard" onClick={() => setOpen(false)} className="btn-ghost w-full">
                    <LayoutDashboard size={18} /> My Trips
                  </Link>
                  <button onClick={handleLogout} className="btn w-full text-ink/70">
                    <LogOut size={18} /> Log out
                  </button>
                </>
              ) : (
                <Link to="/login" onClick={() => setOpen(false)} className="btn-ghost w-full">
                  Log in
                </Link>
              )}
              <Link to="/book" onClick={() => setOpen(false)} className="btn-primary w-full">
                Book Now
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
