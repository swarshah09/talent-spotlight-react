// =========================================================
// All portfolio content lives here.
// Edit your name, bio, links, experience, projects, skills
// in this single file — components consume it directly.
// =========================================================

export const profile = {
  name: 'Swar Shah',
  role: 'Software Developer',
  tagline: 'Building scalable, event-driven full-stack systems.',
  location: 'Pune, India',
  available: 'Available for new roles',
  email: 'sswar3939@gmail.com',
  phone: '+91-8302808701',
  // TODO: replace with your real profile URLs
  links: {
    linkedin: 'https://www.linkedin.com/',
    github:   'https://github.com/',
    resume:   '/Swar_Shah_Resume.pdf',
  },
  stats: [
    { value: '1+',  label: 'Years Experience' },
    { value: '4+',  label: 'Shipped Products' },
    { value: '100+', label: 'Active Users' },
  ],
};

export const experiences = [
  {
    role: 'Software Development Engineer',
    company: 'Synechron Technologies',
    period: 'Jun 2025 – Present',
    summary:
      "Frontend & microservices for HSBC's Liquidity & Capital Markets data-lineage platform. Java 17 / Spring Boot, Kafka, Docker, CI/CD.",
  },
  {
    role: 'Full Stack Developer Intern',
    company: 'Sisai Technologies',
    period: 'Jan 2025 – Jun 2025',
    summary:
      'JWT + RBAC auth (5 roles), 20+ REST APIs for IoT tag lifecycle, InfluxDB time-series, WebSocket live dashboards in React.',
  },
  {
    role: 'AI & Backend Development Intern',
    company: 'Meditro',
    period: 'Jul 2024 – Dec 2024',
    summary:
      'LLM-driven lead scoring engine with structured prompts, role-based auth modules, and analytics dashboards in React.js.',
  },
  {
    role: 'Web Developer Intern',
    company: 'Polygon Pixels',
    period: 'Jul 2024 – Aug 2024',
    summary:
      'MERN attorney-consultancy platform with slot booking, optimistic locking, and soft reservation logic — shipped in 6 weeks.',
  },
];

export const projects = [
  {
    title: 'Family Health Memory',
    category: 'AI Health Platform',
    date: 'React.js · Node.js · LLM',
    description:
      'Contextual AI health memory maintaining longitudinal patient histories with personalized medical timelines.',
    href: '#', // TODO: add live link
  },
  {
    title: 'Innolink',
    category: 'Real-Time Collaboration',
    date: 'MERN · WebSocket · GitHub API',
    description:
      '200+ API endpoints, live PR review with inline threading, in-browser code execution across 5+ languages.',
    href: '#',
  },
  {
    title: 'Fitness Freak',
    category: 'Health Tracking App',
    date: 'MERN · Next.js · Context API',
    description:
      'Calorie engine from 4+ biometric inputs, 10+ tracking APIs, workout recommendation engine with admin CRUD.',
    href: '#',
  },
  {
    title: 'Shreeji Associates',
    category: 'Real Estate Platform',
    date: 'React.js · Node.js · AI/ML',
    description:
      'AI plot-detection from uploaded maps + BookMyShow-style booking flow with RBAC and validation.',
    href: '#',
  },
];

export const services = [
  {
    n: '01',
    title: 'Full-Stack Web Apps',
    points: ['React / Next.js', 'Node & Spring Boot APIs', 'Auth & RBAC'],
  },
  {
    n: '02',
    title: 'Microservices & Events',
    points: ['Spring Cloud Gateway', 'Apache Kafka', 'Eureka Discovery'],
  },
  {
    n: '03',
    title: 'Cloud & DevOps',
    points: ['Docker & CI/CD', 'AWS (Certified)', 'Production hardening'],
  },
  {
    n: '04',
    title: 'AI Integration',
    points: ['LLM prompt design', 'Lead scoring engines', 'Conversational flows'],
  },
];

export const skills = {
  Languages: ['Java', 'JavaScript', 'TypeScript', 'Python', 'C/C++', 'SQL'],
  Backend: ['Spring Boot', 'Node.js', 'Express', 'REST', 'Kafka', 'WebSocket'],
  Frontend: ['React.js', 'Next.js', 'Redux', 'Tailwind CSS'],
  Databases: ['MySQL', 'MongoDB', 'InfluxDB', 'Spring Data JPA'],
  DevOps: ['Docker', 'CI/CD', 'AWS', 'Git', 'Vercel', 'Firebase'],
  Security: ['JWT', 'OAuth2', 'RBAC'],
};

export const certifications = [
  'AWS Certified Developer – Associate',
  'GitLab Certified CI/CD Associate',
  'PCAP™ – Certified Associate Python Programmer',
  'HackerRank: Java, SQL, React, CSS, Problem Solving',
  'Udemy Full-Stack Web Development Bootcamp',
];

export const education = {
  degree: 'B.Tech in Computer Science Engineering',
  school: 'MIT World Peace University, Pune',
  period: '2021 – 2025',
  cgpa: 'CGPA: 8.09 / 10',
};
