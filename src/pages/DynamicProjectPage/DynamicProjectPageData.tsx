import quality1 from '/src/assets/images/oliveto/g3.webp'
import quality2 from '/src/assets/images/oliveto/g4.webp'
import rezepte2 from '/src/assets/images/oliveto/g5.webp'
import rezepte3 from '/src/assets/images/oliveto/g6.webp'
import summer1 from '/src/assets/images/oliveto/g7.webp'
import summer2 from '/src/assets/images/oliveto/g8.webp'
import summer3 from '/src/assets/images/oliveto/g9.webp'
import product from '/src/assets/images/oliveto/g10.webp'
import quality3 from '/src/assets/images/oliveto/g11.webp'
import rezepte1 from '/src/assets/images/oliveto/g12.webp'
import website from '/src/assets/images/oliveto/p4.webp'

import webdesignP1 from '/src/assets/images/webdesign/p1.webp'
import webdesignP2 from '/src/assets/images/webdesign/p2.webp'
import webdesignP3 from '/src/assets/images/webdesign/p3.webp'

import motionV1 from '../../assets/videos/avmedia/motion.mp4'
import outro from '../../assets/images/avmedia/outro.webp'
import film from '../../assets/images/film/131.webp'
import motionV2 from '../../assets/videos/film/final.mp4'
import type React from 'react'

export type TagProps = {
  tag?: string[]
}

export type GalleryItem = {
  id: number
  url: string
  category: string
}

export type VideoItem = {
  id: number | string
  url: string
  title?: string
  caption?: string
  poster?: string
  type?: 'mp4' | 'webm' | 'youtube' | 'vimeo'
}

export type ProjectSection = {
  id: string
  title?: string
  content?: string
  videos?: VideoItem[]
  gallery?: GalleryItem[]
  images?: string[]
}


export type ProjectStudy = {
  id: string
  slug?: string
  title: string | string[] | React.ReactNode
  subtitle: string | string[] | React.ReactNode
  client: string
  date: string
  duration: string
  category: string
  tags: string[]
  imageMap: Record<string, string>
  sections: ProjectSection[]
}

// Image Maps für Project Studies
const olivetoImageMap: Record<string, string> = {
  'g3': quality1,
  'g4': quality2,
  'g5': rezepte1,
  'g6': rezepte1,
  'g7': summer1,
  'g8': summer2,
  'g9': summer3,
  'g10': product,
  'g11': quality3,
  'g12': rezepte3,
  'p4': website
}

const webdesignImageMap: Record<string, string> = {
  'p1': webdesignP1,
  'p2': webdesignP2,
  'p3': webdesignP3
}

// Portfolio Redesign Project Study
export const portfolioProjectData: ProjectStudy = {
  id: 'oliveto',
  slug: 'oliveto',
  title: (<span>Produktdesign <br className=' hidden-xxl hidden-xl hidden-lg'/>Villa Oliveto</span>),
  subtitle: (<span>Gestaltung einer Olivenölflasche<br className=' hidden-xxl hidden-xl hidden-lg'/> inkl. Social-Media-Content.</span>),
  client: "Studienprojekt",
  date: "März 2024",
  duration: "9 Wochen",
  category: "Produktdesign",
  tags: ["Produkdesign", "Branding", "Olivenöl"],
  imageMap: olivetoImageMap,
  sections: [
    {
      id: 'overview',
      title: 'Projektübersicht',
      gallery: [
        {
          id: 1,
          url: website,
          category: 'website'
        },
        {
          id: 2,
          url: product,
          category: 'product'
        },
        {
          id: 3,
          url: rezepte1,
          category: 'rezepte'
        },
            {
          id: 4,
          url: rezepte2,
          category: 'rezepte'
        },
        {
          id: 5,
          url: rezepte3,
          category: 'rezepte'
        },
        {
          id: 6,
          url: quality1,
          category: 'quality'
        },
         {
          id: 7,
          url: quality2,
          category: 'quality'
        },
        {
          id: 8,
          url: quality3,
          category: 'quality'
        },
        {
          id: 9,
          url: summer1,
          category: 'summer'
        },
          {
          id: 10,
          url: summer2,
          category: 'summer'
        },
        {
          id: 11,
          url: summer3,
          category: 'summer'
        }
      ]
    },
     {
      id: 'website',
      title: 'Webdesign',
      gallery: [
        {
          id: 1,
          url: website,
          category: 'website'
        }]},
    {
      id: 'product',
      title: 'Produktdesign',
      gallery: [
        {
          id: 2,
          url: product,
          category: 'product'
        }   
      ]
    },
    {
      id: 'rezepte',
      title: 'Rezepte',
      gallery: [
        {
          id: 3,
          url: rezepte1,
          category: 'rezepte'
        },
        {
          id: 4,
          url: rezepte2,
          category: 'rezepte'
        },
        {
          id: 5,
          url: rezepte3,
          category: 'rezepte'
        }
      ]
    },
    {
      id: 'quality',
      title: 'Qualität',
      gallery: [
        {
          id: 6,
          url: quality1,
          category: 'quality'
        },
        {
          id: 7,
          url: quality2,
          category: 'quality'
        },
        {
          id: 8,
          url: quality3,
          category: 'quality'
        }
      ]
    }
    ,
    {
      id: 'summer',
      title: 'Neuerscheinungen',
      gallery: [
        {
          id: 9,
          url: summer1,
          category: 'summer'
        },
        {
          id: 10,
          url: summer2,
          category: 'summer'
        },
        {
          id: 11,
          url: summer3,
          category: 'summer'
        }
      ]
    }
  ]
}

