// ── Edit your content here ──────────────────────────────────────────────

export const profile = {
  name: "Kanwal Bilal",
  role: "AI Automation Engineer & Full Stack Developer",
  location: "Faisalabad, Pakistan",
  email: "kanwalzubair717@gmail.com",
  phone: "+92 326 0144253",
  phoneRaw: "923260144253", // for tel: and wa.me links
  photo: "/self.png",  
  logo: "/kanwal-logo.svg",  // ← replace public/logo.png with your own logo
   lead:
    "I build autonomous AI agents, RAG pipelines, and business-process automations — then ship them to production in Docker on cloud infrastructure. Backed by 4 years of full-stack engineering across React, Next.js, Laravel, and Python.",
  bio: [
    "I spent four years building production web applications — React/Next.js front-ends, Laravel and Node.js back-ends, REST APIs, and the databases behind them. That foundation is what makes the AI work actually ship.",
    "Today I focus on AI automation: multi-agent workflows on LangGraph and Temporal, RAG pipelines over PostgreSQL/pgvector and Pinecone, and business-process automations in n8n, Make.com, and Zapier.",
    "The difference between a demo and a system is error handling, retries, human-in-the-loop checkpoints, and observability. That's the part I build — for clients across Europe, North America, and the Middle East.",
  ],
}

export const stats = [
  { num: "4", lbl: "Years of Experience" },
  { num: "25+", lbl: "Automations Delivered" },
  { num: "15+", lbl: "Clients Served" },
  { num: "15h", lbl: "Weekly Hours Saved" },
]
export const services = [
  { icon: "🤖", title: "AI Agent Development", text: "Multi-agent workflows on LangGraph and Temporal with retries, human-in-the-loop approval, and durable state — built to run unattended, not just demo well." },
  { icon: "⚙️", title: "Business Process Automation", text: "End-to-end automations in n8n, Make.com, and Zapier connecting CRMs, webhooks, and LLM APIs to remove repetitive manual work." },
  { icon: "🧠", title: "RAG & LLM Integration", text: "Retrieval-augmented pipelines over pgvector and Pinecone, plus Claude/OpenAI API integration and prompt engineering for grounded, reliable output." },
  { icon: "🧩", title: "Full Stack Development", text: "Complete web apps end to end with React, Next.js, FastAPI, Laravel, and Node.js — from database schema to deployment." },
  { icon: "🔌", title: "API & Integration Work", text: "Secure, well-documented REST APIs and webhook integrations, tested with Postman and Swagger for reliable data flow between systems." },
  { icon: "🐳", title: "Deployment & DevOps", text: "Containerized services with Docker and GitHub Actions CI/CD pipelines deploying to AWS, Vercel, and Railway with automated testing." },
]

// Core skills shown as animated proficiency rings. `level` = self-rated %, `color` = brand accent.
export const coreSkills = [
  { name: "LangGraph", abbr: "Lg", level: 88, color: "#2E6F5E" },
  { name: "LangChain", abbr: "Lc", level: 85, color: "#1C9E7A" },
  { name: "FastAPI", abbr: "Fa", level: 88, color: "#05998B" },
  { name: "Python", abbr: "Py", level: 88, color: "#3776AB" },
  { name: "n8n", abbr: "N8", level: 92, color: "#EA4B71" },
  { name: "Docker", abbr: "Dk", level: 82, color: "#2496ED" },
  { name: "React", abbr: "Re", level: 95, color: "#61DAFB" },
  { name: "Next.js", abbr: "Nx", level: 90, color: "#7DD3FC" },
  { name: "TypeScript", abbr: "Ts", level: 85, color: "#4C8DD6" },
  { name: "PostgreSQL", abbr: "Pg", level: 85, color: "#5B86E5" },
]
// Everything else flows by in the scrolling ribbon — no need to list it all as cards.
export const moreTools = [
  "Temporal", "RAG", "pgvector", "Pinecone", "Prisma ORM", "Redis", "Make.com", "Zapier",
  "Claude API", "OpenAI API", "Prompt Engineering", "Webhooks", "REST APIs",
  "Node.js", "Laravel", "PHP", "JavaScript", "Redux", "Tailwind CSS", "Sass", "Bootstrap",
  "MySQL", "Firebase", "AWS", "Vercel", "Railway", "GitHub Actions", "Pytest", "Jest",
  "Git", "GitHub", "Postman", "Swagger", "Agile / Scrum",
]

