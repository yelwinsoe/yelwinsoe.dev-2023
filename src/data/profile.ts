export const profile = {
  name: "Ye Lwin Soe",
  title: "Senior Full-Stack Software Engineer",
  tagline:
    "11+ years shipping production platforms across investment, recruitment, media, and e-commerce, most recently at GIC, one of the world’s largest sovereign wealth funds.",
  location: "Auckland, New Zealand",
  email: "yelwinsoe.mm@gmail.com",
  github: "https://github.com/yelwinsoe",
  linkedin: "https://www.linkedin.com/in/yelwinsoe",
  website: "https://yelwinsoe.dev",
  blog: "https://blog.yelwinsoe.dev",
  summary: `I am a senior full-stack engineer with 11+ years shipping production platforms across investment, recruitment, media, and e-commerce, most recently at GIC, one of the world’s largest sovereign wealth funds.

I work deep in React and TypeScript, Python, and AWS, from frontend architecture and API design through CI/CD and Kubernetes infrastructure, with a record of measurable gains in performance, reliability, and release speed. As a former engineering lead and startup CTO, I am used to owning architecture, delivery, and stakeholder relationships end to end.

Now based in Auckland, my Master of Applied Finance at AUT adds financial-domain depth to my engineering background, and I am interested in senior software engineer and hands-on technical lead roles.`,
};

export const stats = [
  { label: "Years Experience", value: "11+" },
  { label: "Applications Unified", value: "10+" },
  { label: "Build Time", value: "<20 min" },
  { label: "Traffic Growth Supported", value: "300%" },
];

export const skills = {
  Frontend: [
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Micro-frontends",
    "HTML/CSS",
  ],
  Backend: [
    "Python (FastAPI, Django)",
    "Node.js (Express)",
    "PHP/Laravel",
    "REST",
    "GraphQL",
    "Stripe",
  ],
  Data: ["PostgreSQL", "MySQL", "Redis", "MongoDB", "Pandas", "NumPy"],
  "Cloud & Delivery": [
    "AWS",
    "Google Cloud",
    "Kubernetes",
    "Docker",
    "GitHub Actions",
    "Jenkins",
    "Nginx",
    "ELK",
    "Prometheus",
  ],
  Leadership: [
    "Architecture",
    "Code review",
    "Mentoring",
    "Sprint delivery",
    "Stakeholder management",
  ],
};

export interface Impact {
  title: string;
  challenge: string;
  outcomes: { value: string; label: string }[];
  tech: string[];
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  logo: string;
  highlights: string[];
  impact?: Impact;
}

