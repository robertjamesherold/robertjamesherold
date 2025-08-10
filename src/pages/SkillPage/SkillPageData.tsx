import { type CardProps } from '../../components/Card';
import { type CallToActionProps } from '../../components/CallToAction';

export const designSkillsData = [
  { name: 'Figma', level: 95, icon: '🎨', description: 'UI/UX Design, Prototyping' },
  { name: 'Photoshop', level: 90, icon: '🖼️', description: 'Bildbearbeitung, Compositing' },
  { name: 'Illustrator', level: 85, icon: '✏️', description: 'Vektorgrafiken, Logos' },
  { name: 'InDesign', level: 80, icon: '📄', description: 'Layout Design, Print Design' },
  { name: 'After Effects', level: 75, icon: '🎬', description: 'Motion Graphics, Animation' },
  { name: 'Premiere Pro', level: 70, icon: '🎞️', description: 'Schnitt, Color Grading' }
];

export const webSkillsData = [
  { name: 'HTML5', level: 90, icon: '🏗️', description: 'Markup, SEO' },
  { name: 'CSS3', level: 85, icon: '🎨', description: 'Responsive, Grid/Flexbox' },
  { name: 'JavaScript', level: 75, icon: '⚡', description: 'React, Interaktivität' },
  { name: 'SCSS/Sass', level: 80, icon: '💅', description: 'Variables, Mixins' },
  { name: 'WordPress', level: 80, icon: '📝', description: 'Custom Themes, CMS' },
  { name: 'Git', level: 70, icon: '📚', description: 'Versionskontrolle' }
];

export const designProcessData: CardProps[] = [
  {
    title: 'Research',
    icon: '🔍',
    text: 'Verstehen der Nutzer und des Marktes durch umfassende Recherche.'
  },
  {
    title: 'Konzept',
    icon: '💡',
    text: 'Entwicklung kreativer Lösungsansätze und Konzepte.'
  },
  {
    title: 'Prototyping',
    icon: '🎨',
    text: 'Umsetzung der Konzepte in visuelle und interaktive Designs.'
  },
  {
    title: 'Evaluation',
    icon: '🔄',
    text: 'Kontinuierliche Verbesserung durch Tests und Nutzerfeedback.'
  }
];

export const achievementsData: CardProps[] = [
  {
    icon: '🎓',
    title: (<>Bachelor<br /> Mediendesign</>),
    text: 'IU Internationale Hochschule',
    tags: ['1,8 Durchschnitt']
  },
  {
    icon: '👨‍💼',
    title: ( <>
        Studierenden-<br />vertreter
      </>),
    text: 'Mediendesign 2025',
    tags: ['6 Monate']
  },
  {
    icon: '💼',
    title: (<>Freelance<br />Designer</>),
    text: 'Seit 2024',
    tags: ['10+ Projekte']
  },
  {
    icon: '🏆',
    title: (<>Beste<br />Noten</>),
    text: 'Design-Projekte',
    tags: ['Mehrere 1,0']
  }
];

export const toolsData = [
  { name: 'Figma', category: 'Design', color: '#F24E1E' },
  { name: 'Photoshop', category: 'Design', color: '#31A8FF' },
  { name: 'Illustrator', category: 'Design', color: '#FF9A00' },
  { name: 'InDesign', category: 'Design', color: '#FF3366' },
  { name: 'After Effects', category: 'Video', color: '#9999FF' },
  { name: 'Premiere Pro', category: 'Video', color: '#9999FF' },
  { name: 'HTML', category: 'Web', color: '#E34F26' },
  { name: 'CSS', category: 'Web', color: '#1572B6' },
  { name: 'JavaScript', category: 'Web', color: '#F7DF1E' },
  { name: 'WordPress', category: 'CMS', color: '#21759B' },
  { name: 'Git', category: 'Tools', color: '#F05032' },
  { name: 'Sketch', category: 'Design', color: '#FDB300' },
  { name: 'AdobeXD', category: 'Design', color: '#fd00cfff' },
    { name: 'React', category: 'Design', color: '#31A8FF' },

  
];

export const ctaData: CallToActionProps[]=  [{
  title: 'Bereit für Ihr nächstes Design-Projekt?',
  text: 'Lassen Sie uns gemeinsam Ihre Ideen visuell zum Leben erwecken. Ich freue mich auf Ihre Nachricht!',
  primaryButtonText: 'Kontaktiere mich',
  primaryButtonLink: '/kontakt',
  isTwo: false,
  secondaryVar: 'button',
  secondaryButtonText: 'Mehr erfahren',
  secondaryButtonLink: '/mehr-erfahren'
}];