import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import SmartImage from './SmartImage.jsx'
import Reveal from './Reveal.jsx'
import { images } from '../data/images.js'
import { brand } from '../data/tour.js'

export default function CTASection() {
  return (
    <section className="container-px py-20 sm:py-28">
      <Reveal className="relative isolate overflow-hidden rounded-[2.5rem] px-6 py-16 text-center sm:px-16 sm:py-24">
        <div className="absolute inset-0 -z-10">
          <SmartImage
            src={images.ctaBanner}
            alt="Aerial Palawan beach"
            label="Your adventure awaits"
            className="h-full w-full"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-700/85 via-brand-600/80 to-ink/85" />
        </div>

        <h2 className="mx-auto max-w-2xl text-balance text-3xl font-extrabold text-white sm:text-5xl">
          Your scooter is fueled. Your crew is waiting.
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-white/85">
          Lock in your dates with a ${brand.deposit} deposit — free cancellation up to{' '}
          {brand.freeCancelDays} days before you ride.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link to="/book" className="btn-sunset px-8 py-3.5 text-base">
            Book the Loop <ArrowRight size={18} />
          </Link>
          <Link to="/tour" className="btn-outline px-8 py-3.5 text-base">
            Explore the route
          </Link>
        </div>
      </Reveal>
    </section>
  )
}
