import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const faqs = [
  {
    question: "Was ist Coaching?",
    answer: "Coaching unterstützt die positive Entwicklung eines Menschen. Kernelement sind strukturierte Gespräche zwischen einem Coach und einem Coachee (Klienten), in denen ein Coach den Coachee dabei unterstützt, seine persönlichen und beruflichen Ziele zu definieren, Hindernisse zu überwinden und sein volles Potenzial zu entfalten. Coaching ist ein einfühlsamer Prozess. Es bietet einen geschützten Raum, um Herausforderungen anzugehen, Selbstreflexion zu fördern und neue Perspektiven zu entwickeln."
  },
  {
    question: "Wie wirkt Coaching?",
    answer: "Coaching wirkt, indem es dem Coachee ermöglicht, sich selbst besser zu verstehen und positive Veränderungen selbst anzustoßen. Durch den einfühlsamen Dialog und die gezielte Unterstützung gewinnt der Coachee an Selbstvertrauen und Selbstbewusstsein. Er lernt, eigene Ziele klarer zu definieren und konkrete Schritte zur Umsetzung zu entwickeln und zu üben. Coaching schafft einen Raum für Wachstum, Entwicklung und persönliche Entfaltung, der zu mehr Lebensfreude und Erfüllung führt."
  },
  {
    question: "Was ist Business-Life Coaching?",
    answer: `Business Coaching konzentriert sich auf berufliche Entwicklung, Karriereplanung, Führungskompetenzen, Teammanagement, Konfliktlösung, Unternehmenswachstum, berufliche Neuorientierung und Stressmanagement.

Life Coaching umfasst Themen, die das persönliche Leben betreffen: persönliche Entwicklung, Selbstvertrauen, Beziehungen, Lebensbalance, Stressbewältigung, Selbstfürsorge, Entscheidungsfindung und Work-Life-Balance.

Business-Life Coaching integriert beide Bereiche und unterstützt Menschen dabei, ein ausgewogenes und erfülltes Leben zu führen, indem sie ihre beruflichen Ziele erreichen und gleichzeitig ihre persönlichen Bedürfnisse und Werte berücksichtigen.`
  },
  {
    question: "Was unterscheidet Coaching und Psychotherapie?",
    answer: `Die Unterschiede liegen in Zielsetzung, Fokus und Vorgehen:

Coaching unterstützt bei der Erreichung persönlicher und beruflicher Ziele, Potenzialentfaltung und Leistungssteigerung. Es ist zukunftsorientiert und zielt auf konkrete Lösungen ab. Dabei werden ressourcenorientierte Ansätze genutzt, um Stärken und Selbstverantwortung zu fördern.

Psychotherapie behandelt psychische Störungen, emotionale Probleme und Erkrankungen. Sie blickt häufig auf die Vergangenheit, um Ursachen von Problemen zu identifizieren und zu heilen. Therapeutische Techniken werden eingesetzt, um Symptome zu lindern und emotionale Blockaden zu lösen.

Bei einigen Themen wie Stressbewältigung und Burnout gibt es Überschneidungen. Grundsätzlich ist es wichtig, die jeweils passende Vorgehensweise zu wählen.`
  }
];

const FAQ = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <PageHero 
        title="FAQ" 
        subtitle="Häufige Fragen"
        accent="zum Thema Coaching"
      />

      <section className="section-padding bg-background">
        <div className="container-narrow mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <AccordionItem
                    value={`item-${index}`}
                    className="bg-card rounded-xl border border-border/50 px-6 overflow-hidden"
                  >
                    <AccordionTrigger className="font-display text-lg text-foreground hover:text-primary py-6 hover:no-underline">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="font-body text-muted-foreground leading-relaxed pb-6 whitespace-pre-line">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-center mt-12"
            >
              <p className="font-body text-muted-foreground mb-6">
                Haben Sie weitere Fragen? Ich helfe Ihnen gerne weiter.
              </p>
              <Button asChild size="lg">
                <Link to="/kontakt">Kontakt aufnehmen</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default FAQ;
