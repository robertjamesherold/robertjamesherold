import {StatCard, type StatCardProps } from '../../components/StatCard'
import { Container, Section, Grid, type ColumnProps } from '../GridLayout';


type StatCardGridProps = {
  data: StatCardProps[],
  grid: number | ColumnProps 
  id: string
  isSection: boolean
  isPadding: boolean
}

export function StatCardGrid({ data, grid, id, isSection, isPadding}: StatCardGridProps) {
  return (<>
    {isSection && <Section id={id} isPaddingTop={isPadding}>
      <Container>
    
      <Grid grid={grid}>
        {data.map((stat, index) => (
          <StatCard
            key={index} 
            {...stat}
            />
        ))}
      </Grid>
          </Container>
      
    </Section>}


      {!isSection &&
    
      <Grid grid={grid}>
        {data.map((stat, index) => (
          <StatCard
            key={index} 
            {...stat}
            />
        ))}
      </Grid>
      
}
    </>
  );
}


