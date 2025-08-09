export function useToolsAnimation(threshold = 0.3) {

  const getToolTagStyle = (index, color) => ({
    animationDelay: `${index * 0.05}s`,
    '--tool-color': color
  });

  return {
    elementRef,
    getToolTagStyle
  };
}