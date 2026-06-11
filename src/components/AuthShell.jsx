import { Link } from 'react-router-dom'
import SmartImage from './SmartImage.jsx'
import Logo from './Logo.jsx'
import { images } from '../data/images.js'

/** Split-screen layout shared by Login & Signup. */
export default function AuthShell({ children, quote }) {
  return (
    <div className="grid min-h-[calc(100vh-72px)] lg:grid-cols-2">
      {/* Form side */}
      <div className="flex items-center justify-center px-5 py-12 sm:px-10">
        <div className="w-full max-w-md">
          <Link to="/" className="mb-8 inline-block lg:hidden">
            <Logo />
          </Link>
          {children}
        </div>
      </div>

      {/* Image side */}
      <div className="relative hidden overflow-hidden lg:block">
        <SmartImage src={images.hero} alt="Palawan coastline" label="Palawan Loop" className="absolute inset-0 h-full w-full" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-brand-900/40 to-brand-700/30" />
        <div className="absolute inset-0 flex flex-col justify-between p-12 text-white">
          <Logo tone="light" />
          <div>
            <p className="max-w-sm text-2xl font-extrabold leading-snug text-balance">
              {quote || '“Booked solo, left with a whole crew.”'}
            </p>
            <p className="mt-3 text-sm text-white/70">Maya · rode the Loop last March</p>
          </div>
        </div>
      </div>
    </div>
  )
}
