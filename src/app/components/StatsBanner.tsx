import { motion, useInView, useMotionValue, useTransform, animate } from 'motion/react';
import { useEffect, useRef } from 'react';

function Counter({ value, suffix = '' }: { value: number; suffix?: string }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, value, { duration: 2, ease: 'easeOut' });
      return controls.stop;
    }
  }, [isInView, count, value]);

  return (
    <motion.span ref={ref} className="font-['Bebas_Neue'] text-7xl text-[#24336A]">
      {rounded}
      {suffix}
    </motion.span>
  );
}

export default function StatsBanner() {
  const stats = [
    { value: 50, suffix: '+', label: 'Years Experience' },
    { value: 1000, suffix: '+', label: 'Projects Completed' },
    { value: 98, suffix: '%', label: 'Client Retention Rate' },
    { value: 15, suffix: '+', label: 'Service Types Offered' }
  ];

  return (
    <section className="bg-[#F4F6FA] py-20">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="text-center relative"
            >
              <Counter value={stat.value} suffix={stat.suffix} />
              <p className="font-['DM_Sans'] font-medium text-[#6B7280] uppercase tracking-[2px] text-sm mt-2">
                {stat.label}
              </p>
              {index < stats.length - 1 && (
                <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-16 bg-[#e5e7eb]" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
