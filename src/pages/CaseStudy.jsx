import { Link, useParams } from 'react-router-dom'
import { projects } from '../data'
import PageHead from '../components/PageHead'
import CtaBand from '../components/CtaBand'

const studies = projects.filter((p) => p.caseStudy)

export default function CaseStudy() {
  const { slug } = useParams()
  const idx = studies.findIndex((p) => p.slug === slug)

  if (idx === -1) {
    return (
      <>
        <PageHead eyebrow="Case study" title="Case study not found" subtitle="That project doesn't have a write-up yet." />
        <div className="center-btn reveal">
          <Link to="/projects" className="btn btn-ghost">← All projects</Link>
        </div>
      </>
    )
  }

  const p = studies[idx]
  const cs = p.caseStudy
  const next = studies[(idx + 1) % studies.length]

  return (
    <>
      <PageHead eyebrow={`Case study · ${cs.type}`} title={p.title} subtitle={cs.summary} />

      <section className="block cs" style={{ paddingTop: 30 }}>
        <div className="wrap">
          <div className="cs-meta reveal">
            <div><span className="k">Client</span><span className="v">{cs.client}</span></div>
            {cs.timeline && <div><span className="k">Timeline</span><span className="v">{cs.timeline}</span></div>}
            <div className="cs-stack">
              <span className="k">Stack</span>
              <div className="tags">{cs.stack.map((t) => <span className="tag" key={t}>{t}</span>)}</div>
            </div>
          </div>

          {p.image && (
            <figure className="cs-shot reveal">
              <img src={p.image} alt={`${p.title} screenshot`} />
            </figure>
          )}

          <div className="cs-body">
            <div className="cs-sec reveal">
              <span className="cs-label">01 · The problem</span>
              <p>{cs.problem}</p>
            </div>
            <div className="cs-sec reveal">
              <span className="cs-label">02 · My role</span>
              <p>{cs.role}</p>
            </div>
          </div>

          <div className="cs-block reveal">
            <span className="cs-label">03 · How it works</span>
            <h2>From start to finish</h2>
            <ol className="cs-flow">
              {cs.flow.map((step, i) => (
                <li key={step.title}>
                  <span className="n">{i + 1}</span>
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div className="cs-block reveal">
            <span className="cs-label">04 · Key decisions</span>
            <h2>Why it's built this way</h2>
            <div className="cs-decisions">
              {cs.decisions.map((d) => (
                <div className="cs-sec" key={d.title}>
                  <h3>{d.title}</h3>
                  <p>{d.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="cs-block cs-result reveal">
            <span className="cs-label">05 · Result</span>
            <h2>What it delivered</h2>
            <ul>{cs.result.map((r, i) => <li key={i}>{r}</li>)}</ul>
          </div>

          <div className="cs-nav reveal">
            <Link to="/projects" className="btn btn-ghost">← All projects</Link>
            {next.slug !== p.slug && (
              <Link to={`/projects/${next.slug}`} className="btn btn-primary">Next: {next.title} →</Link>
            )}
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  )
}
