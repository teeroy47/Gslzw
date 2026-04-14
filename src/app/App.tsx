import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import WhyChooseUs from './components/WhyChooseUs';
import ClientsSection from './components/ClientsSection';
import TechnologySection from './components/TechnologySection';
import CTASection from './components/CTASection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <WhyChooseUs />
        <ClientsSection />
        <TechnologySection />
        <CTASection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
