import { motion } from 'motion/react';
import { useState } from 'react';
import { ArrowUpRight, DraftingCompass, Sparkles } from 'lucide-react';
import { companyProfile } from '../companyProfile';
import { engineeredEase, viewportOnce } from '../motion';

function getClientInitials(client: string) {
  return client
    .replace(/['’]/g, '')
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0])
    .join('')
    .toUpperCase();
}

const projectDisciplines = [
  'Geotechnical investigation',
  'Materials verification',
  'Road rehabilitation',
  'Housing infrastructure',
  'Site investigation',
  'Field density testing',
  'Dam rehabilitation',
  'Concrete testing'
];

const projectContexts = [
  'Dam works',
  'Diplomatic infrastructure',
  'Mining transport corridor',
  'Residential platforms',
  'Institutional access road',
  'Telecoms infrastructure',
  'Mine infrastructure',
  'Industrial facilities'
];

const projectLayouts = [
  'lg:col-span-7 lg:min-h-[300px]',
  'lg:col-span-5 lg:min-h-[300px]',
  'lg:col-span-4 lg:min-h-[250px]',
  'lg:col-span-4 lg:min-h-[250px]',
  'lg:col-span-4 lg:min-h-[250px]',
  'lg:col-span-5 lg:min-h-[270px]',
  'lg:col-span-4 lg:min-h-[270px]',
  'lg:col-span-3 lg:min-h-[270px]'
];

