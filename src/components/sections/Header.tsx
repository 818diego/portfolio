import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { IoLanguageOutline } from 'react-icons/io5';

export const Header: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 50);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <nav className={`fixed w-full z-50 ${isScrolled ? 'header-scroll' : 'bg-transparent'
      }`}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-green-400">
          <img
            src="supreSVG.svg"
            alt="Logo"
            className="w-10 h-10 mr-2"
          />
        </h1>
        <div className="flex items-center space-x-4">
          <button
            onClick={() => changeLanguage(i18n.language === 'en' ? 'es' : 'en')}
            className="p-2 rounded-full hover:bg-green-900/30 flex items-center focus-visible:ring-emerald-500"
            aria-label={i18n.language === 'en' ? t('Change to Spanish') : t('Change to English')}
          >
            <IoLanguageOutline className="text-green-400 w-6 h-6" />
            <span className="ml-2 text-green-400">
              {i18n.language === 'en' ? 'ENG' : 'ESP'}
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
};
