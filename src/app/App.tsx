import Navbar from './components/Navbar';
import { useEffect } from 'react';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import WhyChooseUs from './components/WhyChooseUs';
import TeamSection from './components/TeamSection';
import ClientsSection from './components/ClientsSection';
import TechnologySection from './components/TechnologySection';
import CTASection from './components/CTASection';
import ContactSection from './components/ContactSection';
import LocationMapSection from './components/LocationMapSection';
import Footer from './components/Footer';
import { prewarmOptimizedImages } from './components/OptimizedMedia';

const scrollCriticalImages = [
  'service-soil-testing.jpg',
  'service-foundation-design.jpg',
  'service-pavement-design.jpg',
  'service-binder-distribution-calibration.jpg',
  'service-project-management.jpg',
  'service-quality-control-testing.jpg',
  'company-profile-media.jpg',
  'cta-background.jpg'
];

export default function App() {
  useEffect(() => {
    const runPrewarm = () => {
      const targetWidth = window.matchMedia('(max-width: 767px)').matches ? 480 : 768;
      prewarmOptimizedImages(scrollCriticalImages, targetWidth);
    };

    const warmupTimer = window.setTimeout(runPrewarm, 350);

    return () => {
      window.clearTimeout(warmupTimer);
    };
  }, []);

  return (
    <div className="min-h-dvh overflow-x-clip bg-white">
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <WhyChooseUs />
        <TeamSection />
        <ClientsSection />
        <TechnologySection />
        <CTASection />
        <LocationMapSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
