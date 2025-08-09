import React from 'react'
import { Link } from 'react-router-dom'
import { Container } from '../../layout/Container'
import styles from './NotFoundPage.module.scss'

export function NotFoundPage() {
  return (
    <main style={{minHeight: '65vh', justifyContent: 'center', display:'flex', alignItems:'center'}}>
      <Container span={{ default: 12 }}>
        <div className={styles.content}>
          <h1 className={styles.errorCode}>404</h1>
          <h2 className={styles.title}>Seite nicht gefunden</h2>
          <p className={styles.description}>
            Die gesuchte Seite existiert leider nicht oder wurde verschoben.
          </p>
          <div className={styles.actions}>
                    <div className='grid-md2'>

            <Link to="/" className='buttonprimary'>
              Zur Startseite
            </Link>
            <Link to="/projekte" className='buttonsecondary'>
              Meine Projekte
            </Link>
          </div>
        </div>
                </div>

      </Container>
    </main>
  )
}

export default NotFoundPage