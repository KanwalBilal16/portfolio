import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import Stats from '../components/Stats'
import Services from '../components/Services'
import Projects from '../components/Projects'
import CtaBand from '../components/CtaBand'

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Services />
      <Projects limit={3} framed />
      <div className="center-btn reveal">
        <Link to="/projects" className="btn btn-ghost">View all projects →</Link>
      </div>
      <CtaBand />
    </>
  )
}
