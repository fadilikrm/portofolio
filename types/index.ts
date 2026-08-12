export type ProjectCategory =
  | 'Web Development'
  | 'Mobile Development'
  | 'AI & Computer Vision'
  | 'IoT / Embedded System';

export interface ProjectMetric {
  label: string;
  value: string;
}

export interface Project {
  id: string;
  title: string;
  slug: string;
  summary: string;
  description: string;
  category: ProjectCategory;
  thumbnailUrl: string;
  featured: boolean;
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
  metrics?: ProjectMetric[];
  createdAt: string;
}

export type ExperienceType = 'Work' | 'Competition' | 'Education';

export interface Experience {
  id: string;
  role: string;
  organization: string;
  period: string;
  type: ExperienceType;
  location?: string;
  description: string[];
  achievements?: string[];
  tags: string[];
}

export type SkillCategory =
  | 'Web Development'
  | 'Mobile Development'
  | 'AI & Computer Vision'
  | 'IoT / Embedded System'
  | 'Tools & DevSecOps';

export interface Skill {
  name: string;
  category: SkillCategory;
  iconName?: string;
}

export interface SocialLink {
  platform: 'github' | 'linkedin' | 'email' | 'twitter' | 'instagram';
  url: string;
}

export interface SiteConfig {
  name: string;
  title: string;
  description: string;
  url: string;
  ogImage: string;
  avatar?: string;
  socials: SocialLink[];
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  honeypot?: string;
}
