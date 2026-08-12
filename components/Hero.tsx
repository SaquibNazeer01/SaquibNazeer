import React from 'react';
import { 
  ArrowRight, Download, Terminal, Cpu, FileText, 
  Sparkles, Code2, Trophy, Youtube, Star, CheckCircle, 
  Layers, ArrowUpRight, Award, Flame, Compass 
} from 'lucide-react';
import GlitchText from './UI/GlitchText';
import SocialHub from './SocialHub';
import Typewriter from './UI/Typewriter';
import { DEV_NAME, DEV_BIO } from '../constants';
import profileImage from '../assets/images/profile.jpg';

interface HeroProps {
  onNavigate: (view: 'home' | 'about', sectionId?: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const achievements = [
    { 
      title: 'TCS CodeVita', 
      value: 'Rank 2017', 
      sub: 'Global Competitive Round',
      tag: 'Global Contest',
      icon: Trophy,
      color: 'text-amber-400',
      bgGlow: 'bg-amber-500/10',
      borderGlow: 'hover:border-amber-500/50',
      badgeBg: 'bg-amber-500/15 text-amber-300 border-amber-500/30'
    },
    { 
      title: 'Innovation Hackathon', 
      value: '2nd Prize', 
      sub: 'Rapid Prototype Build',
      tag: '🥈 Runner-Up',
      icon: Award,
      color: 'text-purple-400',
      bgGlow: 'bg-purple-500/10',
      borderGlow: 'hover:border-purple-500/50',
      badgeBg: 'bg-purple-500/15 text-purple-300 border-purple-500/30'
    },
    { 
      title: 'HackerRank Mastery', 
      value: '5-Star', 
      sub: 'C, Java, Python & SQL',
      tag: 'Problem Solving',
      icon: Star,
      color: 'text-emerald-400',
      bgGlow: 'bg-emerald-500/10',
      borderGlow: 'hover:border-emerald-500/50',
      badgeBg: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30'
    },
    { 
      title: 'YouTube Community', 
      value: '1.22k+', 
      sub: 'Tech Tutorials & AI Demos',
      tag: 'Creator Lead',
      icon: Youtube,
      color: 'text-rose-400',
      bgGlow: 'bg-rose-500/10',
      borderGlow: 'hover:border-rose-500/50',
      badgeBg: 'bg-rose-500/15 text-rose-300 border-rose-500/30'
    },
    { 
      title: 'Deployed Projects', 
      value: '10+ Shipped', 
      sub: 'AI, Vision & Scalable Web',
      tag: 'Production Builds',
      icon: Layers,
      color: 'text-cyan-400',
      bgGlow: 'bg-cyan-500/10',
      borderGlow: 'hover:border-cyan-500/50',
      badgeBg: 'bg-cyan-500/15 text-cyan-300 border-cyan-500/30'
    },
  ];

  const handleScrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center pt-24 sm:pt-28 pb-16 overflow-hidden bg-background transition-colors duration-500">
      
      {/* Dynamic Background Atmospheric Spotlights */}
      <div className="absolute top-1/4 left-1/4 w-[350px] sm:w-[600px] h-[350px] sm:h-[600px] bg-primary/15 blur-[120px] sm:blur-[160px] rounded-full pointer-events-none -z-10 mix-blend-screen animate-pulse" />
      <div className="absolute bottom-1/3 right-1/4 w-[350px] sm:w-[600px] h-[350px] sm:h-[600px] bg-secondary/15 blur-[120px] sm:blur-[160px] rounded-full pointer-events-none -z-10 mix-blend-screen animate-pulse delay-1000" />
      <div className="absolute inset-0 bg-grid-cyber opacity-30 pointer-events-none -z-10" />

      <div className="container mx-auto px-4 sm:px-6 max-w-7xl z-10">
        
        {/* Main Grid: On mobile Avatar is ordered first/prominently, on LG it sits side-by-side */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          
          {/* Avatar Display - Order 1 on mobile, Order 2 on desktop (lg:order-2) */}
          <div className="order-1 lg:order-2 lg:col-span-5 flex justify-center relative my-4 sm:my-6 lg:my-0 px-4 sm:px-0">
            <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-[22rem] lg:h-[22rem] animate-float">
              
              {/* Futuristic Cyber Orbit Rings */}
              <div className="absolute inset-0 border border-primary/40 rounded-full animate-[spin_18s_linear_infinite]" />
              <div className="absolute -inset-2 sm:-inset-4 border border-dashed border-secondary/30 rounded-full animate-[spin_28s_linear_infinite_reverse]" />
              <div className="absolute -inset-4 sm:-inset-6 border-[0.5px] border-primary/20 rounded-full opacity-60 animate-pulse" />
              
              {/* Orbiting Tech Particles */}
              <div className="absolute inset-0 animate-[spin_12s_linear_infinite]">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1.5 sm:-translate-y-2 w-2 sm:w-2.5 h-2 sm:h-2.5 bg-primary rounded-full shadow-glow-sm" />
              </div>
              <div className="absolute inset-0 animate-[spin_16s_linear_infinite_reverse]">
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1.5 sm:translate-y-2.5 w-2 sm:w-2.5 h-2 sm:h-2.5 bg-secondary rounded-full shadow-glow-secondary" />
              </div>

              {/* Main Avatar Photo */}
              <div className="absolute inset-2 sm:inset-3 rounded-full overflow-hidden bg-surface border-2 border-primary/60 shadow-[0_0_30px_rgb(var(--color-primary)/0.35)] sm:shadow-[0_0_50px_rgb(var(--color-primary)/0.35)] z-10 group">
                <img 
                  src={profileImage} 
                  alt={DEV_NAME} 
                  className="w-full h-full object-cover opacity-95 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105 filter grayscale-[10%] group-hover:grayscale-0"
                />
                <div className="absolute inset-0 scanline opacity-25 pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent mix-blend-overlay" />
              </div>
              
              {/* Floating Freelancer & Status Card - Scaled & Positioned safely outside face */}
              <div className="absolute -left-3 sm:-left-6 md:-left-8 lg:-left-10 -bottom-2 sm:bottom-1 md:bottom-3 lg:bottom-6 bg-surface/95 backdrop-blur-xl border border-primary/40 p-2 sm:p-2.5 md:p-3 rounded-xl sm:rounded-2xl shadow-xl z-20 max-w-[155px] sm:max-w-[185px] md:max-w-[210px] pointer-events-none">
                <div className="flex items-center gap-1.5 sm:gap-2 border-b border-muted/15 pb-1 sm:pb-1.5 mb-1 sm:mb-1.5">
                  <div className="relative flex-shrink-0">
                    <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-emerald-400 rounded-full animate-pulse" />
                    <div className="absolute inset-0 bg-emerald-400 rounded-full animate-ping opacity-60" />
                  </div>
                  <div className="text-[8px] sm:text-[9px] md:text-[10px] text-emerald-400 font-mono font-bold tracking-wider uppercase truncate">AVAILABLE NOW</div>
                </div>
                <div className="flex items-center justify-between gap-2 sm:gap-3">
                  <span className="text-[8px] sm:text-[9px] md:text-[10px] text-muted font-mono">SPECIALTY</span>
                  <span className="text-[8px] sm:text-[9px] md:text-[10px] font-bold text-main font-mono whitespace-nowrap">FULL STACK / AI</span>
                </div>
                <div className="w-full bg-muted/20 h-1 sm:h-1.5 mt-1 sm:mt-1.5 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-primary to-secondary w-[92%] animate-pulse" />
                </div>
              </div>

              {/* Floating Role badge - Scaled & Positioned safely outside face */}
              <div className="absolute -right-3 sm:-right-5 md:-right-7 lg:-right-9 -top-1 sm:top-2 md:top-4 lg:top-8 bg-surface/95 backdrop-blur-xl border border-secondary/40 px-2.5 py-1 sm:px-3 sm:py-1.5 md:px-3.5 md:py-2 rounded-xl sm:rounded-2xl shadow-xl z-20 pointer-events-none">
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <Code2 className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 text-secondary flex-shrink-0" />
                  <span className="text-[9px] sm:text-[10px] md:text-[11px] font-mono font-bold text-main whitespace-nowrap">Full Stack Developer</span>
                </div>
              </div>

            </div>
          </div>

          {/* Left Hero Content */}
          <div className="order-2 lg:order-1 lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left">
            
            {/* Status Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface/70 border border-primary/30 backdrop-blur-md shadow-glow-sm animate-in fade-in duration-700">
              <span className="relative flex h-2 w-2 sm:h-2.5 sm:w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 sm:h-2.5 sm:w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-primary text-[10px] sm:text-xs font-mono font-bold tracking-widest uppercase">
                Open to Full-Time Roles & Freelance Projects
              </span>
            </div>
            
            {/* Headline */}
            <div className="space-y-2 sm:space-y-3">
              <span className="block text-muted text-base sm:text-lg md:text-xl font-mono tracking-wide font-medium">
                &lt;Hello World /&gt; I'm
              </span>
              
              <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight leading-none font-display">
                <GlitchText 
                  text={DEV_NAME} 
                  className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-teal-300 to-secondary neon-text filter drop-shadow-[0_0_20px_rgb(var(--color-primary)/0.4)]" 
                />
              </h1>
              
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-1 min-h-[38px] sm:min-h-[44px]">
                <div className="flex items-center gap-2 text-lg sm:text-2xl md:text-3xl font-display font-medium text-main">
                  <Terminal className="w-5 h-5 sm:w-6 sm:h-6 text-secondary flex-shrink-0" />
                  <Typewriter 
                    words={[
                      'Full-Stack Developer', 
                      'AI & Computer Vision Engineer', 
                      'Competitive Programmer',
                      'Tech Content Creator'
                    ]} 
                    className="text-primary font-bold neon-text text-base sm:text-2xl md:text-3xl"
                    typingSpeed={70}
                    deletingSpeed={35}
                  />
                </div>
              </div>
            </div>
            
            {/* Bio */}
            <p className="text-muted max-w-xl text-sm sm:text-base md:text-lg leading-relaxed mx-auto lg:mx-0 border-l-2 border-primary/40 pl-3 sm:pl-4 bg-gradient-to-r from-surface/60 to-transparent p-2.5 sm:p-3 rounded-r-2xl backdrop-blur-sm text-left">
              {DEV_BIO}
            </p>

            {/* Social Hub */}
            <div className="flex justify-center lg:justify-start pt-1">
              <SocialHub />
            </div>
            
            {/* Action Buttons with Clean Animated About Me CTA (No AI Star) */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 justify-center lg:justify-start items-center">
              <button 
                onClick={() => window.open("https://drive.google.com/file/d/1VI8GFt9X1iXj6tFWJChIkYm911kMwSHQ/view?usp=sharing", "_blank")}
                className="w-full sm:w-auto group relative px-6 sm:px-8 py-3.5 sm:py-4 bg-gradient-to-r from-primary to-blue-600 text-white font-display font-bold tracking-wider rounded-xl shadow-glow-md transition-all hover:scale-105 hover:shadow-glow-lg overflow-hidden flex items-center justify-center gap-2 cursor-pointer text-sm sm:text-base"
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 rounded-xl" />
                <Download className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
                <span className="relative z-10">DOWNLOAD RESUME</span>
              </button>
              
              <button 
                onClick={() => handleScrollToSection('projects')}
                className="w-full sm:w-auto group px-6 sm:px-8 py-3.5 sm:py-4 bg-surface/80 border border-primary/30 hover:border-primary text-main hover:text-primary font-display font-bold tracking-wider rounded-xl transition-all hover:bg-primary/10 backdrop-blur-md flex items-center justify-center gap-2 shadow-sm cursor-pointer text-sm sm:text-base"
              >
                <span>EXPLORE WORK</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Clean Animated About Me Button (No AI Star icon) */}
              <button 
                onClick={() => onNavigate('about')}
                className="w-full sm:w-auto relative group px-6 sm:px-7 py-3.5 sm:py-4 rounded-xl font-display font-bold tracking-wider transition-all hover:scale-105 cursor-pointer text-sm sm:text-base overflow-visible"
              >
                {/* Pulsing beacon glow rings behind the button */}
                <span className="absolute -inset-1 rounded-xl bg-gradient-to-r from-purple-500 via-pink-500 to-primary opacity-70 blur-md group-hover:opacity-100 animate-pulse" />
                <span className="absolute -inset-1.5 rounded-xl border border-secondary/60 animate-ping opacity-30 pointer-events-none" />

                {/* Main button frame */}
                <div className="relative bg-surface/90 border border-secondary/50 group-hover:border-secondary text-main group-hover:text-secondary rounded-xl px-5 py-3.5 flex items-center justify-center gap-2.5 backdrop-blur-xl shadow-glass">
                  {/* Floating Pulsing Beacon Dot */}
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-80" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-secondary" />
                  </span>
                  
                  <span>ABOUT ME</span>
                </div>
              </button>
            </div>

          </div>

        </div>

        {/* Colorful & Styled Achievements Showcase Ribbon (Compact & Professional on Mobile) */}
        <div className="mt-10 sm:mt-16 pt-6 sm:pt-10 border-t border-muted/15">
          <div className="flex items-center gap-2 mb-4 sm:mb-6 justify-center lg:justify-start">
            <Award className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary animate-pulse" />
            <span className="text-[10px] sm:text-xs font-mono font-bold uppercase tracking-widest text-primary">
              Distinguished Milestones & Recognition
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2.5 sm:gap-4 md:gap-5">
            {achievements.map((item, i) => {
              const Icon = item.icon;
              return (
                <div 
                  key={i} 
                  className={`relative p-3 sm:p-4 md:p-5 rounded-xl sm:rounded-2xl bg-surface/75 border border-muted/15 ${item.borderGlow} backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-glass group overflow-hidden flex flex-col justify-between`}
                >
                  {/* Atmospheric gradient reflection */}
                  <div className={`absolute top-0 right-0 w-20 h-20 sm:w-24 sm:h-24 ${item.bgGlow} rounded-full blur-xl pointer-events-none group-hover:scale-150 transition-transform duration-500`} />
                  
                  <div className="relative flex flex-col justify-between h-full space-y-2 sm:space-y-3">
                    <div className="flex items-center justify-between gap-1.5">
                      <div className={`p-1.5 sm:p-2.5 rounded-lg sm:rounded-xl ${item.bgGlow} ${item.color} border border-current/20 group-hover:scale-110 transition-transform flex-shrink-0`}>
                        <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5" />
                      </div>
                      <span className={`px-1.5 py-0.5 sm:px-2.5 sm:py-1 rounded-full text-[8px] sm:text-[10px] font-mono font-bold border ${item.badgeBg} truncate max-w-[110px]`}>
                        {item.tag}
                      </span>
                    </div>

                    <div>
                      <div className="text-base sm:text-2xl md:text-3xl font-bold font-display text-main tracking-tight group-hover:text-primary transition-colors">
                        {item.value}
                      </div>
                      <h4 className="text-[10px] sm:text-xs font-mono uppercase tracking-wider text-main font-semibold mt-0.5 sm:mt-1 truncate">
                        {item.title}
                      </h4>
                      <p className="text-[9px] sm:text-[11px] text-muted font-mono mt-0.5 leading-tight sm:leading-relaxed line-clamp-2">
                        {item.sub}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
      
      {/* Scroll Down Indicator */}
      <div 
        onClick={() => handleScrollToSection('experience')}
        className="mt-8 sm:mt-12 flex flex-col items-center gap-2 opacity-60 hover:opacity-100 transition-opacity cursor-pointer mx-auto"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-primary animate-pulse font-mono font-bold">
          Scroll Down
        </span>
        <div className="w-[1px] h-8 sm:h-10 bg-gradient-to-b from-primary via-secondary to-transparent" />
      </div>

    </section>
  );
};

export default Hero;
