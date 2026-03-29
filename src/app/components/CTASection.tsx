import { motion } from 'motion/react';
import { ArrowRight, Check } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="relative overflow-hidden">
      {/* Diagonal Split Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-[#24336A]"
          style={{
            clipPath: 'polygon(0 0, 75% 0, 60% 100%, 0 100%)'
          }}
        />
        <div
          className="absolute inset-0 bg-[#8DBF44]"
          style={{
            clipPath: 'polygon(75% 0, 100% 0, 100% 100%, 60% 100%)'
          }}
        />
      </div>

      <div className="max-w-[1280px] mx-auto px-6 py-24 md:py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
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

          {/* Right Decoration - Abstract SVG */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="hidden lg:block"
          >
            <svg
              viewBox="0 0 400 400"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-auto opacity-15"
            >
              {/* Layered Hexagons */}
              <path
                d="M200 50 L300 100 L300 200 L200 250 L100 200 L100 100 Z"
                stroke="white"
                strokeWidth="2"
              />
              <path
                d="M200 100 L260 130 L260 190 L200 220 L140 190 L140 130 Z"
                stroke="white"
                strokeWidth="2"
              />
              <path
                d="M200 150 L230 165 L230 185 L200 200 L170 185 L170 165 Z"
                stroke="white"
                strokeWidth="2"
              />
              {/* Geological Strata Lines */}
              <line x1="50" y1="280" x2="350" y2="290" stroke="white" strokeWidth="1.5" />
              <line x1="60" y1="300" x2="340" y2="310" stroke="white" strokeWidth="1.5" />
              <line x1="70" y1="320" x2="330" y2="330" stroke="white" strokeWidth="1.5" />
              <line x1="80" y1="340" x2="320" y2="350" stroke="white" strokeWidth="1.5" />
            </svg>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
