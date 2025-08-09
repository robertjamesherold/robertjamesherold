import React, { useRef, useEffect } from 'react';
import styles from './_Personal.module.scss';

interface StatProps {
  number: number;
  label: string; 
}

const Stat: React.FC<StatProps> = ({ number, label }) => (
  <div className={styles.stat}>
    <span className={styles.statNumber}>{number}</span>
    <span className={styles.statLabel}>{label}</span>
  </div>
);

interface PersonalProps {
  title: string;
  text: string[];
  stats: { number: number; label: string }[];
}

function Personal({ title, text, stats }: PersonalProps) {
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
    <div className={styles.personal}>
      <div className={styles.personalContent}>
        <div className={styles.personalGrid}>

          {/* Desktop-Grid (sichtbar ab lg) */}
          <div className={styles.personalStats}>
            {stats.map((stat, index) => (
              <Stat key={index} {...stat} />
            ))}
          </div>

          {/* Mobile-Slider (nur bis lg sichtbar) */}
          <div className={styles.statsSliderWrapper}>
            <div className={styles.statsSliderTrack} ref={sliderRef}>
              {[...stats, ...stats].map((stat, index) => (
                <Stat key={index} {...stat} />
              ))}
            </div>
          </div>

          <div className={styles.personalText}>
            <h2 className={styles.personalTitle}>{title}</h2>
            {text.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export { Personal };