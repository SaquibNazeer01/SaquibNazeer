import React from 'react';
import { ArrowRight, Download, Terminal, Cpu, FileText } from 'lucide-react';
import GlitchText from './UI/GlitchText';
import SocialHub from './SocialHub';
import Typewriter from './UI/Typewriter';
import { DEV_NAME, DEV_BIO } from '../constants';

interface HeroProps {
    onNavigate: (view: 'home' | 'about', sectionId?: string) => void;
}

// Try these different approaches for the profile image:
// Option 1: If image is in public folder
//const profileImage = 'assets/images/profile.jpg';

// Option 2: If image is in src/assets folder
import profileImage from '../assets/images/profile.jpg'; // Uncomment this line if Option 1 doesn't work

// Option 3: Dynamic import for Vercel
// const profileImage = process.env.NODE_ENV === 'production' 
//   ? '/assets/images/profile.jpg' 
//   : new URL('../assets/images/profile.jpg', import.meta.url).href;

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden bg-background transition-colors duration-500">
      
      {/* Dynamic Background Spotlights */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/10 blur-[120px] rounded-full pointer-events-none -z-10 mix-blend-screen animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-secondary/10 blur-[120px] rounded-full pointer-events-none -z-10 mix-blend-screen animate-pulse delay-1000" />

      <div className="container mx-auto px-6 z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-20">
          
          <div className="md:w-1/2 space-y-8 text-center md:text-left order-2 md:order-1 relative">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 border border-primary/30 rounded-full bg-surface/50 backdrop-blur-sm animate-in fade-in slide-in-from-left-10 duration-700 shadow-[0_0_15px_rgb(var(--color-primary)/0.2)]">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span className="text-primary text-xs font-mono tracking-widest uppercase">Open To Opportunities And Freelance Projects...</span>
            </div>
            
            <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold leading-tight tracking-tight">
                  <span className="block text-main opacity-90 text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-2 font-light">Hello, I'm</span>
                  <GlitchText text={DEV_NAME} className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-white to-secondary filter drop-shadow-[0_0_15px_rgb(var(--color-primary)/0.3)]" />
                </h1>
                
                <h2 className="text-xl sm:text-2xl md:text-3xl text-muted font-light font-rajdhani flex flex-col md:flex-row gap-3 items-center md:items-start justify-center md:justify-start min-h-[40px]">
                  <Terminal className="w-6 h-6 text-secondary hidden md:block mt-1" />
                  <div className="flex flex-wrap justify-center md:justify-start gap-2">
                    <Typewriter 
                      words={['Full Stack Developer', 'AI Enthusiast', 'Tech Learner', 'Innovator', 'Problem Solver']} 
                      className="text-primary font-bold"
                      typingSpeed={80}
                      deletingSpeed={40}
                    />
                  </div>
                </h2>
            </div>
            
            <p className="text-muted max-w-lg text-base sm:text-lg leading-relaxed mx-auto md:mx-0 border-l-2 border-muted/30 pl-4 bg-gradient-to-r from-surface/50 to-transparent p-2 rounded-r-lg backdrop-blur-sm">
              {DEV_BIO}
            </p>

            {/* Social Hub Integration */}
            <div className="flex justify-center md:justify-start pt-2">
                <SocialHub />
            </div>
            
            <div className="flex flex-col sm:flex-row gap-5 pt-4 justify-center md:justify-start">
              <button 
                onClick={() => onNavigate('home', 'projects')}
                className="group relative px-8 py-4 bg-primary text-white font-bold tracking-wider overflow-hidden rounded-lg shadow-[0_0_20px_rgb(var(--color-primary)/0.4)] transition-all hover:scale-105 hover:shadow-[0_0_30px_rgb(var(--color-primary)/0.6)]"
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 rounded-lg" />
                <div className="relative flex items-center gap-2 justify-center">
                  EXPLORE MY WORK
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </button>
              
              <button 
                onClick={() => onNavigate('about')}
                className="group px-8 py-4 border border-muted/30 hover:border-secondary text-muted hover:text-secondary font-bold tracking-wider rounded-lg transition-all hover:bg-secondary/5"
              >
                <div className="flex items-center gap-2 justify-center">
                  ABOUT ME
                  <FileText className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
                </div>
              </button>
            </div>
          </div>

          <div className="md:w-1/2 flex justify-center relative perspective-1000 order-1 md:order-2">
            {/* Holographic Circle Effect */}
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-[32rem] md:h-[32rem] animate-float">
                
                {/* Complex Rotating Rings */}
                <div className="absolute inset-0 border border-primary/40 rounded-full animate-[spin_15s_linear_infinite]" />
                <div className="absolute -inset-4 border border-dashed border-secondary/30 rounded-full animate-[spin_25s_linear_infinite_reverse]" />
                <div className="absolute -inset-8 border-[0.5px] border-muted/20 rounded-full opacity-50 animate-[pulse_4s_ease-in-out_infinite]" />
                
                {/* Orbiting Elements */}
                <div className="absolute inset-0 animate-[spin_10s_linear_infinite]">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-2 w-2 h-2 bg-primary rounded-full shadow-[0_0_10px_rgb(var(--color-primary))]" />
                </div>
                <div className="absolute inset-0 animate-[spin_15s_linear_infinite_reverse]">
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-6 w-3 h-3 bg-secondary rounded-full shadow-[0_0_10px_rgb(var(--color-secondary))]" />
                </div>

                {/* Image Container */}
                <div className="absolute inset-2 rounded-full overflow-hidden bg-surface border-2 border-primary/50 shadow-[0_0_50px_rgb(var(--color-primary)/0.3)] z-10 group">
                    <img 
                      src={profileImage} 
                      alt="Profile" 
                      className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-all duration-700 group-hover:scale-110 filter grayscale-[20%] group-hover:grayscale-0"
                    />
                    <div className="absolute inset-0 scanline opacity-30 pointer-events-none" />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent mix-blend-overlay" />
                </div>
                
                {/* Holographic Status Card (Only AI Link remains) */}
                <div className="hidden sm:block absolute -left-6 sm:-left-12 bottom-12 sm:bottom-24 bg-surface/80 backdrop-blur-md border border-secondary/40 p-3 sm:p-4 rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.3)] animate-float z-20">
                    <div className="flex items-center gap-3 border-b border-secondary/20 pb-2 mb-2">
                        <div className="relative">
                          <div className="w-3 h-3 bg-secondary rounded-full animate-pulse" />
                          <div className="absolute inset-0 bg-secondary rounded-full animate-ping opacity-50" />
                        </div>
                        <div className="text-[10px] sm:text-xs text-secondary font-orbitron tracking-widest">FREELANCER</div>
                    </div>
                    <div className="flex items-center justify-between gap-4">
                      <div className="text-xs text-muted font-mono">STATUS</div>
                      <div className="text-sm font-bold text-main">ONLINE</div>
                    </div>
                    <div className="w-full bg-muted/20 h-1 mt-2 rounded-full overflow-hidden">
                      <div className="h-full bg-secondary w-[85%] animate-[pulse_2s_infinite]" />
                    </div>
                </div>

                {/* Decorative Tech Particles */}
                <div className="absolute -right-10 top-1/2 flex flex-col gap-2">
                   {[1,2,3].map(i => (
                     <div key={i} className={`w-1.5 h-1.5 rounded-full bg-primary/50 animate-pulse delay-${i*200}`} />
                   ))}
                </div>
            </div>
          </div>

        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60 hover:opacity-100 transition-opacity cursor-pointer">
        <span className="text-[10px] uppercase tracking-[0.3em] text-primary animate-pulse font-orbitron">Scroll to explore</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-primary via-secondary to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;
