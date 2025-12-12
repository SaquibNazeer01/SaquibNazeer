
import React, { useState } from 'react';
import Particles from './components/UI/Particles';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AIChat from './components/AIChat';
import ThemeController from './components/UI/ThemeController';
import About from './components/About';
import Admin from './components/Admin';
import ThankYou from './components/ThankYou';
import { DataProvider } from './contexts/DataContext';

type View = 'home' | 'about' | 'admin' | 'thankyou';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>('home');

  const handleNavigate = (view: View, sectionId?: string) => {
    setCurrentView(view);
    
    // Handle scrolling for Home sections
    if (view === 'home' && sectionId) {
       // Timeout ensures the home component is rendered before scrolling
       setTimeout(() => {
         const element = document.getElementById(sectionId);
         if (element) {
           element.scrollIntoView({ behavior: 'smooth' });
         }
       }, 100);
    } else {
        // Scroll to top for new pages
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <DataProvider>
      <div className="min-h-screen relative text-main bg-background selection:bg-primary/30 selection:text-primary transition-colors duration-500">
        <Particles />
        <ThemeController />
        
        {currentView === 'admin' ? (
          <Admin onExit={() => handleNavigate('home')} />
        ) : (
          <>
            <Navbar currentView={currentView as 'home' | 'about' | 'thankyou'} onNavigate={(v, s) => handleNavigate(v, s)} />
            <main>
              {currentView === 'home' ? (
                  <>
                      <Hero onNavigate={(v, s) => handleNavigate(v, s)} />
                      <Experience />
                      <Skills />
                      <Projects />
                      <Contact onSuccess={() => handleNavigate('thankyou')} />
                  </>
              ) : currentView === 'about' ? (
                  <About onBack={() => handleNavigate('home')} />
              ) : (
                  <ThankYou onBack={() => handleNavigate('home')} />
              )}
            </main>
            <Footer onAdminClick={() => handleNavigate('admin')} />
            <AIChat />
          </>
        )}
      </div>
    </DataProvider>
  );
};

export default App;
