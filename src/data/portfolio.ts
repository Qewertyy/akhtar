export type Image = { src: string; alt: string; width: number; height: number };

export type Highlight = { title: string; body: string };

export type Project = {
  slug: string;
  name: string;
  kind: string;
  role: string;
  blurb: string;
  intro: string;
  icon: string;
  preview: string;
  did: string[];
  highlights: Highlight[];
  stack: string[];
  images: Image[];
};

export const email = "akhtar.khn.irl@gmail.com";
export const github = "https://github.com/qewertyy";
export const resume = "/resume/akhtar-khan-resume.pdf";

export const projects: Project[] = [
  {
    slug: "ryvn",
    name: "Ryvn",
    kind: "AI assistant",
    role: "Founding backend engineer",
    blurb: "An AI assistant that takes actions across your inbox, calendar, messages and phone.",
    intro:
      "Ryvn is an AI assistant that acts instead of just answering. It's a set of backend services, an agent runtime and native iOS and Android code working together. I work across the backend and down into the native layer wherever a feature reaches the phone.",
    icon: "/work/ryvn/icon.webp",
    preview: "/work/ryvn/hero.webp",
    did: [
      "Communication between the API and the agent runtime",
      "Live Activities and Android ongoing notifications that stay correct even when pushes are lost",
      "Streaming voice replies from the lock screen",
      "Faster chat start-up through parallel loading and per-user caching",
      "Secure file storage with long-lived caching",
      "Personalized prompts, abuse protection and safe handling of user credentials",
      "Background workflows for scheduled and expiring work",
      "Device integrations: Siri, share extension, calendar, health, contacts",
    ],
    highlights: [
      {
        title: "Lock-screen state that heals itself",
        body: "Every Live Activity push carries the full state, not a diff, so a lost or out-of-order push is corrected by the next one. Payloads stay well under Apple's size cap, and alert priority is tiered to stay inside the update budget.",
      },
      {
        title: "Faster chat start-up",
        body: "Context that used to load one piece after another, costing 1\u20132 seconds before the first token, now loads in parallel, with per-user caching and cleanup kept off the request path.",
      },
      {
        title: "Files that cache forever",
        body: "Expiring file links were replaced with an authorized file service. Content-addressed files can be cached for a year, and ownership is checked on every read.",
      },
      {
        title: "Streaming voice from the lock screen",
        body: "You can talk to Ryvn without opening the app. The reply streams in and then settles into one final state, so the lock screen never shows a half-finished answer.",
      },
    ],
    stack: ["Go", "TypeScript", "Swift", "Kotlin", "Deno", "Rust", "React Native"],
    images: [
      { src: "/work/ryvn/hero.webp", alt: "Ryvn chat building a shopping cart", width: 800, height: 1054 },
      { src: "/work/ryvn/live-activity.webp", alt: "Ryvn Live Activity showing a flight on the iOS lock screen", width: 1100, height: 978 },
    ],
  },
  {
    slug: "gigdash",
    name: "Gigdash",
    kind: "Services marketplace",
    role: "Full-stack",
    blurb: "On-demand laundry and lawn care, with customer and provider apps.",
    intro:
      "Gigdash is a two-sided marketplace. Customers book laundry or lawn care, nearby providers pick up the job, and payments and payouts are handled in-app. I worked across the mobile apps, the API and the admin tools.",
    icon: "/work/gigdash/icon.webp",
    preview: "/work/gigdash/icon.webp",
    did: [
      "Customer and provider apps from one codebase",
      "Location-aware dispatch that widens its search until a provider accepts",
      "Payments, payouts and wallets built so retries never double-charge or double-pay",
      "Live order tracking and chat",
      "Prioritized background jobs with retries",
      "Service areas, addresses and admin tooling with audit logs",
      "Identity verification flows",
    ],
    highlights: [
      {
        title: "Dispatch that widens its search",
        body: "Dispatch searches outward from each order in widening rings, notifies each provider at most once, and keeps trying until someone accepts.",
      },
      {
        title: "Money that adds up",
        body: "Amounts are stored in whole cents, and payout and wallet changes are designed so a retry never pays anyone twice.",
      },
    ],
    stack: ["TypeScript", "React Native"],
    images: [],
  },
  {
    slug: "futti",
    name: "Futti",
    kind: "Football social app",
    role: "Mobile + backend",
    blurb: "Find a pickup game, fill a roster, and chat with your team.",
    intro:
      "Futti turns organizing football into a social app. You can find games near you, host pickup or training sessions, manage rosters, and chat with your team. It shipped in 45 days.",
    icon: "/work/futti/icon.webp",
    preview: "/work/futti/icon.webp",
    did: [
      "Mobile app and Go backend",
      "Events, rosters, invitations and location-based discovery",
      "Real-time chat that stays responsive on slow connections, with push for offline users",
      "Scheduled jobs that close finished events and clean up their chats",
    ],
    highlights: [
      {
        title: "Chat built on Go concurrency",
        body: "One coordinator handles joins, leaves and broadcasts. A slow client is dropped instead of being allowed to block the room, and offline members get a push instead.",
      },
      {
        title: "Caching third-party lookups",
        body: "Place, weather and team lookups are cached for as long as each kind of data stays fresh, which keeps the app fast and API costs flat.",
      },
    ],
    stack: ["Go", "TypeScript", "React Native"],
    images: [
      { src: "/work/futti/01.webp", alt: "Futti profile, upcoming event and group chat screens", width: 1400, height: 788 },
      { src: "/work/futti/02.webp", alt: "Futti event discovery and chat", width: 1190, height: 1090 },
      { src: "/work/futti/03.webp", alt: "Futti create event screen", width: 1190, height: 1090 },
    ],
  },
  {
    slug: "togetheriv",
    name: "TogetherIV",
    kind: "Community for IV patients",
    role: "Mobile + backend",
    blurb: "A place where people going through IV treatment find others who understand.",
    intro:
      "TogetherIV starts from a simple idea: if you're going through IV treatment, you shouldn't feel alone. It connects people in the same situation so they can talk, share what helps, and spend those long hours together, through chat, community posts and live games like trivia and checkers.",
    icon: "/work/togetheriv/icon.webp",
    preview: "/work/togetheriv/icon.webp",
    did: [
      "Real-time lobbies and multiplayer games",
      "Live trivia rounds that start on a schedule",
      "Community posts, connections and chat",
      "Treatment passes with in-app purchases",
      "Real-time, scheduled and background work kept in separate processes",
      "Push notifications with de-duplication",
    ],
    highlights: [
      {
        title: "Live trivia on a schedule",
        body: "A new trivia round starts every 10 minutes for everyone online: 10 timed questions with a live leaderboard.",
      },
      {
        title: "Separate lanes for separate work",
        body: "Real-time games, scheduled jobs and background work each run in their own process, so a game never waits behind a slow request.",
      },
    ],
    stack: ["TypeScript", "React Native"],
    images: [
      { src: "/work/togetheriv/01.webp", alt: "TogetherIV lobby and checkers game", width: 1240, height: 698 },
      { src: "/work/togetheriv/02.webp", alt: "TogetherIV trivia leaderboard", width: 595, height: 545 },
      { src: "/work/togetheriv/03.webp", alt: "TogetherIV lobby and checkers screens", width: 595, height: 545 },
    ],
  },
];

