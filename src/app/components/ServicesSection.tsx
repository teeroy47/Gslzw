import { motion } from 'motion/react';
import { useState } from 'react';
import {
  ArrowRight,
  ClipboardCheck,
  HardHat,
  Hexagon,
  Map,
  Ruler,
  TestTubeDiagonal
} from 'lucide-react';

const assetBase = import.meta.env.BASE_URL;

const services = [
  {
    icon: TestTubeDiagonal,
    title: 'Soil Testing',
    description: 'Registered civil engineering soil testing support for field and laboratory programmes.',
    image: `${assetBase}service-soil-testing.jpg`
  },
  {
    icon: Ruler,
    title: 'Foundation Design',
    description: 'Foundation investigation inputs and design support informed by site-specific ground conditions.',
    image: `${assetBase}service-foundation-design.jpg`
  },
  {
    icon: Map,
    title: 'Pavement Design',
    description: 'Pavement design and site investigation work for roads, access routes and service infrastructure.',
    image: `${assetBase}service-pavement-design.jpg`
  },
  {
    icon: ClipboardCheck,
    title: 'Binder Distribution Calibration',
    description: 'Calibration services for bitumen and binder distribution to improve consistency and control.',
    image: `${assetBase}service-binder-distribution-calibration.jpg`
  },
  {
    icon: HardHat,
    title: 'Project Management',
    description: 'Technical supervision, reporting and project coordination across civil engineering work packages.',
    image: `${assetBase}service-project-management.jpg`
  },
  {
    icon: Hexagon,
    title: 'Quality Control Testing',
    description: 'Densities, cube tests, moisture checks and DCP support for active construction and rehabilitation projects.',
    image: `${assetBase}service-quality-control-testing.jpg`
  }
];

export default function ServicesSection() {
  const [activeCard, setActiveCard] = useState<number | null>(0);

  return (
    <section id="services" className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-[1280px] px-6">
        <div className="mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full bg-[#8DBF44]/10 px-4 py-2 text-sm font-medium text-[#8DBF44]"
          >
            <Hexagon className="h-4 w-4" />
            WHAT WE DO
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.1 }}
            className="mb-4 font-['Syne'] text-5xl font-bold text-[#24336A]"
          >
            Civil Engineering Testing And Design Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.2 }}
            className="mx-auto max-w-3xl text-lg text-[#6B7280]"
          >
            Specialists in soil testing, foundation and pavement design, binder distribution
            calibration, and project management from Norton and Harare.
          </motion.p>
        </div>

        <div className="mb-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              onViewportEnter={() => setActiveCard(index)}
              transition={{ delay: index * 0.12, duration: 0.6 }}
              onClick={() => setActiveCard((current) => (current === index ? null : index))}
              className={`group relative overflow-hidden rounded-2xl border bg-white p-9 shadow-[0_4px_24px_rgba(36,51,106,0.06)] transition-all duration-300 hover:-translate-y-2 hover:border-[#8DBF44] hover:shadow-[0_8px_40px_rgba(36,51,106,0.12)] ${
                activeCard === index
                  ? 'border-[#8DBF44] shadow-[0_8px_40px_rgba(36,51,106,0.12)]'
                  : 'border-[rgba(36,51,106,0.08)]'
              }`}
            >
              <img
                src={service.image}
                alt=""
                aria-hidden="true"
                loading="lazy"
                decoding="async"
                className={`absolute inset-0 h-full w-full object-cover transition-transform duration-500 ${
                  activeCard === index ? 'scale-105' : 'group-hover:scale-105'
                }`}
              />
              <div
                className={`absolute inset-0 transition-all duration-300 ${
                  activeCard === index
                    ? 'bg-[linear-gradient(180deg,rgba(255,255,255,0.49)_0%,rgba(36,51,106,0.18)_18%,rgba(36,51,106,0.53)_100%)]'
                    : 'bg-[linear-gradient(180deg,rgba(255,255,255,0.53)_0%,rgba(255,255,255,0.43)_24%,rgba(36,51,106,0.49)_100%)] group-hover:bg-[linear-gradient(180deg,rgba(255,255,255,0.49)_0%,rgba(36,51,106,0.18)_18%,rgba(36,51,106,0.53)_100%)]'
                }`}
              />

              <div className="relative z-10 mb-6">
                <div
                  className={`flex h-16 w-16 items-center justify-center rounded-xl border border-[rgba(36,51,106,0.10)] bg-white/92 backdrop-blur-sm transition-all duration-300 ${
                    activeCard === index ? 'border-[#8DBF44] bg-[#8DBF44]' : 'group-hover:border-[#8DBF44] group-hover:bg-[#8DBF44]'
                  }`}
                >
                  <service.icon
                    className={`h-10 w-10 text-[#24336A] transition-colors duration-300 ${
                      activeCard === index ? 'text-white' : 'group-hover:text-white'
                    }`}
                  />
                </div>
              </div>

              <h3
                className={`relative z-10 mb-3 font-['Syne'] text-xl font-bold transition-colors duration-300 ${
                  activeCard === index ? 'text-white' : 'text-[#24336A] group-hover:text-white'
                }`}
              >
                {service.title}
              </h3>
              <p
                className={`relative z-10 mb-4 leading-relaxed transition-colors duration-300 ${
                  activeCard === index ? 'text-white/82' : 'text-[#4B5563] group-hover:text-white/82'
                }`}
              >
                {service.description}
              </p>

              <div
                className={`relative z-10 overflow-hidden transition-all duration-300 ${
                  activeCard === index ? 'h-auto' : 'h-0 group-hover:h-auto'
                }`}
              >
                <a
                  href="#contact"
                  className={`inline-flex items-center gap-2 text-sm font-semibold text-[#8DBF44] transition-all duration-300 ${
                    activeCard === index
                      ? 'translate-x-0 opacity-100'
                      : 'translate-x-[-20px] opacity-0 group-hover:translate-x-0 group-hover:opacity-100'
                  }`}
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
            className="inline-flex items-center gap-2 rounded-lg border-2 border-[#24336A] px-8 py-4 font-semibold text-[#24336A] transition-all duration-300 hover:bg-[#24336A] hover:text-white"
          >
            Discuss Your Project
            <ArrowRight className="h-5 w-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
