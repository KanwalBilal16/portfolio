import { stats } from '../data'

export default function Stats() {
  return (
    <div className="stats">
      <div className="wrap stats-grid">
        {stats.map((s, i) => (
          <div className="stat reveal" style={{ transitionDelay: `${i * 0.06}s` }} key={s.lbl}>
            <div className="num">{s.num}</div>
            <div className="lbl">{s.lbl}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
