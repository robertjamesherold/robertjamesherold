import React from 'react';
import { useProcessAnimation } from './useProcessAnimation.jsx';

interface ProcessCardProps {
  process: any; // TODO: Replace 'any' with proper type
  index: any; // TODO: Replace 'any' with proper type
  getProcessCardStyle: any; // TODO: Replace 'any' with proper type
}
const ProcessCard: React.FC<ProcessCardProps> = ({  process, index, getProcessCardStyle  }) => (
  <div 
    className='card'
  >
    <div className='cardiconXL textcenter'>{process.icon}</div>
    <div className='cardcontent'>
    <div className='cardtitle textcenter'>{process.title}</div>
    <p className='carddescription textcenter'>{process.description}</p>

    </div>
  </div>
);

export default interface ProcessGridProps {
  title: any; // TODO: Replace 'any' with proper type
  data: any; // TODO: Replace 'any' with proper type
}
export function ProcessGrid({  title, data  }: ProcessGridProps) {
  const { isVisible, elementRef, getProcessCardStyle } = useProcessAnimation();

  return (
    <section>
      <h2 className='underlined-mid textcenter marginBottomSmall'>{title}</h2>
      <div className='grid-sm2-xl4'>
        {data.map((process: any, index: number) => (
          <ProcessCard 
            key={process.title} 
            process={process} 
            index={index}
            getProcessCardStyle={getProcessCardStyle}
          />
        ))}
      </div>
    </section>
  );
}