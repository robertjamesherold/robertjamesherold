import { BigCard } from '../../components/BigCard'
import type { BigCardProps } from '../../components/BigCard'
import { Flexbox } from '../../components/Flexbox';
import { Button } from '../../ui/Button';

type BigCardGridProps ={
  data: BigCardProps[],
  showButton: boolean,
  className: string,
  title?: string,
}
export function BigCardGrid({  data, showButton, title, className = ''}: BigCardGridProps) {
  return (
   <section>
        <h2 className='underlined-mid textcenter marginBottomSmall'>{title}</h2>
          <div className={className}>
            {data.map((project, index) => (
              <BigCard key={index} {...project} />
            ))}
          </div>
          {showButton && <Flexbox width='100%' justify='center' align='center' padding='1rem 0 0 0' >
            <Button action='/projekte' variant='link' isPrimary={false} width='fit-content' isCentered={true} text='Alle Projekte'></Button>
          </Flexbox>}
        </section>
  );
}
