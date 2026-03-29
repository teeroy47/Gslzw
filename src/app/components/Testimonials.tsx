import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      quote:
        'Geosciencelab delivered exceptional results on our major infrastructure project. Their attention to detail and adherence to international standards gave us complete confidence in the testing outcomes.',
      author: 'David Nkosi',
      role: 'Project Director',
      company: 'SANRAL'
    },
    {
      quote:
        'The team at Geosciencelab consistently provides fast, accurate, and reliable geotechnical analysis. Their expertise has been invaluable to our construction projects across Southern Africa.',
      author: 'Sarah Mitchell',
      role: 'Chief Engineer',
      company: 'WBHO'
    },
    {
      quote:
        'Working with Geosciencelab means working with true professionals. Their ISO accreditation and state-of-the-art equipment ensure we receive nothing but the highest quality service.',
      author: 'James van der Merwe',
      role: 'Operations Manager',
      company: 'Murray & Roberts'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="bg-[#24336A] py-24 md:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#8DBF44] rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#8DBF44] rounded-full blur-3xl" />
      </div>

      <div className="max-w-[1280px] mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="font-['Syne'] font-bold text-5xl text-white text-center mb-16"
        >
          What Our Clients Say
        </motion.h2>

        {/* Testimonial Cards */}
        <div className="relative max-w-4xl mx-auto min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-white/7 backdrop-blur-xl border border-white/10 rounded-3xl p-12 relative"
            >
              {/* Large Quote Mark */}
              <Quote className="absolute top-8 left-8 w-16 h-16 text-[#8DBF44] opacity-50" />

              {/* Quote Text */}
              <p className="font-['DM_Sans'] text-white/85 text-xl leading-relaxed mb-8 relative z-10 pl-12">
                "{testimonials[currentIndex].quote}"
              </p>

              {/* Star Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-[#8DBF44] fill-[#8DBF44]" />
                ))}
              </div>

              {/* Author Info */}
              <div>
                <div className="font-['Syne'] font-semibold text-white text-lg">
                  {testimonials[currentIndex].author}
                </div>
                <div className="font-['DM_Sans'] text-white/50 text-sm">
                  {testimonials[currentIndex].role} • {testimonials[currentIndex].company}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Dots */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-[#8DBF44] w-8'
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
