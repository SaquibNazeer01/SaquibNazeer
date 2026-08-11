
import React from 'react';
import { DEV_NAME, SOCIAL_LINKS } from '../constants';
import { Heart, Code2, Mail, Sparkles, ArrowUp, Hexagon } from 'lucide-react';

interface FooterProps {
  onAdminClick?: () => void;
}

const Footer: React.FC<FooterProps> = ({ onAdminClick }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-surface/80 border-t border-muted/15 py-14 relative overflow-hidden backdrop-blur-xl">
      {/* Decorative Top Glowing Line */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-60" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-32 bg-primary/5 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col items-center justify-center space-y-8 text-center">
          
          {/* Logo & Operational Status */}
          <div className="flex flex-col items-center gap-3">
            <div className="flex items-center gap-2">
              <Hexagon className="w-6 h-6 text-primary" />
              <span className="text-xl font-bold font-display tracking-wider text-main">
                {DEV_NAME}
              </span>
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-[11px] font-mono font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>SYSTEMS FULLY OPERATIONAL</span>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            {SOCIAL_LINKS.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative p-3 bg-background/80 border border-muted/20 rounded-2xl hover:border-primary/60 hover:bg-surface transition-all duration-300 hover:-translate-y-1 hover:shadow-glow-sm flex items-center gap-2"
                  aria-label={link.name}
                >
                  <Icon className="w-4 h-4 text-muted group-hover:text-primary transition-colors" />
                  <span className="text-xs font-mono font-medium text-muted group-hover:text-main transition-colors">
                    {link.name}
                  </span>
                </a>
              );
            })}

            <a
              href="mailto:bhatsaakib505@gmail.com"
              className="group relative p-3 bg-background/80 border border-muted/20 rounded-2xl hover:border-primary/60 hover:bg-surface transition-all duration-300 hover:-translate-y-1 hover:shadow-glow-sm flex items-center gap-2"
              aria-label="Direct Email"
            >
              <Mail className="w-4 h-4 text-muted group-hover:text-primary transition-colors" />
              <span className="text-xs font-mono font-medium text-muted group-hover:text-main transition-colors">
                Email
              </span>
            </a>
          </div>

          {/* Crafted Message */}
          <div className="flex flex-col sm:flex-row items-center gap-2 text-sm text-muted">
            <span className="flex items-center gap-1.5 font-medium">
              Architected & Built with
              <Heart className="w-4 h-4 text-rose-500 fill-rose-500 animate-pulse" />
            </span>
            <span className="hidden sm:inline">&</span>
            <span className="flex items-center gap-1.5">
              <Code2 className="w-4 h-4 text-primary" />
              by
            </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary font-bold font-display tracking-wide">
              {DEV_NAME}
            </span>
          </div>

          {/* Copyright & Scroll To Top */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 w-full pt-6 border-t border-muted/10 text-xs font-mono text-muted/60">
            <p>© {new Date().getFullYear()} {DEV_NAME}. All intellectual property protected.</p>
            
            <div className="flex items-center gap-4">
              <button
                onClick={scrollToTop}
                className="flex items-center gap-1 text-muted hover:text-primary transition-colors font-semibold"
              >
                <span>BACK TO TOP</span>
                <ArrowUp className="w-3.5 h-3.5" />
              </button>

              {/* Secret Admin Trigger */}
              {onAdminClick && (
                <button 
                  onClick={onAdminClick} 
                  className="w-2.5 h-2.5 rounded-full bg-muted/15 hover:bg-primary transition-colors"
                  title="System Override"
                  aria-label="Admin Override"
                />
              )}
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
