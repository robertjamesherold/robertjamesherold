import type { ContainerProps } from './Container.types';
import styles from './Container.module.scss';
import clsx from 'clsx';

export default function Container({ children, span , row}: ContainerProps) {
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

  return <div className={clsx(styles.container,...rowClasses, ...spanClasses)}>{children}</div>;
}

Container.defaultProps = {
  span: { default: 12 }
}

export function ContainerFull({ children, span, row }: ContainerProps) {
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

  return <div className={clsx(styles.containerFull,...rowClasses, ...spanClasses)}>{children}</div>;
}

Container.defaultProps = {
  span: { default: 12 },
  row: { default: 1 }
}
