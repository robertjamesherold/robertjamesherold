import { cvData } from './CVData'
import { TimelineSection } from './CVTimeline'
import { SkillSection } from './CVSkills'
import { AchievementSection } from './CVAchievements'
import { LanguageSection } from './CVLanguage'
import { CallToAction } from '/src/components/CallToAction'
import { Container } from '../../layout/Container'
import { useBreakpoint } from '@ho/useBreakpoint'


export function CVPage() {
  const showDesktopContent = useBreakpoint(1024)


  return (
  <main>
  
  <Container span={{ default: 12 }}>
    <h1 className='colored'>Lebenslauf</h1>
  </Container>

            <Container span={{ default: 12 , xl: 7}}>
              <div className="grid">
               <TimelineSection title="Bildung" items={cvData.education} />
               <TimelineSection title="Berufserfahrung" items={cvData.experience} />
                              <TimelineSection title="Zusätzliche Aktivitäten" items={cvData.additionalActivities} />

              </div>
            </Container>
        
            <Container span={{ default: 12 ,xl: 5}}>
              <div className="grid">
            <SkillSection categories={cvData.skills.categories} />
            <AchievementSection title="Studienleistungen" achievements={cvData.achievements} />
            <LanguageSection languages={cvData.languages} />

              </div>  </Container>  
   
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