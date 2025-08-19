// DynamicProjectPageUniversal/index.tsx - Aktualisierte Version mit Collapsible Sidebar
import { useState, useEffect } from 'react'
import { Container } from '../../../layout/Container'
import { ProjectPageMeta } from '../DynamicProjectPageMeta'
import { ProjectPageContent } from '../DynamicProjectPageContent'
import { ProjectPageNav } from '../DynamicProjectPageNav'
import { Header } from '../../../layout/Header'
import { Button } from '../../../ui/Button'
import {  Section } from '../../../layout/GridLayout'
import styles from './DynamicProjectPageUniversal.module.scss'

// Typen bleiben gleich
export type VideoItem = {
  id: number | string
  url: string
  title?: string
  caption?: string
  poster?: string
  type?: 'mp4' | 'webm' | 'youtube' | 'vimeo'
}

export type GalleryItem = {
  id: number
  url: string
  category: string
}

export type ProjectSection = {
  id: string
  title?: string
  content?: string
  videos?: VideoItem[]
  gallery?: GalleryItem[]
  images?: string[]
}

export type ProjectPageData = {
  title: string | string[] | React.ReactNode
  subtitle: string | string[] | React.ReactNode
  client?: string
  date?: string
  duration?: string
  category?: string
  tags?: string[]
  sections: ProjectSection[]
  imageMap?: Record<string, string>
}

export type DynamicUniversalProjectPageProps = {
  projectPageData: ProjectPageData
}

export function DynamicUniversalProjectPage({ projectPageData }: DynamicUniversalProjectPageProps) {
  const [activeSection, setActiveSection] = useState<string>('')
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(true) // Sidebar State
  const [isMobile, setIsMobile] = useState<boolean>(false)

  // Check if mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 768
      setIsMobile(mobile)
      // Auf Mobile automatisch schließen
      if (mobile) {
        setIsSidebarOpen(false)
      }
    }

    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    if (projectPageData?.sections?.length > 0 && !activeSection) {
      setActiveSection(projectPageData.sections[0].id)
    }
  }, [projectPageData, activeSection])

  if (!projectPageData) return null

  const {
    title,
    subtitle,
    client,
    date,
    duration,
    category,
    tags,
    sections,
    imageMap = {}
  } = projectPageData

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  return (
    <main className={styles.mainWrapper}>
      <Header title={title} text={subtitle} />
      <Section>
        <div className={styles.layoutContainer}>
          {/* Toggle Button */}
          <button 
            className={`${styles.sidebarToggle} ${!isSidebarOpen ? styles.closed : ''}`}
            onClick={toggleSidebar}
            aria-label={isSidebarOpen ? 'Sidebar schließen' : 'Sidebar öffnen'}
            title={isSidebarOpen ? 'Sidebar schließen' : 'Sidebar öffnen'}
          >
            <span className={styles.toggleIcon}>
              {isSidebarOpen ? '◀' : '▶'}
            </span>
          </button>

          {/* Sidebar Container */}
          <aside className={`${styles.sidebar} ${!isSidebarOpen ? styles.collapsed : ''}`}>
            <div className={styles.sidebarContent}>
              {sections.length > 1 && (
                <ProjectPageNav
                  sections={sections}
                  activeSection={activeSection}
                  onSectionClick={(sectionId) => {
                    setActiveSection(sectionId)
                    // Auf Mobile nach Klick automatisch schließen
                    if (isMobile) {
                      setIsSidebarOpen(false)
                    }
                  }}
                />
              )}
              <ProjectPageMeta
                client={client}
                date={date}
                duration={duration}
                category={category}
                tags={tags}
              />
            </div>
          </aside>

          {/* Main Content */}
          <div className={`${styles.mainContent} ${!isSidebarOpen ? styles.expanded : ''}`}>
            <ProjectPageContent
              sections={sections}
              activeSection={activeSection}
              imageMap={imageMap}
            />
          </div>
        </div>

        {/* Mobile Scroll to Top Button */}
        <Container>
          <button
            onClick={() => window.scrollTo(0, 0)}
            style={{ width: '100%', minWidth: '100%' }}
            className="hidden-md hidden-lg hidden-xl hi"
          >
            <Button
              variant="button"
              text="Zum Anfang"
              isPrimary={false}
              width="100%"
            />
          </button>
        </Container>
        </Section>
    </main>
  )
}