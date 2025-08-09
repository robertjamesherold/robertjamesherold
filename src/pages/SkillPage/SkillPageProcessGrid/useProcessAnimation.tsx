import React from 'react';
import { useIntersectionObserver } from '@ho/useIntersectionObserver';

export function useProcessAnimation(threshold = 0.3) {
  const { isVisible, elementRef } = useIntersectionObserver(threshold);

  const getProcessCardStyle = (index) => ({
    animationDelay: `${index * 0.2}s`
  });

  return {
    isVisible,
    elementRef,
    getProcessCardStyle
  };
}