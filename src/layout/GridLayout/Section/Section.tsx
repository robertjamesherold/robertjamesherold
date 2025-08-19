import styles from './Section.module.scss';
import {  Children } from 'react';
import type { SectionProps } from './Section.types';

export default function Section({ id, children, min, isPaddingTop=true}: SectionProps) {
  const childrenArray = Children.toArray(children);

  return (
    <section id={id} className={`${styles.section} ${isPaddingTop ? 'marginTop' : ''}`} style={{minHeight: `${min}`}}>
      {childrenArray.map((child, index) => (
          <div key={index} className={styles.container}>
            {child}
          </div>))}
    </section>
  );
}
