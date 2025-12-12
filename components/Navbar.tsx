
import React, { useState, useEffect } from 'react';
import { Menu, X, Hexagon } from 'lucide-react';

interface NavbarProps {
  currentView: 'home' | 'about' | 'thankyou';
  onNavigate: (view: 'home' | 'about' | 'thankyou', sectionId?: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentView, onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', view: 'home', section: 'home' },
    { name: 'About', view: 'about', section: undefined },
    { name: 'Experience', view: 'home', section: 'experience' },
    { name: 'Skills', view: 'home', section: 'skills' },
    { name: 'Projects', view: 'home', section: 'projects' },
    { name: 'Contact', view: 'home', section: 'contact' },
  ];

  const handleLinkClick = (view: 'home' | 'about' | 'thankyou', section?: string) => {
    onNavigate(view, section);
    setIsOpen(false);
  };

  return (
    <nav 
        className={`fixed top-0 w-full z-40 transition-all duration-300 border-b ${
            scrolled || isOpen 
                ? 'bg-background/80 backdrop-blur-md border-muted/10 py-4' 
                : 'bg-transparent border-transparent py-6'
        }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <button onClick={() => onNavigate('home', 'home')} className="flex items-center gap-2 group">
            <Hexagon className="w-8 h-8 text-primary group-hover:rotate-180 transition-transform duration-700" />
            <span className="text-xl font-bold font-orbitron tracking-widest text-main">
                SKB<span className="text-primary">.Dev</span>
            </span>
        </button>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
                <button 
                    key={link.name} 
                    onClick={() => handleLinkClick(link.view as any, link.section)}
                    className={`text-sm font-medium uppercase tracking-wider transition-colors relative group ${
                        currentView === link.view && (!link.section || link.section === 'home') && link.view !== 'home' 
                        ? 'text-primary' 
                        : 'text-muted hover:text-primary'
                    }`}
                >
                    {link.name}
                    <span className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 ${
                         currentView === link.view && (!link.section || (link.section === 'home' && currentView === 'home')) && link.view === 'about'
                         ? 'w-full' 
                         : 'w-0 group-hover:w-full'
                    }`} />
                </button>
            ))}
        </div>

        {/* Mobile Toggle */}
        <button 
            className="md:hidden text-muted hover:text-main"
            onClick={() => setIsOpen(!isOpen)}
        >
            {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-surface border-b border-muted/10 transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="flex flex-col p-6 space-y-4">
             {navLinks.map((link) => (
                <button 
                    key={link.name} 
                    onClick={() => handleLinkClick(link.view as any, link.section)}
                    className="text-left text-muted hover:text-primary font-medium tracking-wider uppercase"
                >
                    {link.name}
                </button>
            ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
