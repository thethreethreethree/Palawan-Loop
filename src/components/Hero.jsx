import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Star, MapPin } from 'lucide-react'
import SmartImage from './SmartImage.jsx'
import { images } from '../data/images.js'
import { brand } from '../data/tour.js'

const routeChips = ['Puerto Princesa', 'Sabang', 'Port Barton', 'San Vicente', 'El Nido']

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      {/* Background photo */}
      <div className="absolute inset-0 -z-10">
        <SmartImage
          src={images.hero}
          alt="Aerial view of turquoise Palawan lagoons and limestone cliffs"
          label="Palawan coastline"
          className="h-full w-full"
          loading="eager"
        />
        <div className="hero-overlay absolute inset-0" />
      </div>

      <div className="container-px flex min-h-[88vh] flex-col justify-end pb-16 pt-28 sm:min-h-[86vh]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl text-white"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] backdrop-blur ring-1 ring-white/25">
            {brand.durationLabel} · Scooter + Lodging Included
          </span>

          <h1 className="mt-5 text-balance text-4xl font-extrabold leading-[1.05] sm:text-6xl lg:text-7xl">
            Ride the islands from <span className="text-brand-300">Puerto Princesa</span> to{' '}
            <span className="text-sunset-400">El Nido</span>.
          </h1>

          <p className="mt-5 max-w-xl text-lg text-white/85 sm:text-xl">
            Four days, four stops, one unforgettable crew. We hand you a scooter and the keys to the
            wildest stretch of Palawan — you bring the curiosity.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link to="/book" className="btn-sunset px-7 py-3.5 text-base">
              Book the Loop <ArrowRight size={18} />
            </Link>
            <Link to="/tour" className="btn-outline px-7 py-3.5 text-base">
              See the itinerary
            </Link>
          </div>

          {/* Social proof */}
          <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {['M', 'L', 'A', 'J'].map((c) => (
                  <span
                    key={c}
                    className="grid h-8 w-8 place-items-center rounded-full bg-brand-500 text-xs font-bold text-white ring-2 ring-white/80"
                  >
                    {c}
                  </span>
                ))}
              </div>
              <span className="font-semibold text-white/90">2,400+ riders</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Star size={16} className="fill-sunset-400 text-sunset-400" />
              <span className="font-semibold text-white/90">4.9/5 · 480+ reviews</span>
            </div>
          </div>
        </motion.div>

        {/* Route ribbon */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-10 flex flex-wrap items-center gap-x-2 gap-y-2"
        >
          {routeChips.map((c, i) => (
            <div key={c} className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur ring-1 ring-white/20">
                {i === 0 && <MapPin size={13} className="text-brand-300" />}
                {c}
              </span>
              {i < routeChips.length - 1 && <span className="text-white/40">→</span>}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
