# Kanwal Bilal — Portfolio (React + Vite)

A single-page portfolio for a Full Stack Web Developer. Built with React 18 and Vite, plain CSS with a **Slate + Blue + Cyan** theme, dark/light toggle, scroll-reveal animations, and a working contact form (opens the user's email client via `mailto:`).

## Run locally

You need [Node.js](https://nodejs.org) 18+ installed.

```bash
npm install      # install dependencies
npm run dev      # start dev server → http://localhost:5173
```

## Build for production

```bash
npm run build    # output goes to /dist
npm run preview  # preview the production build locally
```

## Project structure

```
kanwal-portfolio/
├─ index.html
├─ package.json
├─ vite.config.js
└─ src/
   ├─ main.jsx            # React entry point
   ├─ App.jsx             # composes all sections + theme state
   ├─ index.css           # all styles + theme variables
   ├─ data.js             # ← EDIT YOUR CONTENT HERE
   ├─ hooks/
   │  └─ useReveal.js      # scroll-reveal animation hook
   └─ components/
      ├─ Navbar.jsx
      ├─ Hero.jsx
      ├─ Stats.jsx
      ├─ Services.jsx
      ├─ Skills.jsx
      ├─ Projects.jsx
      ├─ Experience.jsx
      ├─ Contact.jsx
      ├─ Footer.jsx
      └─ Icons.jsx
```

## How to edit content

Open **`src/data.js`** — your name, role, contact info, stats, services, skills,
projects, and work experience all live there. No need to touch the components.

To change the colour theme, edit the CSS variables at the top of **`src/index.css`**
(`--accent` = blue, `--cyan` = cyan, `--ink`/`--surface` = slate shades).

## Deploy (free)

- **Vercel** — `npm i -g vercel` then run `vercel` in this folder.
- **Netlify** — drag the `dist` folder onto app.netlify.com, or connect the repo.
- **Firebase Hosting** — `firebase init hosting` (set public dir to `dist`), then `firebase deploy`.

## Notes

- The contact form opens the visitor's email app with a pre-filled message.
  For real form submissions without a backend, plug in a service like Formspree or Web3Forms.
- Add a profile photo by replacing the code-card markup in `src/components/Hero.jsx`.
- Add GitHub / LinkedIn links in `src/components/Hero.jsx` and `Footer.jsx`.
