import { motion, useInView } from "framer-motion";
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
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding bg-background">
      <div ref={ref} className="container-narrow mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative">
              {/* Decorative Frame */}
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-terracotta/20 rounded-3xl -z-10" />
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-terracotta/10 rounded-full blur-2xl" />
              
              <img
                src={martinaPortrait}
                alt="Martina Zorbach"
                className="w-full max-w-md mx-auto rounded-2xl shadow-medium object-cover aspect-square"
              />
            </div>
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
                <div key={item.title} className="text-center">
                  <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mx-auto mb-3">
                    <item.icon size={22} className="text-primary" />
                  </div>
                  <h4 className="font-display text-sm text-foreground mb-1">{item.title}</h4>
                  <p className="font-body text-xs text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
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