export default function ClientsSection() {
  const [activeClient, setActiveClient] = useState<number | null>(0);

  return (
    <section
      id="clients"
      className="relative isolate overflow-hidden bg-[linear-gradient(180deg,#F8FAFC_0%,#EEF3F8_48%,#FFFFFF_100%)] py-16 md:py-24"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[-12rem] top-10 hidden h-[28rem] w-[28rem] rounded-full bg-[#8DBF44]/16 blur-3xl md:block"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-10rem] top-28 hidden h-[30rem] w-[30rem] rounded-full bg-[#24336A]/10 blur-3xl md:block"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#24336A]/15 to-transparent"
      />

      <div className="relative z-10 mx-auto max-w-[1280px] px-5 sm:px-6">
        <div className="mx-auto mb-10 max-w-4xl text-center md:mb-12">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#8DBF44]/25 bg-white/75 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#5D8F25] shadow-sm backdrop-blur-md md:text-sm"
          >
            <Sparkles className="h-4 w-4" />
            Trusted By
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ delay: 0.08, duration: 0.44, ease: engineeredEase }}
            className="mx-auto max-w-3xl font-display text-[2.55rem] font-extrabold leading-[1] tracking-[-0.048em] text-[#18224C] sm:text-4xl md:text-6xl md:leading-[1.05]"
          >
            Trusted by organizations building Zimbabwe's{' '}
            <span className="bg-gradient-to-r from-[#8DBF44] to-[#24336A] bg-clip-text text-transparent">
              critical infrastructure.
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ delay: 0.14, duration: 0.42, ease: engineeredEase }}
            className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[#5D6678] md:text-lg"
          >
            A compact, experienced laboratory partner for mining, institutional, housing and
            infrastructure teams that need dependable technical support.
          </motion.p>
        </div>

        <div className="mb-10 grid grid-cols-1 gap-3 sm:grid-cols-2 md:mb-12 lg:grid-cols-4 lg:gap-5">
          {companyProfile.organisations.map((client, index) => (
            <motion.button
              key={client}
              type="button"
              aria-pressed={activeClient === index}
              aria-label={`Highlight ${client}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              onViewportEnter={() => setActiveClient(index)}
              transition={{ delay: index * 0.045, duration: 0.38, ease: engineeredEase }}
              onClick={() => setActiveClient((current) => (current === index ? null : index))}
              onFocus={() => setActiveClient(index)}
              className={`tap-press group relative min-h-[132px] overflow-hidden rounded-[1.15rem] border p-4 text-left outline-none transition-all duration-[320ms] focus-visible:ring-4 focus-visible:ring-[#8DBF44]/25 sm:min-h-[150px] sm:rounded-[1.35rem] sm:p-5 ${
                activeClient === index
                  ? 'border-[#8DBF44]/60 bg-white shadow-[0_24px_70px_rgba(36,51,106,0.16)]'
                  : 'border-white/70 bg-white/72 shadow-[0_14px_42px_rgba(36,51,106,0.08)] backdrop-blur-xl hover:-translate-y-1.5 hover:border-[#8DBF44]/55 hover:bg-white hover:shadow-[0_26px_70px_rgba(36,51,106,0.14)]'
              }`}
            >
              <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.82)_0%,rgba(255,255,255,0.42)_48%,rgba(141,191,68,0.08)_100%)]" />
              <div
                className={`absolute left-0 top-0 h-full w-1 bg-[#8DBF44] transition-all duration-300 ${
                  activeClient === index ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                }`}
              />
              <div className="absolute right-0 top-0 h-12 w-12 text-[#8DBF44]/70 transition-opacity duration-300 group-hover:opacity-100">
                <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
                  <path d="M48 0H0L48 48V0Z" fill="currentColor" />
                </svg>
              </div>

              <div
                className={`relative z-10 mb-6 flex h-12 w-12 items-center justify-center rounded-2xl border text-sm font-black tracking-[0.08em] transition-all duration-300 ${
                  activeClient === index
                    ? 'border-[#8DBF44]/45 bg-[#24336A] text-white shadow-[0_16px_32px_rgba(36,51,106,0.22)]'
                    : 'border-[#24336A]/10 bg-[#F4F6FA] text-[#24336A] group-hover:border-[#8DBF44]/45 group-hover:bg-[#24336A] group-hover:text-white'
                }`}
              >
                {getClientInitials(client)}
              </div>

              <div className="relative z-10">
                <div className="mb-2 flex items-start justify-between gap-3">
                  <h3 className="font-display text-lg font-extrabold leading-tight tracking-[-0.015em] text-[#1F2B5C] transition-colors duration-300 group-hover:text-[#18224C]">
                    {client}
                  </h3>
                  <ArrowUpRight className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#8DBF44] opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
                </div>
                <p className="text-sm font-medium leading-6 text-[#6B7280]">
                  Profile referenced civil engineering support
                </p>
              </div>

              <div
                className={`absolute bottom-0 left-0 h-[3px] bg-gradient-to-r from-[#8DBF44] via-[#9FD45B] to-transparent transition-all duration-300 ${
                  activeClient === index
                    ? 'w-full opacity-100'
                    : 'w-0 opacity-0 group-hover:w-full group-hover:opacity-100'
                }`}
              />
            </motion.button>
          ))}
        </div>

        <div className="relative overflow-hidden rounded-[1.15rem] border border-[#24336A]/10 bg-[#F4F6FA] p-4 shadow-[0_20px_54px_rgba(36,51,106,0.08)] sm:rounded-[1.35rem] md:p-8 md:shadow-[0_30px_90px_rgba(36,51,106,0.10)] lg:p-10">
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-[0.34] [background-image:linear-gradient(rgba(36,51,106,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(36,51,106,0.08)_1px,transparent_1px)] [background-size:44px_44px]"
          />
          <div
            aria-hidden="true"
            className="absolute right-[-12rem] top-[-14rem] h-[34rem] w-[34rem] rounded-full bg-[radial-gradient(circle,rgba(141,191,68,0.16)_0%,rgba(141,191,68,0.06)_35%,transparent_66%)]"
          />
          <div
            aria-hidden="true"
            className="absolute bottom-[-14rem] left-[-10rem] h-[32rem] w-[32rem] rounded-full bg-[radial-gradient(circle,rgba(36,51,106,0.14)_0%,rgba(36,51,106,0.05)_38%,transparent_70%)]"
          />
          <div className="relative z-10 mb-9 grid gap-8 border-b border-[#24336A]/12 pb-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div className="max-w-xl">
              <div className="mb-5 inline-flex items-center gap-3 border-l-2 border-[#8DBF44] pl-4 font-mono text-[11px] font-bold uppercase tracking-[0.28em] text-[#24336A]">
                <DraftingCompass className="h-4 w-4" />
                Field Proof / Selected Works
              </div>
              <h3 className="font-display text-[2.35rem] font-extrabold leading-[0.96] tracking-[-0.055em] text-[#24336A] md:text-[3.85rem]">
                Engineering work with visible field consequence.
              </h3>
            </div>
            <p className="max-w-xl text-base leading-7 text-[#586173] md:text-lg lg:justify-self-end">
              A curated view of assignments referenced in the company profile - geotechnical
              investigations, materials testing and quality-control work across roads, mines,
              dams, housing and institutional infrastructure.
            </p>
          </div>

          <div className="relative z-10 grid gap-4 md:grid-cols-2 lg:grid-cols-12 lg:gap-5">
            {companyProfile.projects.map((project, index) => (
              <motion.article
                key={project}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportOnce}
                transition={{ delay: index * 0.045, duration: 0.38, ease: engineeredEase }}
                className={`group relative flex min-h-[190px] overflow-hidden rounded-[1rem] border border-[#24336A]/10 bg-[linear-gradient(145deg,rgba(255,255,255,0.96)_0%,rgba(244,246,250,0.92)_54%,rgba(238,238,238,0.82)_100%)] p-5 transition-all duration-[320ms] hover:-translate-y-1 hover:border-[#8DBF44]/55 hover:bg-white md:min-h-[220px] md:p-6 ${projectLayouts[index] ?? 'lg:col-span-4'}`}
              >
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-80" />
                <div className="absolute bottom-0 left-0 h-px w-full bg-[#24336A]/10" />
                <div className="absolute left-0 top-0 h-full w-px bg-white/80" />
                <div
                  aria-hidden="true"
                  className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-[#8DBF44]/0 blur-2xl transition-colors duration-300 group-hover:bg-[#8DBF44]/14"
                />
                <div
                  aria-hidden="true"
                  className="absolute bottom-0 left-0 h-[3px] w-0 bg-[#8DBF44] transition-all duration-300 group-hover:w-full"
                />

                <div className="relative z-10 flex w-full flex-col justify-between gap-8 md:gap-10">
                  <div className="flex items-start justify-between gap-5">
                    <div>
                      <div className="font-mono text-xs font-bold uppercase tracking-[0.22em] text-[#8DBF44]">
                        {projectDisciplines[index] ?? 'Engineering support'}
                      </div>
                      <div className="mt-2 h-px w-12 bg-[#24336A]/18 transition-all duration-300 group-hover:w-20 group-hover:bg-[#8DBF44]" />
                    </div>
                    <span className="font-mono text-sm font-semibold tabular-nums text-[#24336A]/38 transition-colors duration-300 group-hover:text-[#24336A]/70">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>

                  <div>
                    <h4 className="max-w-[34rem] font-display text-[1.33rem] font-extrabold leading-[1.06] tracking-[-0.035em] text-[#24336A] transition-colors duration-300 group-hover:text-[#18224C] md:text-[1.68rem]">
                      {project}
                    </h4>
                    <div className="mt-5 flex items-center justify-between gap-4 border-t border-[#24336A]/10 pt-4">
                      <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-[#667085]">
                        {projectContexts[index] ?? 'Civil works'}
                      </p>
                      <ArrowUpRight className="h-4 w-4 text-[#8DBF44] opacity-0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100" />
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
