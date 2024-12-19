import { BsGithub } from 'react-icons/bs';
import { DiMongodb, DiPython, DiReact } from 'react-icons/di';
import { FaDocker } from 'react-icons/fa';
import { FaJs } from 'react-icons/fa6';
import { PiFileCSharpThin } from 'react-icons/pi';
import { RiNextjsFill } from 'react-icons/ri';
import { SiAstro, SiExpress, SiTypescript } from 'react-icons/si';
import { TbBrandCSharp, TbSql } from 'react-icons/tb';

export const skills = {
  languages: [
    { name: "JavaScript", level: 75, icon: FaJs },
    { name: "TypeScript", level: 65, icon: SiTypescript },
    { name: "C#", level: 70, icon: PiFileCSharpThin },
    { name: "Python", level: 30, icon: DiPython },
  ],
  frontend: [
    { name: "React", level: 75, icon: DiReact },
    { name: "Next.js", level: 70, icon: RiNextjsFill },
    { name: "Astro", level: 60, icon: SiAstro },
    { name: "Express", level: 75, icon: SiExpress }
  ],
  backend: [
    { name: ".NET Core/ASP.NET", level: 70, icon: TbBrandCSharp },
    { name: "Express", level: 75, icon: SiExpress },
  ],
  tools: [
    { name: "Git", level: 80, icon: BsGithub },
    { name: "Docker", level: 50, icon: FaDocker },
    { name: "MongoDB", level: 70, icon: DiMongodb },
    { name: "SQL Server", level: 70, icon: TbSql }
  ]
};