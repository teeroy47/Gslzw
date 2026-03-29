import { motion } from 'motion/react';

export default function ClientsSection() {
  const clients = [
    'SANRAL',
    'WBHO',
    'Murray & Roberts',
    'Aveng',
    'Aurecon',
    'SMEC',
    'WSP',
    'Royal HaskoningDHV'
  ];

  return (
    <section id="clients" className="bg-[#F4F6FA] py-24 md:py-32">
      <div className="max-w-[1280px] mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            className="font-['Syne'] font-bold text-5xl md:text-6xl text-[#24336A] mb-4"
          >
            Our Valued Clients
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.1 }}
            className="font-['DM_Sans'] italic text-[17px] text-[#6B7280]"
          >
            "We maintain the standard of good, quality workmanship"
          </motion.p>
        </div>

        {/* Client Logo Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {clients.map((client, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.12, duration: 0.6 }}
              className="group relative bg-white border border-[rgba(36,51,106,0.08)] rounded-2xl px-10 py-8 h-[120px] flex items-center justify-center overflow-hidden"
              style={{
                transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
              }}
            >
              {/* Client Name (acts as logo placeholder) */}
              <div className="relative z-10 transition-all duration-400">
                <div className="font-['Syne'] font-bold text-xl text-[#24336A] opacity-60 grayscale transition-all duration-400 group-hover:opacity-100 group-hover:grayscale-0 group-hover:brightness-200 group-hover:text-white text-center">
                  {client}
                </div>
              </div>

              {/* Lime border bottom - slides in on hover */}
              <div
                className="absolute bottom-0 left-0 h-[3px] bg-[#8DBF44] w-0 group-hover:w-full transition-all duration-400"
                style={{ transitionDelay: '0.1s' }}
              />

              {/* Corner Accent - appears on hover */}
              <svg
                className="absolute top-0 right-0 w-8 h-8 text-[#8DBF44] opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                viewBox="0 0 32 32"
                fill="none"
              >
                <path d="M32 0 L32 32 L0 0 Z" fill="currentColor" />
              </svg>

              {/* Hidden Tagline - slides up on hover */}
              <div className="absolute bottom-4 left-0 right-0 text-center opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-400 delay-200">
                <span className="font-['DM_Sans'] text-xs text-white/80">Trusted Partner</span>
              </div>

              {/* Background transition to navy */}
              <div className="absolute inset-0 bg-[#24336A] opacity-0 group-hover:opacity-100 transition-opacity duration-400 -z-0" />

              {/* Enhanced shadow on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 shadow-[0_32px_80px_rgba(36,51,106,0.25)]" />

              {/* Scale and lift effect */}
              <style>{`
                @media (hover: hover) {
                  .group:hover {
                    transform: translateY(-12px) scale(1.03);
                    box-shadow: 0 32px 80px rgba(36, 51, 106, 0.25);
                  }
                }
              `}</style>
            </motion.div>
          ))}
        </div>

        {/* Marquee Ticker */}
        <div className="relative overflow-hidden bg-white/50 rounded-full py-4">
          <motion.div
            animate={{ x: [0, -1000] }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: 'linear'
            }}
            className="flex gap-8 whitespace-nowrap"
            whileHover={{ animationPlayState: 'paused' }}
          >
            {[...clients, ...clients, ...clients].map((client, index) => (
              <span
                key={index}
                className="font-['DM_Sans'] font-medium text-[#6B7280] text-sm tracking-[2px] uppercase"
              >
                {client}
                <span className="mx-4">·</span>
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
