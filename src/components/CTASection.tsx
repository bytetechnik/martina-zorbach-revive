import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Phone } from "lucide-react";
import { Button } from "./ui/button";

export const CTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-primary/5 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      </div>

      <div ref={ref} className="container-narrow mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="inline-block font-body text-sm tracking-widest uppercase text-primary mb-4">
            Kostenloses Erstgespräch
          </span>

          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
            Bereit für den <span className="text-primary italic">nächsten Schritt</span>?
          </h2>

          <p className="font-body text-lg text-muted-foreground leading-relaxed mb-10 max-w-2xl mx-auto">
            Vereinbaren Sie ein persönliches Kennenlerngespräch – kostenfrei und 
            unverbindlich. So können Sie erfahren, wie ich arbeite und ob die 
            „Chemie" stimmt.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Button asChild size="lg" className="group">
                <Link to="/kontakt">
                  <Calendar size={18} />
                  Termin vereinbaren
                  <ArrowRight size={16} className="ml-1 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Button asChild variant="outline" size="lg" className="group">
                <a href="tel:+491784000881">
                  <Phone size={18} />
                  +49 178 4000881
                </a>
              </Button>
            </motion.div>
          </div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-12 flex flex-wrap justify-center gap-6 text-sm text-muted-foreground"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary" />
              <span>Diplom-Psychologin</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary" />
              <span>25+ Jahre Erfahrung</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary" />
              <span>Präsenz & Online</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
