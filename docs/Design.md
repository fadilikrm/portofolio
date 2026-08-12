# Design.md - Visual System & Component Design

## 1. Color Palette (Dark Mode First)

| Role | Color Hex | Usage Description |
|---|---|---|
| **Background Core** | #0b0f12 | Warna dasar latar belakang halaman (Dark Obsidian). |
| **Card / Surface** | #141a1f | Latar belakang komponen kartu, grid, dan modal. |
| **Border Accent** | #222c35 | Garis pembatas komponen dan separator seksi. |
| **Primary Brand** | #10b981 | Indikator aktif, tombol utama, dan teks aksen (Emerald Green). |
| **Glow / Secondary** | #d97706 | Aksen hover subtle dan badge penekanan (Warm Amber). |
| **Text Primary** | #f3f4f6 | Teks judul dan konten utama (Soft Off-White). |
| **Text Muted** | #9ca3af | Teks sekunder, tanggal, dan atribut metadata. |
| **Success** | #10b981 | Indikator status sukses. |
| **Error** | #ef4444 | Indikator status error dan validasi gagal. |
| **Warning** | #f59e0b | Indikator peringatan non-kritis. |

## 2. Typography System

- **Primary Font:** Inter / Geist Sans (Elemen UI, Body Text, Headings).
- **Code Font:** JetBrains Mono / Geist Mono (Badge Tech Stack, Snippet Kode).

### Type Scale

| Elemen | Mobile | Desktop | Weight |
|---|---|---|---|
| H1 (Hero) | 32px | 56px | 700 |
| H2 (Section) | 24px | 36px | 600 |
| H3 (Card) | 18px | 20px | 600 |
| Body | 15px | 16px | 400 |
| Small / Meta | 13px | 13px | 400 |
| Badge / Code | 12px | 12px | 500 |

## 3. Spacing & Layout System

- Skala spacing: `4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px, 96px`.
- Max Container Width: `1280px`.
- Horizontal Padding: `16px` (mobile), `32px` (desktop).
- Grid Columns (Bento Grid): 1 kolom (`sm`), 2 kolom (`md`), 3 kolom (`lg`).

## 4. Border Radius & Elevation

- Radius Small (Button, Badge): `8px`
- Radius Medium (Card, Input): `16px`
- Radius Large (Modal, Container): `24px`
- Elevation & Hover Effects: Pembatas komponen menggunakan garis 1px `#222c35`. State hover memanfaatkan transisi warna border ke `#10b981` atau `#d97706` dengan opacity rendah.

## 5. Component States

| State | Treatment |
|---|---|
| Default | Background `#141a1f`, Border `#222c35`, Text `#f3f4f6` |
| Hover | Scale 1.02x, Border `#10b981` atau `#d97706` |
| Focus | Ring 2px `#10b981`, Offset 2px |
| Active | Scale 0.98x |
| Disabled | Opacity 50%, Cursor `not-allowed` |

## 6. Visual & Motion Rules

- Penggunaan gradien teks dibatasi maksimal 2 warna serasi (misal: `#f3f4f6` ke `#10b981`). Penggunaan gradien multi-warna neon dilarang.
- Efek animasi latar belakang diatur pada opasitas rendah (10–15%) untuk menjaga kejelasan konten.
- Seluruh animasi wajib mengimplementasikan pengecekan `prefers-reduced-motion`.
