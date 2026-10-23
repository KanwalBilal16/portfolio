// ── Edit your content here ──────────────────────────────────────────────

export const profile = {
  name: "Kanwal Bilal",
  role: "AI Automation Engineer & Full Stack Developer",
  location: "Faisalabad, Pakistan",
  email: "kanwalzubair717@gmail.com",
  phone: "+92 326 0144253",
  phoneRaw: "923260144253", // for tel: and wa.me links
  photo: "/self.png",  
  logo: "/kanwal-logo.svg",
  github: "https://github.com/KanwalBilal16",
  linkedin: "https://www.linkedin.com/in/kanwal-bilal-dev",
  // Both files live in /public
  cvs: [
    { label: "Full Stack CV", file: "/Kanwal-Bilal-FullStack-Developer-CV.pdf" },
    { label: "AI Automation CV", file: "/Kanwal-Bilal-AI-Automation-Engineer-CV.pdf" },
  ],
  lead:
    "I build autonomous AI agents, RAG pipelines, and business-process automations — then ship them to production in Docker on cloud infrastructure. Backed by 4 years of full-stack engineering across React, Next.js, Laravel, and Python.",
  bio: [
    "I spent four years building production web applications — React/Next.js front-ends, Laravel and Node.js back-ends, REST APIs, and the databases behind them. That foundation is what makes the AI work actually ship.",
    "Today I focus on AI automation: multi-agent workflows on LangGraph and Temporal, RAG pipelines over PostgreSQL/pgvector and Pinecone, and business-process automations in n8n, Make.com, and Zapier.",
    "The difference between a demo and a system is error handling, retries, human-in-the-loop checkpoints, and observability. That's the part I build — for clients across Europe, North America, and the Middle East.",
  ],
}

export const stats = [
  { num: "4", lbl: "Years Building for Production", note: "Full-stack web apps since 2022" },
  { num: "25+", lbl: "Automations Delivered", note: "n8n, Make.com & Zapier at BixoSoft" },
  { num: "15+", lbl: "Freelance Clients", note: "Web apps, CRMs & dashboards" },
  { num: "~15h", lbl: "Manual Work Removed / Week", note: "Data entry & follow-up cut by automation" },
]
export const services = [
  { icon: "🤖", title: "AI Agent Development", text: "Multi-agent workflows on LangGraph and Temporal with retries, human-in-the-loop approval, and durable state — built to run unattended, not just demo well." },
  { icon: "⚙️", title: "Business Process Automation", text: "End-to-end automations in n8n, Make.com, and Zapier connecting CRMs, webhooks, and LLM APIs to remove repetitive manual work." },
  { icon: "🧠", title: "RAG & LLM Integration", text: "Retrieval-augmented pipelines over pgvector and Pinecone, plus Claude/OpenAI API integration and prompt engineering for grounded, reliable output." },
  { icon: "🧩", title: "Full Stack Development", text: "Complete web apps end to end with React, Next.js, FastAPI, Laravel, and Node.js — from database schema to deployment." },
  { icon: "🔌", title: "API & Integration Work", text: "Secure, well-documented REST APIs and webhook integrations, tested with Postman and Swagger for reliable data flow between systems." },
  { icon: "🐳", title: "Deployment & DevOps", text: "Containerized services with Docker and GitHub Actions CI/CD pipelines deploying to AWS, Vercel, and Railway with automated testing." },
]

// Grouped toolkit. `proof` = project codes (see `projects` below) that put the group to work.
export const skillGroups = [
  {
    title: "AI & Automation",
    blurb: "Agents, RAG and workflow automation that run unattended.",
    tools: ["LangGraph", "LangChain", "Temporal", "RAG", "pgvector", "Pinecone", "Claude / OpenAI APIs", "Prompt Engineering", "n8n", "Make.com", "Zapier", "Playwright"],
    proof: ["AO", "LQ", "LI"],
  },
  {
    title: "Full Stack",
    blurb: "Front-ends, APIs and back-ends, from schema to UI.",
    tools: ["React", "Next.js", "TypeScript", "Redux", "Tailwind CSS", "Laravel", "PHP", "Node.js", "Python", "FastAPI", "REST APIs", "Webhooks"],
    proof: ["SP", "OA", "SW"],
  },
  {
    title: "Data & Deployment",
    blurb: "Databases, tracking and the pipelines that ship it all.",
    tools: ["PostgreSQL", "MySQL", "Redis", "Prisma", "HubSpot API", "GA4 / GTM", "Looker Studio", "Docker", "GitHub Actions", "AWS", "Vercel", "Railway", "PHPUnit", "Pytest", "Jest"],
    proof: ["LP", "AO", "SP"],
  },
]

