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
import { useTranslation } from 'react-i18next';

export const projects = () => {
  const { t } = useTranslation();

  return [
    {
      title: t("Managenments Sales System"),
      description: t("Worked on the design using NextJS and TailwindCSS, following Agile Scrum methodology and managed RESTful APIs."),
      image: "https://i.imgur.com/uZmrZsm.png",
      demo: "https://management-sales.vercel.app/",
      tech: [
        { name: "Next.js", icon: RiNextjsFill },
        { name: "Tailwind CSS", icon: RiTailwindCssFill },
        { name: "TypeScript", icon: SiTypescript },
      ],
      features: [t("Sales Management"), t("Admin Dashboard"), t("RESTful APIs")],
      methodology: t("Scrum"),
      teamSize: t("3 developers"),
      duration: t("4 months"),
      impact: t("Sales process optimization"),
      icon: FaGlobe,
    },
    {
      title: t("Appointment Management Mobile App"),
      description: t("Worked on the UI and UX of the application, connecting the backend with the frontend using RESTful APIs. Designed in Figma and worked with React Native and vanilla CSS in React Native with JavaScript."),
      image: "https://imgur.com/Zft00zN.png",
      tech: [
        { name: "React Native", icon: FaReact },
        { name: "CSS", icon: FaCss3 },
        { name: "JavaScript", icon: FaJs },
        { name: "Figma", icon: FaFigma },
      ],
      features: [t("UI/UX Design"), t("RESTful APIs"), t("Mobile First")],
      methodology: t("Agile"),
      teamSize: t("3 developers"),
      duration: t("2 months"),
      impact: t("Enhanced user experience"),
      icon: FaMobileAlt,
    },
    {
      title: t("Hotel Management"),
      description: t("Refactored code, made design changes, and worked on the system using Laravel for APIs, PHP, Bootstrap, and jQuery."),
      image: "https://imgur.com/ysgGsI6.png",
      demo: "https://palegreen-crow-554205.hostingersite.com/",
      tech: [
        { name: "Laravel", icon: FaLaravel },
        { name: "PHP", icon: FaPhp },
        { name: "Bootstrap", icon: FaBootstrap },
        { name: "jQuery", icon: FaReact },
      ],
      features: [t("Code Refactoring"), t("System Design"), t("Performance Optimization")],
      methodology: t("Waterfall"),
      teamSize: t("2 developers"),
      duration: t("2 months"),
      impact: t("System efficiency improvement"),
      icon: FaServer,
    },
    {
      title: t("Supremo Team Website"),
      description: t("This is a personal project where I created a Discord bot dedicated to the Discord community, which plays music and is a multifunctional security bot for servers."),
      image: "https://i.imgur.com/qNHkO5e.png",
      demo: "https://www.supremito.xyz/",
      tech: [
        { name: "Discord.js", icon: FaDiscord },
        { name: "Node.js", icon: FaNodeJs },
        { name: "JavaScript", icon: FaJs },
      ],
      features: [t("Music Bot"), t("Server Security"), t("Automation")],
      methodology: t("Agile"),
      teamSize: t("1 developer"),
      duration: t("1 month"),
      impact: t("Community management improvement"),
      icon: FaRobot,
    },
    {
      title: t("Dog Breed Prediction Web App"),
      description: t("This is a final university project, in which we developed a convolutional neural network to predict dog breeds, and a web application was created to interact with the neural network and predict more than 100 dog breeds."),
      image: "https://i.imgur.com/hNL4pj3.png",
      demo: "https://dogsvision.supremito.xyz/",
      tech: [
        { name: "Python", icon: FaPython },
        { name: "TensorFlow", icon: SiTensorflow },
        { name: "JavaScript", icon: FaJs },
        { name: "HTML", icon: FaHtml5 },
        { name: "CSS", icon: FaCss3 },
      ],
      features: [t("AI Prediction"), t("Convolutional Neural Network"), t("100+ Breeds")],
      methodology: t("Iterative"),
      teamSize: t("1 developer"),
      duration: t("1 month"),
      impact: t("AI Technology Innovation"),
      icon: FaBrain,
    },
  ];
};
