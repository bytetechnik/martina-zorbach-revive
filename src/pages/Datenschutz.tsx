import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { SEO } from "@/components/SEO";

const Datenschutz = () => {
  return (
    <main className="min-h-screen bg-background">
      <SEO 
        title="Datenschutz"
        description="Datenschutzerklärung von Martina Zorbach Coaching – Informationen zur Verarbeitung Ihrer personenbezogenen Daten."
      />
      <Navigation />
      <PageHero 
        title="Datenschutz" 
        subtitle="Datenschutzerklärung"
        accent="Ihre Daten sind sicher"
      />

      <section className="section-padding bg-background">
        <div className="container-narrow mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-10"
          >
            {/* Einleitung */}
            <div>
              <h2 className="font-display text-2xl text-foreground mb-4">1. Datenschutz auf einen Blick</h2>
              <h3 className="font-display text-lg text-foreground mb-2">Allgemeine Hinweise</h3>
              <p className="font-body text-muted-foreground leading-relaxed">
                Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen 
                Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen 
                Sie persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz 
                entnehmen Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.
              </p>
            </div>

            {/* Datenerfassung */}
            <div>
              <h2 className="font-display text-2xl text-foreground mb-4">2. Datenerfassung auf dieser Website</h2>
              
              <h3 className="font-display text-lg text-foreground mb-2 mt-6">Wer ist verantwortlich für die Datenerfassung?</h3>
              <p className="font-body text-muted-foreground leading-relaxed mb-4">
                Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten 
                können Sie dem Impressum dieser Website entnehmen.
              </p>

              <h3 className="font-display text-lg text-foreground mb-2 mt-6">Wie erfassen wir Ihre Daten?</h3>
              <p className="font-body text-muted-foreground leading-relaxed mb-4">
                Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich 
                z.B. um Daten handeln, die Sie in ein Kontaktformular eingeben. Andere Daten werden automatisch 
                oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor 
                allem technische Daten (z.B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs).
              </p>

              <h3 className="font-display text-lg text-foreground mb-2 mt-6">Wofür nutzen wir Ihre Daten?</h3>
              <p className="font-body text-muted-foreground leading-relaxed mb-4">
                Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. 
                Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.
              </p>

              <h3 className="font-display text-lg text-foreground mb-2 mt-6">Welche Rechte haben Sie bezüglich Ihrer Daten?</h3>
              <p className="font-body text-muted-foreground leading-relaxed">
                Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer 
                gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung 
                oder Löschung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt 
                haben, können Sie diese Einwilligung jederzeit für die Zukunft widerrufen. Außerdem haben Sie das 
                Recht, unter bestimmten Umständen die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten 
                zu verlangen. Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
              </p>
            </div>

            {/* Hosting */}
            <div>
              <h2 className="font-display text-2xl text-foreground mb-4">3. Hosting</h2>
              <p className="font-body text-muted-foreground leading-relaxed">
                Diese Website wird extern gehostet. Die personenbezogenen Daten, die auf dieser Website erfasst 
                werden, werden auf den Servern des Hosters gespeichert. Hierbei kann es sich v.a. um IP-Adressen, 
                Kontaktanfragen, Meta- und Kommunikationsdaten, Vertragsdaten, Kontaktdaten, Namen, 
                Websitezugriffe und sonstige Daten, die über eine Website generiert werden, handeln. Das externe 
                Hosting erfolgt zum Zwecke der Vertragserfüllung gegenüber unseren potenziellen und bestehenden 
                Kunden und im Interesse einer sicheren, schnellen und effizienten Bereitstellung unseres 
                Online-Angebots durch einen professionellen Anbieter.
              </p>
            </div>

            {/* Allgemeine Hinweise */}
            <div>
              <h2 className="font-display text-2xl text-foreground mb-4">4. Allgemeine Hinweise und Pflichtinformationen</h2>
              
              <h3 className="font-display text-lg text-foreground mb-2 mt-6">Datenschutz</h3>
              <p className="font-body text-muted-foreground leading-relaxed mb-4">
                Der Betreiber dieser Seiten nimmt den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln 
                Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften 
                sowie dieser Datenschutzerklärung.
              </p>

              <h3 className="font-display text-lg text-foreground mb-2 mt-6">Hinweis zur verantwortlichen Stelle</h3>
              <div className="font-body text-muted-foreground space-y-1 mb-4">
                <p className="text-foreground font-medium">Martina Zorbach</p>
                <p>Gummersbergstr. 17</p>
                <p>60435 Frankfurt am Main</p>
                <p>Telefon: +49 178 4000881</p>
                <p>E-Mail: kontakt@martinazorbachcoaching.de</p>
              </div>
              <p className="font-body text-muted-foreground leading-relaxed">
                Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit 
                anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten entscheidet.
              </p>

              <h3 className="font-display text-lg text-foreground mb-2 mt-6">Speicherdauer</h3>
              <p className="font-body text-muted-foreground leading-relaxed mb-4">
                Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt wurde, 
                verbleiben Ihre personenbezogenen Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt. 
                Wenn Sie ein berechtigtes Löschersuchen geltend machen oder eine Einwilligung zur Datenverarbeitung 
                widerrufen, werden Ihre Daten gelöscht, sofern wir keine anderen rechtlich zulässigen Gründe für 
                die Speicherung Ihrer personenbezogenen Daten haben.
              </p>

              <h3 className="font-display text-lg text-foreground mb-2 mt-6">Widerruf Ihrer Einwilligung zur Datenverarbeitung</h3>
              <p className="font-body text-muted-foreground leading-relaxed">
                Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie können 
                eine bereits erteilte Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit der bis zum Widerruf 
                erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.
              </p>
            </div>

            {/* Kontaktformular */}
            <div>
              <h2 className="font-display text-2xl text-foreground mb-4">5. Kontaktformular</h2>
              <p className="font-body text-muted-foreground leading-relaxed mb-4">
                Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem 
                Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der 
                Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht 
                ohne Ihre Einwilligung weiter.
              </p>
              <p className="font-body text-muted-foreground leading-relaxed">
                Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre 
                Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher 
                Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf unserem 
                berechtigten Interesse an der effektiven Bearbeitung der an uns gerichteten Anfragen 
                (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO).
              </p>
            </div>

            {/* SSL/TLS */}
            <div>
              <h2 className="font-display text-2xl text-foreground mb-4">6. SSL- bzw. TLS-Verschlüsselung</h2>
              <p className="font-body text-muted-foreground leading-relaxed">
                Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte, 
                wie zum Beispiel Anfragen, die Sie an uns als Seitenbetreiber senden, eine SSL- bzw. 
                TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des 
                Browsers von „http://" auf „https://" wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.
              </p>
            </div>

            {/* Aktualität */}
            <div className="pt-6 border-t border-border">
              <p className="font-body text-sm text-muted-foreground">
                Stand: Dezember 2024
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Datenschutz;
