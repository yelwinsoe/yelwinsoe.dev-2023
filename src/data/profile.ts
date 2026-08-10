export const profile = {
  name: "Ye Lwin Soe",
  title: "Senior Full-Stack Software Engineer",
  tagline:
    "11+ years delivering scalable React, TypeScript, Python, and cloud platforms across investment, recruitment, and media.",
  location: "Auckland, New Zealand",
  email: "yelwinsoe.mm@gmail.com",
  github: "https://github.com/yelwinsoe",
  linkedin: "https://www.linkedin.com/in/yelwinsoe",
  website: "https://yelwinsoe.dev",
  blog: "https://blog.yelwinsoe.dev",
  availability: "Full-time from March 2027",
  workRightsShort:
    "Post Study Work Visa planned after graduation; availability is subject to approval, with open work rights once granted.",
  workRightsDetail:
    "After completing my AUT master’s in January 2027, I expect to be eligible to apply for a Post Study Work Visa. The PSWV provides open work rights once granted and does not require employer sponsorship.",
  summary: `I am a senior full-stack software engineer with 11+ years of experience delivering production platforms across investment, recruitment, and media. My core stack is React and TypeScript on the frontend, with Python or Node.js services, relational databases, and cloud infrastructure behind them.

I work best with end-to-end ownership: understanding the business problem, shaping the technical approach, shipping the solution, and keeping it reliable in production. I have contributed as a senior individual engineer, led delivery teams, mentored developers, and partnered directly with analysts, product managers, designers, and commercial stakeholders.

Now based in Auckland, I am completing a Master of Applied Finance at AUT in January 2027. It adds financial-domain depth to my engineering background, particularly for investment and fintech platforms. I am targeting full-time senior software engineer or hands-on technical lead roles from March 2027, subject to Post Study Work Visa approval.`,
};

export const stats = [
  { label: "Years Experience", value: "11+" },
  { label: "Applications Unified", value: "10+" },
  { label: "Build Time", value: "<20 min" },
  { label: "Traffic Growth Supported", value: "300%" },
];

export const skills = {
  Frontend: ["React", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3"],
  Backend: [
    "Python",
    "FastAPI",
    "Django",
    "Node.js",
    "Express.js",
    "PHP",
    "Laravel",
  ],
  "Cloud & DevOps": [
    "AWS",
    "Google Cloud",
    "Docker",
    "Kubernetes",
    "CI/CD",
    "GitHub Actions",
    "Jenkins",
  ],
  Databases: ["PostgreSQL", "MySQL", "MongoDB", "Redis"],
  Methodologies: [
    "REST APIs",
    "GraphQL",
    "Microservices",
    "Agile / Scrum",
    "TDD",
  ],
};

export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  logo: string;
  description: string;
  highlights: string[];
}

