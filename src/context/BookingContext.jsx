import { createContext, useContext, useEffect, useMemo, useState } from 'react'

/**
 * DEMO BOOKING STORE.
 * Bookings persist to localStorage so the flow feels real end-to-end. Swap for
 * a real bookings API when the backend lands; the {addBooking, bookingsFor}
 * surface is intentionally minimal.
 */
const BookingContext = createContext(null)
const BOOKINGS_KEY = 'pl_bookings'

function readBookings() {
  try {
    return JSON.parse(localStorage.getItem(BOOKINGS_KEY)) || []
  } catch {
    return []
  }
}

// Short human-friendly reference, e.g. PL-7F3K2. Deterministic on input so the
// demo never depends on Math.random/Date being available at module scope.
function makeRef(seed) {
  const alphabet = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'
  let hash = 0
  for (let i = 0; i < seed.length; i += 1) hash = (hash * 31 + seed.charCodeAt(i)) >>> 0
  let ref = ''
  for (let i = 0; i < 5; i += 1) {
    ref += alphabet[hash % alphabet.length]
    hash = Math.floor(hash / alphabet.length) + (i + 1) * 7
  }
  return `PL-${ref}`
}

export function BookingProvider({ children }) {
  const [bookings, setBookings] = useState([])

  useEffect(() => {
    setBookings(readBookings())
  }, [])

  function addBooking(data) {
    const createdAt = new Date().toISOString()
    const id = makeRef(`${data.email || 'guest'}|${createdAt}|${bookings.length}`)
    const booking = { id, createdAt, status: 'Reserved', ...data }
    const next = [booking, ...readBookings()]
    localStorage.setItem(BOOKINGS_KEY, JSON.stringify(next))
    setBookings(next)
    return booking
  }

  function bookingsFor(email) {
    if (!email) return []
    return bookings.filter((b) => (b.email || '').toLowerCase() === email.toLowerCase())
  }

  function getBooking(id) {
    return readBookings().find((b) => b.id === id) || null
  }

  const value = useMemo(() => ({ bookings, addBooking, bookingsFor, getBooking }), [bookings])
  return <BookingContext.Provider value={value}>{children}</BookingContext.Provider>
}

export function useBookings() {
  const ctx = useContext(BookingContext)
  if (!ctx) throw new Error('useBookings must be used within a BookingProvider')
  return ctx
}