export const experiences: Experience[] = [
  {
    company: "GIC",
    role: "Full-Stack Developer",
    period: "Oct 2023 — Mar 2026",
    location: "Singapore",
    logo: "/companies/gic.webp",
    highlights: [
      "Led development of a React micro-frontend framework connecting 10+ investment and analytics applications, so product teams could build and release independently without coordinated deployments.",
      "Built Python services with Redis caching and role-based access control, cutting API response times by 30% on data-heavy financial dashboards while enforcing fine-grained access to sensitive investment data.",
      "Partnered with investment analysts, designers, and project managers to turn complex requirements into intuitive internal tools, owning features from requirements through production.",
    ],
    impact: {
      title: "Unifying investment applications",
      challenge:
        "Investment and analytics teams at one of the world’s largest sovereign wealth funds relied on separate tools that needed a consistent experience without losing independent deployment ownership.",
      outcomes: [
        { value: "10+", label: "applications unified" },
        { value: "30%", label: "faster API responses" },
        { value: "1 platform", label: "consistent user experience" },
      ],
      tech: ["React", "TypeScript", "Python", "Redis", "Micro-frontends", "RBAC"],
    },
  },
  {
    company: "Findjobs",
    role: "Lead Software Developer",
    period: "Jul 2020 — Sep 2023",
    location: "Singapore",
    logo: "/companies/findjobs.png",
    highlights: [
      "Led the engineering team while staying hands-on across architecture, sprint delivery, code review, and production operations.",
      "Rebuilt CI/CD with GitHub Actions and Docker, cutting build time from 2+ hours to under 20 minutes and enabling on-demand releases.",
      "Re-architected the job portal with Next.js server-side rendering; organic search traffic grew 500% over the following year.",
      "Designed Kubernetes-based AWS infrastructure that removed recurring sources of deployment outages.",
    ],
    impact: {
      title: "Modernising delivery and organic growth",
      challenge:
        "A growing recruitment platform needed faster releases, better search visibility, and infrastructure that could support dependable product delivery.",
      outcomes: [
        { value: "<20 min", label: "build time, down from 2+ hours" },
        { value: "500%", label: "organic search growth" },
        { value: "On demand", label: "release capability" },
      ],
      tech: ["Next.js", "TypeScript", "Node.js", "AWS", "Docker", "Kubernetes"],
    },
  },
  {
    company: "GrabJobs",
    role: "Senior Software Engineer",
    period: "Mar 2019 — Jul 2020",
    location: "Singapore",
    logo: "/companies/grabjobs.png",
    highlights: [
      "Supported 300% web traffic growth by redesigning the Next.js rendering architecture and splitting services out of the monolith.",
      "Built Stripe employer subscriptions, including failed-payment and billing edge cases, contributing to a 50% revenue increase.",
      "Overhauled logging and monitoring with ELK and Prometheus, reducing unplanned downtime by 20%.",
    ],
    impact: {
      title: "Scaling traffic, revenue, and reliability",
      challenge:
        "A fast-growing recruitment platform needed to scale web traffic, introduce employer subscriptions, and improve production visibility.",
      outcomes: [
        { value: "300%", label: "traffic growth supported" },
        { value: "50%", label: "revenue increase contributed to" },
        { value: "20%", label: "less unplanned downtime" },
      ],
      tech: ["Next.js", "React", "Node.js", "Stripe", "ELK", "Prometheus"],
    },
  },
  {
    company: "BitsGreat",
    role: "Co-Founder / CTO (concurrent, part-time)",
    period: "Jun 2018 — Sep 2019",
    location: "Singapore",
    logo: "",
    highlights: [
      "Took an e-commerce product from concept to international customers, owning the React/Python platform, payments, AWS hosting, and technical direction.",
    ],
  },
  {
    company: "Nanyang Technological University",
    role: "Software Engineer",
    period: "May 2018 — Mar 2019",
    location: "Singapore",
    logo: "/companies/ntu.png",
    highlights: [
      "Built a Python computer-vision labelling tool with partial pre-labelling, raising annotation throughput 200% across 500+ videos a week.",
    ],
  },
  {
    company: "EVVO Media",
    role: "Senior Web Developer",
    period: "Mar 2016 — May 2018",
    location: "Singapore",
    logo: "/companies/evvomedia.png",
    highlights: [
      "Automated video recording and editing with Python and FFmpeg, up to 5x faster and removing hours of daily manual work; built a low-latency Nginx RTMP streaming solution that cut delivery latency by 50%.",
    ],
  },
  {
    company: "Novitee",
    role: "Web Developer, promoted to Senior Web Developer",
    period: "Dec 2014 — Jan 2016",
    location: "Yangon, Myanmar",
    logo: "/companies/novitee.png",
    highlights: [
      "Built a cloud POS integrated with inventory and accounting, saving 15+ hours of manual data entry a week, and a mobile kitchen display system that replaced paper order tracking.",
    ],
  },
];

export interface Project {
  title: string;
  description: string;
  image: string;
  tech: string[];
}

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
    period: "Mar 2026 — Jan 2027",
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
    title: "How to protect your API?",
    url: "https://blog.yelwinsoe.dev/how-to-protect-your-api",
    readTime: "3 min read",
    excerpt:
      "Lessons from a surprise SMS bill: four rate-limiting approaches for APIs that cost money per call, such as OTP, email, and file uploads.",
  },
  {
    title: "REST vs GraphQL — How to choose your API architecture?",
    url: "https://blog.yelwinsoe.dev/rest-vs-graphql-how-to-choose-your-api-architecture",
    readTime: "2 min read",
    excerpt:
      "The checklist I use to choose between them: prototype or production, how many clients consume the API, and how complex the authorisation is.",
  },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Writing", href: "#writing" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];
