// ── Edit your content here ──────────────────────────────────────────────

export const profile = {
  name: "Kanwal Bilal",
  role: "Full Stack Web Developer",
  location: "Faisalabad, Pakistan",
  email: "kanwalzubair717@gmail.com",
  phone: "+92 326 0144253",
  phoneRaw: "923260144253", // for tel: and wa.me links
  photo: "/self.png",  
  logo: "/kanwal-logo.svg",  // ← replace public/logo.png with your own logo
  lead:
    "I build scalable, secure, and AI-powered web applications using React, Next.js, Laravel and Python—turning ideas into fast, modern, and production-ready digital experiences.",
  bio: [
    "I'm a Full Stack Web Developer with 4 years of experience designing and delivering scalable, secure web applications. I work comfortably across the entire stack — modern front-end frameworks, robust back-end services, relational databases, APIs, and cloud tooling.",
    "I have a proven record of shipping high-quality solutions and collaborating effectively within multicultural, Agile teams. From requirement analysis through deployment, I focus on building products that are fast, reliable, and a pleasure to use.",
  ],
}

export const stats = [
  { num: "4+", lbl: "Years of Experience" },
  { num: "15+", lbl: "Projects Delivered" },
  { num: "10+", lbl: "Technologies Mastered" },
  { num: "100%", lbl: "Client Commitment" },
]

export const services = [
  { icon: "🧩", title: "Full Stack Development", text: "Building complete web apps end to end with React, Next.js, Laravel, and Node.js — from database to deployment." },
  { icon: "🔌", title: "REST API Development", text: "Designing and integrating secure, well-documented REST APIs with Postman and Swagger for reliable data flow." },
  { icon: "🗄️", title: "Database Design", text: "Modeling and optimizing relational databases in MySQL and PostgreSQL for speed and data integrity." },
  { icon: "🎨", title: "Front-End Engineering", text: "Crafting responsive, accessible interfaces with React, Redux, Tailwind CSS, and TypeScript." },
  { icon: "🔐", title: "Auth & Security", text: "Implementing authentication, role-based access control, and payment-gateway integrations done right." },
  { icon: "⚡", title: "Performance & SEO", text: "Optimizing application speed, SEO, and UX to lift real business performance and search visibility." },
]

// Core skills shown as animated proficiency rings. `level` = self-rated %, `color` = brand accent.
export const coreSkills = [
  { name: "React", abbr: "Re", level: 95, color: "#61DAFB" },
  { name: "Next.js", abbr: "Nx", level: 90, color: "#7DD3FC" },
  { name: "Laravel", abbr: "La", level: 90, color: "#FB5046" },
  { name: "Node.js", abbr: "No", level: 85, color: "#5FB85A" },
  { name: "TypeScript", abbr: "Ts", level: 85, color: "#4C8DD6" },
  { name: "PHP", abbr: "Php", level: 88, color: "#8B90D8" },
  { name: "PostgreSQL", abbr: "Pg", level: 85, color: "#5B86E5" },
  { name: "Tailwind", abbr: "Tw", level: 92, color: "#38BDF8" },
]

// Everything else flows by in the scrolling ribbon — no need to list it all as cards.
export const moreTools = [
  "JavaScript", "HTML", "CSS", "Sass", "Bootstrap", "Redux", "Firebase", "Python",
  "MySQL", "Navicat", "REST APIs", "Git", "GitHub", "Postman", "Swagger", "VS Code", "cPanel", "Agile / Scrum",
]

