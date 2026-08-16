import { useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AudienceSection from './components/AudienceSection';
import SpaceCuration from './components/SpaceCuration';
import GallerySection from './components/GallerySection';
import AmenitiesSection from './components/AmenitiesSection';
import LocationSection from './components/LocationSection';
import FAQSection from './components/FAQSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import FloatingCTA from './components/FloatingCTA';

export default function Home() {
  useEffect(() => {
    document.documentElement.classList.add('dark');
    return () => {
      document.documentElement.classList.remove('dark');
    };
  }, []);

  return (
    <div className="min-h-screen bg-background-50 text-foreground-950 selection:bg-primary-500/20 selection:text-primary-400">
      <Navbar />
      <main>
        <HeroSection />
        <AudienceSection />
        <SpaceCuration />
        <GallerySection />
        <AmenitiesSection />
        <LocationSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  );
}