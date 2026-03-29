import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import StatsBanner from './components/StatsBanner';
import ServicesSection from './components/ServicesSection';
import WhyChooseUs from './components/WhyChooseUs';
import ClientsSection from './components/ClientsSection';
import TechnologySection from './components/TechnologySection';
import Testimonials from './components/Testimonials';
import CTASection from './components/CTASection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ChatbotButton from './components/ChatbotButton';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <StatsBanner />
      <ServicesSection />
      <WhyChooseUs />
      <ClientsSection />
      <TechnologySection />
      <Testimonials />
      <CTASection />
      <ContactSection />
      <Footer />
      <ChatbotButton />
    </div>
  );
}
