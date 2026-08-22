/**
 * A persistent, honest label on every page.
 *
 * WHY THIS EXISTS
 * ---------------
 * This build is a design showcase, and it is convincing enough to be mistaken
 * for an operating tour company. It ships a phone number in the reserved
 * fictional range (+63 917 555 0142), four named testimonials, and a "2,400+
 * riders / 4.9 from 480+ reviews" trust strip. None of that describes anything
 * that has happened.
 *
 * Only the login and signup screens disclosed anything — they already carry
 * "Demo only — accounts are stored locally in your browser" — and those are the
 * two screens a casual visitor never reaches. The reviews, the stats and the
 * booking flow said nothing.
 *
 * The site is also linked from snapaweb.com's portfolio, whose entire argument
 * is that it does not overstate. An unlabelled demo undermines the page
 * pointing at it.
 *
 * WHY A BANNER RATHER THAN REMOVING THE CONTENT
 * ---------------------------------------------
 * The invented reviews and stats are what make the design worth showing — a
 * portfolio piece with empty trust modules demonstrates less. Labelling the
 * whole thing keeps the demonstration intact and removes the misrepresentation,
 * which is the smallest change that makes the page honest.
 *
 * `role="note"` rather than an alert: it is standing context, not an urgent
 * message, and an alert role would interrupt a screen reader on every route.
 * Not dismissible, deliberately — a notice you can close is a notice that is
 * absent for everyone who closed it.
 */
export default function DemoBanner() {
  return (
    <div
      role="note"
      className="bg-slate-900 px-4 py-2 text-center text-xs leading-relaxed text-slate-100 sm:text-sm"
    >
      <strong className="font-semibold">Demonstration build.</strong>{' '}
      Palawan Loop is a website design showcase — not an operating tour company.
      Reviews, ratings and contact details on this site are illustrative, and no
      booking made here is real.
    </div>
  )
}
