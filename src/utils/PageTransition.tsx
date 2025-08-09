import { type ReactNode } from 'react';
import { useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { useEffect } from 'react'
import { useReducedMotion } from 'framer-motion'

function usePageTransition() {
  const shouldReduceMotion = useReducedMotion()
  const transitionDuration = shouldReduceMotion ? 0 : 1

  const variants = {
    initial: {
      opacity: 0,

     
    },
    exit: {
      opacity: 0,

      transition: { duration: transitionDuration / 3 },
    },
    enter: {
      opacity: 1,

     
      transition: {
        duration: transitionDuration / 3,
        delay: transitionDuration / 3,
      },
    },
  }

  return { variants, transitionDuration }
}

export interface PageTransitionProps {
  children: ReactNode; 

}
function PageTransition({  children  }: PageTransitionProps) {
  const location = useLocation()
  const { variants, transitionDuration } = usePageTransition()

  useEffect(() => {
    const scrollResetDelay = (transitionDuration / 3) * 1000 // Umrechnung in Millisekunden

    const timeout = setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' }) // Sofort & unsichtbar
    }, scrollResetDelay)

    return () => clearTimeout(timeout)
  }, [location, transitionDuration])

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        variants={variants}
        initial="initial"
        animate="enter"
        exit="exit"
        style={{ width: '100%' }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}

export { PageTransition }