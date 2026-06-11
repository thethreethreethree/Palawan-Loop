import { motion } from 'framer-motion'
import SmartImage from './SmartImage.jsx'

/** Compact hero for interior pages. */
export default function PageHero({ eyebrow, title, subtitle, image, label }) {
  return (
    <section className="relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <SmartImage src={image} alt={label || title} label={label || title} className="h-full w-full" loading="eager" />
        <div className="absolute inset-0 bg-gradient-to-br from-ink/75 via-ink/55 to-brand-900/70" />
      </div>
      <div className="container-px flex min-h-[42vh] flex-col justify-end pb-12 pt-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl text-white"
        >
          {eyebrow && (
            <span className="inline-flex rounded-full bg-white/15 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] ring-1 ring-white/25 backdrop-blur">
              {eyebrow}
            </span>
          )}
          <h1 className="mt-4 text-4xl font-extrabold leading-tight sm:text-5xl text-balance">{title}</h1>
          {subtitle && <p className="mt-4 max-w-xl text-lg text-white/85">{subtitle}</p>}
        </motion.div>
      </div>
    </section>
  )
}
