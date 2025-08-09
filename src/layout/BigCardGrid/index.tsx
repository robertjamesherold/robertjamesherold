import { BigCard } from '@cm/BigCard'
import type { BigCardProps } from '@cm/BigCard'

type BigCardGridProps ={
  
  data: BigCardProps[],
  showButton: boolean,
  className: string,
  children?: ReactNode,
}
export function BigCardGrid({  data, showButton, children, classname = 'grid-lg2'}: BigCardGridProps) {
  return (
   <section>
          {children}
          <div className={className}>
            {data.map((project, index) => (
              <BigCard key={index} {...project} />
            ))}
          </div>
          {showButton && <div style={{width:'100%', display:'flex', justifyContent:'center'}}>
            <Link to='/projekte' className='buttonprimary'>Alle Projekte</Link>
          </div>}
        </section>
  );
}
