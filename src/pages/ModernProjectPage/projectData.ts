import type { ProjectData } from './components/ModernProjectPage'

// Import your images
import olivetoG1 from '../../assets/images/oliveto/g3.webp'
import olivetoG2 from '../../assets/images/oliveto/g4.webp'
import olivetoG3 from '../../assets/images/oliveto/g5.webp'
// ... weitere imports



const projects: ProjectData[] = [
  {
    id: 'oliveto',
    slug: 'oliveto',
    title: 'Villa Oliveto',
    subtitle: 'Produktdesign für Premium Olivenöl',
    client: 'Villa Oliveto GmbH',
    date: 'März 2024',
    duration: '9 Wochen',
    category: 'Produktdesign',
    tags: ['Branding', 'Packaging', 'Olivenöl', 'Premium'],
    color: '#8B7355', // Olive color
    sections: [
      {
        id: 'overview',
        title: 'Projektübersicht',
        type: 'mixed',
        content: `Villa Oliveto steht für höchste Qualität und traditionelle Handwerkskunst. 
                  Die Herausforderung bestand darin, eine Flaschengestaltung zu entwickeln, 
                  die sowohl die Premium-Positionierung als auch die italienische Herkunft 
                  authentisch kommuniziert.`,
        gallery: [
          { id: 1, url: olivetoG1, caption: 'Finale Flaschendesigns', category: 'final' },
          { id: 2, url: olivetoG2, caption: 'Etiketten-Varianten', category: 'final' },
          { id: 3, url: olivetoG3, caption: 'Verpackungskonzept', category: 'final' }
        ]
      },
      {
        id: 'research',
        title: 'Recherche & Analyse',
        type: 'text',
        content: `Die Marktanalyse zeigte, dass Premium-Olivenöle oft zu traditionell 
                  oder zu modern gestaltet sind. Unser Ansatz verbindet beide Welten.`
      },
      {
        id: 'concept',
        title: 'Konzeption',
        type: 'gallery',
        gallery: [
          { id: 4, url: olivetoG1, caption: 'Erste Skizzen', category: 'concept' },
          { id: 5, url: olivetoG2, caption: 'Farbstudien', category: 'concept' },
          { id: 6, url: olivetoG3, caption: 'Typografie-Tests', category: 'concept' }
        ]
      },
      {
        id: 'design',
        title: 'Design-Entwicklung',
        type: 'gallery',
        gallery: [
          { id: 7, url: olivetoG1, caption: 'Design-Iteration 1', category: 'design' },
          { id: 8, url: olivetoG2, caption: 'Design-Iteration 2', category: 'design' },
          { id: 9, url: olivetoG3, caption: 'Finales Design', category: 'design' }
        ]
      },
      {
        id: 'implementation',
        title: 'Umsetzung',
        type: 'mixed',
        content: `Die finale Umsetzung erfolgte in enger Zusammenarbeit mit der Druckerei. 
                  Besondere Aufmerksamkeit galt der Prägung und der Goldfolien-Veredelung.`,
        gallery: [
          { id: 10, url: olivetoG1, caption: 'Produktion', category: 'production' },
          { id: 11, url: olivetoG2, caption: 'Qualitätskontrolle', category: 'production' }
        ]
      }
    ]
  },
  {
    id: 'piradise',
    slug: 'piradise',
    title: 'Piradise Resort',
    subtitle: 'Webdesign für ein Piraten-Holiday-Resort',
    heroImage: '/src/assets/images/piradise/hero.webp',
    client: 'Studienprojekt',
    date: 'Dezember 2023',
    duration: '9 Wochen',
    category: 'Webdesign',
    tags: ['UI/UX', 'Webdesign', 'Resort', 'Tourism'],
    color: '#2563eb', // Ocean blue
    sections: [
      {
        id: 'overview',
        title: 'Projektübersicht',
        type: 'mixed',
        content: `Ein einzigartiges Webdesign für ein fiktives Piraten-Resort, 
                  das Abenteuer und Luxus vereint.`,
        gallery: [
          // Ihre Bilder hier
        ]
      }
      // Weitere Sections...
    ]
  },
  {
    id: 'schuelerhilfe',
    slug: 'schuelerhilfe',
    title: 'Schülerhilfe Spot',
    subtitle: 'Motion Design Werbespot',
    heroImage: '/src/assets/images/motion/hero.webp',
    client: 'Studienprojekt',
    date: 'Januar 2025',
    duration: '9 Wochen',
    category: 'Motion Design',
    tags: ['Animation', 'After Effects', 'Motion Graphics'],
    color: '#ef4444', // Red
    sections: [
      {
        id: 'animatic',
        title: 'Animatic',
        type: 'video',
        videos: [
          {
            id: 1,
            url: '/src/assets/videos/motion.mp4',
            title: 'Animatic Version',
            type: 'mp4'
          }
        ]
      }
      // Weitere Sections...
    ]
  }
]

// Helper Functions
export function getProjectBySlug(slug: string): ProjectData | undefined {
  return projects.find(project => project.slug === slug)
}

export function getAllProjects(): ProjectData[] {
  return projects
}

export function getProjectSlugs(): string[] {
  return projects.map(project => project.slug)
}
