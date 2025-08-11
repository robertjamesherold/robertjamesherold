import styles from './ToolTagGrid.module.scss'
import { Tool } from '../../components/ToolTag'

export type ToolTagGridProps = {
  title: string;
  data: Tool[];
};

export function ToolTagGrid({ title, data }: ToolTagGridProps) {
  return (
    <section>
      <h2 className='underlined-mid textcenter marginBottomSmall'>{title}</h2>
      <div className={`${styles.toolsCloud}`}>
        {data.map((tool: Tool, index: number) => (
          <ToolTag 
            key={tool.name} 
            tool={tool} 
            index={index}
          />
        ))}
      </div>
    </section>
  )}