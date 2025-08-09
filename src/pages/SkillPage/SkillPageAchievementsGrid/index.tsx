import React from 'react';

type AchievementCardProps = {
  achievement: string; // TODO: Replace 'any' with proper type
  index: string; // TODO: Replace 'any' with proper type
  getAchievementCardStyle: any; // TODO: Replace 'any' with proper type
}
const AchievementCard: React.FC<AchievementCardProps> = ({  achievement, index, getAchievementCardStyle  }) => (
  <div 
    className='card'>
    <div className='cardiconXL textcenter'>{achievement.icon}</div>
    <div className='cardcontent'>
      <div className='cardtitle textcenter'>{achievement.title}</div>
      <p className='carddescription textcenter'>{achievement.description}</p>
      <span className='cardtags'>
      <span className='cardtag'>{achievement.metric}</span></span>
    </div>
  </div>
);

export default interface AchievementsGridProps {
  title: any; // TODO: Replace 'any' with proper type
  data: any; // TODO: Replace 'any' with proper type
}
export function AchievementsGrid({  title, data  }: AchievementsGridProps) {
 

  return (
    <section>
      <h2 className='underlined-mid textcenter marginBottomSmall'>{title}</h2>
      <div className='grid-sm2-xl4'>
        {data.map((achievement: any, index: number) => (
          <AchievementCard 
            key={achievement.title} 
            achievement={achievement} 
            index={index}
          />
        ))}
      </div>
    </section>
  );
}