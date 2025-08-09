import olivetoG3 from '/src/assets/images/oliveto/g3.webp'
import olivetoG4 from '/src/assets/images/oliveto/g4.webp'
import olivetoG5 from '/src/assets/images/oliveto/g5.webp'
import olivetoG6 from '/src/assets/images/oliveto/g6.webp'
import olivetoG7 from '/src/assets/images/oliveto/g7.webp'
import olivetoG8 from '/src/assets/images/oliveto/g8.webp'
import olivetoG9 from '/src/assets/images/oliveto/g9.webp'
import olivetoG10 from '/src/assets/images/oliveto/g10.webp'
import olivetoG11 from '/src/assets/images/oliveto/g11.webp'
import olivetoG2 from '/src/assets/images/oliveto/g12.webp'
import olivetoG1 from '/src/assets/images/oliveto/p4.webp'

import webdesignP1 from '/src/assets/images/webdesign/p1.webp'
import webdesignP2 from '/src/assets/images/webdesign/p2.webp'
import webdesignP3 from '/src/assets/images/webdesign/p3.webp'

import motionV1 from '../../assets/videos/avmedia/motion.mp4'
import motionV2 from '../../assets/videos/film/final.mp4'
import motionP2 from '../../assets/images/film/poster.jpg'

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
  slug: string
  title: string
  subtitle: string
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
  'g3': olivetoG3,
  'g4': olivetoG4,
  'g5': olivetoG5,
  'g6': olivetoG6,
  'g7': olivetoG7,
  'g8': olivetoG8,
  'g9': olivetoG9,
  'g10': olivetoG10,
  'g11': olivetoG11,
  'g12': olivetoG2,
  'p4': olivetoG1
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
  title: "Produktdesign Villa Oliveto",
  subtitle: "Gestaltung einer Olivenölflasche inkl. Social-Media-Content.",
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
      content: 'Gestaltung einer hochwertigen Olivenölflasche für das fiktive Unternehmen Villa Oliveto, inklusive Branding und Social-Media-Content.',
      gallery: [
        {
          id: 1,
          url: olivetoG1,
          category: 'konzeption'
        },
        {
          id: 2,
          url: olivetoG2,
          category: 'design'
        },
        {
          id: 3,
          url: olivetoG3,
          category: 'umsetzung'
        }
      ]
    },
    {
      id: 'concept',
      title: 'Konzeption',
      content: 'Die Entwicklung des Markenkonzepts und der visuellen Identität für Villa Oliveto.',
      gallery: [
        {
          id: 4,
          url: olivetoG4,
          category: 'konzeption'
        },
        {
          id: 6,
          url: olivetoG6,
          category: 'konzeption'
        },
        {
          id: 9,
          url: olivetoG9,
          category: 'konzeption'
        }
      ]
    },
    {
      id: 'design',
      title: 'Design',
      content: 'Die Gestaltung der Olivenölflasche und des Etiketten-Designs.',
      gallery: [
        {
          id: 5,
          url: olivetoG5,
          category: 'design'
        },
        {
          id: 7,
          url: olivetoG7,
          category: 'design'
        },
        {
          id: 10,
          url: olivetoG10,
          category: 'design'
        }
      ]
    },
    {
      id: 'implementation',
      title: 'Umsetzung',
      content: 'Die finale Umsetzung und Visualisierung des Produkts.',
      gallery: [
        {
          id: 8,
          url: olivetoG8,
          category: 'umsetzung'
        },
        {
          id: 11,
          url: olivetoG11,
          category: 'umsetzung'
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
      content: 'Entwicklung eines modernen Webdesigns für ein fiktives Piraten-Resort mit Fokus auf User Experience und thematische Gestaltung.',
      gallery: [
        {
          id: 1,
          url: webdesignP1,
          category: 'homepage'
        }
      ]
    },
    {
      id: 'pages',
      title: 'Seitengestaltung',
      content: 'Gestaltung der verschiedenen Unterseiten mit konsistentem Design und optimaler Benutzerführung.',
      gallery: [
        {
          id: 2,
          url: webdesignP2,
          category: 'allrestaurants'
        },
        {
          id: 3,
          url: webdesignP3,
          category: 'restaurant'
        }
      ]
    }
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
      id: 'animation',
      title: 'Animation',
      content: 'Entwicklung eines Werbespots für die Schülerhilfe mit Fokus auf emotionale Ansprache und klare Botschaftsvermittlung.',
      videos: [
        {
          id: 1,
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
      content: 'Entwicklung einer 10-Sekunden-Loop-Animation für das ikonische Metallica-Albumcover "Master of Puppets".',
      videos: [
        {
          id: 2,
          url: motionV2,
          type: 'mp4',
          title: 'Animiertes Albumcover',
          caption: 'Die finale Animation erweckt das klassische Albumcover zum Leben.'
        }
      ]
    },
     {
      id: 'video',
      title: 'Video',
      content: 'Entwicklung einer 10-Sekunden-Loop-Animation für das ikonische Metallica-Albumcover "Master of Puppets".',
      videos: [
        {
          id: 2,
          url: motionV2,
          type: 'mp4',
          title: 'Animiertes Albumcover',
          caption: 'Die finale Animation erweckt das klassische Albumcover zum Leben.'
        }
      ]
    }
  ]
}

// Alle Project Studies sammeln
export const allProjectStudies: ProjectStudy[] = [
  portfolioProjectData,
  webdesignProjectData,
  motionProjectData,
  bildvideoProjectData
]

// Helper-Funktionen
export const getProjectStudyBySlug = (slug: string): ProjectStudy | undefined => {
  return allProjectStudies.find(study => study.slug === slug)
}

export const getProjectStudyById = (id: string): ProjectStudy | undefined => {
  return allProjectStudies.find(study => study.id === id)
}

export const getRelatedProjectStudies = (currentId: string, limit = 3): ProjectStudy[] => {
  return allProjectStudies
    .filter(study => study.id !== currentId)
    .slice(0, limit)
}