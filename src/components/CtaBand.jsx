import { Link } from 'react-router-dom'

export default function CtaBand() {
  return (
    <section className="cta-band">
      <div className="wrap reveal">
        <h2>Have a project in mind?</h2>
        <p>Let's turn your idea into a fast, reliable product.</p>
        <Link to="/contact" className="btn btn-primary">Start a conversation →</Link>
      </div>
    </section>
  )
}
