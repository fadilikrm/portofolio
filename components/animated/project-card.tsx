'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ExternalLink, Github, ArrowRight, Folder, Calendar, Video, FileText } from 'lucide-react';
import { motion } from 'framer-motion';
import type { Project } from '@/types';
import { scaleHover } from '@/lib/animations';
import { usePrefersReducedMotion } from '@/hooks/use-media-query';

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
}

export const ProjectCard = ({ project, featured = false }: ProjectCardProps) => {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <motion.div
      variants={prefersReducedMotion ? undefined : scaleHover}
      initial="initial"
      whileHover={prefersReducedMotion ? undefined : 'hover'}
      className={`group relative rounded-2xl bg-[#141a1f] border border-[#222c35] overflow-hidden flex flex-col justify-between h-full transition-all hover:border-[#10b981]/60 glow-card cursor-pointer ${
        featured ? 'md:col-span-2' : ''
      }`}
    >
      {/* Full-card overlay link so clicking ANYWHERE on card navigates instantly */}
      <Link
        href={`/projects/${project.slug}`}
        className="absolute inset-0 z-10"
        aria-label={`Lihat detail ${project.title}`}
      />

      <div className="flex-1 flex flex-col">
        {/* Card Header Thumbnail */}
        <div className="relative w-full h-52 sm:h-60 overflow-hidden bg-[#0b0f12] shrink-0">
          <Image
            src={project.thumbnailUrl}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#141a1f] via-transparent to-black/30 pointer-events-none" />

          {/* Date Badge */}
          <div className="absolute top-3 left-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0b0f12]/80 backdrop-blur-md border border-[#222c35] text-xs font-mono text-[#9ca3af] pointer-events-none">
            <Calendar className="w-3.5 h-3.5 text-[#10b981]" />
            <span>{project.createdAt}</span>
          </div>

          {/* Category Tag */}
          <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-[#0b0f12]/80 backdrop-blur-md border border-[#222c35] text-xs font-mono text-[#10b981] pointer-events-none">
            {project.category}
          </div>
        </div>

        {/* Card Content Body */}
        <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
          <div className="space-y-3">
            <h3 className="text-xl font-bold text-[#f3f4f6] group-hover:text-[#10b981] transition-colors line-clamp-1">
              {project.title}
            </h3>

            {project.role && (
              <p className="text-xs font-mono text-[#10b981] font-semibold">
                Peran: {project.role}
              </p>
            )}

            <p className="text-sm text-[#9ca3af] line-clamp-2 leading-relaxed">
              {project.summary}
            </p>
          </div>

          {/* Tech Stack Badges */}
          <div className="flex flex-wrap gap-1.5 pt-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-0.5 rounded-md bg-[#222c35]/60 text-xs font-mono text-[#9ca3af] border border-[#222c35]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Card Footer Actions */}
      <div className="p-6 pt-0 flex items-center justify-between border-t border-[#222c35] mt-4 shrink-0">
        <Link
          href={`/projects/${project.slug}`}
          className="relative z-20 inline-flex items-center gap-1.5 text-xs font-medium text-[#10b981] hover:underline cursor-pointer group/link"
        >
          <span>Detail Lengkap</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
        </Link>

        <div className="flex items-center gap-3">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-[#0b0f12] border border-[#222c35] text-[#9ca3af] hover:text-[#f3f4f6] hover:border-[#10b981] transition-colors relative z-20"
              aria-label="GitHub Repository"
            >
              <Github className="w-4 h-4" />
            </a>
          )}
          {project.submissionUrl && (
            <a
              href={project.submissionUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-[#0b0f12] border border-[#222c35] text-[#9ca3af] hover:text-[#10b981] hover:border-[#10b981] transition-colors relative z-20"
              aria-label="Submission / Drive Project"
              title="Berkas Submission"
            >
              <Folder className="w-4 h-4" />
            </a>
          )}
          {project.documentationUrl && (
            <a
              href={project.documentationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-[#0b0f12] border border-[#222c35] text-[#9ca3af] hover:text-[#10b981] hover:border-[#10b981] transition-colors relative z-20"
              aria-label="Dokumentasi Video"
              title="Dokumentasi Video"
            >
              <Video className="w-4 h-4 text-red-400" />
            </a>
          )}
          {project.paperUrl && (
            <a
              href={project.paperUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-[#0b0f12] border border-[#222c35] text-[#9ca3af] hover:text-[#10b981] hover:border-[#10b981] transition-colors relative z-20"
              aria-label="Jurnal Ilmiah (SINTA 3)"
              title="Jurnal Ilmiah (SINTA 3)"
            >
              <FileText className="w-4 h-4 text-emerald-400" />
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-[#0b0f12] border border-[#222c35] text-[#9ca3af] hover:text-[#f3f4f6] hover:border-[#10b981] transition-colors relative z-20"
              aria-label="Kunjungi Website"
              title="Kunjungi Website"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};
