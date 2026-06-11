import { images } from './images.js'

/** Brand-wide constants. */
export const brand = {
  name: 'Palawan Loop',
  tagline: 'Ride the Islands',
  phoneDisplay: '+63 917 555 0142',
  whatsapp: '639175550142',
  email: 'hey@palawanloop.com',
  instagram: 'palawanloop',
  startCity: 'Puerto Princesa',
  endCity: 'El Nido',
  durationLabel: '4 Days · 3 Nights',
  groupMax: 10,
  deposit: 50,
  freeCancelDays: 7,
}

/** Headline trust numbers (attributed social proof, Ha-Giang-style). */
export const stats = [
  { value: '2,400+', label: 'riders joined' },
  { value: '4.9/5', label: 'on 480+ reviews' },
  { value: '4', label: 'island stops' },
  { value: '100%', label: 'local guides' },
]

export const whyUs = [
  {
    icon: 'Bike',
    title: 'Scooter + lodging, bundled',
    desc: 'Your 125cc automatic, unlimited fuel, and 3 nights of hand-picked stays — one price, zero logistics.',
  },
  {
    icon: 'Users',
    title: 'Local riders & guides',
    desc: 'Born-and-raised Palaweño guides who know every viewpoint, shortcut, and the bar with the best sunset.',
  },
  {
    icon: 'ShieldCheck',
    title: 'Small groups, max 10',
    desc: 'Big enough to make a crew, small enough that nobody gets left on a switchback.',
  },
  {
    icon: 'CalendarCheck',
    title: 'Reserve now, pay later',
    desc: 'Lock your dates with a $50 deposit. Free cancellation up to 7 days before you ride.',
  },
]

/** The route — drives both the map (coords) and the day-by-day itinerary. */
export const stops = [
  {
    day: 1,
    key: 'sabang',
    name: 'Sabang',
    region: 'Underground River Coast',
    coords: [10.1856, 118.9267],
    image: images.stops.sabang,
    tagline: 'Into the jungle, under the mountain.',
    summary:
      'Roll out of Puerto Princesa and trade city streets for jungle ridgelines, arriving at the wild coast that guards one of the New 7 Wonders of Nature.',
    leg: { fromTo: 'Puerto Princesa → Sabang', distanceKm: 80, rideTime: '≈ 2 hrs' },
    byDay: [
      {
        title: 'Puerto Princesa Underground River',
        desc: 'Glide by paddle-canoe into a UNESCO cave river that tunnels 8 km beneath the mountain. Your permit and boat are handled for you.',
      },
      {
        title: 'Mangrove paddle-boat tour',
        desc: 'A quiet float through a tidal forest alive with monitor lizards, snake birds, and (if you dare) a taste of woodworm “tamilok.”',
      },
      {
        title: 'Sabang X-Zipline & jungle trail',
        desc: 'An 800 m zipline over the cove, or hike the monkey trail back along the cliffs for the long view.',
      },
    ],
    byNight: [
      {
        title: 'Beach bonfire & stargazing',
        desc: 'Almost no light pollution out here — dinner on the sand, a fire, and the full spill of the Milky Way overhead.',
      },
    ],
    lodging: {
      name: 'Sabang Beach Eco-Lodge',
      type: 'Beachfront bungalow',
      blurb: 'Fan-cooled native bungalows a barefoot walk from the surf.',
    },
  },
  {
    day: 2,
    key: 'port-barton',
    name: 'Port Barton',
    region: 'Turtle Bay',
    coords: [10.4456, 119.2281],
    image: images.stops.portBarton,
    tagline: 'Sleepy village, surprisingly loud nights.',
    summary:
      'The ride’s wildest leg drops you in a gas-lamp fishing village wrapped around a turquoise bay — the social heart of the Loop.',
    leg: { fromTo: 'Sabang → Port Barton', distanceKm: 145, rideTime: '≈ 3.5 hrs' },
    byDay: [
      {
        title: 'Island hop with sea turtles',
        desc: 'Snorkel German Island’s turtle reef, drift the sandbars of Paradise and Starfish Island, and visit the turtle sanctuary.',
      },
      {
        title: 'Pamuayan Waterfall',
        desc: 'A short scooter ride and jungle walk to a cool freshwater plunge pool — the perfect mid-day rinse.',
      },
      {
        title: 'White Beach village time',
        desc: 'No ATMs, no traffic — just a walkable sweep of sand, hammocks, and fresh-grilled catch of the day.',
      },
    ],
    byNight: [
      {
        title: 'Beachfront bar crawl',
        desc: 'Fire shows at Happy Bar, reggae at Moon Bar, and a boat-party happy hour at CocoRico. The Loop’s liveliest night.',
      },
      {
        title: 'Toes-in-the-sand live music',
        desc: 'Mellower? Hangout Beach Bar keeps it acoustic with the tide a few feet away.',
      },
    ],
    lodging: {
      name: 'Barton Bay Beach Resort',
      type: 'Private beach cabana',
      blurb: 'Sea-view cabanas steps from the bar strip and the morning boats.',
    },
  },
  {
    day: 3,
    key: 'san-vicente',
    name: 'San Vicente',
    region: 'Long Beach',
    coords: [10.529, 119.273],
    image: images.stops.sanVicente,
    tagline: 'Fourteen kilometres of empty sand.',
    summary:
      'Cruise the longest white-sand beach in the Philippines — wide, wild, and almost entirely yours.',
    leg: { fromTo: 'Port Barton → San Vicente', distanceKm: 32, rideTime: '≈ 1 hr' },
    byDay: [
      {
        title: 'Long Beach cruise',
        desc: 'Open the throttle along 14 km of uninterrupted shoreline, stopping wherever the water looks best.',
      },
      {
        title: 'Hidden-cove island hopping',
        desc: 'Capsalay and Inaladelan islands share Port Barton’s reefs with a fraction of the boats.',
      },
      {
        title: 'Bato ni Ningning viewpoint',
        desc: 'A short climb to a panorama over the whole bay, then a snorkel on the house reef below.',
      },
    ],
    byNight: [
      {
        title: 'Sunset dinner & bonfire',
        desc: 'No bar strip here by design — fresh seafood, a beach fire, and the clearest stars of the trip.',
      },
    ],
    lodging: {
      name: 'Long Beach Sands Inn',
      type: 'Beachfront room',
      blurb: 'Simple, breezy rooms opening straight onto the 14 km of sand.',
    },
  },
  {
    day: 4,
    key: 'el-nido',
    name: 'El Nido',
    region: 'Bacuit Bay',
    coords: [11.195, 119.39],
    image: images.stops.elNido,
    tagline: 'The grand finale of the Loop.',
    summary:
      'Ride into the postcard — towering limestone cliffs, hidden lagoons, and the most famous bay in the Philippines.',
    leg: { fromTo: 'San Vicente → El Nido', distanceKm: 110, rideTime: '≈ 2.5 hrs' },
    byDay: [
      {
        title: 'Bacuit Bay lagoon tour',
        desc: 'Kayak into the Big & Small Lagoons, snorkel Shimizu, and beach-hop Seven Commandos on the legendary Tour A.',
      },
      {
        title: 'Nacpan & Las Cabanas beaches',
        desc: 'A scooter run to 4 km of golden Nacpan sand, then a sunset zipline over Las Cabanas.',
      },
      {
        title: 'Taraw Canopy Walk',
        desc: 'A guided cliff walk for a bird’s-eye view over town and the whole island-studded bay.',
      },
    ],
    byNight: [
      {
        title: 'Farewell celebration',
        desc: 'Cliffside sunset drinks at Republica, beanbags and DJs at Sava Beach Bar — toast the crew you rode 360 km with.',
      },
      {
        title: 'Bioluminescent night kayak',
        desc: 'On new-moon nights, paddle through water that glows electric-blue with every stroke. (Optional.)',
      },
    ],
    lodging: {
      name: 'Extend your stay',
      type: 'Optional add-on',
      blurb: 'The Loop graduates here — most riders stay on. We’ll book your extra nights in town.',
    },
  },
]

