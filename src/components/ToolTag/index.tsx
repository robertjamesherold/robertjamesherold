import useGetColors from '../../hooks/useGetColors';
import styles from './ToolTag.module.css';

export type Tool = {
  name: string;
  color: string;
};

export type ToolTagProps = {
  tool: Tool;
  index: number;
};

export function ToolTag({ tool, index }: ToolTagProps){
  return(
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
}