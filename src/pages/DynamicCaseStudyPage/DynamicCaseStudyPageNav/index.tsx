import React from 'react';
import styles from './_CaseStudyNav.module.scss'
import { Flexbox } from '../../../components/Flexbox';
import { Button } from '../../../ui/Button'; 

type CaseStudyNavProps = {
  sections: Array<{ id: string | number; [key: string]: any }>
  activeSection: any
  onSectionClick: (e: React.MouseEvent) => void
}

export function CaseStudyNav({ sections, activeSection, onSectionClick }: CaseStudyNavProps) {
  const handleClick = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      onSectionClick(sectionId)
    }
  }

  return (
    <Flexbox gap='medium' flex='column'>
      <Button variant='link' action='/fallstudien' text='Zurück' isPrimary={false} />
    
      <nav className='card'>
        <div className='cardtitle' style={{ paddingBottom: '1rem' }}>Inhaltsverzeichnis</div>
        <ul className={styles.navList}>
          {sections.map((section: { id: string | number; name?: string; [key: string]: any }) => (
            <li key={section.id}>
              <button
                className={`${styles.navItem} ${
                  activeSection === section.id ? styles.active : ''
                }`}
                onClick={(e: React.MouseEvent<HTMLButtonElement>) => handleClick(section.id)}
              >
                {section.title}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </Flexbox>
  )
}

export function Pagination({ sections, activeSection, onSectionClick }: CaseStudyNavProps) {
  const handleClickUp = (sectionId) => {
    // Erst nach oben scrollen
    window.scrollTo({ 
      top: 0, 
      left: 0, 
      behavior: 'smooth' // Für sanftes Scrollen
    });

    // Dann nach einer kurzen Verzögerung den Inhalt wechseln
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        onSectionClick(sectionId);
      }
    }, 300); // 300ms Verzögerung - anpassbar je nach gewünschter Scroll-Geschwindigkeit
  }

  return (
    <Flexbox width='100%'>  
      <hr/>
      <ul className={styles.pagination}>
        {sections.map((section: { id: string | number; name?: string; [key: string]: any }) => (
          <li key={section.id}>
            <button
              className={`${styles.navItem} ${
                activeSection === section.id ? styles.active : ''
              }`}
              onClick={(e: React.MouseEvent<HTMLButtonElement>) => handleClickUp(section.id)}
            >
              {section.id}
            </button>
          </li>
        ))}
      </ul>
    </Flexbox>
  )
}