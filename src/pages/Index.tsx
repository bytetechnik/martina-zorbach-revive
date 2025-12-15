import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { PathwayTiles } from "@/components/PathwayTiles";
import { AboutSection } from "@/components/AboutSection";
import { TestimonialsPreview } from "@/components/TestimonialsPreview";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <PathwayTiles />
      <AboutSection />
      <TestimonialsPreview />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;
