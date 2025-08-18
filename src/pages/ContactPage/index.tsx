import { contact } from '../../data/Contact'
import { Container } from '../../layout/Container'
import { ContactForm } from './ContactPageForm'
import { CardGrid } from '../../layout/CardGrid';
import { Header } from '../../layout/Header';
import { CTASection } from '../../components/CallToAction';

export function ContactPage() {
  return (
    <main>
      <Header title='Kontakt' />
      <Container span={{ lg: 7}}><ContactForm /></Container>
      <Container span={{ lg: 5 }}><CardGrid className='grid-sm2-lg1' data={contact.form}/></Container>
      <Container><CTASection data={contact.cta} /></Container>
    </main>
  )
}