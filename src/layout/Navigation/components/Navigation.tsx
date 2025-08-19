// components/Navigation.tsx
import React from 'react';
import { useScrollHide } from '../hooks/useScrollHide';
import { useOverlay } from '../hooks/useOverlay';
import { DesktopNav } from './DesktopNav/DesktopNav';
import { MobileOverlay } from './MobileOverlay';
import { MenuToggle } from './MenuToggle/MenuToggle';
import { desktopNavigationItems, mobileNavigationItems } from '../data/navigation.data';
import styles from './Navigation.module.scss';

// ✨ wichtig: react-router importieren
import { useLocation } from 'react-router-dom';
import { BackButton } from '../../../ui/BackButton'; // falls du shadcn/ui nutzt, sonst einfach ein <button>

export function Navigation(): React.ReactElement {
  const { isVisible } = useScrollHide({ reverse: false, threshold: 100, topThreshold: 10 });
  const { openToggle, handleToggleClick, closeOverlay } = useOverlay();

  // aktuelle Route holen
  const location = useLocation();

  // Routen, bei denen der Button sichtbar sein soll
  const showButtonRoutes = ['/fallstudien/concretegold', '/fallstudien/elearning', '/projekte/piradise', '/projekte/animatedalbumcover', '/projekte/schuelerhilfe', '/projekte/oliveto'];
  const shouldShowButton = showButtonRoutes.includes(location.pathname);

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

        {/* Optionaler Button nur auf bestimmten Seiten */}
        {shouldShowButton && (
          <BackButton onClick={() => console.log('Button geklickt!')}>
           
          </BackButton>
        )}

        {/* Mobile Menu Toggle */}
        <MenuToggle 
          isOpen={openToggle}
          onClick={handleToggleClick}
        />
      </div>
    </nav>
  );
}