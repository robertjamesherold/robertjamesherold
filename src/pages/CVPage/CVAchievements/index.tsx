import React from 'react';
import styles from './AchievementSection.module.scss'

export interface AchievementSectionProps {
  title: string;
  achievements: string;
}
function AchievementSection({  title, achievements  }: AchievementSectionProps) {
  return (<section>
  <h2 className='underlined-left'>{title}</h2>
      <div className='card' style={{height: 'fit-content'}}>
    <div className='cardcontent'>

        {achievements.map((achievement: string, index: number) => (
          <div key={index} className={styles.achievement}>
            <h4>{achievement.title}</h4>
            <ul>
              {achievement.items.map((item: string, idx: number) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
    </section>
  )
}

export { AchievementSection };