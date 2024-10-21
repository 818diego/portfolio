import React from 'react';
import { Link } from 'react-router-dom';
import { Home, User, Briefcase, Mail, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Navbar: React.FC = () => {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-md transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="text-xl font-bold text-gray-800 dark:text-white">My Portfolio</Link>
          <div className="flex items-center space-x-4">
            <NavLink to="/" icon={<Home size={20} />} text="Home" />
            <NavLink to="/about" icon={<User size={20} />} text="About" />
            <NavLink to="/projects" icon={<Briefcase size={20} />} text="Projects" />
            <NavLink to="/contact" icon={<Mail size={20} />} text="Contact" />
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

const NavLink: React.FC<{ to: string; icon: React.ReactNode; text: string }> = ({ to, icon, text }) => (
  <Link to={to} className="flex items-center text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
    {icon}
    <span className="ml-1">{text}</span>
  </Link>
);

export default Navbar;