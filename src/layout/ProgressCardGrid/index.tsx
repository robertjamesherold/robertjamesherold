import { ProgressCard, type ProgressCardProps } from '../../components/ProgressCard';


export type ProgressCardGridProps = {
  title: string,
  data: ProgressCardProps[],
  className: string
}

export function ProgressCardGrid({ title, data, className }: ProgressCardGridProps) {
  return (
    <section>
      <h2 className='underlined-mid textcenter marginBottomSmall'>{title}</h2>
      <div className={className}>
        {data.map((item) => (
          <ProgressCard
            key={item.id}
            name={item.name}
            text={item.text}
            icon={item.icon}
            level={item.level}
            id={String(item.id)}
          />
        ))}
      </div>
    </section>
  );
}