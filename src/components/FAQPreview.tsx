import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Was ist Coaching?",
    answer: "Coaching unterstützt die positive Entwicklung eines Menschen. Kernelement sind strukturierte Gespräche zwischen einem Coach und einem Coachee, in denen ein Coach den Coachee dabei unterstützt, seine persönlichen und beruflichen Ziele zu definieren und sein volles Potenzial zu entfalten."
  },
  {
    question: "Wie wirkt Coaching?",
    answer: "Coaching wirkt, indem es dem Coachee ermöglicht, sich selbst besser zu verstehen und positive Veränderungen selbst anzustoßen. Durch den einfühlsamen Dialog gewinnt der Coachee an Selbstvertrauen und lernt, eigene Ziele klarer zu definieren."
  },
  {
    question: "Was ist Business-Life Coaching?",
    answer: "Business-Life Coaching integriert berufliche und persönliche Entwicklung und unterstützt Menschen dabei, ein ausgewogenes und erfülltes Leben zu führen, indem sie ihre beruflichen Ziele erreichen und gleichzeitig ihre persönlichen Bedürfnisse berücksichtigen."
  },
];

export const FAQPreview = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef(null);
  const isInView = useInView(contentRef, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Parallax transforms
  const y1 = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const y2 = useTransform(scrollYProgress, [0, 1], [50, -120]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 25]);

  return (
    <section ref={sectionRef} className="section-padding bg-secondary/30 relative overflow-hidden">
      {/* Parallax Background Elements */}
      <motion.div
        className="absolute top-[15%] left-[5%] w-[350px] h-[350px] rounded-full"
        style={{
          background: 'radial-gradient(circle, hsl(var(--primary) / 0.06) 0%, transparent 70%)',
          y: y1,
        }}
      />
      <motion.div
        className="absolute bottom-[10%] right-[8%] w-[280px] h-[280px] rounded-full"
        style={{
          background: 'radial-gradient(circle, hsl(var(--accent) / 0.08) 0%, transparent 70%)',
          y: y2,
        }}
      />
      <motion.div
        className="absolute top-[40%] right-[12%] w-14 h-14 border-2 border-primary/10 rounded-xl"
        style={{ y: y1, rotate }}
      />
      <motion.div
        className="absolute bottom-[30%] left-[10%] w-8 h-8 bg-accent/10 rounded-full"
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
            Häufige Fragen
          </span>
          <h2 className="font-display text-3xl md:text-4xl text-foreground">
            Was Sie über <span className="text-primary italic">Coaching</span> wissen sollten
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
              >
                <AccordionItem
                  value={`item-${index}`}
                  className="bg-card rounded-xl border border-border/50 px-6 overflow-hidden"
                >
                  <AccordionTrigger className="font-display text-lg text-foreground hover:text-primary py-6 hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="font-body text-muted-foreground leading-relaxed pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-10"
        >
          <Button asChild variant="outline">
            <Link to="/faq">Alle FAQs ansehen</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
