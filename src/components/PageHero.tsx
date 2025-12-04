import { motion } from "framer-motion";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  accent?: string;
}

export const PageHero = ({ title, subtitle, accent }: PageHeroProps) => {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 bg-gradient-to-br from-primary/10 via-secondary/50 to-background overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-terracotta/5 blur-3xl" />
      <div className="absolute bottom-10 left-10 w-48 h-48 rounded-full bg-primary/5 blur-3xl" />

      <div className="container-narrow mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          {subtitle && (
            <span className="inline-block font-body text-sm tracking-widest uppercase text-primary mb-4">
              {subtitle}
            </span>
          )}
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground">
            {title}
            {accent && <span className="text-primary italic block mt-2">{accent}</span>}
          </h1>
        </motion.div>
      </div>
    </section>
  );
};
