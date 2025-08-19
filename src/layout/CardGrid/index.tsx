import { Card } from '../../components/Card'
import type { CardProps } from '../../components/Card'
import { Grid, Container, Section,  type ColumnProps,} from '../GridLayout';

type CardGridProps = {
  data: CardProps[],
  className?: string,
  title?: string
  grid?: number | ColumnProps
  id: string
  isSection: boolean
  isPadding:boolean
  row?: number | ColumnProps
   span?: number | ColumnProps
}

export function CardGrid({  data, grid, title, isSection=true , id, isPadding, row, span}: CardGridProps) {
  return (<>
{isSection && <Section id={id} isPaddingTop={isPadding}>
    <Container>
      {title && <h2 className='underlined-mid textcenter marginBottomSmall'>{title}</h2>}
      <Grid grid={grid} gapCol='medium' gapRow='medium'>
        {data.map((content, index) => (
          <Card
            key={index}
            {...content}
          />
        ))}
      </Grid>
    </Container></Section>}
    {!isSection && <Grid grid={grid} span={span} row={row}>
      {title && <h2 className='underlined-mid textcenter marginBottomSmall'>{title}</h2>}
      
        {data.map((content, index) => (
          <Card
            key={index}
            {...content}
          />
        ))}
        
    </Grid>}
</>
   )
}