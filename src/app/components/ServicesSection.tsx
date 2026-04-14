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

const services = [
  {
    icon: TestTubeDiagonal,
    title: 'Soil Testing',
    description: 'Registered civil engineering soil testing support for field and laboratory programmes.',
    image: '/service-soil-testing.jpg'
  },
  {
    icon: Ruler,
    title: 'Foundation Design',
    description: 'Foundation investigation inputs and design support informed by site-specific ground conditions.',
    image: '/service-foundation-design.jpg'
  },
  {
    icon: Map,
    title: 'Pavement Design',
    description: 'Pavement design and site investigation work for roads, access routes and service infrastructure.',
    image: '/service-pavement-design.jpg'
  },
  {
    icon: ClipboardCheck,
    title: 'Binder Distribution Calibration',
    description: 'Calibration services for bitumen and binder distribution to improve consistency and control.',
    image: '/service-binder-distribution-calibration.jpg'
  },
  {
    icon: HardHat,
    title: 'Project Management',
    description: 'Technical supervision, reporting and project coordination across civil engineering work packages.',
    image: '/service-project-management.jpg'
  },
  {
    icon: Hexagon,
    title: 'Quality Control Testing',
    description: 'Densities, cube tests, moisture checks and DCP support for active construction and rehabilitation projects.',
    image: '/service-quality-control-testing.jpg'
  }
];

export default function ServicesSection() {
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
              transition={{ delay: index * 0.12, duration: 0.6 }}
              className="group relative overflow-hidden rounded-2xl border border-[rgba(36,51,106,0.08)] bg-white p-9 shadow-[0_4px_24px_rgba(36,51,106,0.06)] transition-all duration-300 hover:-translate-y-2 hover:border-[#8DBF44] hover:shadow-[0_8px_40px_rgba(36,51,106,0.12)]"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                style={{ backgroundImage: `url('${service.image}')` }}
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.88)_0%,rgba(255,255,255,0.72)_24%,rgba(36,51,106,0.82)_100%)] transition-all duration-300 group-hover:bg-[linear-gradient(180deg,rgba(255,255,255,0.82)_0%,rgba(36,51,106,0.30)_18%,rgba(36,51,106,0.88)_100%)]" />

              <div className="relative z-10 mb-6">
                <div className="flex h-16 w-16 items-center justify-center rounded-xl border border-[rgba(36,51,106,0.10)] bg-white/92 backdrop-blur-sm transition-all duration-300 group-hover:border-[#8DBF44] group-hover:bg-[#8DBF44]">
                  <service.icon className="h-10 w-10 text-[#24336A] transition-colors duration-300 group-hover:text-white" />
                </div>
              </div>

              <h3 className="relative z-10 mb-3 font-['Syne'] text-xl font-bold text-[#24336A] transition-colors duration-300 group-hover:text-white">
                {service.title}
              </h3>
              <p className="relative z-10 mb-4 leading-relaxed text-[#4B5563] transition-colors duration-300 group-hover:text-white/82">
                {service.description}
              </p>

              <div className="relative z-10 h-0 overflow-hidden transition-all duration-300 group-hover:h-auto">
                <a
                  href="#contact"
                  className="inline-flex translate-x-[-20px] items-center gap-2 text-sm font-semibold text-[#8DBF44] opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
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
