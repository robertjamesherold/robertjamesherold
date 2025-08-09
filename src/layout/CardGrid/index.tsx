import type { ReactNode } from 'react'
import { Card } from '../../components/Card'
import type { CardProps } from '../../components/Card'

type CardGridProps = {
  data: CardProps[],
  className?: string,
  children?: ReactNode
}

export function CardGrid({  data, className = "", children }: CardGridProps) {
  return (
    <section>
      {children}
      <div className={className}>
        {data.map((content, index) => (
          <Card
            key={index}
            {...content}
          />
        ))}
      </div>
    </section>
   )
}