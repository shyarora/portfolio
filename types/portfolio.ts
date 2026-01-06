// Portfolio Data Types

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface HeroData {
  name: string;
  title: string;
  subtitle: string;
  tagline: string;
  socialLinks: SocialLink[];
  resumeUrl?: string;
}

export interface Skill {
  name: string;
  icon: string;
  proficiency: number;
}

export interface SkillCategory {
  category: string;
  icon: string;
  skills: string[];
}

export interface Stat {
  value: string;
  label: string;
}

export interface AboutData {
  summary: string;
  description: string[];
  skillCategories: SkillCategory[];
  stats: Stat[];
  profileImage?: string;
}

export interface ExperienceItem {
  id: string;
  title: string;
  company: string;
  companyLogo?: string;
  location: string;
  period: string;
  type: "full-time" | "contract" | "internship";
  current: boolean;
  description: string[];
  technologies: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  image?: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  category: string;
}

export interface ContactInfo {
  email: string;
  location: string;
  availability: string;
  socialLinks: SocialLink[];
}

export interface PortfolioData {
  hero: HeroData;
  about: AboutData;
  experiences: ExperienceItem[];
  projects: Project[];
  contact: ContactInfo;
}
