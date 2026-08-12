'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Code2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { siteConfig } from '@/config/site';

interface NavItem {
  label: string;
  href: string;
  id: string;
}

const navItems: NavItem[] = [
  { label: 'Beranda', href: '#hero', id: 'hero' },
  { label: 'Pengalaman', href: '#experience', id: 'experience' },
  { label: 'Proyek', href: '#projects', id: 'projects' },
  { label: 'Keahlian', href: '#skills', id: 'skills' },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // IntersectionObserver for scroll-spy active section tracking
  useEffect(() => {
    const sectionIds = navItems.map((item) => item.id);
    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observerOptions: IntersectionObserverInit = {
      root: null,
      rootMargin: '-20% 0px -50% 0px',
      threshold: 0,
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, id: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    setActiveSection(id);

    const element = document.getElementById(id);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0b0f12]/90 backdrop-blur-md border-b border-[#222c35] py-3 shadow-lg shadow-black/40'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, '#hero', 'hero')}
          className="flex items-center gap-2 text-lg font-bold text-[#f3f4f6] hover:text-[#10b981] transition-colors group cursor-pointer"
        >
          <div className="p-1.5 rounded-lg bg-[#141a1f] border border-[#222c35] group-hover:border-[#10b981] transition-colors">
            <Code2 className="w-5 h-5 text-[#10b981]" />
          </div>
          <span>
            {siteConfig.name}
            <span className="text-[#10b981]">.dev</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1.5 bg-[#141a1f]/80 border border-[#222c35] rounded-full px-3 py-1.5 backdrop-blur-md">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href, item.id)}
                className={`px-4 py-1.5 text-sm font-medium rounded-full transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#10b981]/15 text-[#10b981] font-semibold border border-[#10b981]/30 shadow-sm'
                    : 'text-[#9ca3af] hover:text-[#f3f4f6] hover:bg-[#222c35]/50 border border-transparent'
                }`}
              >
                {item.label}
              </a>
            );
          })}
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
          className="md:hidden p-2.5 rounded-lg bg-[#141a1f] border border-[#222c35] text-[#9ca3af] hover:text-[#f3f4f6] active:scale-95 transition-all cursor-pointer"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6 text-[#10b981]" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-[#0b0f12]/95 border-b border-[#222c35] backdrop-blur-xl px-4 pt-3 pb-6 shadow-2xl"
          >
            <div className="flex flex-col gap-2">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href, item.id)}
                    className={`block w-full px-4 py-3 text-base font-medium rounded-xl transition-all cursor-pointer active:scale-[0.99] ${
                      isActive
                        ? 'bg-[#10b981]/15 text-[#10b981] font-semibold border border-[#10b981]/30'
                        : 'text-[#9ca3af] hover:text-[#f3f4f6] hover:bg-[#141a1f] border border-transparent'
                    }`}
                  >
                    {item.label}
                  </a>
                );
              })}
              <a
                href={siteConfig.socials.find((s) => s.platform === 'email')?.url || 'mailto:fadil.dev@example.com'}
                onClick={() => setMobileMenuOpen(false)}
                className="mt-2 block w-full text-center py-3 text-base font-medium text-[#f3f4f6] bg-[#10b981] hover:bg-emerald-600 rounded-xl transition-colors shadow-md shadow-emerald-500/20 active:scale-[0.99]"
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
