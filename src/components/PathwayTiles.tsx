import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Briefcase, Sun } from "lucide-react";

const pathways = [
  {
    title: "Karriere & Führung",
    subtitle: "Berufliche Entwicklung",
    description: "Führungskräfte-Coaching, Karriereberatung, Life Transition und Persönlichkeitsanalyse für Ihren beruflichen Erfolg.",
    icon: Briefcase,
    href: "/karriere-fuehrung",
    color: "primary",
  },
  {
    title: "LebenszeitPlus",
    subtitle: "Ruhestandscoaching",
    description: "Aktive Vorbereitung auf die zweite Lebenshälfte – gestalten Sie Ihren Ruhestand zur besten Zeit Ihres Lebens.",
    icon: Sun,
    href: "/lebenszeitplus-ruhestandscoaching",
    color: "accent",
  },
];

export const PathwayTiles = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-narrow mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">
            Finden Sie Ihren Weg
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Wählen Sie den Bereich, der zu Ihrer aktuellen Lebenssituation passt
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {pathways.map((pathway, index) => {
            const Icon = pathway.icon;
            return (
              <motion.div
                key={pathway.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                <Link
                  to={pathway.href}
                  className="group block h-full"
                >
                  <div className={`relative h-full rounded-3xl p-8 md:p-10 transition-all duration-500 overflow-hidden ${
                    pathway.color === "primary" 
                      ? "bg-primary/5 hover:bg-primary/10 border-2 border-primary/20 hover:border-primary/40" 
                      : "bg-accent/10 hover:bg-accent/20 border-2 border-accent/30 hover:border-accent/50"
                  }`}>
                    {/* Background Pattern */}
                    <div className="absolute top-0 right-0 w-64 h-64 opacity-5 pointer-events-none">
                      <Icon className="w-full h-full" />
                    </div>

                    {/* Content */}
                    <div className="relative z-10">
                      <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 ${
                        pathway.color === "primary" 
                          ? "bg-primary/10 group-hover:bg-primary/20" 
                          : "bg-accent/20 group-hover:bg-accent/30"
                      }`}>
                        <Icon size={32} className={
                          pathway.color === "primary" ? "text-primary" : "text-accent-foreground"
                        } />
                      </div>

                      <p className={`font-body text-sm uppercase tracking-widest mb-2 ${
                        pathway.color === "primary" ? "text-primary" : "text-accent-foreground"
                      }`}>
                        {pathway.subtitle}
                      </p>

                      <h3 className="font-display text-2xl md:text-3xl text-foreground mb-4 group-hover:text-primary transition-colors">
                        {pathway.title}
                      </h3>

                      <p className="font-body text-muted-foreground leading-relaxed mb-6">
                        {pathway.description}
                      </p>

                      <div className={`inline-flex items-center gap-2 font-body font-medium transition-all duration-300 group-hover:gap-3 ${
                        pathway.color === "primary" ? "text-primary" : "text-accent-foreground"
                      }`}>
                        Mehr erfahren
                        <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};