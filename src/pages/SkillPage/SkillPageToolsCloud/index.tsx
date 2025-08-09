import React from 'react';
import styles from './_ToolsCloud.module.scss';

type Tool = {
  name: string;
  color?: string;
  level?: number;
  icon?: string;
  description?: string;
  category?: string;
};

type ToolTagProps = {
  tool: Tool;
  index: number;
};

const getDefaultColor = (index: number): string => {
  const colors = [
    '#F24E1E', '#31A8FF', '#FF9A00', '#FF3366', '#9999FF', 
    '#E34F26', '#1572B6', '#F7DF1E', '#21759B', '#F05032',
    '#FDB300', '#fd00cfff', '#00D2FF', '#FF6B6B', '#4ECDC4'
  ];
  return colors[index % colors.length];
};

const ToolTag: React.FC<ToolTagProps> = ({ tool, index }) => (
  <div 
    className={styles.toolTag}
    style={{ 
      '--tool-color': tool.color || getDefaultColor(index),
      opacity: 1,
      transform: 'scale(1)'
    } as React.CSSProperties}
  >
    {tool.name}
  </div>
);

type ToolsCloudProps = {
  title: string;
  data: Tool[];
};

export function ToolsCloud({ title, data }: ToolsCloudProps) {
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
  );
}