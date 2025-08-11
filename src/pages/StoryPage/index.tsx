import { timelineData, serviceData, personalData, ctaData } from './StoryPageData'
import { Container } from '../../layout/Container'
import { TimeLine } from '../../layout/TimeLine'
import { CardGrid } from '../../layout/CardGrid'
import { PersonalGrid }from '../../layout/PersonalGrid'
import { CTASection } from '../../components/CallToAction'
import { Flexbox } from '../../components/Flexbox'


export function StoryPage() {
 return (
    <main>
      <Container span={{ default: 12 }}>
        <h1 className='colored textcenter'>Meine Story</h1>
      </Container>
      <Container span={{ default: 12, lg: 8 }}>
        <Flexbox flex='column'>
          <TimeLine data={timelineData}/>
          <CTASection data={ctaData} />
        </Flexbox>
      </Container>
      <Container span={{ default: 12, lg: 4 }}><CardGrid className='grid-sm2-lg1' data={serviceData} title='Erfolge & Meilensteine'/></Container>
      <Container span={{ default: 12 }}><PersonalGrid data={personalData} /></Container>
    </main>
  )
}