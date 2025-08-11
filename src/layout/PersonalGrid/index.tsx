import { useRef, useEffect, type ReactNode } from 'react';
import { Stat, type StatCardProps } from '../../components/StatCard';

export type PersonalProps = {
  title: string;
  text: ReactNode;
  data: StatCardProps[];
  className: string;
  id: string;

}

export function PersonalGrid({data }: PersonalProps) {
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
    <div className='card'>
      <div className='personalContent'>
        <div className='personalGrid' style={{position: 'relative', gridTemplateRows: 'auto auto'}}>

          {/* Desktop-Grid (sichtbar ab lg) */}
          <div className='personalStats'>
            {data.map((stat, index) => (
              <Stat key={index} {...stat} />
            ))}
          </div>

          {/* Mobile-Slider (nur bis lg sichtbar) */}
          <div className='statsSliderWrapper'>
            <div className='statsSliderTrack' ref={sliderRef}>
              {[...data, ...data].map((stat, index) => (
                <Stat key={index} {...stat} />
              ))}
            </div>
          </div>

          <div className='personalText'>
            <h2 className='personalTitle'>{title}</h2>
            {data.map((text, index) => (
              <p key={index}>{text}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

