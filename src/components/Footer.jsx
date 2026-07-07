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
            <p>Full Stack Web Developer building scalable, secure web applications with care and precision.</p>
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
            <span style={{ color: 'var(--muted)', fontSize: '.92rem' }}>{profile.location}</span>
          </div>
        </div>
        <div className="foot-bottom">© {new Date().getFullYear()} <b>{profile.name}</b>. All rights reserved.</div>
      </div>
    </footer>
  )
}
