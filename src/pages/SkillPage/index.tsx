import React from 'react';
import { Container } from '../../layout/Container'
import { SkillGrid } from './SkillPageSkillGrid'
import { ProcessGrid } from './SkillPageProcessGrid'
import { ToolsCloud } from './SkillPageToolsCloud'
import { AchievementsGrid } from './SkillPageAchievementsGrid'
import { 
  designSkillsData, 
  webSkillsData, 
  designProcessData, 
  achievementsData, 
  toolsData 
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

      <Container span={{ default: 12}}>

        <ProcessGrid 
          title="Design Process"
          data={designProcessData}
        />
              </Container>

      <Container span={{ default: 12}}>
        <ToolsCloud 
          title="Tools & Software"
          data={toolsData}
        />
              </Container>

      <Container span={{ default: 12}}>

        <AchievementsGrid 
          title="Erfolge & Meilensteine"
          data={achievementsData}
        />
              </Container>

    </main>
  )
}