import { useState, useMemo } from 'react'

// Erweiterte Typen-Definition für bessere Flexibilität
type FilterableCase = {
  id: string | number
  title: string
  category?: string // Optional, um mit BigCardProps kompatibel zu sein
  [key: string]: any // Erlaubt zusätzliche Eigenschaften
}

export function useFilter<T extends FilterableCase>(Cases: T[], initialFilter: string | number = 'all') {
  const [activeFilter, setActiveFilter] = useState<string | number>(initialFilter)

  const filteredCases = useMemo(() => {
    return activeFilter === 'all'
      ? Cases
      : Cases.filter((Case) => Case.category && Case.category === activeFilter)
  }, [Cases, activeFilter])

  return {
    activeFilter,
    setActiveFilter,
    filteredCases,
  }
}