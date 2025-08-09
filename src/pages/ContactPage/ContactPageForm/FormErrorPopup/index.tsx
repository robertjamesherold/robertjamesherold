import React from 'react';
import styles from './_ErrorPopup.module.scss';

type ErrorPopupProps = {
  isVisible: boolean
  onClose: (e: React.MouseEvent<HTMLDivElement | HTMLButtonElement>) => void
  message?: string | null
}

export function ErrorPopup({ isVisible, onClose, message }: ErrorPopupProps) {
  if (!isVisible) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div
        className={styles.popup}
        onClick={(e) => e.stopPropagation()} // verhindert Click-Bubbling zum Overlay
      >
        <div className={styles.header}>
          <div className={styles.iconWrapper}>
            <svg
              className={styles.errorIcon}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z"
              />
            </svg>
          </div>

          <button
            className={styles.closeButton}
            onClick={onClose}
            aria-label="Schließen"
          >
            <svg
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div className={styles.content}>
          <h3 className={styles.title}>Fehler beim Senden</h3>
          <p className={styles.message}>
            {message || 'Es ist ein Fehler aufgetreten. Bitte versuche es erneut oder kontaktiere uns direkt.'}
          </p>
        </div>

        <div className={styles.actions}>
          <button
            className={styles.retryButton}
            onClick={onClose}
          >
            Erneut versuchen
          </button>

          <button
            className={styles.cancelButton}
            onClick={onClose}
          >
            Abbrechen
          </button>
        </div>
      </div>
    </div>
  );
}