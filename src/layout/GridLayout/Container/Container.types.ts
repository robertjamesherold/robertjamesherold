import type { ColumnProps } from "../Grid";

type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
type SpanProps = { default?: number } & Partial<Record<Breakpoint, number>>;

export type ContainerProps = { children: React.ReactNode; span?: number | SpanProps; row?: number | ColumnProps; }
