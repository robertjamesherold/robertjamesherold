// components/MenuToggle.tsx
import React from 'react';
import styles from './MenuToggle.module.scss';
import type { MenuToggleProps } from '../../types';

export function MenuToggle({ isOpen, onClick }: MenuToggleProps): React.ReactElement {
  return (
    <button 
      onClick={onClick} 
      className={`${styles.menuToggle} ${isOpen ? styles.delay : ''}`}
      aria-label="Menu öffnen"
      aria-expanded={isOpen}
      type="button"
    >
      <div className={`${styles.toggleIcon} ${isOpen ? styles.open : ''}`}></div>
      <div className={`${styles.toggleIcon} ${isOpen ? styles.open : ''}`}></div>
      <div className={`${styles.toggleIcon} ${isOpen ? styles.open : ''}`}></div>
      <div className={`${styles.toggleIcon} ${isOpen ? styles.open : ''}`}></div>
    </button>
  );
}