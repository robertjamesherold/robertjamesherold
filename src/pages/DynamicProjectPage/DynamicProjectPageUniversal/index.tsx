import React, { useState, useEffect } from 'react'
import { Container } from '../../../layout/Container'
import { ProjectPageMeta } from '../DynamicProjectPageMeta'
import { ProjectPageContent } from '../DynamicProjectPageContent'
import { ProjectPageNav } from '../DynamicProjectPageNav'

// Typen für die neue Struktur
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
  title: string
  subtitle?: string
  client?: string
  date?: string
  duration?: string
  category?: string
  tags?: string[]
  sections: ProjectSection[]
  imageMap?: Record<string, string>
}

export type DynamicUniversalProjectPageProps = {
  DynamicProjectPageData: ProjectPageData
}

export function DynamicUniversalProjectPage({ DynamicProjectPageData }: DynamicUniversalProjectPageProps) {
  const [activeSection, setActiveSection] = useState<string>('')

  // Erste Section als Standard setzen
  useEffect(() => {
    if (DynamicProjectPageData?.sections?.length > 0 && !activeSection) {
      setActiveSection(DynamicProjectPageData.sections[0].id)
    }
  }, [DynamicProjectPageData, activeSection])

  if (!DynamicProjectPageData) {
    return null
  }

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
  } = DynamicProjectPageData

  return (
    <main>
      {/* Header */}
      <Container span={{ default: 12 }}>
        <h1 className="colored textcenter">{title}</h1>
        {subtitle && <p className="textcenter">{subtitle}</p>}
      </Container>

      <Container span={{ default: 12, sm: 6, lg: 4, xl: 3}} >
<div className='twoRowGridFirst' >

   

      {/* Section Navigation (Optional - falls vorhanden) */}
      {sections.length > 1 && (
       
           <ProjectPageNav
            sections={sections}
            activeSection={activeSection}
            onSectionClick={setActiveSection}
          />)}  
   <ProjectPageMeta
        client={client}
        date={date}
        duration={duration}
        category={category}
        tags={tags}
      />
          </div>     
</Container>
     
        <Container span={{ default: 12, sm: 6,lg:8, xl: 9 }}>

      {/* Section Content */}
      <ProjectPageContent
        sections={sections}
        activeSection={activeSection}
        imageMap={imageMap}
      />
              </Container>

    </main>
  )
}

// Beispiel für die Verwendung:
/*
import { DynamicUniversalProjectPage } from './DynamicUniversalProjectPage'
import { portfolioProjectData } from './projectData'

function ProjectPage() {
  return (
    <DynamicUniversalProjectPage 
      DynamicProjectPageData={portfolioProjectData}
    />
  )
}
*/