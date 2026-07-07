import { useState } from 'react'
import { profile } from '../data'
import { MailIcon, PhoneIcon, PinIcon } from './Icons'

// ── Contact form delivery ─────────────────────────────────────────────
// Submissions are delivered to your inbox via Web3Forms (free, no backend).
// Setup: go to https://web3forms.com → enter your email (kanwalzubair717@gmail.com)
// → they email you an Access Key → paste it below. That's the only step.
// Every time a visitor submits, you get an email automatically.
const WEB3FORMS_ACCESS_KEY = 'YOUR_ACCESS_KEY_HERE'

export default function Contact({ showHead = true }) {
  const [form, setForm] = useState({ name: '', email: '', msg: '' })
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `Project inquiry from ${form.name}`,
          from_name: form.name,
          name: form.name,
          email: form.email,
          message: form.msg,
        }),
      })
      const data = await res.json()
      if (data.success) {
        setStatus('sent')
        setForm({ name: '', email: '', msg: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section className="block" id="contact" style={showHead ? { background: 'var(--surface)', borderTop: '1px solid var(--line)' } : { paddingTop: 30 }}>
      <div className="wrap">
        {showHead && (
          <div className="head reveal" style={{ marginBottom: 44 }}>
            <span className="eyebrow">Get in touch</span>
            <h2>Let's Build Something Together</h2>
            <p>Have a project in mind? I'm always open to new opportunities and collaborations.</p>
          </div>
        )}
        <div className="contact-grid">
          <div className="contact-info reveal">
            <div className="row">
              <div className="ic"><MailIcon /></div>
              <div><div className="k">Email</div><a className="v" href={`mailto:${profile.email}`}>{profile.email}</a></div>
            </div>
            <div className="row">
              <div className="ic"><PhoneIcon /></div>
              <div><div className="k">Phone</div><a className="v" href={`tel:${profile.phone.replace(/\s/g, '')}`}>{profile.phone}</a></div>
            </div>
            <div className="row">
              <div className="ic"><PinIcon /></div>
              <div><div className="k">Location</div><div className="v">{profile.location}</div></div>
            </div>
          </div>

          <form className="cform reveal" onSubmit={handleSubmit}>
            <div className="field">
              <label htmlFor="name">Name</label>
              <input id="name" name="name" type="text" placeholder="Your name" value={form.name} onChange={update} required />
            </div>
            <div className="field">
              <label htmlFor="email">Email</label>
              <input id="email" name="email" type="email" placeholder="you@example.com" value={form.email} onChange={update} required />
            </div>
            <div className="field">
              <label htmlFor="msg">Message</label>
              <textarea id="msg" name="msg" placeholder="Tell me about your project..." value={form.msg} onChange={update} required />
            </div>
            <button type="submit" className="btn btn-primary" disabled={status === 'sending'} style={{ width: '100%', justifyContent: 'center' }}>
              {status === 'sending' ? 'Sending…' : 'Send Message'}
            </button>
            {status === 'sent' && (
              <p className="form-note ok">Thanks! Your message has been sent — I'll get back to you soon.</p>
            )}
            {status === 'error' && (
              <p className="form-note err">Something went wrong. Please email me directly at {profile.email}.</p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
