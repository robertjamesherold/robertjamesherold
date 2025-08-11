import styles from './TimeLineItem.module.scss'

export type TimeLineItemProps = {
  period: string;
  title: string;
  subtitle?: string;
  institution?: string;
  text?: string;
  list?: string[];
  tag?: string[];
}

export function TimeLineItem({  period, title, subtitle, institution, text, list, tag  }: TimeLineItemProps) {
  return (
    <div className={styles.timelineItem}>
      <div className={styles.timelinePeriod}>{period}</div>
      <div className={styles.timelineContent}>
        <div className='cardtitle'>{title}</div>

        <div className={styles.timelineSubtitle}>{subtitle}</div>
          {institution && (
          <div className={styles.institution}>
            {institution}
            
          </div>
        )}
        {text && <p className={styles.timelineDescription}>{text}</p>}
        {list && (
          <ul className={styles.taskList}>
            {list.map((task, index) => (
              <li key={index}>{task}</li>
            ))}
          </ul>
        )}
        {tag && (
          <div className='timelinecardtags' style={{alignItems: 'flex-start'}}>
            {tag.map((tag ,index) => (
              <span key={index} className={styles.metric}>{tag}<br/></span>
            ))}
          </div>
        )}
      </div>
    </div>

  )
}

