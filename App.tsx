
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import FeaturedProjects from './components/FeaturedProjects';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BreakoutGame from './components/BreakoutGame';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [darkMode, setDarkMode] = useState(false);
  const [currentView, setCurrentView] = useState('home'); // 'home' or 'all-projects'

  const toggleDarkMode = () => {
    setDarkMode(prev => {
      const newMode = !prev;
      if (newMode) document.documentElement.classList.add('dark');
      else document.documentElement.classList.remove('dark');
      return newMode;
    });
  };

  useEffect(() => {
    if (currentView === 'all-projects') {
      window.scrollTo(0, 0);
      return;
    }

    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'featured', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && element.offsetTop <= scrollPosition && (element.offsetTop + element.offsetHeight) > scrollPosition) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentView]);

  const navigateToAllProjects = () => {
    setCurrentView('all-projects');
    setActiveSection('all-projects');
  };

  const navigateToHome = () => {
    setCurrentView('home');
    setActiveSection('home');
  };

  return (
    <div className="min-h-screen bg-latte-50 dark:bg-latte-950 text-latte-900 dark:text-latte-100 font-sans selection:bg-latte-400 selection:text-white transition-colors duration-500">
      <Navbar 
        activeSection={activeSection} 
        setActiveSection={setActiveSection} 
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
        currentView={currentView}
        navigateToHome={navigateToHome}
        navigateToAllProjects={navigateToAllProjects}
      />
      
      <main className="flex flex-col">
        {currentView === 'home' ? (
          <>
            <section id="home" className="min-h-screen pt-20">
              <Hero onAllProjectsClick={navigateToAllProjects} />
            </section>

            <section id="about" className="py-20">
              <About />
            </section>

            <section id="experience" className="hidden sm:flex py-20 bg-latte-100/50 dark:bg-latte-900/30">
              <Experience />
            </section>

            <section id="featured" className="py-20">
              <FeaturedProjects onSeeMore={navigateToAllProjects} />
            </section>

            <section id="skills" className="py-20 text-latte-50 relative overflow-hidden transition-colors duration-500">
              <Skills />
            </section>

            <section className="hidden sm:flex py-12 bg-latte-100 dark:bg-latte-900 border-t border-latte-200 dark:border-latte-800">
              <BreakoutGame />
            </section>

            <section id="contact" className="hidden sm:flex py-20">
              <Contact />
            </section>
          </>
        ) : (
          <section id="all-projects" className="py-32 min-h-screen">
            <Projects onBack={navigateToHome} />
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
}

export default App;
