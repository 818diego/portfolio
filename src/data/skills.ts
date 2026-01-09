import { BsGithub } from "react-icons/bs";
import { DiMongodb, DiReact } from "react-icons/di";
import { FaDocker } from "react-icons/fa";
import { FaJs } from "react-icons/fa6";
import { SiAngular, SiAstro, SiExpress, SiFigma, SiLua, SiMysql, SiNestjs, SiPostman, SiTypescript } from "react-icons/si";
import { useTranslation } from "react-i18next";
import { IconType } from "react-icons";

export interface Skill {
  name: string;
  icon: IconType;
}

export const skills = () => {
  const { t } = useTranslation();

  return {
    languages: [
      { name: t("JavaScript"), icon: FaJs },
      { name: t("TypeScript"), icon: SiTypescript },
      { name: t("Lua"), icon: SiLua },
    ],
    frontend: [
      { name: t("React"), icon: DiReact },
      { name: t("Astro"), icon: SiAstro },
      { name: t("Angular"), icon: SiAngular },
    ],
    backend: [
      { name: t("NestJS"), icon: SiNestjs },
      { name: t("Express"), icon: SiExpress },
      { name: t("MongoDB"), icon: DiMongodb },
      { name: t("MySQL"), icon: SiMysql },
    ],
    tools: [
      { name: t("Git"), icon: BsGithub },
      { name: t("Docker"), icon: FaDocker },
      { name: t("Figma"), icon: SiFigma },
      { name: t("Postman"), icon: SiPostman },
    ],
  };
};
