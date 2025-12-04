import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { Mail, MapPin, Phone, Send, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

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

      <Footer />
    </main>
  );
};

export default Kontakt;
