import React from 'react';
import concretegold from '/src/assets/images/concretegold/moodboard.jpg'
import start from '/src/assets/images/elearning/start.png'


export const CaseCategories = [
  { id: 'all', label: 'Alle Projekte' },
  { id: 'ui-ux', label: 'UI/UX Design' },
    { id: 'videokonzeption', label: 'Videokonzeption' },

 
]

export const CasesData = [
  {
   id: 1,
    title: 'Imagefilm für Concrete Gold',
    category: 'videokonzeption',
    description: 'Die folgende Fallstudie wird sich mit der Erarbeitung und Planung des Imagefilms für Concrete Gold befassen.',
    image: concretegold,
    technologies: ['Videokonzeption', 'Imagefilm'],
    link: '/fallstudien/concretegold',
    featured: true
  },
  {
    id: 2,
    title: 'E-Learning Konzept für Kinder',
    category: 'ui-ux',
    description: 'Intuitive Benutzeroberfläche für eine E-Learning Plattform mit Schwerpunkt auf intuitiver Benutzerfreundlichkeit.',
    image: start,
    technologies: ['E-Learning', 'Kinderfreundlich', 'Interaktiv'],
    link: '/fallstudien/elearning',
    featured: true
  },]