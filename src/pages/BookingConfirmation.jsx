import { useParams, Link } from 'react-router-dom'
import { CheckCircle2, Calendar, Users, Bike, MapPin, Mail, ArrowRight, LayoutDashboard } from 'lucide-react'
import Section from '../components/Section.jsx'
import { useBookings } from '../context/BookingContext.jsx'
import { useAuth } from '../context/AuthContext.jsx'
import { brand } from '../data/tour.js'

function formatDate(iso) {
  if (!iso) return 'Dates flexible'
  try {
    return new Date(iso + 'T00:00:00').toLocaleDateString(undefined, {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    })
  } catch {
    return iso
  }
}

const nextSteps = [
  'A confirmation email is on its way with your full itinerary.',
  'Your guide will WhatsApp you 3 days before to sort pickup and bike sizing.',
  'Pay the balance any time before departure — no rush.',
]

export default function BookingConfirmation() {
  const { id } = useParams()
  const { getBooking } = useBookings()
  const { user } = useAuth()
  const booking = getBooking(id)

  if (!booking) {
    return (
      <Section className="!pt-28">
        <div className="mx-auto max-w-md text-center">
          <h1 className="text-2xl font-extrabold text-ink">Booking not found.</h1>
          <p className="mt-2 text-ink/60">We couldn’t find a booking with reference {id}.</p>
          <Link to="/book" className="btn-primary mt-6">Start a new booking</Link>
        </div>
      </Section>
    )
  }

  return (
    <div className="bg-sand">
      <Section className="!pt-28">
        <div className="mx-auto max-w-2xl">
          <div className="text-center">
            <span className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-brand-100 text-brand-600">
              <CheckCircle2 size={36} />
            </span>
            <h1 className="mt-5 text-3xl font-extrabold text-ink sm:text-4xl text-balance">
              You’re on the Loop, {booking.name.split(' ')[0]}! 🛵
            </h1>
            <p className="mt-3 text-ink/60">
              Your spot is reserved. Booking reference{' '}
              <span className="font-bold text-brand-600">{booking.id}</span>.
            </p>
          </div>

          <div className="card mt-10 overflow-hidden">
            <div className="flex items-center justify-between bg-brand-500 px-6 py-5 text-white">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-white/70">Palawan Loop</p>
                <p className="font-display text-xl font-extrabold">{booking.package?.name}</p>
              </div>
              <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-bold">{booking.status}</span>
            </div>

            <div className="grid gap-4 p-6 sm:grid-cols-2">
              <Detail icon={Calendar} label="Start date" value={formatDate(booking.startDate)} />
              <Detail icon={Users} label="Riders" value={`${booking.riders} ${booking.riders === 1 ? 'rider' : 'riders'}`} />
              <Detail icon={Bike} label="Ride style" value={booking.package?.name} />
              <Detail icon={MapPin} label="Pickup" value={booking.pickup} />
            </div>

            {booking.addOns?.length > 0 && (
              <div className="border-t border-slate-100 px-6 py-4">
                <p className="text-xs font-bold uppercase tracking-wide text-ink/45">Add-ons</p>
                <ul className="mt-2 space-y-1">
                  {booking.addOns.map((a) => (
                    <li key={a} className="text-sm text-ink/70">• {a}</li>
                  ))}
                </ul>
              </div>
            )}

            <div className="border-t border-slate-100 bg-slate-50/60 px-6 py-5">
              <div className="flex items-center justify-between text-sm">
                <span className="text-ink/60">Trip total</span>
                <span className="font-bold text-ink">${booking.total}</span>
              </div>
              <div className="mt-1 flex items-center justify-between text-sm">
                <span className="font-semibold text-brand-700">Deposit paid today</span>
                <span className="font-extrabold text-brand-700">${booking.deposit}</span>
              </div>
              <div className="mt-1 flex items-center justify-between text-sm">
                <span className="text-ink/60">Balance before departure</span>
                <span className="font-semibold text-ink">${booking.balance}</span>
              </div>
            </div>
          </div>

          {/* Next steps */}
          <div className="mt-8 rounded-3xl bg-white p-6 shadow-card ring-1 ring-black/5">
            <h2 className="flex items-center gap-2 text-lg font-extrabold text-ink">
              <Mail size={18} className="text-brand-500" /> What happens next
            </h2>
            <ol className="mt-4 space-y-3">
              {nextSteps.map((s, i) => (
                <li key={i} className="flex gap-3 text-sm text-ink/75">
                  <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-brand-100 text-xs font-bold text-brand-700">
                    {i + 1}
                  </span>
                  {s}
                </li>
              ))}
            </ol>
          </div>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            {user ? (
              <Link to="/dashboard" className="btn-primary">
                <LayoutDashboard size={18} /> View my trips
              </Link>
            ) : (
              <Link to="/signup" state={{ from: '/dashboard' }} className="btn-primary">
                Create an account to track it <ArrowRight size={18} />
              </Link>
            )}
            <Link to="/tour" className="btn-ghost">Review the itinerary</Link>
          </div>
          <p className="mt-6 text-center text-xs text-ink/40">
            Demo booking — no payment was taken and no email was sent. Reach us any time at {brand.email}.
          </p>
        </div>
      </Section>
    </div>
  )
}

function Detail({ icon: Icon, label, value }) {
  return (
    <div className="flex items-center gap-3">
      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-600">
        <Icon size={18} />
      </span>
      <div>
        <p className="text-xs font-semibold uppercase tracking-wide text-ink/45">{label}</p>
        <p className="text-sm font-bold text-ink">{value}</p>
      </div>
    </div>
  )
}
