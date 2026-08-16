import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ExternalLink, Github, Calendar, Tag, Layers, Folder, Video, FileText } from 'lucide-react';
import { projects } from '@/config/projects';

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: 'Proyek Tidak Ditemukan',
    };
  }

  return {
    title: `${project.title} | Proyek Fadil`,
    description: project.summary,
    openGraph: {
      title: project.title,
      description: project.summary,
      images: [
        {
          url: project.thumbnailUrl,
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
    },
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <article className="min-h-screen pt-28 pb-20 bg-[#0b0f12]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Back Link */}
        <div>
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#9ca3af] hover:text-[#10b981] transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Kembali ke Portfolio</span>
          </Link>
        </div>

        {/* Header Header Info */}
        <div className="space-y-4">
          <div className="flex flex-wrap items-center gap-3">
            <span className="px-3 py-1 rounded-full bg-[#141a1f] border border-[#222c35] text-xs font-mono text-[#10b981]">
              {project.category}
            </span>
            {project.role && (
              <span className="px-3 py-1 rounded-full bg-[#10b981]/10 border border-[#10b981]/30 text-xs font-mono text-[#10b981] font-semibold">
                Peran: {project.role}
              </span>
            )}
            <span className="inline-flex items-center gap-1.5 text-xs font-mono text-[#9ca3af]">
              <Calendar className="w-3.5 h-3.5 text-[#10b981]" />
              <span>{project.createdAt}</span>
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-bold text-[#f3f4f6] leading-tight">
            {project.title}
          </h1>

          <p className="text-lg text-[#9ca3af] leading-relaxed">
            {project.summary}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4 pt-2 border-y border-[#222c35] py-6">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#10b981] hover:bg-emerald-600 text-[#f3f4f6] font-medium transition-all shadow-md shadow-emerald-500/20"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Kunjungi Website</span>
            </a>
          )}

          {project.submissionUrl && (
            <a
              href={project.submissionUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#d97706]/20 hover:bg-[#d97706]/30 border border-[#d97706]/50 text-amber-300 font-medium transition-all"
            >
              <Folder className="w-4 h-4 text-amber-400" />
              <span>Lihat Berkas Submission</span>
            </a>
          )}

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#141a1f] hover:bg-[#222c35] border border-[#222c35] text-[#f3f4f6] font-medium transition-all"
            >
              <Github className="w-4 h-4" />
              <span>Lihat Kode Sumber</span>
            </a>
          )}

          {project.documentationUrl && (
            <a
              href={project.documentationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-red-500/10 hover:bg-red-500/20 border border-red-500/40 text-red-400 font-medium transition-all"
            >
              <Video className="w-4 h-4 text-red-400" />
              <span>Tonton Dokumentasi Video</span>
            </a>
          )}

          {project.paperUrl && (
            <a
              href={project.paperUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 font-medium transition-all"
            >
              <FileText className="w-4 h-4 text-emerald-400" />
              <span>Baca Jurnal Ilmiah (Terakreditasi SINTA 3)</span>
            </a>
          )}
        </div>

        {/* Project Thumbnail Image */}
        <div className="relative w-full h-[320px] sm:h-[450px] rounded-2xl overflow-hidden border border-[#222c35] shadow-2xl">
          <Image
            src={project.thumbnailUrl}
            alt={project.title}
            fill
            sizes="(max-width: 1200px) 100vw, 900px"
            priority
            className="object-cover"
          />
        </div>

        {/* Metrics Grid */}
        {project.metrics && project.metrics.length > 0 && (
          <div className="space-y-3">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-[#9ca3af] flex items-center gap-2">
              <Layers className="w-4 h-4 text-[#10b981]" />
              <span>Metrik Performa Utama</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {project.metrics.map((m) => (
                <div key={m.label} className="p-4 rounded-xl bg-[#141a1f] border border-[#222c35] space-y-1">
                  <p className="text-xs text-[#9ca3af]">{m.label}</p>
                  <p className="text-xl font-bold font-mono text-[#10b981]">{m.value}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Full Project Description */}
        <div className="space-y-4 pt-4 border-t border-[#222c35]">
          <h2 className="text-xl font-bold text-[#f3f4f6]">
            Gambaran Umum & Arsitektur Solusi
          </h2>
          <p className="text-[#9ca3af] leading-relaxed whitespace-pre-line text-base">
            {project.description}
          </p>
        </div>

        {/* Tech Stack */}
        <div className="space-y-3 pt-4 border-t border-[#222c35]">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-[#9ca3af] flex items-center gap-2">
            <Tag className="w-4 h-4 text-[#d97706]" />
            <span>Teknologi Yang Digunakan</span>
          </h2>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 rounded-lg bg-[#141a1f] text-sm font-mono text-[#f3f4f6] border border-[#222c35]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
