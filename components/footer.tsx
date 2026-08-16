import Link from 'next/link';
import { Github, Linkedin, Mail, Twitter, Instagram, ArrowUpRight, Code2 } from 'lucide-react';
import { siteConfig } from '@/config/site';
import type { SocialLink } from '@/types';

const getSocialIcon = (platform: SocialLink['platform']) => {
  switch (platform) {
    case 'github':
      return <Github className="w-5 h-5" />;
    case 'linkedin':
      return <Linkedin className="w-5 h-5" />;
    case 'email':
      return <Mail className="w-5 h-5" />;
    case 'twitter':
      return <Twitter className="w-5 h-5" />;
    case 'instagram':
      return <Instagram className="w-5 h-5" />;
    default:
      return <Mail className="w-5 h-5" />;
  }
};

const getSocialLabel = (platform: SocialLink['platform']) => {
  switch (platform) {
    case 'github':
      return 'GitHub';
    case 'linkedin':
      return 'LinkedIn';
    case 'email':
      return 'Email';
    case 'twitter':
      return 'Twitter / X';
    case 'instagram':
      return 'Instagram';
    default:
      return platform;
  }
};

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[#222c35] bg-[#0b0f12] pt-16 pb-12 text-[#9ca3af]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#222c35]">
          {/* Brand Column */}
          <div className="md:col-span-6 space-y-4">
            <Link
              href="/#hero"
              className="inline-flex items-center gap-2 text-xl font-bold text-[#f3f4f6] hover:text-[#10b981] transition-colors group"
            >
              <div className="p-1.5 rounded-lg bg-[#141a1f] border border-[#222c35] group-hover:border-[#10b981] transition-colors">
                <Code2 className="w-6 h-6 text-[#10b981]" />
              </div>
              <span>
                {siteConfig.name}
                <span className="text-[#10b981]">.dev</span>
              </span>
            </Link>
            <p className="text-sm text-[#9ca3af] max-w-md leading-relaxed">
              Membangun aplikasi web & mobile, serta integrasi AI, Computer Vision, dan sistem IoT. Terbuka untuk kolaborasi profesional.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#f3f4f6]">
              Navigasi Halaman
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/#hero" className="hover:text-[#10b981] transition-colors">
                  Beranda
                </Link>
              </li>
              <li>
                <Link href="/#experience" className="hover:text-[#10b981] transition-colors">
                  Pengalaman & Kompetisi
                </Link>
              </li>
              <li>
                <Link href="/#projects" className="hover:text-[#10b981] transition-colors">
                  Showcase Proyek
                </Link>
              </li>
              <li>
                <Link href="/#skills" className="hover:text-[#10b981] transition-colors">
                  Skills Radar
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="md:col-span-3 space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#f3f4f6]">
              Hubungi & Ikuti
            </h3>
            <div className="flex flex-col gap-2.5">
              {siteConfig.socials.map((social) => {
                const isMailto = social.url.startsWith('mailto:');
                return (
                  <a
                    key={social.platform}
                    href={social.url}
                    target={isMailto ? undefined : '_blank'}
                    rel={isMailto ? undefined : 'noopener noreferrer'}
                    className="inline-flex items-center justify-between p-2.5 rounded-lg bg-[#141a1f] border border-[#222c35] text-sm text-[#f3f4f6] hover:border-[#10b981] hover:text-[#10b981] transition-all group"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-[#10b981] group-hover:scale-110 transition-transform">
                        {getSocialIcon(social.platform)}
                      </span>
                      <span className="font-medium">{getSocialLabel(social.platform)}</span>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-[#9ca3af] group-hover:text-[#10b981] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#9ca3af]">
          <p>© {currentYear} {siteConfig.name}. Hak Cipta Dilindungi Undang-Undang.</p>
          <p className="flex items-center gap-1.5">
            Dibuat dengan Next.js 15, Tailwind CSS v4 & Motion
          </p>
        </div>
      </div>
    </footer>
  );
};
