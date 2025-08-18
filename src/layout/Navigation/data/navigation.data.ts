// data/navigationItems.ts
import type { NavigationItem } from '../types/navigation.types';

// Desktop Navigation (ab $lg) - zeigt Unterlinks direkt
export const desktopNavigationItems: NavigationItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Story', href: '/story' },
  { label: 'Skills', href: '/skills' },
  { label: 'Lebenslauf', href: '/lebenslauf' },
  { label: 'Projekte', href: '/projekte' },
  { label: 'Fallstudien', href: '/fallstudien' },
  { label: 'Kontakt', href: '/kontakt' }
];

// Mobile Navigation - mit Gruppierungen
export const mobileNavigationItems: NavigationItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Story', href: '/story' },
  { label: 'Skills', href: '/skills' },
  { label: 'Lebenslauf', href: '/lebenslauf' },
  { label: 'Projekte', href: '/projekte' },
  { label: 'Fallstudien', href: '/fallstudien' },
  { label: 'Kontakt', href: '/kontakt' }
];

// Contact Information
export const contactInfo = {
  email: 'robertjamesherold@icloud.com',
  phone: '+49 151 616 60444',
  phoneDisplay: '+49 151 616 60444'
};