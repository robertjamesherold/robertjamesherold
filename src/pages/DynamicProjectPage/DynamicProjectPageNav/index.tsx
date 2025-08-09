import React from 'react';
import { Container } from '../../../layout/Container'
import styles from './_ProjectPageNav.module.scss'

type ProjectPageNavProps = {
  sections: Array<{ id: string | number; [key: string]: any }>
  activeSection: any
  onSectionClick: (e: React.MouseEvent) => void
}
export function ProjectPageNav({  sections, activeSection, onSectionClick  }: ProjectPageNavProps) {
  const handleClick = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      onSectionClick(sectionId)
    }
  }
  return (
    <>
  <div className='buttonsecondary'>Zurück</div>
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
    </nav></>
)
}
