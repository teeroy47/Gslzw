import { motion } from 'motion/react';
import {
  ArrowRight,
  ClipboardCheck,
  HardHat,
  Hexagon,
  Map,
  Ruler,
  TestTubeDiagonal
} from 'lucide-react';
import { engineeredEase, viewportOnce } from '../motion';
import { OptimizedImage } from './OptimizedMedia';

const services = [
  {
    icon: TestTubeDiagonal,
    title: 'Soil Testing',
    description: 'Registered civil engineering soil testing support for field and laboratory programmes.',
    image: 'service-soil-testing.jpg'
  },
  {
    icon: Ruler,
    title: 'Foundation Design',
    description: 'Foundation investigation inputs and design support informed by site-specific ground conditions.',
    image: 'service-foundation-design.jpg'
  },
  {
    icon: Map,
    title: 'Pavement Design',
    description: 'Pavement design and site investigation work for roads, access routes and service infrastructure.',
    image: 'service-pavement-design.jpg'
  },
  {
    icon: ClipboardCheck,
    title: 'Binder Distribution Calibration',
    description: 'Calibration services for bitumen and binder distribution to improve consistency and control.',
    image: 'service-binder-distribution-calibration.jpg'
  },
  {
    icon: HardHat,
    title: 'Project Management',
    description: 'Technical supervision, reporting and project coordination across civil engineering work packages.',
    image: 'service-project-management.jpg'
  },
  {
    icon: Hexagon,
    title: 'Quality Control Testing',
    description: 'Densities, cube tests, moisture checks and DCP support for active construction and rehabilitation projects.',
    image: 'service-quality-control-testing.jpg'
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className="bg-white py-20 md:py-32">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-6">
        <div className="mb-10 text-center md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            className="mb-5 inline-flex items-center gap-2 rounded-full bg-[#8DBF44]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#6FA02F] md:mb-6 md:text-sm"
          >
            <Hexagon className="h-4 w-4" />
            WHAT WE DO
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ delay: 0.08, duration: 0.42, ease: engineeredEase }}
            className="mx-auto mb-4 max-w-4xl font-display text-[2.65rem] font-bold leading-[0.98] tracking-[-0.045em] text-[#24336A] sm:text-5xl md:leading-tight"
          >
            Civil Engineering Testing And Design Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ delay: 0.14, duration: 0.42, ease: engineeredEase }}
            className="mx-auto max-w-3xl text-base leading-7 text-[#6B7280] md:text-lg"
          >
            Specialists in soil testing, foundation and pavement design, binder distribution
            calibration, and project management from Norton and Harare.
          </motion.p>
        </div>

        <div className="mb-10 grid gap-4 md:mb-12 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ delay: index * 0.055, duration: 0.42, ease: engineeredEase }}
              className="group relative min-h-[335px] overflow-hidden rounded-[1.15rem] border border-white/10 bg-[#111827] shadow-[0_14px_38px_rgba(17,24,39,0.14)] ring-1 ring-[#24336A]/5 transition-all duration-[320ms] hover:-translate-y-1 hover:border-[#8DBF44]/70 hover:shadow-[0_22px_64px_rgba(17,24,39,0.20)] sm:min-h-[410px] sm:rounded-[1.35rem] lg:min-h-[430px]"
            >
              <OptimizedImage
                src={service.image}
                alt=""
                aria-hidden="true"
                sizes="(min-width: 1024px) 400px, (min-width: 768px) 50vw, 100vw"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-[620ms] group-hover:scale-[1.055]"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(17,24,39,0.20)_0%,rgba(17,24,39,0.38)_42%,rgba(17,24,39,0.86)_100%)] transition-opacity duration-300 group-hover:opacity-95" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(141,191,68,0.14)_0%,rgba(141,191,68,0.04)_28%,transparent_52%)] opacity-80" />

              <div className="absolute left-5 top-5 z-10 sm:left-7 sm:top-7 lg:left-8 lg:top-8">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/20 bg-white/95 shadow-[0_12px_28px_rgba(0,0,0,0.18)] backdrop-blur-sm transition-all duration-300 group-hover:border-[#8DBF44]/70 group-hover:bg-[#8DBF44] sm:h-[4.35rem] sm:w-[4.35rem]">
                  <service.icon
                    className="h-8 w-8 text-[#24336A] transition-colors duration-300 group-hover:text-white sm:h-10 sm:w-10"
                  />
                </div>
              </div>

              <div className="absolute inset-x-0 bottom-0 z-10 p-5 pt-20 text-left sm:p-7 lg:p-8">
                <h3 className="mb-2.5 max-w-[18rem] font-display text-[1.32rem] font-extrabold leading-tight tracking-[-0.015em] text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.45)] sm:mb-3 lg:text-[1.55rem]">
                  {service.title}
                </h3>
                <p className="mb-4 max-w-[21rem] text-[15px] font-medium leading-[1.55] text-white/88 drop-shadow-[0_2px_7px_rgba(0,0,0,0.55)] sm:mb-5 lg:text-[16px] lg:leading-[1.6]">
                  {service.description}
                </p>
                <a
                  href="#contact"
                  className="tap-press inline-flex min-h-11 items-center gap-2 text-sm font-bold text-[#B7E66C] opacity-95 drop-shadow-[0_2px_7px_rgba(0,0,0,0.45)] transition-all duration-300 hover:gap-3 hover:text-white"
                >
                  Ask About This Service
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          className="text-center"
        >
          <a
            href="#contact"
            className="tap-press inline-flex min-h-12 items-center gap-2 rounded-lg border-2 border-[#24336A] px-7 py-3.5 font-semibold text-[#24336A] transition-all duration-300 hover:bg-[#24336A] hover:text-white sm:px-8 sm:py-4"
          >
            Discuss Your Project
            <ArrowRight className="h-5 w-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
