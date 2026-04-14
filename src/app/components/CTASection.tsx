import { motion } from 'motion/react';
import { ArrowRight, Check } from 'lucide-react';

export default function CTASection() {
  const ctaBackground = `${import.meta.env.BASE_URL}cta-background.jpg`;

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={ctaBackground}
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(36,51,106,0.76)_0%,rgba(36,51,106,0.68)_48%,rgba(36,51,106,0.42)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(141,191,68,0.12)_0%,rgba(141,191,68,0.03)_26%,transparent_48%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(17,24,39,0.04)_0%,rgba(17,24,39,0.2)_100%)]" />
      </div>

      <div className="max-w-[1280px] mx-auto px-6 py-24 md:py-32 relative z-10">
        <div className="max-w-3xl">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              className="mb-4"
            >
              <span className="font-['DM_Sans'] font-semibold text-[#8DBF44] text-sm tracking-[3px] uppercase">
                READY TO BEGIN?
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.1 }}
              className="font-['Syne'] font-extrabold text-white text-5xl md:text-6xl mb-6"
            >
              Start Your Project With Confidence
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.2 }}
              className="font-['DM_Sans'] text-white/75 text-lg max-w-[480px] mb-8"
            >
              Get a detailed, certified quote in minutes. Our intelligent system ensures accuracy
              from the very first interaction.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.3 }}
              className="space-y-4"
            >
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#contact"
                  className="group relative inline-flex items-center justify-center px-10 py-5 bg-white text-[#24336A] font-['DM_Sans'] font-semibold rounded-lg transition-all duration-300 hover:bg-[#8DBF44] hover:text-white hover:scale-105 text-[17px]"
                >
                  Launch Quote Builder
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center px-10 py-5 border-2 border-white text-white font-['DM_Sans'] font-semibold rounded-lg transition-all duration-300 hover:bg-white/10"
                >
                  Contact Our Team
                </a>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 text-white/55 font-['DM_Sans'] text-xs">
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
