import PageHead from '../components/PageHead'
import Contact from '../components/Contact'

export default function ContactPage() {
  return (
    <>
      <PageHead eyebrow="Get in touch" title="Let's work together" subtitle="Have a project in mind? I'm always open to new opportunities and collaborations." />
      <Contact showHead={false} />
    </>
  )
}
