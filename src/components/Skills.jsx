import { coreSkills, moreTools } from '../data'

const C = 213.6 // circumference for r=34

export default function Skills() {
  return (
    <section className="block skills-section" id="skills">
      <div className="wrap">
        <div className="head reveal">
          <span className="eyebrow">Tech I build with</span>
          <h2>Skills &amp; Tools</h2>
          <p>My core stack at a glance — plus the wider toolkit I reach for every day.</p>
        </div>

        {/* animated proficiency rings */}
        <div className="sk-grid">
          {coreSkills.map((s, i) => (
            <div className="sk-card reveal" style={{ transitionDelay: `${(i % 4) * 0.07}s` }} key={s.name}>
              <div className="ring-wrap">
                <svg className="ring" viewBox="0 0 80 80">
                  <circle className="ring-bg" cx="40" cy="40" r="34" />
                  <circle
                    className="ring-fg"
                    cx="40" cy="40" r="34"
                    style={{ stroke: s.color, '--off': C - (C * s.level) / 100, transitionDelay: `${(i % 4) * 0.08 + 0.1}s` }}
                  />
                </svg>
                <span className="ring-mono" style={{ color: s.color }}>{s.abbr}</span>
              </div>
              <div className="sk-name">{s.name}</div>
              <div className="sk-lvl">{s.level}%</div>
            </div>
          ))}
        </div>

        {/* infinite marquee for the rest of the toolkit */}
        <div className="marquee reveal" aria-label="More tools and technologies">
          <div className="marquee-track">
            {[...moreTools, ...moreTools].map((t, i) => (
              <span className="chip" key={i}>{t}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
