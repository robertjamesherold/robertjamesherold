import { Section, Container } from '../../layout/GridLayout'
import styles from './ImprintPage.module.scss'

export function ImprintPage() {
  return (
    <main style={{justifyContent: 'center', alignItems:'center'}}>
       <Section isPaddingTop={false} id='privacy'>
            <Container span={{ default: 12 }}>
        <article className={styles.content}>
          <h1>Impressum</h1>
          
          <section className={styles.section}>
            <h2>Angaben gemäß § 5 TMG</h2>
            <div className={styles.infoBlock}>
              <p className={styles.name}>Robert James Herold</p>
              <address className={styles.address}>
                Im Kammerfest 23<br />
                63628 Bad Soden-Salmünster<br />
                Deutschland
              </address>
            </div>
          </section>

          <section className={styles.section}>
            <h2>Kontakt</h2>
            <div className={styles.contactInfo}>
              <div className={styles.contactItem}>
                <span className={styles.label}>E-Mail:</span>
                <a href="mailto:me@robertjamesherold.com" className={styles.link}>
                  me@robertjamesherold.com
                </a>
              </div>
                       </div>
          </section>

          <section className={styles.section}>
            <h2>Hinweise zur Website</h2>
            
            <div className={styles.subsection}>
              <h3>Art der Website</h3>
              <p>
                Dies ist eine private, nicht-kommerzielle Portfolio-Website zur 
                Präsentation meiner persönlichen Projekte und Arbeiten. Es handelt 
                sich nicht um ein geschäftsmäßiges Angebot.
              </p>
            </div>

            <div className={styles.subsection}>
              <h3>Urheberrecht</h3>
              <p>
                Die durch mich erstellten Inhalte und Werke auf diesen Seiten 
                unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, 
                Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb 
                der Grenzen des Urheberrechtes bedürfen meiner schriftlichen 
                Zustimmung.
              </p>
              <p>
                Downloads und Kopien dieser Seite sind nur für den privaten, 
                nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf 
                dieser Seite nicht von mir erstellt wurden, werden die Urheberrechte 
                Dritter beachtet und entsprechend gekennzeichnet.
              </p>
            </div>

            <div className={styles.subsection}>
              <h3>Bildnachweise</h3>
              <p>
                Die verwendeten Bilder und Grafiken stammen aus folgenden Quellen:
              </p>
              <ul>
                <li>Eigene Arbeiten und Projekte</li>
              </ul>
            </div>
          </section>

          <section className={styles.section}>
            <h2>Haftungsausschluss</h2>
            
            <div className={styles.subsection}>
              <h3>Haftung für Inhalte</h3>
              <p>
                Als Diensteanbieter bin ich gemäß § 7 Abs.1 TMG für eigene Inhalte 
                auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach 
                §§ 8 bis 10 TMG bin ich als Diensteanbieter jedoch nicht verpflichtet, 
                übermittelte oder gespeicherte fremde Informationen zu überwachen oder 
                nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
              </p>
              <p>
                Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen 
                nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche 
                Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten 
                Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden 
                Rechtsverletzungen werde ich diese Inhalte umgehend entfernen.
              </p>
            </div>

            <div className={styles.subsection}>
              <h3>Haftung für Links</h3>
              <p>
                Mein Angebot kann Links zu externen Websites Dritter enthalten, auf 
                deren Inhalte ich keinen Einfluss habe. Deshalb kann ich für diese 
                fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der 
                verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber 
                der Seiten verantwortlich.
              </p>
              <p>
                Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche 
                Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der 
                Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der 
                verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer 
                Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen 
                werde ich derartige Links umgehend entfernen.
              </p>
            </div>
          </section>

          <section className={styles.section}>
            <h2>Datenschutz</h2>
            <p>
              Die Nutzung meiner Website ist in der Regel ohne Angabe personenbezogener 
              Daten möglich. Weitere Informationen zum Datenschutz finden Sie in meiner{' '}
              <a href="/privacy" className={styles.link}>Datenschutzerklärung</a>.
            </p>
          </section>

          <section className={styles.section}>
            <h2>Streitschlichtung</h2>
            <p>
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung 
              (OS) bereit:{' '}
              <a 
                href="https://ec.europa.eu/consumers/odr/" 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.link}
              >
                https://ec.europa.eu/consumers/odr/
              </a>
            </p>
            <p>
              Ich bin nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor 
              einer Verbraucherschlichtungsstelle teilzunehmen, da es sich um eine 
              private, nicht-kommerzielle Website handelt.
            </p>
          </section>

          <div className={styles.footer}>
            <p className={styles.lastUpdate}>Stand: August 2025</p>
          </div>
        </article>
      </Container>
      </Section>
    </main>
  )
}

export default ImprintPage