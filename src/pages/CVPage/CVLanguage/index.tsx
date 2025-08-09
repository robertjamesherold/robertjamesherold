import React from 'react';
import styles from './LanguageSection.module.scss'

export interface LanguageSectionProps {
  languages: Array<{
    name: string;
    level: string;
  }>;
}
function LanguageSection({  languages  }: LanguageSectionProps) {
  return (<section>
  <h2 className='underlined-left'>Sprachen</h2>
      <div className='card' style={{height: 'fit-content'}}>
          <div className='cardcontent'>

        {languages.map((language: any, index: number) => (
          <div key={index} className={styles.languageItem}>
            <span className={styles.language}>{language.name}</span>
            <span className={styles.languageLevel}>{language.level}</span>
          </div>
        ))}
      </div>
          </div>

    </section>
  )
}

export { LanguageSection };