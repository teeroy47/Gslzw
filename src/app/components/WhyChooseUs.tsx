import { motion } from 'motion/react';
import { CheckCircle2, Star, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export default function WhyChooseUs() {
  const features = [
    {
      title: 'Fully Certified & ISO Accredited',
      description: 'SANAS accreditation ensures results meet highest international standards'
    },
    {
      title: 'Advanced Laboratory Equipment',
      description: 'State-of-the-art apparatus calibrated to SANS/ASTM precision'
    },
    {
      title: 'Expert Multi-Disciplinary Team',
      description: 'Geologists, engineers and technicians with 50+ years combined'
    },
    {
      title: 'Fast, Reliable Turnaround',
      description: 'Tiered reporting timelines to suit project urgency'
    },
    {
      title: 'End-to-End Project Coverage',
      description: 'From site investigation to certification and final sign-off'
    }
  ];

  return (
    <section id="about" className="bg-[#24336A] py-24 md:py-32">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#8DBF44]/15 text-[#8DBF44] rounded-full font-['DM_Sans'] font-medium text-sm mb-6"
            >
              <Star className="w-4 h-4" />
              WHY GEOSCIENCELAB
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.1 }}
              className="font-['Syne'] font-bold text-4xl md:text-5xl text-white mb-8"
            >
              Built on Precision. Backed by Decades of Expertise.
            </motion.h2>

            <div className="space-y-6 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ x: -40, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="flex gap-4"
                >
                  <CheckCircle2 className="w-6 h-6 text-[#8DBF44] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-['DM_Sans'] font-semibold text-white text-lg mb-1">
                      {feature.title}
                    </h3>
                    <p className="font-['DM_Sans'] text-white/70">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.5 }}
            >
              <a
                href="#"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#8DBF44] text-[#24336A] font-['DM_Sans'] font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_12px_40px_rgba(141,191,68,0.45)]"
              >
                Meet Our Team
                <ArrowRight className="w-5 h-5" />
              </a>
            </motion.div>
          </div>

          {/* Right Image with Floating Badges */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1684259498673-0682943e188f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYWJvcmF0b3J5JTIwc2NpZW50aXN0JTIwdGVzdGluZyUyMG1hdGVyaWFsc3xlbnwxfHx8fDE3NzQ3ODgxNjJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Laboratory testing"
                className="w-full h-[500px] object-cover"
              />

              {/* Floating Badge - ISO 17025 */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm rounded-2xl px-6 py-4 shadow-[0_8px_32px_rgba(0,0,0,0.2)]"
              >
                <div className="font-['Bebas_Neue'] text-3xl text-[#24336A]">ISO 17025</div>
                <div className="font-['DM_Sans'] text-sm text-[#6B7280]">Accredited</div>
              </motion.div>

              {/* Floating Badge - Projects */}
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute bottom-6 right-6 bg-white/95 backdrop-blur-sm rounded-2xl px-6 py-4 shadow-[0_8px_32px_rgba(0,0,0,0.2)]"
              >
                <div className="font-['Bebas_Neue'] text-3xl text-[#24336A]">1,000+</div>
                <div className="font-['DM_Sans'] text-sm text-[#6B7280]">Projects</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
