import { AnimatePresence, motion } from 'motion/react';
import { useEffect, useState } from 'react';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { companyProfile } from '../companyProfile';
import { StarButton } from './StarButton';

const heroBackgroundImages = [
  '/hero-slide-1.jpg',
  '/hero-slide-2.jpg',
  '/hero-slide-3.jpg',
  '/hero-slide-4.jpg'
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
        type: 'spring',
        bounce: 0.3,
        duration: 1.5
      }
    }
  }
};

export default function HeroSection() {
  const [activeBackground, setActiveBackground] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveBackground((current) => (current + 1) % heroBackgroundImages.length);
    }, 300000);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <main className="relative overflow-hidden">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.img
            key={heroBackgroundImages[activeBackground]}
            src={heroBackgroundImages[activeBackground]}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2, ease: 'easeInOut' }}
          />
        </AnimatePresence>
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
        <div className="relative z-10 pt-28 md:pt-36">
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
                  className="mx-auto flex w-fit items-center gap-4 rounded-full border border-white/14 bg-brand-navy/42 p-1 pl-4 shadow-md shadow-black/20 backdrop-blur-md transition-all duration-300 hover:bg-brand-navy/58"
                >
                  <span className="text-sm text-white/88">
                    {companyProfile.motto}
                  </span>
                  <span className="block h-4 w-px bg-white/15" />
                  <div className="flex size-7 items-center justify-center rounded-full bg-brand-lime text-brand-navy">
                    <ChevronRight className="size-4" />
                  </div>
                </a>

                <motion.h1
                  variants={transitionVariants.item}
                  className="mx-auto mt-8 max-w-5xl text-balance font-display text-5xl font-extrabold leading-[0.98] tracking-[-0.04em] text-white md:text-7xl xl:text-[5.15rem]"
                >
                  Reliable Civil Engineering Testing And Ground Investigation Support.
                </motion.h1>

                <motion.p
                  variants={transitionVariants.item}
                  className="mx-auto mt-8 max-w-3xl text-balance text-lg leading-8 text-white/74"
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
                className="mt-12 flex flex-col items-center justify-center gap-3 md:flex-row"
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
            <div className="relative -mr-56 mt-10 overflow-hidden px-2 sm:mr-0 sm:mt-12 md:mt-20">
              <div aria-hidden className="absolute inset-0 z-10 bg-gradient-to-b from-transparent from-35% to-brand-navy" />
              <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[28px] border border-white/10 bg-white/6 p-4 shadow-[0_30px_80px_rgba(0,0,0,0.35)] ring-1 ring-white/10">
                <div className="grid gap-4 lg:grid-cols-[1.2fr_.8fr]">
                  <div className="relative overflow-hidden rounded-2xl border border-white/10">
                    <video
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="aspect-[15/10] w-full object-cover"
                    >
                      <source src="/hero-background.mp4" type="video/mp4" />
                    </video>
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(36,51,106,0.06)_0%,rgba(17,24,39,0.24)_100%)]" />
                  </div>

                  <div className="flex flex-col justify-between rounded-2xl border border-white/10 bg-[#1A2553] p-6 text-left text-white">
                    <div>
                      <p className="text-xs uppercase tracking-[0.22em] text-brand-lime">Company profile</p>
                      <h3 className="mt-3 font-display text-3xl font-bold leading-tight">
                        Grounded in experience. Structured for dependable delivery.
                      </h3>
                      <p className="mt-4 text-sm leading-7 text-white/72">
                        {companyProfile.motto}. Our team supports geotechnical investigations,
                        project quality control, DCP testing, cube testing and design-related
                        engineering decisions.
                      </p>
                    </div>

                    <div className="mt-8 grid grid-cols-2 gap-3">
                      <div className="rounded-2xl bg-white/6 p-4">
                        <div className="font-impact text-4xl text-brand-lime">2006</div>
                        <div className="mt-1 text-xs uppercase tracking-[0.18em] text-white/55">
                          Founded
                        </div>
                      </div>
                      <div className="rounded-2xl bg-white/6 p-4">
                        <div className="font-impact text-4xl text-brand-lime">35+</div>
                        <div className="mt-1 text-xs uppercase tracking-[0.18em] text-white/55">
                          Leadership years
                        </div>
                      </div>
                      <div className="rounded-2xl bg-white/6 p-4">
                        <div className="font-impact text-4xl text-brand-lime">10</div>
                        <div className="mt-1 text-xs uppercase tracking-[0.18em] text-white/55">
                          Team members
                        </div>
                      </div>
                      <div className="rounded-2xl bg-white/6 p-4">
                        <div className="font-impact text-4xl text-brand-lime">2</div>
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
