import type { Experience } from '@/types';

export const experiences: Experience[] = [
  {
    id: 'lead-ai-engineer-tech',
    role: 'Lead Computer Vision Developer',
    organization: 'Neural Systems Corp',
    period: 'Jan 2025 — Sekarang',
    type: 'Work',
    location: 'Jakarta, Indonesia (Hybrid)',
    description: [
      'Memimpin perancangan dan penerapan arsitektur Computer Vision berlatensi rendah pada perangkat edge (Nvidia Jetson & Raspberry Pi).',
      'Mengembangkan pipeline kuantisasi model PyTorch ke TensorRT & INT8 untuk mempercepat kecepatan inferensi hingga 3.5x.',
      'Mengkoordinasikan tim 5 developer dalam pembuatan platform manajemen IoT terpusat.',
    ],
    achievements: [
      'Menurunkan latensi inspeksi cacat manufaktur dari 50ms menjadi 12ms per frame.',
      'Menghemat biaya pemrosesan cloud hingga 60% dengan migrasi ke Edge Computing.',
    ],
    tags: ['YOLOv8', 'PyTorch', 'TensorRT', 'C++', 'Python', 'Edge AI', 'Docker'],
  },
  {
    id: 'winner-national-hackathon-2025',
    role: 'Juara 1 — National AI & Edge Innovation Competition',
    organization: 'Kementerian Komunikasi & Informatika',
    period: 'Nov 2025',
    type: 'Competition',
    location: 'Jakarta',
    description: [
      'Mengembangkan prototipe "VisionSentinel AI" dalam waktu 48 jam hackathon maraton.',
      'Mendemonstrasikan sistem deteksi secara langsung di depan juri dengan performa real-time pada board Nvidia Jetson Nano.',
    ],
    achievements: [
      'Mengalahkan 120+ tim pesaing dari seluruh Indonesia.',
      'Memenangkan hadiah pendanaan riset sebesar Rp 75.000.000.',
    ],
    tags: ['Computer Vision', 'YOLO', 'Edge AI', 'IoT', 'FastAPI'],
  },
  {
    id: 'fullstack-dev-solusindo',
    role: 'Senior Full-Stack Developer',
    organization: 'Solusindo Tekno Utama',
    period: 'Jun 2023 — Des 2024',
    type: 'Work',
    location: 'Bandung, Indonesia',
    description: [
      'Membangun dashboard pemantauan energi industri berbasis Next.js, WebSockets, dan komunikasi MODBUS RTU.',
      'Merancang arsitektur microservices backend menggunakan Node.js (TypeScript) dan Go untuk menangani 10,000+ request per detik.',
    ],
    achievements: [
      'Meningkatkan efisiensi sistem pemantauan beban puncak klien industri hingga 25%.',
    ],
    tags: ['Next.js', 'React', 'TypeScript', 'Node.js', 'Go', 'MQTT', 'InfluxDB'],
  },
  {
    id: 'top-3-iot-challenge-2024',
    role: 'Top 3 Finalist — Southeast Asia Smart IoT Hackathon',
    organization: 'IEEE IoT Society',
    period: 'Agu 2024',
    type: 'Competition',
    location: 'Singapura (Remote)',
    description: [
      'Merancang solusi smart-grid telemetri berbasis ESP32 dan MQTT broker terenkripsi.',
      'Menampilkan visualisasi kondisi listrik real-time dengan latency di bawah 100ms.',
    ],
    achievements: [
      'Meraih penghargaan Best Technical Hardware Implementation.',
    ],
    tags: ['ESP32', 'FreeRTOS', 'MQTT', 'Next.js', 'Grafana'],
  },
  {
    id: 'degree-computer-science',
    role: 'Sarjana Komputer (S.Kom) — Teknik Informatika',
    organization: 'Institut Teknologi Bandung',
    period: '2020 — 2024',
    type: 'Education',
    location: 'Bandung',
    description: [
      'Fokus Pemintatan: Kecerdasan Buatan (AI), Pengolahan Citra Digital, dan Embedded Systems.',
      'Skripsi: "Optimasi Inferensi Model Deteksi Objek Real-Time pada Perangkat Edge Berdaya Rendah Menggunakan TensorRT Kuantisasi INT8".',
    ],
    achievements: [
      'IPK: 3.85 / 4.00 (Cum Laude).',
      'Ketua Asisten Laboratorium Komputasi & Grafika.',
    ],
    tags: ['Computer Science', 'AI Research', 'Algorithms', 'Embedded Systems'],
  },
];
