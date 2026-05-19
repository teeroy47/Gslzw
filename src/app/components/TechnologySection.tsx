import { motion } from 'motion/react';
import { Activity, ArrowUpRight, ClipboardCheck, Gauge, Ruler, ShieldCheck } from 'lucide-react';
import { engineeredEase, viewportOnce } from '../motion';
import { OptimizedImage } from './OptimizedMedia';

const technologies = [
  {
    image: 'service-quality-control-testing.jpg',
    title: 'Advanced Testing Equipment',
    eyebrow: 'Laboratory capability',
    summary:
      'Controlled materials testing workflows for infrastructure teams that need dependable, standards-aware reporting.',
    specs: [
      'Compliant with SANS / ASTM / BS standards',
      'Digital data capture with real-time reporting',
      'Calibrated to +/-0.5% measurement accuracy',
      'SANAS-verified testing procedures'
    ],
    icon: ShieldCheck,
    metric: 'QA',
    meta: 'Standards-led verification'
  },
  {
    image: 'company-profile-media.jpg',
    title: 'Precision Instrumentation',
    eyebrow: 'Field-to-lab control',
    summary:
      'A tighter technical chain from sample intake to signed reports, built for speed without losing traceability.',
    specs: [
      'High-resolution instrumentation for soils, aggregates, asphalt and concrete',
      'Integrated QA workflows from sample intake to signed reports',
      'Field-to-lab traceability across every testing stage',
      'Built for urgent turnaround without compromising accuracy'
    ],
    icon: Gauge,
    metric: '+/-0.5%',
    meta: 'Measurement discipline'
  }
];

const specIcons = [Ruler, ClipboardCheck, Activity, ShieldCheck];

