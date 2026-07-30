import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { Badge } from '@/components/ui/Badge';
import { useTranslation } from 'react-i18next';
import { useGsapScope, staggerReveal, prefersReducedMotion } from '@/utils/gsap';

interface Project {
  title: string;
  description: string;
  image: string;
  demo?: string;
  tech: { name: string; icon: React.ComponentType }[];
  features: string[];
  teamSize: string;
  duration: string;
  impact: string;
  icon: React.ComponentType;
}

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const { t } = useTranslation();
  const cardRef = useRef<HTMLDivElement>(null);

  useGsapScope(() => {
    const inner = gsap.utils.toArray<HTMLElement>('[data-pc]');
    if (inner.length === 0) return;
    if (prefersReducedMotion()) {
      gsap.fromTo(inner, { opacity: 0 }, { opacity: 1, duration: 0.01, stagger: 0.04 });
    } else {
      staggerReveal(inner, { y: 14, stagger: 0.06, duration: 0.5, delay: 0.05 });
    }
  }, cardRef);

  return (
    <div
      ref={cardRef}
      data-project-card
      className="project-card bg-zinc-800 rounded-xl overflow-hidden shadow-sm hover:shadow-md border border-zinc-700/50 flex flex-col"
    >
      <div
        data-pc
        className="relative h-56 overflow-hidden"
      >
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 flex items-center justify-center">
          {React.createElement(project.icon, { className: "w-10 h-10 text-white" } as any)}
        </div>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 data-pc className="text-lg font-bold mb-2 text-white group-hover:text-green-400">
          {project.title}
        </h3>
        <p data-pc className="text-gray-400 mb-5 text-[13px] leading-relaxed">
          {project.description}
        </p>
        <div data-pc className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((tech, i) => (
            <Badge key={i} variant="default" icon={<tech.icon />}>
              {tech.name}
            </Badge>
          ))}
        </div>
        <div data-pc className="mt-auto pt-5 border-t border-zinc-700/50 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-zinc-800/50 border border-zinc-700/30 text-[10px] text-zinc-500 font-medium">
              <span className="w-1 h-1 bg-zinc-600 rounded-full" />
              {t('No code')}
            </div>
            {!project.demo && (
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-zinc-800/50 border border-zinc-700/30 text-[10px] text-zinc-500 font-medium">
                <span className="w-1 h-1 bg-zinc-600 rounded-full" />
                {t('No demo')}
              </div>
            )}
          </div>
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] font-bold text-green-400 uppercase tracking-widest hover:underline decoration-2 underline-offset-4"
            >
              {t('Live Preview')} →
            </a>
          )}
        </div>
      </div>
    </div>
  );
};