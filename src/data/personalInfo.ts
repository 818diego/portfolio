import { useTranslation } from 'react-i18next';

export const personalInfo = () => {
  const { t } = useTranslation();

  return {
    fullName: "Diego Merino",
    nickname: "Supremo",
    role: t("Software Engineer & Web Developer"),
    description: t("Software engineer with experience in modern technologies and agile methodologies. Specialised in the creation of systems, sites, and web applications."),
    available: t("Available for projects"),
    social: {
      github: "https://github.com/818diego",
      linkedin: "https://www.linkedin.com/in/818diego/",
      cv: "CV_DiegoMerino.pdf"
    }
  };
};