import React from 'react';
import { FaCode } from 'react-icons/fa';
import { Badge } from '@/components/ui/Badge';
import { useTranslation } from 'react-i18next';

interface Project {
  title: string;
  description: string;
  image: string;
  images?: string[];
  github?: string;
  demo?: string;
  tech: { name: string; icon: React.ComponentType }[];
  features: string[];
  methodology?: string;
  teamSize: string;
  duration: string;
  impact: string;
  icon: React.ComponentType;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const { t } = useTranslation();

  return (
    <div
      className="project-card scroll-fade-in bg-white dark:bg-zinc-800 rounded-xl overflow-hidden shadow-sm hover:shadow-md border border-gray-100 dark:border-zinc-700/50 transition-all duration-300 flex flex-col"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div 
        className="relative h-56 overflow-hidden"
      >
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          {React.createElement(project.icon, { className: "w-10 h-10 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500" } as any)}
        </div>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-lg font-bold mb-2 text-gray-800 dark:text-white group-hover:text-green-400 transition-colors">
          {project.title}
        </h3>
        <p className="description-text text-gray-600 dark:text-gray-400 mb-5 text-[13px] leading-relaxed">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((tech, i) => (
            <Badge key={i} variant="default" icon={<tech.icon />}>
              {tech.name}
            </Badge>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-2 mb-6">
          {project.features.map((feature, i) => (
            <div
              key={i}
              className="flex items-center px-3 py-2 rounded-lg bg-green-500/5 dark:bg-green-400/5 text-gray-700 dark:text-zinc-300 border border-green-500/10 dark:border-green-400/10 transition-all duration-300"
            >
              <div className="w-1.5 h-1.5 bg-green-500 dark:bg-green-400 rounded-full mr-2 shrink-0" />
              <span className="text-[10px] leading-tight font-medium line-clamp-1">
                {feature}
              </span>
            </div>
          ))}
        </div>
        <div className="mt-auto pt-5 border-t border-gray-100 dark:border-zinc-700/50 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            {project.github ? (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group/btn relative flex items-center justify-center w-9 h-9 rounded-lg border border-gray-200 dark:border-zinc-700 text-gray-600 dark:text-gray-400 hover:border-green-500/50 hover:text-green-500 transition-all duration-300"
                title={t('Code')}
              >
                <FaCode className="w-4 h-4" />
              </a>
            ) : (
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-zinc-100/50 dark:bg-zinc-800/50 border border-zinc-200/50 dark:border-zinc-700/30 text-[10px] text-gray-400 dark:text-zinc-500 font-medium">
                <span className="w-1 h-1 bg-zinc-400 dark:bg-zinc-600 rounded-full" />
                {t('No code')}
              </div>
            )}
            {!project.demo && (
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-zinc-100/50 dark:bg-zinc-800/50 border border-zinc-200/50 dark:border-zinc-700/30 text-[10px] text-gray-400 dark:text-zinc-500 font-medium">
                <span className="w-1 h-1 bg-zinc-400 dark:bg-zinc-600 rounded-full" />
                {t('No demo')}
              </div>
            )}
          </div>
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] font-bold text-green-500 dark:text-green-400 uppercase tracking-widest hover:underline decoration-2 underline-offset-4 transition-all"
            >
              {t('Live Preview')} →
            </a>
          )}
        </div>
      </div>
    </div>
  );
};