import { CardGrid } from '../../layout/CardGrid'
import { ProgressCardGrid } from '../../layout/ProgressCardGrid'
import { CTASection } from '../../components/CallToAction'
import { skills } from '../../data/Skill'
import { Header } from '../../layout/Header'

export function SkillPage() {
  return (
    <main>
      <Header title='Skills & Technologien'/>
      <ProgressCardGrid grid={{default:1, sm: 2, lg: 3}} isPadding={false} id='designtechnologien' data={skills.design} title='Design Technologien'/>
      <ProgressCardGrid  grid={{default:1, sm: 2, lg: 3}} isPadding={false} id='webtechnologien' data={skills.web} title='Web Technologien'/>
      <CardGrid isSection={true} grid={{default:1, sm: 2, xl: 4}} isPadding={false} id='designprozess' data={skills.process} title='Design Process'/>
      <CardGrid isSection={true} grid={{default:1, sm: 2, xl: 4}} isPadding={false} id='achievements' data={skills.achievements} title='Erfolge & Meilensteine'/>
      <CTASection id='cta' isSection={true} isPadding={true} data={skills.cta} />   
    </main>
  )
}