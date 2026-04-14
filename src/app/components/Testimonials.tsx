import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Quote, Star } from 'lucide-react';

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
  },
  {
    quote:
      'Their reporting cadence and technical clarity made it easy for our site teams to move fast without losing confidence in compliance.',
    author: 'Rudo Moyo',
    role: 'Infrastructure Lead',
    company: 'Aurecon'
  },
  {
    quote:
      'From first sampling to final certification, Geosciencelab handled the process with the discipline and responsiveness you expect from a premium technical partner.',
    author: 'Peter Naidoo',
    role: 'Regional Construction Manager',
    company: 'SMEC'
  }
];

function TestimonialCard({
  quote,
  author,
  role,
  company
}: (typeof testimonials)[number]) {
  return (
    <article className="relative rounded-[20px] border border-white/10 bg-white/7 p-10 backdrop-blur-xl">
      <Quote className="absolute left-8 top-8 h-14 w-14 text-[#8DBF44] opacity-70" />

      <p className="relative z-10 mb-8 pl-10 font-['DM_Sans'] text-[17px] leading-7 text-white/85">
        "{quote}"
      </p>

      <div className="mb-4 flex gap-1">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="h-5 w-5 fill-[#8DBF44] text-[#8DBF44]" />
        ))}
      </div>

      <div className="font-['Syne'] text-base font-semibold text-white">{author}</div>
      <div className="font-['DM_Sans'] text-[13px] text-white/50">
        {role} - {company}
      </div>
    </article>
  );
}

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const visibleDesktopCards = Array.from({ length: 3 }, (_, offset) => {
    return testimonials[(currentIndex + offset) % testimonials.length];
  });

  return (
    <section className="relative overflow-hidden bg-[#24336A] py-24 md:py-32">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-[#8DBF44] blur-3xl" />
        <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-[#8DBF44] blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1280px] px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="mb-16 text-center font-['Syne'] text-5xl font-bold text-white"
        >
          What Our Clients Say
        </motion.h2>

        <div className="hidden gap-6 lg:grid lg:grid-cols-3">
          {visibleDesktopCards.map((testimonial, index) => (
            <motion.div
              key={`${testimonial.author}-${currentIndex}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.12, duration: 0.5 }}
            >
              <TestimonialCard {...testimonial} />
            </motion.div>
          ))}
        </div>

        <div className="relative mx-auto min-h-[400px] max-w-4xl lg:hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              <TestimonialCard {...testimonials[currentIndex]} />
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-10 flex justify-center gap-3">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-3 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'w-8 bg-[#8DBF44]' : 'w-3 bg-white/30 hover:bg-white/50'
              }`}
              aria-label={`Show testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
