import React from 'react'
import { useState, useMemo } from 'react'

type CaseType = {
  id: string
  title: string
  category: string
  featured?: boolean
  // Füge hier alle weiteren relevanten Felder hinzu, die ein Case hat
}

export function useCaseFilter(Cases: CaseType[], initialFilter: string = 'all') {
  const [activeFilter, setActiveFilter] = useState<string>(initialFilter)

  const filteredCases = useMemo(() => {
    return activeFilter === 'all'
      ? Cases
      : Cases.filter((Case) => Case.category === activeFilter)
  }, [Cases, activeFilter])

  const featuredCases = useMemo(() => {
    return Cases.filter((Case) => Case.featured)
  }, [Cases])

  return {
    activeFilter,
    setActiveFilter,
    filteredCases,
    featuredCases,
  }
}