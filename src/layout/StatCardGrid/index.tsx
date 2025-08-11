import {StatCard, type StatCardProps } from '../../components/StatCard'


type StatCardGridProps = {
  data: StatCardProps[],
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


