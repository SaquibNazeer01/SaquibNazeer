import React from 'react';
import { 
  SiHackerrank, SiLeetcode, SiYoutube,
  SiPython, SiJavascript, SiTypescript, SiReact, SiNextdotjs, 
  SiNodedotjs, SiPhp, SiTailwindcss, SiHtml5, SiCss3,
  SiC, SiCplusplus, SiDotnet, SiOpenjdk, SiMysql, SiMongodb, SiPostgresql, 
  SiSqlite, SiDocker, SiGit, SiGithub, SiVscodium, 
  SiJupyter, SiEclipseide, SiOpencv, SiTensorflow, SiKeras, 
  SiOpenai, SiGooglegemini, SiPandas, SiNumpy
} from 'react-icons/si';
import { Cpu, Terminal, Database, Code2, Globe, Sparkles, Brain } from 'lucide-react';

export const LeetCodeIcon = ({ className = 'w-5 h-5' }: { className?: string }) => (
  <SiLeetcode className={className} aria-hidden="true" focusable={false} />
);

export const HackerRankIcon = ({ className = 'w-5 h-5' }: { className?: string }) => (
  <SiHackerrank className={className} aria-hidden="true" focusable={false} />
);

export const YouTubeIcon = ({ className = 'w-5 h-5' }: { className?: string }) => (
  <SiYoutube className={className} aria-hidden="true" focusable={false} />
);

// Tech Brand Logos Map with Authentic Brand Color Accents
export interface TechMeta {
  Icon: React.ElementType;
  color: string; // brand color
  bgColor: string; // container background tint
}

export const getTechMeta = (name: string): TechMeta => {
  const n = (name || '').toLowerCase();

  if (n.includes('python')) return { Icon: SiPython, color: '#3776AB', bgColor: 'rgba(55, 118, 171, 0.15)' };
  if (n.includes('typescript')) return { Icon: SiTypescript, color: '#3178C6', bgColor: 'rgba(49, 120, 198, 0.15)' };
  if (n.includes('javascript')) return { Icon: SiJavascript, color: '#F7DF1E', bgColor: 'rgba(247, 223, 30, 0.15)' };
  if (n.includes('react') || n.includes('next')) return { Icon: SiReact, color: '#61DAFB', bgColor: 'rgba(97, 218, 251, 0.15)' };
  if (n.includes('node')) return { Icon: SiNodedotjs, color: '#5FA04E', bgColor: 'rgba(95, 160, 78, 0.15)' };
  if (n.includes('php')) return { Icon: SiPhp, color: '#777BB4', bgColor: 'rgba(119, 123, 180, 0.15)' };
  if (n.includes('tailwind')) return { Icon: SiTailwindcss, color: '#06B6D4', bgColor: 'rgba(6, 182, 212, 0.15)' };
  if (n.includes('html')) return { Icon: SiHtml5, color: '#E34F26', bgColor: 'rgba(227, 79, 38, 0.15)' };
  if (n.includes('css')) return { Icon: SiCss3, color: '#1572B6', bgColor: 'rgba(21, 114, 182, 0.15)' };
  
  if (n.includes('c#') || n.includes('csharp') || n.includes('.net')) return { Icon: SiDotnet, color: '#512BD4', bgColor: 'rgba(81, 43, 212, 0.15)' };
  if (n.includes('c++') || n.includes('cpp')) return { Icon: SiCplusplus, color: '#00599C', bgColor: 'rgba(0, 89, 156, 0.15)' };
  if (n === 'c' || n.startsWith('c ')) return { Icon: SiC, color: '#A8B9CC', bgColor: 'rgba(168, 185, 204, 0.15)' };
  if (n.includes('java')) return { Icon: SiOpenjdk, color: '#ED8B00', bgColor: 'rgba(237, 139, 0, 0.15)' };

  if (n.includes('mysql')) return { Icon: SiMysql, color: '#4479A1', bgColor: 'rgba(68, 121, 161, 0.15)' };
  if (n.includes('mongo')) return { Icon: SiMongodb, color: '#47A248', bgColor: 'rgba(71, 162, 72, 0.15)' };
  if (n.includes('postgres')) return { Icon: SiPostgresql, color: '#4169E1', bgColor: 'rgba(65, 105, 225, 0.15)' };
  if (n.includes('sqlite') || n.includes('sql')) return { Icon: SiSqlite, color: '#003B57', bgColor: 'rgba(0, 59, 87, 0.15)' };

  if (n.includes('docker')) return { Icon: SiDocker, color: '#2496ED', bgColor: 'rgba(36, 150, 237, 0.15)' };
  if (n.includes('github')) return { Icon: SiGithub, color: '#8b949e', bgColor: 'rgba(139, 148, 158, 0.15)' };
  if (n.includes('git')) return { Icon: SiGit, color: '#F05032', bgColor: 'rgba(240, 80, 50, 0.15)' };
  if (n.includes('vscode') || n.includes('vs code') || n.includes('code')) return { Icon: SiVscodium, color: '#007ACC', bgColor: 'rgba(0, 122, 204, 0.15)' };
  if (n.includes('jupyter')) return { Icon: SiJupyter, color: '#F37626', bgColor: 'rgba(243, 118, 38, 0.15)' };
  if (n.includes('eclipse')) return { Icon: SiEclipseide, color: '#2C2255', bgColor: 'rgba(44, 34, 85, 0.15)' };

  if (n.includes('opencv') || n.includes('vision')) return { Icon: SiOpencv, color: '#5C3EE8', bgColor: 'rgba(92, 62, 232, 0.15)' };
  if (n.includes('tensor')) return { Icon: SiTensorflow, color: '#FF6F00', bgColor: 'rgba(255, 111, 0, 0.15)' };
  if (n.includes('keras')) return { Icon: SiKeras, color: '#D00000', bgColor: 'rgba(208, 0, 0, 0.15)' };
  if (n.includes('gemini')) return { Icon: SiGooglegemini, color: '#4E75F6', bgColor: 'rgba(78, 117, 246, 0.15)' };
  if (n.includes('groq') || n.includes('serp')) return { Icon: Sparkles, color: '#10B981', bgColor: 'rgba(16, 185, 129, 0.15)' };
  if (n.includes('openai') || n.includes('ai') || n.includes('ml')) return { Icon: SiOpenai, color: '#10A37F', bgColor: 'rgba(16, 163, 127, 0.15)' };
  if (n.includes('pandas')) return { Icon: SiPandas, color: '#150458', bgColor: 'rgba(21, 4, 88, 0.15)' };
  if (n.includes('numpy')) return { Icon: SiNumpy, color: '#013243', bgColor: 'rgba(1, 50, 67, 0.15)' };

  return { Icon: Terminal, color: '#38BDF8', bgColor: 'rgba(56, 189, 248, 0.15)' };
};

export const TechIcon: React.FC<{ name: string; className?: string; colored?: boolean }> = ({ 
  name, 
  className = 'w-5 h-5', 
  colored = true 
}) => {
  const meta = getTechMeta(name);
  const IconComponent = meta.Icon || Terminal;

  return (
    <IconComponent 
      className={className} 
      style={colored ? { color: meta.color } : undefined}
      aria-hidden="true" 
      focusable={false} 
    />
  );
};
