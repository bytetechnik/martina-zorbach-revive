import { motion, useInView, useScroll, useTransform } from "framer-motion";
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
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef(null);
  const isInView = useInView(contentRef, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Parallax transforms
  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [60, -140]);
  const y3 = useTransform(scrollYProgress, [0, 1], [40, -80]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 35]);

  return (
    <section ref={sectionRef} className="section-padding bg-primary/5 relative overflow-hidden">
      {/* Parallax Background Elements */}
      <motion.div
        className="absolute top-[10%] right-[5%] w-[400px] h-[400px] rounded-full"
        style={{
          background: 'radial-gradient(circle, hsl(var(--primary) / 0.08) 0%, transparent 70%)',
          y: y1,
        }}
      />
      <motion.div
        className="absolute bottom-[15%] left-[3%] w-[320px] h-[320px] rounded-full"
        style={{
          background: 'radial-gradient(circle, hsl(var(--accent) / 0.1) 0%, transparent 70%)',
          y: y2,
        }}
      />
      <motion.div
        className="absolute top-[50%] left-[8%] w-16 h-16 border-2 border-primary/10 rounded-2xl"
        style={{ y: y3, rotate }}
      />
      <motion.div
        className="absolute bottom-[40%] right-[10%] w-10 h-10 bg-accent/10 rounded-full"
        style={{ y: y1 }}
      />
      <motion.div
        className="absolute top-[25%] left-[25%] w-6 h-6 border border-primary/15 rounded-full"
        style={{ y: y2 }}
      />

      <div ref={contentRef} className="container-narrow mx-auto relative z-10">
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
              className="relative glass-strong rounded-2xl p-6 hover:-translate-y-1 transition-all duration-300"
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
