import React, { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { IoLanguageOutline } from 'react-icons/io5';

interface HeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export const Header: React.FC<HeaderProps> = ({ darkMode = true, toggleDarkMode }) => {
  const { t, i18n } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'header-scroll' : 'bg-transparent'
      }`}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-green-400 transition-all duration-300">
          <img
            src="supreSVG.svg"
            alt="Logo"
            className={`w-10 h-10 mr-2 ${darkMode ? 'dark-mode-img' : 'light-mode-img'}`}
          />
        </h1>
        <div className="flex items-center space-x-4">
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-green-900/30 transition-all duration-300 flex items-center"
            aria-label="Toggle theme"
          >
            {darkMode ? (
              <>
                <Sun className="text-green-400 w-6 h-6 transition-transform duration-300" />
                <span className="ml-2 text-green-400">{t('Dark Mode')}</span>
              </>
            ) : (
              <>
                <Moon className="text-gray-800 w-6 h-6 transition-transform duration-300" />
                <span className="ml-2 text-gray-800">{t('Light Mode')}</span>
              </>
            )}
          </button>
          <button
            onClick={() => changeLanguage(i18n.language === 'en' ? 'es' : 'en')}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-green-900/30 transition-all duration-300 flex items-center"
            aria-label="Toggle language"
          >
            <IoLanguageOutline className="text-gray-800 dark:text-green-400 w-6 h-6" />
            <span className="ml-2 text-gray-800 dark:text-green-400">
              {i18n.language === 'en' ? 'ESP' : 'ENG'}
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
};