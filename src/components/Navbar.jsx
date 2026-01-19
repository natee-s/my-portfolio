import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { useDarkMode } from '../hooks/useDarkMode';
import { navigationLinks } from '../data/portfolio';

const Navbar = () => {
  const [theme, setTheme] = useDarkMode();
  const [isOpen, setIsOpen] = useState(false); // สำหรับ Mobile Menu

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <nav className="fixed w-full top-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo - ดึงชื่อมาจากที่อื่นหรือพิมพ์สดก็ได้ */}
          <div className="flex-shrink-0">
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              PORTFOLIO
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors"
              >
                {link.name}
              </a>
            ))}
            
            {/* Toggle Dark Mode Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleTheme}
              className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-yellow-400 transition-colors"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </motion.button>
          </div>

          {/* Mobile Button (Hamburger) */}
          <div className="md:hidden flex items-center gap-4">
             <button
                onClick={toggleTheme}
                className="p-2 text-slate-600 dark:text-yellow-400"
              >
                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 dark:text-slate-300"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Content */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navigationLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-md"
              >
                {link.name}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;