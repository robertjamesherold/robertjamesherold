import { timelineData, serviceData, personalData, ctaData } from './StoryPageData'
import { Container } from '../../layout/Container'
import { TimelineSection } from './StoryPageTimeline'
import { CardGrid } from '../../layout/CardGrid'
import { Personal }from './StoryPagePersonal'
import { CTASection } from '../../components/CallToAction'


export function StoryPage() {


 return (
    <main>
      <Container span={{ default: 12 }}><h1 className='colored textcenter'>Meine Story</h1></Container>
      <Container span={{ default: 12, lg: 8 }}> 
        <div className='twoRowGrid'>
          <TimelineSection items={timelineData}/>
          <CTASection data={ctaData} />
        </div>
      </Container>
      <Container span={{ default: 12, lg: 4 }}><CardGrid className='grid-sm2-lg1' data={serviceData} title='Erfolge & Meilensteine'></CardGrid></Container>
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