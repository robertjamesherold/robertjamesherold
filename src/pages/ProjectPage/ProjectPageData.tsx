import React from 'react'
import g6 from '/src/assets/images/oliveto/g9.webp'
import p1 from '/src/assets/images/webdesign/p1.webp'

// Typen
export type ProjectCategory = {
  id: string
  label: string
}

export type Project = {
  id: number
  title: string
  category: string
  description: string
  image: string
  technologies: string[]
  link: string
  featured: boolean
}

export const projectCategories: ProjectCategory[] = [
  { id: 'all', label: 'Alle Projekte' },
  { id: 'produktdesign', label: 'Produktdesign' },
  { id: 'webdesign', label: 'Webdesign' },
  { id: 'motion design', label: 'Motion Design' },
  { id: 'video & film', label: 'Video & Film'}
]

export const projectsData: Project[] = [

  {
    id: 1,
    title: 'Olivenöl Branding',
    category: 'produktdesign',
    description: 'Entwicklung einer hochwertigen Markenidentität für premium Olivenöl aus Italien mit eleganter Verpackung und Corporate Design.',
    image: g6,
    technologies: ['Figma', 'Photoshop', 'Illustrator'],
    link: 'oliveto',
    featured: true
  },
    {
    id: 2,
    title: 'Webdesign Piraten-Resort',
    category: 'webdesign',
    description: 'Konzeption von 3 Webpages für ein Piraten-Holiday-Resort-Unternehmen. Erarbeitung von Wireframes bis hin zum fertigen Screendesign.',
    image: p1,
    technologies: ['Figma', 'Photoshop', 'Illustrator'],
    link: 'piradise',
    featured: true
  },
      {
    id: 3,
    title: 'Animatic Schülerhilfewerbespot',
    category: 'motion design',
    description: 'Animatic von einem Schülerhilfewerbespot.',
    image: p1,
    technologies: ['AfterEffects', 'PremeriePro', 'Illustrator'],
    link: 'schuelerhilfe',
    featured: true
  },
   {
    id: 4,
    title: 'Animiertes Albumcover',
    category: 'video & film',
    description: '10-Sekunden Loop für ein Albumcover von Metallica Master of Puppets.',
    image: p1,
    technologies: ['AfterEffects', 'PremeriePro'],
    link: 'animatedalbumcover',
    featured: true
  }]