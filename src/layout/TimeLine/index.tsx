import { TimeLineItem, type TimeLineItemProps } from '../../components/TimeLineItem'
import {Grid, Container, type ColumnProps} from '../GridLayout';

export type TimeLineProps = {
  title?: string;
  data: TimeLineItemProps[];
  row?: number | ColumnProps
  span?: number | ColumnProps
}


export function TimeLine({ title, data, row, span }: TimeLineProps) {
  return (
   <Grid row={row} span={span} >
  {title && <h2 className='underlined-left'>{title}</h2>}
      <div className='card' style={{height: '100%'}}>
    <div className='cardcontent'>
        {data.map((item: TimeLineItemProps, index: number) => (
          <TimeLineItem key={index} {...item} />
        ))}
      </div>      </div>

    </Grid>
  )
}

export function TimeLineContainer({ title, data, span ,row}: TimeLineProps) {
  return (
   <Grid row={row} span={span} >
   <Container>
  {title && <h2 className='underlined-left'>{title}</h2>}
      <div className='card' style={{height: '100%'}}>
    <div className='cardcontent'>
        {data.map((item: TimeLineItemProps, index: number) => (
          <TimeLineItem key={index} {...item} />
        ))}
      </div>      </div>
</Container>
    </Grid>
  )
}
