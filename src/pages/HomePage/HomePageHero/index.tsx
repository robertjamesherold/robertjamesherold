import styles from './_Hero.module.scss'
import { Link } from 'react-router-dom'
import { CodeAnimation } from './HeroCodeAnimation';
import { GitHubIcon, LinkedInIcon, MailIcon } from '/src/assets/icons';
import { Button } from '../../../ui/Button';
import { Flexbox } from '../../../components/Flexbox';




export function Hero() {
    return (
        <div className='grid-lg2'>
            <div className={ styles.heroContent }>
                <h1>Hallo, ich bin <span><h1 className='colored'>Robert James</h1></span></h1>
                <h3> Mediendesigner</h3>
                <div className='grid-sm2 paddingTopSmall paddingBottomSmall'>
                    <Button variant='link' isPrimary={true} action='/projekte' text='Meine Projekte' width='100%' isCentered={true} />
                    <Button variant='link' isPrimary={false} action='/kontakt' text='Kontakt aufnehmen' width='100%' isCentered={true} />
                </div>
                <Flexbox flex='row' gap='small'>
                    <GitHubIcon height='2.75em' width='2.75em'/>
                    <LinkedInIcon height='2.75em' width='2.75em'/>
                    <MailIcon height='2.75em' width='2.75em'/>
                </Flexbox>
            </div>
            <CodeAnimation />
        </div>


    )
}

