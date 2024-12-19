import React, { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';

interface HeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export const Header: React.FC<HeaderProps> = ({ darkMode, toggleDarkMode }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
        <button
          onClick={toggleDarkMode}
          className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-green-900/30 transition-all duration-300 theme-switch"
          aria-label="Toggle theme"
        >
          {darkMode ? (
            <Sun className="text-green-400 w-5 h-5" />
          ) : (
            <Moon className="text-gray-800 w-5 h-5" />
          )}
        </button>
      </div>
    </nav>
  );
};