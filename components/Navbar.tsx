
import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, ArrowLeft } from 'lucide-react';

const Navbar = ({ activeSection, setActiveSection, darkMode, toggleDarkMode, currentView, navigateToHome, navigateToAllProjects }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Accueil', href: '#home', view: 'home' },
    { name: 'À propos', href: '#about', view: 'home' },
    { name: 'Parcours', href: '#experience', view: 'home' },
    { name: 'Tous mes Projets', href: '#all-projects', view: 'all-projects' },
    { name: 'Compétences', href: '#skills', view: 'home' },
    { name: 'Contact', href: '#contact', view: 'home' },
  ];

  const handleNavClick = (link) => {
    setIsMenuOpen(false);
    if (link.view === 'all-projects') {
      navigateToAllProjects();
    } else {
      if (currentView !== 'home') {
        navigateToHome();
        // Wait for render then scroll
        setTimeout(() => {
          const element = document.querySelector(link.href);
          if (element) element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        setActiveSection(link.href.substring(1));
        const element = document.querySelector(link.href);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled || isMenuOpen
          ? 'bg-latte-50/90 dark:bg-latte-950/90 backdrop-blur-md shadow-sm border-b border-latte-200 dark:border-latte-800'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center h-20 relative">
          
          {/* Back button when in All Projects view */}
          {currentView === 'all-projects' && (
            <button 
              onClick={navigateToHome}
              className="absolute left-0 flex items-center gap-2 text-latte-600 dark:text-latte-300 font-bold hover:text-latte-400 transition-colors"
            >
              <ArrowLeft size={20} /> <span className="hidden sm:inline">Retour</span>
            </button>
          )}

          {/* Desktop Menu - Centered */}
          <div className="hidden md:flex items-center space-x-4">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link)}
                className={`px-4 py-2 rounded-full text-sm font-bold transition-all duration-300 ${
                  (activeSection === link.href.substring(1) && currentView === link.view)
                    ? 'text-white bg-latte-500 dark:bg-latte-400 shadow-md'
                    : 'text-latte-700 dark:text-latte-300 hover:text-latte-900 dark:hover:text-latte-100 hover:bg-latte-200 dark:hover:bg-latte-800'
                }`}
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* Right Actions: Dark Mode & Mobile Menu */}
          <div className="absolute right-0 flex items-center gap-4">
            <button 
              onClick={toggleDarkMode}
              className="p-2.5 rounded-full bg-latte-100 dark:bg-latte-800 text-latte-600 dark:text-latte-200 hover:bg-latte-200 dark:hover:bg-latte-700 transition-colors shadow-sm"
              aria-label="Toggle Dark Mode"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-latte-800 dark:text-latte-200 hover:text-latte-900 focus:outline-none"
              >
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-latte-50 dark:bg-latte-900 border-t border-latte-200 dark:border-latte-800 shadow-xl max-h-[80vh] overflow-y-auto">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link)}
                className={`block w-full text-center px-3 py-4 rounded-xl text-base font-bold transition-all ${
                  (activeSection === link.href.substring(1) && currentView === link.view)
                    ? 'bg-latte-400 text-white'
                    : 'text-latte-800 dark:text-latte-200 hover:bg-latte-100 dark:hover:bg-latte-800'
                }`}
              >
                {link.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
