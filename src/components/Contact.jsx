import { useState } from 'react'
import { profile } from '../data'
import { MailIcon, PhoneIcon, PinIcon } from './Icons'

// ── Contact form delivery ─────────────────────────────────────────────
// Submissions are emailed to profile.email — no backend needed.
// Default: FormSubmit (https://formsubmit.co). The very first submission sends
// an "Activate Form" email to profile.email; click it once and every message
// after that lands in your inbox.
// Optional: set VITE_WEB3FORMS_KEY in a .env file to use Web3Forms instead.
const WEB3FORMS_ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_KEY
// FormSubmit alias for profile.email (from the activation email) — keeps the address out of the page source.
const FORMSUBMIT_ID = 'eb1b2c959573fd800e54754011a5690c'

async function sendMessage({ name, email, msg }) {
  const headers = { 'Content-Type': 'application/json', Accept: 'application/json' }
  const subject = `Project inquiry from ${name}`

  if (WEB3FORMS_ACCESS_KEY) {
    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers,
      body: JSON.stringify({ access_key: WEB3FORMS_ACCESS_KEY, subject, from_name: name, name, email, message: msg }),
    })
    const data = await res.json()
    return data.success === true
  }

  const res = await fetch(`https://formsubmit.co/ajax/${FORMSUBMIT_ID}`, {
    method: 'POST',
    headers,
    body: JSON.stringify({ _subject: subject, _template: 'table', _captcha: 'false', name, email, message: msg }),
  })
  const data = await res.json()
  return res.ok && String(data.success) === 'true'
}

export default function Contact({ showHead = true }) {
  const [form, setForm] = useState({ name: '', email: '', msg: '' })
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      if (await sendMessage(form)) {
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
