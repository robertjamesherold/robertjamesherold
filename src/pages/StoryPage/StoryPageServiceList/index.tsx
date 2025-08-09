import { Card } from '../../../components/Card'
import type { CardProps } from '../../../components/Card'

type ServiceListProps = {
  data: CardProps[]
}
export function ServiceList({  data  }: ServiceListProps) {
  return (
    <section style={{ height: '100%' }}>
      <div className='grid-md2-xl1'>
        {data.map((service, index: number) => (
          <Card
            key={index}
            {...service}
          />
        ))}
      </div>
</section>
  );
}