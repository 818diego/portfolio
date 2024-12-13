import {
  Braces,
  Code2,
  Database,
  FileJson,
  Globe,
  Layout,
  Server,
  Settings,
  Terminal,
  Wrench
} from 'lucide-react';

export const personalInfo = {
  fullName: "Diego Merino",
  nickname: "Diego",
  role: "Full Stack Developer & UI/UX Enthusiast",
  description: "Passionate about creating exceptional digital experiences. Specialized in modern web development, scalable architectures, and user-centered design. With over 5 years of experience transforming ideas into innovative technological solutions.",
  social: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    email: "mailto:email@example.com"
  }
};

export const experiences = [
  {
    title: "Senior Full Stack Developer",
    company: "Tech Innovators Inc",
    period: "2023 - Present",
    description: "Leading development of enterprise-scale applications",
    achievements: [
      "Increased team productivity by 40%",
      "Reduced deployment time by 60%",
      "Mentored 5 junior developers"
    ],
    tech: ["React", "Node.js", "AWS"],
    icon: Code2
  },
  {
    title: "Frontend Tech Lead",
    company: "Digital Solutions Co",
    period: "2022 - 2023",
    description: "Led frontend architecture and development",
    achievements: [
      "Implemented micro-frontend architecture",
      "Reduced bundle size by 45%",
      "Improved Lighthouse score to 95+"
    ],
    tech: ["Vue.js", "TypeScript", "Webpack"],
    icon: Layout
  },
  {
    title: "Backend Developer",
    company: "Cloud Systems Ltd",
    period: "2021 - 2022",
    description: "Developed scalable microservices",
    achievements: [
      "Built high-performance APIs",
      "Implemented event-driven architecture",
      "99.9% uptime achievement"
    ],
    tech: ["Python", "Docker", "Kubernetes"],
    icon: Server
  },
  {
    title: "Full Stack Developer",
    company: "Web Creators",
    period: "2020 - 2021",
    description: "Full stack development for various clients",
    achievements: [
      "Delivered 10+ successful projects",
      "Implemented CI/CD pipelines",
      "Reduced loading times by 50%"
    ],
    tech: ["Angular", "Express", "MongoDB"],
    icon: Globe
  },
  {
    title: "Software Engineer",
    company: "Tech Solutions",
    period: "2019 - 2020",
    description: "Developed enterprise software solutions",
    achievements: [
      "Automated testing processes",
      "Improved code coverage to 90%",
      "Implemented agile methodologies"
    ],
    tech: ["Java", "Spring", "PostgreSQL"],
    icon: Settings
  },
  {
    title: "Junior Developer",
    company: "Startup Hub",
    period: "2018 - 2019",
    description: "Full stack development for startups",
    achievements: [
      "Built MVP for 3 startups",
      "Implemented responsive designs",
      "Optimized database queries"
    ],
    tech: ["React", "Node.js", "MySQL"],
    icon: Terminal
  }
];

export const projects = [
  {
    title: "Modern E-commerce Platform",
    description: "A full-stack e-commerce solution with real-time inventory management and advanced analytics",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    github: "#",
    demo: "#",
    tech: ["React", "Node.js", "MongoDB"],
    features: ["Real-time updates", "Payment integration", "Admin dashboard"],
    methodology: "Scrum",
    teamSize: "6 developers",
    duration: "8 months",
    impact: "Increased sales by 45%"
  },
  {
    title: "AI-Powered Analytics Dashboard",
    description: "Data visualization platform with machine learning insights and predictive modeling capabilities",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    github: "#",
    demo: "#",
    tech: ["Vue.js", "Python", "TensorFlow"],
    features: ["Predictive analytics", "Custom reports", "API integration"],
    methodology: "Kanban",
    teamSize: "4 developers",
    duration: "6 months",
    impact: "Reduced analysis time by 60%"
  },
  {
    title: "Cloud-Native CMS",
    description: "Scalable content management system built for the cloud with enterprise-grade features",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    github: "#",
    demo: "#",
    tech: ["Next.js", "AWS", "GraphQL"],
    features: ["CDN integration", "Serverless architecture", "Multi-tenant support"],
    methodology: "Scrumban",
    teamSize: "5 developers",
    duration: "12 months",
    impact: "99.99% uptime achieved"
  },
  {
    title: "Social Media Analytics",
    description: "Real-time social media monitoring and analytics platform with AI-powered insights",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    github: "#",
    demo: "#",
    tech: ["React", "Python", "Redis"],
    features: ["Real-time monitoring", "Sentiment analysis", "Trend detection"],
    methodology: "Agile",
    teamSize: "7 developers",
    duration: "10 months",
    impact: "Processed 1M+ posts daily"
  },
  {
    title: "Smart Home IoT Platform",
    description: "IoT platform for smart home device management with advanced automation capabilities",
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    github: "#",
    demo: "#",
    tech: ["Vue.js", "Node.js", "MQTT"],
    features: ["Device management", "Automation rules", "Energy monitoring"],
    methodology: "Scrum",
    teamSize: "4 developers",
    duration: "9 months",
    impact: "30% energy savings"
  },
  {
    title: "Learning Management System",
    description: "Modern e-learning platform with interactive features and real-time collaboration",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    github: "#",
    demo: "#",
    tech: ["React", "Django", "PostgreSQL"],
    features: ["Course management", "Interactive quizzes", "Progress tracking"],
    methodology: "Kanban",
    teamSize: "5 developers",
    duration: "7 months",
    impact: "10K+ active students"
  },
  {
    title: "Healthcare Management System",
    description: "Comprehensive healthcare facility management solution with telemedicine support",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    github: "#",
    demo: "#",
    tech: ["Angular", "Java", "Oracle"],
    features: ["Patient records", "Appointment scheduling", "Billing management"],
    methodology: "Waterfall",
    teamSize: "8 developers",
    duration: "14 months",
    impact: "Reduced wait times by 40%"
  },
  {
    title: "Real Estate Platform",
    description: "Modern real estate listing and management platform with virtual tour capabilities",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    github: "#",
    demo: "#",
    tech: ["Next.js", "Node.js", "MongoDB"],
    features: ["Property listings", "Virtual tours", "Agent portal"],
    methodology: "Agile",
    teamSize: "6 developers",
    duration: "8 months",
    impact: "200% increase in leads"
  }
];

export const skills = {
  languages: [
    { name: "JavaScript", level: 90, icon: Braces },
    { name: "TypeScript", level: 85, icon: FileJson },
    { name: "Python", level: 80, icon: Terminal },
    { name: "Java", level: 75, icon: Code2 }
  ],
  frontend: [
    { name: "React", level: 95, icon: Code2 },
    { name: "Vue", level: 85, icon: Layout },
    { name: "Next.js", level: 90, icon: Globe }
  ],
  backend: [
    { name: "Node.js", level: 90, icon: Server },
    { name: "Express", level: 85, icon: Server },
    { name: "MongoDB", level: 80, icon: Database }
  ],
  tools: [
    { name: "Git", level: 90, icon: Code2 },
    { name: "Docker", level: 85, icon: Wrench },
    { name: "AWS", level: 80, icon: Globe }
  ]
};