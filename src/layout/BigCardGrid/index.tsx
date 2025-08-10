import { BigCard } from '../../components/BigCard'
import type { BigCardProps } from '../../components/BigCard'
import { type ReactNode } from 'react';
import { Column } from '../../components/Flexbox/Column';
import { Button } from '../../ui/Button';

type BigCardGridProps ={
  
  data: BigCardProps[],
  showButton: boolean,
  className: string,
  children?: ReactNode,
}
export function BigCardGrid({  data, showButton, children, className = ''}: BigCardGridProps) {
  return (
   <section>
          {children}
          <div className={className}>
            {data.map((project, index) => (
              <BigCard key={index} {...project} />
            ))}
          </div>
          {showButton && <Column width='100%' justify='center' align='center' padding='1rem 0 0 0' >
            <Button action='/projekte' variant='link' isPrimary={false} width='fit-content' isCentered={true} text='Alle Projekte'></Button>
          </Column>}
        </section>
  );
}
