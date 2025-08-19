// components/FloatingNav/index.tsx
import { useEffect, useState } from 'react'
import styles from './FloatingNav.module.scss'

interface NavSection {
  id: string
  title: string
}

interface FloatingNavProps {
  sections: NavSection[]
  activeSection: string
  onSectionClick: (sectionId: string) => void
  isVisible: boolean
}

export function FloatingNav({ sections, activeSection, onSectionClick, isVisible }: FloatingNavProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (!target.closest(`.${styles.floatingNav}`)) {
        setIsExpanded(false)
      }
    }

    if (isExpanded) {
      document.addEventListener('click', handleClickOutside)
      return () => document.removeEventListener('click', handleClickOutside)
    }
  }, [isExpanded])

  return (
    <nav className={`${styles.floatingNav} ${isVisible ? styles.visible : ''} ${isExpanded ? styles.expanded : ''}`}>
      {/* Toggle Button */}
      <button 
        className={styles.navToggle}
        onClick={() => setIsExpanded(!isExpanded)}
        aria-label="Toggle navigation"
      >
        <span className={styles.hamburger}>
          <span></span>
          <span></span>
          <span></span>
        </span>
        <span className={styles.currentSection}>
          {sections.find(s => s.id === activeSection)?.title || 'Navigation'}
        </span>
      </button>

      {/* Navigation Items */}
      <div className={styles.navItems}>
        {sections.map((section, index) => (
          <button
            key={section.id}
            className={`${styles.navItem} ${activeSection === section.id ? styles.active : ''}`}
            onClick={() => {
              onSectionClick(section.id)
              setIsExpanded(false)
            }}
            style={{ animationDelay: `${index * 0.05}s` }}
          >
            <span className={styles.navNumber}>
              {String(index + 1).padStart(2, '0')}
            </span>
            <span className={styles.navTitle}>{section.title}</span>
            <span className={styles.navProgress}>
              <span className={styles.progressBar} />
            </span>
          </button>
        ))}
      </div>
    </nav>
  )
}

// components/ProjectNavigation/index.tsx
export function ProjectNavigation({ sections, activeSection, onSectionClick }: FloatingNavProps) {
  return (
    <div className={styles.projectNav}>
      <div className={styles.navHeader}>
        <h3>Inhaltsverzeichnis</h3>
        <span className={styles.sectionCount}>{sections.length} Abschnitte</span>
      </div>
      
      <div className={styles.navList}>
        {sections.map((section, index) => {
          const isActive = activeSection === section.id
          const isPassed = sections.findIndex(s => s.id === activeSection) > index
          
          return (
            <button
              key={section.id}
              className={`${styles.navListItem} ${isActive ? styles.active : ''} ${isPassed ? styles.passed : ''}`}
              onClick={() => onSectionClick(section.id)}
            >
              <div className={styles.navIndicator}>
                <span className={styles.navDot} />
                {index < sections.length - 1 && <span className={styles.navLine} />}
              </div>
              
              <div className={styles.navContent}>
                <span className={styles.navLabel}>
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className={styles.navText}>{section.title}</span>
              </div>
            </button>
          )
        })}
      </div>
    </div>
  )
}
