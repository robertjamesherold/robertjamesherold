import styles from './Main.module.scss'
import type { MainProps } from './Main.types'

export default function Main ({children}: MainProps){
    return(
        <main className={styles.main}>
            {children}
        </main>
    )
}