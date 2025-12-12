
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
            title: 'Certifications & Training',
            description: 'Completed industry-recognized learning tracks in AI systems and blockchain fundamentals.'
        },
        {
            title: 'TCS CodeVita Season 12',
            description: 'Global Rank 2017'
        },
        {
            title: 'YouTube Channel',
            description: '1.22k+ subscribers',
            href: 'https://www.youtube.com/@Bhat_Saakib019'
        },
        {
            title: 'Real-World Projects',
            description: 'Built and shipped multiple end-to-end applications across AI, web, and software domains.'
        },
        {
            title: 'Problem Solving',
            description: 'Consistent practice of data structures, algorithms, and clean coding patterns.'
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
        if (accent === 'green') return 'text-green-400';
        return 'text-primary';
    };

  return (
    <section className="min-h-screen pt-24 pb-12 bg-background relative overflow-hidden animate-in fade-in slide-in-from-bottom-10 duration-700">
      
      {/* Background Decor */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="flex items-center gap-4 mb-12">
            <button 
                onClick={onBack}
                aria-label="Go back"
                className="p-3 rounded-full bg-surface border border-muted/20 hover:border-primary text-muted hover:text-primary transition-all group"
            >
                <ArrowLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
            </button>
            <div>
                <div className="flex items-center gap-2">
                    <User className="w-4 h-4 text-primary animate-pulse" />
                    <span className="text-xs font-mono text-primary tracking-widest uppercase">Identity Verification Complete</span>
                </div>
                <h1 className="text-4xl font-bold text-main font-orbitron">
                    About <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Me</span>
                </h1>
            </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-12">
            
            {/* Left Column: Profile Card */}
            <div className="lg:col-span-4 space-y-8">
                <div className="bg-surface border border-muted/20 rounded-2xl p-6 relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Image */}
                    <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-6 border-2 border-primary/20 shadow-[0_0_30px_rgb(var(--color-primary)/0.2)]">
                        <img 
                            src={profileImage2}
                            alt={DEV_NAME} 
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />
                        
                        <div className="absolute bottom-4 left-4 right-4">
                            <GlitchText text={DEV_NAME} className="text-2xl font-bold text-white mb-1 block" />
                            <p className="text-primary text-sm font-mono">Full-Stack Developer</p>
                        </div>
                    </div>

                    {/* Quick Stats */}
                    <div className="space-y-4">
                        <div className="flex justify-between items-center py-2 border-b border-muted/10">
                            <span className="text-muted text-sm font-mono">Status</span>
                            <span className="text-green-400 text-sm font-bold flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                                ONLINE
                            </span>
                        </div>
                        <div className="flex justify-between items-center py-2 border-b border-muted/10">
                            <span className="text-muted text-sm font-mono">Location</span>
                            <span className="text-main text-sm">J&K, INDIA</span>
                        </div>
                        <div className="flex justify-between items-center py-2 border-b border-muted/10">
                            <span className="text-muted text-sm font-mono">Occupation</span>
                            <span className="text-main text-sm">FREELANCER</span>
                        </div>
                        <div className="flex justify-between items-center py-2">
                             <span className="text-muted text-sm font-mono">Specialty</span>
                            <span className="text-secondary text-sm">Full Stack / AI</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Column: Bio & Education */}
            <div className="lg:col-span-8 space-y-12">
                
                {/* Bio */}
                <div className="space-y-6 animate-in slide-in-from-right-10 duration-700 delay-100">
                    <div className="flex items-center gap-3 mb-4">
                        <Brain className="w-6 h-6 text-secondary" />
                        <h2 className="text-2xl font-bold text-main font-orbitron">Who Am I</h2>
                    </div>
                    <div className="bg-surface/50 border border-muted/10 rounded-2xl p-8 backdrop-blur-sm relative">
                        <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-primary" />
                        <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-secondary" />
                        <p className="text-muted text-lg leading-relaxed whitespace-pre-line">
                            {ABOUT_BIO}
                        </p>
                    </div>
                </div>

                {/* What I Do */}
                <div className="space-y-6 animate-in slide-in-from-right-10 duration-700 delay-150">
                    <div className="flex items-center gap-3 mb-4">
                        <Award className="w-6 h-6 text-primary" />
                        <h2 className="text-2xl font-bold text-main font-orbitron">What I Do</h2>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {WHAT_I_DO.map((item, i) => (
                            <div key={i} className="bg-surface border border-muted/10 p-6 rounded-xl hover:border-primary/50 transition-all duration-300">
                                <h3 className="text-main font-bold mb-2">{item.title}</h3>
                                <p className="text-sm text-muted/80 leading-relaxed">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* How I Work */}
                <div className="space-y-6 animate-in slide-in-from-right-10 duration-700 delay-175">
                    <div className="flex items-center gap-3 mb-4">
                        <Cpu className="w-6 h-6 text-green-500" />
                        <h2 className="text-2xl font-bold text-main font-orbitron">How I Work</h2>
                    </div>
                    <div className="grid md:grid-cols-3 gap-4">
                        {HOW_I_WORK.map((item, i) => (
                            <div key={i} className="bg-surface border border-muted/10 p-6 rounded-xl hover:bg-muted/5 transition-colors">
                                <h3 className="text-main font-bold mb-2">{item.title}</h3>
                                <p className="text-sm text-muted/80 leading-relaxed">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Achievements */}
                <div className="space-y-6 animate-in slide-in-from-right-10 duration-700 delay-190">
                    <div className="flex items-center gap-3 mb-4">
                        <Trophy className="w-6 h-6 text-primary" />
                        <h2 className="text-2xl font-bold text-main font-orbitron">Achievements</h2>
                    </div>
                    <div className="grid md:grid-cols-3 gap-4">
                        {ACHIEVEMENTS.map((item, i) => {
                            const isCodeVita = item.title === 'TCS CodeVita Season 12';
                            const isYouTube = item.title === 'YouTube Channel';

                            if (isYouTube && item.href) {
                                return (
                                    <a
                                        key={i}
                                        href={item.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="Open YouTube channel"
                                        className="bg-surface border border-secondary/30 ring-1 ring-secondary/10 p-6 rounded-xl transition-all duration-300 group relative overflow-hidden hover:ring-secondary/25 hover:border-secondary/45 hover:shadow-[0_0_30px_rgb(var(--color-primary)/0.15)] hover:-translate-y-0.5"
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-br from-secondary/15 via-transparent to-primary/10 opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
                                        <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-secondary/60 to-transparent opacity-80 animate-pulse" />

                                        {/* Subscriber spark dots */}
                                        <span className="absolute -top-2 -right-2 w-3 h-3 rounded-full bg-secondary/60 blur-sm animate-ping" />
                                        <span className="absolute bottom-3 left-10 w-2.5 h-2.5 rounded-full bg-secondary/45 blur-sm animate-pulse [animation-delay:450ms]" />

                                        <div className="relative">
                                            <div className="flex items-start justify-between gap-4 mb-3">
                                                <div>
                                                    <h3 className="text-main font-bold text-lg">{item.title}</h3>
                                                    <p className="text-sm text-secondary font-mono tracking-widest uppercase">Creator milestone</p>
                                                </div>
                                                <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/30">
                                                    <Youtube className="w-4 h-4 text-secondary animate-pulse" />
                                                    <span className="text-xs font-mono text-secondary tracking-widest uppercase">Subscribe</span>
                                                </div>
                                            </div>

                                            <p className="text-sm text-muted/80 leading-relaxed">{item.description}</p>

                                            <div className="mt-4 flex items-center justify-between gap-4">
                                                <span className="text-xs font-mono text-muted/70 tracking-widest uppercase">Tap to open</span>
                                                <div className="flex items-center gap-1">
                                                    {Array.from({ length: 5 }).map((_, s) => (
                                                        <Star
                                                            key={s}
                                                            className={
                                                                `w-4 h-4 text-secondary fill-current animate-pulse ` +
                                                                `[animation-delay:${s * 120}ms]`
                                                            }
                                                        />
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                );
                            }

                            return (
                                <div
                                    key={i}
                                    className={
                                        isCodeVita
                                            ? 'bg-surface border border-green-500/25 ring-1 ring-green-500/10 p-6 rounded-xl transition-all duration-300 group relative overflow-hidden hover:ring-green-400/25 hover:border-green-400/40 hover:shadow-[0_0_30px_rgba(34,197,94,0.18)]'
                                            : 'bg-surface border border-muted/10 p-6 rounded-xl hover:border-primary/50 transition-all duration-300 group relative overflow-hidden'
                                    }
                                >
                                    {isCodeVita ? (
                                        <>
                                            <div className="absolute inset-0 bg-gradient-to-br from-green-500/15 via-transparent to-primary/10 opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
                                            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-green-400/60 to-transparent opacity-80 animate-pulse" />

                                            {/* Spark / confetti dots */}
                                            <span className="absolute -top-2 -right-2 w-3 h-3 rounded-full bg-green-400/70 blur-sm animate-ping" />
                                            <span className="absolute top-8 -left-2 w-2.5 h-2.5 rounded-full bg-green-400/50 blur-sm animate-pulse" />
                                            <span className="absolute bottom-6 right-10 w-2 h-2 rounded-full bg-primary/40 blur-sm animate-ping [animation-delay:700ms]" />
                                            <span className="absolute bottom-2 left-12 w-2.5 h-2.5 rounded-full bg-secondary/35 blur-sm animate-pulse [animation-delay:450ms]" />

                                            <div className="relative">
                                                <div className="flex items-start justify-between gap-4 mb-3">
                                                    <div>
                                                        <h3 className="text-main font-bold text-lg">{item.title}</h3>
                                                        <p className="text-sm text-green-400 font-mono tracking-widest uppercase">Global achievement</p>
                                                    </div>
                                                    <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/30">
                                                        <Sparkles className="w-4 h-4 text-green-400 animate-pulse" />
                                                        <span className="text-xs font-mono text-green-400 tracking-widest uppercase">Congrats</span>
                                                    </div>
                                                </div>

                                                <p className="text-sm text-muted/80 leading-relaxed">{item.description}</p>

                                                <div className="mt-4 flex items-center justify-between gap-4">
                                                    <span className="text-xs font-mono text-muted/70 tracking-widest uppercase">Season 12</span>
                                                    <div className="flex items-center gap-1">
                                                        {Array.from({ length: 5 }).map((_, s) => (
                                                            <Star
                                                                key={s}
                                                                className={
                                                                    `w-4 h-4 text-green-400 fill-current animate-pulse ` +
                                                                    `[animation-delay:${s * 120}ms]`
                                                                }
                                                            />
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    ) : (
                                        <>
                                            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                            <div className="relative">
                                                <h3 className="text-main font-bold mb-2">{item.title}</h3>
                                                <p className="text-sm text-muted/80 leading-relaxed">{item.description}</p>
                                            </div>
                                        </>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* HackerRank */}
                <div className="space-y-6 animate-in slide-in-from-right-10 duration-700 delay-195">
                    <div className="flex items-center gap-3 mb-4">
                        <Award className="w-6 h-6 text-green-400" />
                        <h2 className="text-2xl font-bold text-main font-orbitron">HackerRank</h2>
                    </div>

                    <div className="bg-surface/50 border border-green-500/10 rounded-2xl p-6 backdrop-blur-sm relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 via-transparent to-transparent opacity-60" />
                        <div className="relative grid md:grid-cols-2 gap-4">
                            {HACKERRANK_RATINGS.map((item, i) => (
                                <div key={item.name} className="bg-surface border border-muted/10 p-5 rounded-xl hover:border-green-400/30 transition-all duration-300 group">
                                    <div className="flex items-center justify-between gap-4">
                                        <div>
                                            <p className="text-main font-bold">{item.name}</p>
                                            
                                        </div>

                                        <div className="flex items-center gap-1">
                                            {Array.from({ length: 5 }).map((_, s) => {
                                                const filled = s < item.stars;
                                                const delay = `[animation-delay:${(i * 110) + (s * 90)}ms]`;

                                                return (
                                                    <Star
                                                        key={s}
                                                        className={
                                                            `w-5 h-5 ${filled ? getAccentClass(item.accent) : 'text-muted/30'} ` +
                                                            (filled ? `fill-current animate-pulse ${delay}` : '')
                                                        }
                                                    />
                                                );
                                            })}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Education */}
                <div className="space-y-6 animate-in slide-in-from-right-10 duration-700 delay-200">
                    <div className="flex items-center gap-3 mb-4">
                        <GraduationCap className="w-6 h-6 text-primary" />
                        <h2 className="text-2xl font-bold text-main font-orbitron">Education and Training</h2>
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
                        <h2 className="text-2xl font-bold text-main font-orbitron">Core Philosophy</h2>
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
                        <h2 className="text-2xl font-bold text-main font-orbitron">Open to Opportunities</h2>
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

