/**
 * Site content and CV data — single source of truth for portfolio copy.
 * Update LinkedIn and GitHub URLs with your actual profile links.
 */

export const site = {
  name: "Mukuka Nkamba",
  title:
    "Software Engineer | AI & GenAI (RAG) Enthusiast | Content Creator",
  tagline:
    "Results-driven Full Stack Software Engineer building scalable, cloud-native, and data-driven applications.",
  /** Editorial hero — abstract, draws people into other pages */
  heroHeadline: "I architect systems where intelligence and precision actually meet.",
  /** Abstract teaser: creates need for Case Studies, Work With Me, etc. */
  heroBody:
    "Systems. Clarity. Intent. How I think, what I build, and how we might work together—that’s what the rest of this site is for.",
  /** Human-first hero summary (partner tone, not keyword list) */
  heroSummary:
    "I build digital systems that actually make sense. Most of my day is spent at the intersection of AI and clean architecture, making sure the 'magic' of GenAI feels reliable and easy to use. I'm a big believer that the best engineering is the kind you don't have to think about.",
  /** Statement quote */
  statementQuote:
    "Good engineering is invisible; great engineering feels like magic.",
  contact: {
    phone: "+260 962 398 849",
    email: "mukukankambaa@gmail.com",
    linkedIn: "https://www.linkedin.com/in/mukuka-nkamba-4a9b16290/",
    github: "https://github.com/nkamba-mukuka",
    tiktok: "https://www.tiktok.com/@mukukankamba",
  },
} as const;

export const professionalSummary = `Results-driven Full Stack Software Engineer with a strong track record of building scalable, cloud-native, and data-driven applications. Experienced across the full software development lifecycle, with expertise in React, Next.js, Node.js, Firebase, and Google Cloud Platform, and hands-on proficiency in Golang, PHP, PostgreSQL, TypeScript, and Python.

Passionate about designing AI-powered systems, particularly Retrieval-Augmented Generation (RAG) solutions, clean architecture, and maintainable codebases. Adept at collaborating with cross-functional and international Agile teams to deliver high-quality, user-centric products that create real business impact.`;

export const experience = [
  {
    role: "Peak Software Developer (Full Stack)",
    company: "Hytel",
    period: "Aug 2025 – Present",
    location: "Lusaka, Zambia",
    isCurrent: true,
    impact: "Engineering intelligent retrieval systems and cloud-native products to bridge the gap between data and generative reasoning.",
    highlights: [
      "Lead the development of production-grade, cloud-based web applications using React, Next.js, Node.js, Firebase, and GCP.",
      "Architect scalable and maintainable frontend systems with a strong focus on performance, accessibility, and UX best practices.",
      "Build and maintain backend services leveraging Firestore, Firebase Authentication, and Cloud Functions.",
      "Design and manage CI/CD pipelines, automating deployments and ensuring system reliability.",
      "Integrate Generative AI solutions and RAG pipelines into core business workflows.",
      "Collaborate closely with international, cross-functional Agile teams and contribute to technical planning and architectural decisions.",
    ],
  },
  {
    role: "Full Stack Developer",
    company: "Fin360",
    period: "May 2024 – Aug 2025",
    location: "Lusaka, Zambia",
    isCurrent: false,
    impact: "Owning the full stack for enterprise-grade applications—from secure auth and APIs to performance and delivery.",
    highlights: [
      "Developed and maintained enterprise-level web applications using PHP (Yii2), JavaScript, HTML, and CSS.",
      "Implemented secure authentication systems, role-based access control, and data-driven reporting features.",
      "Designed, integrated, and documented RESTful APIs for internal and external services.",
      "Optimized SQL queries and improved overall application performance and reliability.",
      "Worked collaboratively with QA and product teams within Agile development cycles to deliver features on schedule.",
    ],
  },
  {
    role: "Junior Software Engineer",
    company: "Kuala Tech",
    period: "May 2024 – Feb 2025",
    location: "Lusaka, Zambia",
    isCurrent: false,
    impact: "Building reliable backend and frontend systems with clear boundaries and operational visibility.",
    highlights: [
      "Built and maintained backend APIs using Golang and PostgreSQL.",
      "Developed responsive and reusable UI components with React, Next.js, and TypeScript.",
      "Improved system stability through performance tuning, testing, and debugging.",
      "Actively participated in sprint planning, code reviews, and automated testing processes.",
      "Integrated and validated third-party APIs using Postman.",
    ],
  },
  {
    role: "Junior Software Engineer Intern",
    company: "Cyprus Codes (Ata Bilişim)",
    period: "Sept 2021 – Aug 2022",
    location: "Cyprus",
    isCurrent: false,
    impact: "Shipping production-ready interfaces and learning the rhythms of collaborative, quality-focused development.",
    highlights: [
      "Developed and tested web interfaces using HTML, CSS, React, and Angular.",
      "Assisted with frontend optimization, bug fixing, and UI improvements.",
      "Participated in collaborative development processes, including daily stand-ups and sprint reviews.",
      "Gained practical experience with version control systems and deployment workflows.",
    ],
  },
];

export const technicalSkills = {
  frontend: ["React", "Next.js", "JavaScript", "TypeScript", "HTML", "CSS"],
  backend: ["Node.js", "Golang", "PHP", "Python"],
  cloudDevOps: [
    "Firebase (Auth, Firestore, Cloud Functions)",
    "Google Cloud Platform",
    "CI/CD Pipelines",
  ],
  databases: ["PostgreSQL", "SQL"],
  tools: ["Git", "Postman", "Tableau", "Power BI", "Excel", "Google Sheets"],
  aiData: [
    "Retrieval-Augmented Generation (RAG)",
    "Prompt Engineering",
    "Data Visualization",
    "Basic Machine Learning Concepts",
  ],
};

export const education = [
  {
    degree: "Bachelor of Science in Software Engineering",
    institution: "Cyprus International University",
    period: "2019 – 2024",
  },
  {
    degree: "High School Certificate",
    institution: "Chipembi Girls Secondary School",
    period: "2014 – 2018",
  },
];

export const certifications = [
  "HTML5 Certification — Enduonix Learning Solutions",
  "Backend Master Class (Golang, PostgreSQL, gRPC) — Udemy",
  "Tech4Dev WomenTechsters Data Analyst Program (Cohort 4)",
  "Hytel Software Development Bootcamp — 2025",
];

export const professionalInterests = [
  "AI Agents",
  "Generative AI Systems",
  "Cloud Architecture",
  "Clean Code & Software Design",
  "Technical Writing",
  "Community Tech Education",
  "Open-Source Contribution",
  "Product Design",
];

export const goodFit = [
  "Full stack and cloud-native applications: React, Next.js, Node.js, Firebase, GCP.",
  "AI-powered systems: RAG pipelines, prompt engineering, and GenAI integration.",
  "Scalable frontend and backend architecture with a focus on performance and UX.",
  "Clear ownership, Agile collaboration, and sustainable delivery.",
];

export const collaborationValues = [
  "Clear ownership and decision rights.",
  "Room to discuss trade-offs before committing to a path.",
  "Stakeholders who care about correctness and long-term maintainability.",
];

export const notFit = [
  "Pure front-end or design-heavy roles where backend is secondary.",
  '"Move fast and fix later" with no intention to fix later.',
  "Projects where reliability and consistency are not priorities.",
];

export const engagementCopy = `I'm open to contract or full-time roles that match the above. If you have a concrete problem—full stack development, AI/RAG integration, cloud architecture, or system design—reach out with context and constraints. I'll respond when it's a fit.`;
