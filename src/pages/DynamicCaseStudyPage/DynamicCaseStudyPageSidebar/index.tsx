import { Grid, type ColumnProps } from "../../../layout/GridLayout"
type CaseStudySidebarProps = {
  children: React.ReactNode
  span?: number | ColumnProps
  grid?: number | ColumnProps
}
export function CaseStudySidebar({  children, grid, span  }: CaseStudySidebarProps) {
  return (
    <Grid span={span} grid={grid} fullH={false}> {children}
    </Grid>
  )
}
