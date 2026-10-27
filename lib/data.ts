export const nav = {
  links: [
    { label: "Apps", href: "#apps" },
    { label: "Services", href: "#services" },
    { label: "Process", href: "#process" },
    { label: "Contact", href: "#contact" },
  ],
  cta: { label: "Book a call", href: "#contact" },
};

export const stats = [
  { value: "30K+", label: "Play Store downloads" },
  { value: "₹40K+", label: "Paid out to users" },
  { value: "2", label: "Live consumer AI apps" },
  { value: "60+", label: "Mini games shipped" },
];

export const apps = [
  {
    name: "CoinJeeto",
    tagline: "Earn Jeetos. Redeem for real cash.",
    status: "Live",
    description:
      "Our flagship earn-money app for India. Play 60+ mini games, answer surveys, watch videos and complete offer-wall tasks — then cash out to UPI, Paytm or gift cards. Lightweight, works on low internet.",
    tags: ["Games", "Surveys", "UPI payouts"],
    links: [{ label: "Visit coinjeeto.com", href: "https://coinjeeto.com", primary: true }],
    accent: "accent" as const,
  },
  {
    name: "CashBoo",
    tagline: "Play. Earn. Cashout to UPI.",
    status: "Live on Google Play",
    description:
      "Play. Earn. Cash out to real money. 60+ mini games, surveys, rewarded videos and offer-wall tasks — redeem to UPI, Paytm or gift cards from just ₹10. No crypto, no hidden fees.",
    tags: ["60+ games", "Gift cards from ₹10", "Made for India"],
    links: [
      { label: "Visit cashboo.in", href: "https://cashboo.in", primary: true },
      {
        label: "Get it on Google Play",
        href: "https://play.google.com/store/apps/details?id=com.cashboo.app",
        primary: false,
      },
    ],
    accent: "ice" as const,
  },
];

export const services = [
  {
    title: "AI Strategy & Consulting",
    body: "Readiness audits, use-case prioritization tied to P&L, build-vs-buy calls, and a 90-day roadmap your CFO will sign.",
  },
  {
    title: "Generative AI & LLM Apps",
    body: "Assistants, copilots and document AI with RAG, evals and cost controls that survive a CFO review — and a real user.",
  },
  {
    title: "Agentic AI Development",
    body: "Bounded-autonomy agents with policy engines, human-in-the-loop checkpoints and audit trails.",
  },
  {
    title: "Data Engineering & Analytics",
    body: "Lakehouses, real-time streaming, semantic layers and RAG-ready knowledge bases — the work that makes AI work.",
  },
  {
    title: "Cloud, DevOps & MLOps",
    body: "Cloud-native deployment, CI/CD for models and prompts, eval pipelines, observability and incident playbooks.",
  },
  {
    title: "Custom Software & SaaS",
    body: "End-to-end engineering for AI-native SaaS — frontend, APIs, identity, billing, infra and the AI layer, in one team.",
  },
];

export const process = [
  {
    step: "01",
    title: "Discover",
    body: "Map the business outcome, audit data readiness, score the use case for risk and ROI, and write the spec.",
  },
  {
    step: "02",
    title: "Design",
    body: "Architecture, model selection, eval harness, cost model and governance plan — plus a prototype on your data.",
  },
  {
    step: "03",
    title: "Develop",
    body: "Production build with CI/CD, evals in the loop, observability from day one. We commit to a date.",
  },
  {
    step: "04",
    title: "Optimize",
    body: "Cost tuning, model swaps, drift monitoring and a quarterly review tied to the metrics we set in Discover.",
  },
];

export const company = {
  email: "hello@algomise.com",
  legalName: "Algomise Technologies LLP",
  llpin: "ACX-6202",
  address: [
    "400-A, 4th Floor, Ajit Singh House,",
    "12 Commercial Complex, Yusuf Sarai,",
    "Green Park, New Delhi – 110016, India",
  ],
  products: [
    { label: "CoinJeeto", href: "https://coinjeeto.com" },
    { label: "CashBoo", href: "https://cashboo.in" },
  ],
  services: [
    "AI Strategy",
    "Generative AI",
    "Agentic AI",
    "Data & Analytics",
    "Cloud & MLOps",
    "Custom Software",
  ],
};
