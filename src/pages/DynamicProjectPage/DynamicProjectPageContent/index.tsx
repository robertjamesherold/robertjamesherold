import React from 'react';
import { Container } from '../../../layout/Container'
import { RichText } from '../../../layout/RichText'
import { VideoWrapper } from '../DynamicProjectPageVideo'
import { ProjectPageGallery } from '../DynamicProjectPageGallery'
import styles from './_ProjectPageContent.module.scss'

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

type ProjectPageContentProps = {
  children?: React.ReactNode
  sections: ProjectSection[]
  activeSection: string
  imageMap?: Record<string, string>
}

export function ProjectPageContent({ 
  children, 
  sections, 
  activeSection, 
  imageMap = {} 
}: ProjectPageContentProps) {

  return (
  <Container span={{default:12, md:6, xl: 8}}>
    <article className='gallery marginTop'>
      {sections.map((section) => (
        <section
          key={section.id}
          id={section.id}
          className={`${styles.section} ${activeSection === section.id ? styles.active : ''}`}
        >
     
          {/* Section Content (Text) */}
          {section.content && (
            <Container span={{ default: 12, xl: 8 }}>
              <RichText text={section.content} imageMap={imageMap} />
            </Container>
          )}

          {/* Section Videos */}
          {section.videos && section.videos.length > 0 && (
            <Container span={{ default: 12, xl: 8 }}>
              <VideoWrapper videos={section.videos} />
            </Container>
          )}

          {/* Section Gallery */}
          {section.gallery && section.gallery.length > 0 && (
            <Container span={{ default: 12, xl: 10 }}>
              <ProjectPageGallery images={section.gallery} />
            </Container>
          )}

          {/* Legacy Images Support */}
          {section.images && section.images.length > 0 && (
            <Container span={{ default: 12, xl: 10 }}>
              <ProjectPageGallery 
                images={section.images.map((img, index) => ({
                  id: index,
                  url: imageMap[img] || img,
                  category: ''
                }))}
              />
            </Container>
          )}

          {/* Custom Children */}
          {children}
        </section>
      ))}
    </article></Container>
  )
}