import type { CardProps } from "./Card.types";
import styles from './Card.module.scss'

export default function Card({ icon, title, text, tag }: CardProps) {
  return (
    <div className={styles.card} style={{display: 'flex', flexDirection: 'column', height: '100%'}} >
      <div className='cardiconXL textcenter'>{icon}</div>
      <div className='cardcontent textcenter'>
        <div className='cardtitle'>{title}</div>
        <div>{Array.isArray(text) ? text.map((text, index) => <p key={index} className='carddescription'>{text}</p>) : <p className='carddescription'>{text}</p>}</div>
        {tag &&  <div className='cardtags'>
          <div className='cardtag'>{tag}</div>
        </div>}
      </div>
    </div>
  );
}