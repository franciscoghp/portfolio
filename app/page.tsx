"use client"

import { useState } from "react"
import { NavHeader } from "@/components/nav-header"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ProjectsSection } from "@/components/projects-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { translations, type Language } from "@/lib/translations"

export default function Home() {
  const [language, setLanguage] = useState<Language>("en")
  const t = translations[language]

  const navItems = [
    { label: t.nav.about, href: "#about" },
    { label: t.nav.projects, href: "#projects" },
    { label: t.nav.contact, href: "#contact" },
  ]

  const projects = [
    {
      name: t.projects.parkour.name,
      description: t.projects.parkour.description,
      tech: t.projects.parkour.tech,
      href: "https://test-parkour-zoyh-gcaof5gpr-francisco-dev1.vercel.app",
    },
    {
      name: t.projects.netflix.name,
      description: t.projects.netflix.description,
      tech: t.projects.netflix.tech,
      href: "https://franciscoghp.github.io/franciscoLibreoferta/home",
    },
    {
      name: t.projects.tauroflix.name,
      description: t.projects.tauroflix.description,
      tech: t.projects.tauroflix.tech,
      href: "https://tauroflix.com",
    },
    {
      name: t.projects.microservices.name,
      description: t.projects.microservices.description,
      tech: t.projects.microservices.tech,
      href: "https://bk.utransfer.app:3000/api",
    },
    {
      name: t.projects.monolith.name,
      description: t.projects.monolith.description,
      tech: t.projects.monolith.tech,
      href: "https://devbackend.utransfer.app/api#/",
    },
    {
      name: t.projects.github.name,
      description: t.projects.github.description,
      tech: t.projects.github.tech,
      href: "https://github.com/franciscoghp?tab=repositories",
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
        />

        <AboutSection title={t.about.title} description={t.about.description} />

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
