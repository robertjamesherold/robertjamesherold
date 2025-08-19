import { home } from '../../data/Home' 
import { Hero } from './HomePageHero' 
import { StatCardGrid } from '../../layout/StatCardGrid'
import { CardGrid } from '../../layout/CardGrid'
import { BigCardGrid } from '../../layout/BigCardGrid'
import { CTASection } from '../../components/CallToAction'

export function HomePage() {
  return (
  <main>
    <Hero id='hero' isPadding={true}><StatCardGrid isPadding={false} isSection={false} id='stats' grid={{default: 2, md:4}} data={home.stats} /></Hero>
    <CardGrid isPadding={true} isSection={true} id='dienstleistungen' grid={{sm: 2, xl:4}} data={home.services} title='Meine Dienstleistungen'></CardGrid>
    <BigCardGrid isPadding={true} id='projects' grid={{lg:2}} data={home.projects} showButton={true} title='Meine Projekte'></BigCardGrid>
    <CTASection isPadding={true} isSection={true} id='cta' data={home.cta}/>
  </main>
  )
}