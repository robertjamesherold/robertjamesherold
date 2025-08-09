import React from 'react'
import { Container } from '../../layout/Container'
import { FeaturedCard } from './ProjectPageFeaturedCard'
import { FilterNav } from './ProjectPageFilterNav'
import { ProjectsGrid } from './ProjectPageGrid'
import { CallToAction } from '/src/components/CallToAction'
import { useProjectFilter } from './useProjectFilter'
import { projectCategories, projectsData } from './ProjectPageData'

// Typen
export type ProjectCategory = {
  id: string
  label: string
}

export type Project = {
  id: number
  title: string
  description: string
  category: string
  image: string
  technologies: string[]
  link: string
  featured: boolean
}

export type UniversalProjectPageProps = {
  headerTitle?: string
  featuredTitle?: string
  filterTitle?: string
  categories: ProjectCategory[]
  projectsData: Project[]
  showCTA?: boolean
  ctaTitle?: string
  ctaDescription?: string
  ctaPrimaryText?: string
  ctaPrimaryLink?: string
  ctaSecondaryText?: string
  ctaSecondaryLink?: string
  showPrimaryButton?: boolean
  showSecondaryButton?: boolean
}

export function UniversalProjectPage({
  headerTitle = "Meine Projekte",
  featuredTitle = "Ausgewählte Projekte", 
  filterTitle = "Alle Projekte",
  categories,
  projectsData,
  showCTA = true,
  ctaTitle = 'Bereit für Ihr nächstes Design-Projekt?',
  ctaDescription = 'Lassen Sie uns gemeinsam Ihre Ideen visuell zum Leben erwecken. Ich freue mich auf Ihre Nachricht!',
  ctaPrimaryText = 'Kontaktiere mich',
  ctaPrimaryLink = '/kontakt',
  ctaSecondaryText,
  ctaSecondaryLink,
  showPrimaryButton = true,
  showSecondaryButton = false,
}: UniversalProjectPageProps) {
  const {
    activeFilter,
    setActiveFilter,
    filteredProjects,
  } = useProjectFilter(projectsData)

  return (
    <main>
      <Container span={{ default: 12 }}>
        <h1 className="colored textcenter">
          {headerTitle}
        </h1>
      </Container>

      {/* All Projects Section */}
      <Container span={{ default: 12 }}>
        <FilterNav
          categories={categories}
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
        />

        <ProjectsGrid projects={filteredProjects} CardComponent={FeaturedCard} />
      </Container>

      {/* Call to Action */}
      {showCTA && (
        <Container span={{ default: 12 }}>
          <CallToAction 
            title={ctaTitle}
            text={ctaDescription}
            primaryButtonText={ctaPrimaryText}
            primaryButtonLink={ctaPrimaryLink}
            secondaryButtonText={ctaSecondaryText}
            secondaryButtonLink={ctaSecondaryLink}
            showPrimaryButton={showPrimaryButton}
            showSecondaryButton={showSecondaryButton}
          />
        </Container>
      )}
    </main>
  )
}

export function ProjectPage() {
  return (
    <UniversalProjectPage
      headerTitle="Meine Projekte"
      featuredTitle="Ausgewählte Projekte"
      filterTitle="Alle Projekte"
      categories={projectCategories}
      projectsData={projectsData}
    />
  )
}