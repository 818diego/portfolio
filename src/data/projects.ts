import { FaGlobe, FaMobileAlt, FaServer, FaRobot, FaBrain, FaReact, FaPhp, FaBootstrap, FaDiscord, FaNodeJs, FaPython, FaHtml5, FaFigma, FaGamepad } from "react-icons/fa";
import { FaCss3, FaJs, FaLaravel } from "react-icons/fa6";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiTensorflow, SiTypescript } from "react-icons/si";
import { useTranslation } from "react-i18next";

export const projects = () => {
  const { t } = useTranslation();

  return [
    {
      title: t("Managenments Sales System"),
      description: t("I led frontend development with NextJS and TailwindCSS, implementing responsive design principles while following Agile Scrum methodology. I developed and integrated RESTful APIs for seamless data flow."),
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
      description: t("I crafted intuitive UI/UX designs in Figma and implemented them with React Native. I established robust backend-frontend integration through RESTful APIs, enhancing user experience with custom CSS solutions."),
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
      description: t("I optimized the existing codebase through strategic refactoring and modernized the user interface. I developed and maintained robust API endpoints using Laravel, while enhancing functionality with PHP, Bootstrap, and jQuery."),
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
      description: t(
        "I developed a comprehensive Discord solution as a personal project, featuring an advanced music player and robust security functionality. I implemented it with Discord.js and Node.js to enhance community engagement and server protection."
      ),
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
      description: t(
        "I engineered a sophisticated AI application as my final university project, implementing a convolutional neural network capable of identifying over 100 dog breeds. I developed an intuitive web interface allowing users to interact seamlessly with the AI model."
      ),
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
    {
      title: t("Dalton Life Website"),
      description: t(
        "I developed a comprehensive website for Dalton Life, a brand dedicated to selling GTA V roleplay scripts for the FiveM game engine. The website showcases their products and services, including their own roleplay server, providing an engaging platform for the gaming community."
      ),
      image: "https://i.imgur.com/kFIBKiU.png",
      images: [
        "https://i.imgur.com/kFIBKiU.png",
        "https://i.imgur.com/bTx3o69.png",
      ],
      demo: "https://www.daltonxlife.org/",
      tech: [
        { name: "React", icon: FaReact },
        { name: "JavaScript", icon: FaJs },
        { name: "HTML", icon: FaHtml5 },
        { name: "CSS", icon: FaCss3 },
      ],
      features: [t("Gaming Community"), t("Script Marketplace"), t("Roleplay Server")],
      methodology: t("Agile"),
      teamSize: t("1 developer"),
      duration: t("2 months"),
      impact: t("Gaming community engagement"),
      icon: FaGamepad,
    },
  ];
};
