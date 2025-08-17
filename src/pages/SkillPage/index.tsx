import { CardGrid } from '../../layout/CardGrid'
import { Container } from '../../layout/Container'
import { ProgressCardGrid } from '../../layout/ProgressCardGrid'
import { CTASection } from '../../components/CallToAction'
import { skills } from '../../data/Skill'
import { Header } from '../../layout/Header'

export function SkillPage() {
  return (
    <main>
      <Header title='Skills & Technologien'/>
      <Container ><ProgressCardGrid className='grid-sm2-lg3' data={skills.design} title='Design Technologien'/></Container>
      <Container ><ProgressCardGrid className='grid-sm2-lg3' data={skills.web} title='Design Technologien'/></Container>
      <Container ><CardGrid className='grid-sm2-xl4' data={skills.process} title='Design Process'></CardGrid></Container>
      <Container ><CardGrid className='grid-sm2-xl4' data={skills.achievements} title='Erfolge & Meilensteine'></CardGrid></Container>
      <Container ><CTASection data={skills.cta} /></Container>    
    </main>
  )
}