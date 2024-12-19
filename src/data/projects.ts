import {
  FaGlobe,
  FaMobileAlt,
  FaServer,
  FaRobot,
  FaBrain,
  FaReact,
  FaPhp,
  FaBootstrap,
  FaDiscord,
  FaNodeJs,
  FaPython,
  FaHtml5,
  FaFigma,
} from "react-icons/fa";
import { FaCss3, FaJs, FaLaravel } from "react-icons/fa6";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiTensorflow, SiTypescript } from "react-icons/si";

export const projects = [
  {
    title: "Managenments Sales System",
    description:
      "Worked on the design using NextJS and TailwindCSS, following Agile Scrum methodology and managed RESTful APIs.",
    image: "https://i.imgur.com/uZmrZsm.png",
    demo: "https://management-sales.vercel.app/",
    tech: [
      { name: "Next.js", icon: RiNextjsFill },
      { name: "Tailwind CSS", icon: RiTailwindCssFill },
      { name: "TypeScript", icon: SiTypescript },
    ],
    features: ["Sales Management", "Admin Dashboard", "RESTful APIs"],
    methodology: "Scrum",
    teamSize: "3 developers",
    duration: "4 months",
    impact: "Sales process optimization",
    icon: FaGlobe,
  },
  {
    title: "Appointment Management Mobile App",
    description:
      "Worked on the UI and UX of the application, connecting the backend with the frontend using RESTful APIs. Designed in Figma and worked with React Native and vanilla CSS in React Native with JavaScript.",
    image: "https://imgur.com/Zft00zN.png",
    tech: [
      { name: "React Native", icon: FaReact },
      { name: "CSS", icon: FaCss3 },
      { name: "JavaScript", icon: FaJs },
      { name: "Figma", icon: FaFigma },
    ],
    features: ["UI/UX Design", "RESTful APIs", "Mobile First"],
    methodology: "Agile",
    teamSize: "3 developers",
    duration: "2 months",
    impact: "Enhanced user experience",
    icon: FaMobileAlt,
  },
  {
    title: "Hotel Management",
    description:
      "Refactored code, made design changes, and worked on the system using Laravel for APIs, PHP, Bootstrap, and jQuery.",
    image: "https://imgur.com/ysgGsI6.png",
    tech: [
      { name: "Laravel", icon: FaLaravel },
      { name: "PHP", icon: FaPhp },
      { name: "Bootstrap", icon: FaBootstrap },
      { name: "jQuery", icon: FaReact },
    ],
    features: ["Code Refactoring", "System Design", "Performance Optimization"],
    methodology: "Waterfall",
    teamSize: "2 developers",
    duration: "2 months",
    impact: "System efficiency improvement",
    icon: FaServer,
  },
  {
    title: "Supremo Team Website",
    description:
      "This is a personal project where I created a Discord bot dedicated to the Discord community, which plays music and is a multifunctional security bot for servers.",
    image: "https://i.imgur.com/qNHkO5e.png",
    demo: "https://www.supremito.xyz/",
    tech: [
      { name: "Discord.js", icon: FaDiscord },
      { name: "Node.js", icon: FaNodeJs },
      { name: "JavaScript", icon: FaJs },
    ],
    features: ["Music Bot", "Server Security", "Automation"],
    methodology: "Agile",
    teamSize: "1 developer",
    duration: "1 month",
    impact: "Community management improvement",
    icon: FaRobot,
  },
  {
    title: "Dog Breed Prediction Web App",
    description:
      "This is a final university project, in which we developed a convolutional neural network to predict dog breeds, and a web application was created to interact with the neural network and predict more than 100 dog breeds.",
    image: "https://i.imgur.com/hNL4pj3.png",
    demo: "https://dogsvision.supremito.xyz/",
    tech: [
      { name: "Python", icon: FaPython },
      { name: "TensorFlow", icon: SiTensorflow },
      { name: "JavaScript", icon: FaJs },
      { name: "HTML", icon: FaHtml5 },
      { name: "CSS", icon: FaCss3 },
    ],
    features: ["AI Prediction", "Convolutional Neural Network", "100+ Breeds"],
    methodology: "Iterative",
    teamSize: "1 developer",
    duration: "1 month",
    impact: "AI Technology Innovation",
    icon: FaBrain,
  },
];
