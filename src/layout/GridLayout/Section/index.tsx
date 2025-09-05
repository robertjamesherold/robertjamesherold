import styles from './_Section.module.scss';

export interface SectionProps {
  children: React.ReactNode;
}
function Section({  children }: SectionProps) {


  return (
    <div className={styles.section}>
        {children}
    </div>
  );
}
export { Section };