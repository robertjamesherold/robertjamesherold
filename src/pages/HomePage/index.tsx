import React from 'react';
import { useState, useEffect } from 'react'
import { statsData, serviceData, projectData } from './HomePageData'
import { Container } from '../../layout/Container'
import { Hero } from './HomePageHero' 
import { CodeAnimation } from './HomePageHero/HeroCodeAnimation'
import { StatsCards } from './HomePageStatsCards'
import { ServiceList } from './HomePageServiceList'
import { ProjectList } from './HomePageProjectList'
import { CallToAction } from '/src/components/CallToAction'
import clsx from 'clsx'




export function HomePage() {
  const [currentTech, setCurrentTech] = useState<number>(0)

  const technologies = [
    'UI/UX Design',
    'Webdesign',
    'Figma',
    'HTML & CSS',
    'WordPress',
    'Photoshop'
  ]

  // Auto-rotate technologies
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTech((prev) => (prev + 1) % technologies.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [technologies.length])

  return (
  <main>
    <Container span={{ default: 12}}><Hero /></Container>
    <Container span={{ default: 12 }}><StatsCards data={statsData} /></Container>
    <Container span={{ default: 12 }}><ServiceList title="Meine Dienstleistungen" data={serviceData}/></Container>
    <Container span={{ default: 12 }}>
        <ProjectList
                title="Meine Projekte"s
                data={projectData}
                showCta={true}
                link="/projekte"
                cta="Projekte ansehen"
            />
    </Container>
<Container span={{ default: 12 }}>
        <CallToAction 
          title='Bereit für Ihr nächstes Design-Projekt?'
          text='Lassen Sie uns gemeinsam Ihre Ideen visuell zum Leben erwecken. Ich freue mich auf Ihre Nachricht!'
          primaryButtonText='Kontaktiere mich'
          primaryButtonLink='/kontakt'
          showPrimaryButton={true}
          showSecondaryButton={false}
        />
    </Container>
  </main>
  )
}