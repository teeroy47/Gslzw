import { motion } from 'motion/react';
import { ChevronDown, Diamond } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export default function HeroSection() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: 'easeOut' }
    }
  };

  const words = ['Where', 'Precision', 'Meets', 'Excellence.'];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#24336A]">
      {/* Animated Background Layers */}
      <div className="absolute inset-0">
        {/* Gradient Mesh */}
        <div className="absolute inset-0 opacity-40">
          <div className="absolute inset-0 bg-gradient-to-br from-[#8DBF44]/20 via-transparent to-[#24336A]" />
          <div className="absolute inset-0 bg-gradient-to-tl from-[#8DBF44]/10 via-transparent to-transparent" />
        </div>

        {/* Noise Texture */}
        <div className="absolute inset-0 opacity-[0.04] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')]" />

        {/* Rotating Geometric SVG */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-[0.06]"
        >
          <svg viewBox="0 0 800 800" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M400 100 L600 250 L600 550 L400 700 L200 550 L200 250 Z" stroke="#8DBF44" strokeWidth="2" />
            <path d="M400 150 L550 250 L550 550 L400 650 L250 550 L250 250 Z" stroke="#8DBF44" strokeWidth="2" />
            <path d="M400 200 L500 300 L500 500 L400 600 L300 500 L300 300 Z" stroke="#8DBF44" strokeWidth="2" />
          </svg>
        </motion.div>
      </div>

      {/* Content Container */}
      <div className="max-w-[1280px] mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-6"
          >
            {/* Pre-headline Badge */}
            <motion.div variants={itemVariants}>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#8DBF44]/15 text-[#8DBF44] rounded-full font-['DM_Sans'] font-medium text-sm">
                <span className="w-2 h-2 bg-[#8DBF44] rounded-full" />
                ISO 17025 Accredited
              </div>
            </motion.div>

            {/* Main Headline with Word Pull-up */}
            <div className="overflow-hidden">
              <h1 className="font-['Syne'] font-extrabold text-white leading-[1.1]">
                {words.map((word, index) => (
                  <motion.span
                    key={index}
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 + index * 0.1, duration: 0.8 }}
                    className={`inline-block mr-4 text-5xl md:text-6xl lg:text-7xl xl:text-8xl ${
                      word === 'Excellence.' ? 'text-[#8DBF44]' : ''
                    }`}
                  >
                    {word}
                  </motion.span>
                ))}
              </h1>
            </div>

            {/* Subheadline */}
            <motion.p
              variants={itemVariants}
              className="text-white/75 font-['DM_Sans'] text-lg max-w-[520px]"
            >
              Leading geoscience testing, material analysis, and consulting services. Trusted by
              industry leaders across Southern Africa.
            </motion.p>

            {/* Motto */}
            <motion.div
              variants={itemVariants}
              className="border-l-3 border-[#8DBF44] pl-4"
            >
              <p className="text-white/60 font-['DM_Sans'] italic font-medium text-[15px]">
                "We maintain the standard of good, quality workmanship"
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="#contact"
                className="group relative inline-flex items-center justify-center px-9 py-4 bg-[#8DBF44] text-[#24336A] font-['DM_Sans'] font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_12px_40px_rgba(141,191,68,0.45)] overflow-hidden"
              >
                <span className="relative z-10">Get an Instant Quote →</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-30 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center px-9 py-4 border-2 border-white/40 text-white font-['DM_Sans'] font-semibold rounded-lg transition-all duration-300 hover:border-[#8DBF44] hover:text-[#8DBF44] hover:bg-[#8DBF44]/8"
              >
                Explore Services
              </a>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-6 pt-4 text-white/60 font-['DM_Sans'] font-medium text-[13px]"
            >
              <div className="flex items-center gap-2">
                <Diamond className="w-3 h-3 text-[#8DBF44]" />
                50+ Years Combined Experience
              </div>
              <div className="flex items-center gap-2">
                <Diamond className="w-3 h-3 text-[#8DBF44]" />
                1,000+ Projects Completed
              </div>
              <div className="flex items-center gap-2">
                <Diamond className="w-3 h-3 text-[#8DBF44]" />
                ISO 17025 Accredited
              </div>
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="relative hidden lg:block"
          >
            <div
              className="relative overflow-hidden rounded-2xl"
              style={{
                clipPath: 'polygon(10% 0%, 100% 0%, 100% 100%, 0% 100%)',
                borderLeft: '4px solid #8DBF44'
              }}
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1610079874731-5103e6157648?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnZW9sb2dpY2FsJTIwZmllbGQlMjB3b3JrJTIwc2NpZW50aXN0fGVufDF8fHx8MTc3NDc4ODE2MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Geological field work"
                className="w-full h-[600px] object-cover mix-blend-luminosity opacity-30"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-8 h-12 border-2 border-white/40 rounded-full flex items-center justify-center"
        >
          <ChevronDown className="text-white/60" size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
}
