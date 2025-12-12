
import React from 'react';
import { DEV_NAME, SOCIAL_LINKS } from '../constants';
import { Heart, Code, Mail, Code2Icon, CodeIcon, CodeSquareIcon } from 'lucide-react';

interface FooterProps {
    onAdminClick?: () => void;
}

const Footer: React.FC<FooterProps> = ({ onAdminClick }) => {
  return (
    <footer className="bg-surface border-t border-muted/10 py-12 relative overflow-hidden">
        {/* Decorative Top Line */}
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-50" />
        
        <div className="container mx-auto px-6">
            <div className="flex flex-col items-center justify-center space-y-8 text-center">
                
                {/* Crafted With Message */}
                <div className="flex flex-col sm:flex-row items-center gap-2 text-lg font-medium text-muted">
                    <span className="flex items-center gap-2">
                        Crafted with 
                        <Heart className="w-5 h-5 text-red-500 fill-red-500 animate-pulse" />
                    </span>
                    <span className="hidden sm:inline">&</span>
                    <span className="flex items-center gap-2">
                         <Code2Icon className="w-5 h-5 text-primary" />
                         by
                    </span>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary font-bold font-orbitron tracking-wide">
                        {DEV_NAME}
                    </span>
                </div>

                {/* Social Links */}
                <div className="flex flex-wrap justify-center gap-6">
                    {SOCIAL_LINKS.map((link) => {
                        const Icon = link.icon;
                        return (
                            <a
                                key={link.name}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative p-3 bg-background border border-muted/20 rounded-full hover:border-primary/50 hover:bg-surface transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_15px_rgb(var(--color-primary)/0.3)]"
                                aria-label={link.name}
                            >
                                <Icon className="w-5 h-5 text-muted group-hover:text-primary transition-colors" />
                                <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-surface text-primary text-[10px] font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-primary/20 pointer-events-none">
                                    {link.name}
                                </span>
                            </a>
                        );
                    })}

                    <a
                        href="mailto:bhatsaakib505@gmail.com"
                        className="group relative p-3 bg-background border border-muted/20 rounded-full hover:border-primary/50 hover:bg-surface transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_15px_rgb(var(--color-primary)/0.3)]"
                        aria-label="Email"
                    >
                        <Mail className="w-5 h-5 text-muted group-hover:text-primary transition-colors" />
                        <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-surface text-primary text-[10px] font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-primary/20 pointer-events-none">
                            Email
                        </span>
                    </a>
                </div>

                {/* Copyright / Bottom Info */}
                <div className="flex flex-col items-center gap-2">
                    <p className="text-muted/40 text-xs font-mono">
                        © {new Date().getFullYear()} {DEV_NAME}. All systems operational.
                    </p>
                    {/* Optional Admin Trigger (Hidden) */}
                    {onAdminClick && (
                         <button 
                            onClick={onAdminClick} 
                            className="w-2 h-2 rounded-full bg-muted/10 hover:bg-primary/50 transition-colors"
                            aria-label="Admin Access"
                         />
                    )}
                </div>

            </div>
        </div>
    </footer>
  );
};

export default Footer;
