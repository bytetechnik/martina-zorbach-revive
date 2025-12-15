import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { SEO } from "@/components/SEO";
import { Sun, Heart, Users, Compass, CheckCircle, Clock, Euro, Phone, Video } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const benefits = [
  {
    icon: Sun,
    title: "Aktive Ruhestandsvorbereitung",
    desc: "Den Übergang aktiv gestalten und den passenden Zeitpunkt finden",
  },
  {
    icon: Heart,
    title: "Positives Mindset",
    desc: "Eine positive Einstellung zum Älterwerden und ein attraktives Bild vom neuen Lebensabschnitt entwickeln",
  },
  {
    icon: Users,
    title: "Loslassen der bisherigen Berufs-Identität",
    desc: "Verabschiedung von der beruflichen Identität und Wertschätzung des Geleisteten",
  },
  {
    icon: Compass,
    title: "Entwickeln neuer Lebensziele",
    desc: "Konstruktive Ideen für die neue Lebensphase erarbeiten",
  },
];

const packages = [
  {
    name: "Kompakt",
    sessions: "3 Sitzungen",
    duration: "je 90 Min.",
    description: "Für eine erste Orientierung und Zielfindung",
    features: [
      "Standortbestimmung",
      "Zieldefinition",
      "Erste Strategien",
    ],
  },
  {
    name: "Standard",
    sessions: "6 Sitzungen",
    duration: "je 90 Min.",
    description: "Umfassende Begleitung durch den Übergang",
    features: [
      "Tiefgehende Analyse",
      "Identitätsarbeit",
      "Neue Perspektiven entwickeln",
      "Umsetzungsbegleitung",
    ],
    highlighted: true,
  },
  {
    name: "Premium",
    sessions: "10 Sitzungen",
    duration: "je 90 Min.",
    description: "Intensive Begleitung mit allen Facetten",
    features: [
      "Alle Standard-Inhalte",
      "Persönlichkeitsanalyse (LPP)",
      "Partnerintegration möglich",
      "6 Monate Begleitung",
    ],
  },
];

const faqs = [
  {
    question: "Für wen ist LebenszeitPlus geeignet?",
    answer: "LebenszeitPlus richtet sich an Menschen ab 45+, die sich aktiv auf die zweite Lebenshälfte vorbereiten möchten – sei es der bevorstehende Ruhestand, eine berufliche Neuorientierung oder die Suche nach mehr Sinn und Erfüllung.",
  },
  {
    question: "Wann ist der beste Zeitpunkt, mit dem Coaching zu beginnen?",
    answer: "Idealerweise 1-3 Jahre vor dem geplanten Ruhestand, um ausreichend Zeit für die Vorbereitung zu haben. Aber auch kurz vor oder nach dem Übergang kann Coaching wertvolle Unterstützung bieten.",
  },
  {
    question: "Kann mein Partner teilnehmen?",
    answer: "Ja, im Premium-Paket ist die Integration Ihres Partners möglich. Der Ruhestand betrifft oft beide Partner, daher kann eine gemeinsame Betrachtung sehr wertvoll sein.",
  },
  {
    question: "Finden die Sitzungen vor Ort oder online statt?",
    answer: "Beides ist möglich. Die Sitzungen können in meinen Räumlichkeiten in Frankfurt am Main, per Videokonferenz oder als Kombination aus beidem stattfinden – ganz nach Ihren Wünschen.",
  },
];

