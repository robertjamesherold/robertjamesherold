type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type ColumnProps = { default?: number } & Partial<Record<Breakpoint, number>>;

export type GridProps = {
  children: React.ReactNode;
  grid?: number | ColumnProps;
  row?: number | ColumnProps;
  span?: number | ColumnProps;
  gapCol?: 'small' | 'medium' | 'large'
  gapRow?: 'small' | 'medium' | 'large'
  fullH?: boolean
}