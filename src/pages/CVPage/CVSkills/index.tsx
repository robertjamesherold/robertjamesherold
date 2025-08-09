import React from 'react';
import styles from './SkillSection.module.scss'

export interface SkillSectionProps {
  categories: string};

function SkillSection({ categories  }: SkillSectionProps) {
  return (
   <section>
  <h2 className='underlined-left'>Kompetenzen</h2>
      <div className='card' style={{height: 'fit-content'}}>
    <div className='cardcontent'>
      {categories.map((category: string, index: number) => (
        <SkillCategory key={index} {...category} />
      ))}
    </div>
    </div>
    </section>
  )
}

export interface SkillCategoryProps {
  title: string; 
  skills: string;
}
function SkillCategory({  title, skills  }: SkillCategoryProps) {
  return (
    <div className={styles.skillCategory}>
      <h4 className={styles.skillCategoryTitle}>{title}</h4>
      <div className={styles.skillGrid}>
        {skills.map((skill: string, index: number) => (
          <SkillItem key={index} {...skill} />
        ))}
      </div>
    </div>
  )
}

export interface SkillItemProps {
  name: string; 
  level: string;
}
function SkillItem({  name, level  }: SkillItemProps) {
  return (
    <div className={styles.skillItem}>
      <span className={styles.skillName}>{name}</span>
      <div className={styles.skillLevel}>
        <div className={styles.skillBar} data-level={level}></div>
      </div>
    </div>
  )
}
export { SkillSection }