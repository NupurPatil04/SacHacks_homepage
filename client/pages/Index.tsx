import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SponsorsSection from "@/components/SponsorsSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

export default function Index() {
  return (
    <div className="min-h-screen bg-space-gradient overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <SponsorsSection />
      <FAQSection />
      <Footer />
    </div>
  );
}
