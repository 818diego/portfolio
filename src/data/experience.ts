import { FaCode, FaThLarge, FaServer } from "react-icons/fa";
import { useTranslation } from 'react-i18next';

export const experiences = () => {
  const { t } = useTranslation();

  return [
    {
      title: t("experience.frontendDeveloper.title"),
      company: "PABS",
      period: t("experience.frontendDeveloper.period"),
      description: t("experience.frontendDeveloper.description"),
      achievements: [
        t("experience.frontendDeveloper.achievements.angular"),
        t("experience.frontendDeveloper.achievements.documentation"),
        t("experience.frontendDeveloper.achievements.problemSolving"),
        t("experience.frontendDeveloper.achievements.apiIntegration"),
      ],
      icon: FaCode,
    },
    {
      title: t("experience.internship.title"),
      company: "PT DILATO INFORMATION TECHNOLOGY",
      period: t("experience.internship.period"),
      description: t("experience.internship.description"),
      achievements: [
        t("experience.internship.achievements.nextjs"),
        t("experience.internship.achievements.qa"),
        t("experience.internship.achievements.redesign"),
      ],
      icon: FaThLarge,
    },
    {
      title: t("experience.fullStackDeveloper.title"),
      company: "Hotel La Costa",
      period: t("experience.fullStackDeveloper.period"),
      description: t("experience.fullStackDeveloper.description"),
      achievements: [
        t("experience.fullStackDeveloper.achievements.apis"),
        t("experience.fullStackDeveloper.achievements.stability"),
        t("experience.fullStackDeveloper.achievements.teamwork"),
      ],
      icon: FaServer,
    },
  ];
};
