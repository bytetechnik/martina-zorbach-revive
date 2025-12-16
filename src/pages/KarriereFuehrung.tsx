import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { SEO } from "@/components/SEO";
import { Briefcase, Compass, Heart, User, CheckCircle, Clock, Euro, Phone, Video, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const services = [
  {
    id: "fuehrungskraefte",
    icon: Briefcase,
    title: "Führungskräfte Coaching",
    intro: "Als Führungskraft stehen Sie vor großen Herausforderungen: Entscheidungen treffen, das Business gestalten und Mitarbeiter fördern. Ein Coaching unterstützt dabei, diese Aufgaben zu meistern.",
    points: [
      { title: "Vorbereitung auf die erste Führungsposition", desc: "Sie werden individuell auf die Übernahme einer Führungsposition vorbereitet und erwerben Führungskompetenzen" },
      { title: "Erarbeitung von Perspektiven", desc: "Sie arbeiten am Aufbau von Vision, Mission und strategischen Zielen" },
      { title: "Entwicklung von Führungskompetenzen", desc: "Sie erweitern Ihre Führungs- und Managementkompetenzen strategisch und operativ" },
      { title: "Stärkung der Führungspersönlichkeit", desc: "Sie reflektieren die eigene Führungspraxis, identifizieren Stärken und Entwicklungsfelder" },
      { title: "Professionalisierung des Changemanagement", desc: "Sie erwerben Kompetenzen zur Unterstützung von Veränderungen und Transformationen" },
      { title: "Förderung der Work-Life-Balance", desc: "Sie arbeiten an einer ausgewogenen Balance zwischen beruflichen Anforderungen und Privatleben" },
    ],
  },
  {
    id: "karriere",
    icon: Compass,
    title: "Karriere Coaching",
    intro: "Sie suchen nach neuen Perspektiven, planen den nächsten Karriereschritt oder befinden sich in einem beruflichen Umbruch – Karriere Coaching hilft Ihnen dabei, sich zu orientieren und Hindernisse zu überwinden.",
    points: [
      { title: "Selbstreflexion und Zielsetzung", desc: "Ihre berufliche Neuorientierung beginnt mit Selbstreflexion und der Festlegung von Zielen" },
      { title: "Kenntnis der eigenen Persönlichkeit", desc: "Was zeichnet Ihre Persönlichkeit aus? Was motiviert Sie? Wo können Sie sich verbessern?" },
      { title: "Finden neuer beruflicher Perspektiven", desc: "Sie erkunden Möglichkeiten und entwickeln Strategien für Ihren nächsten Karriereschritt" },
      { title: "Unterstützung in Bewerbungsverfahren", desc: "Sie erstellen einen überzeugenden Lebenslauf und sind bestens auf Vorstellungsgespräche vorbereitet" },
      { title: "Überwindung beruflicher Hindernisse", desc: "Sie lernen Unsicherheiten in neuen Rollen zu überwinden und Konflikte zu bewältigen" },
      { title: "Steigerung der Arbeitszufriedenheit", desc: "Eine Position, die zu Ihnen passt, erhöht Ihren Spaß an der Arbeit" },
    ],
  },
  {
    id: "life-transition",
    icon: Heart,
    title: "Life Transition Coaching",
    intro: "Sie durchlaufen eine Lebensphase mit Unsicherheiten, Veränderungen und großen Herausforderungen. Ein Lebensabschnitts-Coaching ist eine individuelle Begleitung für Menschen, die mit einschneidenden Lebensereignissen konfrontiert sind.",
    points: [
      { title: "Berufliche Veränderungen", desc: "Jobwechsel, Selbstständigkeit oder Wiedereinstieg nach einer Pause erfolgreich meistern" },
      { title: "Familiäre Ereignisse", desc: "Heirat, Geburt, Trennung oder Auszug der Kinder – Veränderungen annehmen und Kommunikationsstrategien entwickeln" },
      { title: "Persönliche Einschnitte", desc: "Identitätskrisen, Verlust eines geliebten Menschen – neue Perspektiven gewinnen" },
      { title: "Gesundheitliche Umstellungen", desc: "Strategien entwickeln, um mit gesundheitlichen Veränderungen umzugehen und Lebensqualität zu verbessern" },
    ],
  },
  {
    id: "persoenlichkeit",
    icon: User,
    title: "Persönlichkeitsanalyse (LINC Personality Profiler)",
    intro: "Wenn Sie mehr über Ihren Charakter, Ihre Verhaltensmuster, Ihre Motive und Kompetenzen erfahren wollen, ist eine Persönlichkeitsanalyse das richtige Tool.",
    points: [
      { title: "Selbstkenntnis und persönliche Entwicklung", desc: "Tieferes Verständnis Ihrer Persönlichkeit für gezielte Weiterentwicklung" },
      { title: "Berufliche Entwicklung", desc: "Erfahren Sie, welche Aufgaben und Arbeitsumfelder zu Ihrer Persönlichkeit passen" },
      { title: "Führungskräfteentwicklung", desc: "Potenziale erkennen und gezielt weiterentwickeln" },
      { title: "Teamentwicklung", desc: "Teams effektiver zusammenstellen und Konflikte besser managen" },
    ],
    extra: {
      title: "So funktioniert der LINC Personality Profiler",
      steps: [
        "Onlinefragebogen (ca. 30 Minuten)",
        "Individuelles Feedbackgespräch (ca. 90 Minuten)",
        "Detaillierter Feedbackbericht mit Handlungsempfehlungen",
      ],
    },
  },
];

const faqs = [
  {
    question: "Was ist Business-Life Coaching?",
    answer: `Business Coaching konzentriert sich auf berufliche Entwicklung, Karriereplanung, Führungskompetenzen, Teammanagement, Konfliktlösung, Unternehmenswachstum, berufliche Neuorientierung und Stressmanagement.

Life Coaching umfasst Themen, die das persönliche Leben betreffen: persönliche Entwicklung, Selbstvertrauen, Beziehungen, Lebensbalance, Stressbewältigung, Selbstfürsorge, Entscheidungsfindung und Work-Life-Balance.

Business-Life Coaching integriert beide Bereiche und unterstützt Menschen dabei, ein ausgewogenes und erfülltes Leben zu führen.`,
  },
  {
    question: "Wie lange dauert ein Coaching-Prozess?",
    answer: "Meine Erfahrung zeigt, dass bereits nach 4 bis 6 Sitzungen positive Ergebnisse erzielt werden. Anzahl und Häufigkeit der Sitzungen variieren je nach Ihren individuellen Erfordernissen.",
  },
  {
    question: "Was unterscheidet Coaching und Psychotherapie?",
    answer: `Coaching unterstützt bei der Erreichung persönlicher und beruflicher Ziele, Potenzialentfaltung und Leistungssteigerung. Es ist zukunftsorientiert und zielt auf konkrete Lösungen ab.

Psychotherapie behandelt psychische Störungen, emotionale Probleme und Erkrankungen. Sie blickt häufig auf die Vergangenheit, um Ursachen von Problemen zu identifizieren und zu heilen.`,
  },
];

const ServiceSection = ({ service, index }: { service: typeof services[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const Icon = service.icon;
  const isEven = index % 2 === 0;

  return (
    <section
      id={service.id}
      ref={ref}
      className={`section-padding ${isEven ? "bg-background" : "bg-secondary/30"}`}
    >
      <div className="container-narrow mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 rounded-xl flex items-center justify-center bg-primary/10">
              <Icon size={28} className="text-primary" />
            </div>
            <h2 className="font-display text-2xl md:text-3xl text-foreground">{service.title}</h2>
          </div>

          {/* Intro */}
          <p className="font-body text-lg text-muted-foreground leading-relaxed mb-8 max-w-3xl">
            {service.intro}
          </p>

          {/* Points */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {service.points.map((point, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex gap-4"
              >
                <CheckCircle size={20} className="text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-display text-base text-foreground mb-1">{point.title}</h4>
                  <p className="font-body text-sm text-muted-foreground">{point.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Extra Info (for Personality Analysis) */}
          {service.extra && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-card rounded-2xl p-8 border border-border/50"
            >
              <h4 className="font-display text-xl text-foreground mb-4">{service.extra.title}</h4>
              <ul className="space-y-3">
                {service.extra.steps.map((step, i) => (
                  <li key={i} className="flex items-center gap-3 font-body text-foreground">
                    <span className="w-8 h-8 rounded-full bg-primary/10 text-primary text-sm flex items-center justify-center font-medium">
                      {i + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

const KarriereFuehrung = () => {
  return (
    <main className="min-h-screen bg-background">
      <SEO 
        title="Karriere & Führung"
        description="Coaching für Führungskräfte und Karriereentwicklung in Frankfurt. Führungskräfte-Coaching, Karriereberatung, Life Transition und Persönlichkeitsanalyse mit Martina Zorbach."
      />
      <Navigation />
      <PageHero
        title="Karriere & Führung"
        subtitle="Coaching & Beratung"
        accent="für Ihren beruflichen Erfolg"
      />

      {/* Quick Navigation - Desktop */}
      <section className="hidden md:block py-8 bg-card border-b border-border/50 sticky top-20 z-40">
        <div className="container-narrow mx-auto px-6 overflow-x-auto">
          <div className="flex gap-4 min-w-max justify-center">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <a
                  key={service.id}
                  href={`#${service.id}`}
                  className="flex items-center gap-2 px-5 py-3 rounded-xl bg-secondary text-sm font-body text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 whitespace-nowrap"
                >
                  <Icon size={18} />
                  {service.title}
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quick Navigation - Mobile Cards */}
      <section className="md:hidden py-8 bg-card border-b border-border/50">
        <div className="container-narrow mx-auto px-4">
          <p className="font-body text-sm text-muted-foreground text-center mb-4">
            Direkt zum Thema
          </p>
          <div className="grid grid-cols-2 gap-3">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.a
                  key={service.id}
                  href={`#${service.id}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="group glass-subtle rounded-2xl p-4 flex flex-col items-center text-center gap-3 hover:shadow-lg transition-all duration-300 active:scale-[0.98]"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <Icon size={22} className="text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <span className="font-body text-xs font-medium text-foreground leading-tight">
                    {service.title.replace(" (LINC Personality Profiler)", "")}
                  </span>
                </motion.a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Service Sections */}
      {services.map((service, index) => (
        <ServiceSection key={service.id} service={service} index={index} />
      ))}

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

          <div className="grid md:grid-cols-3 gap-8 mb-12">
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

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Euro, title: "Honorar", desc: "Orientiert sich an den Empfehlungen des Deutschen Coaching Verbandes" },
              { icon: Users, title: "Für Unternehmen", desc: "Individuelle Angebote für Ihre Organisation auf Anfrage" },
              { icon: User, title: "Selbstzahler", desc: "Spezielle Konditionen auf Anfrage" },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 + 0.3 }}
                  className="bg-card rounded-2xl p-6 border border-border/50 text-center"
                >
                  <Icon size={28} className="text-primary mx-auto mb-3" />
                  <h3 className="font-display text-lg text-foreground mb-2">{item.title}</h3>
                  <p className="font-body text-sm text-muted-foreground">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>
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
                  <AccordionContent className="font-body text-muted-foreground leading-relaxed pb-6 whitespace-pre-line">
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
              Bereit für Ihren nächsten Schritt?
            </h2>
            <p className="font-body text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Kontaktieren Sie mich für ein kostenloses Erstgespräch und wir besprechen, 
              wie ich Sie auf Ihrem Weg unterstützen kann.
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

export default KarriereFuehrung;