import { Star } from 'lucide-react'

export default function StarRating({ value = 5, size = 16, className = '' }) {
  return (
    <div className={`flex items-center gap-0.5 ${className}`} aria-label={`${value} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={size}
          className={i < value ? 'fill-sunset-400 text-sunset-400' : 'fill-slate-200 text-slate-200'}
        />
      ))}
    </div>
  )
}
