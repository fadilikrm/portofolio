'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ExternalLink, Github, ArrowRight, Sparkles } from 'lucide-react';
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
      whileTap={prefersReducedMotion ? undefined : 'tap'}
      className={`group relative rounded-2xl bg-[#141a1f] border border-[#222c35] overflow-hidden flex flex-col justify-between transition-colors hover:border-[#10b981]/50 glow-card ${
        featured ? 'md:col-span-2' : ''
      }`}
    >
      <div>
        {/* Card Header Thumbnail */}
        <div className="relative w-full h-52 sm:h-60 overflow-hidden bg-[#0b0f12]">
          <Image
            src={project.thumbnailUrl}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#141a1f] via-transparent to-black/30" />

          {/* Featured Badge */}
          {project.featured && (
            <div className="absolute top-3 left-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#d97706]/90 backdrop-blur-md text-xs font-semibold text-[#f3f4f6] shadow-md">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Proyek Unggulan</span>
            </div>
          )}

          {/* Category Tag */}
          <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-[#0b0f12]/80 backdrop-blur-md border border-[#222c35] text-xs font-mono text-[#10b981]">
            {project.category}
          </div>
        </div>

        {/* Card Content Body */}
        <div className="p-6 space-y-4">
          <Link href={`/projects/${project.slug}`} className="block group-hover:text-[#10b981] transition-colors">
            <h3 className="text-xl font-bold text-[#f3f4f6] line-clamp-1">
              {project.title}
            </h3>
          </Link>

          <p className="text-sm text-[#9ca3af] line-clamp-2 leading-relaxed">
            {project.summary}
          </p>

          {/* Metrics Preview */}
          {project.metrics && project.metrics.length > 0 && (
            <div className="grid grid-cols-2 gap-2 pt-2">
              {project.metrics.slice(0, 2).map((m) => (
                <div key={m.label} className="bg-[#0b0f12]/70 p-2 rounded-lg border border-[#222c35]">
                  <p className="text-[10px] text-[#9ca3af] uppercase">{m.label}</p>
                  <p className="text-xs font-mono font-bold text-[#10b981]">{m.value}</p>
                </div>
              ))}
            </div>
          )}

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
      <div className="p-6 pt-0 flex items-center justify-between border-t border-[#222c35] mt-4">
        <Link
          href={`/projects/${project.slug}`}
          className="inline-flex items-center gap-1.5 text-xs font-medium text-[#10b981] hover:underline"
        >
          <span>Detail Lengkap</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>

        <div className="flex items-center gap-3">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-[#0b0f12] border border-[#222c35] text-[#9ca3af] hover:text-[#f3f4f6] hover:border-[#10b981] transition-colors"
              aria-label="GitHub Repository"
            >
              <Github className="w-4 h-4" />
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-[#0b0f12] border border-[#222c35] text-[#9ca3af] hover:text-[#f3f4f6] hover:border-[#10b981] transition-colors"
              aria-label="Live Demo"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};
