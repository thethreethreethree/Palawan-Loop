import { MessageCircle } from 'lucide-react'
import { brand } from '../data/tour.js'

/** Floating WhatsApp-style contact button — a staple of every tour-operator site. */
export default function StickyContact() {
  const href = `https://wa.me/${brand.whatsapp}?text=${encodeURIComponent(
    'Hi Palawan Loop! I’d love to know more about the 4-day scooter trip.',
  )}`
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="group fixed bottom-5 right-5 z-40 flex items-center gap-2 rounded-full bg-[#25D366] py-3 pl-3.5 pr-4 text-sm font-semibold text-white shadow-soft transition-all hover:scale-105 hover:shadow-card"
      aria-label="Chat with us on WhatsApp"
    >
      <MessageCircle size={22} className="fill-white/20" />
      <span className="hidden sm:inline">Chat with us</span>
    </a>
  )
}
