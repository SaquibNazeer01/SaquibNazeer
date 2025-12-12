
import React, { useState } from 'react';
import { Lock, Unlock, Plus, Trash2, Save, RefreshCw, X, ArrowLeft } from 'lucide-react';
import { useData } from '../contexts/DataContext';
import { Project, Skill, SkillCategory } from '../types';

interface AdminProps {
  onExit: () => void;
}

const Admin: React.FC<AdminProps> = ({ onExit }) => {
  const { 
    projects, addProject, updateProject, deleteProject,
    skills, addSkill, updateSkill, deleteSkill,
    resetData 
  } = useData();

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [activeTab, setActiveTab] = useState<'projects' | 'skills'>('projects');
  
  // Edit States
  const [editingProject, setEditingProject] = useState<Project | null>(null);
  const [isAddingProject, setIsAddingProject] = useState(false);
  
  // Simple auth check (In real app, use backend)
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'Bhat@019') { // Default password for demo
      setIsAuthenticated(true);
    } else {
      alert('Access Denied: Invalid Credentials');
    }
  };

  // --- Renderers ---

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen pt-24 pb-12 bg-background flex items-center justify-center">
        <div className="bg-surface border border-primary/30 p-8 rounded-2xl shadow-[0_0_50px_rgb(var(--color-primary)/0.2)] max-w-md w-full relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary" />
          
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 border border-primary/30">
              <Lock className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-2xl font-bold text-main font-orbitron">System Locked</h2>
            <p className="text-muted text-sm mt-2">Enter override sequence to access command core.</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter Passkey "
                className="w-full bg-background border border-muted/20 px-4 py-3 rounded-lg text-main focus:border-primary focus:outline-none font-mono text-center"
              />
            </div>
            <button type="submit" className="w-full bg-primary hover:bg-primary/80 text-white font-bold py-3 rounded-lg transition-all uppercase tracking-widest shadow-lg">
              Unlock
            </button>
            <button type="button" onClick={onExit} className="w-full text-muted hover:text-main text-sm mt-2">
              Return to Public View
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-12 bg-background animate-in fade-in">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <div className="flex items-center gap-4">
            <button onClick={onExit} className="p-2 bg-surface border border-muted/20 rounded-full hover:border-primary text-muted hover:text-primary transition-colors">
              <ArrowLeft className="w-5 h-5" />
            </button>
            <div>
              <h1 className="text-3xl font-bold text-main font-orbitron flex items-center gap-2">
                Command <span className="text-primary">Center</span>
                <Unlock className="w-5 h-5 text-green-500" />
              </h1>
              <p className="text-xs text-muted font-mono">ADMIN PRIVILEGES: ACTIVE</p>
            </div>
          </div>
          
          <div className="flex gap-4">
            <button 
              onClick={() => {
                if(window.confirm('Reset all data to default factory settings? This cannot be undone.')) resetData();
              }}
              className="flex items-center gap-2 px-4 py-2 bg-red-500/10 text-red-400 border border-red-500/30 rounded-lg hover:bg-red-500/20 transition-colors"
            >
              <RefreshCw className="w-4 h-4" />
              Reset Defaults
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-4 mb-8 border-b border-muted/20 pb-1">
          <button 
            onClick={() => setActiveTab('projects')}
            className={`px-6 py-2 font-bold tracking-wide transition-all border-b-2 ${activeTab === 'projects' ? 'border-primary text-primary' : 'border-transparent text-muted hover:text-main'}`}
          >
            PROJECTS
          </button>
          <button 
            onClick={() => setActiveTab('skills')}
            className={`px-6 py-2 font-bold tracking-wide transition-all border-b-2 ${activeTab === 'skills' ? 'border-primary text-primary' : 'border-transparent text-muted hover:text-main'}`}
          >
            SKILLS
          </button>
        </div>

        {/* Content Area */}
        <div className="bg-surface border border-muted/10 rounded-2xl p-6 min-h-[500px]">
          
          {/* PROJECTS TAB */}
          {activeTab === 'projects' && (
            <div className="space-y-6">
               <div className="flex justify-between items-center">
                 <h3 className="text-xl font-bold text-main">Manage Projects</h3>
                 <button 
                   onClick={() => {
                     setEditingProject({
                       id: Date.now().toString(),
                       title: '',
                       description: '',
                       technologies: [],
                       imageUrl: '',
                       link: '',
                       category: 'Web App'
                     });
                     setIsAddingProject(true);
                   }}
                   className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/80 transition-all"
                 >
                   <Plus className="w-4 h-4" /> Add Project
                 </button>
               </div>

               {/* Project List */}
               <div className="grid gap-4">
                 {(isAddingProject && editingProject) && (
                    <ProjectForm 
                      project={editingProject} 
                      onSave={(p) => { addProject(p); setIsAddingProject(false); setEditingProject(null); }}
                      onCancel={() => { setIsAddingProject(false); setEditingProject(null); }}
                    />
                 )}

                 {projects.map(project => (
                   <div key={project.id}>
                     {editingProject?.id === project.id && !isAddingProject ? (
                        <ProjectForm 
                          project={editingProject} 
                          onSave={(p) => { updateProject(p); setEditingProject(null); }}
                          onCancel={() => setEditingProject(null)}
                        />
                     ) : (
                       <div className="flex items-center justify-between p-4 bg-background border border-muted/10 rounded-xl hover:border-primary/30 transition-all">
                         <div className="flex items-center gap-4">
                           <img src={project.imageUrl} alt={project.title} className="w-16 h-16 rounded-lg object-cover" />
                           <div>
                             <h4 className="font-bold text-main">{project.title}</h4>
                             <p className="text-xs text-muted">{project.category} • {project.technologies.join(', ')}</p>
                           </div>
                         </div>
                         <div className="flex gap-2">
                           <button onClick={() => setEditingProject(project)} className="p-2 hover:bg-blue-500/10 text-blue-400 rounded-lg">Edit</button>
                           <button onClick={() => deleteProject(project.id)} className="p-2 hover:bg-red-500/10 text-red-400 rounded-lg"><Trash2 className="w-4 h-4"/></button>
                         </div>
                       </div>
                     )}
                   </div>
                 ))}
               </div>
            </div>
          )}

          {/* SKILLS TAB */}
          {activeTab === 'skills' && (
            <div className="space-y-6">
               <div className="flex justify-between items-center">
                 <h3 className="text-xl font-bold text-main">Manage Skills</h3>
                 <button 
                    onClick={() => addSkill({ name: 'New Skill', level: 50, category: 'Web Development' })}
                    className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/80 transition-all"
                 >
                   <Plus className="w-4 h-4" /> Add Skill
                 </button>
               </div>
               
               <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                 {skills.map((skill, idx) => (
                   <div key={idx} className="p-4 bg-background border border-muted/10 rounded-xl space-y-3">
                     <div className="flex justify-between">
                        <input 
                          value={skill.name}
                          onChange={(e) => updateSkill({ ...skill, name: e.target.value }, idx)}
                          className="bg-transparent border-b border-transparent focus:border-primary focus:outline-none font-bold text-main w-full"
                        />
                        <button onClick={() => deleteSkill(idx)} className="text-red-400 hover:text-red-300"><Trash2 className="w-4 h-4" /></button>
                     </div>
                     
                     <div className="flex items-center gap-2">
                        <span className="text-xs text-muted">Lvl:</span>
                        <input 
                          type="range" min="0" max="100" 
                          value={skill.level}
                          onChange={(e) => updateSkill({ ...skill, level: parseInt(e.target.value) }, idx)}
                          className="flex-1 accent-primary"
                        />
                        <span className="text-xs font-mono text-primary">{skill.level}%</span>
                     </div>

                     <select 
                       value={skill.category}
                       onChange={(e) => updateSkill({ ...skill, category: e.target.value as SkillCategory }, idx)}
                       className="w-full bg-surface border border-muted/20 rounded px-2 py-1 text-xs text-muted focus:border-primary focus:outline-none"
                     >
                       <option value="Languages">Languages</option>
                       <option value="Web Development">Web Development</option>
                       <option value="Database">Database</option>
                       <option value="DevOps & Tools">DevOps & Tools</option>
                       <option value="AI & ML">AI & ML</option>
                     </select>
                   </div>
                 ))}
               </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

const ProjectForm: React.FC<{ project: Project, onSave: (p: Project) => void, onCancel: () => void }> = ({ project, onSave, onCancel }) => {
  const [formData, setFormData] = useState(project);

  return (
    <div className="p-6 bg-surface border-2 border-primary/20 rounded-xl space-y-4 animate-in zoom-in-95 duration-200">
      <h4 className="font-bold text-primary">Edit Project Details</h4>
      
      <div className="grid md:grid-cols-2 gap-4">
        <input 
          placeholder="Title" 
          value={formData.title} 
          onChange={e => setFormData({...formData, title: e.target.value})}
          className="bg-background border border-muted/20 rounded px-3 py-2 text-main focus:border-primary focus:outline-none"
        />
        <select 
          value={formData.category}
          onChange={e => setFormData({...formData, category: e.target.value as any})}
          className="bg-background border border-muted/20 rounded px-3 py-2 text-main focus:border-primary focus:outline-none"
        >
          <option value="Web App">Web App</option>
          <option value="AI">AI</option>
          <option value="Software">Software</option>
          <option value="Tool">Tool</option>
        </select>
      </div>

      <input 
        placeholder="Image URL" 
        value={formData.imageUrl} 
        onChange={e => setFormData({...formData, imageUrl: e.target.value})}
        className="w-full bg-background border border-muted/20 rounded px-3 py-2 text-main focus:border-primary focus:outline-none"
      />

      <input 
        placeholder="Technologies (comma separated)" 
        value={formData.technologies.join(', ')} 
        onChange={e => setFormData({...formData, technologies: e.target.value.split(',').map(s => s.trim())})}
        className="w-full bg-background border border-muted/20 rounded px-3 py-2 text-main focus:border-primary focus:outline-none"
      />

      <textarea 
        placeholder="Description" 
        value={formData.description} 
        onChange={e => setFormData({...formData, description: e.target.value})}
        rows={3}
        className="w-full bg-background border border-muted/20 rounded px-3 py-2 text-main focus:border-primary focus:outline-none"
      />

      <div className="flex justify-end gap-2">
        <button onClick={onCancel} className="px-4 py-2 text-muted hover:text-main">Cancel</button>
        <button onClick={() => onSave(formData)} className="px-4 py-2 bg-primary text-white rounded hover:bg-primary/80 flex items-center gap-2">
          <Save className="w-4 h-4" /> Save Project
        </button>
      </div>
    </div>
  );
};

export default Admin;
