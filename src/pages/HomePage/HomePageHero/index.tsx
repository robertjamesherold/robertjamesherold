import styles from './_Hero.module.scss'
import { Link } from 'react-router-dom'
import { CodeAnimation } from './HeroCodeAnimation';
import { GitHubIcon, LinkedInIcon, MailIcon } from '/src/assets/icons';




export function Hero() {
    return (
        <section>
            <div className='grid-lg2'>
            <div className={ styles.heroContent }>
                <h1>Hallo, ich bin <span><h1 className='colored'>Robert James</h1></span></h1>
                <h3> Mediendesigner</h3>
                <div className='grid-sm2 paddingTopSmall paddingBottomSmall'>
                    <Link to="/projekte" className='buttonprimary'>Meine Projekte</Link>
                    <Link to="/kontakt" className='buttonsecondary'>Kontakt aufnehmen</Link>
                </div>
                <div className={styles.socialLinks}>
                    <GitHubIcon height='2.75em' width='2.75em'/>
                    <LinkedInIcon height='2.75em' width='2.75em'/>
                    <MailIcon height='2.75em' width='2.75em'/>
                </div>
            </div>
            <CodeAnimation />
        </div>
        </section>


    )
}

