import { motion } from "framer-motion";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container-narrow mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <h3 className="font-display text-xl mb-2">Martina Zorbach Coaching</h3>
            <p className="font-body text-sm text-background/60">
              Diplom-Psychologin & Systemische Coachin
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-center"
          >
            <p className="font-body text-sm text-background/60">
              Gummersbergstr. 17, 60435 Frankfurt am Main
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-center md:text-right"
          >
            <p className="font-body text-sm text-background/60">
              © {currentYear} Martina Zorbach Coaching
            </p>
            <a
              href="#"
              className="font-body text-sm text-background/60 hover:text-background transition-colors"
            >
              Impressum & Disclaimer
            </a>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};
