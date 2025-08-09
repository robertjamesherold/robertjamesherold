import React from 'react';
import styles from './_StatsCards.module.scss'



interface StatItemProps {
  title: any; // TODO: Replace 'any' with proper type
  text: any; // TODO: Replace 'any' with proper type
  textTwo: any; // TODO: Replace 'any' with proper type
}
const StatItem: React.FC<StatItemProps> = ({  title, text, textTwo  }) => (
    <div className='card'>
    <div className='cardcontent textcenter'>
      <div className={styles.statNumber}>{title}</div>
      <p className={styles.statLabel}>{text}<br/>{textTwo}</p>
    </div></div>
);

export default interface StatsCardsProps {
  data: any; // TODO: Replace 'any' with proper type
}
function StatsCards({ data }: StatsCardsProps) {
  return (
    <section>
      <div className='grid2-md4'>
        {data.map((stat: any, index: number) => (
          <StatItem 
            key={index} 
            title={stat.title} 
            text={stat.text} 
            textTwo={stat.textTwo} 
            />
        ))}
      </div>
    </section>
  );
}
export { StatsCards } 