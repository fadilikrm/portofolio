'use client';

import { motion } from 'framer-motion';
import {
  Brain,
  Eye,
  Cpu,
  Code2,
  CircuitBoard,
  Radio,
  Terminal,
  Globe,
  Code,
  Palette,
  Server,
  Layers,
  Box,
  GitBranch,
  TerminalSquare,
  Cloud,
  Smartphone,
  Layout,
  Shield,
  Database,
  CheckCircle2,
} from 'lucide-react';
import { skills } from '@/config/skills';
import type { SkillCategory, Skill } from '@/types';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import { usePrefersReducedMotion } from '@/hooks/use-media-query';

const categoryList: SkillCategory[] = [
  'Web Development',
  'Mobile Development',
  'AI & Computer Vision',
  'IoT / Embedded System',
  'Tools & DevSecOps',
];

const categoryColors: Record<SkillCategory, { text: string; bg: string; border: string; chipHover: string }> = {
  'Web Development': {
    text: 'text-[#10b981]',
    bg: 'bg-emerald-500/10',
    border: 'border-emerald-500/30',
    chipHover: 'hover:border-emerald-500/50 hover:bg-emerald-500/5',
  },
  'Mobile Development': {
    text: 'text-[#d97706]',
    bg: 'bg-amber-500/10',
    border: 'border-amber-500/30',
    chipHover: 'hover:border-amber-500/50 hover:bg-amber-500/5',
  },
  'AI & Computer Vision': {
    text: 'text-[#10b981]',
    bg: 'bg-emerald-500/10',
    border: 'border-emerald-500/30',
    chipHover: 'hover:border-emerald-500/50 hover:bg-emerald-500/5',
  },
  'IoT / Embedded System': {
    text: 'text-[#f59e0b]',
    bg: 'bg-amber-500/10',
    border: 'border-amber-500/30',
    chipHover: 'hover:border-amber-500/50 hover:bg-amber-500/5',
  },
  'Tools & DevSecOps': {
    text: 'text-cyan-400',
    bg: 'bg-cyan-500/10',
    border: 'border-cyan-500/30',
    chipHover: 'hover:border-cyan-500/50 hover:bg-cyan-500/5',
  },
};

const renderIcon = (name?: string) => {
  const props = { className: 'w-4 h-4 shrink-0' };
  switch (name) {
    case 'Globe': return <Globe {...props} />;
    case 'Code': return <Code {...props} />;
    case 'Palette': return <Palette {...props} />;
    case 'Server': return <Server {...props} />;
    case 'Layers': return <Layers {...props} />;
    case 'Database': return <Database {...props} />;
    case 'Smartphone': return <Smartphone {...props} />;
    case 'Layout': return <Layout {...props} />;
    case 'Mobile': return <Smartphone {...props} />;
    case 'Shield': return <Shield {...props} />;
    case 'Brain': return <Brain {...props} />;
    case 'Eye': return <Eye {...props} />;
    case 'Cpu': return <Cpu {...props} />;
    case 'Code2': return <Code2 {...props} />;
    case 'CircuitBoard': return <CircuitBoard {...props} />;
    case 'Radio': return <Radio {...props} />;
    case 'Terminal': return <Terminal {...props} />;
    case 'Box': return <Box {...props} />;
    case 'GitBranch': return <GitBranch {...props} />;
    case 'TerminalSquare': return <TerminalSquare {...props} />;
    case 'Cloud': return <Cloud {...props} />;
    default: return <CheckCircle2 {...props} />;
  }
};

export const SkillsRadar = () => {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <section id="skills" className="py-20 md:py-28 bg-[#0b0f12] border-t border-[#222c35]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-4">
          <h2 className="text-2xl sm:text-4xl font-bold text-[#f3f4f6]">
            Skills & Spektrum Keahlian
          </h2>
          <p className="text-[#9ca3af] max-w-2xl mx-auto text-base">
            Kumpulan teknologi dan tools yang saya gunakan dalam pembangunan aplikasi web, mobile, serta integrasi sistem.
          </p>
        </div>

        {/* Categories Grid */}
        <motion.div
          variants={prefersReducedMotion ? undefined : staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {categoryList.map((cat) => {
            const categorySkills = skills.filter((s) => s.category === cat);
            const style = categoryColors[cat];

            return (
              <motion.div
                key={cat}
                variants={prefersReducedMotion ? undefined : fadeInUp}
                className="p-6 rounded-2xl bg-[#141a1f] border border-[#222c35] space-y-6 glow-card flex flex-col justify-between"
              >
                {/* Category Header */}
                <div className="flex items-center justify-between border-b border-[#222c35] pb-4">
                  <h3 className="text-lg font-bold text-[#f3f4f6] flex items-center gap-2">
                    <span className={`px-3 py-1 rounded-lg border text-xs font-mono font-semibold ${style.bg} ${style.border} ${style.text}`}>
                      {cat}
                    </span>
                  </h3>
                  <span className="text-xs font-mono text-[#9ca3af]">
                    {categorySkills.length} Teknologi
                  </span>
                </div>

                {/* Skill Chip/Badge Grid */}
                <div className="flex flex-wrap gap-2.5">
                  {categorySkills.map((skill: Skill) => (
                    <div
                      key={skill.name}
                      className={`inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-[#0b0f12] border border-[#222c35] text-sm text-[#f3f4f6] font-medium transition-all ${style.chipHover}`}
                    >
                      <span className={style.text}>{renderIcon(skill.iconName)}</span>
                      <span>{skill.name}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
