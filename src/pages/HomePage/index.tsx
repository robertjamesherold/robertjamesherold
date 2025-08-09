import { statsData, serviceData, projectData } from './HomePageData'
import { Container } from '../../layout/Container'
import { Hero } from './HomePageHero' 
import { StatsCards } from './HomePageStatsCards'
import { CardGrid } from '../../layout/CardGrid'
import { ProjectList } from './HomePageProjectList'
import { CallToAction } from '../../components/CallToAction'




export function HomePage() {

  return (
  <main>
    <Container span={{ default: 12}}><Hero /></Container>
    <Container span={{ default: 12 }}><StatsCards data={statsData} /></Container>
    <Container span={{ default: 12 }}><CardGrid className='grid-sm2-xl4' data={serviceData}><h2>Meine Dienstleistungen</h2></CardGrid></Container>
    <Container span={{ default: 12 }}>
        <ProjectList
                title="Meine Projekte"
                data={projectData}
                showCta={true}
                link="/projekte"
                cta="Projekte ansehen"
            />
    </Container>
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