import { cv, sidesection } from '../../data/CV'
import { TimeLineContainer } from '../../layout/TimeLine'
import { CTASection } from '../../components/CallToAction'
import { Container } from '../../layout/Container'
import { CVSideSection } from '../../layout/CVSideSection'
import { Header } from '../../layout/Header'
import { Grid, Section } from '../../layout/GridLayout'
import { Flexbox } from '../../components/Flexbox'



export function CVPage() {

  return (
    <main>
      <Header title='Lebenslauf'/>
      <Section id='cv' isPaddingTop={false}>
      <Grid grid={{default: 1, xl:3}}>
      <Container span={{default: 1, xl: 2}}>
      <Flexbox gap='large'>
      <TimeLineContainer span={{default: 1, xl: 2}} title="Bildung" data={cv.education} />
      <TimeLineContainer span={{default: 1, xl: 2}}   title="Berufserfahrung" data={cv.experience} />
      <TimeLineContainer span={{default: 1, xl: 2}}  title="Zusätzliche Aktivitäten" data={cv.additional} />
      </Flexbox></Container>
      <CVSideSection data={sidesection} />
      </Grid></Section>
      <CTASection id='cta' isSection={true} isPadding={true} data={cv.cta} />
    </main>

  )
}