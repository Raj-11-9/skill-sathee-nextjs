import ContactProvider from '@/components/ContactProvider';
import Providers from '@/components/Providers';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import { Stats, Trust } from '@/components/Stats';
import Services from '@/components/Services';
import { HowWeWork, AISection } from '@/components/Innovation';
import SaaSProducts from '@/components/SaaSProducts';
import Training from '@/components/Training';
import { About, Why } from '@/components/About';
import CaseStudies from '@/components/CaseStudies';
import Process from '@/components/Process';
import Testimonials from '@/components/Testimonials';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <ContactProvider>
      <Providers />
      <Navbar />
      <main id="top">
        <Hero />
        <Stats />
        <Trust />
        <Services />
        <HowWeWork />
        <AISection />
        <SaaSProducts />
        <Training />
        <About />
        <Why />
        <CaseStudies />
        <Process />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </ContactProvider>
  );
}
