# Architecture.md - Technical Architecture & Infrastructure

## 1. Tech Stack Overview

| Layer | Technology | Purpose |
|---|---|---|
| **Framework** | Next.js 15 (App Router) | Server-Side Rendering (SSR) & Static Site Generation (SSG). |
| **Language** | TypeScript 5.x (Strict Mode) | Type safety statis pada seluruh basis kode. |
| **Styling** | Tailwind CSS v4 + Class Variance Authority | Atomic styling dan pengelolaan varian komponen. |
| **UI Components** | shadcn/ui + Aceternity UI | Komponen antarmuka modular dan efek visual interaktif. |
| **Animation** | Motion + Lenis | Transisi elemen dan kontrol smooth scrolling global. |
| **Icons** | Lucide React | Library ikon vektor. |
| **Data Source** | Static Config (`config/*.ts`) | Penyimpanan data statis tanpa dependency database. |
| **Deployment** | Vercel Edge Network | Infrastructure CI/CD otomatis berbasis Git. |

## 2. Directory Structure Blueprint

```
portfolio/
├── app/
│   ├── layout.tsx              # Global Layout & Metadata
│   ├── page.tsx                # Main Landing Page
│   ├── projects/
│   │   └── [slug]/
│   │       └── page.tsx        # Project Detail Page
│   ├── sitemap.ts              # Automated Sitemap Generator
│   ├── robots.ts               # Automated Robots.txt
│   └── not-found.tsx           # Custom 404 Page
├── components/
│   ├── ui/                     # Primitive UI Components
│   ├── animated/               # Motion & Visual Effects
│   ├── sections/                # Page Sections (Hero, Bento, Timeline)
│   ├── footer.tsx                # Footer Navigation
│   └── navbar.tsx               # Header Navigation
├── config/
│   ├── site.ts                  # Global Site Metadata & Social Links
│   ├── projects.ts              # Structured Project Data
│   ├── experience.ts            # Structured Experience Data
│   └── skills.ts                 # Skill Category Data
├── lib/
│   ├── utils.ts                  # Class merger utility (cn)
│   └── animations.ts             # Centralized Motion Variants
├── types/
│   └── index.ts                 # Global TypeScript Interfaces
├── public/                        # Static Assets & Images
└── styles/
    └── globals.css                 # Global CSS Variables & Fonts
```

## 3. Data Flow Architecture

### Static Data Architecture
- Seluruh data proyek, pengalaman, dan keahlian disimpan secara lokal di `config/projects.ts`, `config/experience.ts`, dan `config/skills.ts`.
- Proses rendering memanfaatkan Static Site Generation (SSG) dengan fungsi `generateStaticParams()` pada build time.

### Contact Handling Architecture
- Versi 1.0 menggunakan tautan protokol `mailto:` dan tautan profil sosial media langsung pada komponen Footer.
- Arsitektur v1.1 memproses input form via Server Action `/api/send` dengan validasi Zod dan pengiriman via Resend API.

## 4. Rendering Strategy

| Path | Strategy | Description |
|---|---|---|
| `/` | SSG (Build Time) | Pre-rendered halaman utama. |
| `/projects/[slug]` | SSG (`generateStaticParams`) | Pre-rendered halaman detail berdasarkan slug proyek. |
| `sitemap.ts` / `robots.ts` | Dynamic Generator | Generasi otomatis dari berkas konfigurasi statis. |

## 5. Environment Variables

```
NEXT_PUBLIC_SITE_URL=https://domain.com
```

Variabel tanpa awalan `NEXT_PUBLIC_` dialokasikan secara eksklusif untuk eksekusi server-side pada pembaruan v1.1.

## 6. Performance & Optimization Strategy

- **Images:** Optimasi otomatis WebP/AVIF dan lazy loading menggunakan `next/image`.
- **Typography:** Self-hosting font via `next/font` untuk eliminasi pemanggilan skrip eksternal.
- **Dynamic Imports:** Komponen animasi berat di-load menggunakan `next/dynamic` dengan konfigurasi `{ ssr: false }`.
- **Scrolling:** Inisialisasi Lenis Smooth Scroll pada root layout.

## 7. Deployment & CI/CD

1. Repository terhubung ke Vercel platform.
2. Push ke branch `main` memicu automated build dan SSG.
3. Preview Deployment dibuat otomatis untuk setiap Pull Request.
