import React from 'react'
import { Container } from '../../layout/Container'
import styles from './PrivacyPage.module.scss'

const head = 'Datenschutz\u00ADerklärung'

export function PrivacyPage() {
  return (
    <main>
      <Container span={{ default: 12 }}>
        <article className={styles.content}>
          <h1>{head}</h1>
          <p className={styles.lastUpdate}>Stand: August 2025</p>

          <section className={styles.section}>
            <h2>1. Verantwortlicher</h2>
            <p>
              Verantwortlich für die Datenverarbeitung auf dieser Website ist:
            </p>
            <address className={styles.address}>
              Robert James Herold<br />
              Im Kammerfest 23<br />
              63628 Bad Soden Salmünster<br />
              E-Mail: me@robertjamesherold.com
            </address>
          </section>

          <section className={styles.section}>
            <h2>2. Allgemeine Hinweise</h2>
            <p>
              Diese Website ist ein persönliches, nicht-kommerzielles Portfolio. 
              Der Schutz Ihrer persönlichen Daten ist mir wichtig. Ich verarbeite 
              Ihre Daten daher ausschließlich auf Grundlage der gesetzlichen 
              Bestimmungen (DSGVO, TKG 2003).
            </p>
          </section>

          <section className={styles.section}>
            <h2>3. Datenerfassung auf dieser Website</h2>
            
            <h3>3.1 Server-Log-Dateien</h3>
            <p>
              Der Provider dieser Seiten erhebt und speichert automatisch Informationen 
              in sogenannten Server-Log-Dateien, die Ihr Browser automatisch übermittelt:
            </p>
            <ul>
              <li>Browsertyp und Browserversion</li>
              <li>Verwendetes Betriebssystem</li>
              <li>Referrer URL</li>
              <li>Hostname des zugreifenden Rechners</li>
              <li>Uhrzeit der Serveranfrage</li>
              <li>IP-Adresse</li>
            </ul>
            <p>
              Diese Daten sind nicht bestimmten Personen zuordenbar. Eine Zusammenführung 
              dieser Daten mit anderen Datenquellen wird nicht vorgenommen.
            </p>

            <h3>3.2 Cookies</h3>
            <p>
              Diese Website verwendet keine Tracking-Cookies. Es werden ausschließlich 
              technisch notwendige Cookies verwendet, die für den Betrieb der Website 
              erforderlich sind (z.B. für die Navigation oder Darstellung).
            </p>

            <h3>3.3 Kontaktaufnahme</h3>
            <p>
              Wenn Sie mich per E-Mail kontaktieren, werden Ihre Angaben inklusive der 
              von Ihnen angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für 
              den Fall von Anschlussfragen bei mir gespeichert. Diese Daten gebe ich 
              nicht ohne Ihre Einwilligung weiter.
            </p>
          </section>

          <section className={styles.section}>
            <h2>4. Keine Analyse-Tools und Werbung</h2>
            <p>
              Diese Website verwendet keine Analyse-Tools wie Google Analytics oder 
              ähnliche Dienste. Es werden keine Werbenetzwerke eingebunden und keine 
              personenbezogenen Daten zu Marketingzwecken erhoben.
            </p>
          </section>

          <section className={styles.section}>
            <h2>5. Eingebettete Inhalte</h2>
            <p>
              Sollten auf einzelnen Seiten externe Inhalte (z.B. Videos, Schriften) 
              eingebunden sein, gelten die Datenschutzerklärungen der jeweiligen 
              Anbieter. Ich bemühe mich, nur Anbieter zu verwenden, die datenschutzkonform 
              arbeiten.
            </p>
          </section>

          <section className={styles.section}>
            <h2>6. Ihre Rechte</h2>
            <p>
              Ihnen stehen grundsätzlich die Rechte auf Auskunft, Berichtigung, Löschung, 
              Einschränkung, Datenübertragbarkeit, Widerruf und Widerspruch zu. Wenn Sie 
              glauben, dass die Verarbeitung Ihrer Daten gegen das Datenschutzrecht 
              verstößt oder Ihre datenschutzrechtlichen Ansprüche sonst in einer Weise 
              verletzt worden sind, können Sie sich bei der Aufsichtsbehörde beschweren.
            </p>
          </section>

          <section className={styles.section}>
            <h2>7. SSL-Verschlüsselung</h2>
            <p>
              Diese Seite nutzt aus Gründen der Sicherheit und zum Schutz der Übertragung 
              vertraulicher Inhalte eine SSL-Verschlüsselung. Eine verschlüsselte Verbindung 
              erkennen Sie daran, dass die Adresszeile des Browsers von "http://" auf 
              "https://" wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.
            </p>
          </section>

          <section className={styles.section}>
            <h2>8. Änderungen</h2>
            <p>
              Ich behalte mir vor, diese Datenschutzerklärung anzupassen, damit sie stets 
              den aktuellen rechtlichen Anforderungen entspricht. Für Ihren erneuten Besuch 
              gilt dann die neue Datenschutzerklärung.
            </p>
          </section>

          <section className={styles.section}>
            <h2>9. Fragen</h2>
            <p>
              Wenn Sie Fragen zum Datenschutz haben, schreiben Sie mir bitte eine E-Mail 
              an: [deine-email@domain.de]
            </p>
          </section>
        </article>
      </Container>
    </main>
  )
}

export default PrivacyPage