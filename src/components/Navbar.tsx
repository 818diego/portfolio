import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, User, Briefcase, Mail, Sun, Moon, Menu, X } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const logoDark = new URL('/public/supreSVG.svg', import.meta.url).href;
const logoLight = new URL('/public/supreSVG-light.svg', import.meta.url).href;

const Navbar: React.FC = () => {
    const { darkMode, toggleDarkMode } = useTheme();
    const [isMenuOpen, setMenuOpen] = React.useState(false);
    const location = useLocation();

    const isActive = (path: string) => location.pathname === path;

    return (
        <nav className="bg-transparent" role="navigation">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center py-4">
                    <Link
                        to="/"
                        className="text-xl font-bold text-gray-800 dark:text-white">
                        <img
                            src={darkMode ? logoDark : logoLight}
                            alt="Logo"
                            width={40}
                            height={40}
                            className="logo"
                        />
                    </Link>
                    <div className="lg:hidden">
                        <button
                            className="p-2 text-gray-800 dark:text-white"
                            onClick={() => setMenuOpen(!isMenuOpen)}
                            aria-label="Toggle menu">
                            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
                        </button>
                    </div>
                    <div className="hidden lg:flex items-center space-x-8">
                        <NavLink
                            to="/"
                            icon={<Home size={20} />}
                            text="Home"
                            isActive={isActive}
                        />
                        <NavLink
                            to="/projects"
                            icon={<Briefcase size={20} />}
                            text="Projects"
                            isActive={isActive}
                        />
                        <NavLink
                            to="/contact"
                            icon={<Mail size={20} />}
                            text="Contact"
                            isActive={isActive}
                        />
                        <NavLink
                            to="/about"
                            icon={<User size={20} />}
                            text="About"
                            isActive={isActive}
                        />
                        <button
                            onClick={toggleDarkMode}
                            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white transition-all duration-500 ease-in-out"
                            aria-label="Toggle dark mode"
                            aria-pressed={darkMode}>
                            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
                        </button>
                    </div>
                </div>
                {isMenuOpen && (
                    <div className="flex flex-col items-center space-y-4 lg:hidden">
                        <NavLink
                            to="/"
                            icon={<Home size={20} />}
                            text="Home"
                            isActive={isActive}
                        />
                        <NavLink
                            to="/about"
                            icon={<User size={20} />}
                            text="About"
                            isActive={isActive}
                        />
                        <NavLink
                            to="/projects"
                            icon={<Briefcase size={20} />}
                            text="Projects"
                            isActive={isActive}
                        />
                        <NavLink
                            to="/contact"
                            icon={<Mail size={20} />}
                            text="Contact"
                            isActive={isActive}
                        />
                    </div>
                )}
            </div>
        </nav>
    );
};

const NavLink: React.FC<{
    to: string;
    icon: React.ReactNode;
    text: string;
    isActive: (path: string) => boolean;
}> = React.memo(({ to, icon, text, isActive }) => (
    <Link
        to={to}
        className={`flex items-center transition-colors duration-500 ease-in-out ${
            isActive(to)
                ? "text-blue-600 dark:text-blue-400"
                : "text-gray-600 dark:text-gray-300"
        } hover:text-gray-900 dark:hover:text-white`}
        aria-current={isActive(to) ? "page" : undefined}>
        {icon}
        <span className="ml-1">{text}</span>
    </Link>
));

export default Navbar;