export const projects = [
  {
    code: "AO",
    image: "/agent-arch.png",
    tags: ["LangGraph", "Temporal", "FastAPI", "Multi-Agent"],
    title: "AI Agent for Executive Outreach",
    text: "Event-driven multi-agent pipeline running CEO/B2B outreach end to end — lead discovery, waterfall email verification, LLM signal extraction, regional copy localization (EN/ES/PT/DE), human-in-the-loop approval, and reply-intent classification across concurrent campaigns.",
    slug: "ai-executive-outreach-agent",
    caseStudy: {
      client: "BixoSoft",
      type: "AI agent · production system",
      stack: ["LangGraph", "Temporal", "FastAPI", "PostgreSQL", "Prisma", "Redis", "Docker", "GitHub Actions"],
      summary: "An AI system that runs cold outreach to CEOs and B2B decision-makers on its own: it finds the right people, checks their emails are real, researches each one, writes a personalised message in their language, waits for a human to approve it, and then reads the replies to decide what happens next.",
      problem: "Good B2B outreach is slow when done by hand. For every lead someone has to find the person, verify the email so messages don't bounce, research the company, write a message that sounds personal (sometimes in Spanish, Portuguese or German), and later read every reply to see if it's interested, a referral, or a no. With several campaigns running at once, this doesn't scale.",
      role: "I built and shipped the system end to end: the AI agent logic, the backend services, the database and queues, and the Docker + CI/CD setup that deploys it.",
      flow: [
        { title: "Find leads", text: "A discovery agent collects target decision-makers for the campaign." },
        { title: "Verify emails", text: "Each address goes through several verification providers in turn (a 'waterfall'), so only deliverable emails move forward." },
        { title: "Research the lead", text: "An LLM pulls out useful signals about the person and company — the hooks that make a message feel personal." },
        { title: "Write & localise", text: "The agent drafts the email in the lead's regional language: English, Spanish, Portuguese or German." },
        { title: "Human approval", text: "Nothing is sent automatically. Every draft waits for a person to approve or edit it." },
        { title: "Read replies", text: "Incoming replies are classified by intent (e.g. interested, not now, wrong person) so the right follow-up happens." },
      ],
      decisions: [
        { title: "Temporal for reliability", text: "Each campaign is a durable workflow. If an API call fails or a server restarts, the step is retried and the campaign resumes where it stopped instead of starting over." },
        { title: "Human-in-the-loop", text: "AI writes, a person approves. This keeps the speed of automation without risking an off-brand email reaching a CEO." },
        { title: "Queues between agents", text: "Redis queues decouple the agents, so many campaigns can run concurrently without one slow step blocking the others." },
      ],
      result: [
        "Running in production with multiple campaigns at the same time.",
        "The whole cycle — from finding a lead to sorting their reply — runs without manual work, apart from approving each send.",
        "Containerised with Docker and deployed automatically through GitHub Actions.",
      ],
    },
  },
  {
    code: "SP",
    image: "/tag.png",
    grad: "linear-gradient(135deg,#1E3A8A,#2563EB)",
    tags: ["SaaS", "Compliance Automation", "Browser Automation"],
    title: "TagSentry: Tracking & Consent Compliance Auditor",
    text: "Website consent-compliance auditor that scans sites in headless Chromium for GDPR, CCPA/GPC and Consent Mode v2 issues, with automated PDF reports.",
    slug: "tagsentry-consent-auditor",
    caseStudy: {
      client: "SaaS product",
      type: "Web app · compliance automation",
      stack: ["Laravel 12", "PHP 8.2", "Node.js", "Playwright", "MySQL", "Tailwind CSS 4", "Vite", "PHPUnit", "Python (openpyxl)"],
      summary: "A web app that checks whether a website really respects cookie consent. It opens the site in a real (headless) browser, watches which trackers fire before and after the visitor clicks 'Accept', and produces a branded PDF report of every privacy issue it finds.",
      problem: "Privacy laws (GDPR / UK PECR in Europe, CCPA in California) and Google Consent Mode v2 say tracking must wait for the visitor's consent. Many sites still fire Google, Meta and other trackers before that. Checking this by hand means opening dev tools, clicking through the cookie banner and inspecting network requests — slow work agencies have to repeat for every client site.",
      role: "I designed and built the whole product: the browser scanning engine, the detection rules, the background job pipeline, the PDF reports, the multi-user dashboard and the test suite.",
      flow: [
        { title: "Scan 1 — before consent", text: "The site is loaded in headless Chromium without touching the cookie banner. Anything that fires here is a potential violation." },
        { title: "Scan 2 — after 'Accept'", text: "The scanner accepts cookies and loads again, to confirm trackers behave correctly once consent is given." },
        { title: "Scan 3 — with GPC on", text: "The site is loaded with Global Privacy Control (the browser's 'do not sell my data' signal) to test CCPA compliance." },
        { title: "Detect issues", text: "A rule engine runs 7 compliance checks, identifies vendors from a 48-rule fingerprint database, and decodes GA4's consent signals." },
        { title: "Generate the report", text: "Findings are turned into an agency-branded PDF, rendered with Playwright." },
      ],
      decisions: [
        { title: "Three scans, not one", text: "Comparing the same site in three consent states is what proves a violation — a single scan can't show whether a tracker ignored the visitor's choice." },
        { title: "Background job pipeline", text: "Scan → report → PDF runs on queues with hard timeouts, failure handling and a scheduled 'reaper' that cleans up stuck jobs, so one broken site never blocks the rest." },
        { title: "Bulk mode for prospecting", text: "Shopify stores are loaded from an Excel workbook, scanned overnight, and the PDF links are written back into the same sheet — ready for a sales team in the morning." },
      ],
      result: [
        "Multi-user dashboard with login, alerts feed, tracker inventory and role-based permissions.",
        "Covered by ~47 PHPUnit feature tests.",
        "Bulk audits of many sites run overnight with no manual steps.",
      ],
    },
  },
  {
    code: "LP",
    image: "/pcpa-cover.png",
    grad: "linear-gradient(135deg,#1E3A8A,#2563EB)",
    tags: ["Marketing Automation", "CRM Integration", "Analytics"],
    title: "Ad-to-Revenue Attribution System",
    text: "End-to-end lead attribution tracking ad clicks across four channels to HubSpot deals, sending closed revenue back to Google Ads with a Looker Studio dashboard.",
    slug: "ad-to-revenue-attribution",
    caseStudy: {
      client: "Home-services business (BixoSoft client)",
      type: "Marketing automation · CRM integration",
      timeline: "Sep – Oct 2026",
      stack: ["Make.com", "HubSpot CRM v3 API", "GTM", "GA4", "Google Ads", "Meta Pixel", "CallRail", "Looker Studio", "Laravel"],
      summary: "A tracking and automation system that follows every customer from the ad they clicked to the money they eventually paid — and sends that revenue back to Google Ads so the ads optimise for real sales, not just form fills.",
      problem: "The business ran Google and Meta ads, and customers reached them four ways: a web form, online booking, live chat and phone calls. None of these were linked back to the ad that produced them, so nobody could say which campaigns actually brought in paying jobs — and Google Ads was optimising blind.",
      role: "I designed and built the full tracking and automation layer: tag setup, lead capture on the Laravel website, three Make.com automations, the HubSpot integration and the reporting dashboard.",
      flow: [
        { title: "Capture the click", text: "When a visitor arrives from an ad, the ad IDs (gclid / fbclid) and UTM tags are stored with them." },
        { title: "Track all 4 channels", text: "Forms, bookings and chats are tracked through Google Tag Manager; phone calls are tracked by CallRail, which shows each visitor a unique number." },
        { title: "Route into the CRM", text: "A Make.com automation sends every lead to HubSpot (and a Google Sheet) with its ad source attached, removing duplicates." },
        { title: "Sales closes the deal", text: "The team works the lead in HubSpot as usual; when a deal is won, its revenue is recorded." },
        { title: "Send revenue back", text: "A daily automation sends won-deal revenue to Google Ads as offline conversions, closing the loop." },
        { title: "Report", text: "A Looker Studio dashboard shows the funnel by channel, bookings vs. ad spend, cost per booking and ROAS per campaign." },
      ],
      decisions: [
        { title: "Phone calls count too", text: "Calls are often the biggest channel for home services. CallRail plus GA4's server-side Measurement Protocol makes them as trackable as a form." },
        { title: "No double counting", text: "Meta Pixel events are de-duplicated and leads are de-duplicated before reaching HubSpot, so reports aren't inflated." },
        { title: "Built on free tiers", text: "Everything runs within HubSpot Free and Make Free limits, using a HubSpot Private App on the CRM v3 API — no extra software cost for the client." },
      ],
      result: [
        "Every lead is traceable from ad click to closed revenue across all 4 channels.",
        "Google Ads now learns from real closed revenue, fed back daily.",
        "The owner can see cost per booking and ROAS for each campaign in one dashboard.",
      ],
    },
  },
  {
    code: "LQ",
    image: "/lead-qual.png",
    grad: "linear-gradient(135deg,#4C1D95,#8B5CF6)",
    tags: ["n8n", "LLM", "CRM", "Slack"],
    title: "AI Lead Qualification & CRM Automation",
    text: "Captures inbound leads, enriches them, scores buying intent with an LLM, and syncs qualified prospects into the CRM with instant Slack alerts to the rep — replacing manual lead triage.",
  },
  {
    code: "LI",
    image: "/linkedin-auto.png",
    grad: "linear-gradient(135deg,#1E1B4B,#4F46E5)",
    tags: ["n8n", "LLM", "Automation", "Analytics"],
    title: "LinkedIn Content Automation",
    text: "End-to-end pipeline that researches trending topics, generates on-brand posts with LLMs, then schedules, publishes, and logs engagement metrics back for review.",
  },
  {
    code: "OA",
    image: "/ohana.png",
    grad: "linear-gradient(135deg,#0E7490,#22D3EE)",
    tags: ["React", "Bilingual", "Dashboard"],
    title: "Ohana Africa",
    text: "Bilingual (French / English) group-savings platform with custom dashboard components.",
  },
  {
    code: "SW",
    image: "/salo.png",
    grad: "linear-gradient(135deg,#1E3A8A,#2563EB)",
    tags: ["Laravel", "POS", "AJAX"],
    title: "Salveowell",
    text: "Admin panel & POS order-management system with role-based access and live AJAX workflows.",
  },
  {
    code: "EF",
    image: "/edu.png",
    grad: "linear-gradient(135deg,#1D4ED8,#38BDF8)",
    tags: ["Laravel", "React", "LMS"],
    title: "EduFlow",
    text: "Learning-management system with course creation, video lessons, quizzes, and student progress tracking.",
  },
  {
    code: "SQ",
    image: "/sqt.png",
    grad: "linear-gradient(135deg,#334155,#3B82F6)",
    tags: ["E-commerce", "Payments", "Auth"],
    title: "SQT Mart",
    text: "E-commerce platform with secure authentication and integrated payment flows.",
  },
  {
    code: "AI",
    image: "/poem.png",
    grad: "linear-gradient(135deg,#3730A3,#6366F1)",
    tags: ["AI", "React", "LLM API"],
    title: "AI Poem Generator",
    text: "AI-powered web app that generates custom poems from user prompts through a clean, interactive interface.",
  },
  {
    code: "MS",
    image: "/moody.png",
    grad: "linear-gradient(135deg,#1E293B,#0891B2)",
    tags: ["E-commerce", "Web Design", "UI/UX"],
    title: "Moody Store",
    text: "Full e-commerce storefront design — hero deals, product listings, and category sections with a clean, modern layout.",
  },
  {
    code: "TR",
    image: "/trading.png",
    grad: "linear-gradient(135deg,#334155,#0EA5E9)",
    tags: ["Trading", "Web Design", "Multi-page"],
    title: "Trading Platform Website",
    text: "Three-page trading platform website design covering the landing, sign-up, and dashboard views.",
  },
  {
    code: "EM",
    image: "/mail.png",
    grad: "linear-gradient(135deg,#0F766E,#2DD4BF)",
    tags: ["Email Design", "Marketing", "HTML Email"],
    title: "Email Marketing",
    text: "Responsive promotional email templates (BOGO & campaign designs) built for strong open and click-through rates.",
  },
  {
    code: "TF",
    image: "/trafalgar.png",
    grad: "linear-gradient(135deg,#0C4A6E,#0EA5E9)",
    tags: ["Landing Page", "UI/UX", "Responsive"],
    title: "Trafalgar Landing Page",
    text: "Clean, conversion-focused healthcare landing page — hero, services, and testimonials sections with a fully responsive layout.",
  },
];

