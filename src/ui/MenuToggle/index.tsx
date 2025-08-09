import { useBodyScrollLock } from "./hooks/useBodyScrollLock";
import { useEscapeClose } from "./hooks/useEscapeClose";
import { useOverlayCloseHandler } from "./hooks/useOverlayCloseHandler";
import styles from './MenuToggle.module.scss'

export function MenuToggle({
  isOpen,
  onToggle,
  onClose,
  className='',
  ariaLabel = "Menu öffnen",
}) {
  const closeOverlay = useOverlayCloseHandler(onToggle, onClose);

  useBodyScrollLock(isOpen);
  useEscapeClose(isOpen, closeOverlay);

  return (
        <button
        onClick={onToggle}
        className={`${styles.menuToggle} ${isOpen ? styles.round : ""} ${className}`}
        aria-label={ariaLabel}
        aria-expanded={isOpen}
        type="button"
      >
        <div className={`${styles.toggleIcon} ${isOpen ? styles.open : ""}`}></div>
        <div className={`${styles.toggleIcon} ${isOpen ? styles.open : ""}`}></div>
        <div className={`${styles.toggleIcon} ${isOpen ? styles.open : ""}`}></div>
        <div className={`${styles.toggleIcon} ${isOpen ? styles.open : ""}`}></div>
      </button>

  );
}