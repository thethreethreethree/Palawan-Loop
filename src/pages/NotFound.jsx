import { Link } from 'react-router-dom'
import { Home, Compass } from 'lucide-react'
import { ScooterMark } from '../components/Logo.jsx'

export default function NotFound() {
  return (
    <div className="container-px grid min-h-[70vh] place-items-center py-20 text-center">
      <div>
        <ScooterMark className="mx-auto h-20 w-20" />
        <p className="mt-6 font-display text-6xl font-extrabold text-brand-500">404</p>
        <h1 className="mt-2 text-2xl font-extrabold text-ink">Looks like you took a wrong turn.</h1>
        <p className="mx-auto mt-3 max-w-md text-ink/60">
          This road isn’t on the Loop. Let’s get you back on route.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link to="/" className="btn-primary">
            <Home size={18} /> Back home
          </Link>
          <Link to="/tour" className="btn-ghost">
            <Compass size={18} /> See the route
          </Link>
        </div>
      </div>
    </div>
  )
}
