import { Card } from '../../components/Card'
import type { CardProps } from '../../components/Card'

type CardGridProps = {
  data: CardProps[],
  className?: string,
  title?: string
}

export function CardGrid({  data, className = "", title }: CardGridProps) {
  return (
    <section>
      {title && <h2 className='underlined-mid textcenter marginBottomSmall'>{title}</h2>}
      <div className={className} style={{height: '100%'}}>
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