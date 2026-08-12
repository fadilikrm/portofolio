'use client';

import { motion } from 'framer-motion';
import { projects } from '@/config/projects';
import { ProjectCard } from '@/components/animated/project-card';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import { usePrefersReducedMotion } from '@/hooks/use-media-query';

export const BentoGrid = () => {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <section id="projects" className="py-20 md:py-28 bg-[#0b0f12] border-t border-[#222c35]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-4">
          <h2 className="text-2xl sm:text-4xl font-bold text-[#f3f4f6]">
            Showcase Proyek Unggulan
          </h2>
          <p className="text-[#9ca3af] max-w-2xl mx-auto text-base">
            Kumpulan implementasi nyata dalam AI / Computer Vision, Edge IoT, Web Operations, dan Mobile Apps.
          </p>
        </div>

        {/* Bento Grid */}
        <motion.div
          variants={prefersReducedMotion ? undefined : staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project) => (
            <motion.div key={project.id} variants={prefersReducedMotion ? undefined : fadeInUp}>
              <ProjectCard project={project} featured={project.featured} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
