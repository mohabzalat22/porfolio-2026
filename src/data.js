// Edit everything about your portfolio here.
// Replace the "#" links with your real LinkedIn / GitHub / project URLs.

export const profile = {
  name: "Mohab Ali Gaber",
  role: "Full Stack Developer",
  location: "Alexandria, Egypt",
  email: "mohabzalat20@gmail.com",
  whatsapp: "https://wa.me/+201208392186",
  linkedin: "https://www.linkedin.com/in/mohab-ali-8a7599281/",
  github: "https://github.com/mohabzalat22",
  typing: [
    "scalable web apps.",
    "AI-integrated products.",
    "real-time experiences.",
    "clean, tested backends.",
  ],
  summary:
    "Fullstack developer with 2+ years of experience across PHP/Laravel and the Node.js/TypeScript ecosystem. Recent focus on backend architecture, AI-integrated products (OpenAI, MCP tool servers, real-time streaming), and data modeling for e-commerce. I own features end-to-end — from database design to production deployment.",
  stats: [
    { value: 2, suffix: "+", label: "Years experience" },
    { value: 10, suffix: "+", label: "Projects shipped" },
    { value: 5, suffix: "", label: "AI integrations" },
  ],
};

export const replytia = {
  name: "Replytia",
  url: "https://replytia.com",
  tagline: "An AI agent that turns every DM into a deal or order.",
  description:
    "TIA talks to customers, reads your live store data, and turns each conversation into a tracked contact and deal or order.",
  channels: [
    { name: "WhatsApp", status: "Live" },
    { name: "Messenger", status: "Live" },
    { name: "Website Chat", status: "Live" },
  ],
  features: [
    {
      tag: "AI agent",
      title: "Replies on every channel",
      text: "TIA answers instantly on WhatsApp, Messenger, your website, Instagram and TikTok. No missed chats, no waiting.",
    },
    {
      tag: "Store plugin",
      title: "Real data, never guessing",
      text: "Reads live products, prices, stock and order status from your store. Every answer is grounded.",
    },
    {
      tag: "Handoff",
      title: "Human takeover in one click",
      text: "TIA knows when to step aside. Assign, jump in, and take over any conversation effortlessly.",
    },
    {
      tag: "Inbox",
      title: "One inbox for everything",
      text: "All channels in a single list: profile, history, tags and assignment beside every chat.",
    },
    {
      tag: "Pipeline",
      title: "Chats become deals",
      text: "Every conversation becomes a contact and a tracked deal in a clean Kanban with win/loss totals.",
    },
    {
      tag: "Insights",
      title: "See what the agent earns",
      text: "Volume per channel, AI resolution rate vs. handoffs, pipeline value and conversion at a glance.",
    },
  ],
};

export const skills = [
  {
    group: "Backend",
    items: ["PHP", "Laravel", "Node.js", "Express.js", "NestJS", "TypeScript", "REST APIs", "GraphQL"],
  },
  {
    group: "Frontend",
    items: ["React", "Next.js", "Vue.js", "Inertia.js", "Tailwind CSS", "Vite", "Livewire"],
  },
  {
    group: "AI & Integrations",
    items: ["OpenAI API", "MCP", "Meta Ads API", "Meta Ad Library", "SSE", "Ollama", "Google Gemini"],
  },
  {
    group: "Databases",
    items: ["PostgreSQL", "MySQL", "Prisma", "Drizzle ORM", "Eloquent", "Redis"],
  },
  {
    group: "DevOps & Tools",
    items: ["Docker", "Nginx", "Git", "GitHub", "Linux", "AWS", "cPanel"],
  },
  {
    group: "Architecture",
    items: ["MVC", "Repository Pattern", "Service Layer", "EAV", "Auth & AuthZ", "DB Transactions"],
  },
];

