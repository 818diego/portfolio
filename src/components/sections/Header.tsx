import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { IoLanguageOutline } from 'react-icons/io5';

interface NavItem {
  key: string;
  href: string;
  id: string;
}

const NAV_ITEMS: NavItem[] = [
  { key: 'Home', href: '#home', id: 'home' },
  { key: 'Experience', href: '#experience', id: 'experience' },
  { key: 'Projects', href: '#projects', id: 'projects' },
  { key: 'Skills', href: '#skills', id: 'skills' },
  { key: 'Contact', href: '#contact', id: 'contact' }
];

export const Header: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = NAV_ITEMS.map((item) => item.id);
      const probeY = 120;
      const atBottom =
        window.scrollY + window.innerHeight >=
        document.documentElement.scrollHeight - 40;

      if (atBottom) {
        setActiveSection(sections[sections.length - 1]);
        return;
      }

      let current = sections[0];
      for (const id of sections) {
        const el = document.getElementById(id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top - probeY <= 0) {
          current = id;
        }
      }
      setActiveSection(current);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <nav
      className={`fixed w-full z-50 ${isScrolled ? 'header-scroll' : 'bg-transparent'}`}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center relative">
        <h1 className="text-2xl font-bold text-green-400">
          <a href="#home" aria-label="Home">
            <img
              src="supreSVG.svg"
              alt="Logo"
              className="w-10 h-10 mr-2"
            />
          </a>
        </h1>
        <ul className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center gap-[34px]">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <li key={item.key}>
                <a
                  href={item.href}
                  className={`text-sm font-medium tracking-wide relative pb-1 transition-colors ${
                    isActive
                      ? 'text-green-400'
                      : 'text-gray-300 hover:text-green-400'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {t(item.key)}
                  <span
                    className={`absolute left-0 -bottom-0.5 h-0.5 bg-green-400 transition-all duration-300 ${
                      isActive ? 'w-full' : 'w-0'
                    }`}
                  />
                </a>
              </li>
            );
          })}
        </ul>
        <button
          onClick={() => changeLanguage(i18n.language === 'en' ? 'es' : 'en')}
          className="p-2 rounded-full hover:bg-green-900/30 flex items-center cursor-pointer focus-visible:ring-emerald-500"
          aria-label={i18n.language === 'en' ? t('Change to Spanish') : t('Change to English')}
        >
          <IoLanguageOutline className="text-green-400 w-6 h-6" />
          <span className="ml-2 text-green-400 text-sm font-medium">
            {i18n.language === 'en' ? 'ENG' : 'ESP'}
          </span>
        </button>
      </div>
    </nav>
  );
};