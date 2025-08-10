import { CardGrid } from '../../layout/CardGrid'
import { Container } from '../../layout/Container'
import { SkillGrid } from './SkillPageSkillGrid'
import { ToolsCloud } from './SkillPageToolsCloud'
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
      <Container span={{ default: 12}}>
        <SkillGrid 
        title='Design Technologien'
          data={designSkillsData}
        />
      </Container>
      <Container span={{ default: 12}}>

        <SkillGrid 
          title="Web Technologien"
          data={webSkillsData}
        />
              </Container>


      <Container span={{ default: 12 }}><CardGrid className='grid-xs2-lg4' data={designProcessData}><h2>Design Process</h2></CardGrid></Container>

      <Container span={{ default: 12}}>
        <ToolsCloud 
          title="Tools & Software"
          data={toolsData}
        />
              </Container>
        <Container span={{ default: 12 }}><CardGrid className='grid-xs2-lg4' data={achievementsData}><h2>Erfolge & Meilensteine</h2></CardGrid></Container>
        <Container span={{ default: 12 }}><CTASection data={ctaData} /></Container>   
        
    </main>
  )
}