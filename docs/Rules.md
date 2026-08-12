# Rules.md - Coding Standards & Operational Rules

## 1. TypeScript & Component Standards

- Konfigurasi TypeScript diatur pada `strict: true`. Penggunaan tipe `any` dilarang.
- Komponen React ditulis menggunakan format arrow function: `const ComponentName = () => {}`.
- Komponen besar wajib dipecah menjadi sub-komponen terisolasi dalam folder `components/`.
- Deklarasi Interface Props diletakkan tepat di atas komponen terkait dengan nama `<ComponentName>Props`.
- Format penamaan berkas komponen menggunakan `kebab-case.tsx`.

## 2. Naming Conventions

| Entity | Convention | Example |
|---|---|---|
| React Component | `PascalCase` | `ProjectCard` |
| Component File | `kebab-case.tsx` | `project-card.tsx` |
| Utility / Config File | `kebab-case.ts` | `use-media-query.ts` |
| Functions & Variables | `camelCase` | `getFeaturedProjects` |
| Types & Interfaces | `PascalCase` | `Project` |
| Constants | `UPPER_SNAKE_CASE` | `MAX_ITEMS` |

## 3. CSS & Styling Rules

- Seluruh pengayaan gaya menggunakan utility classes Tailwind CSS.
- Penggabungan kelas CSS dinamis wajib menggunakan helper `cn()` (`clsx` + `tailwind-merge`).
- Penggunaan variabel warna wajib merujuk pada spesifikasi di `Design.md`.

## 4. Animation Guidelines

- Reusable Motion variants disimpan secara terpusat pada `lib/animations.ts`.
- Komponen yang mengandung skrip animasi wajib mencantumkan direktif `'use client'`.
- Seluruh animasi entrance dan hover wajib memenuhi opsi `prefers-reduced-motion`.

## 5. Quality Gate

- Standar kualitas kode sebelum proses integrasi:
  1. `npm run lint` mengeksekusi tanpa peringatan/error.
  2. `npm run build` berhasil melakukan kompilasi TypeScript tanpa error.
  3. Verifikasi tampilan responsif pada breakpoint `sm`, `md`, dan `lg`.
