import { useState, useEffect, useRef } from 'react';

export function useIntersectionObserver(threshold = 0.3) {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [threshold]);

  return { isVisible, elementRef };
}