import { animate, motion, useInView, useMotionValue } from 'motion/react';
import { useEffect, useRef, useState } from 'react';
import { companyProfile, operatingYears } from '../companyProfile';

function Counter({ value, suffix = '' }: { value: number; suffix?: string }) {
  const count = useMotionValue(0);
  const ref = useRef(null);
  const [displayValue, setDisplayValue] = useState(0);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    const unsubscribe = count.on('change', (latest) => {
      setDisplayValue(Math.round(latest));
    });

    return unsubscribe;
  }, [count]);

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, value, { duration: 2, ease: 'easeOut' });
      return controls.stop;
    }
  }, [isInView, count, value]);

  return (
    <motion.span ref={ref} className="font-['Bebas_Neue'] text-7xl text-[#24336A]">
      {displayValue}
      {suffix}
    </motion.span>
  );
}

export default function StatsBanner() {
  const stats = [
    { value: operatingYears, suffix: '+', label: 'Years Since Formation' },
    {
      value: companyProfile.leadership.managingDirectorExperience,
      suffix: '+',
      label: 'Years Leadership Experience'
    },
    { value: companyProfile.teamSize, suffix: '', label: 'Team Members' },
    { value: companyProfile.bases.length, suffix: '', label: 'Operating Bases' }
  ];

  return (
    <section className="bg-[#F4F6FA] py-20">
      <div className="mx-auto max-w-[1280px] px-6">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="relative text-center"
            >
              <Counter value={stat.value} suffix={stat.suffix} />
              <p className="mt-2 text-sm font-medium uppercase tracking-[2px] text-[#6B7280]">
                {stat.label}
              </p>
              {index < stats.length - 1 && (
                <div className="absolute right-0 top-1/2 hidden h-16 w-px -translate-y-1/2 bg-[#e5e7eb] lg:block" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
