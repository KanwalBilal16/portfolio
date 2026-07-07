import { projects } from '../data'

export default function Projects({ limit, heading = true, id = 'projects', framed = true }) {
  const list = limit ? projects.slice(0, limit) : projects
  const sectionStyle = framed
    ? { background: 'var(--surface)', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)' }
    : {}

  return (
    <section className="block" id={id} style={sectionStyle}>
      <div className="wrap">
        {heading && (
          <div className="head reveal">
            <h2>Featured Projects</h2>
            <p>A selection of products and platforms I've designed, built, and shipped.</p>
          </div>
        )}
        <div className="proj-grid">
          {list.map((p, i) => (
            <div className="proj reveal" style={{ transitionDelay: `${(i % 3) * 0.05}s` }} key={p.title}>
              {p.image ? (
                <div className="thumb">
                  <img src={p.image} alt={p.title} />
                </div>
              ) : (
                <div className="thumb" style={{ background: p.grad }}>
                  <span>{p.code}</span>
                </div>
              )}
              <div className="proj-body">
                <div className="tags">
                  {p.tags.map((t) => <span className="tag" key={t}>{t}</span>)}
                </div>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
