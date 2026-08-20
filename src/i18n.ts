import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { buildResources } from "@/locales/buildResources";
import { translations } from "@/locales/translations";
const resources = buildResources(translations);

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
