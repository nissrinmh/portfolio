import React, { useState, useEffect } from 'react';
import SideNavigation from './components/SideNavigation';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';
import ContactSection from './components/ContactSection';
import ThemeProvider from './contexts/ThemeContext';
import './styles/animations.css';

function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleSectionChange = (sectionId: string) => {
    if (sectionId === activeSection) return;
    
    setIsTransitioning(true);
    
    setTimeout(() => {
      setActiveSection(sectionId);
      setTimeout(() => {
        setIsTransitioning(false);
      }, 100);
    }, 300);
  };

  const renderActiveSection = () => {
    const sectionProps = {
      className: `transition-all duration-500 ${
        isTransitioning 
          ? 'opacity-0 transform translate-y-8 scale-95' 
          : 'opacity-100 transform translate-y-0 scale-100'
      }`
    };

    switch (activeSection) {
      case 'hero':
        return <HeroSection {...sectionProps} />;
      case 'about':
        return <AboutSection {...sectionProps} />;
      case 'projects':
        return <ProjectsSection {...sectionProps} />;
      case 'skills':
        return <SkillsSection {...sectionProps} />;
      case 'contact':
        return <ContactSection {...sectionProps} />;
      default:
        return <HeroSection {...sectionProps} />;
    }
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50 dark:from-gray-900 dark:via-rose-900 dark:to-purple-400 transition-all duration-1000 overflow-hidden">
        <div className="luminous-particles"></div>
        
        <div className="flex h-screen">
          <SideNavigation 
            activeSection={activeSection} 
            onSectionChange={handleSectionChange}
          />
          
          <main className="flex-1 relative z-10 overflow-y-auto">
            <div className="min-h-screen">
              {renderActiveSection()}
            </div>
          </main>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;