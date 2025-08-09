import { statsData, serviceData, projectData } from './HomePageData'
import { Container } from '../../layout/Container'
import { Hero } from './HomePageHero' 
import { StatCardGrid } from '../../layout/StatCardGrid'
import { CardGrid } from '../../layout/CardGrid'
import { BigCardGrid } from '../../layout/BigCardGrid'
import { CallToAction } from '../../components/CallToAction'




export function HomePage() {

  return (
  <main>
    <Container span={{ default: 12}}><Hero /></Container>
    <Container span={{ default: 12 }}><StatCardGrid className='grid2-md4' data={statsData} /></Container>
    <Container span={{ default: 12 }}><CardGrid className='grid-sm2-xl4' data={serviceData}><h2>Meine Dienstleistungen</h2></CardGrid></Container>
    <Container span={{ default: 12 }}><BigCardGrid className='grid-lg2' data={projectData} showButton={true}><h2>Meine Projekte</h2></BigCardGrid></Container>
    <Container span={{ default: 12 }}>
        <CallToAction 
          title='Bereit für Ihr nächstes Design-Projekt?'
          text='Lassen Sie uns gemeinsam Ihre Ideen visuell zum Leben erwecken. Ich freue mich auf Ihre Nachricht!'
          primaryButtonText='Kontaktiere mich'
          primaryButtonLink='/kontakt'
          showPrimaryButton={true}
          showSecondaryButton={false}
        />
    </Container>
  </main>
  )
}