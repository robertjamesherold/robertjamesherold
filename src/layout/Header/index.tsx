import styles from './_Header.module.scss';

export type HeaderProps = {
  title?: string | string[];
  text?: string | string[];
  id?: string
  children?: React.ReactNode
}
export function Header({ title, text , id , children}: HeaderProps) {

  return (
      <header id={id} className={styles.header}>
          <h1 className='colored textcenter'>{title}</h1>
          {text && <p className={`textcenter ${styles.subtitle}`}>{text}</p>}
          {children}
      </header>
  )};

