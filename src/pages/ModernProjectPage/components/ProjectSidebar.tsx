// components/ProjectSidebar/index.tsx
import { useState } from 'react'
import styles from './ProjectSidebar.module.scss'

interface ProjectSidebarProps {
  client: string
  date: string
  duration: string
  category: string
  tags: string[]
  collapsed: boolean
  onToggle: () => void
}

export function ProjectSidebar({
  client,
  date,
  duration,
  category,
  tags,
  collapsed,
  onToggle
}: ProjectSidebarProps) {
  const [copiedLink, setCopiedLink] = useState(false)

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href)
    setCopiedLink(true)
    setTimeout(() => setCopiedLink(false), 2000)
  }

  return (
    <aside className={`${styles.sidebar} ${collapsed ? styles.collapsed : ''}`}>
      {/* Toggle Button */}
      <button className={styles.toggleBtn} onClick={onToggle}>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          {collapsed ? (
            <path d="M7 4L13 10L7 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          ) : (
            <path d="M13 4L7 10L13 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          )}
        </svg>
      </button>

      {/* Sidebar Content */}
      <div className={styles.sidebarContent}>
        {/* Project Details Card */}
        <div className={styles.detailsCard}>
          <h3 className={styles.cardTitle}>Projektdetails</h3>
          
          <div className={styles.detailItem}>
            <span className={styles.detailLabel}>Kunde</span>
            <span className={styles.detailValue}>{client}</span>
          </div>
          
          <div className={styles.detailItem}>
            <span className={styles.detailLabel}>Datum</span>
            <span className={styles.detailValue}>{date}</span>
          </div>
          
          <div className={styles.detailItem}>
            <span className={styles.detailLabel}>Dauer</span>
            <span className={styles.detailValue}>{duration}</span>
          </div>
          
          <div className={styles.detailItem}>
            <span className={styles.detailLabel}>Kategorie</span>
            <span className={styles.detailValue}>{category}</span>
          </div>
        </div>

        {/* Tags */}
        <div className={styles.tagsCard}>
          <h3 className={styles.cardTitle}>Technologien</h3>
          <div className={styles.tagsList}>
            {tags.map((tag, index) => (
              <span key={index} className={styles.techTag}>
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className={styles.actionsCard}>
          <button className={styles.actionBtn} onClick={handleShare}>
            {copiedLink ? (
              <>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M5 10L8 13L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
                <span>Kopiert!</span>
              </>
            ) : (
              <>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M14 11V14C14 15.1046 13.1046 16 12 16H6C4.89543 16 4 15.1046 4 14V8C4 6.89543 4.89543 6 6 6H9M12 4H16M16 4V8M16 4L9 11" 
                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>Teilen</span>
              </>
            )}
          </button>
          
          <button className={styles.actionBtn}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M10 2L12.09 7.26L18 8.27L14 12.14L14.81 18L10 15.27L5.19 18L6 12.14L2 8.27L7.91 7.26L10 2Z" 
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span>Favorit</span>
          </button>
        </div>
      </div>
    </aside>
  )
}
