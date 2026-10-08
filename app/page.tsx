"use client"

import { useState } from "react"
import { NavHeader } from "@/components/nav-header"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ExperienceSection } from "@/components/experience-section"
import { ProjectsSection } from "@/components/projects-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { translations, type Language } from "@/lib/translations"

export default function Home() {
  const [language, setLanguage] = useState<Language>("en")
  const t = translations[language]

  const navItems = [
    { label: t.nav.about, href: "#about" },
    { label: t.nav.experience, href: "#experience" },
    { label: t.nav.projects, href: "#projects" },
    { label: t.nav.contact, href: "#contact" },
  ]

  const projects = [
    {
      name: t.projects.bobsCorn.name,
      description: t.projects.bobsCorn.description,
      tech: t.projects.bobsCorn.tech,
      href: "https://bob-corn-seven.vercel.app",
      image: "/projects/bobs-corn.jpg",
    },
    {
      name: t.projects.venueMap.name,
      description: t.projects.venueMap.description,
      tech: t.projects.venueMap.tech,
      href: "https://venue-map-explorer.vercel.app",
      image: "/projects/venue-map.jpg",
    },
    {
      name: t.projects.tauroflix.name,
      description: t.projects.tauroflix.description,
      tech: t.projects.tauroflix.tech,
      href: "https://tauroflix.com",
      image: "/projects/tauroflix.jpg",
    },
    {
      name: t.projects.netflix.name,
      description: t.projects.netflix.description,
      tech: t.projects.netflix.tech,
      href: "https://franciscoghp.github.io/franciscoLibreoferta",
      image: "/projects/libreoferta.jpg",
    },
    {
      name: t.projects.bookstore.name,
      description: t.projects.bookstore.description,
      tech: t.projects.bookstore.tech,
      href: "https://bookstore-inventory-api-iota.vercel.app/docs",
      image: "/projects/bookstore.jpg",
    },
    {
      name: t.projects.auth.name,
      description: t.projects.auth.description,
      tech: t.projects.auth.tech,
      image: "/projects/auth.jpg",
    },
    {
      name: t.projects.paymentRequest.name,
      description: t.projects.paymentRequest.description,
      tech: t.projects.paymentRequest.tech,
      image: "/projects/payment-request.jpg",
    },
    {
      name: t.projects.rulesEngine.name,
      description: t.projects.rulesEngine.description,
      tech: t.projects.rulesEngine.tech,
      image: "/projects/rules-engine.jpg",
    },
    {
      name: t.projects.github.name,
      description: t.projects.github.description,
      tech: t.projects.github.tech,
      href: "https://github.com/franciscoghp?tab=repositories",
      image: "/projects/github.jpg",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <NavHeader currentLang={language} onLanguageChange={setLanguage} navItems={navItems} />

      <main>
        <HeroSection
          title={t.hero.title}
          subtitle={t.hero.subtitle}
          description={t.hero.description}
          cta={t.hero.cta}
          tech={t.hero.tech}
          cvLabel={t.hero.cv}
          cvHref={`/resume_francisco_herrera_${language === "en" ? "eng" : "spa"}.pdf`}
          cvFilename={`Francisco_Herrera_CV_${language === "en" ? "EN" : "ES"}.pdf`}
        />

        <AboutSection title={t.about.title} description={t.about.description} />

        <ExperienceSection title={t.experience.title} jobs={t.experience.jobs} />

        <ProjectsSection title={t.projects.title} projects={projects} />

        <ContactSection
          title={t.contact.title}
          description={t.contact.description}
          email={t.contact.email}
          phone={t.contact.phone}
          github={t.contact.github}
          linkedin={t.contact.linkedin}
        />
      </main>

      <Footer copyright={t.footer.copyright} />
    </div>
  )
}
