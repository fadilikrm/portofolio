'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, Trophy, GraduationCap, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { experiences } from '@/config/experience';
import type { ExperienceType } from '@/types';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import { usePrefersReducedMotion } from '@/hooks/use-media-query';

type FilterType = 'All' | ExperienceType;

const filterOptions: { label: string; value: FilterType }[] = [
  { label: 'Semua', value: 'All' },
  { label: 'Pekerjaan', value: 'Work' },
  { label: 'Kompetisi', value: 'Competition' },
  { label: 'Pendidikan', value: 'Education' },
];

const getTypeIcon = (type: ExperienceType) => {
  switch (type) {
    case 'Work':
      return <Briefcase className="w-4 h-4 text-[#10b981]" />;
    case 'Competition':
      return <Trophy className="w-4 h-4 text-[#d97706]" />;
    case 'Education':
      return <GraduationCap className="w-4 h-4 text-[#10b981]" />;
  }
};

const getTypeBadgeClass = (type: ExperienceType) => {
  switch (type) {
    case 'Work':
      return 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400';
    case 'Competition':
      return 'bg-amber-500/10 border-amber-500/30 text-amber-400';
    case 'Education':
      return 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400';
  }
};

export const Timeline = () => {
  const [activeFilter, setActiveFilter] = useState<FilterType>('All');
  const prefersReducedMotion = usePrefersReducedMotion();

  const filteredExperiences = experiences.filter((exp) => {
    if (activeFilter === 'All') return true;
    return exp.type === activeFilter;
  });

  return (
    <section id="experience" className="py-20 md:py-28 bg-[#0b0f12] border-t border-[#222c35]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-2xl sm:text-4xl font-bold text-[#f3f4f6]">
            Pengalaman & Pencapaian
          </h2>
          <p className="text-[#9ca3af] max-w-2xl mx-auto text-base">
            Rekam jejak profesional, kemenangan kompetisi hackathon, dan latar belakang akademis.
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {filterOptions.map((opt) => (
              <button
                key={opt.value}
                type="button"
                onClick={() => setActiveFilter(opt.value)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                  activeFilter === opt.value
                    ? 'bg-[#10b981] text-[#f3f4f6] shadow-md shadow-emerald-500/20'
                    : 'bg-[#141a1f] text-[#9ca3af] hover:text-[#f3f4f6] border border-[#222c35]'
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        {/* Timeline Items List */}
        <motion.div
          layout={!prefersReducedMotion}
          variants={prefersReducedMotion ? undefined : staggerContainer}
          initial="hidden"
          animate="show"
          className="relative border-l-2 border-[#222c35] ml-4 sm:ml-32 space-y-12"
        >
          <AnimatePresence mode="popLayout">
            {filteredExperiences.map((exp) => (
              <motion.div
                key={exp.id}
                layout={!prefersReducedMotion}
                variants={prefersReducedMotion ? undefined : fadeInUp}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="relative pl-6 sm:pl-8 group"
              >
                {/* Node Icon on Timeline Line */}
                <div className="absolute -left-[17px] top-1.5 p-2 rounded-full bg-[#141a1f] border border-[#222c35] group-hover:border-[#10b981] transition-colors">
                  {getTypeIcon(exp.type)}
                </div>

                {/* Date / Period tag on left side (desktop) */}
                <div className="hidden sm:block absolute -left-36 top-2 text-xs font-mono text-[#9ca3af] text-right w-28">
                  {exp.period}
                </div>

                {/* Card Container */}
                <div className="p-6 rounded-2xl bg-[#141a1f] border border-[#222c35] hover:border-[#10b981]/50 transition-all glow-card space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#222c35] pb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-[#f3f4f6]">
                        {exp.role}
                      </h3>
                      <p className="text-sm font-medium text-[#10b981]">
                        {exp.organization}
                      </p>
                    </div>

                    <div className="flex items-center gap-2 flex-wrap">
                      <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md border text-xs font-medium ${getTypeBadgeClass(exp.type)}`}>
                        {getTypeIcon(exp.type)}
                        <span>{exp.type}</span>
                      </span>

                      <div className="sm:hidden inline-flex items-center gap-1 text-xs font-mono text-[#9ca3af]">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                  </div>

                  {exp.location && (
                    <div className="flex items-center gap-1.5 text-xs text-[#9ca3af]">
                      <MapPin className="w-3.5 h-3.5 text-[#10b981]" />
                      <span>{exp.location}</span>
                    </div>
                  )}

                  {/* Bullet description */}
                  <ul className="space-y-2 text-sm text-[#9ca3af]">
                    {exp.description.map((desc, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-[#10b981] mt-1">•</span>
                        <span>{desc}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Achievements */}
                  {exp.achievements && exp.achievements.length > 0 && (
                    <div className="bg-[#0b0f12]/60 rounded-xl p-3 border border-[#222c35] space-y-1.5">
                      <p className="text-xs font-semibold text-[#f3f4f6] uppercase tracking-wider">
                        Pencapaian Utama:
                      </p>
                      {exp.achievements.map((ach, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-[#10b981]">
                          <CheckCircle2 className="w-3.5 h-3.5 shrink-0 text-[#10b981]" />
                          <span>{ach}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Tech stack tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-md bg-[#222c35]/50 text-xs font-mono text-[#9ca3af] border border-[#222c35]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
