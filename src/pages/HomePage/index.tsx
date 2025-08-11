import { home } from '../../data/Home' 
import { Container } from '../../layout/Container'
import { Hero } from './HomePageHero' 
import { StatCardGrid } from '../../layout/StatCardGrid'
import { CardGrid } from '../../layout/CardGrid'
import { BigCardGrid } from '../../layout/BigCardGrid'
import { CTASection } from '../../components/CallToAction'
import { Header } from '../../layout/Header'

export function HomePage() {
  return (
  <main>
    <Header><Hero /></Header>
    <Container><StatCardGrid className='grid2-md4' data={home.stats} /></Container>
    <Container><CardGrid className='grid-sm2-xl4' data={home.services} title='Meine Dienstleistungen'></CardGrid></Container>
    <Container><BigCardGrid className='grid-lg2' data={home.projects} showButton={true} title='Meine Projekte'></BigCardGrid></Container>
    <Container><CTASection data={home.cta} /></Container>   
  </main>
  )
}