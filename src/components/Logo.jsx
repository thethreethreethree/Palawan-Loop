/**
 * Brand logo: a backpacker on a sky-blue scooter.
 * Built as a flat line-art illustration so it stays crisp at any size and
 * needs no external asset. `variant="mark"` renders the icon alone; `"full"`
 * adds the wordmark. `tone="light"` flips the wordmark for dark backgrounds.
 */
export function ScooterMark({ className = '', badge = false }) {
  return (
    <svg
      viewBox="0 0 200 160"
      className={className}
      role="img"
      aria-label="Backpacker riding a blue scooter"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {badge && (
        <>
          <defs>
            <linearGradient id="loopBadge" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#5cc2ff" />
              <stop offset="100%" stopColor="#1d8be0" />
            </linearGradient>
          </defs>
          <rect x="0" y="0" width="200" height="160" rx="40" fill="url(#loopBadge)" />
        </>
      )}

      {/* motion / adventure lines */}
      <g stroke={badge ? '#ffffff' : '#93d8ff'} strokeWidth="6" strokeLinecap="round" opacity="0.8">
        <line x1="8" y1="58" x2="40" y2="58" />
        <line x1="2" y1="78" x2="30" y2="78" />
        <line x1="12" y1="98" x2="36" y2="98" />
      </g>

      {/* wheels */}
      <g>
        <circle cx="54" cy="118" r="25" fill="#0f2233" />
        <circle cx="54" cy="118" r="10" fill={badge ? '#eff9ff' : '#ffffff'} />
        <circle cx="150" cy="118" r="25" fill="#0f2233" />
        <circle cx="150" cy="118" r="10" fill={badge ? '#eff9ff' : '#ffffff'} />
      </g>

      {/* scooter frame: step-through body, floorboard, steering column */}
      <g
        stroke={badge ? '#ffffff' : '#34a8f4'}
        strokeWidth="11"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* rear cowl up to the seat */}
        <path d="M54 118 L64 82 L116 78" />
        {/* low floorboard for the feet */}
        <path d="M82 112 L126 112" />
        {/* steering column up to the handlebar */}
        <path d="M150 118 L139 72 L162 64" />
      </g>
      {/* headlight */}
      <circle cx="158" cy="74" r="6" fill={badge ? '#ffffff' : '#1d8be0'} />

      {/* backpack, sitting on the rider's back (drawn before the body) */}
      <g transform="rotate(-9 86 56)">
        <rect x="74" y="42" width="24" height="32" rx="8" fill="#ff5a10" />
        <rect x="80" y="38" width="12" height="9" rx="4" fill="#f03d06" />
        <line x1="86" y1="50" x2="86" y2="68" stroke="#ffcda8" strokeWidth="4" strokeLinecap="round" />
      </g>

      {/* rider silhouette: head, leaning torso, arm to bars, bent leg */}
      <g stroke="#0f2233" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round">
        <path d="M104 52 L97 86" /> {/* torso leaning forward */}
        <path d="M101 60 L140 68" /> {/* arm reaching the handlebar */}
        <path d="M97 86 L122 106" /> {/* leg to the floorboard */}
      </g>
      <circle cx="106" cy="40" r="12" fill="#0f2233" />
    </svg>
  )
}

export default function Logo({ variant = 'full', tone = 'dark', className = '' }) {
  const word = tone === 'light' ? 'text-white' : 'text-ink'
  const loop = tone === 'light' ? 'text-brand-200' : 'text-brand-500'

  if (variant === 'mark') {
    return <ScooterMark className={className || 'h-10 w-10'} />
  }

  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <ScooterMark className="h-10 w-10 shrink-0" />
      <span className="flex flex-col leading-none">
        <span className={`font-display text-xl font-extrabold tracking-tight ${word}`}>
          Palawan <span className={loop}>Loop</span>
        </span>
        <span
          className={`mt-0.5 text-[10px] font-semibold uppercase tracking-[0.28em] ${
            tone === 'light' ? 'text-brand-100/80' : 'text-brand-600/70'
          }`}
        >
          Ride the Islands
        </span>
      </span>
    </span>
  )
}
