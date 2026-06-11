/**
 * Single source of truth for every stock photo on the site.
 * Swap these URLs for the owner's licensed photography in one place.
 * URLs are Unsplash hotlinks (free to use under the Unsplash License).
 * If any fail to load, <SmartImage> degrades to an on-brand placeholder.
 */
const unsplash = (id, w = 1600) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`

export const images = {
  // Hero / brand
  hero: unsplash('1518509562904-e7ef99cdcc86', 2000), // tropical turquoise coastline
  heroAlt: unsplash('1505228395891-9a51e7e86bf6', 2000),
  ctaBanner: unsplash('1519046904884-53103b34b206', 2000), // aerial beach
  aboutTeam: unsplash('1530541930197-ff16ac917b0e', 1400), // riders / friends
  scooter: unsplash('1558981403-c5f9899a28bc', 1200), // parked scooter

  // Per-stop imagery (route order)
  stops: {
    puertoPrincesa: unsplash('1518684079-3c830dcef090', 1400),
    sabang: unsplash('1544551763-46a013bb70d5', 1400), // cave river / jungle coast
    portBarton: unsplash('1559827260-dc66d52bef19', 1400), // island hopping kayak
    sanVicente: unsplash('1507525428034-b723cf961d3e', 1400), // long white beach
    elNido: unsplash('1551918120-9739cb430c6d', 1400), // limestone lagoons
  },
}

// Gallery grid — captions double as the placeholder label on load failure.
export const gallery = [
  { src: unsplash('1507525428034-b723cf961d3e', 1200), label: 'Turquoise shallows' },
  { src: unsplash('1559827260-dc66d52bef19', 1200), label: 'Lagoon kayaking' },
  { src: unsplash('1544551763-46a013bb70d5', 1200), label: 'Snorkel reefs' },
  { src: unsplash('1505228395891-9a51e7e86bf6', 1200), label: 'Beach bungalows' },
  { src: unsplash('1558981403-c5f9899a28bc', 1200), label: 'Scooter days' },
  { src: unsplash('1519046904884-53103b34b206', 1200), label: 'Aerial coastlines' },
  { src: unsplash('1502920917128-1aa500764cbd', 1200), label: 'Island hopping' },
  { src: unsplash('1533105079780-92b9be482077', 1200), label: 'Beach bonfires' },
  { src: unsplash('1537996194471-e657df975ab4', 1200), label: 'Palm sunsets' },
  { src: unsplash('1468413253725-0d5181091126', 1200), label: 'Boat trips' },
  { src: unsplash('1530541930197-ff16ac917b0e', 1200), label: 'Your new tribe' },
  { src: unsplash('1551918120-9739cb430c6d', 1200), label: 'Hidden beaches' },
]

export { unsplash }
