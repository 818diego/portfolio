import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className="py-8 border-t border-gray-200 dark:border-green-900 bg-gray-100 dark:bg-black">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 dark:text-gray-400 mb-4 md:mb-0">
            {t('footer.rights')}
          </p>
          <div className="flex space-x-4">
            {[
              { icon: Github, href: "#" },
              { icon: Linkedin, href: "#" },
              { icon: Mail, href: "#" }
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-green-400 transition-colors"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}