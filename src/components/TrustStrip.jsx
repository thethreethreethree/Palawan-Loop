import Reveal from './Reveal.jsx'
import { stats } from '../data/tour.js'

export default function TrustStrip() {
  return (
    <section className="relative z-10 -mt-10">
      <div className="container-px">
        <Reveal className="card grid grid-cols-2 gap-6 px-6 py-8 sm:px-10 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-display text-3xl font-extrabold text-brand-600 sm:text-4xl">
                {s.value}
              </div>
              <div className="mt-1 text-sm font-medium text-ink/55">{s.label}</div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
