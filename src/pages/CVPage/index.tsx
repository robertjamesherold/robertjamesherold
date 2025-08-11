import { cv, sidesection } from '../../data/CV'
import { TimeLine } from '../../layout/TimeLine'
import { CTASection } from '../../components/CallToAction'
import { Container } from '../../layout/Container'
import { CVSideSection } from '../../layout/CVSideSection'
import { Header } from '../../layout/Header'



export function CVPage() {

  return (
    <main>
      <Header title='Lebenslauf'/>
      <Container span={{ default: 12, md: 7 }}><div className="grid"><TimeLine title="Bildung" data={cv.education} /><TimeLine title="Berufserfahrung" data={cv.experience} /><TimeLine title="Zusätzliche Aktivitäten" data={cv.additional} /></div></Container>
      <Container span={{ default: 12, md: 5 }}><CVSideSection data={sidesection} /></Container>
      <Container span={{ default: 12 }}><CTASection data={cv.cta} /></Container>
    </main>

  )
}