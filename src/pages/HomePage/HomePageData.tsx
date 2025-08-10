import webdesign from '/src/assets/images/elearning/game.png'
import grafikdesign from '/src/assets/images/oliveto/g4.webp'
import { type CallToActionProps } from '../../components/CallToAction';

export const statsData = [
{  
title: '3+',
text: 'Jahre',
textTwo: 'Studium'
},
{
title: '140',
text: 'ECTS',
textTwo: 'Credits'
},
{
title: '1,7',
text: 'Noten-',
textTwo: 'durchschnitt'
},
{
title: '2024',
text: 'Freelancer',
textTwo: 'seit'
}
];

export const serviceData = [
  {
    icon: '🎨',
    title: 'UI/UX Design',
    text: 'Benutzerfreundliche Interfaces und durchdachte User Experience mit Figma und modernen Design-Prinzipien.'
  },
  {
    icon: '💻',
    title: 'Webentwicklung',
    text: 'Moderne Webanwendungen mit React, Node.js und MongoDB für optimale Performance.'
  },
  {
    icon: '📱',
    title: 'Mobile Apps',
    text: 'Entwicklung von plattformübergreifenden Apps mit React Native für iOS und Android.'
  },
  {
    icon: '🎬',
    title: 'Video-Produktion',
    text: 'Professionelle Videoproduktion und -bearbeitung für Marketing und Social Media.'
  }
];

export const projectData = [
{
    id: 'elearning',
    label: 'E-Learning Konzept',
    image: webdesign ,
    alt: 'Fallstudie',
    title: 'E-Learning Konzept für Kinder',
    text: 'Eine Fallstudie über ein E-Learning-Konzept, das Kinder auf spielerische Weise mit Mathematik in Kontakt bringt.',
    link: 'fallstudien/elearning',
    tags: ['Fallstudie'],
    category: 'E-Learning'
},
{
    id: 'olivenoel',
    label: 'Olivenöl Branding',
    image: grafikdesign,
    alt: 'Olivenöl-Produktdesign',
    title: 'Olivenöl Branding',
    text: 'Entwicklung einer hochwertigen Markenidentität für premium Olivenöl aus Italien mit eleganter Verpackung und Corporate Design.',
    link: 'projekte/oliveto',
    tags: ['Photoshop', 'Illustrator', 'Figma'],
    category: 'Grafikdesign'
},
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
