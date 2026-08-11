import React, { useState, useMemo } from 'react';
import { 
  Code2, Cpu, Globe, Database, Terminal, 
  Sparkles, CheckCircle2, Flame, Award, 
  Search, Filter, Layers, ArrowUpRight 
} from 'lucide-react';
import { useData } from '../contexts/DataContext';
import { TechIcon, getTechMeta } from './UI/Icons';
import { SkillCategory } from '../types';

const Skills: React.FC = () => {
  const { skills } = useData();
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [minProficiency, setMinProficiency] = useState<number>(0);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const categories = [
    {
      id: 'AI & ML',
      title: 'AI, ML & Vision',
      icon: Cpu,
      color: 'border-emerald-500/40 text-emerald-400',
      bgGlow: 'from-emerald-500/10 via-teal-500/5 to-transparent',
      desc: 'Deep Neural Networks, Real-Time Vision & Generative AI'
    },
    {
      id: 'Languages',
      title: 'Languages & Logic',
      icon: Code2,
      color: 'border-cyan-500/40 text-cyan-400',
      bgGlow: 'from-cyan-500/10 via-blue-500/5 to-transparent',
      desc: 'Object-Oriented, Functional & Low-Level Systems'
    },
    {
      id: 'Web Development',
      title: 'Web & Full-Stack',
      icon: Globe,
      color: 'border-purple-500/40 text-purple-400',
      bgGlow: 'from-purple-500/10 via-pink-500/5 to-transparent',
      desc: 'Component Architectures, High-Performance APIs & UI/UX'
    },
    {
      id: 'Database',
      title: 'Databases & Storage',
      icon: Database,
      color: 'border-blue-500/40 text-blue-400',
      bgGlow: 'from-blue-500/10 via-indigo-500/5 to-transparent',
      desc: 'Relational Schemas, Document Stores & In-Memory Caches'
    },
    {
      id: 'DevOps & Tools',
      title: 'DevOps & Tooling',
      icon: Terminal,
      color: 'border-amber-500/40 text-amber-400',
      bgGlow: 'from-amber-500/10 via-orange-500/5 to-transparent',
      desc: 'CI/CD Pipelines, Containerization & IDE Workflow'
    },
  ];

  const getTier = (level: number) => {
    if (level >= 90) return { label: 'Mastery', color: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/40' };
    if (level >= 80) return { label: 'Advanced', color: 'bg-primary/15 text-primary border-primary/40' };
    return { label: 'Proficient', color: 'bg-secondary/15 text-secondary border-secondary/40' };
  };

  const filteredSkills = useMemo(() => {
    return skills.filter(skill => {
      const matchesCategory = activeCategory === 'All' || skill.category === activeCategory;
      const matchesProficiency = skill.level >= minProficiency;
      const matchesSearch = skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            (skill.tag && skill.tag.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesProficiency && matchesSearch;
    });
  }, [skills, activeCategory, minProficiency, searchQuery]);

  const stats = useMemo(() => {
    const total = skills.length;
    const masteryCount = skills.filter(s => s.level >= 90).length;
    const avgScore = total ? Math.round(skills.reduce((acc, s) => acc + s.level, 0) / total) : 0;
    return { total, masteryCount, avgScore };
  }, [skills]);

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-background transition-colors duration-500">
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-primary/10 rounded-full blur-[150px] pointer-events-none -z-10 animate-pulse-glow" />
      <div className="absolute inset-0 bg-grid-cyber opacity-30 pointer-events-none -z-10" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="flex flex-col items-center mb-14 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/30 mb-4 backdrop-blur-md shadow-glow-sm">
            <Sparkles className="w-4 h-4 text-primary animate-pulse" />
            <span className="text-xs font-mono font-bold tracking-widest text-primary uppercase">
              Competency Architecture & Ecosystem
            </span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-main mb-4 font-display">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-teal-400 to-secondary neon-text">Matrix</span>
          </h2>
          
          <p className="text-muted text-base md:text-lg max-w-2xl font-normal leading-relaxed">
            Multi-disciplinary software engineering stack spanning Artificial Intelligence, System Programming, and Modern Full-Stack Web Development.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-4xl mt-8">
            <div className="bg-surface/60 border border-muted/15 p-4 rounded-2xl backdrop-blur-md text-left flex items-center gap-3.5 hover:border-primary/40 transition-colors">
              <div className="p-2.5 rounded-xl bg-primary/10 text-primary border border-primary/20">
                <Layers className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xl md:text-2xl font-bold text-main font-display">{stats.total}+</p>
                <p className="text-[11px] font-mono uppercase tracking-wider text-muted">Core Modules</p>
              </div>
            </div>

            <div className="bg-surface/60 border border-muted/15 p-4 rounded-2xl backdrop-blur-md text-left flex items-center gap-3.5 hover:border-emerald-500/40 transition-colors">
              <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                <Flame className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xl md:text-2xl font-bold text-main font-display">{stats.masteryCount}</p>
                <p className="text-[11px] font-mono uppercase tracking-wider text-muted">Mastery (90%+)</p>
              </div>
            </div>

            <div className="bg-surface/60 border border-muted/15 p-4 rounded-2xl backdrop-blur-md text-left flex items-center gap-3.5 hover:border-secondary/40 transition-colors">
              <div className="p-2.5 rounded-xl bg-secondary/10 text-secondary border border-secondary/20">
                <Cpu className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xl md:text-2xl font-bold text-main font-display">Vision & XAI</p>
                <p className="text-[11px] font-mono uppercase tracking-wider text-muted">Specialization</p>
              </div>
            </div>

            <div className="bg-surface/60 border border-muted/15 p-4 rounded-2xl backdrop-blur-md text-left flex items-center gap-3.5 hover:border-primary/40 transition-colors">
              <div className="p-2.5 rounded-xl bg-primary/10 text-primary border border-primary/20">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xl md:text-2xl font-bold text-main font-display">{stats.avgScore}%</p>
                <p className="text-[11px] font-mono uppercase tracking-wider text-muted">Avg Proficiency</p>
              </div>
            </div>
          </div>

          <div className="w-full mt-10 flex flex-col md:flex-row items-center justify-between gap-4 bg-surface/60 p-3 md:p-4 rounded-2xl border border-muted/15 backdrop-blur-xl shadow-glass">
            <div className="flex flex-wrap items-center justify-center gap-2">
              <button
                onClick={() => setActiveCategory('All')}
                className={`px-4 py-2 rounded-xl text-xs md:text-sm font-semibold transition-all duration-300 cursor-pointer ${
                  activeCategory === 'All'
                    ? 'bg-gradient-to-r from-primary to-blue-600 text-white shadow-glow-sm scale-[1.02]'
                    : 'text-muted hover:text-main hover:bg-surface border border-transparent'
                }`}
              >
                All Domains
              </button>
              {categories.map((cat) => {
                const Icon = cat.icon;
                const isActive = activeCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs md:text-sm font-semibold transition-all duration-300 cursor-pointer ${
                      isActive
                        ? 'bg-gradient-to-r from-primary to-blue-600 text-white shadow-glow-sm scale-[1.02]'
                        : 'text-muted hover:text-main hover:bg-surface border border-transparent'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{cat.title.split(' ')[0]}</span>
                  </button>
                );
              })}
            </div>

            <div className="flex items-center gap-3 w-full md:w-auto">
              <div className="relative flex-1 md:w-60">
                <Search className="w-4 h-4 text-muted absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search tech (e.g., Python)..."
                  className="w-full bg-background/80 border border-muted/20 rounded-xl pl-9 pr-3 py-2 text-xs md:text-sm text-main placeholder:text-muted/60 focus:outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/20 font-mono"
                />
              </div>

              <select
                value={minProficiency}
                onChange={(e) => setMinProficiency(Number(e.target.value))}
                className="bg-background/80 border border-muted/20 rounded-xl px-3 py-2 text-xs text-muted focus:outline-none focus:border-primary/60 font-mono cursor-pointer"
                aria-label="Filter by minimum proficiency"
              >
                <option value={0}>All Levels</option>
                <option value={80}>Advanced 80%+</option>
                <option value={90}>Mastery 90%+</option>
              </select>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-7">
          {categories.map((cat, catIdx) => {
            const catSkills = filteredSkills.filter(s => s.category === cat.id);
            if (catSkills.length === 0) return null;

            const Icon = cat.icon;
            const colSpan = activeCategory !== 'All' ? 'lg:col-span-12' : (catIdx === 0 || catIdx === 1 ? 'lg:col-span-6' : 'lg:col-span-4');

            return (
              <div
                key={cat.id}
                className={`${colSpan} group relative bg-surface/70 border border-muted/15 rounded-3xl overflow-hidden backdrop-blur-xl transition-all duration-500 hover:border-primary/50 hover:shadow-glow-md flex flex-col`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${cat.bgGlow} opacity-60 group-hover:opacity-100 transition-opacity duration-500`} />
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary/60 via-secondary/40 to-transparent" />

                <div className="p-6 border-b border-muted/10 flex items-center justify-between relative z-10 bg-surface/50">
                  <div className="flex items-center gap-3.5">
                    <div className={`p-2.5 rounded-xl bg-surface border ${cat.color} shadow-sm group-hover:scale-110 transition-transform`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-lg text-main">{cat.title}</h3>
                      <p className="text-xs font-mono text-muted">{catSkills.length} Technologies Active</p>
                    </div>
                  </div>

                  <span className="text-xs font-mono text-primary font-bold px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
                    DOMAIN {catIdx + 1}
                  </span>
                </div>

                <div className="p-6 grid grid-cols-1 sm:grid-cols-2 gap-3.5 flex-1 content-start relative z-10">
                  {catSkills.map((skill, sIdx) => {
                    const tier = getTier(skill.level);
                    const isHovered = hoveredSkill === skill.name;
                    const meta = getTechMeta(skill.name);

                    return (
                      <div
                        key={sIdx}
                        onMouseEnter={() => setHoveredSkill(skill.name)}
                        onMouseLeave={() => setHoveredSkill(null)}
                        className={`relative p-3.5 rounded-2xl bg-background/60 border transition-all duration-300 hover:bg-background/95 group/item flex flex-col justify-between ${
                          isHovered 
                            ? 'border-primary shadow-glow-sm scale-[1.02]' 
                            : 'border-muted/15 hover:border-primary/40'
                        }`}
                      >
                        <div>
                          <div className="flex items-center justify-between gap-2.5 mb-1.5">
                            <div className="flex items-center gap-2.5 min-w-0">
                              <div 
                                className="w-8 h-8 rounded-xl flex items-center justify-center p-1.5 flex-shrink-0 border border-muted/20 group-hover/item:scale-110 transition-transform"
                                style={{ backgroundColor: meta.bgColor }}
                              >
                                <TechIcon name={skill.name} className="w-4 h-4" />
                              </div>

                              <span className="font-semibold text-xs sm:text-sm text-main group-hover/item:text-primary transition-colors truncate">
                                {skill.name}
                              </span>
                            </div>

                            <span className="text-xs font-mono font-bold text-primary flex-shrink-0">
                              {skill.level}%
                            </span>
                          </div>

                          {skill.tag && (
                            <p className="text-[10px] font-mono text-muted/70 pl-10 mb-2 truncate">
                              {skill.tag}
                            </p>
                          )}
                        </div>

                        <div className="space-y-2 mt-1 pl-1">
                          <div className="h-1.5 w-full bg-muted/20 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-gradient-to-r from-primary via-teal-400 to-secondary rounded-full transform origin-left scale-x-0 animate-[grow_1s_ease-out_forwards]"
                              style={{
                                width: `${skill.level}%`,
                                animationDelay: `${(catIdx * 100) + (sIdx * 40)}ms`
                              }}
                            />
                          </div>

                          <div className="flex items-center justify-between pt-1">
                            <span className={`text-[9px] font-mono font-bold uppercase px-2 py-0.5 rounded-md border ${tier.color}`}>
                              {tier.label}
                            </span>
                            <span className="text-[10px] font-mono text-muted/60">
                              OPERATIONAL
                            </span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {filteredSkills.length === 0 && (
          <div className="w-full py-16 text-center bg-surface/40 rounded-3xl border border-muted/15">
            <Search className="w-8 h-8 text-muted mx-auto mb-2" />
            <h3 className="text-lg font-bold text-main font-display">No Technologies Found</h3>
            <p className="text-muted text-sm mt-1">Try resetting the search query or proficiency filter.</p>
            <button
              onClick={() => { setActiveCategory('All'); setSearchQuery(''); setMinProficiency(0); }}
              className="mt-4 px-5 py-2 rounded-xl bg-primary text-white text-xs font-mono font-bold uppercase hover:bg-primary/80 transition-colors shadow-glow-sm cursor-pointer"
            >
              Reset Matrix
            </button>
          </div>
        )}

      </div>
    </section>
  );
};

export default Skills;