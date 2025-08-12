import React, { useState, useEffect } from 'react'
import { GitHubIcon, LinkedInIcon, CloseIcon } from '../../assets/icons'
import { Link } from 'react-router-dom'
import { Section } from '../Section'
import styles from './_Footer.module.scss'

export function Footer(): React.ReactElement {
  const [openToggle, setOpenToggle] = useState<boolean>(false)
  const [cardOpen, setCardOpen] = useState<boolean>(false) 

  const handleToggleClick = (): void => {
    setOpenToggle(prev => !prev)
    setCardOpen(true)
  }

  const closeOverlay = (): void => {
    setOpenToggle(false)
    setCardOpen(false)
  }

  // Body scroll lock when overlay is open
  useEffect(() => {
    if (openToggle) {
      document.body.style.overflow = 'hidden'
      document.body.style.pointerEvents = 'none'
      document.documentElement.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
      document.body.style.pointerEvents = ''
      document.documentElement.style.overflow = ''
    }

    return () => {
      document.body.style.overflow = ''
      document.body.style.pointerEvents = ''
      document.documentElement.style.overflow = ''
    }
  }, [openToggle])

  // Close overlay on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent): void => {
      if (e.key === 'Escape' && openToggle) {
        closeOverlay()
      }
    }

    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [openToggle])

  const currentYear = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <Section>
        {/* Footer Content Grid */}
        <div className={styles.grid}>
          {/* About Section */}
          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>Über mich</h3>
            <ul className={styles.linkList}>
              <li>
                <Link to="/story" className={styles.link}>
                  Meine Story
                </Link>
              </li>
              <li>
                <Link to="/skills" className={styles.link}>
                  Skills & Technologien
                </Link>
              </li>
              <li>
                <Link to="/lebenslauf" className={styles.link}>
                  Lebenslauf
                </Link>
              </li>
            </ul>
          </div>

          {/* Overlay Modal */}
          <div 
            className={`${styles.fullscreenOverlay} ${openToggle ? styles.open : ''}`}
            onClick={closeOverlay}
          >
            <div
              className={`${styles.card} ${cardOpen ? styles.open : styles.closed}`}
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                className={styles.closeButton} 
                onClick={closeOverlay} 
                aria-label="Schließen"
              >
                <CloseIcon />
              </button>
              <div className='cardtitle'>Verfügbarkeit</div>
              <p className='carddescription paddingTopSmall'>
                Ich bin derzeit verfügbar für neue Projekte.
              </p>
              <div className={styles.availability}>
                <div className={styles.dot}></div>
                <div className={styles.availabilityText}>Aktuell verfügbar</div>
              </div>
            </div>
          </div>

          {/* Portfolio Section */}
          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>Portfolio</h3>
            <ul className={styles.linkList}>
              <li>
                <Link to='/arbeiten' className={styles.link}>
                  Arbeiten
                </Link>
              </li>
      
              <li>
                <a 
                  href="https://github.com/robertjamesherold" 
                  className={styles.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>Kontakt</h3>
            <ul className={styles.linkList}>
              <li>
                <Link to="/kontakt" className={styles.link}>
                  Kontakt aufnehmen
                </Link>
              </li>
              <li>
                <a href="mailto:robertjamesherold@icloud.com" className={styles.link}>
                  E-Mail schreiben
                </a>
              </li>
              <li>
                <button 
                  className={styles.link}
                  onClick={handleToggleClick} 
                  aria-label="Verfügbarkeit öffnen"
                  role='button'
                  aria-expanded={openToggle}
                >
                  Verfügbarkeit
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media & Bottom Section */}
        <div className={styles.bottom}>
          <div className={styles.bottomContent}>
            {/* Social Media Links */}
            <div className={styles.socialSection}>
              <div className={styles.socialLinks}>
                <a 
                  href="https://github.com/robertjamesherold" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="GitHub Profil"
                >
                  <GitHubIcon height='2.75em' width='2.75em' />
                </a>
                <a 
                  href="https://linkedin.com/in/robertjamesherold" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profil"
                >
                  <LinkedInIcon height='2.75em' width='2.75em' />
                </a>
              </div>
            </div>

            {/* Legal Links */}
            <div className={styles.legalSection}>
              <div className={styles.legalLinks}>
                <Link to="/datenschutz" className={styles.legalLink}>
                  Datenschutz
                </Link>
                <Link to="/impressum" className={styles.legalLink}>
                  Impressum
                </Link>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className={styles.copyright}>
            <p>© {currentYear} Robert James Herold. Entwickelt mit React.</p>
          </div>
        </div>
      </Section>
    </footer>
  )
}