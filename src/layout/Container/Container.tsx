import type { ReactNode } from 'react';
import styles from './_Container.module.scss';
import clsx from 'clsx';
type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
type SpanProps = { default?: number } & Partial<Record<Breakpoint, number>>;

interface ContainerProps {
  children: ReactNode;
  span?: number | SpanProps;
}

export function Container({ children, span }: ContainerProps) {
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

  return <section className={clsx(styles.container, ...spanClasses)}>{children}</section>;
}

Container.defaultProps = {
  span: { default: 12 }
}
