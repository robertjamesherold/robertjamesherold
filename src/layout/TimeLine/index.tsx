import { TimeLineItem, type TimeLineItemProps } from '../../components/TimeLineItem'

export type TimeLineProps = {
  title?: string;
  data: TimeLineItemProps[];
}


export function TimeLine({ title, data }: TimeLineProps) {
  return (
   <section>
  {title && <h2 className='underlined-left'>{title}</h2>}
      <div className='card' style={{height: 'fit-content'}}>
    <div className='cardcontent'>
        {data.map((item: TimeLineItemProps, index: number) => (
          <TimeLineItem key={index} {...item} />
        ))}
      </div>      </div>

    </section>
  )
}

