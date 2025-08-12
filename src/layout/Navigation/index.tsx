import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useScrollHide } from '../../hooks/useScrollHide.ts';
import { GitHubIcon, LinkedInIcon } from '../../assets/icons';

import styles from './_Navigation.module.scss';

// Type Definitionen
type NavigationItem = {
  label: string;
  href: string;
  subItems?: Array<{ label: string; href: string }>;
}

// Desktop Navigation (ab $lg) - zeigt Unterlinks direkt
const desktopNavigationItems: NavigationItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Story', href: '/story' },
  { label: 'Skills', href: '/skills' },
  { label: 'Lebenslauf', href: '/lebenslauf' },
  { label: 'Arbeiten', href: '/arbeiten' },
  { label: 'Kontakt', href: '/kontakt' }
];

// Mobile Navigation - mit Gruppierungen
const mobileNavigationItems: NavigationItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Story', href: '/story' },
  { label: 'Skills', href: '/skills' },
  { label: 'Lebenslauf', href: '/lebenslauf' },
  { label: 'Arbeiten', href: '/arbeiten' },
  { label: 'Kontakt', href: '/kontakt' }
];

export function Navigation(): React.ReactElement {
  const { isVisible } = useScrollHide({ reverse: false, threshold: 100, topThreshold: 10 });
  const [openToggle, setOpenToggle] = useState<boolean>(false);

  const handleToggleClick = (): void => {
    setOpenToggle(prev => !prev);
  };

  const closeOverlay = (): void => {
    setOpenToggle(false);
  };

  // Body scroll lock when overlay is open
  useEffect(() => {
    if (openToggle) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [openToggle]);

  // Close overlay on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent): void => {
      if (e.key === 'Escape' && openToggle) {
        closeOverlay();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [openToggle]);

  return (
    <nav className={`${styles.navigation} ${isVisible || openToggle ? styles.visible : styles.hidden}`}>
      {/* Fullscreen Overlay */}
      <div 
        className={`${styles.fullscreenOverlay} ${openToggle ? styles.open : ''}`}
        onClick={closeOverlay}
      >
        <div 
          className={styles.overlayContent} 
          onClick={(e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation()}
        >
          {/* Overlay Navigation */}
          <nav className={styles.overlayNav}>
            <ul className={styles.overlayNavList}>
              {mobileNavigationItems.map((item: NavigationItem, index: number) => (
                <li key={index} className={styles.overlayNavItem}>
                  <Link 
                    to={item.href} 
                    className={styles.overlayNavLink}
                    onClick={closeOverlay}
                  >
                    {item.label}
                  </Link>
                  
                  {/* Sub Items */}
                  {item.subItems && (
                    <ul className={styles.overlaySubNav}>
                      {item.subItems.map((subItem, subIndex: number) => (
                        <li key={subIndex} className={styles.overlaySubNavItem}>
                          <Link 
                            to={subItem.href} 
                            className={styles.overlaySubNavLink}
                            onClick={closeOverlay}
                          >
                            {subItem.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>

            {/* Additional Content */}
            <div className={styles.overlayFooter}>
              <div className={styles.overlayContact}>
                <h3 className={styles.overlayContactTitle}>Kontakt</h3>
                <p className={styles.overlayContactInfo}>
                  <a href="mailto:robertjamesherold@icloud.com">
                    robertjamesherold@icloud.com
                  </a>
                </p>
                <p className={styles.overlayContactInfo}>
                  <a href="tel:+4915161660444">
                    +49 151 616 60444
                  </a>
                </p>
              </div>

              <div className={styles.overlaySocial}>
            
                  <GitHubIcon height='2.75em' width='2.75em' />
           
                  <LinkedInIcon height='2.75em' width='2.75em' />
                
              </div>
            </div>
          </nav>
        </div>
      </div>

      <div className={styles.mainNav}>
        <ul className={styles.navList}>
          {desktopNavigationItems.map((item: NavigationItem, index: number) => (
            <li key={index} className={styles.navItem}>
              <Link to={item.href} className={styles.navLink}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Toggle Button */}
        <button 
          onClick={handleToggleClick} 
          className={`${styles.menuToggle} ${openToggle ? styles.delay : ''}`}
          aria-label="Menu öffnen"
          aria-expanded={openToggle}
          type="button"
        >
          <div className={`${styles.toggleIcon} ${openToggle ? styles.open : ''}`}></div>
          <div className={`${styles.toggleIcon} ${openToggle ? styles.open : ''}`}></div>
          <div className={`${styles.toggleIcon} ${openToggle ? styles.open : ''}`}></div>
          <div className={`${styles.toggleIcon} ${openToggle ? styles.open : ''}`}></div>
        </button>
      </div>
    </nav>
  );
}