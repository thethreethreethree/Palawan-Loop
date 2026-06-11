import { Link } from 'react-router-dom'
import { Instagram, Facebook, Mail, Phone, MapPin } from 'lucide-react'
import Logo from './Logo.jsx'
import { brand } from '../data/tour.js'

export default function Footer() {
  return (
    <footer className="mt-auto bg-ink text-white/80">
      <div className="container-px grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-1">
          <Logo tone="light" />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/60">
            A 4-day scooter adventure from Puerto Princesa to El Nido. Scooters and lodging included —
            you just bring the curiosity.
          </p>
          <div className="mt-5 flex gap-3">
            <a
              href={`https://instagram.com/${brand.instagram}`}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="grid h-10 w-10 place-items-center rounded-full bg-white/10 transition hover:bg-brand-500"
            >
              <Instagram size={18} />
            </a>
            <a
              href="#"
              aria-label="Facebook"
              className="grid h-10 w-10 place-items-center rounded-full bg-white/10 transition hover:bg-brand-500"
            >
              <Facebook size={18} />
            </a>
            <a
              href={`mailto:${brand.email}`}
              aria-label="Email"
              className="grid h-10 w-10 place-items-center rounded-full bg-white/10 transition hover:bg-brand-500"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-widest text-white">Explore</h4>
          <ul className="mt-5 space-y-3 text-sm">
            <li><Link to="/tour" className="hover:text-brand-300">The Loop itinerary</Link></li>
            <li><Link to="/gallery" className="hover:text-brand-300">Gallery</Link></li>
            <li><Link to="/about" className="hover:text-brand-300">About us</Link></li>
            <li><Link to="/book" className="hover:text-brand-300">Book a trip</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-widest text-white">The Route</h4>
          <ul className="mt-5 space-y-3 text-sm">
            <li>Day 1 · Sabang</li>
            <li>Day 2 · Port Barton</li>
            <li>Day 3 · San Vicente</li>
            <li>Day 4 · El Nido</li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-widest text-white">Get in touch</h4>
          <ul className="mt-5 space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <Phone size={16} className="text-brand-300" /> {brand.phoneDisplay}
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} className="text-brand-300" /> {brand.email}
            </li>
            <li className="flex items-start gap-2">
              <MapPin size={16} className="mt-0.5 shrink-0 text-brand-300" /> Rizal Ave, Puerto Princesa,
              Palawan, PH
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-px flex flex-col items-center justify-between gap-3 py-6 text-xs text-white/50 sm:flex-row">
          <p>© {new Date().getFullYear()} Palawan Loop. All rights reserved.</p>
          <p className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <a href="#" className="hover:text-white/80">Privacy</a>
            <a href="#" className="hover:text-white/80">Terms</a>
            <span className="text-white/30">Demo site · imagery via Unsplash</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
