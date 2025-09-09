import { useState, useEffect } from 'react'

// Type Definitionen
type ScrollDirection = 'up' | 'down'

type UseScrollHideOptions = {
  reverse?: boolean
  threshold?: number
  topThreshold?: number
}

type UseScrollHideReturn = {
  isVisible: boolean
  scrollY: number
  scrollDirection: ScrollDirection
}

/**
 * Custom Hook for scroll hide/show functionality
 * @param options - Configuration options
 * @param options.reverse - Reverse the hide/show behavior (default: false)
 * @param options.threshold - Scroll threshold before hiding (default: 100)
 * @param options.topThreshold - Threshold for "at top" detection (default: 10)
 * @returns { isVisible, scrollY, scrollDirection }
 */
export function useScrollHide(options: UseScrollHideOptions = {}): UseScrollHideReturn {
  const {
    reverse = false,
    threshold = 100,
    topThreshold = 10
  } = options

  const [isVisible, setIsVisible] = useState<boolean>(true)
  const [lastScrollY, setLastScrollY] = useState<number>(0)
  const [scrollDirection, setScrollDirection] = useState<ScrollDirection>('up')

  useEffect(() => {
    const controlVisibility = (): void => {
      const currentScrollY = window.scrollY
      
      // Determine scroll direction
      const direction: ScrollDirection = currentScrollY > lastScrollY ? 'down' : 'up'
      setScrollDirection(direction)
      
      // Always show when at top
      if (currentScrollY < topThreshold) {
        setIsVisible(true)
      }
      // Normal behavior: hide on scroll down, show on scroll up
      else if (!reverse) {
        if (currentScrollY > lastScrollY && currentScrollY > threshold) {
          setIsVisible(false) // Hide when scrolling down
        } else if (currentScrollY < lastScrollY) {
          setIsVisible(true)  // Show when scrolling up
        }
      }
      // Reverse behavior: hide on scroll up, show on scroll down
      else {
        if (currentScrollY < lastScrollY && currentScrollY > threshold) {
          setIsVisible(false) // Hide when scrolling up
        } else if (currentScrollY > lastScrollY) {
          setIsVisible(true)  // Show when scrolling down
        }
      }
      
      setLastScrollY(currentScrollY)
    }

    // Throttle scroll events for better performance
    let ticking = false
    const handleScroll = (): void => {
      if (!ticking) {
        requestAnimationFrame(() => {
          controlVisibility()
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY, reverse, threshold, topThreshold])

  return {
    isVisible,
    scrollY: lastScrollY,
    scrollDirection
  }
}