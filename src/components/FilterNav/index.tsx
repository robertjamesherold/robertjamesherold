import React from 'react'
import { Section } from '../../layout/GridLayout';

export type Category = {
  id: string | number
  label: string
 }

export type FilterNavProps = {
  categories: Category[]
  activeFilter: string | number
  onFilterChange: (id: string | number) => void
  title?: React.ReactNode 
}

export function FilterNav({
  categories,
  activeFilter,
  onFilterChange,
  
}: FilterNavProps) {
  return (
    <Section id='navigation' isPaddingTop={false}>
      <div className="filterNav">
        {categories.map((category) => (
          <button
            key={category.id}
            className={`filterButton ${activeFilter === category.id ? 'active' : ''}`}
            onClick={() => onFilterChange(category.id)}
          >
            {category.label}
          </button>
        ))}
      </div>
    </Section>
  )
}