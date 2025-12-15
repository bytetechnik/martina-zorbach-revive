import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Sparkles, MapPin } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import martinaHero from "@/assets/martina-hero.png";

export const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });

  // Parallax transforms for different elements
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 45]);
  const rotate2 = useTransform(scrollYProgress, [0, 1], [45, 90]);

  const scrollToAbout = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section ref={sectionRef} className="relative min-h-screen overflow-hidden bg-background pt-8">
      {/* Animated Background Grid with Parallax - Hidden on mobile for performance */}
      <motion.div 
        className="absolute inset-0 opacity-[0.03] hidden md:block"
        style={{ y: y1, scale }}
      >
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />
      </motion.div>

      {/* Floating Gradient Orbs - Simplified on mobile */}
      <motion.div
        className="absolute top-[10%] left-[5%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] rounded-full"
        style={{
          background: 'radial-gradient(circle, hsl(var(--primary) / 0.15) 0%, transparent 70%)',
          y: y2,
          opacity,
        }}
        animate={{
          x: [0, 30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[10%] right-[10%] w-[250px] md:w-[400px] h-[250px] md:h-[400px] rounded-full"
        style={{
          background: 'radial-gradient(circle, hsl(var(--accent) / 0.2) 0%, transparent 70%)',
          y: y3,
          opacity,
        }}
        animate={{
          x: [0, -20, 0],
          scale: [1.1, 1, 1.1],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Floating Geometric Shapes - Hidden on mobile */}
      <motion.div
        className="absolute top-[15%] right-[15%] w-20 h-20 border-2 border-primary/20 rounded-2xl hidden md:block"
        style={{ y: y4, rotate: rotate1, opacity }}
      />
      <motion.div
        className="absolute bottom-[25%] left-[8%] w-16 h-16 bg-accent/10 rounded-full hidden md:block"
        style={{ y: y3, opacity }}
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-[60%] right-[8%] w-12 h-12 border border-accent/30 hidden lg:block"
        style={{ y: y2, rotate: rotate2, opacity }}
      />

      {/* Main Content */}
      <div className="relative z-10 min-h-screen">
        {/* Mobile Layout */}
        <div className="lg:hidden flex flex-col min-h-screen">
          {/* Mobile Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative pt-28 px-6"
          >
            <div className="relative mx-auto w-48 h-48 sm:w-56 sm:h-56">
              {/* Decorative ring */}
              <div className="absolute inset-0 rounded-full border-2 border-primary/20 scale-110" />
              <div className="absolute inset-0 rounded-full border border-accent/30 scale-125" />
              
              {/* Image */}
              <div className="relative w-full h-full rounded-full overflow-hidden shadow-xl border-4 border-background">
                <img
                  src={martinaHero}
                  alt="Martina Zorbach"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              
              {/* Location badge */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1 }}
                className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground rounded-full px-4 py-1.5 shadow-lg flex items-center gap-1.5"
              >
                <MapPin size={12} />
                <span className="font-body text-xs font-medium">Frankfurt</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Mobile Content */}
          <div className="flex-1 flex flex-col justify-center px-6 py-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center mb-4"
            >
              <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/10 rounded-full">
                <Sparkles size={12} className="text-primary" />
                <span className="font-body text-[10px] tracking-widest uppercase text-primary font-medium">
                  Diplom-Psychologin & Coachin
                </span>
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="font-display text-4xl sm:text-5xl text-foreground leading-[0.95] mb-4 text-center"
            >
              <span className="block">Martina Zorbach</span>
              <span className="block text-primary italic mt-1">Coaching</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="font-body text-base text-muted-foreground leading-relaxed mb-8 text-center max-w-sm mx-auto"
            >
              Professionelle Begleitung für Ihre beruflichen und persönlichen Herausforderungen.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-col gap-3 mb-8"
            >
              <Button size="lg" asChild className="group w-full">
                <Link to="/kontakt" className="flex items-center justify-center gap-2">
                  Kostenloses Erstgespräch
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="w-full">
                <Link to="/karriere-fuehrung">Meine Angebote</Link>
              </Button>
            </motion.div>

            {/* Mobile Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="grid grid-cols-3 gap-4 pt-6 border-t border-border"
            >
              {[
                { value: "25+", label: "Jahre" },
                { value: "500+", label: "Coachees" },
                { value: "100%", label: "Engagement" },
              ].map((stat, index) => (
                <div key={stat.label} className="text-center">
                  <div className="font-display text-2xl sm:text-3xl text-primary">{stat.value}</div>
                  <div className="font-body text-[10px] sm:text-xs text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Mobile Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="pb-6"
          >
            <motion.button
              onClick={scrollToAbout}
              className="flex flex-col items-center gap-2 mx-auto"
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <span className="font-body text-[10px] tracking-widest uppercase text-muted-foreground">
                Mehr erfahren
              </span>
              <div className="w-5 h-8 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-1.5">
                <motion.div
                  className="w-1 h-1 rounded-full bg-primary"
                  animate={{ y: [0, 10, 0], opacity: [1, 0, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
              </div>
            </motion.button>
          </motion.div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:grid lg:grid-cols-2 items-center min-h-screen">
          {/* Left Content */}
          <div className="px-16 xl:px-24 pt-32 pb-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-6"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full">
                <Sparkles size={14} className="text-primary" />
                <span className="font-body text-xs tracking-widest uppercase text-primary font-medium">
                  Diplom-Psychologin & Systemische Coachin
                </span>
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="font-display text-7xl xl:text-8xl text-foreground leading-[0.95] mb-8"
            >
              <span className="block">Martina</span>
              <span className="block">Zorbach</span>
              <motion.span 
                className="block text-primary italic mt-2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                Coaching
              </motion.span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="font-body text-xl text-muted-foreground leading-relaxed mb-10 max-w-lg"
            >
              Professionelle Begleitung für Ihre beruflichen und persönlichen 
              Herausforderungen. <span className="text-foreground font-medium">Gemeinsam finden wir Ihren Weg.</span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-row gap-4"
            >
              <Button size="lg" asChild className="group">
                <Link to="/kontakt" className="flex items-center gap-2">
                  Kostenloses Erstgespräch
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/karriere-fuehrung">Meine Angebote</Link>
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex gap-8 mt-16 pt-8 border-t border-border"
            >
              {[
                { value: "25+", label: "Jahre Erfahrung" },
                { value: "500+", label: "Coachees begleitet" },
                { value: "100%", label: "Engagement" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                >
                  <div className="font-display text-4xl text-primary">{stat.value}</div>
                  <div className="font-body text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right Image */}
          <div className="relative flex items-center justify-center h-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="relative"
            >
              {/* Decorative Frame Elements */}
              <motion.div
                className="absolute -top-8 -left-8 w-32 h-32 border-l-4 border-t-4 border-primary/30 rounded-tl-3xl"
                initial={{ opacity: 0, x: -20, y: -20 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
              />
              <motion.div
                className="absolute -bottom-8 -right-8 w-32 h-32 border-r-4 border-b-4 border-accent/40 rounded-br-3xl"
                initial={{ opacity: 0, x: 20, y: 20 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
              />

              {/* Main Image */}
              <div className="relative w-[400px] xl:w-[480px] h-[520px] xl:h-[600px] rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={martinaHero}
                  alt="Martina Zorbach - Ihr Coach für berufliche und persönliche Entwicklung"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent" />
              </div>

              {/* Floating Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.4 }}
                className="absolute -bottom-6 -left-12 bg-card/90 backdrop-blur-lg rounded-2xl p-5 shadow-xl border border-border/50"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-display text-sm text-foreground">Systemische Coachin</p>
                    <p className="font-body text-xs text-muted-foreground">DBVC zertifiziert</p>
                  </div>
                </div>
              </motion.div>

              {/* Second Floating Element */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.6 }}
                className="absolute top-12 -right-8 bg-accent/90 text-accent-foreground rounded-2xl px-5 py-3 shadow-lg"
              >
                <p className="font-display text-sm">Frankfurt am Main</p>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Desktop Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden lg:block"
        >
          <motion.button
            onClick={scrollToAbout}
            className="flex flex-col items-center gap-3 group"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="font-body text-xs tracking-widest uppercase text-muted-foreground group-hover:text-primary transition-colors">
              Entdecken
            </span>
            <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 group-hover:border-primary/50 transition-colors flex justify-center pt-2">
              <motion.div
                className="w-1.5 h-1.5 rounded-full bg-primary"
                animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </div>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};