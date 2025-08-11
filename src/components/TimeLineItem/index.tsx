import styles from './_TimeLineItem.module.scss'

export type TimelineItemProps = {
  title: string;
  period: string;
  description: string;
}

export function TimelineItem({  period, title, name }: TimelineItemProps) {
  return (
    <div className={styles.timelineItem}>
      <div className={styles.timelinePeriod}>{period}</div>
      <div className='cardcontent'>
        <div className='cardtitle'>{title}</div>
        {description && 
        <p className='carddescription paddingBottom'>{name}</p>}
      </div>
    </div>
  )
}