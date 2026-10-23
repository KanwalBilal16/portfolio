import { Link } from 'react-router-dom'
import { profile } from '../data'

export default function Footer() {
  const nav = [['Home', '/'], ['About', '/about'], ['Projects', '/projects'], ['Contact', '/contact']]

  return (
    <footer>
      <div className="wrap">
        <div className="foot-grid">
          <div className="foot-brand">
            <div className="logo"><span className="br">&lt;</span>KB<span className="br">/&gt;</span> &nbsp;{profile.name}</div>
            <p>AI Automation Engineer &amp; Full Stack Developer building AI agents, automations and the web apps around them.</p>
          </div>
          <div className="foot-links">
            <h4>Navigate</h4>
            {nav.map(([label, to]) => <Link key={to} to={to}>{label}</Link>)}
          </div>
          <div className="foot-links">
            <h4>Contact</h4>
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
            <a href={`tel:${profile.phone.replace(/\s/g, '')}`}>{profile.phone}</a>
            <a href={`https://wa.me/${profile.phoneRaw}`} target="_blank" rel="noopener noreferrer">WhatsApp</a>
            <a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <span style={{ color: 'var(--muted)', fontSize: '.92rem' }}>{profile.location}</span>
          </div>
        </div>
        <div className="foot-bottom">© {new Date().getFullYear()} <b>{profile.name}</b>. All rights reserved.</div>
      </div>
    </footer>
  )
}