export const experience = [
  {
    when: "2023 — Present",
    role: "AI Automation Engineer & Full Stack Developer",
    company: "BixoSoft",
    points: [
      "Built and shipped an autonomous AI outreach agent — an event-driven multi-agent pipeline on LangGraph and Temporal with FastAPI, PostgreSQL/Prisma and Redis queues.",
      "Delivered 25+ business-process automations in n8n, Make.com and Zapier, removing roughly 15 hours/week of manual data entry and follow-up.",
      "Built an ad-to-revenue attribution system linking 4 lead channels to HubSpot deals and feeding closed revenue back to Google Ads.",
      "Developed React/Next.js interfaces and secure REST APIs for 8+ client products; optimised MySQL/PostgreSQL queries to cut page load times by up to 40%.",
      "Containerised services with Docker and set up GitHub Actions CI/CD for automated testing and deployment.",
    ],
  },
  {
    when: "2022 — Present",
    role: "Freelance Full Stack Developer (part-time)",
    company: "Self-Employed",
    points: [
      "Delivered end-to-end web solutions for 15+ international and local clients, from requirements to deployment and maintenance.",
      "Built custom admin panels, CRM systems, e-commerce platforms and business dashboards.",
      "Implemented authentication, role-based access control, API integrations, webhooks and payment gateways.",
      "Improved application speed, SEO and UX; deployed and maintained apps on cloud and shared hosting.",
    ],
  },
]
