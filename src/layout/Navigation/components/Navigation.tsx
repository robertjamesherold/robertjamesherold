// components/Navigation.tsx
import React from 'react';
import { useScrollHide } from '../hooks/useScrollHide';
import { useOverlay } from '../hooks/useOverlay';
import { DesktopNav } from './DesktopNav/DesktopNav';
import { MobileOverlay } from './MobileOverlay';
import { MenuToggle } from './MenuToggle/MenuToggle';
import { desktopNavigationItems, mobileNavigationItems } from '../data/navigation.data';
import styles from './Navigation.module.scss';

export function Navigation(): React.ReactElement {
  const { isVisible } = useScrollHide({ reverse: false, threshold: 100, topThreshold: 10 });
  const { openToggle, handleToggleClick, closeOverlay } = useOverlay();

  return (
    <nav className={`${styles.navigation} ${isVisible || openToggle ? styles.visible : styles.hidden}`}>
      {/* Fullscreen Overlay for Mobile */}
      <MobileOverlay 
        isOpen={openToggle}
        items={mobileNavigationItems}
        onClose={closeOverlay}
      />

      {/* Main Navigation Bar */}
      <div className={styles.mainNav}>
        {/* Desktop Navigation */}
        <DesktopNav items={desktopNavigationItems} />

        {/* Mobile Menu Toggle */}
        <MenuToggle 
          isOpen={openToggle}
          onClick={handleToggleClick}
        />
      </div>
    </nav>
  );
}