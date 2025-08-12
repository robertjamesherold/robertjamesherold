import concretegold from '/src/assets/images/concretegold/moodboard.jpg'
import start from '/src/assets/images/elearning/start.png'
import type { BigCardProps } from '../../components/BigCard'
export const CasesData: BigCardProps[] = [
  {
    id: 1,
    image: concretegold,
    alt: 'Imagefilm Concrete Gold',
    title: 'Imagefilm für Concrete Gold',
    text: 'Die folgende Fallstudie wird sich mit der Erarbeitung und Planung des Imagefilms für Concrete Gold befassen.',
    category: 'videokonzeption',
    tags: ['Videokonzeption', 'Imagefilm'],
    link: '/fallstudien/concretegold',
     },
  {
    id: 2,
    image: start,
    alt: 'E-Learning Konzept für Kinder',
    title: 'E-Learning Konzept für Kinder',
    text: 'Intuitive Benutzeroberfläche für eine E-Learning Plattform mit Schwerpunkt auf intuitiver Benutzerfreundlichkeit.',
    category: 'ui-ux',
    tags: ['E-Learning', 'Kinderfreundlich', 'Interaktiv'],
    link: '/fallstudien/elearning',
  },]