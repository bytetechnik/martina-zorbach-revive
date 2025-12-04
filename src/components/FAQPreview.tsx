import { motion, useInView } from "framer-motion";
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
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding bg-secondary/30">
      <div className="container-narrow mx-auto">
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
