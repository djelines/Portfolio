export interface Project {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
  type: 'Web' | 'Mobile' | 'Game' | 'AI';
  date: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string[];
}

export interface Education {
  school: string;
  degree: string;
  period: string;
  location: string;
  description: string[];
}

export interface Skill {
  category: string;
  items: string[];
}

export interface SoftSkill {
  title: string;
  icon?: string;
  color: string;
  rotation: string;
}