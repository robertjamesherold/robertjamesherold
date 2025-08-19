import { ProgressCard, type ProgressCardProps } from '../../components/ProgressCard';
import { Container, Section, Grid, type ColumnProps } from '../GridLayout';

export type ProgressCardGridProps = {
  title: string,
  data: ProgressCardProps[],
  id: string
  grid: number | ColumnProps
  row?: number | ColumnProps
  span?: number | ColumnProps
  isPadding: boolean
}

export function ProgressCardGrid({ title, data, grid, row, span, id, isPadding }: ProgressCardGridProps) {
  return (
    <Section id={id} isPaddingTop={isPadding}>
    <Container>
      <h2 className='underlined-mid textcenter marginBottomSmall'>{title}</h2>
      <Grid grid={grid} span={span} row={row}> 
        {data.map((item) => (
          <ProgressCard
            key={item.id}
            name={item.name}
            text={item.text}
            icon={item.icon}
            level={item.level}
            id={String(item.id)}
          />
        ))}
      </Grid>
      </Container>
    </Section>
  );
}