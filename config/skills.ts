import type { Skill } from '@/types';

export const skills: Skill[] = [
  // 1. Web Development
  { name: 'Next.js 15 (App Router)', category: 'Web Development', iconName: 'Globe' },
  { name: 'React 19 & TypeScript', category: 'Web Development', iconName: 'Code' },
  { name: 'Tailwind CSS v4', category: 'Web Development', iconName: 'Palette' },
  { name: 'Node.js & Express / Fastify', category: 'Web Development', iconName: 'Server' },
  { name: 'REST & GraphQL APIs', category: 'Web Development', iconName: 'Layers' },
  { name: 'PostgreSQL & Prisma', category: 'Web Development', iconName: 'Database' },

  // 2. Mobile Development
  { name: 'Kotlin & Android SDK', category: 'Mobile Development', iconName: 'Smartphone' },
  { name: 'Jetpack Compose', category: 'Mobile Development', iconName: 'Layout' },
  { name: 'React Native & Expo', category: 'Mobile Development', iconName: 'Mobile' },
  { name: 'Flutter & Dart', category: 'Mobile Development', iconName: 'Layers' },
  { name: 'Mobile Architecture (MVVM/Clean)', category: 'Mobile Development', iconName: 'Shield' },

  // 3. AI & Computer Vision
  { name: 'PyTorch & TensorFlow', category: 'AI & Computer Vision', iconName: 'Brain' },
  { name: 'YOLOv8 & OpenCV', category: 'AI & Computer Vision', iconName: 'Eye' },
  { name: 'TensorRT & ONNX Kuantisasi', category: 'AI & Computer Vision', iconName: 'Cpu' },
  { name: 'Python & NumPy / SciPy', category: 'AI & Computer Vision', iconName: 'Code2' },

  // 4. IoT / Embedded System
  { name: 'ESP32 & FreeRTOS', category: 'IoT / Embedded System', iconName: 'Cpu' },
  { name: 'Nvidia Jetson & Single Board Computer', category: 'IoT / Embedded System', iconName: 'CircuitBoard' },
  { name: 'MQTT / Modbus / CAN Bus', category: 'IoT / Embedded System', iconName: 'Radio' },
  { name: 'C / C++ Embedded Development', category: 'IoT / Embedded System', iconName: 'Terminal' },

  // 5. Tools & DevSecOps
  { name: 'Docker & Containerization', category: 'Tools & DevSecOps', iconName: 'Box' },
  { name: 'Git & GitHub Actions CI/CD', category: 'Tools & DevSecOps', iconName: 'GitBranch' },
  { name: 'Linux Server & Nginx', category: 'Tools & DevSecOps', iconName: 'TerminalSquare' },
  { name: 'Vercel & Cloud Infrastructure', category: 'Tools & DevSecOps', iconName: 'Cloud' },
];
