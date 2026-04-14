import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, Star } from 'lucide-react';
import { companyProfile } from '../companyProfile';
export default function WhyChooseUs() {
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
    <section id="about" className="bg-[#24336A] py-24 md:py-32">
      <div className="mx-auto max-w-[1280px] px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full bg-[#8DBF44]/15 px-4 py-2 text-sm font-medium text-[#8DBF44]"
            >
              <Star className="h-4 w-4" />
              WHY GEOSCIENCELAB
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.1 }}
              className="mb-6 font-['Syne'] text-4xl font-bold text-white md:text-5xl"
            >
              Built On Practical Testing Experience And Civil Engineering Discipline.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.15 }}
              className="mb-8 max-w-2xl text-white/72"
            >
              {companyProfile.vision} {companyProfile.mission}
            </motion.p>

            <div className="mb-8 space-y-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ x: -40, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="flex gap-4"
                >
                  <CheckCircle2 className="mt-1 h-6 w-6 flex-shrink-0 text-[#8DBF44]" />
                  <div>
                    <h3 className="mb-1 text-lg font-semibold text-white">{feature.title}</h3>
                    <p className="text-white/70">{feature.description}</p>
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
                href="#contact"
                className="inline-flex items-center gap-2 rounded-lg bg-[#8DBF44] px-8 py-4 font-semibold text-[#24336A] transition-all duration-300 hover:scale-105 hover:shadow-[0_12px_40px_rgba(141,191,68,0.45)]"
              >
                Speak To Our Team
                <ArrowRight className="h-5 w-5" />
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-3xl">
              <img
                src="/company-profile-media.jpg"
                alt="Construction plans and measuring tools"
                className="h-[500px] w-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
