'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Code2, FileText } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { siteConfig } from '@/config/site';

interface NavItem {
  label: string;
  id: string;
}

const navItems: NavItem[] = [
  { label: 'Beranda', id: 'hero' },
  { label: 'Pengalaman', id: 'experience' },
  { label: 'Proyek', id: 'projects' },
  { label: 'Keahlian', id: 'skills' },
];

export const Navbar = () => {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>('hero');

  const isHomePage = pathname === '/';

  // This ref blocks IntersectionObserver from overwriting the active section
  // while the user is doing a programmatic scroll (from clicking a nav link)
  const isScrollingToProgrammatic = useRef(false);
  const scrollingTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = useCallback((id: string) => {
    const element = document.getElementById(id);
    if (!element) return;

    // Lock observer for duration of scroll (max 1.2 seconds)
    isScrollingToProgrammatic.current = true;
    if (scrollingTimerRef.current) clearTimeout(scrollingTimerRef.current);
    scrollingTimerRef.current = setTimeout(() => {
      isScrollingToProgrammatic.current = false;
    }, 1200);

    const offsetTop = element.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top: offsetTop, behavior: 'smooth' });
  }, []);

  // IntersectionObserver: only update active section when on homepage and NOT doing a click-scroll
  useEffect(() => {
    if (!isHomePage) return;

    const observerCallback: IntersectionObserverCallback = (entries) => {
      // Skip updates while user clicked a nav link
      if (isScrollingToProgrammatic.current) return;

      // Find the entry that is most visible
      let best: IntersectionObserverEntry | null = null;
      for (const entry of entries) {
        if (entry.isIntersecting) {
          if (!best || entry.intersectionRatio > best.intersectionRatio) {
            best = entry;
          }
        }
      }
      if (best) {
        setActiveSection(best.target.id);
      }
    };

    const observerOptions: IntersectionObserverInit = {
      root: null,
      rootMargin: '-30% 0px -60% 0px',
      threshold: [0, 0.25, 0.5, 1],
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    navItems.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [isHomePage]);

  // Handle hash scroll when landing on or navigating to homepage
  useEffect(() => {
    if (isHomePage) {
      const hash = window.location.hash.replace('#', '');
      if (hash) {
        const timeoutId = setTimeout(() => {
          scrollToSection(hash);
          setActiveSection(hash);
        }, 150);
        return () => clearTimeout(timeoutId);
      }
    }
  }, [isHomePage, scrollToSection]);

  // Listen for hashchange events
  useEffect(() => {
    const handleHashChange = () => {
      if (isHomePage) {
        const hash = window.location.hash.replace('#', '');
        if (hash) {
          scrollToSection(hash);
          setActiveSection(hash);
        }
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [isHomePage, scrollToSection]);

  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, id: string, isMobile = false) => {
      if (isHomePage) {
        e.preventDefault();
        setActiveSection(id); // immediately highlight the clicked item

        if (isMobile && mobileMenuOpen) {
          // Close menu first, then wait for exit animation before scrolling
          // so the layout shift from menu closing doesn't cancel window.scrollTo
          setMobileMenuOpen(false);
          setTimeout(() => scrollToSection(id), 280);
        } else {
          scrollToSection(id);
        }
      } else {
        if (isMobile && mobileMenuOpen) {
          setMobileMenuOpen(false);
        }
        setActiveSection(id);
      }
    },
    [isHomePage, scrollToSection, mobileMenuOpen],
  );

  const emailHref =
    siteConfig.socials.find((s) => s.platform === 'email')?.url ||
    'mailto:fadilikram087@gmail.com';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0b0f12]/90 backdrop-blur-md border-b border-[#222c35] py-3 shadow-lg shadow-black/40'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/#hero"
          onClick={(e) => handleNavClick(e, 'hero')}
          className="flex items-center gap-2 text-lg font-bold text-[#f3f4f6] hover:text-[#10b981] transition-colors group cursor-pointer bg-transparent border-none outline-none"
          aria-label="Ke beranda"
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
        <nav className="hidden md:flex items-center gap-1.5 bg-[#141a1f]/80 border border-[#222c35] rounded-full px-3 py-1.5 backdrop-blur-md">
          {navItems.map((item) => {
            const isActive = isHomePage
              ? activeSection === item.id
              : pathname.startsWith('/projects') && item.id === 'projects';

            return (
              <Link
                key={item.id}
                href={`/#${item.id}`}
                onClick={(e) => handleNavClick(e, item.id)}
                className={`px-4 py-1.5 text-sm font-medium rounded-full transition-all duration-200 cursor-pointer border outline-none ${
                  isActive
                    ? 'bg-[#10b981]/15 text-[#10b981] font-semibold border-[#10b981]/30 shadow-sm'
                    : 'text-[#9ca3af] hover:text-[#f3f4f6] hover:bg-[#222c35]/50 border-transparent'
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center">
          <a
            href={emailHref}
            className="px-4 py-2 text-sm font-medium text-[#f3f4f6] bg-[#10b981] hover:bg-emerald-600 rounded-lg transition-colors shadow-sm hover:shadow-emerald-500/20"
          >
            Kontak Saya
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          className="md:hidden flex items-center justify-center w-11 h-11 rounded-lg bg-[#141a1f] border border-[#222c35] text-[#9ca3af] hover:text-[#f3f4f6] active:scale-95 transition-all cursor-pointer"
          aria-label="Toggle navigation menu"
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6 text-[#10b981]" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden bg-[#0b0f12]/97 border-b border-[#222c35] backdrop-blur-xl shadow-2xl"
          >
            <div className="flex flex-col gap-1.5 px-4 pt-3 pb-6">
              {navItems.map((item) => {
                const isActive = isHomePage
                  ? activeSection === item.id
                  : pathname.startsWith('/projects') && item.id === 'projects';

                return (
                  <Link
                    key={item.id}
                    href={`/#${item.id}`}
                    onClick={(e) => handleNavClick(e, item.id, true)}
                    className={`w-full text-left px-4 py-3.5 text-base font-medium rounded-xl transition-all duration-150 cursor-pointer border outline-none touch-manipulation ${
                      isActive
                        ? 'bg-[#10b981]/15 text-[#10b981] font-semibold border-[#10b981]/40'
                        : 'text-[#9ca3af] hover:text-[#f3f4f6] hover:bg-[#141a1f] border-transparent active:bg-[#141a1f]'
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <div className="grid grid-cols-2 gap-2 pt-2">
                <a
                  href={siteConfig.resume?.id || '/resume/Resume-Indonesia-Ahmad Fadhil Ikram.pdf'}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-1.5 py-3 text-sm font-medium text-[#f3f4f6] bg-[#141a1f] border border-[#222c35] hover:bg-[#222c35] rounded-xl transition-colors"
                >
                  <FileText className="w-4 h-4 text-[#10b981]" />
                  <span>Resume (ID)</span>
                </a>
                <a
                  href={siteConfig.resume?.en || '/resume/Resume-English-Ahmad Fadhil Ikram.pdf'}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-1.5 py-3 text-sm font-medium text-[#f3f4f6] bg-[#141a1f] border border-[#222c35] hover:bg-[#222c35] rounded-xl transition-colors"
                >
                  <FileText className="w-4 h-4 text-[#10b981]" />
                  <span>Resume (EN)</span>
                </a>
              </div>
              <a
                href={emailHref}
                onClick={() => setMobileMenuOpen(false)}
                className="mt-2 block w-full text-center py-3.5 text-base font-medium text-[#f3f4f6] bg-[#10b981] hover:bg-emerald-600 rounded-xl transition-colors shadow-md shadow-emerald-500/20 touch-manipulation"
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
