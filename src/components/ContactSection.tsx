import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
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
  }
];

export const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Nachricht gesendet!",
      description: "Ich werde mich zeitnah bei Ihnen melden.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="section-padding bg-secondary/30">
      <div ref={ref} className="container-narrow mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Column - Info */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="inline-block font-body text-sm tracking-widest uppercase text-primary mb-4"
            >
              Kontakt
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-6"
            >
              Lassen Sie uns <span className="text-primary italic">sprechen</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-body text-lg text-muted-foreground leading-relaxed mb-10"
            >
              Vereinbaren Sie ein persönliches Kennenlerngespräch – kostenfrei und 
              unverbindlich. So können Sie erfahren, wie ich arbeite und ob die 
              „Chemie" stimmt.
            </motion.p>

            {/* Contact Info */}
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target={item.label === "Adresse" ? "_blank" : undefined}
                  rel={item.label === "Adresse" ? "noopener noreferrer" : undefined}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
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
                </motion.a>
              ))}
            </div>
          </div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-card rounded-2xl p-8 shadow-soft border border-border/50"
            >
              <h3 className="font-display text-2xl text-foreground mb-6">
                Ihre Anfrage
              </h3>

              <div className="space-y-5">
                <div>
                  <label htmlFor="name" className="block font-body text-sm text-muted-foreground mb-2">
                    Name *
                  </label>
                  <Input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Ihr Name"
                    className="h-12"
                  />
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
                    Nachricht *
                  </label>
                  <Textarea
                    id="message"
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Wie kann ich Ihnen helfen?"
                    rows={5}
                    className="resize-none"
                  />
                </div>

                <Button type="submit" size="lg" className="w-full">
                  <Send size={18} />
                  Nachricht senden
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
