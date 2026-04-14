import { motion } from 'motion/react';
import { Circle } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const technologies = [
  {
    image:
      'https://images.unsplash.com/photo-1766297246931-7b861269dab0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnZW9zY2llbmNlJTIwbGFib3JhdG9yeSUyMGVxdWlwbWVudCUyMHRlc3Rpbmd8ZW58MXx8fHwxNzc0Nzg4MTYxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    title: 'Advanced Testing Equipment',
    specs: [
      'Compliant with SANS / ASTM / BS standards',
      'Digital data capture with real-time reporting',
      'Calibrated to +/-0.5% measurement accuracy',
      'SANAS-verified testing procedures'
    ],
    imageRight: false
  },
  {
    image:
      'https://images.unsplash.com/photo-1760493828288-d2dbb70d18c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZHZhbmNlZCUyMGxhYm9yYXRvcnklMjBlcXVpcG1lbnQlMjBtaWNyb3Njb3BlfGVufDF8fHx8MTc3NDc4ODE2M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    title: 'Precision Instrumentation',
    specs: [
      'High-resolution instrumentation for soils, aggregates, asphalt and concrete',
      'Integrated QA workflows from sample intake to signed reports',
      'Field-to-lab traceability across every testing stage',
      'Built for urgent turnaround without compromising accuracy'
    ],
    imageRight: true
  }
];

export default function TechnologySection() {
  return (
    <section id="technology" className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-[1280px] px-6">
        <div className="space-y-24">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8 }}
              className={`grid items-center gap-12 lg:grid-cols-2 ${
                tech.imageRight ? 'lg:grid-flow-dense' : ''
              }`}
            >
              <div className={tech.imageRight ? 'lg:col-start-2' : ''}>
                <motion.div
                  initial={{ clipPath: 'polygon(0 0, 0 0, 0 100%, 0 100%)' }}
                  whileInView={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 1, delay: 0.2 }}
                  className="relative overflow-hidden rounded-3xl"
                >
                  <div
                    className="absolute right-0 top-0 z-10 h-16 w-16 bg-[#8DBF44]"
                    style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%)' }}
                  />

                  <ImageWithFallback src={tech.image} alt={tech.title} className="h-[400px] w-full object-cover" />
                </motion.div>
              </div>

              <div className={tech.imageRight ? 'lg:col-start-1 lg:row-start-1' : ''}>
                <motion.h3
                  initial={{ opacity: 0, x: tech.imageRight ? 40 : -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="mb-8 font-['Syne'] text-4xl font-bold text-[#24336A]"
                >
                  {tech.title}
                </motion.h3>

                <div className="space-y-4">
                  {tech.specs.map((spec, specIndex) => (
                    <motion.div
                      key={spec}
                      initial={{ opacity: 0, x: tech.imageRight ? 40 : -40 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ delay: 0.4 + specIndex * 0.1, duration: 0.6 }}
                      className="flex items-start gap-3"
                    >
                      <Circle className="mt-2 h-2 w-2 flex-shrink-0 fill-[#8DBF44] text-[#8DBF44]" />
                      <p className="text-lg font-['DM_Sans'] text-[#6B7280]">{spec}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
