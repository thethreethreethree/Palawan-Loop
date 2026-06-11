import { useMemo, useState } from 'react'
import { useSearchParams, useNavigate, Link } from 'react-router-dom'
import { Minus, Plus, Check, Calendar, MapPin, ShieldCheck, AlertCircle, Info } from 'lucide-react'
import Section from '../components/Section.jsx'
import Reveal from '../components/Reveal.jsx'
import { packages, brand } from '../data/tour.js'
import { useAuth } from '../context/AuthContext.jsx'
import { useBookings } from '../context/BookingContext.jsx'

const addOns = [
  { key: 'island-hop', label: 'El Nido island-hopping boat (Tour A)', price: 45, perPerson: true },
  { key: 'transfer', label: 'Airport pickup & welcome transfer', price: 15, perPerson: true },
  { key: 'gopro', label: 'GoPro rental for the trip', price: 25, perPerson: false },
]

const pickups = ['Puerto Princesa Airport', 'Puerto Princesa city hotel', 'Other (we’ll confirm)']

function todayISO() {
  const d = new Date()
  d.setDate(d.getDate() + 1) // earliest departure = tomorrow
  return d.toISOString().slice(0, 10)
}

export default function Booking() {
  const [params] = useSearchParams()
  const navigate = useNavigate()
  const { user } = useAuth()
  const { addBooking } = useBookings()

  const initialPkg = packages.find((p) => p.key === params.get('package'))?.key || 'easy-rider'

  const [pkgKey, setPkgKey] = useState(initialPkg)
  const [riders, setRiders] = useState(2)
  const [startDate, setStartDate] = useState('')
  const [selectedAddOns, setSelectedAddOns] = useState([])
  const [lead, setLead] = useState({
    name: user?.name || '',
    email: user?.email || '',
    phone: '',
    pickup: pickups[0],
    notes: '',
  })
  const [error, setError] = useState('')

  const pkg = packages.find((p) => p.key === pkgKey)

  const totals = useMemo(() => {
    const base = pkg.price * riders
    const addOnsTotal = addOns
      .filter((a) => selectedAddOns.includes(a.key))
      .reduce((sum, a) => sum + a.price * (a.perPerson ? riders : 1), 0)
    const total = base + addOnsTotal
    const deposit = brand.deposit * riders
    return { base, addOnsTotal, total, deposit, balance: total - deposit }
  }, [pkg, riders, selectedAddOns])

  function toggleAddOn(key) {
    setSelectedAddOns((cur) => (cur.includes(key) ? cur.filter((k) => k !== key) : [...cur, key]))
  }

  function handleSubmit(e) {
    e.preventDefault()
    setError('')
    if (!startDate) return setError('Please pick a start date for your Loop.')
    if (!lead.name.trim()) return setError('Please tell us your name.')
    if (!lead.email.trim()) return setError('Please add an email so we can confirm your booking.')

    const booking = addBooking({
      name: lead.name.trim(),
      email: lead.email.trim().toLowerCase(),
      phone: lead.phone.trim(),
      pickup: lead.pickup,
      notes: lead.notes.trim(),
      package: { key: pkg.key, name: pkg.name, price: pkg.price },
      riders,
      startDate,
      addOns: addOns.filter((a) => selectedAddOns.includes(a.key)).map((a) => a.label),
      subtotal: totals.base,
      total: totals.total,
      deposit: totals.deposit,
      balance: totals.balance,
    })
    navigate(`/booking/${booking.id}`)
  }

  return (
    <div className="bg-sand">
      <Section className="!pt-28">
        <div className="mx-auto max-w-2xl text-center">
          <span className="section-eyebrow justify-center">Book the Loop</span>
          <h1 className="text-3xl font-extrabold text-ink sm:text-4xl text-balance">
            Reserve now, pay later.
          </h1>
          <p className="mt-3 text-ink/60">
            Lock your dates with a ${brand.deposit}/rider deposit. Free cancellation up to{' '}
            {brand.freeCancelDays} days before departure.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mt-12 grid gap-8 lg:grid-cols-[1fr_380px]">
          {/* Left: form */}
          <div className="space-y-8">
            {/* Ride style */}
            <Reveal className="card p-6 sm:p-7">
              <h2 className="text-lg font-extrabold text-ink">1 · Choose your ride</h2>
              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                {packages.map((p) => {
                  const active = p.key === pkgKey
                  return (
                    <button
                      type="button"
                      key={p.key}
                      onClick={() => setPkgKey(p.key)}
                      className={`relative rounded-2xl border-2 p-4 text-left transition ${
                        active
                          ? 'border-brand-500 bg-brand-50/60 shadow-glow'
                          : 'border-slate-200 hover:border-brand-200'
                      }`}
                    >
                      {active && (
                        <span className="absolute right-3 top-3 grid h-5 w-5 place-items-center rounded-full bg-brand-500 text-white">
                          <Check size={13} strokeWidth={3} />
                        </span>
                      )}
                      <p className="text-xs font-bold uppercase tracking-wide text-brand-600">
                        {p.badge}
                      </p>
                      <p className="mt-1 font-extrabold text-ink">{p.name}</p>
                      <p className="mt-1 text-sm text-ink/55">
                        from <span className="font-bold text-ink">${p.price}</span>/pp
                      </p>
                    </button>
                  )
                })}
              </div>
              <p className="mt-3 flex items-start gap-1.5 text-xs text-ink/50">
                <Info size={14} className="mt-0.5 shrink-0" /> {pkg.note}
              </p>
            </Reveal>

            {/* Trip details */}
            <Reveal className="card p-6 sm:p-7">
              <h2 className="text-lg font-extrabold text-ink">2 · Trip details</h2>
              <div className="mt-4 grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="field-label" htmlFor="date">Start date</label>
                  <div className="relative">
                    <Calendar size={18} className="pointer-events-none absolute left-3.5 top-3.5 text-ink/30" />
                    <input
                      id="date"
                      type="date"
                      min={todayISO()}
                      value={startDate}
                      onChange={(e) => setStartDate(e.target.value)}
                      className="field-input pl-11"
                    />
                  </div>
                </div>
                <div>
                  <label className="field-label">Riders</label>
                  <div className="flex items-center justify-between rounded-xl border border-slate-200 bg-white px-3 py-2">
                    <button
                      type="button"
                      onClick={() => setRiders((r) => Math.max(1, r - 1))}
                      className="grid h-9 w-9 place-items-center rounded-lg bg-brand-50 text-brand-600 transition hover:bg-brand-100 disabled:opacity-40"
                      disabled={riders <= 1}
                      aria-label="Fewer riders"
                    >
                      <Minus size={18} />
                    </button>
                    <span className="font-display text-xl font-extrabold text-ink">{riders}</span>
                    <button
                      type="button"
                      onClick={() => setRiders((r) => Math.min(brand.groupMax, r + 1))}
                      className="grid h-9 w-9 place-items-center rounded-lg bg-brand-50 text-brand-600 transition hover:bg-brand-100 disabled:opacity-40"
                      disabled={riders >= brand.groupMax}
                      aria-label="More riders"
                    >
                      <Plus size={18} />
                    </button>
                  </div>
                  <p className="mt-1.5 text-xs text-ink/45">Max {brand.groupMax} per departure.</p>
                </div>
              </div>
            </Reveal>

            {/* Add-ons */}
            <Reveal className="card p-6 sm:p-7">
              <h2 className="text-lg font-extrabold text-ink">3 · Add-ons <span className="text-sm font-medium text-ink/40">(optional)</span></h2>
              <div className="mt-4 space-y-3">
                {addOns.map((a) => {
                  const checked = selectedAddOns.includes(a.key)
                  return (
                    <button
                      type="button"
                      key={a.key}
                      onClick={() => toggleAddOn(a.key)}
                      className={`flex w-full items-center justify-between gap-3 rounded-2xl border-2 px-4 py-3 text-left transition ${
                        checked ? 'border-brand-500 bg-brand-50/60' : 'border-slate-200 hover:border-brand-200'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span
                          className={`grid h-6 w-6 shrink-0 place-items-center rounded-md border-2 ${
                            checked ? 'border-brand-500 bg-brand-500 text-white' : 'border-slate-300'
                          }`}
                        >
                          {checked && <Check size={14} strokeWidth={3} />}
                        </span>
                        <span className="text-sm font-medium text-ink">{a.label}</span>
                      </div>
                      <span className="shrink-0 text-sm font-bold text-ink">
                        +${a.price}
                        <span className="text-xs font-normal text-ink/45">{a.perPerson ? '/pp' : ''}</span>
                      </span>
                    </button>
                  )
                })}
              </div>
            </Reveal>

            {/* Lead details */}
            <Reveal className="card p-6 sm:p-7">
              <h2 className="text-lg font-extrabold text-ink">4 · Your details</h2>
              <div className="mt-4 grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="field-label" htmlFor="name">Full name</label>
                  <input id="name" type="text" value={lead.name} onChange={(e) => setLead({ ...lead, name: e.target.value })} className="field-input" placeholder="Alex Rider" />
                </div>
                <div>
                  <label className="field-label" htmlFor="bemail">Email</label>
                  <input id="bemail" type="email" value={lead.email} onChange={(e) => setLead({ ...lead, email: e.target.value })} className="field-input" placeholder="you@email.com" />
                </div>
                <div>
                  <label className="field-label" htmlFor="phone">Phone / WhatsApp</label>
                  <input id="phone" type="tel" value={lead.phone} onChange={(e) => setLead({ ...lead, phone: e.target.value })} className="field-input" placeholder="+1 555 0142" />
                </div>
                <div>
                  <label className="field-label" htmlFor="pickup">Pickup location</label>
                  <div className="relative">
                    <MapPin size={18} className="pointer-events-none absolute left-3.5 top-3.5 text-ink/30" />
                    <select id="pickup" value={lead.pickup} onChange={(e) => setLead({ ...lead, pickup: e.target.value })} className="field-input appearance-none pl-11">
                      {pickups.map((p) => (
                        <option key={p}>{p}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label className="field-label" htmlFor="notes">Anything we should know?</label>
                  <textarea id="notes" rows={3} value={lead.notes} onChange={(e) => setLead({ ...lead, notes: e.target.value })} className="field-input resize-none" placeholder="Dietary needs, riding experience, celebrating something…" />
                </div>
              </div>
              {!user && (
                <p className="mt-4 text-xs text-ink/50">
                  Booking as a guest.{' '}
                  <Link to="/signup" state={{ from: '/book' }} className="font-semibold text-brand-600 hover:underline">
                    Create an account
                  </Link>{' '}
                  to track all your trips in one place.
                </p>
              )}
            </Reveal>
          </div>

          {/* Right: sticky summary */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            <div className="card overflow-hidden">
              <div className="bg-brand-500 px-6 py-5 text-white">
                <p className="text-xs font-semibold uppercase tracking-wide text-white/70">Your Loop</p>
                <p className="font-display text-xl font-extrabold">{pkg.name}</p>
                <p className="text-sm text-white/80">{brand.durationLabel} · Puerto Princesa → El Nido</p>
              </div>
              <div className="space-y-3 p-6">
                <Row label={`${pkg.name} × ${riders}`} value={`$${totals.base}`} />
                {addOns
                  .filter((a) => selectedAddOns.includes(a.key))
                  .map((a) => (
                    <Row
                      key={a.key}
                      muted
                      label={`${a.label}${a.perPerson ? ` × ${riders}` : ''}`}
                      value={`$${a.price * (a.perPerson ? riders : 1)}`}
                    />
                  ))}
                <div className="border-t border-slate-100 pt-3">
                  <Row strong label="Trip total" value={`$${totals.total}`} />
                </div>
                <div className="rounded-2xl bg-brand-50 p-4">
                  <Row strong label="Deposit due now" value={`$${totals.deposit}`} />
                  <Row muted label="Balance before departure" value={`$${totals.balance}`} />
                </div>

                {error && (
                  <div className="flex items-center gap-2 rounded-xl bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
                    <AlertCircle size={16} /> {error}
                  </div>
                )}

                <button type="submit" className="btn-sunset w-full !py-3.5">
                  Reserve now — pay later
                </button>
                <p className="flex items-center justify-center gap-1.5 text-center text-xs text-ink/50">
                  <ShieldCheck size={14} className="text-brand-500" /> Free cancellation up to{' '}
                  {brand.freeCancelDays} days before.
                </p>
              </div>
            </div>
          </div>
        </form>
      </Section>
    </div>
  )
}

function Row({ label, value, strong, muted }) {
  return (
    <div className="flex items-center justify-between gap-3 text-sm">
      <span className={strong ? 'font-bold text-ink' : muted ? 'text-ink/55' : 'text-ink/75'}>
        {label}
      </span>
      <span className={strong ? 'font-extrabold text-ink' : muted ? 'text-ink/55' : 'font-semibold text-ink'}>
        {value}
      </span>
    </div>
  )
}
