import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Award, BookOpen, Users } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import martinaPortrait from "@/assets/martina-portrait.jpg";

const highlights = [
  {
    icon: Award,
    title: "Diplom-Psychologin",
    description: "Fundierte akademische Ausbildung"
  },
  {
    icon: BookOpen,
    title: "Systemische Coachin",
    description: "Zertifizierte Weiterbildung"
  },
  {
    icon: Users,
    title: "25+ Jahre Erfahrung",
    description: "Führungskraft & HR-Expertin"
  }
];

export const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef(null);
  const isInView = useInView(contentRef, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Parallax transforms
  const imageY = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const decorY1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const decorY2 = useTransform(scrollYProgress, [0, 1], [50, -150]);
  const decorY3 = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 30]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95]);

  return (
    <section ref={sectionRef} id="about" className="section-padding bg-background relative overflow-hidden">
      {/* Parallax Background Elements */}
      <motion.div
        className="absolute top-[5%] right-[10%] w-[400px] h-[400px] rounded-full"
        style={{
          background: 'radial-gradient(circle, hsl(var(--secondary) / 0.5) 0%, transparent 70%)',
          y: decorY1,
        }}
      />
      <motion.div
        className="absolute bottom-[10%] left-[5%] w-[300px] h-[300px] rounded-full"
        style={{
          background: 'radial-gradient(circle, hsl(var(--primary) / 0.06) 0%, transparent 70%)',
          y: decorY2,
        }}
      />
      <motion.div
        className="absolute top-[30%] right-[5%] w-20 h-20 border-2 border-accent/15 rounded-3xl"
        style={{ y: decorY3, rotate: rotate1 }}
      />
      <motion.div
        className="absolute bottom-[40%] left-[15%] w-6 h-6 bg-primary/10 rounded-full"
        style={{ y: decorY1 }}
      />
      <motion.div
        className="absolute top-[60%] right-[25%] w-10 h-10 border border-primary/10 rounded-full"
        style={{ y: decorY2 }}
      />

      <div ref={contentRef} className="container-narrow mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Column with Parallax */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <motion.div className="relative" style={{ y: imageY, scale }}>
              {/* Decorative Frame with Parallax */}
              <motion.div 
                className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl -z-10"
                style={{ y: decorY3 }}
              />
              <motion.div 
                className="absolute -bottom-6 -right-6 w-48 h-48 bg-accent/10 rounded-full blur-2xl"
                style={{ y: decorY2 }}
              />
              
              <img
                src={martinaPortrait}
                alt="Martina Zorbach"
                className="w-full max-w-md mx-auto rounded-2xl shadow-medium object-cover aspect-square"
              />

              {/* Floating Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="absolute -bottom-4 -right-4 glass-strong rounded-xl p-4"
              >
                <p className="font-display text-2xl text-primary">25+</p>
                <p className="font-body text-xs text-muted-foreground">Jahre Erfahrung</p>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Content Column */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-block font-body text-sm tracking-widest uppercase text-primary mb-4"
            >
              Über mich
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-6"
            >
              Welcher Coach <span className="text-primary italic">passt zu mir?</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="font-body text-lg text-muted-foreground leading-relaxed mb-8"
            >
              Als Diplom-Psychologin und zertifizierte systemische Coachin begleite ich 
              Menschen durch berufliche und persönliche Veränderungsprozesse. Mit einem 
              ganzheitlichen Ansatz unterstütze ich Sie dabei, Ihre Ziele zu erreichen 
              und Ihr volles Potenzial zu entfalten.
            </motion.p>

            {/* Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="grid grid-cols-3 gap-4 mb-10"
            >
              {highlights.map((item, index) => (
                <motion.div 
                  key={item.title} 
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                >
                  <div className="w-12 h-12 rounded-xl glass-subtle flex items-center justify-center mx-auto mb-3">
                    <item.icon size={22} className="text-primary" />
                  </div>
                  <h4 className="font-display text-sm text-foreground mb-1">{item.title}</h4>
                  <p className="font-body text-xs text-muted-foreground">{item.description}</p>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button asChild size="lg">
                <Link to="/ueber-mich">Mehr erfahren</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/kontakt">Kostenloses Erstgespräch</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
