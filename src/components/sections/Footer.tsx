import React, { useRef } from 'react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { gsap } from 'gsap';
import { personalInfo } from '@/data';
import { useTranslation } from 'react-i18next';
import { useGsapScope, staggerReveal, prefersReducedMotion } from '@/utils/gsap';

export const Footer: React.FC = () => {
  const { t } = useTranslation();
  const info = personalInfo();
  const sectionRef = useRef<HTMLElement>(null);

  useGsapScope(() => {
    const targets = gsap.utils.toArray<HTMLElement>('[data-footer]');
    if (prefersReducedMotion()) {
      gsap.fromTo(targets, { opacity: 0 }, { opacity: 1, duration: 0.01, stagger: 0.04 });
    } else {
      staggerReveal(targets, { y: 16, stagger: 0.08, duration: 0.6 });
    }
  }, sectionRef);

  return (
    <footer ref={sectionRef} className="py-8 bg-zinc-900">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p data-footer className="text-gray-400 mb-4 md:mb-0">
            © {new Date().getFullYear()} <a href={info.social.github} target="_blank" rel="noopener noreferrer" className="text-green-500 font-bold hover:text-green-400">818diego</a>. {t('footer.rights')}.
          </p>
          <div data-footer className="flex space-x-4">
            {[
              { Icon: FaGithub, href: info.social.github, label: t("footer.githubProfile") },
              { Icon: FaLinkedinIn, href: info.social.linkedin, label: t("footer.linkedinProfile") },
            ].map((social) => {
              const Icon = social.Icon;
              return (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-green-400"
                aria-label={social.label}
              >
                <Icon className="w-5 h-5" />
              </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};