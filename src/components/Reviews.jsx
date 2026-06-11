import { Quote } from 'lucide-react'
import Reveal from './Reveal.jsx'
import StarRating from './StarRating.jsx'
import { reviews } from '../data/tour.js'

function initials(name) {
  return name
    .split(' ')
    .map((w) => w[0])
    .slice(0, 2)
    .join('')
}

export default function Reviews() {
  return (
    <div className="columns-1 gap-6 sm:columns-2 lg:columns-3 [&>*]:mb-6">
      {reviews.map((r, i) => (
        <Reveal key={r.name} delay={(i % 3) * 0.06}>
          <figure className="card break-inside-avoid p-6">
            <Quote size={26} className="text-brand-200" />
            <blockquote className="mt-3 text-sm leading-relaxed text-ink/80">“{r.text}”</blockquote>
            <figcaption className="mt-5 flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-full bg-gradient-to-br from-brand-400 to-brand-600 text-sm font-bold text-white">
                {initials(r.name)}
              </span>
              <div className="flex-1">
                <div className="text-sm font-bold text-ink">{r.name}</div>
                <div className="text-xs text-ink/50">{r.country}</div>
              </div>
              <span className="chip">{r.package}</span>
            </figcaption>
            <div className="mt-3">
              <StarRating value={r.rating} />
            </div>
          </figure>
        </Reveal>
      ))}
    </div>
  )
}
