import { timelineData, serviceData, personalData } from './StoryPageData'
import { Container } from '../../layout/Container'
import { TimelineSection } from './StoryPageTimeline'
import { ServiceList } from './StoryPageServiceList'
import { Personal }from './StoryPagePersonal'
import { CallToAction } from '../../components/CallToAction'


export function StoryPage() {


 return (
    <main>
    
                   <Container span={{ default: 12 }}><h1 className='colored textcenter'>Meine Story</h1></Container>
               <Container span={{ default: 12, xl: 8 }}> <div className='twoRowGrid'>                    
          <TimelineSection            title="Mein Weg zur Entwicklung"
            items={timelineData}
       />
       
         <CallToAction 
          title='Bereit für Ihr nächstes Design-Projekt?'
          text='Lassen Sie uns gemeinsam Ihre Ideen visuell zum Leben erwecken. Ich freue mich auf Ihre Nachricht!'
          primaryButtonText='Kontaktiere mich'
          primaryButtonLink='/kontakt'
          showPrimaryButton={true}
          showSecondaryButton={false}
        /></div>
                  </Container>

            <Container span={{ default: 12, xl: 4 }}>                    
          <ServiceList
            title="Was mich antreibt?"
            data={serviceData}
          />
           </Container>
    <Container span={{ default: 12 }}>
        <Personal 
          title={personalData.title}
          text={personalData.text}
          stats={personalData.stats}
        />
        </Container>
    

            
      

    
    </main>
  )
}