export default function TechnologySection() {
  return (
    <section
      id="technology"
      className="relative isolate overflow-hidden bg-[#F4F6FA] py-16 md:py-28"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.18] [background-image:linear-gradient(rgba(36,51,106,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(36,51,106,0.08)_1px,transparent_1px)] [background-size:36px_36px] md:opacity-[0.28] md:[background-size:48px_48px]"
      />
      <div
        aria-hidden="true"
        className="absolute left-[-12rem] top-[-10rem] hidden h-[34rem] w-[34rem] rounded-full bg-[radial-gradient(circle,rgba(36,51,106,0.14)_0%,rgba(36,51,106,0.05)_42%,transparent_72%)] md:block"
      />
      <div
        aria-hidden="true"
        className="absolute right-[-14rem] bottom-[-14rem] hidden h-[36rem] w-[36rem] rounded-full bg-[radial-gradient(circle,rgba(141,191,68,0.18)_0%,rgba(141,191,68,0.06)_38%,transparent_70%)] md:block"
      />

      <div className="relative z-10 mx-auto max-w-[1280px] px-5 sm:px-6">
        <div className="mb-9 grid gap-6 border-b border-[#24336A]/12 pb-7 md:mb-12 md:gap-8 md:pb-9 lg:grid-cols-[0.92fr_1.08fr] lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
          >
            <div className="mb-5 inline-flex items-center gap-3 border-l-2 border-[#8DBF44] pl-4 font-mono text-[11px] font-bold uppercase tracking-[0.28em] text-[#24336A]">
              Technical Capacity
            </div>
            <h2 className="max-w-3xl font-display text-[2.35rem] font-extrabold leading-[0.98] tracking-[-0.055em] text-[#24336A] sm:text-[2.8rem] md:text-[4.25rem] md:leading-[0.96]">
              Precision systems for field and laboratory control.
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ delay: 0.08, duration: 0.42, ease: engineeredEase }}
            className="max-w-xl text-base leading-7 text-[#5D6678] md:text-lg lg:justify-self-end"
          >
            Equipment, process and reporting discipline are presented as one connected technical
            system - from ground investigation through quality-control decisions.
          </motion.p>
        </div>

        <div className="space-y-5 md:space-y-8 lg:space-y-10">
          {technologies.map((tech, index) => {
            const TechIcon = tech.icon;
            const imageFirst = index % 2 === 0;

            return (
              <motion.article
                key={tech.title}
                initial={{ opacity: 0, y: 34 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportOnce}
                transition={{ duration: 0.46, ease: engineeredEase }}
                className="group relative overflow-hidden rounded-[1.15rem] border border-[#24336A]/10 bg-white shadow-[0_18px_48px_rgba(36,51,106,0.08)] sm:rounded-[1.45rem] md:shadow-[0_26px_80px_rgba(36,51,106,0.10)]"
              >
                <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.98)_0%,rgba(244,246,250,0.92)_58%,rgba(238,238,238,0.72)_100%)]" />
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent" />

                <div className="relative z-10 grid lg:min-h-[560px] lg:grid-cols-12">
                  <div
                    className={`relative min-h-[250px] overflow-hidden sm:min-h-[330px] lg:min-h-full ${
                      imageFirst ? 'lg:col-span-7' : 'lg:col-span-5 lg:col-start-8'
                    }`}
                  >
                    <OptimizedImage
                      src={tech.image}
                      alt={`${tech.title} at Geosciencelab`}
                      sizes="(min-width: 1024px) 720px, 100vw"
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-[520ms] group-hover:scale-[1.025] md:duration-[620ms] md:group-hover:scale-[1.035]"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(17,24,39,0.02)_0%,rgba(36,51,106,0.32)_100%)]" />
                    <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(17,24,39,0.58)_0%,rgba(17,24,39,0.12)_50%,transparent_100%)] opacity-80" />

                    <div className="absolute left-4 top-4 border border-white/20 bg-[#111827]/48 px-3.5 py-2.5 text-white shadow-[0_14px_32px_rgba(0,0,0,0.22)] backdrop-blur-sm sm:left-5 sm:top-5 sm:px-4 sm:py-3">
                      <div className="font-mono text-[10px] font-bold uppercase tracking-[0.24em] text-white/62">
                        Capability index
                      </div>
                      <div className="mt-1 font-display text-2xl font-extrabold text-white">
                        0{index + 1}
                      </div>
                    </div>

                    <div className="absolute bottom-5 right-5 hidden border border-white/20 bg-white/92 px-5 py-4 text-[#24336A] shadow-[0_18px_48px_rgba(0,0,0,0.18)] md:block">
                      <div className="font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-[#6B7280]">
                        {tech.meta}
                      </div>
                      <div className="mt-1 font-display text-2xl font-extrabold">{tech.metric}</div>
                    </div>
                  </div>

                  <div
                    className={`relative flex flex-col justify-center p-5 sm:p-6 md:p-9 lg:p-12 ${
                      imageFirst ? 'lg:col-span-5' : 'lg:col-span-7 lg:col-start-1 lg:row-start-1'
                    }`}
                  >
                    <div className="absolute left-0 top-0 hidden h-full w-px bg-[#24336A]/10 lg:block" />
                    <div className="absolute right-5 top-5 h-12 w-12 border-r border-t border-[#8DBF44]/45 sm:right-6 sm:top-6 sm:h-16 sm:w-16" />

                    <div className="mb-6 flex items-center justify-between gap-4 md:mb-7 md:gap-5">
                      <div className="inline-flex items-center gap-3 font-mono text-[11px] font-bold uppercase tracking-[0.24em] text-[#8DBF44]">
                        <span className="h-px w-10 bg-[#8DBF44]" />
                        {tech.eyebrow}
                      </div>
                      <div className="flex h-12 w-12 items-center justify-center border border-[#24336A]/12 bg-[#F4F6FA] text-[#24336A] transition-all duration-300 group-hover:border-[#8DBF44]/50 group-hover:text-[#8DBF44]">
                        <TechIcon className="h-6 w-6" />
                      </div>
                    </div>

                    <h3 className="max-w-xl font-display text-[1.85rem] font-extrabold leading-[1.02] tracking-[-0.045em] text-[#24336A] sm:text-[2rem] md:text-[3.15rem]">
                      {tech.title}
                    </h3>
                    <p className="mt-5 max-w-xl text-base leading-7 text-[#5D6678]">
                      {tech.summary}
                    </p>

                    <div className="mt-6 divide-y divide-[#24336A]/10 border-y border-[#24336A]/10 md:mt-8">
                      {tech.specs.map((spec, specIndex) => {
                        const SpecIcon = specIcons[specIndex % specIcons.length];

                        return (
                          <motion.div
                            key={spec}
                            initial={{ opacity: 0, x: imageFirst ? 18 : -18 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={viewportOnce}
                            transition={{
                              delay: 0.12 + specIndex * 0.055,
                              duration: 0.32,
                              ease: engineeredEase
                            }}
                            className="group/spec relative grid grid-cols-[auto_1fr] items-start gap-4 py-4 transition-all duration-[280ms] hover:translate-x-1"
                          >
                            <div className="mt-0.5 flex h-9 w-9 items-center justify-center border border-[#24336A]/12 bg-white text-[#24336A] transition-all duration-300 group-hover/spec:border-[#8DBF44]/60 group-hover/spec:bg-[#8DBF44] group-hover/spec:text-white">
                              <SpecIcon className="h-4 w-4" />
                            </div>
                            <div>
                              <div className="mb-1 font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-[#8DBF44]">
                                Spec {String(specIndex + 1).padStart(2, '0')}
                              </div>
                              <p className="text-[15px] font-semibold leading-6 text-[#24336A] md:text-base">
                                {spec}
                              </p>
                            </div>
                            <div className="absolute bottom-0 left-0 h-px w-0 bg-[#8DBF44] transition-all duration-300 group-hover/spec:w-full" />
                          </motion.div>
                        );
                      })}
                    </div>

                    <a
                      href="#contact"
                      className="mt-8 inline-flex w-fit items-center gap-2 border-b border-[#8DBF44] pb-1 font-mono text-[11px] font-bold uppercase tracking-[0.22em] text-[#24336A] transition-all duration-300 hover:gap-3 hover:text-[#8DBF44]"
                    >
                      Discuss technical requirements
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
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
