import type { GridProps } from './Grid.types';
import styles from './Grid.module.scss';
import clsx from 'clsx';


export default function Grid({ children, grid , gapRow, gapCol,fullH=true, span, row}: GridProps) {
const spanClasses: string[] = [];

  if (typeof span === 'number') {
    // Wenn nur Zahl: wird als "xs" behandelt
    spanClasses.push(styles[`span-xs-${span}`]);
  } else if (typeof span === 'object') {
    const { default: defaultSpan, ...breakpoints } = span;

    if (defaultSpan !== undefined) {
      spanClasses.push(styles[`span-xs-${defaultSpan}`]);
    }

    for (const [bp, val] of Object.entries(breakpoints)) {
      if (val !== undefined && bp !== 'default') {
        spanClasses.push(styles[`span-${bp}-${val}`]);
      }
    }
  }

    const rowClasses: string[] = [];

  if (typeof row === 'number') {
    // Wenn nur Zahl: wird als "xs" behandelt
    rowClasses.push(styles[`row-xs-${row}`]);
  } else if (typeof row === 'object') {
    const { default: defaultRow, ...breakpoints } = row;

    if (defaultRow !== undefined) {
      rowClasses.push(styles[`row-xs-${defaultRow}`]);
    }

    for (const [bp, val] of Object.entries(breakpoints)) {
      if (val !== undefined && bp !== 'default') {
        rowClasses.push(styles[`row-${bp}-${val}`]);
      }
    }
  }



  const gridClasses: string[] = [];

  if (typeof grid === 'number') {
    // Wenn nur Zahl: wird als "xs" behandelt
    gridClasses.push(styles[`grid-xs-${grid}`]);
  } else if (typeof grid === 'object') {
    const { default: defaultSpan, ...breakpoints } = grid;

    if (defaultSpan !== undefined) {
      gridClasses.push(styles[`grid-xs-${defaultSpan}`]);
    }

    for (const [bp, val] of Object.entries(breakpoints)) {
      if (val !== undefined && bp !== 'default') {
        gridClasses.push(styles[`grid-${bp}-${val}`]);
      }
    }
  }
    const fullHeight = fullH ? styles.full : styles.fit;

    const gapColClass = gapCol ? styles[`col-${gapCol}`] : '';
    const gapRowClass = gapRow ? styles[`row-${gapRow}`] : '';
  return <div className={clsx(styles.grid, gapRowClass,...rowClasses,fullHeight, ...spanClasses, gapColClass, ...gridClasses)}>{children}</div>;
}

Grid.defaultProps = {
  gapRow: 'medium',
  grid: { default: 1 },
  gapCol: 'medium',
  row: { default: 1},
  span: {default: 1}
}
