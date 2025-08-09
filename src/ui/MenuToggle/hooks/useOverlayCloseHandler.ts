import { useCallback } from "react";

export function useOverlayCloseHandler(
  onToggle: () => void,
  onClose?: () => void
) {
  return useCallback(() => {
    if (onClose) {
      onClose();
    } else {
      onToggle();
    }
  }, [onToggle, onClose]);
}