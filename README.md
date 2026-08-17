<div align="center">

# ⚡ Ahmad Fadhil Ikram — Modern Developer Portfolio

<p align="center">
  <strong>Website Portofolio Profesional Interaktif Berkinerja Tinggi</strong><br>
  Menampilkan keahlian dalam <em>Web Development</em>, <em>Mobile Apps</em>, <em>AI & Computer Vision</em>, serta <em>IoT / Embedded Edge System</em>.
</p>

[![Next.js](https://img.shields.io/badge/Next.js-15.1.7-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Motion](https://img.shields.io/badge/Framer_Motion-12.4-ff69b4?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![Lenis Scroll](https://img.shields.io/badge/Lenis-Smooth_Scroll-green?style=for-the-badge)](https://lenis.darkroom.engineering/)

</div>

---

## 📌 Gambaran Umum

Website portofolio ini dirancang secara modern dengan estetika *dark cyber*, responsif di seluruh perangkat, dan dioptimasi dengan arsitektur **Static Site Generation (SSG)** untuk performa secepat kilat.

Dibangun menggunakan **Next.js 15 (App Router)**, **TypeScript**, **Tailwind CSS v4**, serta **Framer Motion**, portofolio ini berfungsi sebagai representasi visual interaktif dari rekam jejak riset, proyek rekayasa perangkat lunak, dan penghargaan kompetisi nasional.

---

## ✨ Fitur Utama

- **🎯 Interactive Hero Section:**
  - Efek pengetikan dinamis (*typing animation*) dengan gradient emerald.
  - Foto profil cutout dengan pencahayaan ambient glow interaktif.
  - Dropdown unduhan CV/Resume bilingual (Bahasa Indonesia 🇮🇩 & English 🇬🇧).
- **💼 Timeline Pengalaman & Penghargaan:**
  - Pemfilteran instan di sisi klien tanpa reload halaman: **Pekerjaan**, **Penghargaan**, dan **Pendidikan**.
  - Tautan langsung verifikasi riwayat ke profil LinkedIn (Honors, Experience, Education).
- **🚀 Showcase Proyek Unggulan (Bento Grid):**
  - Kartu proyek interaktif dengan animasi hover, metrik performa nyata (FPS, akurasi, dataset), peran, tech stack badges, dan tautan live demo / publikasi paper jurnal.
  - Halaman detail proyek dinamis (`/projects/[slug]`) dengan *generateStaticParams*.
- **🧠 Skills Radar & Spektrum Keahlian:**
  - Pengelompokan 5 spektrum keahlian teknis:
    1. *Web Development*
    2. *Mobile Development (Kotlin)*
    3. *Artificial Intelligence & Computer Vision*
    4. *IoT / Embedded System*
    5. *DevOps & Cloud*
- **🌊 Smooth Scrolling Experience:**
  - Integrasi **Lenis Smooth Scroll** untuk pengalaman navigasi yang sangat halus.
  - Aksesibilitas dengan deteksi preferensi gerak (`prefers-reduced-motion`).
- **🔍 SEO & Metadata Lengkap:**
  - Otomatisasi OpenGraph, Twitter Card, `sitemap.xml`, dan `robots.txt`.

---

## 🛠️ Tech Stack & Ekosistem

| Lapisan | Teknologi |
| :--- | :--- |
| **Framework** | [Next.js 15 (App Router)](https://nextjs.org/) |
| **Bahasa Pemrograman** | [TypeScript](https://www.typescriptlang.org/) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) & Vanilla CSS Variables |
| **Animasi & Interaksi** | [Framer Motion](https://www.framer.com/motion/) |
| **Smooth Scroll** | [Lenis](https://lenis.darkroom.engineering/) |
| **Icons** | [Lucide React](https://lucide.dev/) |
| **Optimasi Gambar** | [Sharp](https://sharp.pixelplumbing.com/) & Next/Image |

---

## 📁 Struktur Direktori

```text
portofolio/
├── app/                      # App Router Pages & Routes
│   ├── projects/[slug]/      # Dynamic Project Detail Pages (SSG)
│   ├── layout.tsx            # Root Layout, Metadata & Providers
│   ├── page.tsx              # Homepage
│   ├── robots.ts             # Robots.txt Generator
│   ├── sitemap.ts            # Sitemap.xml Generator
│   └── icon.svg              # Dynamic Favicon & Web App Icon
├── components/               # Reusable React Components
│   ├── animated/             # Animated Cards & Interactive Elements
│   ├── providers/            # Smooth Scroll (Lenis) Provider
│   ├── sections/             # Main Sections (Hero, BentoGrid, Timeline, SkillsRadar)
│   ├── navbar.tsx            # Glassmorphism Sticky Navigation Bar
│   └── footer.tsx            # Footer with Social Links
├── config/                   # Centralized Configuration & Data Sources
│   ├── experience.ts         # Experience, Awards & Education Data
│   ├── projects.ts           # Featured Projects & Metrics Data
│   ├── site.ts               # Site Metadata, URLs & Social Links
│   └── skills.ts             # Technical Skills & Categories
├── public/                   # Static Assets (Images, Project Thumbnails, Resumes)
│   ├── project/              # Project Screenshots & Mockups
│   └── resume/               # PDF Resumes (ID & EN)
├── styles/                   # Global CSS & Tailwind Configurations
└── types/                    # TypeScript Type Definitions
```

---

## 🚀 Panduan Memulai (*Getting Started*)

### 1. Prasyarat
Pastikan Anda telah menginstal **Node.js** (versi 18.18+ atau versi 20+ disarankan) dan package manager (`npm`, `pnpm`, atau `yarn`).

### 2. Kloning Repository
```bash
git clone https://github.com/fadilikrm/portofolio.git
cd portofolio
```

### 3. Instal Dependensi
```bash
npm install
```

### 4. Jalankan Server Pengembangan (Dev Server)
```bash
npm run dev
```
Buka [http://localhost:3000](http://localhost:3000) pada browser Anda untuk melihat hasilnya.

### 5. Bangun Versi Produksi (Production Build)
```bash
npm run build
npm run start
```

---

## 📬 Kontak & Kolaborasi

- **Nama:** Ahmad Fadhil Ikram
- **Email:** [fadilikram087@gmail.com](mailto:fadilikram087@gmail.com)
- **LinkedIn:** [linkedin.com/in/ahmad-fadhil-ikram](https://www.linkedin.com/in/ahmad-fadhil-ikram)
- **GitHub:** [github.com/fadilikrm](https://github.com/fadilikrm)

---

<div align="center">
  <sub>© 2026 Ahmad Fadhil Ikram. Dibuat dengan dedikasi tinggi menggunakan Next.js 15 & Tailwind CSS v4.</sub>
</div>
