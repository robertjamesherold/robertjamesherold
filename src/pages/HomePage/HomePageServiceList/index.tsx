import React from 'react';
import styles from './_ServiceList.module.scss';

interface CardProps {
  icon: string; 
  title: string; 
  text: string;
}
const Card: React.FC<CardProps> = ({  icon, title, text  }) => (
  <div className='card'>
    <div className='cardiconXL textcenter'>{icon}</div>
      <div className='cardcontent textcenter'>
            <div className='cardtitle'>{title}</div>

        <p className='carddescription'>{text}</p>
      </div>
  </div>
);

export default interface ServiceListProps {
  data: Array<{
    icon: string;
    title: string; 
    text: string;
  }>;
}
function ServiceList({  data  }: ServiceListProps) {
  return (
  <section>
      <div className='grid-sm2-xl4'>
        {data.map((service: { icon: string; title: string; text: string; }, index: number) => (
          <Card
            key={index}
            icon={service.icon}
            title={service.title}
            text={service.text}
          />
        ))}
      </div>
      </section>
  );
}
export { ServiceList };