import { AnimatePresence, motion } from 'motion/react';
import { useEffect, useRef, useState } from 'react';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { companyProfile } from '../companyProfile';
import { engineeredEase } from '../motion';
import { OptimizedImage, OptimizedVideo } from './OptimizedMedia';
import { StarButton } from './StarButton';
import { Typewriter } from './Typewriter';

const heroBackgroundImages = [
  'hero-slide-1.jpg',
  'hero-slide-2.jpg',
  'hero-slide-3.jpg',
  'hero-slide-4.jpg'
];

const transitionVariants = {
  item: {
    hidden: {
      opacity: 0,
      filter: 'blur(12px)',
      y: 12
    },
    visible: {
      opacity: 1,
      filter: 'blur(0px)',
      y: 0,
      transition: {
        duration: 0.72,
        ease: engineeredEase
      }
    }
  }
};

export default function HeroSection() {
  const [activeBackground, setActiveBackground] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const heroVideoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 767px)');
    const updateMobileState = () => setIsMobile(mediaQuery.matches);

    updateMobileState();
    mediaQuery.addEventListener('change', updateMobileState);

    return () => mediaQuery.removeEventListener('change', updateMobileState);
  }, []);

  useEffect(() => {
    if (isMobile) return;

    const timer = window.setInterval(() => {
      setActiveBackground((current) => (current + 1) % heroBackgroundImages.length);
    }, 300000);

    return () => window.clearInterval(timer);
  }, [isMobile]);

  useEffect(() => {
    const video = heroVideoRef.current;
    if (!video) return;

    video.muted = true;
    video.playsInline = true;

    const playPromise = video.play();
    if (playPromise) {
      playPromise.catch(() => {
        // Autoplay can still be blocked by some mobile browsers until media is in view.
      });
    }
  }, []);

  return (
    <main className="relative overflow-hidden">
      <div className="absolute inset-0 z-0 overflow-hidden">
        {isMobile ? (
          <OptimizedImage
            src={heroBackgroundImages[0]}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover"
            sizes="100vw"
            eager
          />
        ) : (
          <AnimatePresence mode="wait">
            <motion.div
              key={heroBackgroundImages[activeBackground]}
              className="absolute inset-0 h-full w-full object-cover"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.15, ease: engineeredEase }}
            >
              <OptimizedImage
                src={heroBackgroundImages[activeBackground]}
                alt=""
                aria-hidden="true"
                className="h-full w-full object-cover"
                sizes="100vw"
                eager
              />
            </motion.div>
          </AnimatePresence>
        )}
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(17,24,39,0.16)_0%,rgba(36,51,106,0.34)_36%,rgba(17,24,39,0.54)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(95%_95%_at_50%_18%,rgba(141,191,68,0.06)_0%,rgba(36,51,106,0.08)_48%,rgba(17,24,39,0.18)_100%)]" />
      </div>

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-[2] hidden isolate opacity-35 contain-strict lg:block"
      >
        <div className="absolute left-0 top-0 h-[80rem] w-[35rem] -translate-y-[350px] -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,rgba(141,191,68,.12)_0,rgba(141,191,68,.04)_50%,rgba(141,191,68,0)_80%)]" />
        <div className="absolute left-0 top-0 h-[80rem] w-56 [translate:5%_-50%] -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,rgba(238,238,238,.08)_0,rgba(238,238,238,.02)_80%,transparent_100%)]" />
        <div className="absolute left-0 top-0 h-[80rem] w-56 -translate-y-[350px] -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,rgba(36,51,106,.25)_0,rgba(36,51,106,.08)_80%,transparent_100%)]" />
      </div>

      <section className="relative z-10">
        <div className="absolute inset-0 z-0 bg-[linear-gradient(180deg,rgba(17,24,39,0.06)_0%,rgba(36,51,106,0.14)_42%,rgba(17,24,39,0.32)_100%)]" />
        <div className="absolute inset-0 z-0 size-full bg-[radial-gradient(125%_125%_at_50%_100%,transparent_0%,rgba(36,51,106,0.08)_55%,rgba(17,24,39,0.36)_100%)]" />
        <div className="relative z-10 pt-24 pb-14 sm:pt-28 md:pt-36 md:pb-0">
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-center">
              <motion.div
                variants={{
                  container: {
                    visible: {
                      transition: {
                        delayChildren: 0.15,
                        staggerChildren: 0.08
                      }
                    }
                  },
                  ...transitionVariants
                }}
                initial="hidden"
                animate="visible"
              >
                <a
                  href="#contact"
                  className="tap-press mx-auto flex w-fit max-w-full items-center gap-3 rounded-full border border-white/14 bg-brand-navy/48 p-1 pl-4 shadow-md shadow-black/20 backdrop-blur-md transition-all duration-300 hover:bg-brand-navy/58"
                >
                  <span className="text-left text-xs leading-5 text-white/88 sm:text-sm">
                    {companyProfile.motto}
                  </span>
                  <span className="block h-4 w-px bg-white/15" />
                  <div className="flex size-7 items-center justify-center rounded-full bg-brand-lime text-brand-navy">
                    <ChevronRight className="size-4" />
                  </div>
                </a>

                <motion.h1
                  variants={transitionVariants.item}
                  className="mx-auto mt-7 max-w-5xl text-balance font-display text-[3.05rem] font-extrabold leading-[0.94] tracking-[-0.045em] text-white sm:text-6xl md:mt-8 md:text-7xl md:leading-[0.98] xl:text-[5.15rem]"
                >
                  <span className="block">Reliable Civil Engineering</span>
                  <span className="block">Testing And</span>
                  <span className="mx-auto block min-h-[2.25em] text-brand-lime sm:min-h-[1.2em]">
                    <Typewriter
                      words={[
                        'Ground Investigation Support.',
                        'Soil Testing Services.',
                        'Foundation Design Support.',
                        'Pavement Design Expertise.'
                      ]}
                      speed={85}
                      delayBetweenWords={1800}
                    />
                  </span>
                </motion.h1>

                <motion.p
                  variants={transitionVariants.item}
                  className="mx-auto mt-6 max-w-3xl text-balance text-base leading-7 text-white/76 sm:text-lg md:mt-8 md:leading-8"
                >
                  {companyProfile.shortName} provides soil testing, foundation and pavement design,
                  binder distribution calibration, and project management support for infrastructure,
                  mining, housing and institutional projects across Zimbabwe.
                </motion.p>
              </motion.div>

              <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                  container: {
                    visible: {
                      transition: {
                        staggerChildren: 0.05,
                        delayChildren: 0.45
                      }
                    }
                  },
                  ...transitionVariants
                }}
                className="mt-9 flex flex-col items-center justify-center gap-3 md:mt-12 md:flex-row"
              >
                <motion.div variants={transitionVariants.item} className="rounded-[14px] border border-white/10 bg-white/8 p-0.5">
                  <StarButton
                    href="#contact"
                    backgroundColor="#8DBF44"
                    lightColor="rgba(255,255,255,0.9)"
                    className="bg-brand-lime text-brand-navy"
                  >
                    Request Project Support
                    <ArrowRight className="size-4" />
                  </StarButton>
                </motion.div>
              </motion.div>
            </div>
          </div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              container: {
                visible: {
                  transition: {
                    staggerChildren: 0.05,
                    delayChildren: 0.65
                  }
                }
              },
              ...transitionVariants
            }}
          >
            <div className="relative mt-10 overflow-hidden px-3 sm:mt-12 md:mt-20 md:px-2">
              <div aria-hidden className="absolute inset-0 z-10 bg-gradient-to-b from-transparent from-35% to-brand-navy" />
              <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[22px] border border-white/10 bg-white/7 p-2.5 shadow-[0_20px_52px_rgba(0,0,0,0.28)] ring-1 ring-white/10 sm:rounded-[28px] sm:p-4 md:shadow-[0_30px_80px_rgba(0,0,0,0.35)]">
                <div className="grid gap-3 sm:gap-4 lg:grid-cols-[1.2fr_.8fr]">
                  <div className="relative overflow-hidden rounded-2xl border border-white/10">
                    {isMobile ? (
                      <OptimizedImage
                        src={heroBackgroundImages[0]}
                        alt="Civil engineering site overview"
                        className="aspect-[4/3] w-full object-cover sm:aspect-[15/10]"
                        sizes="(min-width: 1024px) 680px, 100vw"
                      />
                    ) : (
                      <OptimizedVideo
                        src="hero-background.mp4"
                        ref={heroVideoRef}
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="metadata"
                        className="aspect-[15/10] w-full object-cover"
                      />
                    )}
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(36,51,106,0.06)_0%,rgba(17,24,39,0.24)_100%)]" />
                  </div>

                  <div className="flex flex-col justify-between rounded-2xl border border-white/10 bg-[#1A2553] p-5 text-left text-white sm:p-6">
                    <div>
                      <p className="text-xs uppercase tracking-[0.22em] text-brand-lime">Company profile</p>
                      <h3 className="mt-3 font-display text-[1.85rem] font-bold leading-[1.02] tracking-[-0.035em] sm:text-3xl">
                        Grounded in experience. Structured for dependable delivery.
                      </h3>
                      <p className="mt-4 text-sm leading-7 text-white/72">
                        {companyProfile.motto}. Our team supports geotechnical investigations,
                        project quality control, DCP testing, cube testing and design-related
                        engineering decisions.
                      </p>
                    </div>

                    <div className="mt-6 grid grid-cols-2 gap-2.5 sm:mt-8 sm:gap-3">
                      <div className="rounded-2xl bg-white/6 p-3.5 sm:p-4">
                        <div className="font-impact text-3xl text-brand-lime sm:text-4xl">2006</div>
                        <div className="mt-1 text-xs uppercase tracking-[0.18em] text-white/55">
                          Founded
                        </div>
                      </div>
                      <div className="rounded-2xl bg-white/6 p-3.5 sm:p-4">
                        <div className="font-impact text-3xl text-brand-lime sm:text-4xl">35+</div>
                        <div className="mt-1 text-xs uppercase tracking-[0.18em] text-white/55">
                          Leadership years
                        </div>
                      </div>
                      <div className="rounded-2xl bg-white/6 p-3.5 sm:p-4">
                        <div className="font-impact text-3xl text-brand-lime sm:text-4xl">10</div>
                        <div className="mt-1 text-xs uppercase tracking-[0.18em] text-white/55">
                          Team members
                        </div>
                      </div>
                      <div className="rounded-2xl bg-white/6 p-3.5 sm:p-4">
                        <div className="font-impact text-3xl text-brand-lime sm:text-4xl">2</div>
                        <div className="mt-1 text-xs uppercase tracking-[0.18em] text-white/55">
                          Operating bases
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
