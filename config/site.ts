import type { SiteConfig } from '@/types';

export const siteConfig: SiteConfig = {
  name: 'Fadil',
  title: 'Fadil | Full-Stack Web & Mobile Developer',
  description: 'Portofolio profesional Fadil — Developer aplikasi web dan mobile (Kotlin) dengan pengalaman di bidang AI, Computer Vision, serta IoT / Embedded System.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://fadil-portfolio.vercel.app',
  ogImage: '/og-default.png',
  avatar: '/avatar.png',
  resume: {
    id: '/resume/resume-id.pdf',
    en: '/resume/resume-en.pdf',
  },
  socials: [
    {
      platform: 'email',
      url: 'mailto:fadilikram087@gmail.com',
    },
    {
      platform: 'linkedin',
      url: 'https://www.linkedin.com/in/ahmad-fadhil-ikram',
    },
    {
      platform: 'github',
      url: 'https://github.com/fadilikrm',
    },
  ],
};
