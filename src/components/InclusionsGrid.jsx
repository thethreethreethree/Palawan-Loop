import { Check, X } from 'lucide-react'
import Reveal from './Reveal.jsx'
import { inclusions, exclusions, amenities } from '../data/tour.js'

export default function InclusionsGrid() {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <Reveal className="card p-7">
        <h3 className="flex items-center gap-2 text-xl font-extrabold text-ink">
          <span className="grid h-7 w-7 place-items-center rounded-full bg-brand-100 text-brand-600">
            <Check size={16} strokeWidth={3} />
          </span>
          What’s included
        </h3>
        <ul className="mt-5 grid gap-3 sm:grid-cols-2">
          {inclusions.map((item) => (
            <li key={item} className="flex items-start gap-2.5 text-sm text-ink/80">
              <Check size={18} className="mt-0.5 shrink-0 text-brand-500" strokeWidth={2.5} />
              {item}
            </li>
          ))}
        </ul>
      </Reveal>

      <Reveal delay={0.08} className="card p-7">
        <h3 className="flex items-center gap-2 text-xl font-extrabold text-ink">
          <span className="grid h-7 w-7 place-items-center rounded-full bg-slate-100 text-slate-400">
            <X size={16} strokeWidth={3} />
          </span>
          Not included
        </h3>
        <ul className="mt-5 grid gap-3 sm:grid-cols-2">
          {exclusions.map((item) => (
            <li key={item} className="flex items-start gap-2.5 text-sm text-ink/60">
              <X size={18} className="mt-0.5 shrink-0 text-slate-300" strokeWidth={2.5} />
              {item}
            </li>
          ))}
        </ul>

        <div className="mt-6 border-t border-slate-100 pt-5">
          <p className="mb-3 text-xs font-bold uppercase tracking-wide text-ink/50">
            Typical lodging amenities
          </p>
          <div className="flex flex-wrap gap-2">
            {amenities.map((a) => (
              <span
                key={a.label}
                className="inline-flex items-center gap-1.5 rounded-full bg-brand-50 py-1 pl-1 pr-3 text-xs font-semibold text-brand-800 ring-1 ring-inset ring-brand-100"
              >
                <img
                  src={`/amenities/${encodeURIComponent(a.icon)}`}
                  alt=""
                  className="h-5 w-5 object-contain"
                  loading="lazy"
                />
                {a.label}
              </span>
            ))}
          </div>
        </div>
      </Reveal>
    </div>
  )
}
