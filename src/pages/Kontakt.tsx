import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { SEO } from "@/components/SEO";
import { Mail, MapPin, Phone, Send, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const contactInfo = [
  {
    icon: Mail,
    label: "E-Mail",
    value: "kontakt@martinazorbachcoaching.de",
    href: "mailto:kontakt@martinazorbachcoaching.de"
  },
  {
    icon: Phone,
    label: "Telefon",
    value: "+49 178 4000881",
    href: "tel:+491784000881"
  },
  {
    icon: MapPin,
    label: "Adresse",
    value: "Gummersbergstr. 17, 60435 Frankfurt am Main",
    href: "https://maps.google.com/?q=Gummersbergstr.+17,+60435+Frankfurt+am+Main"
  },
  {
    icon: Clock,
    label: "Erstgespräch",
    value: "Kostenfrei und unverbindlich",
    href: null
  }
];

const faqs = [
  {
    question: "Was ist Coaching?",
    answer: "Coaching unterstützt die positive Entwicklung eines Menschen. Kernelement sind strukturierte Gespräche zwischen einem Coach und einem Coachee (Klienten), in denen ein Coach den Coachee dabei unterstützt, seine persönlichen und beruflichen Ziele zu definieren, Hindernisse zu überwinden und sein volles Potenzial zu entfalten."
  },
  {
    question: "Wie wirkt Coaching?",
    answer: "Coaching wirkt, indem es dem Coachee ermöglicht, sich selbst besser zu verstehen und positive Veränderungen selbst anzustoßen. Durch den einfühlsamen Dialog und die gezielte Unterstützung gewinnt der Coachee an Selbstvertrauen und Selbstbewusstsein."
  },
  {
    question: "Wie lange dauert ein Coaching-Prozess?",
    answer: "Meine Erfahrung zeigt, dass bereits nach 4 bis 6 Sitzungen positive Ergebnisse erzielt werden. Anzahl und Häufigkeit der Sitzungen variieren je nach Ihren individuellen Erfordernissen. In der Regel dauern die einzelnen Coachingsitzungen 90 Minuten."
  },
  {
    question: "Was kostet ein Coaching?",
    answer: "Das Honorar orientiert sich an den Empfehlungen des Deutschen Coaching Verbandes. Für Selbstzahler biete ich spezielle Konditionen an – sprechen Sie mich gerne im Erstgespräch darauf an."
  }
];

const Kontakt = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Nachricht gesendet!",
      description: "Vielen Dank für Ihre Anfrage. Ich werde mich zeitnah bei Ihnen melden.",
    });
    setFormData({ firstName: "", lastName: "", email: "", message: "" });
  };

  return (
    <main className="min-h-screen bg-background">
      <SEO 
        title="Kontakt"
        description="Kontaktieren Sie Martina Zorbach für ein kostenloses Erstgespräch. Coaching in Frankfurt am Main oder online – ich freue mich auf Ihre Nachricht."
      />
      <Navigation />
      <PageHero 
        title="Kontakt" 
        subtitle="Lassen Sie uns sprechen"
        accent="Ich freue mich auf Sie"
      />

      <section ref={ref} className="section-padding bg-background">
        <div className="container-narrow mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Left Column - Info & Image */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="mb-10"
              >
                <h2 className="font-display text-2xl md:text-3xl text-foreground mb-4">
                  So erreichen Sie mich
                </h2>
                <p className="font-body text-muted-foreground leading-relaxed">
                  Vereinbaren Sie ein persönliches Kennenlerngespräch – kostenfrei und 
                  unverbindlich. So können Sie erfahren, wie ich arbeite und ob die 
                  „Chemie" stimmt.
                </p>
              </motion.div>

              {/* Contact Info */}
              <div className="space-y-5 mb-10">
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  >
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.label === "Adresse" ? "_blank" : undefined}
                        rel={item.label === "Adresse" ? "noopener noreferrer" : undefined}
                        className="flex items-start gap-4 group"
                      >
                        <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-card border border-border flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-300">
                          <item.icon size={20} className="text-primary group-hover:text-primary-foreground transition-colors" />
                        </div>
                        <div>
                          <p className="font-body text-sm text-muted-foreground mb-1">{item.label}</p>
                          <p className="font-body text-foreground group-hover:text-primary transition-colors">
                            {item.value}
                          </p>
                        </div>
                      </a>
                    ) : (
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-card border border-border flex items-center justify-center">
                          <item.icon size={20} className="text-primary" />
                        </div>
                        <div>
                          <p className="font-body text-sm text-muted-foreground mb-1">{item.label}</p>
                          <p className="font-body text-foreground">{item.value}</p>
                        </div>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>

            </div>

            {/* Right Column - Form */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <form
                onSubmit={handleSubmit}
                className="bg-card rounded-2xl p-8 shadow-soft border border-border/50"
              >
                <h3 className="font-display text-2xl text-foreground mb-6">
                  Ihre Anfrage
                </h3>

                <div className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block font-body text-sm text-muted-foreground mb-2">
                        Vorname *
                      </label>
                      <Input
                        id="firstName"
                        type="text"
                        required
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        placeholder="Ihr Vorname"
                        className="h-12"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block font-body text-sm text-muted-foreground mb-2">
                        Name *
                      </label>
                      <Input
                        id="lastName"
                        type="text"
                        required
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        placeholder="Ihr Name"
                        className="h-12"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block font-body text-sm text-muted-foreground mb-2">
                      E-Mail *
                    </label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="ihre@email.de"
                      className="h-12"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block font-body text-sm text-muted-foreground mb-2">
                      Nachricht
                    </label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Wie kann ich Ihnen helfen? Beschreiben Sie kurz Ihr Anliegen..."
                      rows={6}
                      className="resize-none"
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    <Send size={18} />
                    Nachricht senden
                  </Button>

                  <p className="font-body text-xs text-muted-foreground text-center">
                    Ich melde mich in der Regel innerhalb von 24-48 Stunden bei Ihnen.
                  </p>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="pb-20 bg-background">
        <div className="container-narrow mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-display text-2xl text-foreground mb-6 text-center">
              So finden Sie mich
            </h3>
            <div className="rounded-2xl overflow-hidden shadow-soft border border-border/50">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2556.8!2d8.6847!3d50.1447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bd0ea4f0e1e5f5%3A0x0!2sGummersbergstra%C3%9Fe%2017%2C%2060435%20Frankfurt%20am%20Main!5e0!3m2!1sde!2sde!4v1699000000000!5m2!1sde!2sde"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Standort Martina Zorbach Coaching"
                className="w-full"
              />
            </div>
            <p className="font-body text-sm text-muted-foreground text-center mt-4">
              Gummersbergstr. 17, 60435 Frankfurt am Main
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-secondary/30">
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

      <Footer />
    </main>
  );
};

export default Kontakt;
