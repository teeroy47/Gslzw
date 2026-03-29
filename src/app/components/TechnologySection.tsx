import { motion } from 'motion/react';
import { Circle } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export default function TechnologySection() {
  const technologies = [
    {
      image: 'https://images.unsplash.com/photo-1766297246931-7b861269dab0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnZW9zY2llbmNlJTIwbGFib3JhdG9yeSUyMGVxdWlwbWVudCUyMHRlc3Rpbmd8ZW58MXx8fHwxNzc0Nzg4MTYxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Advanced Testing Equipment',
      specs: [
        'Compliant with SANS / ASTM / BS standards',
        'Digital data capture with real-time reporting',
        'Calibrated to ±0.5% measurement accuracy',
        'SANAS-verified testing procedures'
      ],
      imageRight: false
    },
    {
      image: 'https://images.unsplash.com/photo-1760493828288-d2dbb70d18c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZHZhbmNlZCUyMGxhYm9yYXRvcnklMjBlcXVpcG1lbnQlMjBtaWNyb3Njb3BlfGVufDF8fHx8MTc3NDc4ODE2M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Precision Instrumentation',
      specs: [
        'Compliant with SANS / ASTM / BS standards',
        'Digital data capture with real-time reporting',
        'Calibrated to ±0.5% measurement accuracy',
        'SANAS-verified testing procedures'
      ],
      imageRight: true
    }
  ];

  return (
    <section id="technology" className="bg-white py-24 md:py-32">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="space-y-24">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8 }}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                tech.imageRight ? 'lg:grid-flow-dense' : ''
              }`}
            >
              {/* Image */}
              <div className={tech.imageRight ? 'lg:col-start-2' : ''}>
                <motion.div
                  initial={{ clipPath: 'polygon(0 0, 0 0, 0 100%, 0 100%)' }}
                  whileInView={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 1, delay: 0.2 }}
                  className="relative rounded-3xl overflow-hidden"
                >
                  {/* Lime corner accent */}
                  <div className="absolute top-0 right-0 w-16 h-16 bg-[#8DBF44] z-10" style={{
                    clipPath: 'polygon(0 0, 100% 0, 100% 100%)'
                  }} />
                  
                  <ImageWithFallback
                    src={tech.image}
                    alt={tech.title}
                    className="w-full h-[400px] object-cover"
                  />
                </motion.div>
              </div>

              {/* Content */}
              <div className={tech.imageRight ? 'lg:col-start-1 lg:row-start-1' : ''}>
                <motion.h3
                  initial={{ opacity: 0, x: tech.imageRight ? 40 : -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="font-['Syne'] font-bold text-4xl text-[#24336A] mb-8"
                >
                  {tech.title}
                </motion.h3>

                <div className="space-y-4">
                  {tech.specs.map((spec, specIndex) => (
                    <motion.div
                      key={specIndex}
                      initial={{ opacity: 0, x: tech.imageRight ? 40 : -40 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ delay: 0.4 + specIndex * 0.1, duration: 0.6 }}
                      className="flex gap-3 items-start"
                    >
                      <Circle className="w-2 h-2 text-[#8DBF44] fill-[#8DBF44] flex-shrink-0 mt-2" />
                      <p className="font-['DM_Sans'] text-[#6B7280] text-lg">{spec}</p>
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
