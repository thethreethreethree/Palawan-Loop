import { Link } from 'react-router-dom'
import { Sun, Moon, BedDouble, Navigation, ArrowRight } from 'lucide-react'
import SmartImage from './SmartImage.jsx'
import Reveal from './Reveal.jsx'
import { stops } from '../data/tour.js'

/** Full day-by-day timeline (Tour page). */
export default function ItineraryTimeline() {
  return (
    <div className="relative">
      {/* vertical spine */}
      <div className="absolute bottom-0 left-[27px] top-2 w-0.5 bg-gradient-to-b from-brand-300 via-brand-200 to-transparent md:left-1/2 md:-translate-x-1/2" />

      <div className="space-y-10 md:space-y-16">
        {stops.map((stop, idx) => (
          <Reveal key={stop.key}>
            <div
              className={`relative flex flex-col gap-6 md:flex-row md:items-center md:gap-10 ${
                idx % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* day node */}
              <div className="absolute left-0 top-0 z-10 md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2">
                <div className="grid h-14 w-14 place-items-center rounded-full bg-brand-500 text-white shadow-soft ring-4 ring-white">
                  <span className="text-center font-display text-xs font-bold leading-none">
                    DAY
                    <br />
                    <span className="text-lg">{stop.day}</span>
                  </span>
                </div>
              </div>

              {/* image */}
              <div className="pl-20 md:w-1/2 md:pl-0">
                <div className={`${idx % 2 === 1 ? 'md:pl-16' : 'md:pr-16'}`}>
                  <SmartImage
                    src={stop.image}
                    alt={`${stop.name}, Palawan`}
                    label={stop.name}
                    className="aspect-[4/3] w-full rounded-3xl shadow-card"
                  />
                </div>
              </div>

              {/* content */}
              <div className="pl-20 md:w-1/2 md:pl-0">
                <div className={`${idx % 2 === 1 ? 'md:pr-16' : 'md:pl-16'}`}>
                  <span className="chip mb-3">
                    <Navigation size={13} /> {stop.leg.fromTo} · {stop.leg.distanceKm} km · {stop.leg.rideTime}
                  </span>
                  <h3 className="text-2xl font-extrabold text-ink sm:text-3xl">{stop.name}</h3>
                  <p className="text-sm font-semibold uppercase tracking-wide text-brand-600">
                    {stop.region}
                  </p>
                  <p className="mt-3 text-ink/70">{stop.summary}</p>

                  <div className="mt-5 grid gap-4 sm:grid-cols-2">
                    <div className="rounded-2xl bg-brand-50/70 p-4 ring-1 ring-brand-100">
                      <p className="mb-2 flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide text-brand-700">
                        <Sun size={14} /> By day
                      </p>
                      <ul className="space-y-2">
                        {stop.byDay.map((a) => (
                          <li key={a.title} className="text-sm text-ink/75">
                            <span className="font-semibold text-ink">{a.title}.</span> {a.desc}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="rounded-2xl bg-ink/[0.03] p-4 ring-1 ring-ink/5">
                      <p className="mb-2 flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide text-ink/70">
                        <Moon size={14} /> By night
                      </p>
                      <ul className="space-y-2">
                        {stop.byNight.map((a) => (
                          <li key={a.title} className="text-sm text-ink/75">
                            <span className="font-semibold text-ink">{a.title}.</span> {a.desc}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm shadow-card ring-1 ring-black/5">
                    <BedDouble size={16} className="text-brand-500" />
                    <span className="font-semibold text-ink">{stop.lodging.name}</span>
                    <span className="text-ink/50">· {stop.lodging.type}</span>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  )
}

/** Compact 4-card preview (Home page). */
export function ItineraryPreview() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {stops.map((stop, i) => (
        <Reveal key={stop.key} delay={i * 0.08}>
          <Link
            to="/tour"
            className="group block overflow-hidden rounded-3xl bg-white shadow-card ring-1 ring-black/5 transition hover:-translate-y-1 hover:shadow-soft"
          >
            <div className="relative">
              <SmartImage
                src={stop.image}
                alt={stop.name}
                label={stop.name}
                className="aspect-[4/5] w-full"
                imgClassName="transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-brand-700 backdrop-blur">
                Day {stop.day}
              </div>
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/80 to-transparent p-4 pt-10">
                <h3 className="text-xl font-extrabold text-white">{stop.name}</h3>
                <p className="text-xs font-medium text-white/80">{stop.region}</p>
              </div>
            </div>
            <div className="flex items-center justify-between p-4">
              <p className="pr-2 text-sm text-ink/70">{stop.tagline}</p>
              <ArrowRight
                size={18}
                className="shrink-0 text-brand-500 transition-transform group-hover:translate-x-1"
              />
            </div>
          </Link>
        </Reveal>
      ))}
    </div>
  )
}
