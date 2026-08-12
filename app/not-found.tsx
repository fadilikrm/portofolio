import Link from 'next/link';
import { ArrowLeft, FileQuestion } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 bg-[#0b0f12] text-center">
      <div className="space-y-6 max-w-md">
        <div className="inline-flex p-4 rounded-2xl bg-[#141a1f] border border-[#222c35]">
          <FileQuestion className="w-12 h-12 text-[#10b981]" />
        </div>

        <div className="space-y-2">
          <h1 className="text-4xl font-bold text-[#f3f4f6]">404 — Halaman Tidak Ditemukan</h1>
          <p className="text-[#9ca3af] text-sm leading-relaxed">
            Maaf, halaman atau proyek yang Anda cari tidak ada atau telah dipindahkan.
          </p>
        </div>

        <div>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#10b981] hover:bg-emerald-600 text-[#f3f4f6] font-medium transition-all shadow-md shadow-emerald-500/20"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Kembali ke Beranda</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
