
export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  link: string;
  featured?: boolean;
  category: 'AI' | 'Web App' | 'Software' | 'Tool';
}

export type SkillCategory = 'Languages' | 'Web Development' | 'Database' | 'DevOps & Tools' | 'AI & ML';

export interface Skill {
  name: string;
  level: number; // 0 to 100
  category: SkillCategory;
  icon?: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  skills: string[];
}

export interface Education {
  degree: string;
  institution: string;
  year: string;
  description: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: any; // Lucide icon component
  color?: string;
}
