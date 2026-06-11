import { Link } from 'react-router-dom'
import { Heart, Leaf, Compass, Users, ArrowRight } from 'lucide-react'
import PageHero from '../components/PageHero.jsx'
import Section from '../components/Section.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import SmartImage from '../components/SmartImage.jsx'
import Reveal from '../components/Reveal.jsx'
import CTASection from '../components/CTASection.jsx'
import { images } from '../data/images.js'
import { stats } from '../data/tour.js'

const values = [
  {
    icon: Compass,
    title: 'Adventure first',
    desc: 'We design every day around the moment you’ll still be talking about in ten years — not the gift-shop stop.',
  },
  {
    icon: Users,
    title: 'Strangers to crew',
    desc: 'Small groups, shared dinners, group rides. The friendships are the souvenir nobody expects.',
  },
  {
    icon: Leaf,
    title: 'Local & low-impact',
    desc: 'Local guides, local homestays, local kitchens. The money you spend stays in Palawan.',
  },
  {
    icon: Heart,
    title: 'Safety, quietly',
    desc: 'Maintained bikes, real gear, a guide who knows the road. Adventure should feel wild, not reckless.',
  },
]

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="Our story"
        title="Born from one ridiculous group ride."
        subtitle="We did the loop with five friends and four rented scooters. We never really stopped."
        image={images.aboutTeam}
        label="The Palawan Loop crew"
      />

      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <span className="section-eyebrow">Why we exist</span>
            <h2 className="text-3xl font-extrabold text-ink sm:text-4xl text-balance">
              Palawan’s best stretch was hiding in plain sight.
            </h2>
            <div className="mt-5 space-y-4 text-ink/70">
              <p>
                Everyone flies into Puerto Princesa, sees the Underground River, then jumps a van
                straight to El Nido — sleeping through the best four days in the Philippines.
              </p>
              <p>
                Inspired by Vietnam’s legendary Ha Giang Loop, we built the same idea for Palawan: hand
                travellers a scooter, sort the stays and the permits, point them north, and let the
                road do the rest. Sabang’s jungle coast. Port Barton’s turtle bay. San Vicente’s endless
                beach. El Nido’s lagoons. One stop a day, one continuous adventure.
              </p>
              <p>
                Today a local team of guides runs the Loop year-round — and most riders still book solo
                and leave with a group chat that never goes quiet.
              </p>
            </div>
            <Link to="/tour" className="btn-primary mt-7">
              See the route <ArrowRight size={18} />
            </Link>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="grid grid-cols-2 gap-4">
              <SmartImage src={images.stops.elNido} alt="El Nido lagoons" label="El Nido" className="aspect-[3/4] rounded-3xl shadow-card" />
              <SmartImage src={images.scooter} alt="Scooter on the road" label="On the road" className="mt-8 aspect-[3/4] rounded-3xl shadow-card" />
            </div>
          </Reveal>
        </div>
      </Section>

      <Section className="bg-white">
        <SectionHeading eyebrow="What we stand for" title="Four things we never compromise on." />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={i * 0.08}>
              <div className="card h-full p-6">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-500 text-white shadow-soft">
                  <v.icon size={22} />
                </span>
                <h3 className="mt-4 text-lg font-extrabold text-ink">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/65">{v.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <Reveal className="card grid grid-cols-2 gap-6 px-6 py-10 sm:px-12 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-display text-4xl font-extrabold text-brand-600">{s.value}</div>
              <div className="mt-1 text-sm font-medium text-ink/55">{s.label}</div>
            </div>
          ))}
        </Reveal>
      </Section>

      <CTASection />
    </>
  )
}
