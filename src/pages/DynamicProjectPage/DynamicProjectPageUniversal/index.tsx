import  { useState, useEffect } from 'react'
import { ProjectPageMeta } from '../DynamicProjectPageMeta'
import { ProjectPageContent } from '../DynamicProjectPageContent'
import { ProjectPageNav } from '../DynamicProjectPageNav'
import { Header } from '../../../layout/Header'
import { Grid, Section } from '../../../layout/GridLayout'
import { CaseStudySidebar } from '../../DynamicCaseStudyPage/DynamicCaseStudyPageSidebar'


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
  id?: string
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
  id?: string
}

export function DynamicUniversalProjectPage({ projectPageData, id }: DynamicUniversalProjectPageProps) {
  const [activeSection, setActiveSection] = useState<string>('')

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

  return (
    <main>
      <Header title={title} text={subtitle} />
      <Section isPaddingTop={true} id={id}>

     <Grid grid={{default:12}} gapRow='medium' gapCol='medium' fullH={false}>
          <CaseStudySidebar grid={{default:1, md: 2, xl: 1}} span={{default: 12,md:6, xl: 4}}>

          {sections.length > 1 && (
            <ProjectPageNav
              sections={sections}
              activeSection={activeSection}
              onSectionClick={setActiveSection}
            />
          )}
          <ProjectPageMeta
            client={client}
            date={date}
            duration={duration}
            category={category}
            tags={tags}
          />
       </CaseStudySidebar>

        <ProjectPageContent
          sections={sections}
          activeSection={activeSection}
          imageMap={imageMap}
        />   
        </Grid>
</Section>
    </main>
  )
}