import styles from './column.module.scss';
import type { ReactNode } from 'react';

type ColumnProps = {
  children: ReactNode;
  width?: string | number;
  height?: string | number;
  justify?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
  align?: 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';
  padding?: string | number;
};

export function Column({ children, width, height, justify, align, padding }: ColumnProps) {

  return (
    <div className={styles.column} style={{ width: width, height: height, justifyContent: justify, alignItems: align, padding: padding}}>
      {children}
    </div>
  );
}
