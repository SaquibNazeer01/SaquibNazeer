import React, { useState, useMemo } from 'react';
import { 
  Briefcase, Calendar, Sparkles, Building2, 
  Trophy, Star, Award, Youtube, CheckCircle2, ArrowUpRight, Filter 
} from 'lucide-react';
import { EXPERIENCE } from '../constants';
import { TechIcon } from './UI/Icons';

const Experience: React.FC = () => {
  const [filterType, setFilterType] = useState<'all' | 'experience' | 'achievement'>('all');

  const filteredEntries = useMemo(() => {
    if (filterType === 'all') return EXPERIENCE;
    return EXPERIENCE.filter(item => (item.type || 'experience') === filterType);
  }, [filterType]);

  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-background transition-colors duration-500">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[130px] pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-[130px] pointer-events-none -z-10" />
      <div className="absolute inset-0 bg-grid-cyber opacity-30 pointer-events-none -z-10" />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center mb-12 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/30 mb-4 backdrop-blur-md shadow-glow-sm">
            <Sparkles className="w-4 h-4 text-primary animate-pulse" />
            <span className="text-xs font-mono font-bold tracking-widest text-primary uppercase">
              Career Trajectory, Internships & Key Honors
            </span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-main mb-4 font-display">
            Mission <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary neon-text">Log</span>
          </h2>
          
          <p className="text-muted text-base md:text-lg max-w-xl font-normal leading-relaxed">
            Track record of industry engineering internships, global competitive rounds, tech community milestones, and problem-solving certifications.
          </p>

          {/* Interactive Filter Pills */}
          <div className="mt-8 flex items-center justify-center gap-2.5 p-1.5 bg-surface/70 border border-muted/20 rounded-2xl backdrop-blur-xl shadow-glass">
            <button
              onClick={() => setFilterType('all')}
              className={`px-4 py-2 rounded-xl text-xs md:text-sm font-mono font-semibold transition-all cursor-pointer ${
                filterType === 'all'
                  ? 'bg-gradient-to-r from-primary to-blue-600 text-white shadow-glow-sm'
                  : 'text-muted hover:text-main hover:bg-surface/60'
              }`}
            >
              All Entries ({EXPERIENCE.length})
            </button>
            <button
              onClick={() => setFilterType('experience')}
              className={`px-4 py-2 rounded-xl text-xs md:text-sm font-mono font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
                filterType === 'experience'
                  ? 'bg-gradient-to-r from-primary to-blue-600 text-white shadow-glow-sm'
                  : 'text-muted hover:text-main hover:bg-surface/60'
              }`}
            >
              <Briefcase className="w-3.5 h-3.5" />
              <span>Industry Work ({EXPERIENCE.filter(e => e.type !== 'achievement').length})</span>
            </button>
            <button
              onClick={() => setFilterType('achievement')}
              className={`px-4 py-2 rounded-xl text-xs md:text-sm font-mono font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
                filterType === 'achievement'
                  ? 'bg-gradient-to-r from-amber-500 to-orange-600 text-white shadow-glow-sm'
                  : 'text-muted hover:text-main hover:bg-surface/60'
              }`}
            >
              <Trophy className="w-3.5 h-3.5" />
              <span>Honors & Milestones ({EXPERIENCE.filter(e => e.type === 'achievement').length})</span>
            </button>
          </div>
        </div>

        {/* Timeline Container */}
        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Illuminated Line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/10 via-primary to-primary/10 transform md:-translate-x-1/2" />

          <div className="space-y-12 relative">
            {filteredEntries.map((exp, index) => {
              const isEven = index % 2 === 0;
              const isAchievement = exp.type === 'achievement';

              return (
                <div 
                  key={exp.id} 
                  className={`relative flex flex-col md:flex-row gap-8 items-center ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  
                  {/* Timeline Glowing Node */}
                  <div className={`absolute left-6 md:left-1/2 -translate-x-1/2 w-7 h-7 rounded-full bg-background border-2 shadow-glow-sm flex items-center justify-center z-20 ${
                    isAchievement ? 'border-amber-400 text-amber-400' : 'border-primary text-primary'
                  }`}>
                    {isAchievement ? (
                      <Trophy className="w-3.5 h-3.5 animate-pulse" />
                    ) : (
                      <div className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse" />
                    )}
                  </div>

                  {/* Content Card */}
                  <div className="ml-14 md:ml-0 md:w-1/2 w-full">
                    <div className={`relative p-7 rounded-3xl backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-glow-md group ${
                      isAchievement 
                        ? 'bg-surface/85 border border-amber-500/30 hover:border-amber-500/60' 
                        : 'bg-surface/70 border border-muted/15 hover:border-primary/50'
                    }`}>
                      {/* Corner Accents */}
                      <div className={`absolute top-0 right-0 w-16 h-16 rounded-tr-3xl pointer-events-none ${
                        isAchievement ? 'bg-gradient-to-bl from-amber-500/20 to-transparent' : 'bg-gradient-to-bl from-primary/15 to-transparent'
                      }`} />

                      {/* Header Info */}
                      <div className="flex flex-col gap-2 mb-4">
                        <div className="flex items-center justify-between gap-2 flex-wrap">
                          <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono font-bold border ${
                            isAchievement 
                              ? 'bg-amber-500/15 text-amber-300 border-amber-500/30' 
                              : 'bg-primary/10 text-primary border border-primary/25'
                          }`}>
                            {isAchievement ? <Award className="w-3.5 h-3.5" /> : <Building2 className="w-3.5 h-3.5" />}
                            {exp.company}
                          </span>

                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-background/80 text-muted border border-muted/20 text-xs font-mono">
                            <Calendar className="w-3.5 h-3.5" />
                            {exp.period}
                          </span>
                        </div>

                        <h3 className={`text-xl font-bold font-display transition-colors mt-1 ${
                          isAchievement ? 'text-main group-hover:text-amber-400' : 'text-main group-hover:text-primary'
                        }`}>
                          {exp.role}
                        </h3>

                        {exp.badge && (
                          <div className="inline-flex self-start px-2.5 py-0.5 rounded-md text-[10px] font-mono font-bold uppercase tracking-wider bg-background/90 text-primary border border-primary/20">
                            {exp.badge}
                          </div>
                        )}
                      </div>

                      {/* Description */}
                      <p className="text-muted text-sm leading-relaxed mb-5">
                        {exp.description}
                      </p>

                      {/* Skills & Tools Tags */}
                      <div className="flex flex-wrap gap-2 pt-3 border-t border-muted/10">
                        {exp.skills.map((skill, idx) => (
                          <span 
                            key={idx} 
                            className="flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-mono font-semibold text-main bg-background/60 rounded-lg border border-muted/20"
                          >
                            <TechIcon name={skill} className="w-3 h-3" />
                            <span>{skill}</span>
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  {/* Empty Space for Grid Alignment */}
                  <div className="hidden md:block md:w-1/2" />
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Experience;