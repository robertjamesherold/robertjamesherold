import React from 'react';
import type { StatCardProps } from '../../components/StatCard'
import { StatCard } from '../../components/StatCard'


type StatCardGridProps = {
  data: StatsCardProps[],
  className: string
}

export function StatCardGrid({ data, className = 'grid2-md4' }: StatCardGridProps) {
  return (
    <section>
      <div className={className}>
        {data.map((stat, index) => (
          <StatCard
            key={index} 
            {...stat}
            />
        ))}
      </div>
    </section>
  );
}
