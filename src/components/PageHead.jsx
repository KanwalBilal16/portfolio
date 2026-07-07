export default function PageHead({ eyebrow, title, subtitle }) {
  return (
    <section className="pagehead">
      <div className="wrap reveal">
        {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        <h1>{title}</h1>
        {subtitle && <p>{subtitle}</p>}
      </div>
    </section>
  )
}
