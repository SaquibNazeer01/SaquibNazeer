
import React from 'react';
import { User, GraduationCap, Award, ArrowLeft, Brain, Cpu, Trophy, Star, Sparkles, Youtube } from 'lucide-react';
import { DEV_NAME, ABOUT_BIO, EDUCATION } from '../constants';
import GlitchText from './UI/GlitchText';
import profileImage2 from '../assets/images/profile2.jpg';

interface AboutProps {
  onBack: () => void;
}

const About: React.FC<AboutProps> = ({ onBack }) => {
    const WHAT_I_DO = [
        {
            title: 'Full-Stack Product Development',
            description: 'Design and build responsive, accessible interfaces backed by scalable APIs and clean data models.'
        },
        {
            title: 'App Development',
            description: 'Develop modern, user-friendly applications with a focus on performance, smooth UX, and maintainable architecture.'
        },
        {
            title: 'AI-Powered Features',
            description: 'Integrate modern LLM and ML capabilities responsibly—grounded prompts, safe defaults, and measurable UX impact.'
        },
        {
            title: 'Performance & Reliability',
            description: 'Optimize for real users with thoughtful trade-offs, observability, and iterative improvements based on feedback.'
        }
    ];

    const HOW_I_WORK = [
        {
            title: 'Clear Communication',
            description: 'Align early on goals and constraints, share progress frequently, and document decisions for future maintainers.'
        },
        {
            title: 'Engineering Discipline',
            description: 'Readable code, consistent patterns, and a preference for simple solutions that scale with the project.'
        },
        {
            title: 'Ownership Mindset',
            description: 'From planning to shipping—testing, edge cases, and production readiness are part of the deliverable.'
        }
    ];

    const ACHIEVEMENTS: Array<{ title: string; description: string; href?: string }> = [
        {
            title: 'Hackathon - 2nd Prize',
            description: 'Awarded 2nd Prize for conceptualizing and engineering an innovative end-to-end working prototype under high-intensity hackathon constraints.'
        },
        {
            title: 'TCS CodeVita Season 12',
            description: 'Global Rank 2017 out of tens of thousands of competitive programmers worldwide.'
        },
        {
            title: 'YouTube Channel',
            description: '1.22k+ subscribers in technical tutorials and AI system demonstrations.',
            href: 'https://www.youtube.com/@Bhat_Saakib019'
        },
        {
            title: 'Certifications & Training',
            description: 'Completed industry-recognized learning tracks in AI systems and blockchain fundamentals from IIT Kharagpur and IIIT Hyderabad.'
        },
        {
            title: 'Real-World Projects',
            description: 'Built and shipped 10+ production-grade applications across AI, computer vision, and modern full-stack web architectures.'
        },
        {
            title: 'HackerRank Problem Solving',
            description: '5-Star mastery across C, Java, Python, and SQL with rigorous data structure implementation.'
        }
    ];

    const HACKERRANK_RATINGS: Array<{ name: string; stars: number; accent: 'primary' | 'secondary' | 'green' }> = [
        { name: 'C Language', stars: 5, accent: 'primary' },
        { name: 'Java', stars: 5, accent: 'secondary' },
        { name: 'Python', stars: 4, accent: 'green' },
        { name: 'SQL', stars: 5, accent: 'primary' },
        { name: 'Problem Solving', stars: 5, accent: 'secondary' },
    ];

    const getAccentClass = (accent: 'primary' | 'secondary' | 'green') => {
        if (accent === 'secondary') return 'text-secondary';
        if (accent === 'green') return 'text-emerald-400';
        return 'text-primary';
    };

    return (
        <section className="min-h-screen py-24 sm:py-28 bg-background relative overflow-hidden transition-colors duration-500">
            {/* Ambient Background Lights */}
            <div className="absolute top-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-[140px] pointer-events-none -z-10" />
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-[140px] pointer-events-none -z-10" />
            <div className="absolute inset-0 bg-grid-cyber opacity-30 pointer-events-none -z-10" />

            <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
                
                {/* Back Button */}
                <button 
                    onClick={onBack}
                    className="group inline-flex items-center gap-2 px-4 py-2 mb-8 sm:mb-10 rounded-xl bg-surface/80 border border-muted/20 hover:border-primary/50 text-main transition-all duration-300 backdrop-blur-md cursor-pointer"
                >
                    <ArrowLeft className="w-4 h-4 text-primary group-hover:-translate-x-1 transition-transform" />
                    <span className="text-xs sm:text-sm font-mono font-bold tracking-wider">RETURN TO MISSION CONTROL</span>
                </button>

                <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                    
                    {/* Left Column: Profile Avatar & Fast Facts */}
                    <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-28">
                        <div className="relative group mx-auto max-w-xs sm:max-w-sm lg:max-w-none">
                            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-3xl blur-lg opacity-40 group-hover:opacity-80 transition duration-700" />
                            <div className="relative rounded-3xl overflow-hidden bg-surface border-2 border-primary/40 shadow-2xl">
                                <img 
                                    src={profileImage2} 
                                    alt={DEV_NAME} 
                                    className="w-full h-auto object-cover grayscale-[10%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />
                                <div className="absolute bottom-4 left-4 right-4 text-center">
                                    <h3 className="text-xl sm:text-2xl font-bold font-display text-main">
                                        <GlitchText text={DEV_NAME} />
                                    </h3>
                                    <p className="text-xs sm:text-sm text-primary font-mono font-medium mt-0.5">Full Stack & AI Engineer</p>
                                </div>
                            </div>
                        </div>

                        {/* Quick Stats Grid */}
                        <div className="grid grid-cols-2 gap-3">
                            <div className="bg-surface/70 border border-muted/15 p-3.5 rounded-2xl backdrop-blur-md text-center">
                                <p className="text-xl font-bold text-main font-display">10+</p>
                                <p className="text-[10px] font-mono text-muted uppercase tracking-wider">Projects Shipped</p>
                            </div>
                            <div className="bg-surface/70 border border-muted/15 p-3.5 rounded-2xl backdrop-blur-md text-center">
                                <p className="text-xl font-bold text-main font-display">Rank 2017</p>
                                <p className="text-[10px] font-mono text-muted uppercase tracking-wider">TCS CodeVita</p>
                            </div>
                            <div className="bg-surface/70 border border-muted/15 p-3.5 rounded-2xl backdrop-blur-md text-center">
                                <p className="text-xl font-bold text-main font-display">2nd Prize</p>
                                <p className="text-[10px] font-mono text-muted uppercase tracking-wider">Hackathon Winner</p>
                            </div>
                            <div className="bg-surface/70 border border-muted/15 p-3.5 rounded-2xl backdrop-blur-md text-center">
                                <p className="text-xl font-bold text-main font-display">1.22k+</p>
                                <p className="text-[10px] font-mono text-muted uppercase tracking-wider">YouTube Community</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Bio, Accomplishments & Details */}
                    <div className="lg:col-span-8 space-y-10 sm:space-y-12">
                        
                        {/* Bio / Who Am I */}
                        <div className="space-y-4 sm:space-y-6 animate-in slide-in-from-right-10 duration-700 delay-100">
                            <div className="flex items-center gap-2.5 sm:gap-3 mb-2 sm:mb-4">
                                <Brain className="w-5 h-5 sm:w-6 sm:h-6 text-secondary" />
                                <h2 className="text-xl sm:text-2xl font-bold text-main font-display">Who Am I</h2>
                            </div>
                            <div className="bg-surface/60 border border-muted/15 rounded-2xl sm:rounded-3xl p-4 sm:p-7 md:p-8 backdrop-blur-xl relative shadow-glass">
                                <div className="absolute top-0 left-0 w-3 sm:w-4 h-3 sm:h-4 border-t-2 border-l-2 border-primary rounded-tl-2xl" />
                                <div className="absolute bottom-0 right-0 w-3 sm:w-4 h-3 sm:h-4 border-b-2 border-r-2 border-secondary rounded-br-2xl" />
                                <p className="text-muted text-xs sm:text-base md:text-lg leading-relaxed whitespace-pre-line font-normal">
                                    {ABOUT_BIO}
                                </p>
                            </div>
                        </div>

                        {/* What I Do */}
                        <div className="space-y-4 sm:space-y-6 animate-in slide-in-from-right-10 duration-700 delay-150">
                            <div className="flex items-center gap-2.5 sm:gap-3 mb-2 sm:mb-4">
                                <Award className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                                <h2 className="text-xl sm:text-2xl font-bold text-main font-display">What I Do</h2>
                            </div>
                            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                                {WHAT_I_DO.map((item, i) => (
                                    <div key={i} className="bg-surface/70 border border-muted/15 p-5 rounded-2xl hover:border-primary/50 transition-all duration-300 flex flex-col justify-between">
                                        <h3 className="text-main font-bold text-sm sm:text-base mb-2 font-display">{item.title}</h3>
                                        <p className="text-xs sm:text-sm text-muted leading-relaxed">{item.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* How I Work */}
                        <div className="space-y-4 sm:space-y-6 animate-in slide-in-from-right-10 duration-700 delay-175">
                            <div className="flex items-center gap-2.5 sm:gap-3 mb-2 sm:mb-4">
                                <Cpu className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-400" />
                                <h2 className="text-xl sm:text-2xl font-bold text-main font-display">How I Work</h2>
                            </div>
                            <div className="grid md:grid-cols-3 gap-3 sm:gap-4">
                                {HOW_I_WORK.map((item, i) => (
                                    <div key={i} className="bg-surface/70 border border-muted/15 p-5 rounded-2xl hover:border-emerald-400/40 transition-all duration-300">
                                        <h3 className="text-main font-bold text-sm sm:text-base mb-2 font-display">{item.title}</h3>
                                        <p className="text-xs sm:text-sm text-muted leading-relaxed">{item.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Achievements */}
                        <div className="space-y-4 sm:space-y-6 animate-in slide-in-from-right-10 duration-700 delay-190">
                            <div className="flex items-center gap-2.5 sm:gap-3 mb-2 sm:mb-4">
                                <Trophy className="w-5 h-5 sm:w-6 sm:h-6 text-amber-400" />
                                <h2 className="text-xl sm:text-2xl font-bold text-main font-display">Distinguished Achievements</h2>
                            </div>
                            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                                {ACHIEVEMENTS.map((item, i) => {
                                    const isHackathon = item.title.includes('Hackathon');
                                    const isCodeVita = item.title.includes('CodeVita');
                                    const isYouTube = item.title.includes('YouTube');

                                    if (isYouTube && item.href) {
                                        return (
                                            <a
                                                key={i}
                                                href={item.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                aria-label="Open YouTube channel"
                                                className="bg-surface/80 border border-rose-500/30 p-5 rounded-2xl transition-all duration-300 group relative overflow-hidden hover:border-rose-500/60 hover:shadow-[0_0_30px_rgba(244,63,94,0.18)] hover:-translate-y-1 flex flex-col justify-between"
                                            >
                                                <div className="absolute inset-0 bg-gradient-to-br from-rose-500/15 via-transparent to-primary/10 opacity-70 group-hover:opacity-100 transition-opacity" />
                                                <div className="relative">
                                                    <div className="flex items-start justify-between gap-2 mb-2">
                                                        <h3 className="text-main font-bold text-base font-display">{item.title}</h3>
                                                        <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-rose-500/15 border border-rose-500/30 text-rose-300 text-[10px] font-mono">
                                                            <Youtube className="w-3.5 h-3.5 text-rose-400" />
                                                            <span>1.22k+</span>
                                                        </div>
                                                    </div>
                                                    <p className="text-xs text-muted leading-relaxed">{item.description}</p>
                                                </div>
                                                <div className="mt-4 pt-3 border-t border-muted/10 flex items-center justify-between text-[10px] font-mono text-rose-400">
                                                    <span>Explore Channel</span>
                                                    <ArrowLeft className="w-3.5 h-3.5 rotate-180" />
                                                </div>
                                            </a>
                                        );
                                    }

                                    if (isHackathon) {
                                        return (
                                            <div
                                                key={i}
                                                className="bg-surface/80 border border-purple-500/30 p-5 rounded-2xl transition-all duration-300 group relative overflow-hidden hover:border-purple-500/60 hover:shadow-[0_0_30px_rgba(168,85,247,0.18)] hover:-translate-y-1 flex flex-col justify-between"
                                            >
                                                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/15 via-transparent to-primary/10 opacity-70 group-hover:opacity-100 transition-opacity" />
                                                <div className="relative">
                                                    <div className="flex items-start justify-between gap-2 mb-2">
                                                        <h3 className="text-main font-bold text-base font-display">{item.title}</h3>
                                                        <span className="px-2 py-0.5 rounded-full bg-purple-500/15 border border-purple-500/30 text-purple-300 text-[10px] font-mono font-bold">
                                                            🥈 Runner-Up
                                                        </span>
                                                    </div>
                                                    <p className="text-xs text-muted leading-relaxed">{item.description}</p>
                                                </div>
                                                <div className="mt-4 pt-3 border-t border-muted/10 flex items-center justify-between text-[10px] font-mono text-purple-400">
                                                    <span>Innovation Prototype</span>
                                                    <Star className="w-3.5 h-3.5 fill-current" />
                                                </div>
                                            </div>
                                        );
                                    }

                                    return (
                                        <div
                                            key={i}
                                            className={`p-5 rounded-2xl bg-surface/70 border transition-all duration-300 group relative overflow-hidden hover:-translate-y-1 flex flex-col justify-between ${
                                                isCodeVita 
                                                    ? 'border-amber-500/30 hover:border-amber-500/60 hover:shadow-[0_0_30px_rgba(245,158,11,0.18)]' 
                                                    : 'border-muted/15 hover:border-primary/50'
                                            }`}
                                        >
                                            <div className="relative">
                                                <div className="flex items-start justify-between gap-2 mb-2">
                                                    <h3 className="text-main font-bold text-base font-display">{item.title}</h3>
                                                    {isCodeVita && (
                                                        <span className="px-2 py-0.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 text-[10px] font-mono font-bold">
                                                            Rank #2017
                                                        </span>
                                                    )}
                                                </div>
                                                <p className="text-xs text-muted leading-relaxed">{item.description}</p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* HackerRank */}
                        <div className="space-y-4 sm:space-y-6 animate-in slide-in-from-right-10 duration-700 delay-195">
                            <div className="flex items-center gap-2.5 sm:gap-3 mb-2 sm:mb-4">
                                <Award className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-400" />
                                <h2 className="text-xl sm:text-2xl font-bold text-main font-display">HackerRank Problem Solving</h2>
                            </div>

                            <div className="bg-surface/60 border border-emerald-500/20 rounded-2xl sm:rounded-3xl p-5 sm:p-7 backdrop-blur-xl relative overflow-hidden shadow-glass">
                                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-transparent to-transparent opacity-60" />
                                <div className="relative grid sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
                                    {HACKERRANK_RATINGS.map((item) => (
                                        <div key={item.name} className="bg-background/60 border border-muted/15 p-4 rounded-xl hover:border-emerald-400/40 transition-all duration-300 group">
                                            <div className="flex items-center justify-between gap-2 mb-1.5">
                                                <h4 className="text-xs sm:text-sm font-bold text-main font-display group-hover:text-emerald-400 transition-colors">{item.name}</h4>
                                                <div className="flex items-center gap-0.5">
                                                    {Array.from({ length: item.stars }).map((_, s) => (
                                                        <Star key={s} className="w-3 h-3 text-amber-400 fill-current" />
                                                    ))}
                                                </div>
                                            </div>
                                            <span className="text-[10px] font-mono text-muted">5-Star Certified</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                {/* Education */}
                <div className="space-y-6 animate-in slide-in-from-right-10 duration-700 delay-200">
                    <div className="flex items-center gap-3 mb-4">
                        <GraduationCap className="w-6 h-6 text-primary" />
                        <h2 className="text-2xl font-bold text-main font-display">Education and Training</h2>
                    </div>
                    
                    <div className="space-y-4">
                        {EDUCATION.map((edu, idx) => (
                            <div key={idx} className="group flex gap-4 bg-surface border border-muted/10 p-6 rounded-xl hover:border-primary/50 transition-all duration-300">
                                <div className="flex-shrink-0 mt-1">
                                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center border border-primary/20 group-hover:scale-110 transition-transform">
                                        <Award className="w-5 h-5 text-primary" />
                                    </div>
                                </div>
                                <div>
                                    <div className="flex flex-col md:flex-row md:items-center gap-2 mb-2">
                                        <h3 className="text-lg font-bold text-main group-hover:text-primary transition-colors">{edu.degree}</h3>
                                        <span className="hidden md:block text-muted/50">•</span>
                                        <span className="text-sm text-secondary font-mono">{edu.year}</span>
                                    </div>
                                    <p className="text-sm text-muted font-bold mb-2">{edu.institution}</p>
                                    <p className="text-sm text-muted/80 leading-relaxed">{edu.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Tech Philosophy */}
                <div className="space-y-6 animate-in slide-in-from-right-10 duration-700 delay-300">
                     <div className="flex items-center gap-3 mb-4">
                        <Cpu className="w-6 h-6 text-green-500" />
                        <h2 className="text-2xl font-bold text-main font-display">Core Philosophy</h2>
                    </div>
                    <div className="grid md:grid-cols-3 gap-4">
                        {['Scalability', 'Performance', 'Innovation'].map((item, i) => (
                            <div key={i} className="bg-surface border border-muted/10 p-4 rounded-lg text-center hover:bg-muted/5 transition-colors">
                                <span className="text-main font-bold tracking-widest uppercase">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Opportunities */}
                <div className="space-y-6 animate-in slide-in-from-right-10 duration-700 delay-400">
                    <div className="flex items-center gap-3 mb-4">
                        <User className="w-6 h-6 text-secondary" />
                        <h2 className="text-2xl font-bold text-main font-display">Open to Opportunities</h2>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-surface border border-green-500/20 ring-1 ring-green-500/10 p-6 rounded-xl hover:ring-green-400/30 transition-all duration-300 group relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 via-green-400/5 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
                            <span className="absolute -top-2 -right-2 w-3 h-3 rounded-full bg-green-400/60 blur-sm animate-ping" />
                            <span className="absolute -bottom-2 left-10 w-2.5 h-2.5 rounded-full bg-green-400/40 blur-sm animate-pulse" />
                            <div className="relative">
                                <div className="flex items-center justify-between mb-3">
                                    <span className="text-muted text-xs font-mono tracking-widest uppercase">Availability</span>
                                    <span className="text-green-400 text-xs font-bold flex items-center gap-2">
                                        <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                                        OPEN
                                    </span>
                                </div>
                                <p className="text-sm text-muted/80 leading-relaxed">
                                    Open to full-time roles, internships, and contract opportunities where I can build reliable products, collaborate with strong teams, and grow through real-world impact.
                                </p>
                            </div>
                        </div>

                        <div className="bg-surface border border-green-500/15 ring-1 ring-green-500/5 p-6 rounded-xl hover:ring-green-400/20 transition-all duration-300 group relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-500/5 to-green-400/10 opacity-40 group-hover:opacity-90 transition-opacity duration-500" />
                            <span className="absolute top-6 -left-2 w-2.5 h-2.5 rounded-full bg-green-400/40 blur-sm animate-ping" />
                            <div className="relative">
                                <div className="flex items-center justify-between mb-3">
                                    <span className="text-muted text-xs font-mono tracking-widest uppercase">Freelance</span>
                                    <span className="text-secondary text-xs font-bold">PROJECTS</span>
                                </div>
                                <p className="text-sm text-muted/80 leading-relaxed">
                                    Available for freelance builds and improvements—landing pages, dashboards, API integrations, performance optimization, and UI polish with a production-ready mindset.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
      </div>
    </section>
  );
};

export default About;

