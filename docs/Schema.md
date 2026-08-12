# Schema.md - Data Structure Definitions

## 1. Project Schema

```typescript
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
```

## 2. Experience Schema

```typescript
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
```

## 3. Skill Schema

```typescript
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
```

## 4. Site Config Schema

```typescript
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
  socials: SocialLink[];
}
```

## 5. Contact Form Validation Schema (v1.1)

```typescript
import { z } from 'zod';

export const contactFormSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  subject: z.string().min(3).max(150),
  message: z.string().min(10).max(2000),
  honeypot: z.string().max(0).optional(),
});

export type ContactFormInput = z.infer<typeof contactFormSchema>;
```
