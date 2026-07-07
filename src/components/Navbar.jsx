import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react'
import { profile } from '../data'

export default function Navbar({ theme, toggleTheme }) {
  const [open, setOpen] = useState(false)

  const links = [
    ['Home', '/'],
    ['About', '/about'],
    ['Projects', '/projects'],
    ['Contact', '/contact'],
  ]

  return (
    <header className="nav">
      <div className="wrap nav-inner">
        {/* LEFT: logo */}
        <Link to="/" className="logo" onClick={() => setOpen(false)}>
          <img className="pic" src={profile.logo} alt="Kanwal Bilal" />
        </Link>

        {/* CENTER: links (becomes a dropdown on mobile) */}
        <nav className={`nav-links${open ? ' open' : ''}`}>
          {links.map(([label, to]) => (
            <NavLink key={to} to={to} end={to === '/'}
              onClick={() => setOpen(false)}
              className={({ isActive }) => (isActive ? 'active' : undefined)}>
              {label}
            </NavLink>
          ))}
        </nav>

        {/* RIGHT: theme toggle + mobile hamburger */}
        <div className="nav-actions">
          <button className="theme-btn" onClick={toggleTheme} aria-label="Toggle theme">
            {theme === 'dark' ? '🌙' : '☀️'}
          </button>
          <button
            className="nav-toggle"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <span className="bar" />
            <span className="bar" />
            <span className="bar" />
          </button>
        </div>
      </div>
    </header>
  )
}
