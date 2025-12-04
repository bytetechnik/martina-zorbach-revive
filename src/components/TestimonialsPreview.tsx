import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Quote } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

const testimonials = [
  {
    quote: "Für mich ist Frau Zorbach nicht nur Coach, sondern Role Model - und dadurch umso glaubwürdiger. Als erfahrene Managerin mit psychologischem Background eine perfekte Kombination um ganzheitlich zu coachen.",
    author: "Werksleiterin",
    location: "Stuttgart"
  },
  {
    quote: "Martina hat mich empathisch und mit unvergleichlicher Klarheit bei entscheidenden Schritten meiner beruflichen Laufbahn geleitet. Durch ihre langjährige Erfahrung hat sie mich nicht nur als Coach unterstützt, sondern auch fachlich wertvoll beraten.",
    author: "Thea W.",
    location: ""
  },
  {
    quote: "Durch das Coaching von Martina Zorbach habe ich gelernt, mich und meine Kunst mit neuer Leichtigkeit und Selbstvertrauen zu zeigen. Ihre warmherzige, kreative Art haben mir geholfen, meinen eigenen Ausdruck noch klarer zu finden.",
    author: "Kerstin Siech",
    location: "Kunstmalerin, Karlsruhe"
  }
];

export const TestimonialsPreview = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding bg-primary/5">
      <div className="container-narrow mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block font-body text-sm tracking-widest uppercase text-primary mb-4">
            Kundenstimmen
          </span>
          <h2 className="font-display text-3xl md:text-4xl text-foreground">
            Was meine <span className="text-primary italic">Klienten</span> sagen
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative bg-card rounded-2xl p-6 shadow-soft border border-border/50"
            >
              <Quote size={24} className="text-primary/20 mb-4" />
              <blockquote className="font-body text-sm text-muted-foreground leading-relaxed mb-4 italic">
                "{testimonial.quote}"
              </blockquote>
              <div>
                <p className="font-display text-sm text-foreground">{testimonial.author}</p>
                {testimonial.location && (
                  <p className="font-body text-xs text-muted-foreground">{testimonial.location}</p>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-10"
        >
          <Button asChild variant="outline">
            <Link to="/referenzen">Alle Referenzen ansehen</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
