import styles from './Footer.module.scss';
import {  Children } from 'react';

import type { FooterProps } from './Footer.types';

export default function Footer({ id, children }: FooterProps) {
  const childrenArray = Children.toArray(children);

  return (
    <footer id={id} className={styles.footer}>
      {childrenArray.map((child, index) => (
          <div key={index} className={styles.container}>
            {child}
          </div>))}
    </footer>
  );
}
