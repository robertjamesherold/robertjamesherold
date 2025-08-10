import styles from './ProgressCard.module.scss'

export type ProgressCardProps = {
  id: string | number;
  name: string;
  text: string;
  icon: string;
  level: number;
  progressStyle?: React.CSSProperties; 
};

export function ProgressCard({ name, text, level, progressStyle }: ProgressCardProps) {
  return (
    <div className='card' style={{position: 'relative'}}>
      <div className='cardcontent'>
        <div className='cardtitle'>{name}</div>
        <p className='carddescription'>{text}</p>
        <div className={styles.skillLevel}>
          <div className={styles.skillBar}>
            <div className={styles.skillProgress} style={progressStyle ?? { width: `${level}%` }} />
            </div>
            <span className={styles.skillPercent}>{level}%</span>

        </div>
      </div>
    </div>
  );
}