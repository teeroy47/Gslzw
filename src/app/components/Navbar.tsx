import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Menu, X, Diamond } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'About Us', href: '#about' },
    { name: 'Our Clients', href: '#clients' },
    { name: 'Technology', href: '#technology' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-300 ${
          scrolled
            ? 'bg-[#24336A] shadow-lg border-b-2 border-[#8DBF44]/30'
            : 'bg-transparent'
        }`}
        style={scrolled ? { backdropFilter: 'blur(20px)' } : {}}
      >
        <div className="max-w-[1280px] mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#" className="flex items-center gap-2">
              <Diamond className="w-6 h-6 text-[#8DBF44] fill-[#8DBF44]" />
              <span className="text-white font-['Syne'] font-extrabold text-2xl">
                Geosciencelab
              </span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-white font-['DM_Sans'] font-medium relative group ${
                    activeSection === link.href ? 'text-[#8DBF44]' : ''
                  }`}
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#8DBF44] transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <a
                href="#contact"
                className="relative inline-block px-7 py-3 bg-[#8DBF44] text-[#24336A] font-['DM_Sans'] font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_12px_40px_rgba(141,191,68,0.45)] overflow-hidden group"
              >
                <span className="relative z-10">Get a Quote</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-30 group-hover:animate-[shimmer_1.5s_ease-in-out] translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden text-white p-2"
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{
          height: mobileMenuOpen ? 'auto' : 0,
          opacity: mobileMenuOpen ? 1 : 0
        }}
        className="fixed top-[72px] left-0 right-0 bg-[#24336A] z-[999] lg:hidden overflow-hidden"
      >
        <div className="flex flex-col py-6 px-6 space-y-6">
          {navLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ x: -50, opacity: 0 }}
              animate={{
                x: mobileMenuOpen ? 0 : -50,
                opacity: mobileMenuOpen ? 1 : 0
              }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setMobileMenuOpen(false)}
              className="text-white font-['DM_Sans'] font-medium text-lg"
            >
              {link.name}
            </motion.a>
          ))}
          <motion.a
            href="#contact"
            initial={{ x: -50, opacity: 0 }}
            animate={{
              x: mobileMenuOpen ? 0 : -50,
              opacity: mobileMenuOpen ? 1 : 0
            }}
            transition={{ delay: navLinks.length * 0.1 }}
            onClick={() => setMobileMenuOpen(false)}
            className="w-full px-7 py-3 bg-[#8DBF44] text-[#24336A] font-['DM_Sans'] font-semibold rounded-lg text-center"
          >
            Get a Quote
          </motion.a>
        </div>
      </motion.div>
    </>
  );
}
