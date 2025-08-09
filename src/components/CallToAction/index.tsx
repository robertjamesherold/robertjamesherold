import styles from './_CallToAction.module.scss'
import { Link } from 'react-router-dom'


export default interface CallToActionProps {
  title?: string;
  text?: string;
  primaryButtonText?: string;
  primaryButtonLink?: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
  linkOne?: boolean;
  linkTwo?: boolean;
  showPrimaryButton?: boolean;
  showSecondaryButton?: boolean;
}
function CallToAction({  
  title = '',
  text = '',
  primaryButtonText = '',
  primaryButtonLink = '',

  linkOne = false,
  showPrimaryButton = true,
 }: CallToActionProps) {
  return (
    <section>
    <div className='card backgroundGradient' >
    <div className='cardcontent aligncenter'>      
    <h3 className='textcenter' style={{color: 'white'}}>{title}</h3>
    <p className='carddescription textcenter' style={{ maxWidth: '60vw', color: 'white'}} >{text}</p>
      <div className={styles.ctaButtons}>
        {showPrimaryButton && linkOne && <a href={primaryButtonLink} className='buttonsecondary'>
          {primaryButtonText}
        </a>}
        {showPrimaryButton && !linkOne && <Link to={primaryButtonLink} className='buttonsecondary'>
          {primaryButtonText}
        </Link>}
 
              </div>

      </div>
      </div>
    </section>
  )
}
export { CallToAction };
