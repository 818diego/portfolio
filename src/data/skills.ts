import { BsGithub } from 'react-icons/bs';
import { DiMongodb, DiPython, DiReact } from 'react-icons/di';
import { FaDocker } from 'react-icons/fa';
import { FaJs } from 'react-icons/fa6';
import { PiFileCSharpThin } from 'react-icons/pi';
import { RiNextjsFill } from 'react-icons/ri';
import { SiAstro, SiExpress, SiTypescript } from 'react-icons/si';
import { TbBrandCSharp, TbSql } from 'react-icons/tb';
import { useTranslation } from 'react-i18next';

export const skills = () => {
  const { t } = useTranslation();

  return {
    languages: [
      { name: t('JavaScript'), level: 75, icon: FaJs },
      { name: t('TypeScript'), level: 65, icon: SiTypescript },
      { name: t('C#'), level: 70, icon: PiFileCSharpThin },
      { name: t('Python'), level: 30, icon: DiPython },
    ],
    frontend: [
      { name: t('React'), level: 75, icon: DiReact },
      { name: t('Next.js'), level: 60, icon: RiNextjsFill },
      { name: t('Astro'), level: 50, icon: SiAstro },
      { name: t('Express'), level: 70, icon: SiExpress }
    ],
    backend: [
      { name: t('.NET Core/ASP.NET'), level: 70, icon: TbBrandCSharp },
      { name: t('Express'), level: 70, icon: SiExpress },
    ],
    tools: [
      { name: t('Git'), level: 70, icon: BsGithub },
      { name: t('Docker'), level: 40, icon: FaDocker },
      { name: t('MongoDB'), level: 60, icon: DiMongodb },
      { name: t('SQL Server'), level: 60, icon: TbSql }
    ]
  };
};