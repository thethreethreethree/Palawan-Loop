import { Link } from 'react-router-dom'
import { ArrowRight, Clock, Bike, MapPin, Route } from 'lucide-react'
import PageHero from '../components/PageHero.jsx'
import Section from '../components/Section.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import RouteMap from '../components/RouteMap.jsx'
import ItineraryTimeline from '../components/ItineraryTimeline.jsx'
import InclusionsGrid from '../components/InclusionsGrid.jsx'
import PackageCards from '../components/PackageCards.jsx'
import FAQ from '../components/FAQ.jsx'
import CTASection from '../components/CTASection.jsx'
import Reveal from '../components/Reveal.jsx'
import { images } from '../data/images.js'
import { brand } from '../data/tour.js'

const quickFacts = [
  { icon: Clock, label: 'Duration', value: brand.durationLabel },
  { icon: Route, label: 'Distance', value: '≈ 360 km' },
  { icon: Bike, label: 'Ride style', value: 'Self-drive or guided' },
  { icon: MapPin, label: 'Route', value: 'Puerto Princesa → El Nido' },
]

export default function Tour() {
  return (
    <>
      <PageHero
        eyebrow="The Itinerary"
        title="The Palawan Loop, day by day."
        subtitle="Four days, four islands stops, one continuous adventure from Puerto Princesa to El Nido."
        image={images.heroAlt}
        label="The Palawan Loop"
      />

      {/* Quick facts */}
      <section className="relative z-10 -mt-10">
        <div className="container-px">
          <Reveal className="card grid grid-cols-2 gap-4 px-6 py-7 sm:px-10 md:grid-cols-4">
            {quickFacts.map((f) => (
              <div key={f.label} className="flex items-center gap-3">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-brand-50 text-brand-600">
                  <f.icon size={20} />
                </span>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wide text-ink/45">
                    {f.label}
                  </div>
                  <div className="text-sm font-bold text-ink">{f.value}</div>
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Map */}
      <Section>
        <SectionHeading
          eyebrow="The Route"
          title="Follow the line north."
          subtitle="Puerto Princesa is your gateway. From there it’s one scenic leg a day — tap any pin for a preview."
        />
        <div className="mx-auto mt-10 max-w-5xl">
          <RouteMap height="h-[520px]" />
        </div>
      </Section>

      {/* Day by day */}
      <Section className="bg-white">
        <SectionHeading
          eyebrow="Day by day"
          title="Every day a new island, every night a new story."
        />
        <div className="mt-14">
          <ItineraryTimeline />
        </div>
      </Section>

      {/* Inclusions */}
      <Section>
        <SectionHeading
          eyebrow="What you get"
          title="One price covers the whole ride."
          subtitle="Scooter, fuel, lodging, breakfasts, gear, permits, and your guide. Here’s exactly where the line sits."
        />
        <div className="mt-12">
          <InclusionsGrid />
        </div>
      </Section>

      {/* Packages */}
      <Section className="bg-white">
        <SectionHeading eyebrow="Choose your ride" title="Three ways to ride the Loop." />
        <div className="mt-12">
          <PackageCards />
        </div>
      </Section>

      {/* FAQ */}
      <Section>
        <SectionHeading eyebrow="Good to know" title="Questions, answered." />
        <div className="mt-12">
          <FAQ />
        </div>
        <div className="mt-10 text-center">
          <Link to="/book" className="btn-primary px-8 py-3.5 text-base">
            Book the Loop <ArrowRight size={18} />
          </Link>
        </div>
      </Section>

      <CTASection />
    </>
  )
}
