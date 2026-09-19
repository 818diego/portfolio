import { BsGithub } from "react-icons/bs";
import { DiMongodb, DiReact } from "react-icons/di";
import { FaDocker, FaRobot } from "react-icons/fa";
import { FaJs, FaLaravel } from "react-icons/fa6";
import { RiNextjsFill } from "react-icons/ri";
import {
  SiAngular,
  SiCursor,
  SiExpress,
  SiFigma,
  SiGooglegemini,
  SiMysql,
  SiNestjs,
  SiPostman,
  SiTypescript,
} from "react-icons/si";
import { IconType } from "react-icons";

export interface Skill {
  name: string;
  icon: IconType;
}

export const skills = () => ({
  languages: [
    { name: "JavaScript", icon: FaJs },
    { name: "TypeScript", icon: SiTypescript },
  ],
  frontend: [
    { name: "Angular", icon: SiAngular },
    { name: "React", icon: DiReact },
    { name: "Next.js", icon: RiNextjsFill },
  ],
  backend: [
    { name: "NestJS", icon: SiNestjs },
    { name: "Laravel", icon: FaLaravel },
    { name: "Express", icon: SiExpress },
    { name: "MongoDB", icon: DiMongodb },
    { name: "MySQL", icon: SiMysql },
  ],
  aiAgents: [
    { name: "Cursor", icon: SiCursor },
    { name: "Gemini", icon: SiGooglegemini },
    { name: "OpenClaw", icon: FaRobot },
  ],
  tools: [
    { name: "Git", icon: BsGithub },
    { name: "Docker", icon: FaDocker },
    { name: "Figma", icon: SiFigma },
    { name: "Postman", icon: SiPostman },
  ],
});
