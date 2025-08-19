import { BigCard } from '../../components/BigCard'
import type { BigCardProps } from '../../components/BigCard'
import { Flexbox } from '../../components/Flexbox';
import { Button } from '../../ui/Button';
import { Section, Container, Grid, type ColumnProps } from '../GridLayout';

type BigCardGridProps ={
  data: BigCardProps[],
  showButton: boolean,
  title?: string,
  grid: number | ColumnProps
  id: string
  isPadding: boolean
}
export function BigCardGrid({  data, showButton, title, grid, id, isPadding}: BigCardGridProps) {
  return (
   <Section id={id} isPaddingTop={isPadding}>
  <Grid>
        {title &&   <Container>
<h2 className='underlined-mid textcenter marginBottomSmall'>{title}</h2></Container>}
          <Grid grid={grid}>
            {data.map((project, index) => (
              <BigCard key={index} {...project} />
            ))}
          </Grid>
            <Container>

          {showButton && <Flexbox width='100%' gap='small' flex='row' padding='0 0 0 0'>
            <Button action='/projekte' variant='link' isPrimary={false} width='25%' isCentered={true} text='Alle Projekte'></Button>

          </Flexbox>}
            </Container>

          </Grid>
        </Section>
  );
}
