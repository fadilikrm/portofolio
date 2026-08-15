import type { Experience } from '@/types';

export const experiences: Experience[] = [
  // --- PEKERJAAN (WORK) ---
  {
    id: 'semen-bosowa-maros',
    role: 'Full Stack Web Developer (Magang)',
    organization: 'PT Semen Bosowa Maros — Departemen HRGS',
    period: 'Agu 2025 — Des 2025',
    type: 'Work',
    location: 'Maros, Sulawesi Selatan (Di lokasi)',
    description: [
      'Bertanggung jawab sebagai Full-Stack Web Developer di Departemen HRGS PT Semen Bosowa Maros yang berfokus pada digitalisasi sistem manajemen sumber daya manusia.',
      'Merancang dan mengembangkan aplikasi web HR komprehensif yang mengotomatisasi berbagai proses bisnis inti, menggantikan sistem pelaporan manual yang sebelumnya bergantung pada penggunaan Excel secara intensif.',
      'Mengembangkan solusi end-to-end, mulai dari desain antarmuka pengguna (UI/UX) yang intuitif hingga arsitektur database untuk mengelola data SDM berskala besar secara sistematis.',
      'Meningkatkan akurasi data dan efisiensi operasional departemen dengan mengimplementasikan fitur pelaporan otomatis serta visualisasi data secara real-time.',
    ],
    achievements: [
      'Berhasil mentransformasi sistem pelaporan manual berbasis Excel menjadi aplikasi web HR otomatis dan real-time.',
    ],
    tags: [
      'Full-Stack Development',
      'CodeIgniter 4',
      'PHP',
      'JavaScript',
      'CSS/HTML',
      'HR Management System',
      'Problem Solving',
    ],
  },
  {
    id: 'kominfo-makassar',
    role: 'Presentation Manager — Project AI Begal Detector',
    organization: 'Dinas Kominfo Kota Makassar',
    period: 'Okt 2025',
    type: 'Work',
    location: 'Makassar, Sulawesi Selatan (Di lokasi)',
    description: [
      'Mempresentasikan proyek inovasi "Begal Detector" berbasis kecerdasan buatan (AI) di hadapan Kepala Dinas Kominfo Kota Makassar.',
      'Didampingi oleh dosen pembimbing dari Politeknik Negeri Ujung Pandang (PNUP), memaparkan implementasi teknologi computer vision untuk deteksi dini tindakan kriminalitas di ruang publik.',
      'Menjalin kolaborasi strategis dalam pengintegrasian sistem deteksi otomatis ke dalam infrastruktur keamanan kota Makassar.',
      'Mendemonstrasikan efektivitas model AI yang dikembangkan agar dapat diimplementasikan pada skala kota guna mendukung program keamanan masyarakat yang lebih responsif dan cerdas.',
    ],
    achievements: [
      'Berhasil mendemonstrasikan efektivitas sistem AI Begal Detector untuk rencana integrasi CCTV cerdas Kota Makassar.',
    ],
    tags: [
      'Kecerdasan Buatan (AI)',
      'Computer Vision',
      'Kepemimpinan Proyek',
      'Group Discussions',
      'Public Sector',
    ],
  },
  {
    id: 'himatik-bootcamp-mentor',
    role: 'Mentor Bootcamp Full-Stack Website HIMATIK PNUP 2025',
    organization: 'HIMATIK PNUP (Politeknik Negeri Ujung Pandang)',
    period: 'Mar 2025 — Jul 2025',
    type: 'Work',
    location: 'Makassar, Sulawesi Selatan (Jarak jauh)',
    description: [
      'Menjadi Mentor Bootcamp Full-Stack Development yang diselenggarakan oleh HIMATIK PNUP.',
      'Membimbing peserta mulai dari fondasi dasar pengembangan web, desain front-end, hingga implementasi back-end yang kompleks.',
      'Menginstruksikan materi mengenai integrasi API dan pembuatan sistem CRUD (Create, Read, Update, Delete) sebagai standar operasional aplikasi modern.',
      'Mengarahkan seluruh peserta dalam menyelesaikan proyek akhir berupa pengembangan website fungsional berbasis framework Laravel.',
    ],
    achievements: [
      'Mengarahkan seluruh peserta hingga berhasil membangun website fungsional berbasis framework Laravel.',
    ],
    tags: [
      'Full-Stack Development',
      'Laravel',
      'PHP',
      'Database Administration',
      'Mentorship',
      'API Integration',
    ],
  },

  // --- KOMPETISI (COMPETITION) ---
  {
    id: 'budayago-2026',
    role: '[Tingkat Nasional] Top 50 Finalist — BudayaGO Innovation Competition 2026',
    organization: 'Kementerian Kebudayaan RI',
    period: 'Des 2025',
    type: 'Competition',
    location: 'Indonesia',
    description: [
      'Mengembangkan BELANTARA, game edukasi berbasis web interaktif untuk digitalisasi pembelajaran warisan budaya Makassar.',
      'Melatih model AI pengenalan khusus untuk mengidentifikasi dan memvalidasi aksara Lontara secara real-time.',
      'Memimpin pengembangan backend, integrasi data, dan menghubungkan logika AI dengan antarmuka frontend.',
    ],
    achievements: [
      'Meraih peringkat Top 50 Tingkat Nasional & Penghargaan dana tunai finalis.',
    ],
    tags: ['Tingkat Nasional', 'AI Recognition', 'Lontara Script', 'Web Game', 'FastAPI', 'Backend'],
  },
  {
    id: 'pimnas-38-2025',
    role: '[Tingkat Nasional] Juara Favorit (Kategori Presentasi) — PIMNAS 38 2025',
    organization: 'Kementerian Pendidikan Tinggi, Sains, dan Teknologi RI',
    period: 'Nov 2025',
    type: 'Competition',
    location: 'Makassar, Indonesia',
    description: [
      'Terpilih sebagai salah satu dari 420 tim terbaik dari sekitar 170 perguruan tinggi se-Indonesia pada ajang PKM-KC.',
      'Berperan sebagai Mobile & AI Developer, merancang arsitektur sistem keamanan terintegrasi berbasis Edge AI (deteksi otomatis senjata tajam & gestur mengancam, Instant Face Recognition) dan Aplikasi Mobile (mode panik & pelacakan lokasi real-time).',
    ],
    achievements: [
      'Berhasil membawa pulang gelar Juara Favorit Kategori Presentasi PIMNAS 38 2025 di tingkat Nasional.',
    ],
    tags: ['Tingkat Nasional', 'Edge AI', 'Computer Vision', 'Mobile App', 'Face Recognition', 'Real-Time Tracking'],
  },
  {
    id: 'bss-parking-hackathon-2025',
    role: '[Tingkat Nasional] Juara 3 — #OpenTheGate Hackathon BSS Parking 2025',
    organization: 'BSS Parking',
    period: 'Jun 2025',
    type: 'Competition',
    location: 'Indonesia',
    description: [
      'Membangun sistem terintegrasi web untuk deteksi dan pengenalan plat nomor kendaraan otomatis secara real-time menggunakan FastAPI dan model ONNX.',
      'Mengimplementasikan pengolahan citra efisien dengan OpenCV, klasifikasi deep learning, dan antarmuka web yang responsif.',
    ],
    achievements: [
      'Dikembangkan dalam waktu 1 minggu dan meraih Juara 3 Nasional atas inovasi, kecepatan, dan integrasi sistem.',
    ],
    tags: ['Tingkat Nasional', 'FastAPI', 'ONNX', 'OpenCV', 'Deep Learning', 'License Plate Recognition'],
  },
  {
    id: 'pimpol-2025',
    role: '[Tingkat Institusi] Juara 2 — Pekan Ilmiah Mahasiswa Politeknik (PIMPOL) 2025',
    organization: 'Politeknik Negeri Ujung Pandang',
    period: 'Apr 2025',
    type: 'Competition',
    location: 'Makassar, Indonesia',
    description: [
      'Meraih Juara 2 dalam ajang Pekan Ilmiah Mahasiswa Politeknik (PIMPOL) 2025 yang diselenggarakan oleh PNUP.',
      'Menampilkan keunggulan dalam riset ilmiah dan presentasi karya teknologi antar mahasiswa Politeknik Negeri Ujung Pandang.',
    ],
    achievements: [
      'Penghargaan keunggulan karya ilmiah & presentasi tingkat Institusi.',
    ],
    tags: ['Tingkat Institusi', 'Scientific Research', 'Presentation', 'Politeknik Innovation'],
  },
  {
    id: 'pmm4-kemendikbudristek',
    role: '[Tingkat Nasional] Awardee Program Pertukaran Mahasiswa Merdeka (PMM 4)',
    organization: 'Kemendikbudristek RI',
    period: 'Jul 2024',
    type: 'Competition',
    location: 'Politeknik Negeri Batam',
    description: [
      'Terpilih sebagai penerima beasiswa program pertukaran mahasiswa (PMM 4) Kemendikbudristek RI di Politeknik Negeri Batam.',
      'Memperluas jejaring akademik, beradaptasi di lingkungan baru, serta memperdalam wawasan kebangsaan dan kebudayaan melalui Modul Nusantara.',
    ],
    achievements: [
      'Lulus program pertukaran mahasiswa dengan penguatan kepemimpinan & komunikasi lintas budaya.',
    ],
    tags: ['Tingkat Nasional', 'MBKM', 'PMM 4', 'Student Exchange', 'Cross-Cultural Leadership'],
  },
  {
    id: 'kmipn-vi-2024',
    role: '[Tingkat Nasional] Finalis — Hackathon KMIPN VI 2024',
    organization: 'BAKORMA Politeknik Se-Indonesia',
    period: 'Jun 2024',
    type: 'Competition',
    location: 'Jakarta, Indonesia',
    description: [
      'Mengembangkan platform dan chatbot terintegrasi untuk kesehatan mental sebagai ruang aman digital yang menyediakan konten edukasi dan literatur terpercaya.',
      'Dilengkapi fitur pengujian kesehatan mental mandiri online yang secara otomatis menganalisis hasil dan menghubungkan pengguna dengan profesional (Psikiater) via chatbot proaktif.',
    ],
    achievements: [
      'Terpilih sebagai Finalis Hackathon KMIPN VI 2024 tingkat Nasional di Jakarta.',
    ],
    tags: ['Tingkat Nasional', 'Full Stack Web', 'Chatbot AI', 'Mental Health Platform', 'Next.js'],
  },
  {
    id: 'kmipn-v-2023',
    role: '[Tingkat Nasional] Juara "Best Inspiring" — Hackathon KMIPN V 2023',
    organization: 'BAKORMA Politeknik Se-Indonesia',
    period: 'Agu 2023',
    type: 'Competition',
    location: 'Surabaya, Indonesia',
    description: [
      'Memimpin pengembangan lanjutan platform pendukung & perlindungan korban kekerasan seksual.',
      'Merancang fitur-fitur edukasi baru serta mengoptimalkan performa website agar akses informasi dan dukungan berjalan secara andal.',
    ],
    achievements: [
      'Memenangkan penghargaan kategori "Best Inspiring" di tingkat Nasional.',
    ],
    tags: ['Tingkat Nasional', 'Full Stack Web', 'Web Optimization', 'Educational System'],
  },
  {
    id: 'fordigi-hackathon-2023',
    role: '[Tingkat Nasional] Juara Favorit — Hackathon Fordigi BUMN 2023',
    organization: 'Forum Digital BUMN (Fordigi)',
    period: 'Jun 2023',
    type: 'Competition',
    location: 'Makassar, Indonesia',
    description: [
      'Bertanggung jawab atas pengembangan antarmuka website (statis & dinamis) serta integrasi chatbot pendukung untuk platform informasi dan penanganan korban kekerasan seksual.',
    ],
    achievements: [
      'Meraih Juara Favorit Fordigi Hackathon BUMN 2023 di tingkat Nasional.',
    ],
    tags: ['Tingkat Nasional', 'Full Stack Web', 'Chatbot Integration', 'Information System'],
  },

  // --- PENDIDIKAN (EDUCATION) ---
  {
    id: 'education-pnup',
    role: 'Sarjana Terapan (D4) Teknik Komputer dan Jaringan',
    organization: 'Politeknik Negeri Ujung Pandang',
    period: '2022 — 2026',
    type: 'Education',
    location: 'Makassar, Indonesia',
    description: [
      'Bidang Studi yang Dipelajari:',
      'Kecerdasan Buatan & Data: Kecerdasan Buatan (AI), Big Data, Data Warehouse, dan Integrasi Data.',
      'Internet of Things (IoT) & Embedded Systems: Sistem Tertanam (Embedded Systems) & IoT, Aplikasi IoT, serta Pengukuran & Instrumentasi.',
      'Keamanan Siber (Cyber Security): Keamanan Siber dan Keamanan Informasi.',
      'Jaringan Komputer: Rekayasa Jaringan Komputer, Administrasi Jaringan, serta Jaringan Nirkabel & Seluler.',
      'Rekayasa Perangkat Lunak (Software Engineering): Pemrograman Berbasis Objek (OOP), Pemrograman Web, dan Aplikasi Mobile.',
      'Cloud & Sistem Terdistribusi: Teknologi Virtualisasi & Cloud Computing, serta Sistem Terdistribusi.',
      'Judul Skripsi: "Implementasi CCTV Cerdas Berbasis Yolo26 Multi-Model untuk Peningkatan Akurasi Deteksi Begal".',
    ],
    achievements: [
      'IPK: 3.93 / 4.00 (Lulusan Terbaik)',
    ],
    tags: [],
  },
];
