import type { SiteConfig } from '@/types';

export const siteConfig: SiteConfig = {
  name: 'Fadil',
  title: 'Fadil | Full-Stack Web & Mobile Developer',
  description: 'Portofolio profesional Fadil — Developer aplikasi web dan mobile (Kotlin) dengan pengalaman di bidang AI, Computer Vision, serta IoT / Embedded System.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://fadil-portfolio.vercel.app',
  ogImage: '/og-default.png',
  avatar: '/avatar.png',
  socials: [
    {
      platform: 'email',
      url: 'mailto:fadil.dev@example.com',
    },
    {
      platform: 'linkedin',
      url: 'https://linkedin.com/in/fadil-dev',
    },
    {
      platform: 'github',
      url: 'https://github.com/fadil-dev',
    },
    {
      platform: 'twitter',
      url: 'https://twitter.com/fadil_dev',
    },
  ],
};
