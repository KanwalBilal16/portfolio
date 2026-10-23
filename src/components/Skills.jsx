import { Link } from 'react-router-dom'
import { skillGroups, projects } from '../data'

const byCode = Object.fromEntries(projects.map((p) => [p.code, p]))

export default function Skills() {
  return (
    <section className="block skills-section" id="skills">
      <div className="wrap">
        <div className="head reveal">
          <span className="eyebrow">Tech I build with</span>
          <h2>Skills &amp; Tools</h2>
          <p>Grouped by what they're used for, each with projects that put them to work.</p>
        </div>

        <div className="skg-grid">
          {skillGroups.map((g, i) => (
            <div className="skg reveal" style={{ transitionDelay: `${i * 0.07}s` }} key={g.title}>
              <h3>{g.title}</h3>
              <p className="skg-blurb">{g.blurb}</p>
              <div className="chips">
                {g.tools.map((t) => <span className="chip" key={t}>{t}</span>)}
              </div>
              <div className="skg-proof">
                <span className="k">Used in</span>
                {g.proof.map((code) => {
                  const p = byCode[code]
                  if (!p) return null
                  return (
                    <Link key={code} to={p.slug ? `/projects/${p.slug}` : '/projects'}>
                      {p.title}{p.slug ? ' →' : ''}
                    </Link>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
