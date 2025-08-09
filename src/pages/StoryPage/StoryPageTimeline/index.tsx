import styles from './_Timeline.module.scss'

type TimelineItemProps = {
  title: string;
  period: string;
  description: string;
}
type TimelineSectionProps = {
  items: TimelineItemProps[];
}


function TimelineSection({  items }: TimelineSectionProps) {
  return (
    <div className='card'>
      
      <div className='cardcontent'>
        {items.map((item: TimelineItemProps, index: number) => (
          <TimelineItem key={index} {...item} />
        ))}
      </div>
    </div>
  )
}
function TimelineItem({  period, title, description }: TimelineItemProps) {
  return (
    <div className={styles.timelineItem}>
      <div className={styles.timelinePeriod}>{period}</div>
      <div className='cardcontent'>
        <div className='cardtitle'>{title}</div>


        {description && <p className='carddescription paddingBottom'>{description}</p>}

 
      </div>
    </div>
  )
}

export { TimelineSection }