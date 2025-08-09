export const cvData = {

  education: [
    {
      period: "2022 - 2025",
      title: "Bachelor of Arts",
      subtitle: "Mediendesign",
      institution: "IU Internationale Hochschule \u00ADErfurt",
      metrics: ["∅ 1,7"]
    },
    {
      period: "2015 - 2017",
      title: "Fachhochschulreife",
      subtitle: "Gestaltung",

      institution: "Gutenbergschule \u00ADFrankfurt am Main", 
    }
  ],

  experience: [
    {
      period: "2024 - heute",
      title: "Webdesigner & UI/UX Designer",
      subtitle: 'Freelancer',
      institution: "Remote/Homeoffice",
      tasks: [
        "Konzeption und Gestaltung von Websites",
        "User Interface und User Experience Design",
        "Responsive Design für alle Endgeräte",
        "Zusammenarbeit mit Entwicklern und Kunden"
      ]
    },
    {
      period: "2020 - 2022",
      title: "Verkäufer",
      subtitle: 'im Einzelhandel',
      institution: "Blume 2000 \u00AD Fulda",
      tasks: [
        "Kundenberatung und Verkauf",
        "Warenpräsentation und Visual Merchandising",
        "Teamarbeit und Kundenservice"
      ]
    },
    {
      period: "2015 - 2016",
      title: "Mediengestalter",
      subtitle: 'Praktikum',
      institution: "sixeyesmedia GmbH \u00ADSchlüchtern",
      tasks: [
        "Erste Einblicke in die Medienbranche",
        "Unterstützung bei Gestaltungsprojekten",
        "Erlernen professioneller Design-Software"
      ]
    }
  ],

  additionalActivities: [
    {
      period: "01/2025 - 06/2025",
      title: "Studierendenvertreter",
      subtitle: 'Studiengang Mediendesign',
      institution: "IU Internationale Hochschule",
      tasks: [
        "Vertretung der Studierenden im Studiengang",
        "Kommunikation zwischen Hochschule & Studierenden",
        "Einbringung von Verbesserungsvorschlägen"
      ]
    }
  ],

  skills: {
    categories: [
      {
        title: "Design Software",
        skills: [
          { name: "Figma", level: 95 },
          { name: "Photoshop", level: 90 },
          { name: "Illustrator", level: 85 },
          { name: "InDesign", level: 80 }
        ]
      },
      {
        title: "Web Technologien",
        skills: [
          { name: "HTML", level: 90 },
          { name: "CSS", level: 85 },
          { name: "WordPress", level: 80 }
        ]
      },
      {
        title: "Video & Audio",
        skills: [
          { name: "After Effects", level: 75 },
          { name: "Premiere Pro", level: 70 }
        ]
      }
    ]
  },

  achievements: [
    {
      title: "Beste Noten in Kernfächern",
      items: [
        "Projekt: Cross-Media Design (1,0)",
        "Projekt: Grafikdesign (1,0)",
        "Gestaltung interaktiver Medien (1,0)",
        "Bild- und Videobearbeitung (1,0)"
      ]
    },
    {
      title: "Schwerpunkte",
      items: [
        "User Experience Design",
        "Mobile Media Design",
        "Webdesign & UI Design",
        "Audio-visuelle Medien"
      ]
    }
  ],

  languages: [
    { name: "Deutsch", level: "Muttersprache" },
    { name: "Englisch", level: "Verhandlungssicher" }
  ],

  cta: {
    title: "Interessiert an einem gemeinsamen Projekt?",
    description: "Ich freue mich darauf, neue Projekte und Herausforderungen anzunehmen. Lassen Sie uns über Ihre Ideen sprechen!",
    primaryButton: {
      href: "#contact",
      text: "Kontakt aufnehmen"
    },
    secondaryButton: {
      href: "mailto:robertjamesherold@icloud.com",
      text: "E-Mail schreiben"
    }
  }
}

// Optional: Icon mapping für flexiblere Icon-Verwendung
export const iconMap = {
  location: "📍",
  email: "📧",
  phone: "📱",
  web: "🌐",
  download: "⬇️",
  calendar: "📅",
  briefcase: "💼",
  education: "🎓",
  star: "⭐",
  language: "🗣️",
  skill: "🔧"
}

// Optional: Skill Level Beschreibungen
export const skillLevelDescriptions = {
  0: "Anfänger",
  25: "Grundkenntnisse",
  50: "Fortgeschritten",
  75: "Sehr gut",
  90: "Experte",
  100: "Meister"
}

// Optional: Konfiguration für Animationen und Styling
export const cvConfig = {
  animations: {
    fadeInDelay: 100,
    skillBarDuration: 1500,
    hoverScale: 1.02
  },
  layout: {
    maxContainerWidth: "1200px",
    sectionSpacing: "3rem",
    columnGap: "2rem"
  },
  colors: {
    primary: "#3b82f6",
    secondary: "#6b7280",
    accent: "#ff6a00",
    success: "#22c55e"
  }
}