import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { SEO } from "@/components/SEO";
import { Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const testimonials = [
  {
    quote: "Für mich ist Frau Zorbach nicht nur Coach, sondern Role Model - und dadurch umso glaubwürdiger. Als erfahrene Managerin mit psychologischem Background eine perfekte Kombination um ganzheitlich zu coachen. Frau Zorbach schafft eine angenehme Atmosphäre in der es gelingt unterschiedliche Themen kurzweilig im Tandem zu bearbeiten.",
    author: "Werksleiterin",
    location: "Stuttgart"
  },
  {
    quote: "Martina hat mich empathisch und mit unvergleichlicher Klarheit bei entscheidenden Schritten meiner beruflichen Laufbahn geleitet. Durch ihre langjährige Erfahrung hat sie mich nicht nur als Coach unterstützt, sondern auch fachlich wertvoll beraten können und mir den Rücken gestärkt.",
    author: "Thea W.",
    location: ""
  },
  {
    quote: "Martina Zorbach hat mich als Coach in einer Phase der Umorientierung und temporären gesundheitlichen Krise kompetent, einfühlsam und umfangreich begleitet und beraten. Ihre persönlichen Erfahrungen in Krisensituationen und beruflichen Fragestellungen erzeugten in mir ein großes Vertrauen und ich fühlte mich sehr konstruktiv begleitet.",
    author: "Fe Stegemann",
    location: "Wiesbaden"
  },
  {
    quote: "Durch das Coaching von Martina Zorbach in Frankfurt habe ich gelernt, mich und meine Kunst mit neuer Leichtigkeit und Selbstvertrauen zu zeigen. Ihre warmherzige, kreative Art haben mir geholfen, meine eigenen Ausdruck noch klarer zu finden - weit über meine ursprünglichen Themen hinaus.",
    author: "Kerstin Siech, Kunstmalerin",
    location: "Karlsruhe"
  }
];

const TestimonialCard = ({ testimonial, index }: { testimonial: typeof testimonials[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="relative bg-card rounded-2xl p-8 shadow-soft border border-border/50 card-hover"
    >
      {/* Quote Icon */}
      <div className="absolute -top-4 left-8">
        <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
          <Quote size={18} className="text-primary-foreground" />
        </div>
      </div>

      {/* Quote Text */}
      <blockquote className="font-body text-foreground leading-relaxed mb-6 pt-4 italic">
        "{testimonial.quote}"
      </blockquote>

      {/* Author */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
          <span className="font-display text-sm text-primary">
            {testimonial.author.charAt(0)}
          </span>
        </div>
        <div>
          <p className="font-display text-sm text-foreground">{testimonial.author}</p>
          {testimonial.location && (
            <p className="font-body text-xs text-muted-foreground">{testimonial.location}</p>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const Referenzen = () => {
  return (
    <main className="min-h-screen bg-background">
      <SEO 
        title="Referenzen"
        description="Kundenstimmen und Erfahrungsberichte von Klienten des Coaching-Angebots von Martina Zorbach in Frankfurt am Main."
      />
      <Navigation />
      <PageHero 
        title="Referenzen" 
        subtitle="Kundenstimmen"
        accent="aus meiner Praxis"
      />

      <section className="section-padding bg-secondary/30">
        <div className="container-narrow mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-2xl md:text-3xl text-foreground mb-4">
              Feedback meiner <span className="text-primary italic">Klienten</span>
            </h2>
            <p className="font-body text-muted-foreground max-w-2xl mx-auto">
              Erfahren Sie, was meine Klienten über die Zusammenarbeit berichten.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} index={index} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center mt-16"
          >
            <p className="font-body text-muted-foreground mb-6">
              Möchten Sie auch Ihre Ziele erreichen?
            </p>
            <Button asChild size="lg">
              <Link to="/kontakt">Kostenloses Erstgespräch</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Referenzen;
