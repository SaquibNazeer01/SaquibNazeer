
export interface Project {
  id: string;
  title: string;
  description: string;
  whatIsIt?: string;
  howItWorks?: string;
  problemSolved?: string;
  technologies: string[];
  imageUrl: string;
  videoUrl?: string;
  comingSoon?: boolean;
  link: string;
  githubUrl?: string;
  metrics?: string;
  highlights?: string[];
  featured?: boolean;
  category: 'AI' | 'Web App' | 'Software' | 'Tool';
}

export type SkillCategory = 'Languages' | 'Web Development' | 'Database' | 'DevOps & Tools' | 'AI & ML';

export interface Skill {
  name: string;
  level: number; // 0 to 100
  category: SkillCategory;
  icon?: string;
  tag?: string;
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
  type?: 'experience' | 'achievement';
  badge?: string;
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