export const experiences: Experience[] = [
  {
    company: "GIC",
    role: "Full-Stack Developer",
    period: "Oct 2023 — Mar 2026",
    location: "Singapore",
    logo: "/companies/gic.webp",
    description:
      "Built and maintained internal web tools used by investment teams daily, working across a React frontend and Python backend stack.",
    highlights: [
      "30% faster APIs — reduced response times on data-heavy financial dashboards by building a Python backend with Redis caching and role-based access control.",
      "10+ apps unified — built a React micro-frontend framework that brought together separate investment and analytics tools into one platform.",
      "Worked directly with analysts, designers, and project managers to scope and deliver features end-to-end.",
    ],
  },
  {
    company: "Findjobs",
    role: "Lead Software Developer",
    period: "Jul 2020 — Sep 2023",
    location: "Singapore",
    logo: "/companies/findjobs.png",
    description:
      "Led the engineering team and owned the technical direction for a Singapore-based job portal, working primarily in React, Node.js, and AWS.",
    highlights: [
      "90% faster builds - rebuilt the CI/CD pipeline using GitHub Actions and Docker, cutting build times from over 2 hours to under 20 minutes.",
      "500% traffic growth - re-architected the job portal frontend in Next.js with server-side rendering, substantially improving search visibility.",
      "More reliable releases - designed AWS infrastructure using Kubernetes and Docker, addressing recurring causes of deployment outages.",
      "Led sprints, made architectural decisions, reviewed code, and stayed hands-on throughout.",
    ],
  },
  {
    company: "GrabJobs",
    role: "Senior Software Engineer",
    period: "Mar 2019 — Jul 2020",
    location: "Singapore",
    logo: "/companies/grabjobs.png",
    description:
      "Senior engineer on a fast-growing recruitment platform, focused on scaling the frontend architecture and improving platform reliability.",
    highlights: [
      "300% traffic handled - scaled the platform by redesigning the SSR architecture in Next.js and migrating to microservices.",
      "50% revenue increase - built and integrated a Stripe subscription system for employer accounts.",
      "20% less downtime - overhauled logging and monitoring with ELK and Prometheus.",
    ],
  },
  {
    company: "BitsGreat",
    role: "Co-Founder / CTO",
    period: "Jun 2018 — Sep 2019",
    location: "Singapore",
    logo: "",
    description:
      "Co-founded an e-commerce platform that turned customer photos into pixelated art kits. Built everything solo and managed the business alongside writing code.",
    highlights: [
      "Built the full platform from scratch using React and Python, including payment integration and AWS infrastructure.",
      "Owned all technical decisions alongside product direction, vendor relationships, and customer support.",
    ],
  },
  {
    company: "Nanyang Technological University",
    role: "Software Engineer",
    period: "May 2018 — Mar 2019",
    location: "Singapore",
    logo: "/companies/ntu.png",
    description:
      "Worked on a self-driving car research project, building Python tools to speed up the video annotation pipeline.",
    highlights: [
      "200% throughput gain - built a Python automation tool using a SOLO-based computer vision model to pre-label training videos.",
      "Designed a partial pre-labelling technique that maintained annotation accuracy while significantly cutting manual effort.",
    ],
  },
  {
    company: "EVVO Media",
    role: "Senior Web Developer",
    period: "Mar 2016 — May 2018",
    location: "Singapore",
    logo: "/companies/evvomedia.png",
    description:
      "Built internal tools and streaming infrastructure for a media production company.",
    highlights: [
      "Up to 5x faster processing - automated video recording and editing workflows using Python and FFmpeg.",
      "50% lower latency - built a live streaming solution using FFmpeg and Nginx RTMP.",
    ],
  },
  {
    company: "Novitee",
    role: "Web Developer / Senior Web Developer",
    period: "Dec 2014 — Jan 2016",
    location: "Yangon, Myanmar",
    logo: "/companies/novitee.png",
    description:
      "Built internal business tools for a company operating across multiple restaurant and retail outlets.",
    highlights: [
      "Promoted to Senior Web Developer after the first year.",
      "15 minutes saved per shift - built a mobile-optimised kitchen display system that replaced paper-based order tracking.",
      "15+ hours saved per week - developed a cloud-based POS system integrated with inventory and accounting tools.",
    ],
  },
];

export interface Project {
  title: string;
  description: string;
  image: string;
  tech: string[];
}

export interface CaseStudy {
  company: string;
  title: string;
  role: string;
  challenge: string;
  ownership: string;
  approach: string[];
  outcomes: { value: string; label: string }[];
  tech: string[];
}

