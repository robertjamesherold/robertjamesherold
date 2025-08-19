// components/ProjectNavigation/index.tsx
import { useEffect, useRef, useState } from 'react'
import styles from './ProjectNavigation.module.scss'

interface Section {
  id: string
  title: string
}

interface ProjectNavigationProps {
  sections: Section[]
  activeSection: string
  onSectionClick: (sectionId: string) => void
}

export function ProjectNavigation({ 
  sections, 
  activeSection, 
  onSectionClick 
}: ProjectNavigationProps) {
  const [expandedInfo, setExpandedInfo] = useState(false)
  const navRef = useRef<HTMLDivElement>(null)

  // Calculate progress for each section
  const activeSectionIndex = sections.findIndex(s => s.id === activeSection)

  // Scroll nav item into view when active changes
  useEffect(() => {
    if (navRef.current) {
      const activeElement = navRef.current.querySelector(`.${styles.active}`)
      if (activeElement) {
        activeElement.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'nearest',
          inline: 'center' 
        })
      }
    }
  }, [activeSection])

  const handleSectionClick = (sectionId: string) => {
    onSectionClick(sectionId)
    
    // Smooth scroll to section
    const element = document.getElementById(`section-${sectionId}`)
    if (element) {
      const offset = 100 // Header offset
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <nav className={styles.projectNavigation} ref={navRef}>
      {/* Navigation Header */}
      <div className={styles.navHeader}>
        <div className={styles.navTitle}>
          <h3>Inhaltsverzeichnis</h3>
          <span className={styles.sectionCount}>
            {activeSectionIndex + 1} / {sections.length}
          </span>
        </div>
        
        <button 
          className={styles.infoToggle}
          onClick={() => setExpandedInfo(!expandedInfo)}
          aria-label="Toggle navigation info"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <circle cx="10" cy="10" r="9" stroke="currentColor" strokeWidth="2"/>
            <path d="M10 14V10M10 6H10.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>
      </div>

      {/* Info Panel */}
      {expandedInfo && (
        <div className={styles.infoPanel}>
          <p>Navigieren Sie durch die Projektabschnitte mit Klick oder Scrollen.</p>
          <div className={styles.shortcuts}>
            <kbd>↑</kbd> <span>Vorheriger Abschnitt</span>
            <kbd>↓</kbd> <span>Nächster Abschnitt</span>
          </div>
        </div>
      )}

      {/* Progress Bar */}
      <div className={styles.progressContainer}>
        <div 
          className={styles.progressBar}
          style={{ 
            width: `${((activeSectionIndex + 1) / sections.length) * 100}%` 
          }}
        />
      </div>

      {/* Navigation List */}
      <div className={styles.navList}>
        {sections.map((section, index) => {
          const isActive = activeSection === section.id
          const isPassed = index < activeSectionIndex
          const isNext = index === activeSectionIndex + 1

          return (
            <button
              key={section.id}
              className={`
                ${styles.navItem} 
                ${isActive ? styles.active : ''} 
                ${isPassed ? styles.passed : ''}
                ${isNext ? styles.next : ''}
              `}
              onClick={() => handleSectionClick(section.id)}
              aria-current={isActive ? 'step' : undefined}
            >
              {/* Timeline Indicator */}
              <div className={styles.timeline}>
                <div className={styles.dot}>
                  {isPassed && (
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M2 6L5 9L10 3" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                  )}
                </div>
                {index < sections.length - 1 && (
                  <div className={styles.line} />
                )}
              </div>

              {/* Content */}
              <div className={styles.content}>
                <span className={styles.number}>
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className={styles.title}>{section.title}</span>
                {isActive && (
                  <span className={styles.badge}>Aktuell</span>
                )}
              </div>

              {/* Hover Preview */}
              <div className={styles.preview}>
                <span>Zu diesem Abschnitt springen</span>
              </div>
            </button>
          )
        })}
      </div>

      {/* Quick Actions */}
      <div className={styles.quickActions}>
        <button
          className={styles.actionBtn}
          onClick={() => {
            if (activeSectionIndex > 0) {
              handleSectionClick(sections[activeSectionIndex - 1].id)
            }
          }}
          disabled={activeSectionIndex === 0}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M12 5L7 10L12 15" stroke="currentColor" strokeWidth="2"/>
          </svg>
          <span>Zurück</span>
        </button>

        <button
          className={styles.actionBtn}
          onClick={() => {
            if (activeSectionIndex < sections.length - 1) {
              handleSectionClick(sections[activeSectionIndex + 1].id)
            }
          }}
          disabled={activeSectionIndex === sections.length - 1}
        >
          <span>Weiter</span>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M8 5L13 10L8 15" stroke="currentColor" strokeWidth="2"/>
          </svg>
        </button>
      </div>
    </nav>
  )
}
