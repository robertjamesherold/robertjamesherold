import React from 'react';
import styles from './_SkillsGrid.module.scss';
import { useSkillsAnimation } from './useSkillsAnimation.js';

const SkillCard = ({ skill, index, getAnimationDelay, getSkillProgressStyle }) => (
  <div 
    className='card'
    style={getAnimationDelay(index)}
  >
      <div className='cardcontent'>
        <div className='cardtitle'>{skill.name}</div>
        <p className='carddescription'>{skill.description}</p>
    <div className={styles.skillLevel}>
      <div className={styles.skillBar}>
        <div 
          className={styles.skillProgress}
          style={getSkillProgressStyle(skill.level, index)}
        ></div>
      </div>
      <span className={styles.skillPercent}>{skill.level}%</span>
    </div>
        </div>

  </div>
);

type SkillGridProps = {
  title: React.ReactNode
  data: Array<{ id: string | number; [key: string]: number }>
}
export function SkillGrid({  title, data  }: SkillGridProps) {
  const { isVisible, elementRef, getSkillProgressStyle, getAnimationDelay } = useSkillsAnimation();

  return (
    <section ref={elementRef}>
      <h2 className='underlined-mid textcenter marginBottomSmall'>{title}</h2>
      <div className={`grid-sm2-xl3 ${isVisible ? styles.animated : ''}`}>
        {data.map((skill: { id: string | number; name?: string; [key: string]: number }, index: number) => (
          <SkillCard 
            key={skill.name} 
            skill={skill} 
            index={index} 
            getAnimationDelay={getAnimationDelay}
            getSkillProgressStyle={getSkillProgressStyle}
          />
        ))}
      </div>
    </section>
  );
}