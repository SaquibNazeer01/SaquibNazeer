import React from 'react';
import { SOCIAL_LINKS } from '../constants';

interface SocialHubProps {
  className?: string;
}

const SocialHub: React.FC<SocialHubProps> = ({ className = "" }) => {
  return (
    <div className={`flex flex-wrap gap-4 ${className}`}>
      {SOCIAL_LINKS.map((link) => {
        const Icon = link.icon;
        return (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative p-3 bg-surface border border-muted/20 rounded-lg overflow-hidden hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_5px_15px_rgb(var(--color-primary)/0.2)]"
            aria-label={link.name}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <Icon className="w-5 h-5 text-muted group-hover:text-primary transition-colors relative z-10" />
            
            {/* Tooltip-like label */}
            <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-[10px] font-mono text-primary bg-surface px-2 py-1 rounded opacity-0 group-hover:opacity-100 group-hover:bottom-full group-hover:mb-2 transition-all duration-300 whitespace-nowrap border border-primary/30 pointer-events-none z-20">
              {link.name}
            </span>
          </a>
        );
      })}
    </div>
  );
};

export default SocialHub;
