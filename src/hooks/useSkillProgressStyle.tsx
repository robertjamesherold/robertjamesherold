export type getSkillProgressStyleProps = {
  level: number;
}

export function useSkillProgressStyle(level: number) {
  return { width: `${level}%` };
}