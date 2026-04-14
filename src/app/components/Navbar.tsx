import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { BriefcaseBusiness, Building2, FileStack, Mail, Menu, PhoneCall, X } from 'lucide-react';
import { companyProfile } from '../companyProfile';
import GslLogo from './GslLogo';

const navLinks = [
  { name: 'Services', href: '#services', icon: BriefcaseBusiness },
  { name: 'About Us', href: '#about', icon: Building2 },
  { name: 'Our Work', href: '#clients', icon: FileStack },
  { name: 'Contact', href: '#contact', icon: Mail }
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.querySelector(link.href))
      .filter((section): section is HTMLElement => section instanceof HTMLElement);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleEntry?.target.id) {
          setActiveSection(`#${visibleEntry.target.id}`);
        }
      },
      {
        rootMargin: '-35% 0px -45% 0px',
        threshold: [0.2, 0.35, 0.5]
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header>
      <nav data-state={menuOpen && 'active'} className="fixed z-20 w-full px-2 group">
        <div
          className={`mx-auto mt-2 max-w-6xl px-6 transition-all duration-300 lg:px-12 ${
            isScrolled ? 'max-w-5xl rounded-2xl border border-white/10 bg-brand-navy/82 backdrop-blur-lg lg:px-5' : ''
          }`}
        >
          <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 lg:flex-nowrap lg:gap-6 lg:py-4">
            <div className="flex w-full justify-between lg:w-1/4 lg:flex-none">
              <a href="#" aria-label="home" className="flex items-center lg:min-w-[160px]">
                <GslLogo className="h-12 w-auto sm:h-14" compact />
              </a>

              <button
                onClick={() => setMenuOpen((current) => !current)}
                aria-label={menuOpen ? 'Close Menu' : 'Open Menu'}
                className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden"
              >
                <Menu className="m-auto size-6 duration-200 group-data-[state=active]:scale-0 group-data-[state=active]:rotate-180 group-data-[state=active]:opacity-0" />
                <X className="absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200 group-data-[state=active]:rotate-0 group-data-[state=active]:scale-100 group-data-[state=active]:opacity-100" />
              </button>
            </div>

            <div className="hidden flex-1 justify-center lg:flex">
              <ul className="flex items-center gap-1 whitespace-nowrap text-sm">
                {navLinks.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className={`group inline-flex items-center gap-2 rounded-full px-4 py-2 font-semibold transition duration-150 ${
                        activeSection === item.href ? 'text-brand-lime' : 'text-white hover:text-brand-lime'
                      }`}
                    >
                      <item.icon
                        size={16}
                        className={activeSection === item.href ? 'text-brand-lime' : 'text-white/55 group-hover:text-brand-lime'}
                      />
                      <span>{item.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-6 hidden w-full flex-wrap items-center justify-end rounded-3xl border border-white/10 bg-brand-navy p-6 shadow-2xl shadow-zinc-950/25 group-data-[state=active]:block lg:mb-0 lg:flex lg:w-1/4 lg:flex-none lg:justify-end lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none">
              <div className="lg:hidden">
                <ul className="space-y-6 text-base">
                  {navLinks.map((item) => (
                    <li key={item.href}>
                      <a
                        href={item.href}
                        onClick={() => setMenuOpen(false)}
                        className="block font-medium text-white/85 duration-150 hover:text-brand-lime"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 flex w-full flex-col gap-3 sm:flex-row md:w-fit lg:mt-0">
                <a
                  href={`tel:${companyProfile.phones[0].replace(/\s+/g, '')}`}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-transparent text-white transition hover:border-brand-lime hover:text-brand-lime"
                  aria-label="Call us"
                >
                  <PhoneCall className="h-4 w-4" />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-full border border-transparent bg-brand-lime px-4 py-2.5 text-sm font-semibold text-brand-navy transition hover:brightness-105"
                >
                  Request a Quote
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
