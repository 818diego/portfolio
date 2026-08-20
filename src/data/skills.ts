import { BsGithub } from "react-icons/bs";
import { DiMongodb, DiReact } from "react-icons/di";
import { FaDocker } from "react-icons/fa";
import { FaJs } from "react-icons/fa6";
import { SiAngular, SiAstro, SiExpress, SiFigma, SiLua, SiMysql, SiNestjs, SiPostman, SiTypescript } from "react-icons/si";
import { IconType } from "react-icons";

export interface Skill {
  name: string;
  icon: IconType;
}

export const skills = () => ({
  languages: [
    { name: "JavaScript", icon: FaJs },
    { name: "TypeScript", icon: SiTypescript },
    { name: "Lua", icon: SiLua },
  ],
  frontend: [
    { name: "React", icon: DiReact },
    { name: "Astro", icon: SiAstro },
    { name: "Angular", icon: SiAngular },
  ],
  backend: [
    { name: "NestJS", icon: SiNestjs },
    { name: "Express", icon: SiExpress },
    { name: "MongoDB", icon: DiMongodb },
    { name: "MySQL", icon: SiMysql },
  ],
  tools: [
    { name: "Git", icon: BsGithub },
    { name: "Docker", icon: FaDocker },
    { name: "Figma", icon: SiFigma },
    { name: "Postman", icon: SiPostman },
  ],
});
