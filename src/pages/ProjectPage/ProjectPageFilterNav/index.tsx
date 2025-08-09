import React from 'react';

export type FilterNavProps = {
  categories: Array<{ id: string | number; [key: string]: any }>
  activeFilter: any
  onFilterChange: (e: React.MouseEvent) => void
  title: React.ReactNode
}
export function FilterNav({  categories, activeFilter, onFilterChange, title  }: FilterNavProps) {
  return (
    <section>
      <div className='filterNav'>
        {categories.map((category: { id: string | number; name?: string; [key: string]: any }) => (
          <button
            key={category.id}
            className={`filterButton ${
              activeFilter === category.id ? 'active' : ''
            }`}
            onClick={(e: React.MouseEvent<HTMLButtonElement>) => onFilterChange(category.id)}
          >
            {category.label}
          </button>
        ))}
      </div>
    </section>
  )
}
