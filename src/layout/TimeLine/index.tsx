import { TimeLineItem } from '../../components/TimeLineItem'

export type TimelineSectionProps = {
  items: TimelineItemProps[];
}

function TimelineSection({ items }: TimelineSectionProps) {
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