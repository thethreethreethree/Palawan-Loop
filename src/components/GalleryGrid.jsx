import SmartImage from './SmartImage.jsx'
import Reveal from './Reveal.jsx'
import { gallery } from '../data/images.js'

/** Masonry-ish photo wall. `limit` trims it for the homepage teaser. */
export default function GalleryGrid({ limit }) {
  const items = limit ? gallery.slice(0, limit) : gallery
  return (
    <div className="columns-2 gap-3 sm:gap-4 md:columns-3 lg:columns-4 [&>*]:mb-3 sm:[&>*]:mb-4">
      {items.map((g, i) => (
        <Reveal key={g.label + i} delay={(i % 4) * 0.05}>
          <SmartImage
            src={g.src}
            alt={g.label}
            label={g.label}
            className={`w-full rounded-2xl shadow-card ${
              i % 5 === 0 ? 'aspect-[3/4]' : i % 3 === 0 ? 'aspect-square' : 'aspect-[4/3]'
            }`}
            imgClassName="transition-transform duration-700 hover:scale-105"
          />
        </Reveal>
      ))}
    </div>
  )
}
