import { FaGlobe, FaMobileAlt, FaServer, FaBrain, FaReact, FaPhp, FaBootstrap, FaPython, FaHtml5, FaFigma, FaGamepad } from "react-icons/fa";
import { FaCss3, FaJs, FaLaravel } from "react-icons/fa6";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiTensorflow, SiTypescript } from "react-icons/si";
import { useTranslation } from "react-i18next";

export const projects = () => {
  const { t } = useTranslation();

  return [
    {
      title: t("projects.managementSales.title"),
      description: t("projects.managementSales.description"),
      image: "https://i.imgur.com/uZmrZsm.png",
      demo: "https://management-sales.vercel.app/",
      tech: [
        { name: "Next.js", icon: RiNextjsFill },
        { name: "Tailwind CSS", icon: RiTailwindCssFill },
        { name: "TypeScript", icon: SiTypescript },
      ],
      features: [
        t("projects.managementSales.features.salesManagement"),
        t("projects.managementSales.features.adminDashboard"),
        t("projects.managementSales.features.restfulApis"),
      ],
      teamSize: t("projects.managementSales.teamSize"),
      duration: t("projects.managementSales.duration"),
      impact: t("projects.managementSales.impact"),
      icon: FaGlobe,
    },
    {
      title: t("projects.appointmentApp.title"),
      description: t("projects.appointmentApp.description"),
      image: "https://imgur.com/Zft00zN.png",
      tech: [
        { name: "React Native", icon: FaReact },
        { name: "CSS", icon: FaCss3 },
        { name: "JavaScript", icon: FaJs },
        { name: "Figma", icon: FaFigma },
      ],
      features: [
        t("projects.appointmentApp.features.uiUx"),
        t("projects.appointmentApp.features.restfulApis"),
        t("projects.appointmentApp.features.mobileFirst"),
      ],
      teamSize: t("projects.appointmentApp.teamSize"),
      duration: t("projects.appointmentApp.duration"),
      impact: t("projects.appointmentApp.impact"),
      icon: FaMobileAlt,
    },
    {
      title: t("projects.hotelManagement.title"),
      description: t("projects.hotelManagement.description"),
      image: "https://imgur.com/ysgGsI6.png",
      demo: "https://palegreen-crow-554205.hostingersite.com/",
      tech: [
        { name: "Laravel", icon: FaLaravel },
        { name: "PHP", icon: FaPhp },
        { name: "Bootstrap", icon: FaBootstrap },
        { name: "jQuery", icon: FaReact },
      ],
      features: [
        t("projects.hotelManagement.features.refactoring"),
        t("projects.hotelManagement.features.systemDesign"),
        t("projects.hotelManagement.features.performance"),
      ],
      teamSize: t("projects.hotelManagement.teamSize"),
      duration: t("projects.hotelManagement.duration"),
      impact: t("projects.hotelManagement.impact"),
      icon: FaServer,
    },
    {
      title: t("projects.dogBreed.title"),
      description: t("projects.dogBreed.description"),
      image: "https://i.imgur.com/hNL4pj3.png",
      demo: "https://dogs-predictions-git-main-818supremos-projects.vercel.app/",
      tech: [
        { name: "Python", icon: FaPython },
        { name: "TensorFlow", icon: SiTensorflow },
        { name: "JavaScript", icon: FaJs },
        { name: "HTML", icon: FaHtml5 },
        { name: "CSS", icon: FaCss3 },
      ],
      features: [
        t("projects.dogBreed.features.aiPrediction"),
        t("projects.dogBreed.features.cnn"),
        t("projects.dogBreed.features.breeds"),
      ],
      teamSize: t("projects.dogBreed.teamSize"),
      duration: t("projects.dogBreed.duration"),
      impact: t("projects.dogBreed.impact"),
      icon: FaBrain,
    },
    {
      title: t("projects.daltonLife.title"),
      description: t("projects.daltonLife.description"),
      image: "https://i.imgur.com/kFIBKiU.png",
      demo: "https://www.daltonxlife.org/",
      tech: [
        { name: "React", icon: FaReact },
        { name: "JavaScript", icon: FaJs },
        { name: "HTML", icon: FaHtml5 },
        { name: "CSS", icon: FaCss3 },
      ],
      features: [
        t("projects.daltonLife.features.gamingCommunity"),
        t("projects.daltonLife.features.scriptMarketplace"),
        t("projects.daltonLife.features.roleplayServer"),
      ],
      teamSize: t("projects.daltonLife.teamSize"),
      duration: t("projects.daltonLife.duration"),
      impact: t("projects.daltonLife.impact"),
      icon: FaGamepad,
    },
  ];
};
