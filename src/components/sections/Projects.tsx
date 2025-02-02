import React, { useEffect } from 'react';
import { FaProjectDiagram } from 'react-icons/fa';
import { projects } from '@/data';
import { useTranslation } from 'react-i18next';
import { ProjectCard } from '@/components/ui/ProjectCard';

interface Project {
  title: string;
  description: string;
  image: string;
  github?: string;
  demo?: string;
  tech: { name: string; icon: React.ComponentType }[];
  features: string[];
  methodology: string;
  teamSize: string;
  duration: string;
  impact: string;
  icon: React.ComponentType;
}

export const Projects: React.FC = () => {
  const { t } = useTranslation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const projectElements = document.querySelectorAll('.scroll-fade-in');
    projectElements.forEach((el) => observer.observe(el));

    return () => {
      projectElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section className="py-20 bg-gray-100 dark:bg-zinc-900/50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center text-gray-800 dark:text-green-400 scroll-fade-in flex items-center justify-center gap-2">
          <FaProjectDiagram className="w-8 h-8 text-green-400" />
          {t('Projects')}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects().map((project: Project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};