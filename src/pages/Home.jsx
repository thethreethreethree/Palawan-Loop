import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import Hero from '../components/Hero.jsx'
import TrustStrip from '../components/TrustStrip.jsx'
import Section from '../components/Section.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import WhyUs from '../components/WhyUs.jsx'
import RouteMap from '../components/RouteMap.jsx'
import { ItineraryPreview } from '../components/ItineraryTimeline.jsx'
import PackageCards from '../components/PackageCards.jsx'
import GalleryGrid from '../components/GalleryGrid.jsx'
import Reviews from '../components/Reviews.jsx'
import FAQ from '../components/FAQ.jsx'
import CTASection from '../components/CTASection.jsx'
import Reveal from '../components/Reveal.jsx'

export default function Home() {
  return (
    <>
      <Hero />
      <TrustStrip />

      {/* Why us */}
      <Section>
        <SectionHeading
          eyebrow="Why ride with us"
          title="Not a tour. A four-day adventure with a built-in crew."
          subtitle="We handle the scooters, the stays, the permits, and the local know-how. You just show up and ride."
        />
        <div className="mt-12">
          <WhyUs />
        </div>
      </Section>

      {/* Route map + preview */}
      <Section className="bg-white">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <span className="section-eyebrow">The Route</span>
            <h2 className="text-3xl font-extrabold text-ink sm:text-4xl text-balance">
              360 kilometres of coastline, four legendary stops.
            </h2>
            <p className="mt-4 text-ink/65">
              Starting in Puerto Princesa, the Loop threads north along Palawan’s wildest coast —
              jungle rivers, turtle bays, the longest beach in the country, and the lagoons of El
              Nido. Tap a pin to preview each day.
            </p>
            <Link to="/tour" className="btn-primary mt-7">
              See the full itinerary <ArrowRight size={18} />
            </Link>
          </Reveal>
          <Reveal delay={0.1}>
            <RouteMap height="h-[420px]" />
          </Reveal>
        </div>

        <div className="mt-14">
          <ItineraryPreview />
        </div>
      </Section>

      {/* Packages */}
      <Section id="packages">
        <SectionHeading
          eyebrow="Choose your ride"
          title="Pick how you want to ride the Loop."
          subtitle="Drive your own scooter, ride pillion with a local guide, or go fully private. Same route, same crew energy."
        />
        <div className="mt-12">
          <PackageCards />
        </div>
      </Section>

      {/* Gallery teaser */}
      <Section className="bg-white">
        <div className="flex flex-col items-end justify-between gap-4 sm:flex-row">
          <SectionHeading
            align="left"
            eyebrow="The feed"
            title="Postcards from the Loop"
            subtitle="Real moments from the road, the water, and the nights in between."
          />
          <Link to="/gallery" className="btn-ghost shrink-0">
            View gallery <ArrowRight size={16} />
          </Link>
        </div>
        <div className="mt-10">
          <GalleryGrid limit={8} />
        </div>
      </Section>

      {/* Reviews */}
      <Section>
        <SectionHeading
          eyebrow="Rider stories"
          title="You’ll arrive a stranger. You’ll leave with a crew."
          subtitle="4.9 out of 5 across 480+ reviews — here’s what riders say after the Loop."
        />
        <div className="mt-12">
          <Reviews />
        </div>
      </Section>

      {/* FAQ */}
      <Section className="bg-white">
        <SectionHeading eyebrow="Good to know" title="Questions, answered." />
        <div className="mt-12">
          <FAQ />
        </div>
      </Section>

      <CTASection />
    </>
  )
}