export const experience = [
  {
    company: "ZanEvra Inc.",
    role: "Founding Backend Engineer",
    period: "2026 —",
    points: [
      "Backend services, agent runtime integration and background workflows for Ryvn.",
      "Live Activities, lock-screen voice and device integrations on iOS and Android."
    ],
  },
  {
    company: "Infloso AI",
    role: "Full-Stack Engineer",
    period: "2024 — 2026",
    points: [
      "Built the campaign and collab module connecting brands with creators.",
      "AI workflows for content generation, social scraping and sentiment analysis.",
      "Resilient scraping infrastructure, with queue-backed background jobs.",
    ],
  },
  {
    company: "Finportal",
    role: "Software Engineer",
    period: "2023 — 2024",
    points: [
      "Built the investment-factory and loanshop web apps, with real-time dashboards.",
      "Integrated payment gateways, auth flows and admin panels.",
    ],
  },
];

export const stats = ["4+ years", "7 products shipped"];

export const domains = [
  { name: "AI", tags: "agents · memory · automation" },
  { name: "Marketplaces", tags: "dispatch · payments · payouts" },
  { name: "Fintech", tags: "investing · lending · dashboards" },
  { name: "Social & real-time", tags: "chat · multiplayer · push" },
  { name: "Health", tags: "patient community · risk screening" },
  { name: "Security", tags: "VAPT · API testing · auth" },
];

export const tools = [
  { group: "Languages", items: "Go, TypeScript, JavaScript, Python, C#, Rust, Swift, Kotlin, Java, SQL, Ruby, PHP, GDScript" },
  { group: "Backend", items: "Actix ,Node.js, Bun, Deno, Express, Hono, Axum, Fastify, Echo, ASP.NET Core, Django, Flask, gRPC, REST, WebSockets, Socket.IO" },
  { group: "Web & mobile", items: "React, Next.js, Remix, Nuxt, Tailwind, React Native, Expo, SwiftUI, Live Activities" },
  { group: "Data", items: "PostgreSQL, MySQL, MS SQL Server, MongoDB, DynamoDB, Redis, Qdrant, Neo4j, Elasticsearch" },
  { group: "Infra", items: "Docker, AWS, GCP, Cloudflare, Nginx, Temporal, BullMQ, Kafka" },
  { group: "AI", items: "LLMs, MCP, RAG, Stable Diffusion, NSFW detection, agent orchestration" },
  { group: "Automation", items: "Playwright, Puppeteer, Cheerio, Telegram bots, Discord RPC" },
  { group: "Security", items: "VAPT, API testing, Burp Suite, Metasploit, Wireshark, Frida, AES" },
];

export const side = [
  { name: "Atom", desc: "Decentralized, censorship-resistant hosting", href: "https://atom.qewertyy.dev" },
  { name: "Cardinal Prophecy", desc: "Heart-attack risk screening in ASP.NET Core", href: "https://github.com/qewertyy/cardinal-prophecy" },
];

export const certs = [
  "B.Sc. Computer Science, University of Mumbai",
  "Certified Information Security Consultant (CISC)",
  "API Penetration Testing, APIsec",
  "SQL (Advanced), HackerRank",
];
