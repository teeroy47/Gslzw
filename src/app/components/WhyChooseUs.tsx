import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, Star } from 'lucide-react';
import { companyProfile } from '../companyProfile';
import { engineeredEase, viewportOnce } from '../motion';
import { OptimizedImage } from './OptimizedMedia';
export default function WhyChooseUs() {
  const companyProfileMedia = 'company-profile-media.jpg';

  const features = [
    {
      title: 'Established Since 2006',
      description: 'Operating for nearly two decades as a registered civil engineering soil testing laboratory.'
    },
    {
      title: 'Experienced Leadership',
      description: `We bring ${companyProfile.leadership.managingDirectorExperience} years of civil engineering experience.`
    },
    {
      title: 'Local presence, National Reach',
      description: 'Our Laboratory and office operations are positioned to support projects across Zimbabwe.'
    },
    {
      title: 'Client-Focused Commitment',
      description: 'We prioritize performance, client satisfaction, and dependable support.'
    },
    {
      title: 'Team-Based Delivery',
      description: 'A compact team structured around management, administration, sales and field support roles.'
    }
  ];

  return (
    <section id="about" className="bg-[#24336A] py-20 md:py-32">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-6">
        <div className="grid items-center gap-10 md:gap-16 lg:grid-cols-2">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              className="mb-5 inline-flex items-center gap-2 rounded-full bg-[#8DBF44]/15 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#8DBF44] md:mb-6 md:text-sm"
            >
              <Star className="h-4 w-4" />
              WHY GEOSCIENCELAB
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ delay: 0.08, duration: 0.44, ease: engineeredEase }}
              className="mb-5 font-display text-[2.55rem] font-bold leading-[1] tracking-[-0.045em] text-white md:mb-6 md:text-5xl"
            >
              Built On Practical Testing Experience And Civil Engineering Discipline.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ delay: 0.14, duration: 0.42, ease: engineeredEase }}
              className="mb-7 max-w-2xl text-base leading-7 text-white/72 md:mb-8"
            >
              {companyProfile.vision} {companyProfile.mission}
            </motion.p>

            <div className="mb-8 space-y-4 md:space-y-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ x: -40, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={viewportOnce}
                  transition={{ delay: index * 0.055, duration: 0.4, ease: engineeredEase }}
                  className="flex gap-3.5 md:gap-4"
                >
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-[#8DBF44] md:h-6 md:w-6" />
                  <div>
                    <h3 className="mb-1 text-base font-semibold text-white md:text-lg">{feature.title}</h3>
                    <p className="text-sm leading-6 text-white/70 md:text-base">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ delay: 0.28, duration: 0.38, ease: engineeredEase }}
            >
              <a
                href="#contact"
                className="tap-press inline-flex min-h-12 items-center gap-2 rounded-lg bg-[#8DBF44] px-7 py-3.5 font-semibold text-[#24336A] transition-all duration-300 hover:scale-[1.025] hover:shadow-[0_12px_40px_rgba(141,191,68,0.35)] sm:px-8 sm:py-4"
              >
                Speak To Our Team
                <ArrowRight className="h-5 w-5" />
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.48, ease: engineeredEase }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-3xl">
              <OptimizedImage
                src={companyProfileMedia}
                alt="Construction plans and measuring tools"
                sizes="(min-width: 1024px) 600px, 100vw"
                className="h-[320px] w-full object-cover sm:h-[420px] lg:h-[500px]"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
