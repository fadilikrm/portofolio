'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Code2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { siteConfig } from '@/config/site';

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: 'Beranda', href: '#hero' },
  { label: 'Pengalaman', href: '#experience' },
  { label: 'Proyek', href: '#projects' },
  { label: 'Keahlian', href: '#skills' },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0b0f12]/80 backdrop-blur-md border-b border-[#222c35] py-3 shadow-lg shadow-black/30'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <Link
          href="#hero"
          className="flex items-center gap-2 text-lg font-bold text-[#f3f4f6] hover:text-[#10b981] transition-colors group"
        >
          <div className="p-1.5 rounded-lg bg-[#141a1f] border border-[#222c35] group-hover:border-[#10b981] transition-colors">
            <Code2 className="w-5 h-5 text-[#10b981]" />
          </div>
          <span>
            {siteConfig.name}
            <span className="text-[#10b981]">.dev</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 bg-[#141a1f]/60 border border-[#222c35] rounded-full px-4 py-1.5 backdrop-blur-sm">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="px-4 py-1.5 text-sm font-medium text-[#9ca3af] hover:text-[#f3f4f6] hover:bg-[#222c35]/50 rounded-full transition-all"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center">
          <a
            href={siteConfig.socials.find((s) => s.platform === 'email')?.url || 'mailto:fadil.dev@example.com'}
            className="px-4 py-2 text-sm font-medium text-[#f3f4f6] bg-[#10b981] hover:bg-emerald-600 rounded-lg transition-colors shadow-sm hover:shadow-emerald-500/20"
          >
            Kontak Saya
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg bg-[#141a1f] border border-[#222c35] text-[#9ca3af] hover:text-[#f3f4f6]"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0b0f12]/95 border-b border-[#222c35] backdrop-blur-lg px-4 pt-2 pb-6"
          >
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-2.5 text-base font-medium text-[#9ca3af] hover:text-[#f3f4f6] hover:bg-[#141a1f] rounded-lg transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <a
                href={siteConfig.socials.find((s) => s.platform === 'email')?.url || 'mailto:fadil.dev@example.com'}
                onClick={() => setMobileMenuOpen(false)}
                className="mt-2 w-full text-center py-2.5 text-base font-medium text-[#f3f4f6] bg-[#10b981] rounded-lg hover:bg-emerald-600 transition-colors"
              >
                Kontak Saya
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
