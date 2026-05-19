import { motion } from 'motion/react';
import { ArrowRight, Check } from 'lucide-react';
import { engineeredEase, viewportOnce } from '../motion';
import { OptimizedImage } from './OptimizedMedia';

export default function CTASection() {
  const ctaBackground = 'cta-background.jpg';

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <OptimizedImage
          src={ctaBackground}
          alt=""
          aria-hidden="true"
          sizes="100vw"
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(36,51,106,0.76)_0%,rgba(36,51,106,0.68)_48%,rgba(36,51,106,0.42)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(141,191,68,0.12)_0%,rgba(141,191,68,0.03)_26%,transparent_48%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(17,24,39,0.04)_0%,rgba(17,24,39,0.2)_100%)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1280px] px-5 py-20 sm:px-6 md:py-32">
        <div className="max-w-3xl">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              className="mb-4"
            >
              <span className="font-body font-semibold text-[#8DBF44] text-sm tracking-[3px] uppercase">
                READY TO BEGIN?
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ delay: 0.08, duration: 0.44, ease: engineeredEase }}
              className="mb-5 font-display text-[2.7rem] font-extrabold leading-[0.98] tracking-[-0.045em] text-white sm:text-5xl md:mb-6 md:text-6xl"
            >
              Start Your Project With Confidence
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ delay: 0.14, duration: 0.42, ease: engineeredEase }}
              className="mb-7 max-w-[480px] font-body text-base leading-7 text-white/75 md:mb-8 md:text-lg"
            >
              Get a detailed, certified quote in minutes. Our intelligent system ensures accuracy
              from the very first interaction.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ delay: 0.2, duration: 0.4, ease: engineeredEase }}
              className="space-y-4"
            >
              <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
                <a
                  href="#contact"
                  className="tap-press group relative inline-flex min-h-12 items-center justify-center rounded-lg bg-white px-8 py-4 font-body text-base font-semibold text-[#24336A] transition-all duration-300 hover:scale-[1.025] hover:bg-[#8DBF44] hover:text-white sm:px-10 sm:py-5 sm:text-[17px]"
                >
                  Launch Quote Builder
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
                <a
                  href="#contact"
                  className="tap-press inline-flex min-h-12 items-center justify-center rounded-lg border-2 border-white px-8 py-4 font-body font-semibold text-white transition-all duration-300 hover:bg-white/10 sm:px-10 sm:py-5"
                >
                  Contact Our Team
                </a>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 text-white/55 font-body text-xs">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#8DBF44]" />
                  No commitment required
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#8DBF44]" />
                  Response within 2 hours
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
