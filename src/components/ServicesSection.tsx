import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Compass, Heart, Sun, User } from "lucide-react";

const services = [
  {
    icon: Briefcase,
    title: "Führungskräfte Coaching",
    description: "Stärken Sie Ihre Führungskompetenzen und meistern Sie anspruchsvolle Positionen mit Souveränität.",
    points: [
      "Optimale Vorbereitung als neue Führungskraft",
      "Konstruktive Teamzusammenarbeit fördern",
      "Herausforderungen souverän meistern"
    ]
  },
  {
    icon: Compass,
    title: "Karriere Coaching",
    description: "Finden Sie Ihren beruflichen Weg und entfalten Sie Ihr volles Potenzial.",
    points: [
      "Passende Aufgaben und Jobprofile identifizieren",
      "Eigene Stärken erkennen und nutzen",
      "Die richtige Position finden"
    ]
  },
  {
    icon: Heart,
    title: "Life Transition Coaching",
    description: "Bewältigen Sie tiefgreifende Veränderungen in Ihrem Leben konstruktiv und gestärkt.",
    points: [
      "Umgang mit gravierenden Veränderungen",
      "Persönliche und familiäre Einschnitte meistern",
      "Gesundheitliche Herausforderungen bewältigen"
    ]
  },
  {
    icon: Sun,
    title: "\"Ruhestands\"- Coaching",
    description: "Gestalten Sie Ihren Ruhestand aktiv, bewusst und erfüllend.",
    points: [
      "Den richtigen Zeitpunkt zum Ausstieg finden",
      "Positiver Abschluss des Berufslebens",
      "Neue Aufgaben und Netzwerke aufbauen"
    ]
  },
  {
    icon: User,
    title: "Persönlichkeits-Analyse",
    description: "Verstehen Sie sich selbst besser und entdecken Sie Ihre verborgenen Stärken.",
    points: [
      "Verhalten, Gedanken und Wahrnehmung verstehen",
      "Eigene Motive und Stärken erkennen",
      "Schwächen konstruktiv ausgleichen"
    ]
  }
];

const ServiceCard = ({ service, index }: { service: typeof services[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const Icon = service.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group bg-card rounded-2xl p-8 card-hover border border-border/50"
    >
      <div className="flex items-start gap-5">
        <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
          <Icon size={26} className="text-primary group-hover:text-primary-foreground transition-colors" />
        </div>
        <div className="flex-1">
          <h3 className="font-display text-xl md:text-2xl text-foreground mb-3">
            {service.title}
          </h3>
          <p className="font-body text-muted-foreground leading-relaxed mb-5">
            {service.description}
          </p>
          <ul className="space-y-2">
            {service.points.map((point, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-terracotta mt-2" />
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export const ServicesSection = () => {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-100px" });

  return (
    <section id="services" className="section-padding bg-secondary/30">
      <div className="container-narrow mx-auto">
        {/* Section Header */}
        <div ref={headerRef} className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-block font-body text-sm tracking-widest uppercase text-primary mb-4"
          >
            Meine Angebote
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-3xl md:text-5xl text-foreground mb-6"
          >
            Coaching für Ihre <span className="text-primary italic">Herausforderungen</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-body text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Es gibt 1000 Coaches und unendlich viele Coaching-Angebote. 
            Nicht jeder kann alles und nicht jeder passt zu jedem.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {services.slice(0, 4).map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
        
        {/* Fifth Card - Full Width */}
        <div className="mt-6 lg:mt-8 max-w-2xl mx-auto">
          <ServiceCard service={services[4]} index={4} />
        </div>
      </div>
    </section>
  );
};
