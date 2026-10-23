import { Link } from 'react-router-dom'
import { profile } from '../data'
import { MailIcon, PhoneIcon, WhatsAppIcon, GitHubIcon, LinkedInIcon, DownloadIcon } from './Icons'
import { useEffect, useState } from 'react';

const PHRASES = [
  'orchestrating AI agents',
  'wiring n8n workflows',
  'building RAG pipelines',
  'building APIs',
  'shipping React apps',
  'tuning SQL queries',
  'pairing with designers',
  'reviewing PRs',
  'deploying to production',
  'building AI-powered tools',
];

// Tech stack shown as chips under the terminal line. Edit freely.
const STACK = ['React', 'Next.js', 'Laravel', 'Python', 'PostgreSQL'];

function useTypewriter(phrases) {
  const [text, setText] = useState(phrases[0]?.[0] ?? '');

  useEffect(() => {
    let phraseIdx = 0;
    let charIdx = 0;
    let isDeleting = false;
    let timer;

    const tick = () => {
      const current = phrases[phraseIdx];

      if (isDeleting) {
        charIdx--;
        setText(current.substring(0, charIdx));
        if (charIdx === 0) {
          isDeleting = false;
          phraseIdx = (phraseIdx + 1) % phrases.length;
          timer = setTimeout(tick, 400);
          return;
        }
        timer = setTimeout(tick, 35);
      } else {
        charIdx++;
        setText(current.substring(0, charIdx));
        if (charIdx === current.length) {
          isDeleting = true;
          timer = setTimeout(tick, 1800);
          return;
        }
        timer = setTimeout(tick, 70);
      }
    };

    tick();
    return () => clearTimeout(timer);
  }, [phrases]);

  return text;
}

export default function Hero() {
  const typed = useTypewriter(PHRASES);

  return (
    <section className="hero" id="home">
      <div className="wrap hero-grid">
        <div className="reveal">
          <div className="hero-eyebrow">Open for opportunities · 2026</div>
          <h1>Hi, I'm <span className="name">{profile.name}</span></h1>
          <div className="role">{profile.role}</div>
          <p className="lead">{profile.lead}</p>

          {/* signature: live terminal status line */}
          <div className="term" aria-label="Currently working on various tasks">
            <div className="term-bar">
              <span className="td td-r" /><span className="td td-y" /><span className="td td-g" />
              <span className="term-file">~/currently</span>
            </div>
            <div className="term-body">
              <span className="term-prompt">kanwal@dev</span>
              <span className="term-sep">$</span>
              <span className="typed">{typed}</span>
              <span className="cursor" />
            </div>
          </div>

         

          <div className="hero-cta">
            <Link to="/projects" className="btn btn-primary">Explore my work</Link>
            <Link to="/contact" className="btn btn-ghost">Get in touch</Link>
          </div>

          <div className="cv-row">
            {profile.cvs.map((cv) => (
              <a key={cv.file} href={cv.file} download className="cv-btn">
                <DownloadIcon /> {cv.label}
              </a>
            ))}
          </div>

          <div className="socials">
            <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" title="GitHub"><GitHubIcon /></a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" title="LinkedIn"><LinkedInIcon /></a>
            <a href={`mailto:${profile.email}`} aria-label="Email" title="Email"><MailIcon /></a>
            <a href={`tel:${profile.phone.replace(/\s/g, '')}`} aria-label="Phone" title="Phone"><PhoneIcon /></a>
            <a href={`https://wa.me/${profile.phoneRaw}`} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" title="WhatsApp"><WhatsAppIcon /></a>
          </div>
        </div>

        <div className="reveal profile-wrap" style={{ transitionDelay: '.1s' }}>
          <div className="profile-card">
            <span className="profile-glow" aria-hidden="true" />
            <div className="profile-ring">
              <img className="pic" src={profile.photo} alt={profile.name} />
            </div>
            
            <div className="badge-stat"><b>4+</b><span>years</span></div>
          </div>
        </div>
      </div>
    </section>
  )
}
