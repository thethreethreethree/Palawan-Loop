import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { faqs } from '../data/tour.js'

export default function FAQ() {
  const [open, setOpen] = useState(0)
  return (
    <div className="mx-auto max-w-3xl divide-y divide-slate-200/70 overflow-hidden rounded-3xl bg-white shadow-card ring-1 ring-black/5">
      {faqs.map((item, i) => {
        const isOpen = open === i
        return (
          <div key={item.q}>
            <button
              onClick={() => setOpen(isOpen ? -1 : i)}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition hover:bg-brand-50/40"
              aria-expanded={isOpen}
            >
              <span className="text-base font-semibold text-ink">{item.q}</span>
              <ChevronDown
                size={20}
                className={`shrink-0 text-brand-500 transition-transform duration-300 ${
                  isOpen ? 'rotate-180' : ''
                }`}
              />
            </button>
            <div
              className={`grid transition-all duration-300 ease-out ${
                isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
              }`}
            >
              <div className="overflow-hidden">
                <p className="px-6 pb-5 text-sm leading-relaxed text-ink/70">{item.a}</p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
