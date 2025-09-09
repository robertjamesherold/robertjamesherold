// components/MobileOverlay.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { GitHubIcon, LinkedInIcon } from '../../../../assets/icons';
import type { NavigationItem, OverlayProps } from '../../types';
import { contactInfo } from '../../data/navigation.data';
import styles from './MobileOverlay.module.scss';



export function MobileOverlay({ isOpen, items, onClose }: OverlayProps): React.ReactElement {
  return (
    <div 
      className={`${styles.fullscreenOverlay} ${isOpen ? styles.open : ''}`}
      onClick={onClose}
    >
      <div 
        className={styles.overlayContent} 
        onClick={(e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation()}
      >
        {/* Overlay Navigation */}
        <div className={styles.overlayNav}>
          <ul className={styles.overlayNavList}>
            {items.map((item: NavigationItem, index: number) => (
              <li key={index} className={styles.overlayNavItem}>
                <Link 
                  to={item.href} 
                  className={styles.overlayNavLink}
                  onClick={onClose}
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
                          onClick={onClose}
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
                <a href={`mailto:${contactInfo.email}`}>
                  {contactInfo.email}
                </a>
              </p>
              <p className={styles.overlayContactInfo}>
                <a href={`tel:${contactInfo.phone}`}>
                  {contactInfo.phoneDisplay}
                </a>
              </p>
            </div>

            <div className={styles.overlaySocial}>
              <GitHubIcon height='2.75em' width='2.75em' />
              <LinkedInIcon height='2.75em' width='2.75em' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}