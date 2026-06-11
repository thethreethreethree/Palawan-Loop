import { Link } from 'react-router-dom'
import { Calendar, Users, Bike, ArrowRight, Plus, Ticket } from 'lucide-react'
import Section from '../components/Section.jsx'
import { useAuth } from '../context/AuthContext.jsx'
import { useBookings } from '../context/BookingContext.jsx'

function formatDate(iso) {
  if (!iso) return 'Dates flexible'
  try {
    return new Date(iso + 'T00:00:00').toLocaleDateString(undefined, {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    })
  } catch {
    return iso
  }
}

export default function Dashboard() {
  const { user } = useAuth()
  const { bookingsFor } = useBookings()
  const trips = bookingsFor(user.email)

  return (
    <div className="bg-sand">
      <Section>
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <span className="section-eyebrow">My Trips</span>
            <h1 className="text-3xl font-extrabold text-ink sm:text-4xl">
              Hey {user.name.split(' ')[0]} 👋
            </h1>
            <p className="mt-2 text-ink/60">
              {trips.length
                ? `You’ve got ${trips.length} ${trips.length === 1 ? 'trip' : 'trips'} on the books.`
                : 'No trips yet — the Loop is calling.'}
            </p>
          </div>
          <Link to="/book" className="btn-primary">
            <Plus size={18} /> New booking
          </Link>
        </div>

        {trips.length === 0 ? (
          <div className="mt-10 grid place-items-center rounded-3xl border-2 border-dashed border-brand-200 bg-white/60 px-6 py-20 text-center">
            <Ticket size={40} className="text-brand-300" />
            <h2 className="mt-4 text-xl font-extrabold text-ink">Your next adventure starts here.</h2>
            <p className="mx-auto mt-2 max-w-sm text-ink/60">
              Reserve the 4-day Palawan Loop with a $50 deposit and your trip will show up right here.
            </p>
            <Link to="/book" className="btn-sunset mt-6">
              Book the Loop <ArrowRight size={18} />
            </Link>
          </div>
        ) : (
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {trips.map((t) => (
              <div key={t.id} className="card overflow-hidden">
                <div className="flex items-center justify-between bg-brand-500 px-6 py-4 text-white">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-white/70">
                      Booking ref
                    </p>
                    <p className="font-display text-lg font-extrabold">{t.id}</p>
                  </div>
                  <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-bold">{t.status}</span>
                </div>
                <div className="space-y-3 p-6">
                  <div className="flex items-center gap-2 text-sm text-ink/75">
                    <Bike size={16} className="text-brand-500" />
                    <span className="font-semibold text-ink">{t.package?.name}</span> · Palawan Loop
                  </div>
                  <div className="flex items-center gap-2 text-sm text-ink/75">
                    <Calendar size={16} className="text-brand-500" /> {formatDate(t.startDate)}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-ink/75">
                    <Users size={16} className="text-brand-500" /> {t.riders}{' '}
                    {t.riders === 1 ? 'rider' : 'riders'}
                  </div>
                  <div className="flex items-center justify-between border-t border-slate-100 pt-3">
                    <span className="text-sm text-ink/60">
                      Deposit paid <span className="font-semibold text-ink">${t.deposit}</span> of $
                      {t.total}
                    </span>
                    <Link
                      to={`/booking/${t.id}`}
                      className="inline-flex items-center gap-1 text-sm font-semibold text-brand-600 hover:underline"
                    >
                      Details <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </Section>
    </div>
  )
}
