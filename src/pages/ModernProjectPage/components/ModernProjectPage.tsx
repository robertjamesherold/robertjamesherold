// ModernProjectPage/index.tsx
import { useState, useEffect, useRef } from 'react'
import styles from './ModernProjectPage.module.scss'
import { ProjectHero } from './ProjectHero'
import { ProjectSidebar } from './ProjectSidebar'
import { ProjectContent } from './ProjectContent'
import { FloatingNav } from './FloatingNav'
import { ProjectGalleryGrid } from './ProjectGalleryGrid'
import { ProjectNavigation } from './ProjectNavigation'

// Types
export type VideoItem = {
  id: number | string
  url: string
  title?: string
  caption?: string
  poster?: string
  type?: 'mp4' | 'webm' | 'youtube' | 'vimeo'
}

export type GalleryItem = {
  id: number | string
  url: string
  caption?: string
  category?: string
}

export type ProjectSection = {
  id: string
  title: string
  content?: string
  videos?: VideoItem[]
  gallery?: GalleryItem[]
  type?: 'text' | 'gallery' | 'video' | 'mixed'
}

export type ProjectData = {
  id: string
  slug: string
  title: string
  subtitle: string
  heroImage?: string
  client: string
  date: string
  duration: string
  category: string
  tags: string[]
  sections: ProjectSection[]
  color?: string // Accent color for this project
}

interface ModernProjectPageProps {
  projectData: ProjectData
}

export function ModernProjectPage({ projectData }: ModernProjectPageProps) {
  const [activeSection, setActiveSection] = useState<string>('')
  const [isScrolled, setIsScrolled] = useState(false)
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)
  const [progress, setProgress] = useState(0)
  const contentRef = useRef<HTMLDivElement>(null)

  // Initialize first section
  useEffect(() => {
    if (projectData?.sections?.length > 0 && !activeSection) {
      setActiveSection(projectData.sections[0].id)
    }
  }, [projectData, activeSection])

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 100
      setIsScrolled(scrolled)

      // Calculate progress
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const scrolled_progress = (winScroll / height) * 100
      setProgress(scrolled_progress)

      // Update active section based on scroll
      if (contentRef.current) {
        const sections = contentRef.current.querySelectorAll('[data-section]')
        sections.forEach((section) => {
          const rect = section.getBoundingClientRect()
          if (rect.top <= 150 && rect.bottom >= 150) {
            const sectionId = section.getAttribute('data-section')
            if (sectionId) setActiveSection(sectionId)
          }
        })
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleSectionClick = (sectionId: string) => {
    setActiveSection(sectionId)
    const element = document.getElementById(`section-${sectionId}`)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <div className={styles.modernProjectPage} style={{ '--project-color': projectData.color || '#6366f1' } as any}>
      {/* Progress Bar */}
      <div className={styles.progressBar}>
        <div className={styles.progressFill} style={{ width: `${progress}%` }} />
      </div>

      {/* Hero Section */}
      <ProjectHero
        title={projectData.title}
        subtitle={projectData.subtitle}
        category={projectData.category}
        heroImage={projectData.heroImage}
        tags={projectData.tags}
      />

      {/* Floating Navigation */}
      <FloatingNav
        sections={projectData.sections}
        activeSection={activeSection}
        onSectionClick={handleSectionClick}
        isVisible={isScrolled}
      />

      {/* Main Layout */}
      <div className={styles.mainLayout}>
        {/* Sidebar */}
        <ProjectSidebar
          client={projectData.client}
          date={projectData.date}
          duration={projectData.duration}
          category={projectData.category}
          tags={projectData.tags}
          collapsed={sidebarCollapsed}
          onToggle={() => setSidebarCollapsed(!sidebarCollapsed)}
        />

        {/* Content Area */}
        <div className={styles.contentArea} ref={contentRef}>
          {/* Desktop Navigation */}
          <ProjectNavigation
            sections={projectData.sections}
            activeSection={activeSection}
            onSectionClick={handleSectionClick}
          />

          {/* Sections */}
          {projectData.sections.map((section) => (
            <div
              key={section.id}
              id={`section-${section.id}`}
              data-section={section.id}
              className={styles.sectionWrapper}
            >
              <div className={styles.sectionHeader}>
                <span className={styles.sectionNumber}>
                  {String(projectData.sections.indexOf(section) + 1).padStart(2, '0')}
                </span>
                <h2 className={styles.sectionTitle}>{section.title}</h2>
              </div>

              {/* Render based on section type */}
              {section.type === 'gallery' && section.gallery && (
                <ProjectGalleryGrid images={section.gallery} />
              )}

              

              {section.content && (
                <ProjectContent content={section.content} />
              )}

              {section.type === 'mixed' && (
                <>
                  {section.content && <ProjectContent content={section.content} />}
                  {section.gallery && <ProjectGalleryGrid images={section.gallery} />}
                </>
              )}
            </div>
          ))}

          {/* Next/Previous Project */}
          <div className={styles.projectNavigation}>
            <button className={styles.prevProject}>
              <span>Vorheriges Projekt</span>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button className={styles.nextProject}>
              <span>Nächstes Projekt</span>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}