import styles from './column.module.scss';
import type { ReactNode } from 'react';

type FlexboxProps = {
  children: ReactNode;
  width?: string | number;
  height?: string | number;
  justify?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
  align?: 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';
  padding?: string | number;
  flex?: 'column' | 'row';
  gap?: 'small' | 'medium' | 'large';
};

export function Flexbox({ children, width, height, justify, align, padding, flex, gap }: FlexboxProps) {
  const gapClass = gap ? styles[gap] : '';

  return (
    <div className={`${styles.column} ${gapClass}`} style={{ width: width, height: height, justifyContent: justify, alignItems: align, padding: padding, flexDirection: flex }}>
      {children}
    </div>
  );
}
