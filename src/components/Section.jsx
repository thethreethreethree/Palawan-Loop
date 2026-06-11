/** Standard vertical-rhythm section wrapper. */
export default function Section({ children, className = '', container = true, id }) {
  return (
    <section id={id} className={`py-16 sm:py-24 ${className}`}>
      {container ? <div className="container-px">{children}</div> : children}
    </section>
  )
}