const LebenszeitPlus = () => {
  const benefitsRef = useRef(null);
  const benefitsInView = useInView(benefitsRef, { once: true, margin: "-100px" });

  return (
    <main className="min-h-screen bg-background">
      <SEO 
        title="LebenszeitPlus – Ruhestandscoaching"
        description="Ruhestandscoaching in Frankfurt für Menschen 45+. Bereiten Sie sich aktiv auf die zweite Lebenshälfte vor und gestalten Sie Ihren Ruhestand zur besten Zeit Ihres Lebens."
      />
      <Navigation />
      <PageHero
        title="LebenszeitPlus"
        subtitle="Ruhestandscoaching"
        accent="für Ihre beste Zeit"
      />

      {/* Intro Section */}
      <section className="section-padding bg-background">
        <div className="container-narrow mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h2 className="font-display text-3xl md:text-4xl text-foreground mb-6">
              Der Ruhestand – Ihr neuer Anfang
            </h2>
            <p className="font-body text-lg text-muted-foreground leading-relaxed">
              Das Ausscheiden aus dem regulären Erwerbsleben ist ein bedeutender Lebensübergang. 
              LebenszeitPlus bietet Ihnen professionelle Unterstützung, Ihr Leben neu auszurichten 
              und eine erfüllende Zukunft aktiv zu gestalten.
            </p>
          </motion.div>

          {/* Benefits Grid */}
          <div ref={benefitsRef} className="grid md:grid-cols-2 gap-8 mb-16">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={benefitsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-card rounded-2xl p-8 border border-border/50 hover:shadow-lg transition-shadow"
                >
                  <div className="flex gap-5">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon size={28} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-display text-xl text-foreground mb-2">{benefit.title}</h3>
                      <p className="font-body text-muted-foreground">{benefit.desc}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Additional Benefits */}
      <section className="section-padding bg-secondary/30">
        <div className="container-narrow mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">
              Was Sie außerdem erwartet
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {[
              { title: "Förderung der Gesundheit", desc: "Ernährung, Bewegung, soziale Beziehungen und psychische Gesundheit fördern" },
              { title: "Erweiterung sozialer Beziehungen", desc: "Bestehende Netzwerke pflegen und neue Freundschaften knüpfen" },
              { title: "Finanzielle Klarheit", desc: "Überblick über Ihre finanzielle Situation für einen sorgenfreien Ruhestand" },
              { title: "Sinnfindung", desc: "Entdecken Sie neue Quellen der Erfüllung und Bedeutung" },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex gap-4"
              >
                <CheckCircle size={24} className="text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-display text-lg text-foreground mb-1">{item.title}</h4>
                  <p className="font-body text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
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
              Coaching-Pakete
            </h2>
            <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
              Wählen Sie das Paket, das zu Ihren Bedürfnissen passt
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`rounded-2xl p-8 ${
                  pkg.highlighted 
                    ? "bg-primary text-primary-foreground ring-4 ring-primary/20" 
                    : "bg-card border border-border/50"
                }`}
              >
                <h3 className={`font-display text-2xl mb-2 ${pkg.highlighted ? "text-primary-foreground" : "text-foreground"}`}>
                  {pkg.name}
                </h3>
                <p className={`font-display text-lg mb-1 ${pkg.highlighted ? "text-primary-foreground/90" : "text-primary"}`}>
                  {pkg.sessions}
                </p>
                <p className={`font-body text-sm mb-4 ${pkg.highlighted ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                  {pkg.duration}
                </p>
                <p className={`font-body text-sm mb-6 ${pkg.highlighted ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                  {pkg.description}
                </p>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <CheckCircle size={18} className={pkg.highlighted ? "text-primary-foreground" : "text-primary"} />
                      <span className={`font-body text-sm ${pkg.highlighted ? "text-primary-foreground/90" : "text-foreground"}`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <Button 
                  asChild 
                  variant={pkg.highlighted ? "secondary" : "default"}
                  className="w-full"
                >
                  <Link to="/kontakt">Anfragen</Link>
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Kosten & Ablauf Info */}
      <section className="section-padding bg-secondary/30">
        <div className="container-narrow mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">
              Ablauf & Rahmenbedingungen
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Phone, title: "Kostenloses Erstgespräch", desc: "Wir besprechen Ihre Situation und klären Ihre Erwartungen" },
              { icon: Clock, title: "90 Minuten pro Sitzung", desc: "Zeit für tiefgehende Gespräche und Übungen" },
              { icon: Video, title: "Flexibel: Vor Ort oder Online", desc: "In Frankfurt oder per Videokonferenz" },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Icon size={28} className="text-primary" />
                  </div>
                  <h3 className="font-display text-lg text-foreground mb-2">{item.title}</h3>
                  <p className="font-body text-sm text-muted-foreground">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-12 bg-card rounded-2xl p-8 border border-border/50 text-center"
          >
            <Euro size={32} className="text-primary mx-auto mb-4" />
            <h3 className="font-display text-xl text-foreground mb-2">Honorar</h3>
            <p className="font-body text-muted-foreground max-w-xl mx-auto">
              Das Honorar orientiert sich an den Empfehlungen des Deutschen Coaching Verbandes. 
              Für Selbstzahler biete ich spezielle Konditionen an – sprechen Sie mich gerne an.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-background">
        <div className="container-narrow mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">
              Häufige Fragen
            </h2>
          </motion.div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <AccordionItem
                  value={`item-${index}`}
                  className="bg-card rounded-xl border border-border/50 px-6 overflow-hidden"
                >
                  <AccordionTrigger className="font-display text-lg text-foreground hover:text-primary py-6 hover:no-underline text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="font-body text-muted-foreground leading-relaxed pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-narrow mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-3xl md:text-4xl mb-6">
              Bereit für Ihre LebenszeitPlus?
            </h2>
            <p className="font-body text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Lassen Sie uns gemeinsam herausfinden, wie Sie Ihren Ruhestand 
              zur besten Zeit Ihres Lebens machen können.
            </p>
            <Button asChild variant="secondary" size="lg">
              <Link to="/kontakt">Kostenloses Erstgespräch vereinbaren</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default LebenszeitPlus;