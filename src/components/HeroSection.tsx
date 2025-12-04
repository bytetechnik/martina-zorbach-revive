import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Sparkles } from "lucide-react";
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
    <section ref={sectionRef} className="relative min-h-screen overflow-hidden bg-background">
      {/* Animated Background Grid with Parallax */}
      <motion.div 
        className="absolute inset-0 opacity-[0.03]"
        style={{ y: y1, scale }}
      >
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />
      </motion.div>

      {/* Floating Gradient Orbs with Parallax */}
      <motion.div
        className="absolute top-[10%] left-[5%] w-[500px] h-[500px] rounded-full"
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
        className="absolute bottom-[10%] right-[10%] w-[400px] h-[400px] rounded-full"
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
      <motion.div
        className="absolute top-[40%] right-[30%] w-[300px] h-[300px] rounded-full"
        style={{
          background: 'radial-gradient(circle, hsl(var(--secondary) / 0.4) 0%, transparent 70%)',
          y: y1,
          opacity,
        }}
        animate={{
          x: [0, 40, 0],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Floating Geometric Shapes with Parallax */}
      <motion.div
        className="absolute top-[15%] right-[15%] w-20 h-20 border-2 border-primary/20 rounded-2xl"
        style={{ y: y4, rotate: rotate1, opacity }}
      />
      <motion.div
        className="absolute bottom-[25%] left-[8%] w-16 h-16 bg-accent/10 rounded-full"
        style={{ y: y3, opacity }}
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-[60%] right-[8%] w-12 h-12 border border-accent/30"
        style={{ y: y2, rotate: rotate2, opacity }}
      />
      <motion.div
        className="absolute top-[30%] left-[15%] w-6 h-6 bg-primary/20 rounded-full"
        style={{ y: y1, opacity }}
      />
      <motion.div
        className="absolute bottom-[40%] right-[25%] w-10 h-10 border border-primary/15 rounded-full"
        style={{ y: y4, opacity }}
      />

      {/* Main Content Grid */}
      <div className="relative z-10 min-h-screen grid lg:grid-cols-2 items-center">
        {/* Left Content */}
        <div className="px-6 lg:px-16 xl:px-24 pt-32 pb-12 lg:py-20">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-display text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-foreground leading-[0.95] mb-6"
          >
            <span className="block">Martina</span>
            <span className="block">Zorbach</span>
            <motion.span 
              className="block text-primary italic mt-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Coaching
            </motion.span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mb-8"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
              <Sparkles size={14} className="text-primary" />
              <span className="font-body text-xs tracking-widest uppercase text-primary font-medium">
                Diplom-Psychologin & Systemische Coachin
              </span>
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="font-body text-lg md:text-xl text-muted-foreground leading-relaxed mb-10 max-w-lg"
          >
            Professionelle Begleitung für Ihre beruflichen und persönlichen 
            Herausforderungen. <span className="text-foreground font-medium">Gemeinsam finden wir Ihren Weg.</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button size="lg" asChild className="group">
              <Link to="/kontakt" className="flex items-center gap-2">
                Kostenloses Erstgespräch
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/angebote">Meine Angebote</Link>
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
                <div className="font-display text-3xl md:text-4xl text-primary">{stat.value}</div>
                <div className="font-body text-xs md:text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Right Image */}
        <div className="relative hidden lg:flex items-center justify-center h-full">
          {/* Image Container with Artistic Frame */}
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
              {/* Overlay Gradient */}
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

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
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
    </section>
  );
};
