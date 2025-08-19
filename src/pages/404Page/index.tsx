
import { notfound } from '../../data/404'
import styles from './NotFoundPage.module.scss'
import { Button } from '../../ui/Button'
import { Flexbox } from '../../components/Flexbox'
import { Section, Container } from '../../layout/GridLayout'

export type NotFoundPageData = {
  title: string
  subtitle: string
  text: string
  primaryButton: string
  secondaryButton: string
}

export function NotFoundPage() {
  return (
    <main style={{minHeight: '65vh', justifyContent: 'center', display:'flex', alignItems:'center'}}>
      <Section id='404' isPaddingTop={false}>
      <Container>
        <Flexbox justify='center' align='center'>
          <h1 className={styles.errorCode}>{notfound.title}</h1>
          <h2 className='textcenter'>{notfound.subtitle}</h2>
          <p className='textcenter'>{notfound.text}</p>
          <div className={styles.actions}>
            <div className='grid-md2'>
              <Button variant='link' action='/' isPrimary={true} text={notfound.primary} />
              <Button variant='link' action='/projekte' isPrimary={false} text={notfound.secondary} />
            </div>
          </div>
        </Flexbox>
      </Container>
      </Section>
    </main>
  )
}
export default NotFoundPage