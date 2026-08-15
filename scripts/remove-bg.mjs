/**
 * Script untuk menghapus background foto avatar
 * Menghasilkan PNG transparan (RGBA) dari foto dengan background putih
 *
 * Cara pakai: node scripts/remove-bg.mjs
 */

import { removeBackground } from '@imgly/background-removal-node';
import { readFileSync, writeFileSync, copyFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir = resolve(__dirname, '..');

const inputPath = resolve(rootDir, 'public', 'avatar.png');
const backupPath = resolve(rootDir, 'public', 'avatar_original.png');
const outputPath = resolve(rootDir, 'public', 'avatar.png');

console.log('🔄 Memulai proses hapus background...');
console.log('📁 Input:', inputPath);

// Backup file asli dulu
copyFileSync(inputPath, backupPath);
console.log('✅ Backup disimpan ke: avatar_original.png');

try {
  const imageBuffer = readFileSync(inputPath);
  const blob = new Blob([imageBuffer], { type: 'image/png' });

  console.log('🤖 AI sedang memproses gambar (mungkin butuh 30-60 detik)...');

  const resultBlob = await removeBackground(blob, {
    model: 'medium',
    output: {
      format: 'image/png',
      quality: 1,
    },
  });

  const arrayBuffer = await resultBlob.arrayBuffer();
  const outputBuffer = Buffer.from(arrayBuffer);

  writeFileSync(outputPath, outputBuffer);

  console.log('');
  console.log('🎉 SELESAI! Background berhasil dihapus!');
  console.log('📁 Output disimpan ke:', outputPath);
  console.log('');
  console.log('💡 Refresh browser kamu untuk melihat hasilnya.');
  console.log('💡 Jika hasilnya tidak memuaskan, file asli tersimpan di avatar_original.png');
} catch (err) {
  console.error('❌ Gagal memproses gambar:', err.message);
  console.log('🔄 Mengembalikan file asli...');
  copyFileSync(backupPath, outputPath);
}