// Slate / Blue / Cyan friendly gradients for each project card.
// Add an `image: "/your-screenshot.png"` (file goes in /public) to show a real
// screenshot instead of the gradient + code badge. Cards without an image
// automatically fall back to the gradient badge.
export const projects = [
  { code: "AO", image: "/agent-arch.png", tags: ["LangGraph", "Temporal", "FastAPI", "Multi-Agent"], title: "AI Agent for Executive Outreach", text: "Event-driven multi-agent pipeline running CEO/B2B outreach end to end — lead discovery, waterfall email verification, LLM signal extraction, regional copy localization (EN/ES/PT/DE), human-in-the-loop approval, and reply-intent classification across concurrent campaigns." },
  { code: "LQ",image:"/lead-qual.png", grad: "linear-gradient(135deg,#4C1D95,#8B5CF6)", tags: ["n8n", "LLM", "CRM", "Slack"], title: "AI Lead Qualification & CRM Automation", text: "Captures inbound leads, enriches them, scores buying intent with an LLM, and syncs qualified prospects into the CRM with instant Slack alerts to the rep — replacing manual lead triage." },
  { code: "LI",image:"/linkedin-auto.png", grad: "linear-gradient(135deg,#1E1B4B,#4F46E5)", tags: ["n8n", "LLM", "Automation", "Analytics"], title: "LinkedIn Content Automation", text: "End-to-end pipeline that researches trending topics, generates on-brand posts with LLMs, then schedules, publishes, and logs engagement metrics back for review." },
  { code: "SW", image: "/salo.png", grad: "linear-gradient(135deg,#1E3A8A,#2563EB)", tags: ["Laravel", "POS", "AJAX"], title: "Salveowell", text: "Admin panel & POS order-management system with role-based access and live AJAX workflows." },
  { code: "OA", image: "/ohana.png", grad: "linear-gradient(135deg,#0E7490,#22D3EE)", tags: ["React", "Bilingual", "Dashboard"], title: "Ohana Africa", text: "Bilingual (French / English) group-savings platform with custom dashboard components." },
  { code: "AI", image: "/poem.png", grad: "linear-gradient(135deg,#3730A3,#6366F1)", tags: ["AI", "React", "LLM API"], title: "AI Poem Generator", text: "AI-powered web app that generates custom poems from user prompts through a clean, interactive interface." },
  { code: "SQ", image: "/sqt.png", grad: "linear-gradient(135deg,#334155,#3B82F6)", tags: ["E-commerce", "Payments", "Auth"], title: "SQT Mart", text: "E-commerce platform with secure authentication and integrated payment flows." },
  { code: "EF", image: "/edu.png", grad: "linear-gradient(135deg,#1D4ED8,#38BDF8)", tags: ["Laravel", "React", "LMS"], title: "EduFlow", text: "Learning-management system with course creation, video lessons, quizzes, and student progress tracking." },
  { code: "TR", image: "/trading.png", grad: "linear-gradient(135deg,#334155,#0EA5E9)", tags: ["Trading", "Web Design", "Multi-page"], title: "Trading Platform Website", text: "Three-page trading platform website design covering the landing, sign-up, and dashboard views." },
  { code: "MS", image: "/moody.png", grad: "linear-gradient(135deg,#1E293B,#0891B2)", tags: ["E-commerce", "Web Design", "UI/UX"], title: "Moody Store", text: "Full e-commerce storefront design — hero deals, product listings, and category sections with a clean, modern layout." },
  { code: "TF", image: "/trafalgar.png", grad: "linear-gradient(135deg,#0C4A6E,#0EA5E9)", tags: ["Landing Page", "UI/UX", "Responsive"], title: "Trafalgar Landing Page", text: "Clean, conversion-focused healthcare landing page — hero, services, and testimonials sections with a fully responsive layout." },
  { code: "SP", image: "/tag.png", grad: "linear-gradient(135deg,#1E3A8A,#2563EB)", tags: ["SaaS", "Compliance Automation", "Browser Automation"], title: "TagSentry: Tracking & Consent Compliance Auditor", text: "Website consent-compliance auditor that scans sites in headless Chromium for GDPR, CCPA/GPC and Consent Mode v2 issues, with automated PDF reports." },
  { code: "LP", image: "/pcpa-cover.png", grad: "linear-gradient(135deg,#1E3A8A,#2563EB)", tags: ["Marketing Automation", "CRM Integration", "Analytics"], title: "Ad-to-Revenue Attribution System", text: "End-to-end lead attribution tracking ad clicks across four channels to HubSpot deals, sending closed revenue back to Google Ads with a Looker Studio dashboard." },
  { code: "EM", image: "/mail.png", grad: "linear-gradient(135deg,#0F766E,#2DD4BF)", tags: ["Email Design", "Marketing", "HTML Email"], title: "Email Marketing", text: "Responsive promotional email templates (BOGO & campaign designs) built for strong open and click-through rates." },
]




export const experience = [
  {
    when: "2023 — Present",
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
    when: "2022 — Present",
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
