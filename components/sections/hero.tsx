'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Globe, Smartphone, Eye, Cpu } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import { usePrefersReducedMotion } from '@/hooks/use-media-query';

const roleText = 'Junior IT Developer';

export const Hero = () => {
  const prefersReducedMotion = usePrefersReducedMotion();

  const [currentText, setCurrentText] = useState('');

  useEffect(() => {
    if (prefersReducedMotion) {
      setCurrentText(roleText);
      return;
    }

    if (currentText.length < roleText.length) {
      const timeout = setTimeout(() => {
        setCurrentText(roleText.slice(0, currentText.length + 1));
      }, 75);
      return () => clearTimeout(timeout);
    }
  }, [currentText, prefersReducedMotion]);

  const containerVariants = prefersReducedMotion ? undefined : staggerContainer;
  const itemVariants = prefersReducedMotion ? undefined : fadeInUp;

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden bg-[#0b0f12]"
    >
      {/* Background Grid Pattern & Subtle Radial Glow Effects */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#10b981]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#d97706]/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="space-y-8 max-w-4xl mx-auto"
        >
          {/* Main Headline */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#f3f4f6] leading-[1.1]">
              Halo, Saya <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f3f4f6] via-[#10b981] to-[#059669]">{siteConfig.name}</span>
            </h1>

            {/* Avatar Cutout Image (Between Title & Role) */}
            {siteConfig.avatar && (
              <div className="flex justify-center py-2">
                <div className="relative group cursor-pointer">
                  {/* Soft Radial Ambient Glow */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 sm:w-40 sm:h-40 bg-gradient-to-tr from-[#10b981]/20 to-[#d97706]/20 rounded-full blur-xl pointer-events-none group-hover:scale-110 transition-transform duration-500" />

                  {/* Direct Image Cutout Display - Compact Size */}
                  <div className="relative w-28 h-36 sm:w-36 sm:h-44 flex items-center justify-center">
                    <Image
                      src={siteConfig.avatar}
                      alt={siteConfig.name}
                      fill
                      sizes="(max-width: 640px) 112px, 144px"
                      className="object-contain filter drop-shadow-[0_8px_20px_rgba(16,185,129,0.2)] transition-transform duration-500 group-hover:scale-105"
                      priority
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Typing Effect Role Title with Emerald Gradient */}
            <div className="min-h-[40px] flex items-center justify-center">
              <p className="text-xl sm:text-2xl md:text-3xl font-semibold max-w-3xl mx-auto leading-relaxed flex items-center justify-center">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#10b981] via-emerald-400 to-[#d97706] font-mono">
                  {currentText}
                </span>
                <span className="w-0.5 h-6 sm:h-7 bg-[#10b981] animate-pulse inline-block ml-1" />
              </p>
            </div>
          </motion.div>

          {/* Profile Summary */}
          <motion.p variants={itemVariants} className="text-base sm:text-lg text-[#9ca3af] max-w-2xl mx-auto leading-relaxed">
            Berfokus pada pembangunan aplikasi Web dan Mobile, dengan integrasi Artificial Intelligence, serta Embedded System.
          </motion.p>

          {/* Tech Speciality Tags */}
          <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-[#141a1f] border border-[#222c35] text-xs font-mono text-[#f3f4f6]">
              <Globe className="w-4 h-4 text-[#10b981]" />
              <span>Web Development</span>
            </div>
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-[#141a1f] border border-[#222c35] text-xs font-mono text-[#f3f4f6]">
              <Smartphone className="w-4 h-4 text-[#d97706]" />
              <span>Mobile Development</span>
            </div>
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-[#141a1f] border border-[#222c35] text-xs font-mono text-[#f3f4f6]">
              <Eye className="w-4 h-4 text-[#10b981]" />
              <span>Artificial Intelligence</span>
            </div>
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-[#141a1f] border border-[#222c35] text-xs font-mono text-[#f3f4f6]">
              <Cpu className="w-4 h-4 text-[#f59e0b]" />
              <span>IoT / Embedded System</span>
            </div>
          </motion.div>

          {/* Call to Actions */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a
              href="#projects"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#10b981] hover:bg-emerald-600 text-[#f3f4f6] font-medium transition-all shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/30 hover:-translate-y-0.5"
            >
              <span>Lihat Proyek Saya</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href={siteConfig.socials.find((s) => s.platform === 'email')?.url || 'mailto:fadil.dev@example.com'}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#141a1f] hover:bg-[#222c35] border border-[#222c35] text-[#f3f4f6] font-medium transition-all hover:-translate-y-0.5"
            >
              <span>Hubungi via Email</span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
