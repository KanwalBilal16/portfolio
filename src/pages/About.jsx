import { profile } from '../data'
import PageHead from '../components/PageHead'
import CodeCard from '../components/CodeCard'
import Skills from '../components/Skills'
import Experience from '../components/Experience'
import CtaBand from '../components/CtaBand'

export default function About() {
  return (
    <>
      <PageHead eyebrow="About me" title="Get to know me" subtitle="A bit about how I work and what I bring to a team." />
      <section className="block" style={{ paddingTop: 40 }}>
        <div className="wrap about-grid">
          <div className="reveal about-text">
            <span className="eyebrow">Who I am</span>
            <h2>Full Stack Developer based in Faisalabad</h2>
            {profile.bio.map((para, i) => <p key={i}>{para}</p>)}
            <div className="about-facts">
              <div><span className="k">Experience</span><span className="v">4+ years</span></div>
              <div><span className="k">Location</span><span className="v">Faisalabad, PK</span></div>
              <div><span className="k">Languages</span><span className="v">English, Urdu</span></div>
              <div><span className="k">Availability</span><span className="v">Open to work</span></div>
            </div>
          </div>
          <div className="reveal" style={{ transitionDelay: '.1s' }}>
            <CodeCard />
          </div>
        </div>
      </section>
      <Skills />
      <Experience />
      <CtaBand />
    </>
  )
}
