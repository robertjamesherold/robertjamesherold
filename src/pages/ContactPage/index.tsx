import { contact } from '../../data/Contact'
import { Container } from '../../layout/Container'
import { FormCard } from './ContactPageForm'
import { CardGrid } from '../../layout/CardGrid';
import { Header } from '../../layout/Header';

export function ContactPage() {
  return (
    <main>
      <Header title='Kontakt' />
      <Container span={{ lg: 7}}><FormCard /></Container>
      <Container span={{ lg: 5 }}><CardGrid className='grid-sm2-lg1' data={contact.data}/></Container>
         
    </main>
  )
}