import { Container, Grid } from '../../layout/GridLayout';
import styles from './CVSkills.module.scss';

export type CVSkillItemProps = {
  name: string; 
  level: string;
}
export function CVSkillItem({  name, level  }: CVSkillItemProps) {
  return (
    <div className={styles.skillItem}>
      <span className={styles.skillName}>{name}</span>
      {level && <div className={styles.skillLevel}>
        <div className={styles.skillBar} data-level={level}></div>
      </div>}
    </div>
  )
}

export type CVSkillCategoryProps = {
  title: string; 
  skills: CVSkillItemProps[];
}
const CVSkillCategory = ({  title, skills  }: CVSkillCategoryProps) => {
  return (
    <div className={styles.skillCategory}>
      <h4 className={styles.skillCategoryTitle}>{title}</h4>
      <div className={styles.skillGrid}>
        {skills.map((skill, index) => (
          <CVSkillItem key={index} {...skill} />
        ))}
      </div>
    </div>
  )
}

export type CVSkillsProps = {
  data: CVSkillCategoryProps[]};

export function CVSkills({ data  }: CVSkillsProps) {
  return (   <Grid span={{default: 1}} row={{default:1}}>
   <Container>
  <h2 className='underlined-left'>Kompetenzen</h2>
      <div className='card' style={{height: 'fit-content'}}>
    <div className='cardcontent'>
      {data.map((category, index) => (
        <CVSkillCategory key={index} {...category} />
      ))}
    </div>
    </div>
    </Container>
    </Grid>
  )
}

