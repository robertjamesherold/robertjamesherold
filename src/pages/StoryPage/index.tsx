import { timelineData, serviceData, personalData, ctaData } from './StoryPageData'
import { Container } from '../../layout/Container'
import { Timeline } from '../../layout/Timeline'
import { CardGrid } from '../../layout/CardGrid'
import { PersonalGrid }from '../../layout/PersonalGrid'
import { CTASection } from '../../components/CallToAction'


export function StoryPage() {
 return (
    <main>
      <Container span={{ default: 12 }}>
        <h1 className='colored textcenter'>Meine Story</h1>
      </Container>
      <Container span={{ default: 12, lg: 8 }}>
        <div className='twoRowGrid'>
          <Timeline items={timelineData}/>
          <CTASection data={ctaData} />
        </div>
      </Container>
      <Container span={{ default: 12, lg: 4 }}>
        <CardGrid className='grid-sm2-lg1' data={serviceData} title='Erfolge & Meilensteine'></CardGrid>
      </Container>
      <Container span={{ default: 12 }}>
        <PersonalGrid
          title='Mehr über mich'
          text={personalData.text}
          data={personalData.stats}
        />
      </Container>
    </main>
  )
}