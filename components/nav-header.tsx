"use client"

import { LanguageSwitcher } from "@/components/language-switcher"

interface NavHeaderProps {
  currentLang: "en" | "es"
  onLanguageChange: (lang: "en" | "es") => void
  navItems: { label: string; href: string }[]
}

export function NavHeader({ currentLang, onLanguageChange, navItems }: NavHeaderProps) {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-1">
            <a href="#" className="text-xl font-bold text-foreground hover:opacity-80 transition">
              FH
            </a>
          </div>

          <nav className="hidden md:flex items-center gap-8 flex-1 justify-center">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-foreground/70 hover:text-foreground transition"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex-1 flex justify-end">
            <LanguageSwitcher currentLang={currentLang} onLanguageChange={onLanguageChange} />
          </div>
        </div>
      </div>
    </header>
  )
}