export const caseStudies: CaseStudy[] = [
  {
    company: "Findjobs",
    title: "Modernising delivery and organic growth",
    role: "Lead Software Developer · Singapore · 2020–2023",
    challenge:
      "A growing recruitment platform needed faster releases, better search visibility, and infrastructure that could support dependable product delivery.",
    ownership:
      "Led technical direction while remaining hands-on across architecture, sprint delivery, code review, CI/CD, and production operations.",
    approach: [
      "Rebuilt delivery workflows around GitHub Actions and Docker.",
      "Re-architected the public job portal in Next.js with server-side rendering.",
      "Designed AWS infrastructure using Kubernetes and containerised services.",
    ],
    outcomes: [
      { value: "<20 min", label: "build time, down from 2+ hours" },
      { value: "500%", label: "organic traffic growth" },
      { value: "On demand", label: "release capability" },
    ],
    tech: ["Next.js", "TypeScript", "Node.js", "AWS", "Docker", "Kubernetes"],
  },
  {
    company: "GIC",
    title: "Unifying investment applications",
    role: "Full-Stack Developer · Singapore · 2023–2026",
    challenge:
      "Investment and analytics teams relied on separate tools that needed a consistent experience without losing independent deployment ownership.",
    ownership:
      "Worked end to end with analysts, designers, and project managers, from technical design through production delivery.",
    approach: [
      "Built a React micro-frontend framework for independently deployed applications.",
      "Developed Python services with Redis caching and role-based access control.",
      "Translated complex financial workflows into focused internal product experiences.",
    ],
    outcomes: [
      { value: "10+", label: "applications unified" },
      { value: "30%", label: "faster API responses" },
      { value: "1 platform", label: "consistent user experience" },
    ],
    tech: ["React", "TypeScript", "Python", "Redis", "Micro-frontends", "RBAC"],
  },
  {
    company: "GrabJobs",
    title: "Scaling traffic, revenue, and reliability",
    role: "Senior Software Engineer · Singapore · 2019–2020",
    challenge:
      "A fast-growing recruitment platform needed to scale web traffic, introduce employer subscriptions, and improve production visibility.",
    ownership:
      "Owned senior-level delivery across frontend architecture, service boundaries, billing integration, and operational monitoring.",
    approach: [
      "Redesigned the Next.js rendering architecture and moved services out of a growing monolith.",
      "Built Stripe employer subscriptions, including billing and failed-payment paths.",
      "Introduced ELK and Prometheus for stronger logging and monitoring.",
    ],
    outcomes: [
      { value: "300%", label: "traffic growth supported" },
      { value: "50%", label: "revenue increase contributed to" },
      { value: "20%", label: "less unplanned downtime" },
    ],
    tech: ["Next.js", "React", "Node.js", "Stripe", "ELK", "Prometheus"],
  },
];

export const projects: Project[] = [
  {
    title: "Findjobs Employer Dashboard",
    description:
      "Full-featured employer dashboard for managing job listings, candidates, and analytics.",
    image: "/projects/findjobs_dashboard.png",
    tech: ["TypeScript", "React", "Node.js", "PostgreSQL"],
  },
  {
    title: "Findjobs Job Portal",
    description:
      "SEO-optimised job portal with server-side rendering that drove 500% traffic growth.",
    image: "/projects/findjobs_job_portal.png",
    tech: ["Next.js", "TypeScript", "Node.js", "PostgreSQL"],
  },
  {
    title: "GrabJobs Employer Dashboard",
    description:
      "Dashboard with Stripe billing integration and real-time candidate management.",
    image: "/projects/grabjobs_dashboard.png",
    tech: ["React", "Python", "Node.js", "PostgreSQL"],
  },
  {
    title: "GrabJobs Job Portal",
    description:
      "High-traffic job portal handling 300% traffic increase through SSR architecture.",
    image: "/projects/grabjobs_job_portal.png",
    tech: ["Next.js", "React", "Node.js", "MySQL"],
  },
  {
    title: "EVVO Channel",
    description:
      "Live streaming video platform with FFmpeg and Nginx RTMP infrastructure.",
    image: "/projects/evvo_channel.png",
    tech: ["PHP", "JavaScript", "MySQL", "Nginx/RTMP"],
  },
  {
    title: "Novitee POS & Inventory",
    description:
      "Cloud-based point-of-sale system with inventory and accounting integration.",
    image: "/projects/purchasing-inventory-system.png",
    tech: ["PHP", "JavaScript", "MySQL"],
  },
];

export interface Education {
  degree: string;
  school: string;
  period: string;
  current?: boolean;
}

export const education: Education[] = [
  {
    degree: "Master of Applied Finance",
    school: "Auckland University of Technology (AUT)",
    period: "Mar 2026 - Jan 2027 (expected)",
    current: true,
  },
  {
    degree: "MSc Computer Science",
    school: "University of East London",
    period: "Sep 2024 — Sep 2025",
  },
  {
    degree: "Bachelor of Computer Science",
    school: "University of Computer Studies, Mandalay",
    period: "2009 — 2012",
  },
];

export const blogPosts = [
  {
    title: "REST vs GraphQL — How to choose your API architecture?",
    url: "https://blog.yelwinsoe.dev/rest-vs-graphql-how-to-choose-your-api-architecture",
    excerpt:
      "A practical breakdown of when to pick REST vs GraphQL, based on real-world tradeoffs I've encountered across multiple products.",
  },
  {
    title: "How to protect your API?",
    url: "https://blog.yelwinsoe.dev/how-to-protect-your-api",
    excerpt:
      "Security patterns for production APIs — rate limiting, authentication, input validation, and more.",
  },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Work", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];
