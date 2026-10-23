import { services } from '../data'

export default function Services() {
  return (
    <section className="block" id="about">
      <div className="wrap">
        <div className="head reveal">
          <span className="eyebrow">What I do</span>
          <h2>Expertise &amp; Skills</h2>
          <p>AI agents and automations, plus the full-stack apps they run in, built for production rather than demos.</p>
        </div>
        <div className="svc-grid">
          {services.map((s, i) => (
            <div className="svc reveal" style={{ transitionDelay: `${(i % 3) * 0.05}s` }} key={s.title}>
              <div className="ic">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
