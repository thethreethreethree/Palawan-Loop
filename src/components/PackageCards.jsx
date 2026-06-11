import { Link } from 'react-router-dom'
import { Check, Star } from 'lucide-react'
import Reveal from './Reveal.jsx'
import { packages, brand } from '../data/tour.js'

export default function PackageCards() {
  return (
    <div className="grid items-start gap-6 lg:grid-cols-3">
      {packages.map((pkg, i) => {
        const featured = pkg.highlight
        return (
          <Reveal key={pkg.key} delay={i * 0.08}>
            <div
              className={`relative flex h-full flex-col rounded-3xl p-7 transition ${
                featured
                  ? 'bg-ink text-white shadow-soft ring-1 ring-ink lg:-mt-4 lg:pb-12'
                  : 'card text-ink hover:-translate-y-1 hover:shadow-soft'
              }`}
            >
              <span
                className={`inline-flex w-fit items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wide ${
                  featured ? 'bg-sunset-500 text-white' : 'bg-brand-50 text-brand-700'
                }`}
              >
                {featured && <Star size={12} className="fill-white" />}
                {pkg.badge}
              </span>

              <h3 className={`mt-4 text-2xl font-extrabold ${featured ? 'text-white' : 'text-ink'}`}>
                {pkg.name}
              </h3>
              <p className={`mt-1 text-sm ${featured ? 'text-white/70' : 'text-ink/60'}`}>
                {pkg.tagline}
              </p>

              <div className="mt-5 flex items-end gap-1.5">
                <span className={`text-sm ${featured ? 'text-white/60' : 'text-ink/50'}`}>from</span>
                <span className="font-display text-4xl font-extrabold">${pkg.price}</span>
                <span className={`mb-1 text-sm ${featured ? 'text-white/60' : 'text-ink/50'}`}>
                  / person
                </span>
              </div>

              <ul className="mt-6 flex-1 space-y-3">
                {pkg.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm">
                    <span
                      className={`mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full ${
                        featured ? 'bg-brand-500/30 text-brand-200' : 'bg-brand-100 text-brand-600'
                      }`}
                    >
                      <Check size={13} strokeWidth={3} />
                    </span>
                    <span className={featured ? 'text-white/85' : 'text-ink/75'}>{f}</span>
                  </li>
                ))}
              </ul>

              <p className={`mt-5 text-xs ${featured ? 'text-white/55' : 'text-ink/45'}`}>{pkg.note}</p>

              <Link
                to={`/book?package=${pkg.key}`}
                className={`mt-5 w-full ${featured ? 'btn-sunset' : 'btn-primary'}`}
              >
                Choose {pkg.name}
              </Link>
            </div>
          </Reveal>
        )
      })}
      <p className="col-span-full mt-2 text-center text-sm text-ink/50">
        All trips are {brand.durationLabel.toLowerCase()}, max {brand.groupMax} riders · Reserve with a $
        {brand.deposit} deposit · Free cancellation up to {brand.freeCancelDays} days before.
      </p>
    </div>
  )
}
