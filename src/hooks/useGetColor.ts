export function useGetColor() {

const getDefaultColor = (index: number): string => {
  const colors = [
    '#F24E1E', '#31A8FF', '#FF9A00', '#FF3366', '#9999FF', 
    '#E34F26', '#1572B6', '#F7DF1E', '#21759B', '#F05032',
    '#FDB300', '#fd00cfff', '#00D2FF', '#FF6B6B', '#4ECDC4'
  ];
  return colors[index % colors.length];
  };
}