export const webdesignProjectData: ProjectStudy = {
  id: 'piradise',
  slug: 'piradise',
  title: "Webdesign Piraten-Resort",
  subtitle: "Screendesign für ein Piraten-Holiday-Resort-Unternehmen.",
  client: "Studienprojekt",
  date: "Dezember 2023",
  duration: "9 Wochen",
  category: "Webdesign",
  tags: ["Webdesign", "Prototyping", "Screendesign"],
  imageMap: webdesignImageMap,
  sections: [
    {
      id: 'overview',
      title: 'Projektübersicht',
      gallery: [
        {
          id: 1,
          url: webdesignP1,
          category: 'overview'
        },
          {
          id: 2,
          url: webdesignP2,
          category: 'overview'
        },
          {
          id: 3,
          url: webdesignP3,
          category: 'overview'
        }
      ]
    },

   
  ]
}

export const motionProjectData: ProjectStudy = {
  id: 'schuelerhilfe',
  slug: 'schuelerhilfe',
  title: "Schülerhilfewerbespot",
  subtitle: "Animatic von einem Schülerhilfewerbespot.",
  client: "Studienprojekt",
  date: "Januar 2025",
  duration: "9 Wochen",
  category: "Motion Design",
  tags: ["Motion Graphics", "Animation", "After Effects"],
  imageMap: {},
  sections: [
    {
      id: 'animatic',
      title: 'Animatic',
      videos: [
        {
          id: 1,
          poster: outro, 
          url: motionV1,
          type: 'mp4',
          title: 'Schülerhilfe Animatic',
          caption: 'Das Animatic zeigt die Grundstruktur und das Timing des Werbespots.'
        }
      ]
    }
  ]
}

export const bildvideoProjectData: ProjectStudy = {
  id: 'animatedalbumcover',
  slug: 'animatedalbumcover',
  title: "Animiertes Albumcover",
  subtitle: "10-Sekunden Loop für ein Albumcover von Metallica Master of Puppets.",
  client: "Studienprojekt",
  date: "Oktober 2024",
  duration: "9 Wochen",
  category: "Video & Film",
  tags: ["Video & Film", "Film", "After Effects"],
  imageMap: {},
  sections: [
    {
      id: 'animation',
      title: 'Animation',
      videos: [
        {
          id: 1,
          poster: film,
          url: motionV2,
          type: 'mp4',
          title: 'Animiertes Albumcover',
          caption: 'Die finale Animation erweckt das klassische Albumcover zum Leben.'
        }
      ]
    },

  ]
}

// Alle Project Studies sammeln
export const ProjectStudyData: ProjectStudy[] = [
  portfolioProjectData,
  webdesignProjectData,
  motionProjectData,
  bildvideoProjectData
]

// Helper-Funktionen
export const getProjectStudyBySlug = (slug: string): ProjectStudy | undefined => {
  return ProjectStudyData.find(study => study.slug === slug)
}

export const getProjectStudyById = (id: string): ProjectStudy | undefined => {
  return ProjectStudyData.find(study => study.id === id)
}

