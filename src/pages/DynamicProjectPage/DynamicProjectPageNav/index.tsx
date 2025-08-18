import styles from './_ProjectPageNav.module.scss'
import type { ProjectSection } from "../DynamicProjectPageUniversal" 
import { Button } from '../../../ui/Button';

type ProjectPageNavProps = {
  sections: ProjectSection[];
  activeSection: string;
  onSectionClick: (sectionId: string) => void;
}

export function ProjectPageNav({ sections, activeSection, onSectionClick }: ProjectPageNavProps) {
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