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
