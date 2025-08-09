// hooks/useBreakpoint.js
import { useState, useEffect } from 'react'

export function useBreakpoint(breakpoint = 1024) {
  const [isAboveBreakpoint, setIsAboveBreakpoint] = useState(
    typeof window !== 'undefined' ? window.innerWidth >= breakpoint : true
  )

  useEffect(() => {
    const checkBreakpoint = () => {
      setIsAboveBreakpoint(window.innerWidth >= breakpoint)
    }

    // Initial check
    checkBreakpoint()

    // Add event listener
    window.addEventListener('resize', checkBreakpoint)

    // Cleanup
    return () => window.removeEventListener('resize', checkBreakpoint)
  }, [breakpoint])

  return isAboveBreakpoint
}

// Alternative mit Media Query String
export function useMediaQuery(query) {
  const [matches, setMatches] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia(query)
    
    // Initial check
    setMatches(mediaQuery.matches)

    // Event listener
    const handleChange = (e) => setMatches(e.matches)
    
    // Modern browsers
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleChange)
    } else {
      // Fallback for older browsers
      mediaQuery.addListener(handleChange)
    }

    // Cleanup
    return () => {
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener('change', handleChange)
      } else {
        mediaQuery.removeListener(handleChange)
      }
    }
  }, [query])

  return matches
}
