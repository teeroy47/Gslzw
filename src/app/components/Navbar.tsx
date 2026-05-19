import { useEffect, useMemo, useRef, useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import {
  BriefcaseBusiness,
  Building2,
  FlaskConical,
  Home,
  Phone,
  PhoneCall
} from 'lucide-react';
import { companyProfile } from '../companyProfile';
import { engineeredEase } from '../motion';
import GslLogo from './GslLogo';

const navLinks = [
  { name: 'Home', shortName: 'Home', href: '#', icon: Home },
  { name: 'Services', shortName: 'Services', href: '#services', icon: BriefcaseBusiness },
  { name: 'Testing Systems', shortName: 'Testing', href: '#technology', icon: FlaskConical },
  { name: 'Our Work', shortName: 'Work', href: '#clients', icon: Building2 },
  { name: 'Contact', shortName: 'Contact', href: '#contact', icon: Phone }
];

function clamp(value: number, min = 0, max = 1) {
  return Math.min(max, Math.max(min, value));
}

function lerp(start: number, end: number, amount: number) {
  return start + (end - start) * amount;
}

function getSectionSelector(href: string) {
  return href === '#' ? null : href;
}

type NavItemProps = {
  item: (typeof navLinks)[number];
  active: boolean;
  compact?: boolean;
  mobile?: boolean;
  onActivate?: (href: string) => void;
  hrefOverride?: string;
};

function NavItem({ item, active, compact = false, mobile = false, onActivate, hrefOverride }: NavItemProps) {
  const Icon = item.icon;
  const href = hrefOverride ?? item.href;
  const isPhoneAction = href.startsWith('tel:');

  if (mobile) {
    return (
      <a
        href={href}
        onClick={() => {
          if (!isPhoneAction) onActivate?.(item.href);
        }}
        aria-label={item.name}
        aria-current={active ? 'page' : undefined}
        className="group relative flex min-h-12 min-w-12 flex-1 items-center justify-center outline-none focus-visible:ring-4 focus-visible:ring-[#8DBF44]/25"
      >
        <motion.span
          layout
          className={`relative flex min-h-11 items-center justify-center gap-1.5 rounded-full px-3 transition-colors duration-[260ms] ${
            active ? 'text-[#24336A]' : 'text-[#24336A]/58'
          }`}
          whileTap={{ scale: 0.96 }}
        >
          {active && (
            <motion.span
              layoutId="mobile-liquid-active"
              className="absolute inset-0 rounded-full border border-white/70 bg-white/78 shadow-[0_10px_28px_rgba(36,51,106,0.16)]"
              transition={{ type: 'spring', stiffness: 420, damping: 34, mass: 0.8 }}
            />
          )}
          <Icon
            className={`relative z-10 h-[1.18rem] w-[1.18rem] transition-all duration-[260ms] ${
              active ? 'translate-y-[-1px] stroke-[2.35]' : 'stroke-[1.85] group-hover:stroke-[2.2]'
            }`}
          />
          <span
            className={`relative z-10 overflow-hidden whitespace-nowrap font-mono text-[10px] font-bold uppercase tracking-[0.12em] transition-all duration-[260ms] ${
              active ? 'max-w-20 opacity-100' : 'max-w-0 opacity-0'
            }`}
          >
            {item.shortName}
          </span>
        </motion.span>
      </a>
    );
  }

  return (
    <a
      href={href}
      onClick={() => onActivate?.(item.href)}
      aria-current={active ? 'page' : undefined}
      className={`group relative inline-flex min-h-11 items-center gap-2 rounded-full px-3.5 font-semibold outline-none transition-colors duration-[260ms] focus-visible:ring-4 focus-visible:ring-[#8DBF44]/25 ${
        active ? 'text-[#24336A]' : 'text-white/78 hover:text-white'
      }`}
      style={{
        fontSize: `${compact ? 12.5 : 13.5}px`
      }}
    >
      {active && (
        <motion.span
          layoutId="desktop-liquid-active"
          className="absolute inset-0 rounded-full border border-white/60 bg-white/82 shadow-[0_10px_28px_rgba(255,255,255,0.10)]"
          transition={{ type: 'spring', stiffness: 430, damping: 36, mass: 0.8 }}
        />
      )}
      <Icon
        className={`relative z-10 transition-all duration-[260ms] ${
          active ? 'stroke-[2.35] text-[#8DBF44]' : 'stroke-[1.85] text-white/62 group-hover:text-[#8DBF44]'
        }`}
        style={{
          width: compact ? 15 : 16,
          height: compact ? 15 : 16
        }}
      />
      <span className="relative z-10 whitespace-nowrap">{item.name}</span>
    </a>
  );
}

export default function Navbar() {
  const prefersReducedMotion = useReducedMotion();
  const [activeSection, setActiveSection] = useState('#');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('down');
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);
  const idleTimer = useRef<number | null>(null);
  const frame = useRef<number | null>(null);
  const isMobileViewport = useRef(false);

  const compact = scrollProgress > 0.48;

  const motionTransition = useMemo(
    () =>
      prefersReducedMotion
        ? { duration: 0 }
        : { type: 'spring' as const, stiffness: 360, damping: 34, mass: 0.86 },
    [prefersReducedMotion]
  );

  useEffect(() => {
    const mobileQuery = window.matchMedia('(max-width: 1023px)');
    const updateViewportMode = () => {
      isMobileViewport.current = mobileQuery.matches;
    };

    const showAndScheduleHide = () => {
      setVisible(true);

      if (idleTimer.current) {
        window.clearTimeout(idleTimer.current);
      }

      idleTimer.current = window.setTimeout(() => {
        if (window.scrollY > 80) {
          setVisible(false);
        }
      }, 2000);
    };

    const updateScrollState = () => {
      const y = window.scrollY;
      const delta = y - lastScrollY.current;
      const nextProgress = Math.round(clamp(y / 220) * 100) / 100;

      setScrollProgress((current) => (Math.abs(current - nextProgress) > 0.01 ? nextProgress : current));
      if (Math.abs(delta) > 4) {
        setScrollDirection(delta > 0 ? 'down' : 'up');
      }
      lastScrollY.current = y;

      if (y < 80) {
        setVisible(true);
        if (idleTimer.current) window.clearTimeout(idleTimer.current);
      } else if (isMobileViewport.current) {
        if (idleTimer.current) window.clearTimeout(idleTimer.current);

        if (delta > 6) {
          setVisible(false);
        } else if (delta < -6) {
          showAndScheduleHide();
        }
      } else {
        showAndScheduleHide();
      }
    };

    const onScroll = () => {
      if (frame.current) return;
      frame.current = window.requestAnimationFrame(() => {
        updateScrollState();
        frame.current = null;
      });
    };

    const onPointerMove = (event: PointerEvent) => {
      const nearTop = event.clientY < 130;
      const nearBottom = window.innerHeight - event.clientY < 140;

      if (nearTop || nearBottom) {
        showAndScheduleHide();
      }
    };

    const onInteraction = () => showAndScheduleHide();

    updateViewportMode();
    updateScrollState();
    mobileQuery.addEventListener('change', updateViewportMode);
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('pointermove', onPointerMove, { passive: true });
    window.addEventListener('touchstart', onInteraction, { passive: true });
    window.addEventListener('keydown', onInteraction);

    return () => {
      window.removeEventListener('scroll', onScroll);
      mobileQuery.removeEventListener('change', updateViewportMode);
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('touchstart', onInteraction);
      window.removeEventListener('keydown', onInteraction);
      if (idleTimer.current) window.clearTimeout(idleTimer.current);
      if (frame.current) window.cancelAnimationFrame(frame.current);
    };
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map((link) => {
        const selector = getSectionSelector(link.href);
        return selector ? document.querySelector(selector) : null;
      })
      .filter((section): section is HTMLElement => section instanceof HTMLElement);

    const observer = new IntersectionObserver(
      (entries) => {
        if (window.scrollY < 140) {
          setActiveSection('#');
          return;
        }

        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleEntry?.target.id) {
          setActiveSection(`#${visibleEntry.target.id}`);
        }
      },
      {
        rootMargin: '-38% 0px -44% 0px',
        threshold: [0.18, 0.32, 0.48]
      }
    );

    sections.forEach((section) => observer.observe(section));

    const onScroll = () => {
      if (window.scrollY < 140) setActiveSection('#');
    };

    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  const desktopPaddingY = lerp(14, 7, scrollProgress);
  const desktopPaddingX = lerp(22, 12, scrollProgress);
  const logoHeight = lerp(54, 42, scrollProgress);
  const desktopGap = lerp(10, 4, scrollProgress);
  const desktopWidth = lerp(1120, 980, scrollProgress);
  const desktopBackgroundAlpha = lerp(0.38, 0.68, scrollProgress);
  const desktopBlur = lerp(18, 30, scrollProgress);
  const desktopSaturation = lerp(1.16, 1.34, scrollProgress);

  return (
    <>
      <header className="pointer-events-none fixed inset-x-0 top-0 z-[1000] hidden px-4 pt-3 lg:block">
        <motion.nav
          aria-label="Primary navigation"
          className="pointer-events-auto mx-auto overflow-hidden rounded-full border border-white/18 shadow-[0_20px_70px_rgba(17,24,39,0.18)] will-change-transform"
          animate={{
            opacity: visible ? 1 : 0,
            y: visible ? 0 : scrollDirection === 'down' ? -18 : -10,
            scale: visible ? 1 : 0.975,
            filter: visible ? 'blur(0px)' : 'blur(8px)'
          }}
          transition={motionTransition}
          onPointerEnter={() => setVisible(true)}
          style={{
            maxWidth: desktopWidth,
            padding: `${desktopPaddingY}px ${desktopPaddingX}px`,
            background: `linear-gradient(135deg, rgba(36,51,106,${desktopBackgroundAlpha}) 0%, rgba(17,24,39,${desktopBackgroundAlpha - 0.1}) 100%)`,
            backdropFilter: `blur(${desktopBlur}px) saturate(${desktopSaturation})`,
            WebkitBackdropFilter: `blur(${desktopBlur}px) saturate(${desktopSaturation})`
          }}
        >
          <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/55 to-transparent" />
          <div className="absolute inset-0 rounded-full ring-1 ring-inset ring-white/10" />

          <div className="relative z-10 flex items-center justify-between">
            <a
              href="#"
              aria-label="Geosciencelab home"
              className="flex min-h-11 min-w-[150px] items-center outline-none focus-visible:ring-4 focus-visible:ring-[#8DBF44]/25"
            >
              <GslLogo className="w-auto transition-[height] duration-[320ms]" style={{ height: logoHeight }} compact />
            </a>

            <ul className="flex items-center rounded-full border border-white/10 bg-white/[0.07] p-1 shadow-inner shadow-white/5">
              {navLinks.map((item) => (
                <li key={item.href} style={{ marginInline: desktopGap / 2 }}>
                  <NavItem
                    item={item}
                    active={activeSection === item.href}
                    compact={compact}
                    onActivate={setActiveSection}
                  />
                </li>
              ))}
            </ul>

            <div className="flex min-w-[150px] items-center justify-end gap-2">
              <a
                href={`tel:${companyProfile.phones[0].replace(/\s+/g, '')}`}
                aria-label="Call Geosciencelab"
                className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border border-white/18 bg-white/[0.08] text-white/84 outline-none transition-all duration-[260ms] hover:border-[#8DBF44]/70 hover:bg-white/[0.14] hover:text-[#8DBF44] focus-visible:ring-4 focus-visible:ring-[#8DBF44]/25"
              >
                <PhoneCall className="h-4 w-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex min-h-11 items-center justify-center rounded-full border border-[#8DBF44]/35 bg-[#8DBF44] px-4 text-sm font-bold text-[#24336A] shadow-[0_12px_32px_rgba(141,191,68,0.22)] outline-none transition-all duration-[260ms] hover:-translate-y-0.5 hover:brightness-105 focus-visible:ring-4 focus-visible:ring-[#8DBF44]/25"
              >
                Request Quote
              </a>
            </div>
          </div>
        </motion.nav>
      </header>

      <header className="pointer-events-none fixed inset-x-0 top-0 z-[1000] px-3 pt-[calc(0.75rem+env(safe-area-inset-top))] lg:hidden">
        <motion.nav
          aria-label="Mobile primary navigation"
          className="pointer-events-auto mx-auto max-w-[430px] overflow-hidden rounded-full border border-white/75 bg-[#F4F6FA]/82 px-2 py-2 shadow-[0_14px_44px_rgba(36,51,106,0.18)] backdrop-blur-xl will-change-transform"
          animate={{
            opacity: visible ? 1 : 0,
            y: visible ? 0 : scrollDirection === 'down' ? -86 : -72,
            scale: visible ? 1 : 0.98
          }}
          transition={motionTransition}
          style={{
            paddingBlock: lerp(10, 7, scrollProgress)
          }}
          onPointerDown={() => setVisible(true)}
        >
          <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent" />
          <div className="relative z-10 flex items-center justify-between gap-1">
            {navLinks.map((item) => {
              const mobileHref =
                item.href === '#contact'
                  ? `tel:${companyProfile.phones[0].replace(/\s+/g, '')}`
                  : item.href;

              return (
                <NavItem
                  key={item.href}
                  item={item}
                  active={activeSection === item.href}
                  mobile
                  hrefOverride={mobileHref}
                  onActivate={setActiveSection}
                />
              );
            })}
          </div>
        </motion.nav>
      </header>
    </>
  );
}
