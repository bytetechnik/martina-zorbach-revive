import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Compass, Heart, Sun, User, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Briefcase,
    title: "Führungskräfte Coaching",
    description: "Stärken Sie Ihre Führungskompetenzen und meistern Sie anspruchsvolle Positionen mit Souveränität.",
    link: "/angebote#fuehrungskraeftecoaching"
  },
  {
    icon: Compass,
    title: "Karriere Coaching",
    description: "Finden Sie Ihren beruflichen Weg und entfalten Sie Ihr volles Potenzial.",
    link: "/angebote#karrierecoaching"
  },
  {
    icon: Heart,
    title: "Life Transition Coaching",
    description: "Bewältigen Sie tiefgreifende Veränderungen in Ihrem Leben konstruktiv und gestärkt.",
    link: "/angebote#lifetransitioncoaching"
  },
  {
    icon: Sun,
    title: "\"Ruhestands\"- Coaching",
    description: "Gestalten Sie Ihren Ruhestand aktiv, bewusst und erfüllend.",
    link: "/angebote#ruhestandscoaching"
  },
  {
    icon: User,
    title: "Persönlichkeits-Analyse",
    description: "Verstehen Sie sich selbst besser und entdecken Sie Ihre verborgenen Stärken.",
    link: "/angebote#persoenlichkeitsanalyse"
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
      className="group bg-card rounded-2xl p-6 card-hover border border-border/50"
    >
      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary transition-all duration-300">
        <Icon size={24} className="text-primary group-hover:text-primary-foreground transition-colors" />
      </div>
      <h3 className="font-display text-xl text-foreground mb-2">
        {service.title}
      </h3>
      <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4">
        {service.description}
      </p>
      <Link
        to={service.link}
        className="inline-flex items-center gap-2 font-body text-sm text-primary hover:gap-3 transition-all"
      >
        Mehr erfahren <ArrowRight size={16} />
      </Link>
    </motion.div>
  );
};

export const ServicesSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Parallax transforms
  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [50, -150]);
  const y3 = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 45]);
  const rotate2 = useTransform(scrollYProgress, [0, 1], [45, 90]);

  return (
    <section ref={sectionRef} id="services" className="section-padding bg-secondary/30 relative overflow-hidden">
      {/* Parallax Background Elements */}
      <motion.div
        className="absolute top-[10%] right-[5%] w-[300px] h-[300px] rounded-full"
        style={{
          background: 'radial-gradient(circle, hsl(var(--primary) / 0.08) 0%, transparent 70%)',
          y: y1,
        }}
      />
      <motion.div
        className="absolute bottom-[20%] left-[3%] w-[250px] h-[250px] rounded-full"
        style={{
          background: 'radial-gradient(circle, hsl(var(--accent) / 0.1) 0%, transparent 70%)',
          y: y2,
        }}
      />
      <motion.div
        className="absolute top-[40%] left-[10%] w-16 h-16 border-2 border-primary/10 rounded-2xl"
        style={{ y: y3, rotate: rotate1 }}
      />
      <motion.div
        className="absolute bottom-[30%] right-[8%] w-12 h-12 border border-accent/20"
        style={{ y: y1, rotate: rotate2 }}
      />
      <motion.div
        className="absolute top-[60%] right-[20%] w-8 h-8 bg-primary/5 rounded-full"
        style={{ y: y2 }}
      />

      <div className="container-narrow mx-auto relative z-10">
        {/* Section Header */}
        <div ref={headerRef} className="text-center mb-12">
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
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.slice(0, 3).map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
        <div className="grid sm:grid-cols-2 gap-6 mt-6 max-w-2xl mx-auto">
          {services.slice(3).map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index + 3} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <Button asChild size="lg">
            <Link to="/angebote">Alle Angebote entdecken</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
