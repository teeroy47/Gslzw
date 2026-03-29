import { motion } from 'motion/react';
import {
  Hexagon,
  FlaskConical,
  Mountain,
  Leaf,
  Shield,
  HardHat,
  ArrowRight
} from 'lucide-react';

export default function ServicesSection() {
  const services = [
    {
      icon: Hexagon,
      title: 'Geotechnical Investigations',
      description: 'Site characterisation, borehole logging, bearing capacity assessments'
    },
    {
      icon: FlaskConical,
      title: 'Material Testing & Analysis',
      description: 'Concrete, asphalt, soil and aggregate testing to SANS standards'
    },
    {
      icon: Mountain,
      title: 'Geological Surveys',
      description: 'Detailed geological mapping and structural analysis'
    },
    {
      icon: Leaf,
      title: 'Environmental Impact Studies',
      description: 'Environmental baseline studies and compliance reporting'
    },
    {
      icon: Shield,
      title: 'Quality Control & Assurance',
      description: 'Independent QC monitoring and compliance verification'
    },
    {
      icon: HardHat,
      title: 'Construction Monitoring',
      description: 'On-site monitoring, reporting and real-time data capture'
    }
  ];

  return (
    <section id="services" className="bg-white py-24 md:py-32">
      <div className="max-w-[1280px] mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#8DBF44]/10 text-[#8DBF44] rounded-full font-['DM_Sans'] font-medium text-sm mb-6"
          >
            <Hexagon className="w-4 h-4" />
            WHAT WE DO
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.1 }}
            className="font-['Syne'] font-bold text-5xl text-[#24336A] mb-4"
          >
            Comprehensive Geoscience Solutions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.2 }}
            className="font-['DM_Sans'] text-lg text-[#6B7280] max-w-2xl mx-auto"
          >
            From ground investigation to material certification — we cover every stage of your project.
          </motion.p>
        </div>

        {/* Service Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.12, duration: 0.6 }}
              className="group relative bg-white border border-[rgba(36,51,106,0.08)] rounded-2xl p-9 shadow-[0_4px_24px_rgba(36,51,106,0.06)] transition-all duration-300 hover:-translate-y-2 hover:border-[#8DBF44] hover:shadow-[0_8px_40px_rgba(36,51,106,0.12)]"
            >
              {/* Icon */}
              <div className="relative mb-6">
                <div className="w-16 h-16 rounded-xl bg-[#8DBF44]/10 flex items-center justify-center transition-all duration-300 group-hover:bg-[#8DBF44]">
                  <service.icon className="w-12 h-12 text-[#8DBF44] transition-colors duration-300 group-hover:text-white" />
                </div>
              </div>

              {/* Content */}
              <h3 className="font-['Syne'] font-bold text-xl text-[#24336A] mb-3">
                {service.title}
              </h3>
              <p className="font-['DM_Sans'] text-[#6B7280] leading-relaxed mb-4">
                {service.description}
              </p>

              {/* Learn More Link */}
              <div className="overflow-hidden h-0 group-hover:h-auto transition-all duration-300">
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-[#8DBF44] font-['DM_Sans'] font-semibold text-sm translate-x-[-20px] opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Services CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          className="text-center"
        >
          <a
            href="#"
            className="inline-flex items-center gap-2 px-8 py-4 border-2 border-[#24336A] text-[#24336A] font-['DM_Sans'] font-semibold rounded-lg transition-all duration-300 hover:bg-[#24336A] hover:text-white"
          >
            View All Services
            <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
