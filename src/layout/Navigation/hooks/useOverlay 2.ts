// hooks/useOverlay.ts
import { useState, useEffect } from 'react';

export function useOverlay() {
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

  return {
    openToggle,
    handleToggleClick,
    closeOverlay
  };
}