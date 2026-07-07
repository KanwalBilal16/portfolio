import { experience } from '../data'

export default function Experience() {
  return (
    <section className="block" id="experience">
      <div className="wrap">
        <div className="head reveal">
          <span className="eyebrow">Career</span>
          <h2>Professional Experience</h2>
        </div>
        <div className="exp-wrap">
          {experience.map((job, i) => (
            <div className="exp reveal" style={{ transitionDelay: `${i * 0.08}s` }} key={job.company}>
              <div className="when">{job.when}</div>
              <h3>{job.role}</h3>
              <div className="co">{job.company}</div>
              <ul>
                {job.points.map((pt, idx) => <li key={idx}>{pt}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
