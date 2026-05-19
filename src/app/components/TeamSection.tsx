import { motion } from 'motion/react';
import { BadgeCheck, BriefcaseBusiness, Ruler, ScanLine } from 'lucide-react';
import { companyProfile } from '../companyProfile';
import { engineeredEase, viewportOnce } from '../motion';
import { OptimizedImage } from './OptimizedMedia';

export default function TeamSection() {
  return (
    <section
      id="team"
      className="relative isolate overflow-hidden bg-[linear-gradient(180deg,#FFFFFF_0%,#F6F8FB_52%,#EEF3F8_100%)] py-16 md:py-24"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.2] [background-image:linear-gradient(rgba(36,51,106,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(36,51,106,0.08)_1px,transparent_1px)] [background-size:42px_42px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-14rem] top-[-10rem] hidden h-[36rem] w-[36rem] rounded-full bg-[radial-gradient(circle,rgba(141,191,68,0.18)_0%,rgba(141,191,68,0.06)_38%,transparent_70%)] blur-2xl md:block"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[-18rem] bottom-[-18rem] hidden h-[40rem] w-[40rem] rounded-full bg-[radial-gradient(circle,rgba(36,51,106,0.13)_0%,rgba(36,51,106,0.04)_42%,transparent_72%)] md:block"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#24336A]/15 to-transparent"
      />

      <div className="relative z-10 mx-auto max-w-[1280px] px-5 sm:px-6">
        <div className="mb-10 grid gap-6 border-b border-[#24336A]/10 pb-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.4, ease: engineeredEase }}
          >
            <div className="mb-5 inline-flex items-center gap-3 border-l-2 border-[#8DBF44] pl-4 font-mono text-[11px] font-bold uppercase tracking-[0.28em] text-[#24336A]">
              <BriefcaseBusiness className="h-4 w-4" />
              Technical Leadership
            </div>
            <h2 className="max-w-3xl font-display text-[2.55rem] font-extrabold leading-[0.98] tracking-[-0.055em] text-[#24336A] md:text-[4.2rem] md:leading-[0.96]">
              The people behind dependable laboratory judgement.
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ delay: 0.08, duration: 0.4, ease: engineeredEase }}
            className="max-w-xl text-base leading-7 text-[#5D6678] md:text-lg lg:justify-self-end"
          >
            A compact leadership team with deep materials-testing experience, administrative discipline
            and a practical understanding of civil engineering delivery in the field.
          </motion.p>
        </div>

        <div className="space-y-5 md:space-y-7">
          {companyProfile.team.map((member, index) => {
            const featured = index === 0;

            return (
              <motion.article
                key={member.name}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportOnce}
                transition={{ delay: index * 0.07, duration: 0.42, ease: engineeredEase }}
                className={`group relative overflow-hidden rounded-[1.2rem] border border-[#24336A]/10 bg-white/86 shadow-[0_22px_70px_rgba(36,51,106,0.10)] ring-1 ring-white/70 transition-all duration-[360ms] hover:-translate-y-1 hover:border-[#8DBF44]/55 ${featured ? 'lg:rounded-[1.5rem]' : ''}`}
              >
                <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.98)_0%,rgba(247,249,252,0.94)_48%,rgba(238,243,248,0.82)_100%)]" />
                <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent" />
                <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-[#8DBF44] transition-all duration-300 group-hover:w-full" />
                <div
                  aria-hidden="true"
                  className="absolute right-5 top-5 hidden h-20 w-20 border-r border-t border-[#8DBF44]/35 md:block"
                />

                <div
                  className={`relative z-10 grid gap-0 ${
                    featured
                      ? 'lg:grid-cols-[0.92fr_1.08fr]'
                      : 'lg:grid-cols-[0.72fr_1.28fr]'
                  }`}
                >
                  <div className={`relative overflow-hidden bg-[#111827] ${featured ? 'min-h-[520px]' : 'min-h-[420px]'} sm:min-h-[560px] lg:min-h-full`}>
                    <OptimizedImage
                      src={member.image}
                      alt={`${member.name}, ${member.role}`}
                      sizes={featured ? '(min-width: 1024px) 560px, 100vw' : '(min-width: 1024px) 460px, 100vw'}
                      eager={featured}
                      decoding={featured ? 'sync' : 'async'}
                      className={`absolute inset-0 h-full w-full transform-gpu object-cover transition-transform duration-[700ms] [backface-visibility:hidden] group-hover:scale-[1.025] ${
                        featured ? 'object-[center_16%]' : 'object-[center_12%]'
                      }`}
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(17,24,39,0.00)_0%,rgba(17,24,39,0.08)_48%,rgba(17,24,39,0.34)_100%)]" />
                    <div className="absolute left-4 top-4 border border-white/25 bg-[#111827]/50 px-4 py-3 text-white shadow-[0_18px_40px_rgba(0,0,0,0.22)] backdrop-blur-sm sm:left-5 sm:top-5">
                      <div className="font-mono text-[10px] font-bold uppercase tracking-[0.24em] text-white/64">
                        Leadership index
                      </div>
                      <div className="mt-1 font-display text-2xl font-extrabold text-white">
                        0{index + 1}
                      </div>
                    </div>
                  </div>

                  <div className="relative flex flex-col justify-center p-5 sm:p-7 lg:p-10 xl:p-12">
                    <div className="mb-6 flex items-start justify-between gap-5">
                      <div>
                        <div className="inline-flex items-center gap-3 font-mono text-[11px] font-bold uppercase tracking-[0.24em] text-[#8DBF44]">
                          <span className="h-px w-10 bg-[#8DBF44]" />
                          {member.role}
                        </div>
                        <h3 className="mt-4 max-w-2xl font-display text-[2.2rem] font-extrabold leading-[0.98] tracking-[-0.055em] text-[#24336A] sm:text-[2.65rem] md:text-[3.35rem]">
                          {member.name}
                        </h3>
                      </div>
                      <div className="hidden h-12 w-12 flex-shrink-0 items-center justify-center border border-[#24336A]/12 bg-[#F4F6FA] text-[#24336A] transition-colors duration-300 group-hover:border-[#8DBF44]/55 group-hover:text-[#8DBF44] sm:flex">
                        <ScanLine className="h-6 w-6" />
                      </div>
                    </div>

                    <p className="max-w-2xl text-base leading-7 text-[#5D6678] md:text-lg md:leading-8">
                      {member.summary}
                    </p>

                    <div className="mt-7 divide-y divide-[#24336A]/10 border-y border-[#24336A]/10">
                      {member.credentials.map((credential) => (
                        <div key={credential} className="grid grid-cols-[auto_1fr] gap-3 py-4">
                          <BadgeCheck className="mt-0.5 h-5 w-5 text-[#8DBF44]" />
                          <p className="text-sm font-semibold leading-6 text-[#24336A]/86 md:text-[15px]">
                            {credential}
                          </p>
                        </div>
                      ))}
                    </div>

                    <div className="mt-8 grid grid-cols-2 gap-3 border-t border-[#24336A]/10 pt-5 sm:max-w-md">
                      <div>
                        <div className="font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-[#8DBF44]">
                          Discipline
                        </div>
                        <div className="mt-1 font-display text-xl font-extrabold text-[#24336A]">
                          {featured ? 'Technical' : 'Operations'}
                        </div>
                      </div>
                      <div>
                        <div className="font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-[#8DBF44]">
                          Base
                        </div>
                        <div className="mt-1 font-display text-xl font-extrabold text-[#24336A]">
                          Norton / Harare
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
