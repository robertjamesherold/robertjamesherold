import { CardGrid } from '../../layout/CardGrid'
import { Container } from '../../layout/Container'
import { ProgressCardGrid } from '../../layout/ProgressCardGrid'
import { ToolTagGrid } from '../../layout/ToolTagGrid'
import { CTASection } from '../../components/CallToAction'
import { 
  designSkillsData, 
  webSkillsData, 
  designProcessData, 
  achievementsData, 
  toolsData, 
  ctaData
} from './SkillPageData'

export function SkillPage() {
  return (
    <main>
      <Container span={{ default: 12 }}><h1 className='colored textcenter'>Skills & Technologien</h1></Container>
      <Container span={{ default: 12 }}><ProgressCardGrid className='grid-sm2-xl3' data={designSkillsData} title='Design Technologien'/></Container>
      <Container span={{ default: 12 }}><ProgressCardGrid className='grid-sm2-xl3' data={webSkillsData} title='Design Technologien'/></Container>
      <Container span={{ default: 12 }}><CardGrid className='grid-xs2-lg4' data={designProcessData} title='Design Process'></CardGrid></Container>
      <Container span={{ default: 12 }}><ToolTagGrid data={toolsData} title="Tools & Software"/></Container>
      <Container span={{ default: 12 }}><CardGrid className='grid-xs2-lg4' data={achievementsData} title='Erfolge & Meilensteine'></CardGrid></Container>
      <Container span={{ default: 12 }}><CTASection data={ctaData} /></Container>    
    </main>
  )
}