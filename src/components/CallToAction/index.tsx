import { Flexbox } from '../Flexbox'
import { Button } from '../../ui/Button'

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
    <section>
      <div className='card backgroundGradient' >
        <div className='cardcontent aligncenter'>
          <h3 className='textcenter' style={{ color: 'white' }}>{title}</h3>
          <p className='carddescription textcenter' style={{ maxWidth: '60vw', color: 'white' }} >{text}</p>
          <Flexbox width='fit-content' justify='center' align='center'>
          <div className={isTwo ? 'grid-sm2' : ''}>
            {isTwo && <Button variant={secondaryVar} action={secondaryButtonLink} isPrimary={true} width='100% ' text={secondaryButtonText} />}
            <Button variant={primaryVar} action={primaryButtonLink} isPrimary={false} width='fit-content' text={primaryButtonText} />
          </div>


          </Flexbox>
        </div>
      </div>
    </section>
  )
}




export function CTASection({ data }: CTASectionProps) {
  return (
    <>


      {data.map((content, index) => (
        <CallToAction key={index}
          {...content}
        />
      ))}
    </>
  )
}