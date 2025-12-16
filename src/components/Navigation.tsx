import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { name: "Startseite", href: "/" },
  { name: "Karriere & Führung", href: "/karriere-fuehrung" },
  { name: "LebenszeitPlus", href: "/lebenszeitplus-ruhestandscoaching" },
  { name: "Über mich", href: "/ueber-mich" },
  { name: "Referenzen", href: "/referenzen" },
  { name: "Kontakt", href: "/kontakt" },
];

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-4 left-4 right-4 z-50 rounded-2xl transition-all duration-300 ${
        scrolled
          ? "bg-gradient-to-b from-cream to-cream/90 backdrop-blur-lg border border-sage/30 shadow-[0_8px_32px_-8px_rgba(0,0,0,0.15),0_4px_8px_-4px_rgba(0,0,0,0.1),inset_0_1px_0_rgba(255,255,255,0.8)] transform-gpu"
          : "lg:bg-transparent lg:border-transparent lg:shadow-none bg-gradient-to-b from-cream to-cream/90 backdrop-blur-lg border border-sage/30 shadow-[0_8px_32px_-8px_rgba(0,0,0,0.15),0_4px_8px_-4px_rgba(0,0,0,0.1),inset_0_1px_0_rgba(255,255,255,0.8)] transform-gpu"
      }`}
    >
      <div className="container-narrow mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            to="/"
            className="font-display text-xl md:text-2xl text-sage-dark hover:text-primary transition-colors"
          >
            Martina Zorbach
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`font-body text-sm transition-colors underline-animation ${
                  location.pathname === link.href
                    ? "text-primary font-medium"
                    : "text-warm-gray hover:text-primary"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Button asChild size="sm" className="bg-sage hover:bg-sage-dark text-cream">
              <Link to="/kontakt">Termin buchen</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-sage-dark hover:text-primary transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden border-t border-sage/20 rounded-b-2xl"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`font-body text-lg transition-colors ${
                      location.pathname === link.href
                        ? "text-primary"
                        : "text-foreground hover:text-primary"
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <Button asChild className="mt-2 bg-sage hover:bg-sage-dark text-cream">
                <Link to="/kontakt" onClick={() => setIsOpen(false)}>
                  Termin buchen
                </Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};
