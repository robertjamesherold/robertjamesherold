import styles from './_Hero.module.scss'
import { CodeAnimation } from './HeroCodeAnimation';
import { GitHubIcon, LinkedInIcon, MailIcon } from '../../../assets/icons';
import { Button } from '../../../ui/Button';
import {  Grid } from '../../../layout/GridLayout';
import { Flexbox } from '../../../components/Flexbox';

export type HeroProps = {
    id: string,
    isPadding: boolean
    children: React.ReactNode
    }



export function Hero({id, isPadding, children}: HeroProps) {
    return (
     <section id={id} className={`${'section'} ${isPadding ? 'marginTop' : ''}`}>
     
     
              <Flexbox gap='large' width='full-width'>
            
              <Grid grid={{lg: 2}}>
                          <div className={ styles.heroContent }>
                <h1>Hallo, ich bin <span><h1 className='colored'>Robert James</h1></span></h1>
                <h3> Mediendesigner</h3>
                <div className='grid-sm2 paddingTopSmall paddingBottomSmall'>
                    <Button variant='link' isPrimary={true} action='/projekte' text='Meine Projekte' width='100%' isCentered={true} />
                    <Button variant='link' isPrimary={false} action='/kontakt' text='Kontakt aufnehmen' width='100%' isCentered={true} />
                </div>
                <div className={styles.socialLinks}>
                    <GitHubIcon height='2.75em' width='2.75em'/>
                    <LinkedInIcon height='2.75em' width='2.75em'/>
                    <MailIcon height='2.75em' width='2.75em'/>
                </div>
            </div>
            <CodeAnimation />
        </Grid>
        {children}
          
             </Flexbox>
</section>

   

    )
}

