import { Code2, Layout, Server } from "lucide-react";
import { useTranslation } from 'react-i18next';

export const experiences = () => {
  const { t } = useTranslation();

  return [
    {
      title: t("Full Stack Developer"),
      company: "Freelance",
      period: t("January 2024 - Present"),
      description: t("Development of web and mobile solutions for clients from various industries, from conceptualization to delivery."),
      achievements: [
        t("Collaborated with clients on projects of different sizes, adapting to their specific needs"),
        t("Optimized the performance of delivered applications, improving load times"),
        t("Established trust relationships with clients by meeting deadlines and maintaining high quality standards"),
      ],
      icon: Code2,
    },
    {
      title: t("Intern"),
      company: "PT DILATO INFORMATION TECHNOLOGY",
      period: t("September 2024 - November 2024"),
      description: t("Participated in the migration of a sales system to modern technologies, working on frontend development."),
      achievements: [
        t("Developed frontend components using Next.js, improving user experience"),
        t("Collaborated with the QA team to ensure system quality and efficiently resolve bugs"),
        t("Contributed to the redesign of the system to make it more scalable and efficient"),
      ],
      icon: Layout,
    },
    {
      title: t("Full Stack Developer"),
      company: "Hotel La Costa",
      period: t("October 2023 - January 2024"),
      description: t("Collaborated in the development and maintenance of a hotel management system using PHP and Laravel."),
      achievements: [
        t("Developed and optimized APIs to integrate key functionalities in a monolithic environment"),
        t("Improved system stability and performance, ensuring its proper operation in the production environment"),
        t("Worked in a team to implement new features and resolve technical issues"),
      ],
      icon: Server,
    },
  ];
};
