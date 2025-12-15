import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { PathwayTiles } from "@/components/PathwayTiles";
import { AboutSection } from "@/components/AboutSection";
import { TestimonialsPreview } from "@/components/TestimonialsPreview";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <SEO 
        title="Startseite"
        description="Martina Zorbach Coaching in Frankfurt – Diplom-Psychologin & Systemische Coachin für Karriere, Führungskräfte und Ruhestandscoaching. Über 25 Jahre Erfahrung."
      />
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
