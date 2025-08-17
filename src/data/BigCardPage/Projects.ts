import g6 from '/src/assets/images/oliveto/g9.webp'
import p1 from '/src/assets/images/webdesign/p1.webp'
import type { BigCardProps } from '../../components/BigCard'
export const ProjectsData: BigCardProps[] = [

  {
    id: 1,
    title: 'Olivenöl Branding',
    alt: 'Olivenöl Branding',
    category: 'produktdesign',
    text: 'Entwicklung einer hochwertigen Markenidentität für premium Olivenöl aus Italien mit eleganter Verpackung und Corporate Design.',
    image: g6,
    tags: ['Figma', 'Photoshop', 'Illustrator'],
    link: 'oliveto',
  },
    {
    id: 2,
    title: 'Webdesign Piraten-Resort',
    alt: 'Webdesign Piraten-Resort',
    category: 'webdesign',
    text: 'Konzeption von 3 Webpages für ein Piraten-Holiday-Resort-Unternehmen. Erarbeitung von Wireframes bis hin zum fertigen Screendesign.',
    image: p1,
    tags: ['Figma', 'Photoshop', 'Illustrator'],
    link: 'piradise',
  },
      {
    id: 3,
    title: 'Animatic Schülerhilfewerbespot',
    alt: 'Animatic Schülerhilfewerbespot',  
    category: 'motion design',
    text: 'Animatic von einem Schülerhilfewerbespot.',
    image: p1,
    tags: ['AfterEffects', 'PremeriePro', 'Illustrator'],
    link: 'schuelerhilfe',
  },
   {
    id: 4,
    title: 'Animiertes Albumcover',
    alt: 'Animiertes Albumcover',
    category: 'video & film',
    text: '10-Sekunden Loop für ein Albumcover von Metallica Master of Puppets.',
    image: p1,
    tags: ['AfterEffects', 'PremeriePro'],
    link: 'animatedalbumcover'
  }]