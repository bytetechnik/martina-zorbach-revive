import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Phone, Mail, Clock, MapPin, Euro, Users, Video } from "lucide-react";

const KostenAblauf = () => {
  const kostenItems = [
    {
      title: "Kostenfreies Erstgespräch",
      description: "Besprechung Ihres Anliegens und Klärung Ihrer Erwartungen",
      icon: Phone,
    },
    {
      title: "Honorar",
      description: "Orientiert sich an den Empfehlungen des Deutschen Coaching Verbandes",
      icon: Euro,
    },
    {
      title: "Selbstzahler-Tarif",
      description: "Auf Anfrage",
      icon: Users,
    },
  ];

  const ablaufSteps = [
    {
      step: "01",
      title: "Kontaktaufnahme und Erstgespräch",
      description: "In einem kostenfreien Erstgespräch besprechen wir Ihre Situation, Ihr Anliegen und klären Ihre Erwartungen. Gemeinsam definieren wir Ziele und wählen den passenden Coaching-Ansatz.",
      highlight: "kostenfrei",
    },
    {
      step: "02",
      title: "Coachingsitzungen",
      description: "Die Coachingsitzungen finden in Abständen statt, die wir gemeinsam festlegen. In der Regel dauern die einzelnen Coachingsitzungen 90 Minuten. Diese Zeit ermöglicht tiefgehende Gespräche, Lösungsansätze und Übungen.",
      highlight: "90 Minuten",
    },
    {
      step: "03",
      title: "Coachingdauer",
      description: "Meine Erfahrung zeigt, dass bereits nach 4 bis 6 Sitzungen positive Ergebnisse erzielt werden. Anzahl und Häufigkeit der Sitzungen variieren je nach Ihren individuellen Erfordernissen. Einige Klienten kommen nach einem abgeschlossenen ersten Zyklus für einzelne Coachingsitzungen wieder.",
      highlight: "4 bis 6 Sitzungen",
    },
    {
      step: "04",
      title: "Location",
      description: "Die Coachingsitzungen finden in meinen Räumlichkeiten in Frankfurt am Main, per Videokonferenz oder aus einem Mix aus beidem statt. Viele meiner Coachees schätzen den persönlichen Kontakt, um eine vertrauensvolle Beziehung aufzubauen.",
      highlight: "Frankfurt am Main",
    },
  ];

  const formate = [
    {
      icon: Users,
      title: "Individuelles Einzel-Coaching",
      description: "Persönliche 1:1 Begleitung für Ihre individuellen Ziele",
    },
    {
      icon: Users,
      title: "Team- und Gruppen-Coaching",
      description: "Coaching für Teams und Gruppen in Unternehmen",
    },
    {
      icon: Video,
      title: "Online & Präsenz",
      description: "Flexible Formate - vor Ort oder per Videokonferenz",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <PageHero 
        title="Kosten & Ablauf"
        subtitle="Transparente Informationen zu meinem Coaching-Angebot"
      />

      {/* Kosten Section */}
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">
              Coaching Kosten
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto" />
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {kostenItems.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <item.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-display text-xl text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Coaching Formate */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-secondary/30 rounded-3xl p-8 md:p-12"
          >
            <h3 className="font-display text-2xl text-foreground mb-8 text-center">
              Coaching-Formate
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {formate.map((format, index) => (
                <motion.div
                  key={format.title}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex flex-col items-center text-center"
                >
                  <format.icon className="w-10 h-10 text-primary mb-4" />
                  <h4 className="font-medium text-foreground mb-2">{format.title}</h4>
                  <p className="text-sm text-muted-foreground">{format.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Für Unternehmen */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-12 bg-primary/5 border border-primary/20 rounded-2xl p-8 text-center"
          >
            <h3 className="font-display text-2xl text-foreground mb-4">
              Für Unternehmen
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Gerne erstelle ich ein Angebot, das auf die Anforderungen Ihrer Organisation 
              oder spezifischen Coaching-Bedarf zugeschnitten ist. Kontaktieren Sie mich 
              für weitere Informationen und gemeinsame Lösungen.
            </p>
            <Button asChild>
              <Link to="/kontakt">Angebot anfragen</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Ablauf Section */}
      <section className="section-padding bg-secondary/20">
        <div className="container-narrow">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">
              Coaching Ablauf
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto" />
          </motion.div>

          <div className="space-y-8">
            {ablaufSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                      <span className="font-display text-2xl text-primary-foreground">
                        {step.step}
                      </span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-xl md:text-2xl text-foreground mb-3">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                    <div className="mt-4">
                      <span className="inline-flex items-center px-4 py-2 bg-accent/50 text-accent-foreground rounded-full text-sm font-medium">
                        <Clock className="w-4 h-4 mr-2" />
                        {step.highlight}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-narrow text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl md:text-4xl mb-6">
              Bereit für Ihr kostenloses Erstgespräch?
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto text-lg">
              Kontaktieren Sie mich noch heute und wir besprechen gemeinsam, 
              wie ich Sie auf Ihrem Weg unterstützen kann.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="secondary" size="lg">
                <Link to="/kontakt">Kontakt aufnehmen</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                <a href="tel:+491784000881">
                  <Phone className="w-4 h-4 mr-2" />
                  +49 178 4000881
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default KostenAblauf;
