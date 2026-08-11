
import React, { useRef, useState, useMemo } from 'react';
import { 
  ExternalLink, Github, Layers, Cpu, Globe, Terminal, 
  ChevronLeft, ChevronRight, Volume2, VolumeX, Search, 
  LayoutGrid, SlidersHorizontal, Sparkles, CheckCircle2, 
  X, Play, Eye, ArrowUpRight, Zap
} from 'lucide-react';
import { useData } from '../contexts/DataContext';
import { Project } from '../types';
import { TechIcon } from './UI/Icons';

const Projects: React.FC = () => {
  const { projects } = useData();
  const [filter, setFilter] = useState<'All' | 'AI' | 'Web App' | 'Software' | 'Tool'>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'carousel'>('grid');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const videoRefs = useRef<Record<string, HTMLVideoElement | null>>({});
  const [unmutedById, setUnmutedById] = useState<Record<string, boolean>>({});

  const categories = [
    { name: 'All', icon: Layers, label: 'All Projects' },
    { name: 'AI', icon: Cpu, label: 'AI & Vision' },
    { name: 'Web App', icon: Globe, label: 'Web Applications' },
    { name: 'Software', icon: Terminal, label: 'Systems & Software' },
    { name: 'Tool', icon: Sparkles, label: 'Tools & Utilities' },
  ];

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesCategory = filter === 'All' || project.category === filter;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch = !q || 
        project.title.toLowerCase().includes(q) ||
        project.description.toLowerCase().includes(q) ||
        project.technologies.some(t => t.toLowerCase().includes(q));
      return matchesCategory && matchesSearch;
    });
  }, [projects, filter, searchQuery]);

  const toggleVideoAudio = (e: React.MouseEvent, projectId: string) => {
    e.stopPropagation();
    setUnmutedById((prev) => {
      const nextUnmuted = !prev[projectId];
      const el = videoRefs.current[projectId];
      if (el) {
        el.muted = !nextUnmuted;
        el.volume = nextUnmuted ? 1 : 0;
        if (nextUnmuted) void el.play();
      }
      return { ...prev, [projectId]: nextUnmuted };
    });
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const { current } = scrollContainerRef;
      const scrollAmount = current.clientWidth * 0.8;
      current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'AI': return 'from-cyan-500/20 via-blue-500/10 to-transparent text-cyan-400 border-cyan-500/30';
      case 'Web App': return 'from-fuchsia-500/20 via-pink-500/10 to-transparent text-fuchsia-400 border-fuchsia-500/30';
      case 'Software': return 'from-emerald-500/20 via-teal-500/10 to-transparent text-emerald-400 border-emerald-500/30';
      case 'Tool': return 'from-amber-500/20 via-orange-500/10 to-transparent text-amber-400 border-amber-500/30';
      default: return 'from-primary/20 to-transparent text-primary border-primary/30';
    }
  };

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-background transition-colors duration-500">
      {/* Dynamic Background Ambient Lighting */}
      <div className="absolute top-1/4 right-0 w-[550px] h-[550px] bg-primary/10 rounded-full blur-[140px] pointer-events-none -z-10 animate-pulse" />
      <div className="absolute bottom-1/4 left-0 w-[550px] h-[550px] bg-secondary/10 rounded-full blur-[140px] pointer-events-none -z-10 animate-pulse delay-1000" />
      <div className="absolute inset-0 bg-grid-cyber opacity-40 pointer-events-none -z-10" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center mb-14 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/30 mb-4 backdrop-blur-md shadow-glow-sm">
            <Sparkles className="w-4 h-4 text-primary animate-pulse" />
            <span className="text-xs font-mono font-bold tracking-widest text-primary uppercase">
              Curated Deployments & Engineering
            </span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-main mb-4 font-display">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-400 to-secondary neon-text">Projects</span>
          </h2>
          
          <p className="text-muted text-base md:text-lg max-w-2xl font-normal leading-relaxed">
            Exploration across Full-Stack Systems, Explainable AI, Real-Time Computer Vision, and Cloud Architectures.
          </p>

          {/* Controls Bar: Categories, Search, View Mode */}
          <div className="w-full mt-10 flex flex-col lg:flex-row items-center justify-between gap-5 bg-surface/60 p-3 md:p-4 rounded-2xl border border-muted/15 backdrop-blur-xl shadow-glass">
            
            {/* Category Tabs */}
            <div className="flex flex-wrap items-center justify-center gap-2 w-full lg:w-auto">
              {categories.map((cat) => {
                const Icon = cat.icon;
                const isActive = filter === cat.name;
                return (
                  <button
                    key={cat.name}
                    onClick={() => setFilter(cat.name as any)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs md:text-sm font-semibold transition-all duration-300 ${
                      isActive
                        ? 'bg-gradient-to-r from-primary to-blue-600 text-white shadow-glow-sm scale-[1.02]'
                        : 'text-muted hover:text-main hover:bg-surface/80 border border-transparent hover:border-muted/20'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{cat.name}</span>
                  </button>
                );
              })}
            </div>

            {/* Right Tools: Search & Layout Toggle */}
            <div className="flex items-center gap-3 w-full lg:w-auto justify-between lg:justify-end">
              {/* Search Bar */}
              <div className="relative flex-1 lg:w-64">
                <Search className="w-4 h-4 text-muted absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search tech or project..."
                  className="w-full bg-background/80 border border-muted/20 rounded-xl pl-9 pr-3 py-2 text-xs md:text-sm text-main placeholder:text-muted/60 focus:outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/20 transition-all font-mono"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 text-muted hover:text-main"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>

              {/* View Switcher */}
              <div className="flex items-center bg-background/80 p-1 rounded-xl border border-muted/20">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg transition-all ${
                    viewMode === 'grid' 
                      ? 'bg-primary/20 text-primary shadow-sm' 
                      : 'text-muted hover:text-main'
                  }`}
                  title="Bento Grid View"
                  aria-label="Grid View"
                >
                  <LayoutGrid className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode('carousel')}
                  className={`p-2 rounded-lg transition-all ${
                    viewMode === 'carousel' 
                      ? 'bg-primary/20 text-primary shadow-sm' 
                      : 'text-muted hover:text-main'
                  }`}
                  title="Carousel Slider View"
                  aria-label="Carousel View"
                >
                  <SlidersHorizontal className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>

          {/* Results Summary */}
          <div className="w-full flex items-center justify-between mt-4 px-2 text-xs font-mono text-muted">
            <span>SHOWING {filteredProjects.length} OF {projects.length} PROJECTS</span>
            {searchQuery && (
              <span className="text-primary">FILTERED BY "{searchQuery}"</span>
            )}
          </div>
        </div>

        {/* Bento Grid View */}
        {viewMode === 'grid' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {filteredProjects.map((project, index) => {
              const isHeroCard = index === 0 && !searchQuery && filter === 'All';
              const isUnmuted = !!unmutedById[project.id];

              return (
                <div
                  key={project.id}
                  onClick={() => setSelectedProject(project)}
                  className={`group relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 flex flex-col bg-surface/70 border backdrop-blur-md hover:-translate-y-1.5 ${
                    isHeroCard ? 'md:col-span-2 lg:col-span-2' : ''
                  } ${
                    project.comingSoon
                      ? 'border-emerald-500/30 hover:border-emerald-400 hover:shadow-[0_0_35px_rgba(16,185,129,0.2)]'
                      : 'border-muted/15 hover:border-primary/60 hover:shadow-glow-md'
                  }`}
                >
                  {/* Glowing Top Ambient Accent */}
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${getCategoryColor(project.category)}`} />

                  {/* Media Container */}
                  <div className={`relative overflow-hidden ${isHeroCard ? 'h-64 sm:h-80' : 'h-52'}`}>
                    {project.videoUrl ? (
                      <video
                        ref={(el) => {
                          videoRefs.current[project.id] = el;
                        }}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        autoPlay
                        muted={!isUnmuted}
                        defaultMuted
                        loop
                        playsInline
                        preload="auto"
                        poster={project.imageUrl}
                        aria-label={`${project.title} video preview`}
                      >
                        <source src={project.videoUrl} type="video/mp4" />
                      </video>
                    ) : (
                      <img
                        src={project.imageUrl}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                      />
                    )}

                    <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/30 to-transparent" />

                    {/* Status Badges */}
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                      <div className="flex items-center gap-2">
                        <span className={`px-2.5 py-1 rounded-lg text-[10px] font-bold font-mono tracking-widest uppercase border backdrop-blur-md ${
                          project.comingSoon 
                            ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40 animate-pulse' 
                            : 'bg-surface/80 text-primary border-primary/30'
                        }`}>
                          {project.comingSoon ? 'UNDER DEVELOPMENT' : project.category}
                        </span>

                        {project.featured && (
                          <span className="hidden sm:inline-flex items-center gap-1 px-2 py-1 rounded-lg text-[10px] font-bold font-mono tracking-widest uppercase bg-amber-500/20 text-amber-300 border border-amber-500/40 backdrop-blur-md">
                            <Zap className="w-3 h-3" /> FEATURED
                          </span>
                        )}
                      </div>

                      {project.metrics && (
                        <span className="px-2.5 py-1 rounded-lg text-[10px] font-bold font-mono bg-background/80 text-main border border-muted/20 backdrop-blur-md">
                          {project.metrics}
                        </span>
                      )}
                    </div>

                    {/* Floating Video Audio Toggle */}
                    {project.videoUrl && (
                      <button
                        type="button"
                        onClick={(e) => toggleVideoAudio(e, project.id)}
                        className={`absolute bottom-3 left-3 z-20 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-[10px] font-mono font-bold tracking-wider uppercase transition-all backdrop-blur-md shadow-md ${
                          isUnmuted
                            ? 'bg-emerald-500/20 border-emerald-400 text-emerald-300 hover:bg-emerald-500/30'
                            : 'bg-surface/90 border-primary/30 text-primary hover:bg-primary/20'
                        }`}
                        aria-label={isUnmuted ? 'Mute Audio' : 'Unmute Audio'}
                      >
                        {isUnmuted ? <Volume2 className="w-3.5 h-3.5" /> : <VolumeX className="w-3.5 h-3.5" />}
                        <span>{isUnmuted ? 'AUDIO ON' : 'AUDIO OFF'}</span>
                      </button>
                    )}

                    {/* Quick Preview Hover Indicator */}
                    <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-primary text-white text-xs font-semibold shadow-glow-sm">
                      <Eye className="w-3.5 h-3.5" />
                      <span>Details</span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                    <div>
                      <h3 className="text-xl font-bold text-main font-display group-hover:text-primary transition-colors flex items-center justify-between gap-2">
                        <span>{project.title}</span>
                        <ArrowUpRight className="w-4 h-4 text-muted group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform flex-shrink-0" />
                      </h3>

                      <p className="text-muted text-sm leading-relaxed mt-2 line-clamp-2">
                        {project.description}
                      </p>
                    </div>

                    {/* Highlights (if Hero) */}
                    {isHeroCard && project.highlights && (
                      <div className="space-y-1.5 pt-1 border-t border-muted/10">
                        {project.highlights.slice(0, 2).map((h, i) => (
                          <div key={i} className="flex items-center gap-2 text-xs text-muted/90 font-medium">
                            <CheckCircle2 className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                            <span>{h}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Tech Stack Chips */}
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {project.technologies.slice(0, isHeroCard ? 6 : 4).map((tech, i) => (
                        <span
                          key={i}
                          className="text-[11px] px-2.5 py-1 rounded-md bg-primary/5 text-primary border border-primary/15 font-mono font-medium hover:bg-primary/15 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > (isHeroCard ? 6 : 4) && (
                        <span className="text-[11px] px-2 py-1 rounded-md bg-muted/10 text-muted font-mono">
                          +{project.technologies.length - (isHeroCard ? 6 : 4)}
                        </span>
                      )}
                    </div>

                    {/* Footer Actions */}
                    <div className="pt-3 border-t border-muted/10 flex items-center justify-between">
                      <span className="text-xs font-mono text-muted/80">
                        {project.comingSoon ? 'ETA: SOON' : 'CLICK TO INSPECT'}
                      </span>

                      <div className="flex items-center gap-2">
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="p-2 rounded-lg bg-surface hover:bg-primary/20 text-muted hover:text-primary border border-muted/20 hover:border-primary/40 transition-colors"
                            title="View Source Code"
                            aria-label="GitHub Repository"
                          >
                            <Github className="w-4 h-4" />
                          </a>
                        )}

                        {project.link && project.link !== '#' && (
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="p-2 rounded-lg bg-primary/10 hover:bg-primary text-primary hover:text-white border border-primary/30 transition-all shadow-glow-sm"
                            title="Live Project Link"
                            aria-label="External Project Link"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Carousel Slider View */}
        {viewMode === 'carousel' && (
          <div className="relative group/slider">
            {/* Left Button */}
            <button 
              onClick={() => scroll('left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 md:-translate-x-6 z-30 p-3 rounded-full bg-surface border border-primary/40 text-primary hover:bg-primary hover:text-white transition-all duration-300 shadow-xl cursor-pointer backdrop-blur-md"
              aria-label="Previous Project"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Right Button */}
            <button 
              onClick={() => scroll('right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 md:translate-x-6 z-30 p-3 rounded-full bg-surface border border-primary/40 text-primary hover:bg-primary hover:text-white transition-all duration-300 shadow-xl cursor-pointer backdrop-blur-md"
              aria-label="Next Project"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Horizontal Scroll Container */}
            <div 
              ref={scrollContainerRef}
              className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory hide-scrollbar px-2 md:px-0"
            >
              {filteredProjects.map((project) => {
                const isUnmuted = !!unmutedById[project.id];

                return (
                  <div 
                    key={project.id}
                    onClick={() => setSelectedProject(project)}
                    className="min-w-[320px] sm:min-w-[380px] md:min-w-[420px] snap-center bg-surface/70 border border-muted/20 hover:border-primary/50 rounded-2xl overflow-hidden transition-all duration-300 flex flex-col hover:shadow-glow-md backdrop-blur-md cursor-pointer group"
                  >
                    {/* Media */}
                    <div className="relative h-56 overflow-hidden">
                      {project.videoUrl ? (
                        <video
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          autoPlay
                          muted={!isUnmuted}
                          defaultMuted
                          loop
                          playsInline
                          preload="auto"
                          poster={project.imageUrl}
                        >
                          <source src={project.videoUrl} type="video/mp4" />
                        </video>
                      ) : (
                        <img 
                          src={project.imageUrl} 
                          alt={project.title} 
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent" />

                      <div className="absolute top-3 right-3 px-2.5 py-1 bg-surface/80 backdrop-blur-md rounded-lg border border-primary/20 text-[10px] font-bold font-mono text-primary uppercase">
                        {project.category}
                      </div>

                      {project.videoUrl && (
                        <button
                          type="button"
                          onClick={(e) => toggleVideoAudio(e, project.id)}
                          className={`absolute bottom-3 left-3 z-20 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-[10px] font-mono font-bold tracking-wider uppercase transition-all backdrop-blur-md ${
                            isUnmuted
                              ? 'bg-emerald-500/20 border-emerald-400 text-emerald-300'
                              : 'bg-surface/80 border-primary/25 text-primary'
                          }`}
                        >
                          {isUnmuted ? <Volume2 className="w-3.5 h-3.5" /> : <VolumeX className="w-3.5 h-3.5" />}
                          {isUnmuted ? 'MUTE' : 'UNMUTE'}
                        </button>
                      )}
                    </div>

                    {/* Content */}
                    <div className="p-6 flex-1 flex flex-col justify-between">
                      <div>
                        <h3 className="text-xl font-bold text-main mb-2 font-display group-hover:text-primary transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-muted text-sm leading-relaxed mb-4 line-clamp-3">
                          {project.description}
                        </p>
                      </div>

                      <div>
                        <div className="flex flex-wrap gap-1.5 mb-4">
                          {project.technologies.slice(0, 4).map((tech, i) => (
                            <span key={i} className="text-[11px] px-2.5 py-1 rounded bg-primary/5 text-primary border border-primary/15 font-mono">
                              {tech}
                            </span>
                          ))}
                        </div>

                        <div className="flex items-center justify-between text-xs font-mono text-primary font-semibold">
                          <span>EXPLORE ARCHITECTURE</span>
                          <ArrowUpRight className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="w-full flex flex-col items-center justify-center py-16 px-4 bg-surface/40 rounded-2xl border border-muted/15 text-center">
            <div className="p-4 rounded-full bg-primary/10 text-primary mb-3">
              <Search className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-bold text-main font-display mb-1">No Projects Found</h3>
            <p className="text-muted text-sm max-w-sm mb-4">
              Try searching with another keyword or reset the category filter to explore all engineering projects.
            </p>
            <button
              onClick={() => { setFilter('All'); setSearchQuery(''); }}
              className="px-5 py-2 rounded-xl bg-primary text-white text-xs font-mono font-bold tracking-wider uppercase hover:bg-primary/80 transition-colors shadow-glow-sm"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>

      {/* Project Detail Lightbox Modal */}
      {selectedProject && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-background/80 backdrop-blur-xl animate-in fade-in duration-300"
          onClick={() => setSelectedProject(null)}
        >
          <div 
            className="relative w-full max-w-4xl max-h-[90vh] bg-surface border border-primary/40 rounded-3xl overflow-hidden shadow-2xl flex flex-col animate-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header / Close Bar */}
            <div className="p-5 border-b border-muted/15 flex items-center justify-between bg-surface/90">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-lg bg-primary/10 border border-primary/30 text-primary text-xs font-mono font-bold uppercase">
                  {selectedProject.category}
                </span>
                {selectedProject.metrics && (
                  <span className="px-3 py-1 rounded-lg bg-secondary/10 border border-secondary/30 text-secondary text-xs font-mono font-bold">
                    {selectedProject.metrics}
                  </span>
                )}
              </div>

              <button
                onClick={() => setSelectedProject(null)}
                className="p-2 rounded-full bg-muted/10 hover:bg-primary/20 text-muted hover:text-main transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 md:p-8 overflow-y-auto space-y-6">
              {/* Media Preview */}
              <div className="relative rounded-2xl overflow-hidden h-64 sm:h-80 border border-muted/20 bg-black/40">
                {selectedProject.videoUrl ? (
                  <video
                    className="w-full h-full object-cover"
                    controls
                    autoPlay
                    loop
                    playsInline
                    poster={selectedProject.imageUrl}
                  >
                    <source src={selectedProject.videoUrl} type="video/mp4" />
                  </video>
                ) : (
                  <img
                    src={selectedProject.imageUrl}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>

              {/* Title & Overview */}
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-main font-display mb-3">
                  {selectedProject.title}
                </h3>
                <p className="text-muted text-base leading-relaxed">
                  {selectedProject.description}
                </p>
              </div>

              {/* 3-Part Deep Dive Breakdown: What is it, How it works, What problem it solves */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* 1. What is it? */}
                <div className="p-5 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 backdrop-blur-md space-y-2">
                  <div className="flex items-center gap-2 text-cyan-400 font-mono font-bold text-xs uppercase tracking-wider">
                    <Sparkles className="w-4 h-4" />
                    <span>What is it?</span>
                  </div>
                  <p className="text-xs sm:text-sm text-main/90 leading-relaxed">
                    {selectedProject.whatIsIt || selectedProject.description}
                  </p>
                </div>

                {/* 2. How it works? */}
                <div className="p-5 rounded-2xl bg-purple-500/10 border border-purple-500/30 backdrop-blur-md space-y-2">
                  <div className="flex items-center gap-2 text-purple-400 font-mono font-bold text-xs uppercase tracking-wider">
                    <Cpu className="w-4 h-4" />
                    <span>How it works?</span>
                  </div>
                  <p className="text-xs sm:text-sm text-main/90 leading-relaxed">
                    {selectedProject.howItWorks || "Built with modern architecture pipelines, dynamic data validation, and responsive interface workflows."}
                  </p>
                </div>

                {/* 3. What problem it solves? */}
                <div className="p-5 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 backdrop-blur-md space-y-2">
                  <div className="flex items-center gap-2 text-emerald-400 font-mono font-bold text-xs uppercase tracking-wider">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Problem it solves</span>
                  </div>
                  <p className="text-xs sm:text-sm text-main/90 leading-relaxed">
                    {selectedProject.problemSolved || "Eliminates operational bottlenecks and replaces manual overhead with high-performance automated solutions."}
                  </p>
                </div>
              </div>

              {/* Key Highlights */}
              {selectedProject.highlights && selectedProject.highlights.length > 0 && (
                <div className="space-y-3 bg-background/60 p-5 rounded-2xl border border-muted/15">
                  <h4 className="text-sm font-bold font-mono uppercase text-primary tracking-wider flex items-center gap-2">
                    <Sparkles className="w-4 h-4" /> Core Technical Highlights & Achievements
                  </h4>
                  <div className="grid gap-2.5">
                    {selectedProject.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-start gap-3 text-sm text-muted">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Technologies */}
              <div>
                <h4 className="text-sm font-bold font-mono uppercase text-muted tracking-wider mb-3">
                  Technology Stack & System Dependencies
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface border border-muted/20 font-mono text-xs font-medium text-main"
                    >
                      <TechIcon name={tech} className="w-3.5 h-3.5" />
                      <span>{tech}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Actions Footer */}
            <div className="p-5 border-t border-muted/15 bg-surface/90 flex flex-wrap items-center justify-between gap-4">
              <button
                onClick={() => setSelectedProject(null)}
                className="px-5 py-2.5 rounded-xl border border-muted/20 text-muted hover:text-main text-sm font-semibold transition-colors cursor-pointer"
              >
                Close Window
              </button>

              <div className="flex items-center gap-3">
                {selectedProject.githubUrl && (
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-surface border border-muted/30 text-main hover:border-primary/50 text-sm font-semibold transition-colors cursor-pointer"
                  >
                    <Github className="w-4 h-4" />
                    <span>View Repository</span>
                  </a>
                )}

                {selectedProject.link && selectedProject.link !== '#' ? (
                  <a
                    href={selectedProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-primary text-white text-sm font-bold shadow-glow-sm hover:bg-primary/90 hover:scale-[1.02] transition-all cursor-pointer"
                  >
                    <span>Launch Live Demo</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                ) : (
                  <span className="px-4 py-2 text-xs font-mono text-emerald-400 font-bold bg-emerald-500/10 rounded-xl border border-emerald-500/30">
                    STATUS: PRODUCTION ACTIVE
                  </span>
                )}
              </div>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};

export default Projects;

