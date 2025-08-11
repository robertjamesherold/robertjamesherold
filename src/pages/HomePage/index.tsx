import { statsData, serviceData, projectData, ctaData } from './HomePageData';
import { Container } from '../../layout/Container'
import { Hero } from './HomePageHero' 
import { StatCardGrid } from '../../layout/StatCardGrid'
import { CardGrid } from '../../layout/CardGrid'
import { BigCardGrid } from '../../layout/BigCardGrid'
import { CTASection } from '../../components/CallToAction'

export function HomePage() {
  return (
  <main>
    <Container span={{ default: 12}}><Hero /></Container>
    <Container span={{ default: 12 }}><StatCardGrid className='grid2-md4' data={statsData} /></Container>
    <Container span={{ default: 12 }}><CardGrid className='grid-sm2-xl4' data={serviceData} title='Meine Dienstleistungen'></CardGrid></Container>
    <Container span={{ default: 12 }}><BigCardGrid className='grid-lg2' data={projectData} showButton={true} title='Meine Projekte'></BigCardGrid></Container>
    <Container span={{ default: 12 }}><CTASection data={ctaData} /></Container>   
  </main>
  )
}