import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";

const Impressum = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <PageHero 
        title="Impressum" 
        subtitle="Rechtliche Informationen"
        accent="Angaben gemäß § 5 TMG"
      />

      <section className="section-padding bg-background">
        <div className="container-narrow mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="prose prose-lg max-w-none"
          >
            {/* Anbieter */}
            <div className="mb-10">
              <h2 className="font-display text-2xl text-foreground mb-4">Angaben gemäß § 5 TMG</h2>
              <div className="font-body text-muted-foreground space-y-1">
                <p className="text-foreground font-medium">Martina Zorbach</p>
                <p>Diplom-Psychologin & Systemische Coachin</p>
                <p>Gummersbergstr. 17</p>
                <p>60435 Frankfurt am Main</p>
              </div>
            </div>

            {/* Kontakt */}
            <div className="mb-10">
              <h2 className="font-display text-2xl text-foreground mb-4">Kontakt</h2>
              <div className="font-body text-muted-foreground space-y-1">
                <p>Telefon: +49 178 4000881</p>
                <p>E-Mail: kontakt@martinazorbachcoaching.de</p>
              </div>
            </div>

            {/* Berufsbezeichnung */}
            <div className="mb-10">
              <h2 className="font-display text-2xl text-foreground mb-4">Berufsbezeichnung und berufsrechtliche Regelungen</h2>
              <div className="font-body text-muted-foreground space-y-2">
                <p><span className="text-foreground">Berufsbezeichnung:</span> Diplom-Psychologin</p>
                <p><span className="text-foreground">Zuständige Kammer:</span> Psychotherapeutenkammer Hessen</p>
                <p><span className="text-foreground">Verliehen in:</span> Deutschland</p>
              </div>
            </div>

            {/* Umsatzsteuer */}
            <div className="mb-10">
              <h2 className="font-display text-2xl text-foreground mb-4">Umsatzsteuer-ID</h2>
              <p className="font-body text-muted-foreground">
                Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz: [USt-ID wird ergänzt]
              </p>
            </div>

            {/* Streitschlichtung */}
            <div className="mb-10">
              <h2 className="font-display text-2xl text-foreground mb-4">Streitschlichtung</h2>
              <p className="font-body text-muted-foreground mb-4">
                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{" "}
                <a 
                  href="https://ec.europa.eu/consumers/odr/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  https://ec.europa.eu/consumers/odr/
                </a>
              </p>
              <p className="font-body text-muted-foreground">
                Ich bin nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer 
                Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </div>

            {/* Haftung für Inhalte */}
            <div className="mb-10">
              <h2 className="font-display text-2xl text-foreground mb-4">Haftung für Inhalte</h2>
              <p className="font-body text-muted-foreground">
                Als Diensteanbieter bin ich gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den 
                allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG bin ich als Diensteanbieter jedoch nicht 
                verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen 
                zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder 
                Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. 
                Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten 
                Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werde ich diese 
                Inhalte umgehend entfernen.
              </p>
            </div>

            {/* Haftung für Links */}
            <div className="mb-10">
              <h2 className="font-display text-2xl text-foreground mb-4">Haftung für Links</h2>
              <p className="font-body text-muted-foreground">
                Diese Website enthält Links zu externen Websites Dritter, auf deren Inhalte ich keinen Einfluss habe. 
                Deshalb kann ich für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der 
                verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die 
                verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. 
                Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente 
                inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer 
                Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werde ich derartige 
                Links umgehend entfernen.
              </p>
            </div>

            {/* Urheberrecht */}
            <div className="mb-10">
              <h2 className="font-display text-2xl text-foreground mb-4">Urheberrecht</h2>
              <p className="font-body text-muted-foreground">
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem 
                deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung 
                außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen 
                Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht 
                kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt 
                wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche 
                gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitte ich 
                um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werde ich derartige 
                Inhalte umgehend entfernen.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Impressum;
