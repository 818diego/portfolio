import React from 'react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { personalInfo } from '@/data';
import { useTranslation } from 'react-i18next';

export const Footer: React.FC = () => {
  const { t } = useTranslation();
  const info = personalInfo();

  return (
    <footer className="py-8 bg-zinc-900">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0">
            © {new Date().getFullYear()} <a href={info.social.github} target="_blank" rel="noopener noreferrer" className="text-green-500 font-bold hover:text-green-400">818diego</a>. {t('All rights reserved')}.
          </p>
          <div className="flex space-x-4">
            {[
              { Icon: FaGithub, href: info.social.github, label: t("GitHub Profile") },
              { Icon: FaLinkedinIn, href: info.social.linkedin, label: t("LinkedIn Profile") },
            ].map((social, index) => {
              const Icon = social.Icon;
              return (
              <a
                key={index}
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