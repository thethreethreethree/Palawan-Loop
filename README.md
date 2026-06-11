# Palawan Loop 🛵

Tour-agency website for **Palawan Loop** — a 4-day scooter adventure from
Puerto Princesa to El Nido (Sabang → Port Barton → San Vicente → El Nido).
Modelled on Vietnam's Ha Giang Loop tour operators. Sky-blue brand, adventurous
/ social tone, mobile-first.

## Quick start

```bash
npm install
npm run dev      # http://localhost:5173 (opens automatically)
npm run build    # production build → dist/
npm run preview  # preview the production build
```

Requires Node 18+ (built and tested on Node 24).

## Tech

- **React 18 + Vite** (JavaScript / JSX)
- **Tailwind CSS** — brand palette in `tailwind.config.js`
- **react-router-dom** — multi-page routing
- **react-leaflet + Leaflet** — the interactive route map
- **framer-motion** — scroll reveals & hero motion
- **lucide-react** — icons

## What's here

| Area | Where |
|---|---|
| Pages | `src/pages/` (Home, Tour, Gallery, About, Booking, Confirmation, Login, Signup, Dashboard, 404) |
| Reusable UI | `src/components/` |
| **All tour content** (itinerary, packages, prices, inclusions, reviews, FAQ) | `src/data/tour.js` |
| **All photo URLs** (one-file swap for licensed photos) | `src/data/images.js` |
| Brand logo (backpacker on blue scooter, SVG) | `src/components/Logo.jsx`, `public/favicon.svg` |
| Auth + bookings (demo, localStorage) | `src/context/` |
| Lodging amenity icons | `public/amenities/` |

## Features

- Hero, trust strip, "why us", **interactive Leaflet route map**, day-by-day
  itinerary (day + night activities per stop), three pricing tiers
  (Self-Drive / Easy Rider / Private), inclusions ✓/✗ grid, gallery, reviews,
  FAQ, sticky WhatsApp button.
- **Signup / login** and a **booking flow** with live price summary, add-ons,
  and a confirmation page → all viewable in a **My Trips** dashboard.

## Honest notes (this is a front-end demo)

- **Auth & bookings are local-only.** Accounts and bookings live in the
  browser's `localStorage`; passwords are stored in plain text. This is a
  prototype, **not** real security. The `src/context/` providers are written so
  a real backend (hashed auth, persisted bookings, payments) drops in behind the
  same small API.
- **No payment is taken** and no email is sent on booking — the flow is
  simulated end-to-end.
- **Photos are Unsplash hotlinks** (free under the Unsplash License) and need
  internet to load; if any fail they degrade to an on-brand placeholder. Swap
  them for licensed photography in `src/data/images.js`.
- **Prices, itinerary times, and lodging names are illustrative**, adapted from
  real Ha Giang operator pricing and real Palawan attractions — verify before
  going live.
