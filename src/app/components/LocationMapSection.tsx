import { motion } from 'motion/react';
import { MapPin, Navigation, Route } from 'lucide-react';
import { useMemo, useState } from 'react';
import { companyProfile } from '../companyProfile';
import { engineeredEase, viewportOnce } from '../motion';

const mapStats = [
  { label: 'Laboratory', value: 'Norton' },
  { label: 'Access', value: 'South Road' },
  { label: 'Coverage', value: 'Zimbabwe' }
];

const mapTypes = [
  { label: 'Map', value: 'm' },
  { label: 'Satellite', value: 'k' },
  { label: 'Terrain', value: 'p' }
] as const;

export default function LocationMapSection() {
  const [mapType, setMapType] = useState<(typeof mapTypes)[number]['value']>('m');

  const mapSrc = useMemo(() => {
    const separator = companyProfile.location.googleMapsEmbedUrl.includes('?') ? '&' : '?';
    return `${companyProfile.location.googleMapsEmbedUrl}${separator}t=${mapType}&z=16`;
  }, [mapType]);

  return (
    <section id="location" className="relative overflow-hidden bg-[#F4F6FA] py-16 md:py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-12%] top-10 h-72 w-72 rounded-full bg-[#8DBF44]/10 blur-3xl" />
        <div className="absolute right-[-10%] top-1/3 h-80 w-80 rounded-full bg-[#24336A]/10 blur-3xl" />
        <div className="absolute inset-0 opacity-[0.28] [background-image:linear-gradient(rgba(36,51,106,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(36,51,106,0.08)_1px,transparent_1px)] [background-size:44px_44px]" />
      </div>

      <div className="relative mx-auto max-w-[1280px] px-5 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.42, ease: engineeredEase }}
          className="grid gap-7 lg:grid-cols-[0.78fr_1.22fr] lg:items-stretch"
        >
          <div className="relative rounded-[2rem] border border-[#24336A]/10 bg-white/80 p-6 shadow-[0_24px_80px_rgba(36,51,106,0.10)] backdrop-blur-xl md:p-8">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#24336A]/10 bg-[#24336A]/5 px-3.5 py-2 text-[0.68rem] font-bold uppercase tracking-[0.24em] text-[#24336A]">
              <MapPin className="h-3.5 w-3.5 text-[#8DBF44]" />
              Visit the Laboratory
            </div>

            <h2 className="max-w-xl font-display text-[2.35rem] font-bold leading-[0.98] tracking-[-0.045em] text-[#24336A] md:text-5xl">
              Find us visually before you arrive.
            </h2>

            <p className="mt-5 max-w-md text-base leading-7 text-[#5F6878]">
              Our Norton laboratory is pinned for easy navigation. The map keeps the precise
              placement visual while showing clients a clean, readable location experience.
            </p>

            <div className="mt-8 grid grid-cols-3 gap-2.5">
              {mapStats.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-[#24336A]/8 bg-[#F8FAFD] px-3 py-4"
                >
                  <div className="text-[0.62rem] font-bold uppercase tracking-[0.18em] text-[#8DBF44]">
                    {item.label}
                  </div>
                  <div className="mt-1 text-sm font-semibold text-[#24336A]">{item.value}</div>
                </div>
              ))}
            </div>

            <div className="mt-8 space-y-3 border-t border-[#24336A]/10 pt-6">
              <div className="flex gap-3">
                <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#8DBF44]/12">
                  <Route className="h-5 w-5 text-[#8DBF44]" />
                </div>
                <div>
                  <div className="font-semibold text-[#24336A]">{companyProfile.location.label}</div>
                  <div className="text-sm leading-6 text-[#6B7280]">
                    {companyProfile.location.area}
                  </div>
                </div>
              </div>

              <a
                href={companyProfile.location.googleMapsUrl}
                target="_blank"
                rel="noreferrer"
                className="tap-press inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#24336A] px-5 text-sm font-bold text-white shadow-[0_16px_36px_rgba(36,51,106,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#1C2858] hover:shadow-[0_20px_44px_rgba(36,51,106,0.26)] focus:outline-none focus-visible:ring-4 focus-visible:ring-[#8DBF44]/35"
              >
                <Navigation className="h-4 w-4" />
                Open directions
              </a>
            </div>
          </div>

          <div className="relative min-h-[360px] overflow-hidden rounded-[2rem] border border-white/70 bg-[#DDE4EF] shadow-[0_26px_90px_rgba(36,51,106,0.18)] md:min-h-[500px]">
            <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-16 bg-gradient-to-b from-white/35 to-transparent" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-20 bg-gradient-to-t from-[#24336A]/14 to-transparent" />

            <div className="absolute right-3 top-3 z-20 flex rounded-full border border-white/70 bg-white/85 p-1 shadow-[0_12px_34px_rgba(36,51,106,0.14)] backdrop-blur-xl md:right-5 md:top-5">
              {mapTypes.map((type) => {
                const isActive = mapType === type.value;

                return (
                  <button
                    key={type.value}
                    type="button"
                    onClick={() => setMapType(type.value)}
                    aria-pressed={isActive}
                    className={`min-h-10 rounded-full px-3.5 text-xs font-bold transition-all duration-300 focus:outline-none focus-visible:ring-4 focus-visible:ring-[#8DBF44]/35 md:px-4 ${
                      isActive
                        ? 'bg-[#24336A] text-white shadow-[0_8px_20px_rgba(36,51,106,0.22)]'
                        : 'text-[#24336A]/70 hover:bg-[#24336A]/6 hover:text-[#24336A]'
                    }`}
                  >
                    {type.label}
                  </button>
                );
              })}
            </div>

            <iframe
              title={`${companyProfile.location.label} map`}
              src={mapSrc}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full min-h-[360px] w-full border-0 md:min-h-[500px]"
              aria-label={`Map showing ${companyProfile.location.label} in Norton`}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
