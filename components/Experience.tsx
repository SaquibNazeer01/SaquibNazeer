import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';
import { EXPERIENCE } from '../constants';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-background transition-colors duration-500">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-main text-center">
            Mission <span className="text-primary">Log</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative space-y-12">
            {/* Vertical Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/0 via-primary/50 to-primary/0"></div>

            {EXPERIENCE.map((exp, index) => (
              <div key={exp.id} className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-background border-2 border-primary rounded-full -translate-x-1/2 md:-translate-x-[9px] mt-6 z-10 shadow-[0_0_10px_rgb(var(--color-primary))]">
                  <div className="absolute inset-0 bg-primary/50 animate-ping rounded-full"></div>
                </div>

                {/* Content Card */}
                <div className="ml-12 md:ml-0 md:w-1/2">
                   <div className={`relative p-6 bg-surface/50 border border-muted/10 rounded-xl hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgb(var(--color-primary)/0.1)] group ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                      {/* Decorative Corner */}
                      <div className={`absolute top-0 w-8 h-8 border-t-2 border-primary/50 transition-all duration-300 ${index % 2 === 0 ? 'left-0 border-l-2 rounded-tl-xl' : 'right-0 border-r-2 rounded-tr-xl'}`} />
                      
                      <div className={`flex flex-col gap-2 mb-4 ${index % 2 === 0 ? 'md:items-start' : 'md:items-end'}`}>
                        <h3 className="text-xl font-bold text-main group-hover:text-primary transition-colors">{exp.role}</h3>
                        <div className="flex items-center gap-2 text-secondary font-mono text-sm">
                          <Briefcase className="w-4 h-4" />
                          <span>{exp.company}</span>
                        </div>
                        <div className="flex items-center gap-2 text-muted text-xs font-mono bg-background px-2 py-1 rounded border border-muted/20">
                          <Calendar className="w-3 h-3" />
                          <span>{exp.period}</span>
                        </div>
                      </div>

                      <p className="text-muted text-sm leading-relaxed mb-4">
                        {exp.description}
                      </p>

                      <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                        {exp.skills.map((skill, idx) => (
                          <span key={idx} className="px-2 py-1 text-[10px] uppercase tracking-wider font-bold text-primary bg-primary/10 rounded-sm border border-primary/20">
                            {skill}
                          </span>
                        ))}
                      </div>
                   </div>
                </div>
                
                {/* Empty Space for Timeline Alignment */}
                <div className="hidden md:block md:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;