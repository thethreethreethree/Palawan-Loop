import Reveal from './Reveal.jsx'

export default function SectionHeading({ eyebrow, title, subtitle, align = 'center', tone = 'dark' }) {
  const alignCls = align === 'center' ? 'text-center mx-auto' : 'text-left'
  const titleColor = tone === 'light' ? 'text-white' : 'text-ink'
  const subColor = tone === 'light' ? 'text-white/80' : 'text-ink/60'
  return (
    <Reveal className={`max-w-2xl ${alignCls}`}>
      {eyebrow && <span className="section-eyebrow">{eyebrow}</span>}
      <h2 className={`text-3xl font-extrabold sm:text-4xl ${titleColor} text-balance`}>{title}</h2>
      {subtitle && <p className={`mt-4 text-base leading-relaxed sm:text-lg ${subColor}`}>{subtitle}</p>}
    </Reveal>
  )
}
