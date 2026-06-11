import { Bike, Users, ShieldCheck, CalendarCheck } from 'lucide-react'
import Reveal from './Reveal.jsx'
import { whyUs } from '../data/tour.js'

const iconMap = { Bike, Users, ShieldCheck, CalendarCheck }

export default function WhyUs() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {whyUs.map((item, i) => {
        const Icon = iconMap[item.icon] || Bike
        return (
          <Reveal key={item.title} delay={i * 0.08}>
            <div className="card h-full p-6 transition hover:-translate-y-1 hover:shadow-soft">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-500 text-white shadow-soft">
                <Icon size={22} />
              </span>
              <h3 className="mt-4 text-lg font-extrabold text-ink">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/65">{item.desc}</p>
            </div>
          </Reveal>
        )
      })}
    </div>
  )
}
