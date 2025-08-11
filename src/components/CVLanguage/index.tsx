import styles from './CVLanguage.module.scss'

export type CVLanguageProps = {
  data: Array<{
    name: string;
    level: string;
  }>;
}
export function CVLanguage({  data  }: CVLanguageProps) {
  return (<section>
  <h2 className='underlined-left'>Sprachen</h2>
      <div className='card' style={{height: 'fit-content'}}>
          <div className='cardcontent'>

        {data.map((language, index) => (
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

