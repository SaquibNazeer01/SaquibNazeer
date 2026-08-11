
import React, { useState, useEffect } from 'react';
import { Menu, X, Hexagon, Sparkles, Send, User } from 'lucide-react';

interface NavbarProps {
  currentView: 'home' | 'about' | 'thankyou';
  onNavigate: (view: 'home' | 'about' | 'thankyou', sectionId?: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentView, onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // Section spy
      if (currentView === 'home') {
        const sections = ['home', 'experience', 'skills', 'projects', 'contact'];
        const scrollPosition = window.scrollY + 200;

        for (const section of sections) {
          const el = document.getElementById(section);
          if (el) {
            const top = el.offsetTop;
            const height = el.offsetHeight;
            if (scrollPosition >= top && scrollPosition < top + height) {
              setActiveSection(section);
              break;
            }
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentView]);

  const navLinks = [
    { name: 'Home', view: 'home', section: 'home' },
    { name: 'About', view: 'about', section: undefined },
    { name: 'Experience', view: 'home', section: 'experience' },
    { name: 'Skills Matrix', view: 'home', section: 'skills' },
    { name: 'Projects', view: 'home', section: 'projects' },
    { name: 'Contact', view: 'home', section: 'contact' },
  ];

  const handleLinkClick = (view: 'home' | 'about' | 'thankyou', section?: string) => {
    onNavigate(view, section);
    if (section) setActiveSection(section);
    setIsOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 py-4 transition-all duration-300">
      <nav 
        className={`w-full max-w-7xl rounded-2xl transition-all duration-500 border ${
          scrolled || isOpen
            ? 'bg-surface/80 backdrop-blur-xl border-primary/25 shadow-glass py-3 px-5 md:px-6'
            : 'bg-surface/40 backdrop-blur-md border-muted/15 py-3.5 px-5 md:px-6'
        }`}
      >
        <div className="flex justify-between items-center">
          
          {/* Logo */}
          <button 
            onClick={() => handleLinkClick('home', 'home')} 
            className="flex items-center gap-2.5 group cursor-pointer"
            aria-label="Home"
          >
            <div className="relative flex items-center justify-center">
              <Hexagon className="w-8 h-8 text-primary group-hover:rotate-180 transition-transform duration-700 filter drop-shadow-[0_0_8px_rgb(var(--color-primary)/0.5)]" />
              <span className="absolute text-[8px] font-mono font-black text-primary tracking-tighter">SKB</span>
            </div>
            <span className="text-lg md:text-xl font-bold font-display tracking-wider text-main group-hover:text-primary transition-colors">
              SAQUIB<span className="text-primary">.DEV</span>
            </span>
          </button>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-1 bg-background/60 p-1.5 rounded-xl border border-muted/15">
            {navLinks.map((link) => {
              const isCurrentAbout = currentView === 'about' && link.view === 'about';
              const isCurrentHomeSection = currentView === 'home' && link.view === 'home' && activeSection === link.section;
              const isActive = isCurrentAbout || isCurrentHomeSection;

              return (
                <button 
                  key={link.name} 
                  onClick={() => handleLinkClick(link.view as any, link.section)}
                  className={`px-4 py-2 rounded-lg text-xs font-mono font-semibold tracking-wider uppercase transition-all relative ${
                    isActive 
                      ? 'bg-primary/15 text-primary border border-primary/30 shadow-glow-sm' 
                      : 'text-muted hover:text-main hover:bg-surface/50 border border-transparent'
                  }`}
                >
                  {link.name}
                </button>
              );
            })}
          </div>

          {/* Right Action CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => handleLinkClick('home', 'contact')}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 text-white text-xs font-mono font-bold tracking-wider uppercase shadow-glow-sm hover:scale-105 transition-all"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Let's Connect</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-2 rounded-xl bg-surface border border-muted/20 text-muted hover:text-primary transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

        </div>

        {/* Mobile Dropdown Menu */}
        <div className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-96 opacity-100 mt-4 pt-4 border-t border-muted/15' : 'max-h-0 opacity-0'
        }`}>
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <button 
                key={link.name} 
                onClick={() => handleLinkClick(link.view as any, link.section)}
                className="text-left px-4 py-2.5 rounded-xl text-muted hover:text-primary hover:bg-primary/10 font-mono font-medium text-xs tracking-wider uppercase transition-colors"
              >
                {link.name}
              </button>
            ))}

            <button
              onClick={() => handleLinkClick('home', 'contact')}
              className="w-full flex items-center justify-center gap-2 py-3 mt-2 rounded-xl bg-primary text-white font-mono text-xs font-bold uppercase shadow-glow-sm"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Get In Touch</span>
            </button>
          </div>
        </div>

      </nav>
    </header>
  );
};

export default Navbar;