// Slate / Blue / Cyan friendly gradients for each project card.
// Add an `image: "/your-screenshot.png"` (file goes in /public) to show a real
// screenshot instead of the gradient + code badge. Cards without an image
// automatically fall back to the gradient badge.
export const projects = [
  { code: "SW",image: "/salo.png", grad: "linear-gradient(135deg,#1E3A8A,#2563EB)", tags: ["Laravel", "POS", "AJAX"], title: "Salveowell", text: "Admin panel & POS order-management system with role-based access and live AJAX workflows." },
  { code: "OA", image: "/ohana.png", grad: "linear-gradient(135deg,#0E7490,#22D3EE)", tags: ["React", "Bilingual", "Dashboard"], title: "Ohana Africa", text: "Bilingual (French / English) group-savings platform with custom dashboard components." },
  { code: "SQ", image: "/sqt.png", grad: "linear-gradient(135deg,#334155,#3B82F6)", tags: ["E-commerce", "Payments", "Auth"], title: "SQT Mart", text: "E-commerce platform with secure authentication and integrated payment flows." },
  { code: "EF", image: "/edu.png", grad: "linear-gradient(135deg,#1D4ED8,#38BDF8)", tags: ["Laravel", "React", "LMS"], title: "EduFlow", text: "Learning-management system with course creation, video lessons, quizzes, and student progress tracking." },
  { code: "TF", image: "/trafalgar.png", grad: "linear-gradient(135deg,#0C4A6E,#0EA5E9)", tags: ["Landing Page", "UI/UX", "Responsive"], title: "Trafalgar Landing Page", text: "Clean, conversion-focused healthcare landing page — hero, services, and testimonials sections with a fully responsive layout." },
  { code: "MS", image: "/moody.png", grad: "linear-gradient(135deg,#1E293B,#0891B2)", tags: ["E-commerce", "Web Design", "UI/UX"], title: "Moody Store", text: "Full e-commerce storefront design — hero deals, product listings, and category sections with a clean, modern layout." },
  //{ code: "RE",image: "/mail.png", grad: "linear-gradient(135deg,#155E75,#22D3EE)", tags: ["Dashboard", "Real Estate", "Analytics"], title: "Real Estate Dashboard", text: "Real-estate admin dashboard with property analytics, listing management, and rich data visualizations." },
  { code: "AI",image: "/poem.png", grad: "linear-gradient(135deg,#3730A3,#6366F1)", tags: ["AI", "React", "Web App"], title: "AI Poem Generator", text: "AI-powered web app that generates custom poems from user prompts through a clean, interactive interface." },
  { code: "EM",image: "/mail.png", grad: "linear-gradient(135deg,#0F766E,#2DD4BF)", tags: ["Email Design", "Marketing", "HTML Email"], title: "Email Marketing", text: "Responsive promotional email templates (BOGO & campaign designs) built for strong open and click-through rates." },
  { code: "TR", image: "/trading.png", grad: "linear-gradient(135deg,#334155,#0EA5E9)", tags: ["Trading", "Web Design", "Multi-page"], title: "Trading Platform Website", text: "Three-page trading platform website design covering the landing, sign-up, and dashboard views." },
]

export const experience = [
  {
    when: "2022 — Present",
    role: "Full Stack Web Developer",
    company: "BixoSoft",
    points: [
      "Built scalable web applications end to end using React, Next.js, Laravel, and Node.js.",
      "Developed responsive interfaces with React, Tailwind CSS, and Redux.",
      "Designed secure REST APIs and optimized MySQL / PostgreSQL databases.",
      "Collaborated with UI/UX and back-end teams using Agile / Scrum methodologies.",
      "Delivered key client projects including Salveowell, SQT Mart, and Ohana Africa.",
    ],
  },
  {
    when: "2021 — Present",
    role: "Freelance Full Stack Developer",
    company: "Self-Employed",
    points: [
      "Delivered complete web solutions for international and local clients, from requirements to deployment.",
      "Built custom Admin Panels, CRM systems, E-commerce platforms, and Business Dashboards.",
      "Implemented authentication, role-based access control, and payment-gateway integrations.",
      "Optimized application speed, SEO, and UX to improve business performance.",
      "Worked directly with clients on requirements, consultation, and on-time delivery.",
    ],
  },
]
