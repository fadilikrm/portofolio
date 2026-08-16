'use client';

import { motion } from 'framer-motion';
import { FolderGit2, ExternalLink } from 'lucide-react';
import { projects } from '@/config/projects';
import { ProjectCard } from '@/components/animated/project-card';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import { usePrefersReducedMotion } from '@/hooks/use-media-query';

export const BentoGrid = () => {
  const prefersReducedMotion = usePrefersReducedMotion();

  const sortedProjects = [...projects].sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );

  return (
    <section id="projects" className="py-20 md:py-28 bg-[#0b0f12] border-t border-[#222c35]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-4">
          <h2 className="text-2xl sm:text-4xl font-bold text-[#f3f4f6]">
            Showcase Proyek Unggulan
          </h2>
          <p className="text-[#9ca3af] max-w-2xl mx-auto text-base">
            Eksplorasi karya dan solusi teknologi yang dirancang untuk memberikan dampak nyata pada Web Development, Mobile Apps, AI & Computer Vision, serta IoT / Embedded System.
          </p>

          {/* LinkedIn Projects Button */}
          <div className="flex justify-center pt-2">
            <a
              href="https://www.linkedin.com/in/ahmad-fadhil-ikram/details/projects/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#141a1f] hover:bg-[#222c35] border border-[#222c35] text-xs font-medium text-[#10b981] hover:text-emerald-400 transition-colors shadow-sm group"
            >
              <FolderGit2 className="w-3.5 h-3.5 text-[#10b981]" />
              <span>Lihat Semua Proyek di LinkedIn</span>
              <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>
        </div>

        {/* Bento Grid */}
        <motion.div
          variants={prefersReducedMotion ? undefined : staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {sortedProjects.map((project) => (
            <motion.div key={project.id} variants={prefersReducedMotion ? undefined : fadeInUp} className="h-full flex flex-col">
              <ProjectCard project={project} featured={false} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
