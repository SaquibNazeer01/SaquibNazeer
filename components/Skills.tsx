import React from 'react';
import { SKILLS } from '../constants';
import { SkillCategory } from '../types';
import { Code, Database, Globe, Cpu, Terminal, Sparkles } from 'lucide-react';

const Skills: React.FC = () => {
  const categories: { id: SkillCategory; icon: any }[] = [
    { id: 'Languages', icon: Code },
    { id: 'Web Development', icon: Globe },
    { id: 'Database', icon: Database },
    { id: 'DevOps & Tools', icon: Terminal },
    { id: 'AI & ML', icon: Cpu },
  ];
  
  const getSkillsByCategory = (cat: SkillCategory) => SKILLS.filter(s => s.category === cat);

  return (
    <section id="skills" className="py-20 relative bg-background transition-colors duration-500">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-4 backdrop-blur-sm">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-xs font-bold text-primary tracking-widest uppercase">Proficiency Modules</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-main text-center font-orbitron tracking-tight mb-2">
                Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Matrix</span>
            </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {categories.map((cat, index) => {
            const categorySkills = getSkillsByCategory(cat.id);
            const Icon = cat.icon;
            if (categorySkills.length === 0) return null;

            return (
              <div 
                key={cat.id} 
                className="group relative bg-surface border border-muted/20 rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_20px_rgb(var(--color-primary)/0.15)] flex flex-col"
              >
                 {/* Header */}
                 <div className="p-3 border-b border-muted/10 bg-muted/5 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className={`p-1.5 rounded-lg bg-gradient-to-br from-primary/10 to-transparent border border-primary/20 text-primary`}>
                            <Icon className="w-4 h-4" />
                        </div>
                        <h3 className="font-orbitron font-bold text-sm text-main tracking-wide">{cat.id}</h3>
                    </div>
                    <div className="text-[10px] font-mono text-muted/50 uppercase tracking-widest">
                        {categorySkills.length} Modules
                    </div>
                 </div>

                 {/* Skills Grid - Compact 2 Column Layout */}
                 <div className="p-3 grid grid-cols-2 gap-2 bg-surface/50 backdrop-blur-sm h-full content-start">
                    {categorySkills.map((skill, idx) => (
                        <div key={idx} className="relative p-2 rounded-lg border border-muted/10 hover:border-primary/30 bg-background/40 hover:bg-background transition-all group/skill">
                            <div className="flex justify-between items-center mb-1.5">
                                <span className="text-xs font-medium text-main/90 truncate pr-2">{skill.name}</span>
                                <span className="text-[10px] font-mono text-primary opacity-70 group-hover/skill:opacity-100">{skill.level}%</span>
                            </div>
                            
                            <div className="h-1 w-full bg-muted/20 rounded-full overflow-hidden">
                                <div 
                                    className="h-full bg-gradient-to-r from-primary to-secondary rounded-full transform origin-left scale-x-0 animate-[grow_1s_ease-out_forwards]"
                                    style={{ 
                                        width: `${skill.level}%`,
                                        animationDelay: `${(index * 100) + (idx * 50)}ms`
                                    }}
                                />
                            </div>
                        </div>
                    ))}
                 </div>
              </div>
            );
          })}
        </div>
      </div>
      
      <style>{`
        @keyframes grow {
            from { transform: scaleX(0); }
            to { transform: scaleX(1); }
        }
      `}</style>
    </section>
  );
};

export default Skills;