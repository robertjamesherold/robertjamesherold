import React from 'react';
import styles from './_CaseStudyMeta.module.scss'

type CaseStudyMetaProps = {
  client: React.ReactNode
  date: React.ReactNode
  duration: React.ReactNode
  category: React.ReactNode
  tags: string[]
}
export function CaseStudyMeta({  client, date, duration, category, tags  }: CaseStudyMetaProps) {
  return (
    <div className='card'>
      <div className='cardtitle' style={{ paddingBottom: '1rem' }}>Projektdetails</div>
      
      <div className={styles.metaItem}>
        <h4 style={{marginBottom: '0.5rem'}}>Kunde</h4>
        <span className={styles.metaValue}>{client}</span>
      </div>
      
      <div className={styles.metaItem}>
        <h4 style={{marginBottom: '0.5rem'}}>Datum</h4>
        <span className={styles.metaValue}>{date}</span>
      </div>
      
      <div className={styles.metaItem}>
        <h4 style={{marginBottom: '0.5rem'}}>Dauer</h4>
        <span className={styles.metaValue}>{duration}</span>
      </div>
      
      <div className={styles.metaItem}>
        <h4 style={{marginBottom: '0.5rem'}} >Kategorie</h4>
        <span className={styles.metaValue}>{category}</span>
      </div>
      
      {tags && tags.length > 0 && (
        <div className={styles.metaItem}>
          <h4 style={{marginBottom: '0.5rem'}}>Tags</h4>
          <div className='bigcardtags' style={{paddingTop: '0'}}>
            {tags.map((tag, index) => (
              <span key={index} className='cardtag'>{tag}</span>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
