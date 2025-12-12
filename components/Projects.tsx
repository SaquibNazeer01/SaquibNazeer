
import React, { useState, useRef } from 'react';
import { ExternalLink, Github, Layers, Cpu, Globe, Terminal, ChevronLeft, ChevronRight } from 'lucide-react';
import { useData } from '../contexts/DataContext';

const Projects: React.FC = () => {
  const { projects } = useData();
  const [filter, setFilter] = useState<'All' | 'AI' | 'Web App' | 'Software' | 'Tool'>('All');
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const filteredProjects = projects.filter(p => filter === 'All' || p.category === filter);

  const categories = [
    { name: 'All', icon: Layers },
    { name: 'AI', icon: Cpu },
    { name: 'Web App', icon: Globe },
    { name: 'Software', icon: Terminal },
    { name: 'Tool', icon: Terminal },
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
        const { current } = scrollContainerRef;
        const scrollAmount = current.clientWidth; // Scroll one full viewport width
        current.scrollBy({
            left: direction === 'left' ? -scrollAmount : scrollAmount,
            behavior: 'smooth'
        });
    }
  };

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-background transition-colors duration-500">
      <style>{`
          .hide-scrollbar::-webkit-scrollbar {
            display: none;
          }
      `}</style>

      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-600/10 blur-[100px] -z-10" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-fuchsia-600/10 blur-[100px] -z-10" />

      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center mb-12 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-500 to-secondary animate-pulse">
              Project Access
            </span>
          </h2>
          <p className="text-muted max-w-2xl text-center font-light text-lg">
            Swipe or slide to explore deployments, experiments, and systems.
          </p>
          
          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mt-8 bg-surface/50 p-1 rounded-full border border-muted/10 backdrop-blur-sm relative z-20">
            {categories.map((cat) => {
              const Icon = cat.icon;
              return (
                <button
                  key={cat.name}
                  onClick={() => {
                      setFilter(cat.name as any);
                      // Reset scroll on filter change
                      if (scrollContainerRef.current) scrollContainerRef.current.scrollTo({ left: 0, behavior: 'instant' });
                  }}
                  className={`flex items-center gap-2 px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    filter === cat.name
                      ? 'bg-gradient-to-r from-primary/80 to-blue-600/80 text-white shadow-[0_0_15px_rgb(var(--color-primary)/0.4)]'
                      : 'text-muted hover:text-main hover:bg-background/20'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {cat.name}
                </button>
              );
            })}
          </div>
        </div>

        {/* Slider Container */}
        <div className="relative group/slider">
            
            {/* Left Button */}
            <button 
                onClick={() => scroll('left')}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-8 z-30 p-3 rounded-full bg-surface border border-primary/30 text-primary opacity-0 group-hover/slider:opacity-100 hover:bg-background transition-all duration-300 disabled:opacity-0 shadow-lg cursor-pointer"
                aria-label="Previous Project"
            >
                <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Right Button */}
            <button 
                onClick={() => scroll('right')}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-8 z-30 p-3 rounded-full bg-surface border border-primary/30 text-primary opacity-0 group-hover/slider:opacity-100 hover:bg-background transition-all duration-300 shadow-lg cursor-pointer"
                aria-label="Next Project"
            >
                <ChevronRight className="w-6 h-6" />
            </button>

             {/* Projects Scroll View */}
             <div 
                ref={scrollContainerRef}
                className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory hide-scrollbar px-4 md:px-0"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
                {filteredProjects.map((project, index) => (
                    <div 
                        key={project.id}
                        className="min-w-[300px] md:min-w-[350px] lg:min-w-[400px] snap-center bg-surface border border-muted/20 rounded-xl overflow-hidden group hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgb(var(--color-primary)/0.15)] flex flex-col"
                    >
                        {/* Image */}
                        <div className="relative h-48 overflow-hidden">
                            <img 
                                src={project.imageUrl} 
                                alt={project.title} 
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent opacity-80" />
                            
                            {/* Category Badge */}
                            <div className="absolute top-3 right-3 px-2 py-1 bg-surface/80 backdrop-blur-md rounded border border-primary/20 text-[10px] font-bold text-primary uppercase tracking-widest">
                                {project.category}
                            </div>
                        </div>

                        {/* Content */}
                        <div className="p-5 flex-1 flex flex-col">
                            <h3 className="text-xl font-bold text-main mb-2 font-orbitron group-hover:text-primary transition-colors">
                                {project.title}
                            </h3>
                            <p className="text-muted text-sm leading-relaxed mb-4 flex-1 line-clamp-3">
                                {project.description}
                            </p>

                            {/* Tech Stack */}
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.technologies.slice(0, 3).map((tech, i) => (
                                    <span key={i} className="text-[10px] px-2 py-1 rounded bg-primary/5 text-primary border border-primary/10 font-mono">
                                        {tech}
                                    </span>
                                ))}
                                {project.technologies.length > 3 && (
                                    <span className="text-[10px] px-2 py-1 rounded bg-muted/10 text-muted font-mono">
                                        +{project.technologies.length - 3}
                                    </span>
                                )}
                            </div>

                            {/* Link */}
                            <a 
                                href={project.link} 
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-auto flex items-center justify-between text-sm font-bold text-muted hover:text-primary transition-colors group/link"
                            >
                                <span>VIEW PROJECT</span>
                                <ExternalLink className="w-4 h-4 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                            </a>
                        </div>
                    </div>
                ))}
                
                 {filteredProjects.length === 0 && (
                  <div className="w-full flex justify-center py-10">
                    <p className="text-muted italic">No projects found in this category.</p>
                  </div>
                )}
            </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
