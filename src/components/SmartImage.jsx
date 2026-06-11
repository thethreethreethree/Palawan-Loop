import { useState } from 'react'
import { ScooterMark } from './Logo.jsx'

/**
 * An <img> that never renders broken. While the stock photo loads it shows a
 * branded shimmer; if the URL fails (offline, dead hotlink) it degrades to an
 * on-brand sky-blue placeholder with the caption — so a missing photo looks
 * intentional, not broken. All image URLs live in src/data/images.js, so the
 * real photos are a one-file swap when the owner drops in licensed assets.
 */
export default function SmartImage({
  src,
  alt = '',
  label,
  className = '',
  imgClassName = '',
  loading = 'lazy',
}) {
  const [status, setStatus] = useState('loading') // loading | ok | error

  return (
    <div className={`relative overflow-hidden bg-brand-100 ${className}`}>
      {status !== 'error' && (
        <img
          src={src}
          alt={alt}
          loading={loading}
          onLoad={() => setStatus('ok')}
          onError={() => setStatus('error')}
          className={`h-full w-full object-cover transition-opacity duration-700 ${
            status === 'ok' ? 'opacity-100' : 'opacity-0'
          } ${imgClassName}`}
        />
      )}

      {status === 'loading' && (
        <div className="absolute inset-0 animate-pulse bg-gradient-to-br from-brand-100 to-brand-200" />
      )}

      {status === 'error' && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-gradient-to-br from-brand-300 via-brand-400 to-brand-600 text-white">
          <ScooterMark className="h-10 w-10 opacity-90" />
          {(label || alt) && (
            <span className="px-3 text-center text-xs font-semibold uppercase tracking-widest text-white/90">
              {label || alt}
            </span>
          )}
        </div>
      )}
    </div>
  )
}
