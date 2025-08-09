import styles from './_Header.module.scss';

export default interface HeaderProps {
  title: string;
  text: string;
  id: string
}
function Header({  title, text , id }: HeaderProps) {

  return (
      <div id={id} className={styles.header}>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.subtitle}>{text}</p>
      </div>
  )};

export { Header };
