import styles from './CVLanguage.module.scss'
import { Grid, Container } from '../../layout/GridLayout';
export type CVLanguageProps = {
  data: Array<{
    name: string;
    level: string;
  }>;
}
export function CVLanguage({  data  }: CVLanguageProps) {
  return (   <Grid span={{default: 1}} row={{default:1}}>
     <Container>
  <h2 className='underlined-left'>Sprachen</h2>
      <div className='card' style={{height: '100%'}}>
          <div className='cardcontent'>

        {data.map((language, index) => (
          <div key={index} className={styles.languageItem}>
            <span className={styles.language}>{language.name}</span>
            <span className={styles.languageLevel}>{language.level}</span>
          </div>
        ))}
      </div>
          </div>

    </Container></Grid>
  )
}

