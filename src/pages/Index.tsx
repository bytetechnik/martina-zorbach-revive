import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { ServicesSection } from "@/components/ServicesSection";
import { AboutSection } from "@/components/AboutSection";
import { FAQPreview } from "@/components/FAQPreview";
import { TestimonialsPreview } from "@/components/TestimonialsPreview";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <FAQPreview />
      <TestimonialsPreview />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;
