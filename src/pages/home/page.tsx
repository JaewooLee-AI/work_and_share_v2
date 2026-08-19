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
  return (
    <div className="min-h-screen bg-paper text-ink selection:bg-accent-primary selection:text-paper font-sans tracking-tightest leading-relaxed overflow-x-hidden flex flex-col">
      <Navbar />
      <main className="flex-grow">
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