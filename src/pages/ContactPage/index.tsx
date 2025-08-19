import { contact } from '../../data/Contact'
import { ContactForm } from './ContactPageForm'
import { CardGrid } from '../../layout/CardGrid';
import { Header } from '../../layout/Header';
import { CTASection } from '../../components/CallToAction';
import { Section, Grid } from '../../layout/GridLayout';

export function ContactPage() {
  return (
    <main>
      <Header title='Kontakt' />
        <Section id='contact' isPaddingTop={false}>
          <Grid grid={{default: 12}}>
            <ContactForm row={{default: 4}} span={{ lg: 7 }} />
            <CardGrid isSection={false} isPadding={false} id='' grid={{sm:2, lg: 1}} row={{default: 4}} span={{lg:5}} data={contact.form}/>
          </Grid>
        </Section>
      <CTASection isPadding={false} isSection={true} id='cta' data={contact.cta} />
    </main>
  )
}