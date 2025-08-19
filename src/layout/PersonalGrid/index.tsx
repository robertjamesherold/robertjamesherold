import { useRef, useEffect} from 'react';
import { Section,  Container } from '../GridLayout';
import { Stat, type StatCardProps } from '../../components/StatCard';

export type PersonalProps = {
    title: string;
    text: string[];
    stats: StatCardProps[];
}

export type PersonalData = {
    data: PersonalProps;
    id: string;
    title?: string;
    isPadding: boolean
}



export function PersonalGrid( {data, id, title, isPadding} : PersonalData) {
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const slider = sliderRef.current;
    let animationFrameId: number;
    let position = 0;

    const step = () => {
      position -= 1; // Geschwindigkeit
      if (slider && position <= -(slider.scrollWidth) / 2) {
        position = 0;
      }
      if (slider) {
        slider.style.transform = `translateX(${position}px)`;
      }
      animationFrameId = requestAnimationFrame(step);
    };

    animationFrameId = requestAnimationFrame(step);

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
  <Section id={id} isPaddingTop={isPadding}>
    <Container>
    {title &&     <h2 className='underlined-mid textcenter marginBottomSmall'>{title}</h2>}
    <div className='card'>
      <div className='personalContent'>
      <div className='personalGrid'>

          {/* Desktop-Grid (sichtbar ab lg) */}
          <div className='personalStats'>
            {[...data.stats].map((stat, index) => (
              <Stat key={index} {...stat} />
            ))}
          </div>

          {/* Mobile-Slider (nur bis lg sichtbar) */}
          <div className='statsSliderWrapper'>
            <div className='statsSliderTrack' ref={sliderRef}>
              {[...data.stats, ...data.stats].map((stat, index) => (
                <Stat key={index} {...stat} />
              ))}
            </div>
          </div>

          <div className='personalText'>
            <h2 className='personalTitle'>{data.title}</h2>
              
              {data.text.map((text, index)=>
              <p key={index}>{text}</p>)}
          </div>
        </div>
        
      </div>
    </div>
    </Container>
    </Section>
  );
}

