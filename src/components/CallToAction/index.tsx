import { Flexbox } from '../Flexbox'
import { Button } from '../../ui/Button'
import { Container, Section } from '../../layout/GridLayout';

export type CallToActionProps = {
  title?: string;
  text?: string;
  primaryVar?: 'button' | 'link' | 'alink';
  primaryButtonText?: string;
  primaryButtonLink?: string;
  isTwo?: boolean;
  secondaryVar?: 'button' | 'link' | 'alink';
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
}

export type CTASectionProps = {
  data: CallToActionProps[],
  isSection: boolean,
  id: string,
  isPadding:boolean

}

export function CallToAction({
  title,
  text,
  primaryVar,
  primaryButtonText,
  primaryButtonLink,
  isTwo,
  secondaryVar,
  secondaryButtonText,
  secondaryButtonLink,
}: CallToActionProps) {
  return (
      <div className='card backgroundGradient' >
        <div className='cardCTAcontent aligncenter'>
          <h3 className='textcenter' style={{ color: 'white' }}>{title}</h3>
          <p className='carddescription textcenter' style={{ maxWidth: '60vw', color: 'white' }} >{text}</p>
          <Flexbox width='fit-content' justify='center' align='center'>
          <div className={isTwo ? 'grid-sm2' : ''}>
            {isTwo && <Button variant={secondaryVar} action={secondaryButtonLink} isPrimary={true} width='100%' text={secondaryButtonText} />}
            <Button variant={primaryVar} action={primaryButtonLink} isPrimary={false} width='100%' text={primaryButtonText} />
          </div>


          </Flexbox>
        </div>
      </div>
  )
}




export function CTASection({ data , isSection = true , id , isPadding}: CTASectionProps) {
  return(
    <>

    {isSection && <Section id={id} isPaddingTop={isPadding}>
      {data.map((content, index) => (
        <CallToAction key={index}
          {...content}
        />
       
      ))} </Section>}

      {!isSection && <Container>
      {data.map((content, index) => (
        <CallToAction key={index}
          {...content}
        />
       
      ))} </Container>}
    </>
  )

}