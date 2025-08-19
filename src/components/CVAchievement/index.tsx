import { Grid, Container } from '../../layout/GridLayout';
import styles from './CVAchievement.module.scss';

export type CVAchievementsItemProps = {
  name: string; 
}
export function CVAchievementsItem({  name  }: CVAchievementsItemProps) {
  return (
      <li className={styles.skillName}>{name}</li>
  )
}

export type CVAchievementsCategoryProps = {
  title: string; 
  achievements: CVAchievementsItemProps[];
}
const CVAchievementsCategory = ({  title, achievements  }: CVAchievementsCategoryProps) => {
  return (
    <div className={styles.achievement}>
      <h4>{title}</h4>
        <ul>
        {achievements.map((achievements, index) => (
          <CVAchievementsItem key={index} {...achievements} />
        ))}
      </ul>
    </div>
  )
}

export type CVAchievementsProps = {
  data: CVAchievementsCategoryProps[]};

export function CVAchievements({ data  }: CVAchievementsProps) {
  return (   <Grid span={{default: 1}} row={{default:1}}>
     <Container>
  <h2 className='underlined-left'>Kompetenzen</h2>
      <div className='card' style={{height: '100%'}}>
    <div className='cardcontent'>
      {data.map((category, index) => (
        <CVAchievementsCategory key={index} {...category} />
      ))}
    </div>
    </div>
    </Container></Grid>
  )
}

