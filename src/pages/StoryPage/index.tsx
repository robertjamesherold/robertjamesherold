import { story } from '../../data/Story'
import { Container } from '../../layout/Container'
import { TimeLine } from '../../layout/TimeLine'
import { CardGrid } from '../../layout/CardGrid'
import { PersonalGrid }from '../../layout/PersonalGrid'
import { CTASection } from '../../components/CallToAction'
import { Flexbox } from '../../components/Flexbox'
import { Header } from '../../layout/Header'


export function StoryPage() {
 return (
    <main>
      <Header title='Meine Story' />
      <Container span={{ xl: 8}}>
        <Flexbox flex='column' gap='medium'>
          <TimeLine data={story.timeLine}/>
          <CTASection data={story.cta} />
        </Flexbox>
      </Container>
      <Container span={{ xl: 4}}><CardGrid className='grid-xs2-lg4-xl1' title='Was macht mich aus?' data={story.services}/></Container>
      <Container><PersonalGrid data={story.personal} /></Container>
    </main>
  )
}