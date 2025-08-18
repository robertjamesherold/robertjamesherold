import styles from './_CaseStudyNav.module.scss'
import { Flexbox } from '../../../components/Flexbox';
import { Button } from '../../../ui/Button'; 
import type { CaseStudyNavProps } from '../DynamicCaseStudyPageUniversal/index';

// Section Type konsistent mit UniversalCaseStudy



export function CaseStudyPageNav({ sections, activeSection, onSectionClick }: CaseStudyNavProps) {
  const handleClick = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      onSectionClick(sectionId);
    }
  };



  return (
    <>
      <Button variant='link' action='/projekte' text='Zurück' isPrimary={false} />
      <div className='card'>
        <div className='cardtitle' style={{ paddingBottom: '1rem' }}>Inhaltsverzeichnis</div>
        <ul className={styles.navList}>
          {sections.map((section) => (
            <li key={section.id}>
              <button
                className={`${styles.navItem} ${activeSection === section.id ? styles.active : ''}`}
                onClick={() => handleClick(section.id)}
              >
                {section.title}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export function Pagination({ sections, activeSection, onSectionClick }: CaseStudyNavProps) {
      const handleClick = (sectionId: string) => {
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
  },300);}

  return (
    <Flexbox width='100%'>  
      <hr/>
      <ul className={styles.pagination}>
        {sections.map((section) => (
          <li key={section.id}>
           <button
                className={`${styles.navItem} ${activeSection === section.id ? styles.active : ''}`}
                onClick={() => handleClick(section.id)}
              >
              {section.id}
            </button>
          </li>
        ))}
      </ul>
    </Flexbox>
  )
}