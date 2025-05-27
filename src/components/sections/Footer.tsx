import React from 'react';
import { Github, Linkedin } from 'lucide-react';
import { personalInfo } from '@/data';
import { useTranslation } from 'react-i18next';

export const Footer: React.FC = () => {
  const { t } = useTranslation();
  const info = personalInfo();

  return (
    <footer className="py-8 bg-gray-100 dark:bg-zinc-900">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 dark:text-gray-400 mb-4 md:mb-0">
            © 2024 <a href={info.social.github} target="_blank" rel="noopener noreferrer" className="text-green-500 font-bold hover:text-green-700 transition-all">818diego</a>. {t('All rights reserved')}.
          </p>
          <div className="flex space-x-4">
            {[
              { icon: Github, href: info.social.github, label: t("GitHub Profile") },
              { icon: Linkedin, href: info.social.linkedin, label: t("LinkedIn Profile") },
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-green-400 transition-colors"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};