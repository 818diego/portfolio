import { useTranslation } from 'react-i18next';

export const personalInfo = () => {
  const { t } = useTranslation();

  return {
    fullName: "Diego Merino",
    role: t("personal.role"),
    description: t("personal.description"),
    available: t("personal.available"),
    social: {
      github: "https://github.com/818diego",
      linkedin: "https://www.linkedin.com/in/818diego/",
      cv: "CV_DiegoMerino.pdf"
    }
  };
};
