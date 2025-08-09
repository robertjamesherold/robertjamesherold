import React from 'react';
import { useIntersectionObserver } from '@ho/useIntersectionObserver';

export function useSkillsAnimation(threshold = 0.3) {
  const { isVisible, elementRef } = useIntersectionObserver(threshold);

  const getSkillProgressStyle = (level, index) => ({
    width: isVisible ? `${level}%` : '0%',
    transitionDelay: `${index * 0.1}s`
  });

  const getAnimationDelay = (index) => ({
    animationDelay: `${index * 0.1}s`
  });

  return {
    isVisible,
    elementRef,
    getSkillProgressStyle,
    getAnimationDelay
  };
}