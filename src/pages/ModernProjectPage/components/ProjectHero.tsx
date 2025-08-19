// components/ProjectHero/index.tsx
import styles from './ProjectHero.module.scss'

interface ProjectHeroProps {
  title: string
  subtitle: string
  category: string
  heroImage?: string
  tags?: string[]
}

export function ProjectHero({ title, subtitle, category, heroImage, tags }: ProjectHeroProps) {
  return (
    <section className={styles.hero}>
      {/* Background Image with Overlay */}
      <div className={styles.heroBackground}>
        {heroImage && (
          <img src={heroImage} alt={title} className={styles.heroImage} />
        )}
        <div className={styles.heroOverlay} />
        <div className={styles.heroPattern} />
      </div>

      {/* Content */}
      <div className={styles.heroContent}>
        <div className={styles.heroMeta}>
          <span className={styles.category}>{category}</span>
          <span className={styles.divider}>•</span>
          <span className={styles.year}>2024</span>
        </div>

        <h1 className={styles.heroTitle}>
          {title.split(' ').map((word, i) => (
            <span key={i} className={styles.titleWord} style={{ animationDelay: `${i * 0.1}s` }}>
              {word}{' '}
            </span>
          ))}
        </h1>

        <p className={styles.heroSubtitle}>{subtitle}</p>

        {tags && tags.length > 0 && (
          <div className={styles.heroTags}>
            {tags.map((tag, index) => (
              <span key={index} className={styles.tag}>
                {tag}
              </span>
            ))}
          </div>
        )}

    
      </div>
    </section>
  )
}

