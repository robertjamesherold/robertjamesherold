// components/DesktopNav.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import type { NavigationItem } from '../../types';
import styles from './DesktopNav.module.scss';

interface DesktopNavProps {
  items: NavigationItem[];
}

export function DesktopNav({ items }: DesktopNavProps): React.ReactElement {
  return (
    <ul className={styles.navList}>
      {items.map((item: NavigationItem, index: number) => (
        <li key={index} className={styles.navItem}>
          <Link to={item.href} className={styles.navLink}>
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}