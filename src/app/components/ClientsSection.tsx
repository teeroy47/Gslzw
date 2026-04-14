import { motion } from 'motion/react';
import { companyProfile } from '../companyProfile';

export default function ClientsSection() {
  return (
    <section id="clients" className="bg-[#F4F6FA] py-24 md:py-32">
      <div className="mx-auto max-w-[1280px] px-6">
        <div className="mb-10 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            className="mb-4 font-['Syne'] text-5xl font-bold text-[#24336A] md:text-6xl"
          >
            Organizations we have worked with
          </motion.h2>
        </div>

        <div className="mb-16 grid grid-cols-2 gap-6 lg:grid-cols-4">
          {companyProfile.organisations.map((client, index) => (
            <motion.div
              key={client}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.12, duration: 0.6 }}
              className="client-card group relative flex h-[120px] items-center justify-center overflow-hidden rounded-2xl border border-[rgba(36,51,106,0.08)] bg-white px-10 py-8"
            >
              <div className="relative z-10 text-center font-['Syne'] text-lg font-bold text-[#24336A] opacity-60 grayscale transition-all duration-300 group-hover:text-white group-hover:opacity-100 group-hover:grayscale-0 group-hover:brightness-200">
                {client}
              </div>

              <div className="absolute inset-0 -z-0 bg-[#24336A] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="absolute inset-0 opacity-0 shadow-[0_32px_80px_rgba(36,51,106,0.25)] transition-opacity duration-300 group-hover:opacity-100" />
              <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-[#8DBF44] transition-all duration-300 group-hover:w-full" />

              <svg
                className="absolute right-0 top-0 h-8 w-8 text-[#8DBF44] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                viewBox="0 0 32 32"
                fill="none"
              >
                <path d="M32 0 L32 32 L0 0 Z" fill="currentColor" />
              </svg>

              <div className="absolute bottom-4 left-0 right-0 translate-y-4 text-center opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                <span className="text-xs text-white/80">Profile Referenced Work</span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="rounded-[28px] bg-white p-8 shadow-[0_24px_64px_rgba(36,51,106,0.12)] md:p-10">
          <div className="mb-6 flex items-center justify-between gap-4">
            <div>
              <h3 className="font-['Syne'] text-3xl font-bold text-[#24336A]">Representative Project Highlights</h3>
              <p className="mt-2 max-w-2xl text-[#6B7280]">
                A sample of the projects and assignments listed in the company profile.
              </p>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {companyProfile.projects.map((project, index) => (
              <motion.div
                key={project}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.08, duration: 0.45 }}
                className="rounded-2xl border border-[#24336A]/8 bg-[#F4F6FA] px-5 py-4 text-[#24336A]"
              >
                {project}
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (hover: hover) {
          .client-card:hover {
            transform: translateY(-12px) scale(1.03);
            box-shadow: 0 32px 80px rgba(36, 51, 106, 0.25);
          }
        }
      `}</style>
    </section>
  );
}
