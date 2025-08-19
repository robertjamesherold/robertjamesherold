import { story } from '../../data/Story'
import {  Grid, Section, Main } from '../../layout/GridLayout'
import { TimeLine } from '../../layout/TimeLine'
import { CardGrid } from '../../layout/CardGrid'
import { PersonalGrid }from '../../layout/PersonalGrid'
import { CTASection } from '../../components/CallToAction'
import { Header } from '../../layout/Header'


export function StoryPage() {
 return (
    <Main>
      <Header title='Meine Story' />
      <Section isPaddingTop={false} id='meine-story' min='fit-content'>
      <Grid grid={{default: 1, xl: 3}} gapCol='small' gapRow='small'>
      
      <TimeLine row={{default: 4}} span={{default: 1, xl:2}} data={story.timeLine}/>
      
      
      <CardGrid isPadding={false} isSection={false} id='Was mich ausmacht' grid={{default:1, md:2, xl:1}} span={{default:1, xl: 1}} row={{default:4}}  data={story.services} />
      </Grid>
      </Section>

      <PersonalGrid isPadding={false} id='mehr-über-mich' title='Sonstiges' data={story.personal} />
                      <CTASection isPadding={false} id='cta' isSection={true} data={story.cta} />

    </Main>
  )
}