/** Puerto Princesa is the gateway, not an overnight — shown on the map as the start pin. */
export const startPoint = {
  key: 'puerto-princesa',
  name: 'Puerto Princesa',
  region: 'Start · Gateway City',
  coords: [9.7392, 118.7353],
  image: images.stops.puertoPrincesa,
  blurb: 'Fly in, meet your crew, pick up your scooter. The Loop starts here.',
}

/** Two-axis product: ride style. Easy Rider is the highlighted default. */
export const packages = [
  {
    key: 'self-drive',
    name: 'Self-Drive',
    badge: 'Best value',
    price: 329,
    tagline: 'Ride your own scooter, set your own pace.',
    highlight: false,
    features: [
      'Your own 125cc automatic + unlimited fuel',
      '3 nights hand-picked lodging',
      'Daily breakfast & nightly group dinners',
      'Route map, GPS pins & gear',
      '24/7 support hotline',
    ],
    note: 'Riding experience recommended. Valid licence required.',
  },
  {
    key: 'easy-rider',
    name: 'Easy Rider',
    badge: 'Most popular',
    price: 399,
    tagline: 'Ride pillion with a local guide. No licence, no problem.',
    highlight: true,
    features: [
      'Everything in Self-Drive, plus…',
      'Your own dedicated local rider-guide',
      'Zero riding experience needed',
      'Hands free for every photo',
      'Insider stops only locals know',
    ],
    note: 'Our most-booked option — safest and most social.',
  },
  {
    key: 'private',
    name: 'Private Loop',
    badge: 'Premium',
    price: 549,
    tagline: 'Your crew, your pace, your private guide.',
    highlight: false,
    features: [
      'Everything in Easy Rider, plus…',
      'Private departure for your group only',
      'Upgraded private rooms',
      'Private island-hopping boat included',
      'Flexible daily schedule',
    ],
    note: 'Great for couples, families & friend groups.',
  },
]

