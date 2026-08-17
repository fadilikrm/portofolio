# PRD.md - Product Requirement Document

**Project:** Personal Developer Portfolio & Technical Showcase  
**Version:** 1.0.0  
**Status:** Approved Specification  

## 1. Executive Summary & Purpose

Dokumen ini mendefinisikan kebutuhan produk untuk pembuatan website portofolio pribadi interaktif berkinerja tinggi. Tujuan utama website ini adalah menampilkan keahlian teknis (Web Development, Mobile Development, AI & Computer Vision, serta IoT / Embedded System), pencapaian kompetisi, serta rekam jejak pengalaman kerja kepada recruiter, klien, dan kolaborator profesional.

## 2. Goals & Success Metrics

| Goal | Metrik Sukses |
|---|---|
| Performa Website | Lighthouse Performance score > 90 |
| Pemeliharaan Konten | Pembaruan data project selesai < 10 menit via config & commit |
| Indeks SEO | Terindeks Google pada pencarian nama dan kata kunci portofolio |
| Akses Kontak | Link LinkedIn, GitHub, dan Email berfungsi di seluruh halaman |

## 3. Target Audience

- **Technical Recruiters & Engineering Managers:** Evaluasi kualifikasi teknis dan relevansi proyek.
- **Clients & Collaborators:** Penilaian hasil karya visual, fungsionalitas produk, dan rekam jejak.
- **Developer Community:** Akses ke repositori open-source dan dokumentasi teknis.

## 4. Non-Goals / Out of Scope (v1)

- Sistem basis data dan panel admin eksternal.
- Sistem Content Management System (CMS) dan blog penuh.
- Dukungan multi-bahasa (i18n).
- Sistem komentar dan interaksi sosial pengunjung.
- Sistem autentikasi pengguna.

## 5. Key Features & Functional Requirements

### 5.1 Hero Section
- Animasi latar belakang interaktif (Spotlight / Grid effect).
- Ringkasan profil dan penekanan bidang keahlian.
- Call to Action (CTA) menuju daftar proyek dan informasi kontak.
- Kriteria Penerimaan: Render awal (First Contentful Paint) < 1.5 detik.
- Aturan Urutan Keahlian: Web Development dan Mobile Development ditampilkan lebih dahulu, diikuti oleh AI / Computer Vision dan IoT / Embedded System.

### 5.2 Experience & Competitions Timeline
- Garis waktu riwayat pekerjaan, magang, dan perolehan penghargaan.
- Filter kategori client-side tanpa reload halaman (Pekerjaan, Penghargaan, Pendidikan).

### 5.3 Interactive Project Showcase (Bento Grid)
- Visualisasi kartu proyek dengan efek interaktif.
- Tautan ke Live Demo, Repositori GitHub, dan Dokumen Detail Proyek.
- Label teknologi (tech stack) pada setiap kartu.
- Kriteria Penerimaan: Navigasi kartu mengarah ke rute dinamis `/projects/[slug]` dengan metadata SEO independen.

### 5.4 Tech Stack & Skills
- Pengelompokan keahlian berurutan: Web Development, Mobile Development, AI & Computer Vision, IoT / Embedded System, serta Tools & DevSecOps.
- Visualisasi berbentuk grid badge/chip tanpa bilah persentase progress.

### 5.5 Footer & Social Links
- Navigasi kontak menggunakan ikon media sosial (LinkedIn, GitHub, Email `mailto:`).
- Kriteria Penerimaan: Tautan eksternal terbuka di tab baru.

## 6. Non-Functional Requirements

- **Performance:** Skor Core Web Vitals > 90 pada Google Lighthouse.
- **Responsiveness:** Tampilan adaptif pada perangkat Mobile, Tablet, dan Desktop.
- **Accessibility (a11y):** Kepatuhan standar WCAG AA (kontras warna dan navigasi keyboard).
- **SEO:** Meta tag dinamis, Open Graph images, dan generasi sitemap otomatis.

## 7. Roadmap

| Fase | Fitur |
|---|---|
| v1.0 (MVP) | Hero Section, Bento Grid Showcase, Timeline, Skills Grid, Footer Social Links |
| v1.1 | Integration Contact Form (Resend API), Dynamic OG Image Generator |
| v2.0 | MDX Technical Blog, Light Mode Toggle |
