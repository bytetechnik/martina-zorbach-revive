import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { SEO } from "@/components/SEO";
import { Award, Briefcase, GraduationCap, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import martinaAbout from "@/assets/martina-about.jpg";

const careerStations = [
  { period: "2021 - 2025", role: "Leiterin Personalstrategie und Personalentwicklung", company: "DFS Deutsche Flugsicherung GmbH" },
  { period: "2014 - 2021", role: "Leiterin Recruiting und Ausbildung", company: "DFS Deutsche Flugsicherung GmbH" },
  { period: "2010 - 2014", role: "Leiterin Young Talent Management", company: "DFS Deutsche Flugsicherung GmbH" },
  { period: "2005 - 2010", role: "Leiterin Personalberatung und Outplacement", company: "DFS Deutsche Flugsicherung GmbH" },
  { period: "2000 - 2005", role: "Personalleiterin der Niederlassung Langen", company: "DFS Deutsche Flugsicherung GmbH" },
];

const qualifications = [
  { icon: GraduationCap, title: "Diplom Psychologie", institution: "Johann Wolfgang-Goethe-Universität Frankfurt" },
  { icon: Award, title: "Systemisches Coaching", institution: "Johann zu Gutenberg Universität Mainz" },
  { icon: Award, title: "Coaching von Teams und Gruppen", institution: "Johann zu Gutenberg Universität Mainz" },
  { icon: Award, title: "Zertifizierung LINC Personality Profiler", institution: "LINC GmbH" },
];

const volunteerWork = [
  { title: "Beirätin", organization: "JOBLINGE Niederlassung, Offenbach" },
  { title: "Patin", organization: "Jeunesse Espérance Benin" },
  { title: "Mentorin", organization: "Berami - berufliche Integration von Frauen, Frankfurt" },
];

const UeberMich = () => {
  const missionRef = useRef(null);
  const careerRef = useRef(null);
  const qualRef = useRef(null);
  const isMissionInView = useInView(missionRef, { once: true, margin: "-100px" });
  const isCareerInView = useInView(careerRef, { once: true, margin: "-100px" });
  const isQualInView = useInView(qualRef, { once: true, margin: "-100px" });

  return (
    <main className="min-h-screen bg-background">
      <SEO 
        title="Über mich"
        description="Martina Zorbach – Diplom-Psychologin, Systemische Coachin und erfahrene Führungskraft mit über 25 Jahren Erfahrung in HR und Personalentwicklung."
      />
      <Navigation />
      <PageHero title="Über mich" subtitle="Lernen Sie mich kennen" />

      {/* Mission Section */}
      <section ref={missionRef} className="section-padding bg-background">
        <div className="container-narrow mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={isMissionInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-terracotta/20 rounded-3xl -z-10" />
              <img
                src={martinaAbout}
                alt="Martina Zorbach"
                className="w-full max-w-md mx-auto rounded-2xl shadow-medium object-cover"
              />
            </motion.div>

            <div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={isMissionInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="font-display text-3xl md:text-4xl text-foreground mb-6"
              >
                Meine <span className="text-primary italic">Mission</span>
              </motion.h2>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isMissionInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="space-y-4 font-body text-muted-foreground leading-relaxed"
              >
                <p>
                  Meine Mission ist es, Menschen auf ihrem ganz eigenen Weg zu begleiten und zu stärken.
                </p>
                <p>
                  Als Führungskraft, Psychologin und Mutter von drei erwachsenen Kindern weiß ich, wie vielfältig das Leben sein kann – ob im Beruf, in der Familie oder bei persönlichen Veränderungen.
                </p>
                <p>
                  Ich liebe es, Potenziale zu fördern, Menschen zu ermutigen und gemeinsam neue Perspektiven zu schaffen.
                </p>
                <p>
                  Offenheit, Neugier und Herzlichkeit prägen meine Arbeit, genauso wie meine langjährige Erfahrung in HR, Personalentwicklung und Changemanagement.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isMissionInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mt-8"
              >
                <Button asChild size="lg">
                  <Link to="/kontakt">Kostenloses Erstgespräch</Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Career Section */}
      <section ref={careerRef} className="section-padding bg-secondary/30">
        <div className="container-narrow mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isCareerInView ? { opacity: 1, y: 0 } : {}}
            className="text-center mb-12"
          >
            <span className="inline-block font-body text-sm tracking-widest uppercase text-primary mb-4">
              Erfahrung
            </span>
            <h2 className="font-display text-3xl md:text-4xl text-foreground">
              Mein <span className="text-primary italic">Werdegang</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Career Stations */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isCareerInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-card rounded-2xl p-8 shadow-soft"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Briefcase className="text-primary" size={24} />
                </div>
                <h3 className="font-display text-xl text-foreground">Berufliche Stationen</h3>
              </div>
              <p className="font-body text-sm text-muted-foreground mb-6">
                Von 2000 bis 2025 Führungskraft bei der DFS, Deutsche Flugsicherung GmbH
              </p>
              <div className="space-y-4">
                {careerStations.map((station, index) => (
                  <div key={index} className="border-l-2 border-primary/30 pl-4">
                    <p className="font-body text-xs text-primary font-medium">{station.period}</p>
                    <p className="font-body text-sm text-foreground">{station.role}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Qualifications & Volunteer */}
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={isCareerInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-card rounded-2xl p-8 shadow-soft"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <GraduationCap className="text-primary" size={24} />
                  </div>
                  <h3 className="font-display text-xl text-foreground">Aus- und Fortbildungen</h3>
                </div>
                <div className="space-y-4">
                  {qualifications.map((qual, index) => (
                    <div key={index}>
                      <p className="font-body text-sm font-medium text-foreground">{qual.title}</p>
                      <p className="font-body text-xs text-muted-foreground">{qual.institution}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={isCareerInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-card rounded-2xl p-8 shadow-soft"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-terracotta/10 flex items-center justify-center">
                    <Heart className="text-terracotta" size={24} />
                  </div>
                  <h3 className="font-display text-xl text-foreground">Ehrenamtliches Engagement</h3>
                </div>
                <div className="space-y-3">
                  {volunteerWork.map((work, index) => (
                    <div key={index}>
                      <p className="font-body text-sm font-medium text-foreground">{work.title}</p>
                      <p className="font-body text-xs text-muted-foreground">{work.organization}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default UeberMich;
