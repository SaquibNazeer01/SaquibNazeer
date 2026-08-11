
import React, { createContext, useContext, useState, useEffect } from 'react';
import { Project, Skill, Experience } from '../types';
import { PROJECTS as DEFAULT_PROJECTS, SKILLS as DEFAULT_SKILLS, EXPERIENCE as DEFAULT_EXPERIENCE, DATA_VERSION } from '../constants';

interface DataContextType {
  projects: Project[];
  skills: Skill[];
  experience: Experience[];
  updateProject: (project: Project) => void;
  addProject: (project: Project) => void;
  deleteProject: (id: string) => void;
  updateSkill: (skill: Skill, index: number) => void;
  addSkill: (skill: Skill) => void;
  deleteSkill: (index: number) => void;
  resetData: () => void;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [skills, setSkills] = useState<Skill[]>([]);
  const [experience, setExperience] = useState<Experience[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load from Local Storage on Mount
  useEffect(() => {
    const loadData = () => {
      const storedVersion = localStorage.getItem('nexus_data_version');
      const shouldUseStored = storedVersion === DATA_VERSION;

      const storedProjects = shouldUseStored ? localStorage.getItem('nexus_projects') : null;
      const storedSkills = shouldUseStored ? localStorage.getItem('nexus_skills') : null;
      const storedExperience = shouldUseStored ? localStorage.getItem('nexus_experience') : null;

      try {
        if (storedProjects) setProjects(JSON.parse(storedProjects));
        else setProjects(DEFAULT_PROJECTS);
      } catch {
        setProjects(DEFAULT_PROJECTS);
      }

      try {
        if (storedSkills) setSkills(JSON.parse(storedSkills));
        else setSkills(DEFAULT_SKILLS);
      } catch {
        setSkills(DEFAULT_SKILLS);
      }

      try {
        if (storedExperience) setExperience(JSON.parse(storedExperience));
        else setExperience(DEFAULT_EXPERIENCE);
      } catch {
        setExperience(DEFAULT_EXPERIENCE);
      }

      setIsLoaded(true);
    };
    loadData();
  }, []);

  // Save to Local Storage whenever data changes (skip initial load)
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem('nexus_data_version', DATA_VERSION);
      localStorage.setItem('nexus_projects', JSON.stringify(projects));
      localStorage.setItem('nexus_skills', JSON.stringify(skills));
      localStorage.setItem('nexus_experience', JSON.stringify(experience));
    }
  }, [projects, skills, experience, isLoaded]);

  const updateProject = (updatedProject: Project) => {
    setProjects(prev => prev.map(p => p.id === updatedProject.id ? updatedProject : p));
  };

  const addProject = (project: Project) => {
    setProjects(prev => [project, ...prev]);
  };

  const deleteProject = (id: string) => {
    setProjects(prev => prev.filter(p => p.id !== id));
  };

  const updateSkill = (updatedSkill: Skill, index: number) => {
    setSkills(prev => prev.map((s, i) => i === index ? updatedSkill : s));
  };

  const addSkill = (skill: Skill) => {
    setSkills(prev => [...prev, skill]);
  };

  const deleteSkill = (index: number) => {
    setSkills(prev => prev.filter((_, i) => i !== index));
  };

  const resetData = () => {
    setProjects(DEFAULT_PROJECTS);
    setSkills(DEFAULT_SKILLS);
    setExperience(DEFAULT_EXPERIENCE);
    localStorage.removeItem('nexus_data_version');
    localStorage.removeItem('nexus_projects');
    localStorage.removeItem('nexus_skills');
    localStorage.removeItem('nexus_experience');
  };

  return (
    <DataContext.Provider value={{ 
      projects, skills, experience, 
      updateProject, addProject, deleteProject,
      updateSkill, addSkill, deleteSkill,
      resetData
    }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  const context = useContext(DataContext);
  if (context === undefined) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
};
