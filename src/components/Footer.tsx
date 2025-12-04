import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container-narrow mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h3 className="font-display text-2xl mb-4">Martina Zorbach</h3>
            <p className="font-body text-sm text-background/70 leading-relaxed">
              Diplom-Psychologin & Systemische Coachin für Ihre beruflichen und persönlichen Herausforderungen.
            </p>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="font-display text-lg mb-4">Navigation</h4>
            <ul className="space-y-2">
              {[
                { name: "Startseite", href: "/" },
                { name: "Über mich", href: "/ueber-mich" },
                { name: "Angebote", href: "/angebote" },
                { name: "FAQ", href: "/faq" },
                { name: "Referenzen", href: "/referenzen" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="font-body text-sm text-background/70 hover:text-background transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="font-display text-lg mb-4">Kontakt</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Mail size={16} className="mt-1 text-background/50" />
                <a
                  href="mailto:kontakt@martinazorbachcoaching.de"
                  className="font-body text-sm text-background/70 hover:text-background transition-colors"
                >
                  kontakt@martinazorbachcoaching.de
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={16} className="mt-1 text-background/50" />
                <a
                  href="tel:+491784000881"
                  className="font-body text-sm text-background/70 hover:text-background transition-colors"
                >
                  +49 178 4000881
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="mt-1 text-background/50" />
                <span className="font-body text-sm text-background/70">
                  Gummersbergstr. 17<br />
                  60435 Frankfurt am Main
                </span>
              </li>
            </ul>
          </motion.div>

          {/* Legal */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="font-display text-lg mb-4">Rechtliches</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="font-body text-sm text-background/70 hover:text-background transition-colors"
                >
                  Impressum
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="font-body text-sm text-background/70 hover:text-background transition-colors"
                >
                  Datenschutz
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-background/10 text-center">
          <p className="font-body text-sm text-background/50">
            © {currentYear} Martina Zorbach Coaching. Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  );
};
