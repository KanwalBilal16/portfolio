import PageHead from '../components/PageHead'
import Projects from '../components/Projects'
import CtaBand from '../components/CtaBand'

export default function ProjectsPage() {
  return (
    <>
      <PageHead title="Featured Projects" subtitle="A showcase of products and platforms I've designed, built, and shipped end to end." />
      <Projects heading={false} framed={false} id="projects-all" />
      <CtaBand />
    </>
  )
}
