import { CardGrid } from '../../layout/CardGrid'
import { Container } from '../../layout/Container'
import { ProgressCardGrid } from '../../layout/ProgressCardGrid'
import { CTASection } from '../../components/CallToAction'
import { 
  designSkillsData, 
  webSkillsData, 
  designProcessData, 
  achievementsData, 
  ctaData
} from './SkillPageData'
import { Header } from '../../layout/Header'

export function SkillPage() {
  return (
    <main>
      <Header title='Skills & Technologien'/>
      <Container span={{ default: 12 }}><ProgressCardGrid className='grid-sm2-lg3' data={designSkillsData} title='Design Technologien'/></Container>
      <Container span={{ default: 12 }}><ProgressCardGrid className='grid-sm2-lg3' data={webSkillsData} title='Design Technologien'/></Container>
      <Container span={{ default: 12 }}><CardGrid className='grid-xs2-lg4' data={designProcessData} title='Design Process'></CardGrid></Container>
      <Container span={{ default: 12 }}><CardGrid className='grid-xs2-lg4' data={achievementsData} title='Erfolge & Meilensteine'></CardGrid></Container>
      <Container span={{ default: 12 }}><CTASection data={ctaData} /></Container>    
    </main>
  )
}