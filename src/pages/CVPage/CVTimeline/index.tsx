import styles from './TimelineSection.module.scss'

export interface TimelineItemProps {
  period: string;
  title: string;
  subtitle?: string;
  institution: string;
  description?: string;
  tasks?: string[];
  metrics?: string[];
}

export interface TimelineSectionProps {
  title: string;
  items: TimelineItemProps[];
}

function TimelineSection({ title, items }: TimelineSectionProps) {
  return (
   <section>
  <h2 className='underlined-left'>{title}</h2>
      <div className='card' style={{height: 'fit-content'}}>
    <div className='cardcontent'>
        {items.map((item: TimelineItemProps, index: number) => (
          <TimelineItem key={index} {...item} />
        ))}
      </div>      </div>

    </section>
  )
}
function TimelineItem({  period, title, subtitle, institution, description, tasks, metrics  }: TimelineItemProps) {
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
        {description && <p className={styles.timelineDescription}>{description}</p>}
        {tasks && (
          <ul className={styles.taskList}>
            {tasks.map((task: string, index: number) => (
              <li key={index}>{task}</li>
            ))}
          </ul>
        )}
        {metrics && (
          <div className='timelinecardtags' style={{alignItems: 'flex-start'}}>
            {metrics.map((metric: string, index: number) => (
              <span key={index} className={styles.metric}>{metric}<br/></span>
            ))}
          </div>
        )}
      </div>
    </div>

  )
}

export { TimelineSection }