export const projects = [
  {
    title: "AdStrike",
    kind: "ai",
    subtitle: "AI-Powered Meta Ads Management Platform",
    text: "AI Meta Ads intelligence SaaS using OpenAI + Meta Ad Library for competitor research, creative analysis, and brand-voice ad generation. Real-time AI chat via SSE, powered by an MCP server architecture with a Meta Graph API client, Redis caching and encrypted token resolution.",
    stack: ["NestJS", "Next.js", "Prisma", "PostgreSQL", "BullMQ", "Redis", "Turborepo"],
    link: "",
    featured: true,
  },
  {
    title: "Cardio AI",
    kind: "ai",
    subtitle: "Cardiovascular Risk Assessment App",
    text: "Conversational health app wiring a local LLM to MCP tools. Processes user health inputs and calls external analysis tools within the application workflow.",
    stack: ["Next.js", "Prisma", "PostgreSQL", "Ollama", "MCP"],
    link: "https://github.com/mohabzalat22/heart-disease",
  },
  {
    title: "Movie Reservation System",
    kind: "backend",
    subtitle: "Transactional booking backend",
    text: "Auth, movie/showtime management, seat availability and end-to-end reservations. Transactional logic prevents double-booking under concurrent requests.",
    stack: ["Node.js", "Express", "TypeScript", "Prisma", "PostgreSQL"],
    link: "https://github.com/mohabzalat22/movie-reservation-system",
  },
  {
    title: "MIS E-Commerce / PIM",
    kind: "backend",
    subtitle: "Product Information Management",
    text: "Scalable product management on an EAV architecture: dynamic attributes, categories, variants and multiple product types with a flexible data layer.",
    stack: ["EAV", "SQL", "Service Layer"],
    link: "https://github.com/mohabzalat22/ecommerce-project",
  },
  {
    title: "TIKBOOK",
    kind: "fullstack",
    subtitle: "Ticket Reservation System",
    text: "Event ticketing with Paymob payments, QR code per reservation, queue-based deadline notifications, and a full organizer suite for events, sales and attendees.",
    stack: ["Laravel", "Livewire", "Tailwind", "Paymob"],
    link: "https://github.com/mohabzalat22/booking-app",
  },
  {
    title: "MORENT",
    kind: "frontend",
    subtitle: "Car Renting SPA",
    text: "Rental SPA for individuals and businesses with a diverse vehicle catalog, flexible short/long-term plans and pickup/drop-off scheduling.",
    stack: ["Vue.js", "Tailwind CSS"],
    link: "https://github.com/mohabzalat22/morent_api",
  },
  {
    title: "Short Link API",
    kind: "backend",
    subtitle: "URL shortener",
    text: "RESTful API with full CRUD endpoints and per-link access statistics.",
    stack: ["REST", "API"],
    link: "https://github.com/mohabzalat22/shorten-link",
  },
  {
    title: "PHP Framework",
    kind: "backend",
    subtitle: "Minimal MVC framework",
    text: "A minimalistic MVC framework in PHP built to understand routing, containers and request lifecycles from the ground up.",
    stack: ["PHP", "MVC"],
    link: "https://github.com/mohabzalat22/php-minimalistic-framework",
  },
];

export const filters = [
  { id: "all", label: "All" },
  { id: "ai", label: "AI" },
  { id: "backend", label: "Backend" },
  { id: "fullstack", label: "Full stack" },
  { id: "frontend", label: "Frontend" },
];

export const experience = [
  {
    period: "07/2025 — Present",
    role: "Freelance Developer",
    company: "Independent",
    points: [
      "Selling WordPress WooCommerce local stores.",
      "Building SaaS applications for end-users and B2B marketers.",
    ],
  },
  {
    period: "03/2025 — 07/2025",
    role: "Fullstack Developer",
    company: "Scandiweb",
    points: [
      {
        label: "OM-Digitals",
        url: "https://www.om-digitalsolutions.com/en/",
        text: "worked in a 20-person team migrating e-commerce pages from Magento 2 (PHP) to Sanity Studio, modeling content schemas and using URL rewrites to preserve legacy routes and SEO.",
      },
      {
        label: "Getfreshly",
        url: "https://getfreshly.ai/",
        text: "built features for a marketing agentic tool in a 4-person team, using Next.js server actions and Prisma, integrating the OpenAI API, streaming live agent responses over SSE, and extending LLM capabilities through MCP.",
      },
    ],
  },
  {
    period: "2022 — 2024",
    role: "Freelance Developer",
    company: "Independent",
    points: [
      "Built responsive, SEO-optimized Bootstrap sites and native PHP (OOP) web apps.",
      "Deployed via cPanel: server config, databases and backups.",
      "Customized CodeCanyon e-commerce projects with payment gateways.",
      "Contributed to an ERP: inventory, user roles and reporting.",
    ],
  },
];

export const education = {
  school: "Faculty of Business, Alexandria University",
  major: "Business Information Systems",
  period: "2022 — 2026",
};
