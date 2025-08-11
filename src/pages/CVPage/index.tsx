import { educationData, additionalData, experienceData, CTAData, sidesectionData } from './CVData'
import { TimeLine } from '../../layout/TimeLine'

import { CTASection } from '../../components/CallToAction'
import { Container } from '../../layout/Container'
import { CVSideSection } from '../../layout/CVSideSection'



export function CVPage() {

  return (
  <main>
  
  <Container span={{ default: 12 }}>
    <h1 className='colored'>Lebenslauf</h1>
  </Container>

            <Container span={{ default: 12 , md: 7 }}>
              <div className="grid">
               <TimeLine title="Bildung" data={educationData} />
               <TimeLine title="Berufserfahrung" data={experienceData} />
                              <TimeLine title="Zusätzliche Aktivitäten" data={additionalData} />

              </div>
            </Container>
        
            <Container span={{ default: 12 ,md: 5}}><CVSideSection data={sidesectionData}/>              </Container>
     
                     <Container span={{ default: 12}}>

         <CTASection data={CTAData} />


         
  

        </Container>
            
      </main>
  
  )
}