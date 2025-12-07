import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useStore } from '../context/StoreContext';
import { TRANSLATIONS } from '../constants';
import { Menu, X, Sun, Moon, Globe, Home, Briefcase, Users, Phone, FileText, LayoutGrid, Lock } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const { language, setLanguage, darkMode, toggleDarkMode, isAdminLoggedIn } = useStore();
  const t = TRANSLATIONS[language].nav;
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const links = [
    { to: "/", label: t.home, icon: Home },
    { to: "/services", label: t.services, icon: LayoutGrid },
    { to: "/portfolio", label: t.portfolio, icon: Briefcase },
    { to: "/team", label: t.team, icon: Users },
    { to: "/about", label: t.about, icon: FileText },
    { to: "/contact", label: t.contact, icon: Phone },
    { to: "/quote", label: t.quote, icon: FileText, highlight: true },
  ];

  if (isAdminLoggedIn) {
    links.push({ to: "/admin", label: t.admin, icon: Lock });
  }

  return (
    <nav className="sticky top-0 z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-sm border-b border-gray-200 dark:border-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="bg-primary-600 p-2 rounded-lg group-hover:bg-primary-500 transition-colors">
              <Globe className="text-white w-6 h-6" />
            </div>
            <div className="flex flex-col">
               <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-secondary-500">
                Africa Infotech
              </span>
              <span className="text-xs font-semibold text-gray-500 dark:text-gray-400 tracking-widest uppercase">
                Innovation
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-6">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`flex items-center space-x-1 text-sm font-medium transition-colors duration-200 
                  ${link.highlight 
                    ? 'px-4 py-2 bg-primary-600 text-white rounded-full hover:bg-primary-700 shadow-md hover:shadow-lg transform hover:-translate-y-0.5' 
                    : location.pathname === link.to ? 'text-primary-600 dark:text-primary-400' : 'text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400'
                  }`}
              >
                {!link.highlight && <link.icon className="w-4 h-4" />}
                <span>{link.label}</span>
              </Link>
            ))}

            {/* Controls */}
            <div className="flex items-center space-x-3 border-l pl-4 border-gray-200 dark:border-gray-700">
              <button
                onClick={() => setLanguage(language === 'fr' ? 'en' : 'fr')}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 transition-colors relative"
                title="Change Language"
              >
                <div className="flex items-center space-x-1 font-bold text-xs">
                    {language.toUpperCase()}
                </div>
              </button>
              
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 transition-colors"
                title="Toggle Theme"
              >
                {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
             <button
                onClick={() => setLanguage(language === 'fr' ? 'en' : 'fr')}
                className="text-xs font-bold text-gray-700 dark:text-gray-300"
              >
                {language.toUpperCase()}
             </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 dark:text-gray-300 hover:text-primary-600 focus:outline-none"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 overflow-hidden"
          >
            <div className="px-4 py-4 space-y-3">
              {links.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center space-x-3 block px-3 py-2 rounded-md text-base font-medium 
                    ${link.highlight
                      ? 'bg-primary-600 text-white' 
                      : 'text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800'
                    }`}
                >
                  <link.icon className="w-5 h-5" />
                  <span>{link.label}</span>
                </Link>
              ))}
              <div className="flex items-center justify-between px-3 pt-4 border-t border-gray-200 dark:border-gray-800">
                <span className="text-gray-600 dark:text-gray-400 text-sm">Theme</span>
                <button
                  onClick={toggleDarkMode}
                  className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
                >
                  {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;