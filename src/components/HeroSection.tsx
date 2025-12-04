import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import martinaHero from "@/assets/martina-hero.png";

export const HeroSection = () => {
  const scrollToAbout = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={martinaHero}
          alt="Martina Zorbach - Coaching"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-sage-dark/95 via-sage/85 to-sage/60" />
      </div>

      {/* Decorative Elements */}
      <motion.div
        className="absolute top-20 right-20 w-64 h-64 rounded-full bg-terracotta/10 blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-40 left-10 w-96 h-96 rounded-full bg-cream/10 blur-3xl"
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      {/* Content */}
      <div className="relative z-10 container-narrow mx-auto px-6 lg:px-12 pt-32 pb-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-block font-body text-cream/80 text-sm md:text-base tracking-widest uppercase mb-6">
              Diplom-Psychologin & Systemische Coachin
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-display text-4xl md:text-6xl lg:text-7xl text-cream leading-tight mb-6"
          >
            Martina Zorbach
            <span className="block text-terracotta-light italic mt-2">Coaching</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="font-body text-lg md:text-xl text-cream/90 leading-relaxed mb-10 max-w-xl"
          >
            Professionelle Begleitung für Ihre beruflichen und persönlichen 
            Herausforderungen. Gemeinsam finden wir Ihren Weg.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button
              variant="hero"
              size="lg"
              asChild
            >
              <Link to="/kontakt">Kostenloses Erstgespräch</Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              asChild
              className="border-cream/30 text-cream hover:bg-cream/10 hover:text-cream"
            >
              <Link to="/angebote">Meine Angebote</Link>
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.button
          onClick={scrollToAbout}
          className="flex flex-col items-center gap-2 text-cream/60 hover:text-cream transition-colors"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="font-body text-xs tracking-widest uppercase">Entdecken</span>
          <ArrowDown size={20} />
        </motion.button>
      </motion.div>
    </section>
  );
};