export const inclusions = [
  '125cc automatic scooter + unlimited fuel',
  '3 nights hand-picked beachfront lodging',
  'Daily breakfast + nightly group dinners',
  'Helmet, raincoat & knee guards',
  'Puerto Princesa hotel/airport pickup',
  'Underground River permit & cave boat',
  'Local rider-guide & 24/7 support',
  'Welcome kit + Palawan Loop tee',
]

export const exclusions = [
  'Flights to Puerto Princesa',
  'Lunches & extra drinks',
  'Island-hopping boat fees (optional add-on)',
  'Personal travel insurance',
  'Tips for guides (optional)',
  'Personal expenses & souvenirs',
]

/** Lodging amenity chips — icons sourced from the WAVIVI asset set in /public/amenities. */
export const amenities = [
  { label: 'Free Wi-Fi', icon: 'Free Wi-Fi.png' },
  { label: 'Free Breakfast', icon: 'Free Breakfast.png' },
  { label: 'Beach Access', icon: 'Beach Access.png' },
  { label: 'Air Conditioning', icon: 'Air Conditioning.png' },
  { label: 'Restaurant', icon: 'Restaurant.png' },
  { label: 'Bar', icon: 'Bar.png' },
  { label: 'Free Parking', icon: 'Free Parking.png' },
  { label: 'Outdoor Pool', icon: 'Outdoor Pool.png' },
]

export const reviews = [
  {
    name: 'Maya Thompson',
    country: 'Australia 🇦🇺',
    rating: 5,
    package: 'Easy Rider',
    text: 'Booked solo, left with a whole crew. The guides made the Underground River and Port Barton nights unreal. Best decision of my whole SE Asia trip.',
  },
  {
    name: 'Lukas Meyer',
    country: 'Germany 🇩🇪',
    rating: 5,
    package: 'Self-Drive',
    text: 'The scooter legs between stops ARE the trip. Long Beach with nobody on it for 14 km — I’ll never forget it. Bikes were spotless and the route pins were perfect.',
  },
  {
    name: 'Sofia & Marco',
    country: 'Italy 🇮🇹',
    rating: 5,
    package: 'Private Loop',
    text: 'Did the private option for our honeymoon. Private lagoon boat in El Nido, our own guide the whole way. Worth every peso.',
  },
  {
    name: 'Aiko Tanaka',
    country: 'Japan 🇯🇵',
    rating: 5,
    package: 'Easy Rider',
    text: 'I’d never been on a motorbike in my life. Felt safe the entire time on the back with my rider. The bonfire night in Sabang was pure magic.',
  },
  {
    name: 'James O’Connor',
    country: 'Ireland 🇮🇪',
    rating: 5,
    package: 'Easy Rider',
    text: 'Reserve-now-pay-later sealed it for me. Turned up, everything handled, just rode and made friends. Already telling everyone back home.',
  },
  {
    name: 'Priya Sharma',
    country: 'Canada 🇨🇦',
    rating: 5,
    package: 'Self-Drive',
    text: 'Turtles in Port Barton, glowing plankton in El Nido. Four days that felt like two weeks. The small group size made all the difference.',
  },
]

export const faqs = [
  {
    q: 'Do I need a motorcycle licence?',
    a: 'Only for the Self-Drive option, where a valid licence is required. Choose Easy Rider and you simply ride pillion with a professional local guide — no licence and zero experience needed.',
  },
  {
    q: 'I’ve never ridden a scooter. Is it safe?',
    a: 'Yes. Most riders pick Easy Rider for exactly this reason. You sit behind an experienced local guide on quiet provincial roads, with helmets and knee guards provided and a support vehicle never far away.',
  },
  {
    q: 'How big are the groups?',
    a: `We cap every departure at ${brand.groupMax} riders. Big enough to make a crew, small enough that the trip stays personal and nobody gets left behind.`,
  },
  {
    q: 'What exactly is included?',
    a: 'Your scooter and fuel, 3 nights of lodging, daily breakfast, nightly group dinners, gear, the Underground River permit and boat, your guide, and airport pickup. Flights, lunches, and optional island-hopping boats are extra.',
  },
  {
    q: 'How fit do I need to be?',
    a: 'Moderately. Days are active — short hikes, snorkelling, swimming — but nothing extreme. Most of the distance is covered comfortably by scooter, and you can sit out any activity.',
  },
  {
    q: 'How does booking and the deposit work?',
    a: `Reserve your dates online with a $${brand.deposit} deposit and pay the balance before you ride. Free cancellation up to ${brand.freeCancelDays} days before departure.`,
  },
  {
    q: 'When is the best time to go?',
    a: 'The dry season (roughly December–May) is ideal, with calm seas for island hopping. We run the Loop year-round; shoulder months are quieter and just as beautiful.',
  },
  {
    q: 'I’m travelling solo — will I fit in?',
    a: 'Over half our riders book solo. The shared dinners, group rides, and small crew make it one of the easiest ways to meet people on the road. You won’t be solo for long.',
  },
]
