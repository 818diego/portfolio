import React from 'react';
import { FaCode, FaExternalLinkAlt } from 'react-icons/fa';
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
  methodology: string;
  teamSize: string;
  duration: string;
  impact: string;
  icon: React.ComponentType;
}

interface ProjectCardProps {
  project: Project;
  index: number;
  onProjectClick: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, onProjectClick }) => {
  const { t } = useTranslation();

  return (
    <div
      className="project-card scroll-fade-in bg-white dark:bg-zinc-800 rounded-lg overflow-hidden shadow-lg group hover:shadow-xl transition-all duration-200 flex flex-col"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div 
        className="relative h-56 overflow-hidden cursor-pointer"
        onClick={() => onProjectClick(project)}
      >
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          {React.createElement(project.icon, { className: "w-12 h-12 text-white transform -translate-y-10 group-hover:translate-y-0 transition-transform duration-500" } as any)} {/* Dynamic icon */}
        </div>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-green-300">
          {project.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-4">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech, i) => (
            <Badge key={i} variant="default" icon={<tech.icon />}>
              {tech.name}
            </Badge>
          ))}
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.features.map((feature, i) => (
            <span
              key={i}
              className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-1"
            >
              <span className="w-1.5 h-1.5 bg-green-500 dark:bg-green-400 rounded-full" />
              {feature}
            </span>
          ))}
        </div>
        <div className="mt-auto flex justify-center items-center pt-4 border-t border-gray-100 dark:border-zinc-700 gap-2">
          {/* GitHub Link */}
          {project.github ? (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 hover:text-green-700 dark:text-green-400 dark:hover:text-green-300 flex items-center gap-2 px-4 py-2 rounded-md transition-all duration-300 hover:bg-green-50 dark:hover:bg-green-900/20"
            >
              <FaCode className="w-4 h-4" />
              <span>{t('Code')}</span>
            </a>
          ) : (
            <span className="text-gray-500 dark:text-gray-400 text-sm">{t('No code available')}</span>
          )}

          {/* Demo Link */}
          {project.demo ? (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 hover:text-green-700 dark:text-green-400 dark:hover:text-green-300 flex items-center gap-2 px-4 py-2 rounded-md transition-all duration-300 hover:bg-green-50 dark:hover:bg-green-900/20"
            >
              <FaExternalLinkAlt className="w-4 h-4" />
              <span>{t('Live Preview')}</span>
            </a>
          ) : (
            <span className="text-gray-500 dark:text-gray-400 text-sm">{t('No demo available')}</span>
          )}
        </div>
      </div>
    </div>
  );
};