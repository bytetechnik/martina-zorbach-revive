import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { Briefcase, Compass, Heart, Sun, User, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import leadershipImg from "@/assets/leadership-coaching.jpg";

const services = [
  {
    id: "fuehrungskraeftecoaching",
    icon: Briefcase,
    title: "Führungskräfte Coaching",
    intro: "Als Führungskraft stehen Sie vor großen Herausforderungen: Entscheidungen treffen, das Business gestalten und Mitarbeiter fördern. Ein Coaching unterstützt dabei, diese Aufgaben zu meistern.",
    points: [
      { title: "Vorbereitung auf die erste Führungsposition", desc: "Sie werden individuell auf die Übernahme einer Führungsposition vorbereitet und erwerben Führungskompetenzen" },
      { title: "Erarbeitung von Perspektiven", desc: "Sie arbeiten am Aufbau von Vision, Mission und strategischen Zielen" },
      { title: "Entwicklung von Führungskompetenzen", desc: "Sie erweitern Ihre Führungs- und Managementkompetenzen strategisch und operativ" },
      { title: "Stärkung der Führungspersönlichkeit", desc: "Sie reflektieren die eigene Führungspraxis, identifizieren Stärken und Entwicklungsfelder" },
      { title: "Professionalisierung des Changemanagement", desc: "Sie erwerben Kompetenzen zur Unterstützung von Veränderungen und Transformationen" },
      { title: "Erfolgreicher Umgang mit Krisen", desc: "Sie entwickeln ein positives Mindset zum Umgang mit Herausforderungen" },
      { title: "Förderung der Work-Life-Balance", desc: "Sie arbeiten an einer ausgewogenen Balance zwischen beruflichen Anforderungen und Privatleben" },
    ],
    color: "primary"
  },
  {
    id: "karrierecoaching",
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
    color: "terracotta"
  },
  {
    id: "lifetransitioncoaching",
    icon: Heart,
    title: "Life Transition Coaching",
    intro: "Sie durchlaufen eine Lebensphase mit Unsicherheiten, Veränderungen und großen Herausforderungen. Ein Lebensabschnitts-Coaching ist eine individuelle Begleitung für Menschen, die mit einschneidenden Lebensereignissen konfrontiert sind.",
    points: [
      { title: "Berufliche Veränderungen", desc: "Jobwechsel, Selbstständigkeit oder Wiedereinstieg nach einer Pause erfolgreich meistern" },
      { title: "Familiäre Ereignisse", desc: "Heirat, Geburt, Trennung oder Auszug der Kinder – Veränderungen annehmen und Kommunikationsstrategien entwickeln" },
      { title: "Persönliche Einschnitte", desc: "Identitätskrisen, Verlust eines geliebten Menschen – neue Perspektiven gewinnen" },
      { title: "Gesundheitliche Umstellungen", desc: "Strategien entwickeln, um mit gesundheitlichen Veränderungen umzugehen und Lebensqualität zu verbessern" },
    ],
    color: "sage"
  },
  {
    id: "ruhestandscoaching",
    icon: Sun,
    title: "\"Ruhestands\"- Coaching",
    intro: "Das Ausscheiden aus dem regulären Erwerbsleben ist ein bedeutender Lebensübergang. Das Coaching bietet Unterstützung, Ihr Leben neu auszurichten und eine erfüllende Zukunft zu gestalten.",
    points: [
      { title: "Aktive Ruhestandsvorbereitung", desc: "Den Übergang aktiv gestalten und den passenden Zeitpunkt finden" },
      { title: "Positives Mindset", desc: "Eine positive Einstellung zum Älterwerden und ein attraktives Bild vom neuen Lebensabschnitt entwickeln" },
      { title: "Loslassen der bisherigen Berufs-Identität", desc: "Verabschiedung von der beruflichen Identität und Wertschätzung des Geleisteten" },
      { title: "Entwickeln neuer Lebensziele", desc: "Konstruktive Ideen für die neue Lebensphase erarbeiten" },
      { title: "Förderung der Gesundheit", desc: "Ernährung, Bewegung, soziale Beziehungen und psychische Gesundheit fördern" },
      { title: "Erweiterung sozialer Beziehungen", desc: "Bestehende Netzwerke pflegen und neue Freundschaften knüpfen" },
    ],
    color: "primary"
  },
  {
    id: "persoenlichkeitsanalyse",
    icon: User,
    title: "Persönlichkeitsanalyse",
    intro: "Wenn Sie mehr über Ihren Charakter, Ihre Verhaltensmuster, Ihre Motive und Kompetenzen erfahren wollen, ist eine Persönlichkeitsanalyse das richtige Tool.",
    points: [
      { title: "Selbstkenntnis und persönliche Entwicklung", desc: "Tieferes Verständnis Ihrer Persönlichkeit für gezielte Weiterentwicklung" },
      { title: "Berufliche Entwicklung", desc: "Erfahren Sie, welche Aufgaben und Arbeitsumfelder zu Ihrer Persönlichkeit passen" },
      { title: "Führungskräfteentwicklung", desc: "Potenziale erkennen und gezielt weiterentwickeln" },
      { title: "Teamentwicklung", desc: "Teams effektiver zusammenstellen und Konflikte besser managen" },
      { title: "Recruiting", desc: "Fundierter Abgleich von Persönlichkeitsprofil mit Positionsanforderungen" },
      { title: "Partnercheck", desc: "Erfahren Sie, wie gut Sie zu Ihrem Partner passen" },
    ],
    extra: {
      title: "LINC Personality Profiler",
      desc: "Ich nutze den LINC Personality Profiler (LPP), ein wissenschaftlich fundiertes Fragebogensystem zur umfassenden Persönlichkeitsdiagnostik.",
      steps: [
        "Onlinefragebogen (ca. 30 Minuten)",
        "Individuelles Feedbackgespräch (ca. 90 Minuten)",
        "Detaillierter Feedbackbericht mit Handlungsempfehlungen"
      ]
    },
    color: "terracotta"
  }
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
            <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${
              service.color === "primary" ? "bg-primary/10" : 
              service.color === "terracotta" ? "bg-terracotta/10" : "bg-sage-light/10"
            }`}>
              <Icon size={28} className={
                service.color === "primary" ? "text-primary" : 
                service.color === "terracotta" ? "text-terracotta" : "text-sage"
              } />
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
              <h4 className="font-display text-xl text-foreground mb-3">{service.extra.title}</h4>
              <p className="font-body text-muted-foreground mb-4">{service.extra.desc}</p>
              <ul className="space-y-2">
                {service.extra.steps.map((step, i) => (
                  <li key={i} className="flex items-center gap-3 font-body text-sm text-foreground">
                    <span className="w-6 h-6 rounded-full bg-primary/10 text-primary text-xs flex items-center justify-center font-medium">
                      {i + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ul>
            </motion.div>
          )}

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-8"
          >
            <Button asChild>
              <Link to="/kontakt">Beratungsgespräch vereinbaren</Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const Angebote = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <PageHero 
        title="Meine Angebote" 
        subtitle="Coaching & Beratung"
        accent="für Ihren Erfolg"
      />

      {/* Quick Navigation */}
      <section className="py-8 bg-card border-b border-border/50 sticky top-20 z-40">
        <div className="container-narrow mx-auto px-6 overflow-x-auto">
          <div className="flex gap-4 min-w-max">
            {services.map((service) => (
              <a
                key={service.id}
                href={`#${service.id}`}
                className="px-4 py-2 rounded-full bg-secondary text-sm font-body text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors whitespace-nowrap"
              >
                {service.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Service Sections */}
      {services.map((service, index) => (
        <ServiceSection key={service.id} service={service} index={index} />
      ))}

      <Footer />
    </main>
  );
};

export default Angebote;
