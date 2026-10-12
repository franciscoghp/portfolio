"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { LanguageSwitcher } from "@/components/language-switcher"

interface NavHeaderProps {
  currentLang: "en" | "es"
  onLanguageChange: (lang: "en" | "es") => void
  navItems: { label: string; href: string }[]
}

export function NavHeader({ currentLang, onLanguageChange, navItems }: NavHeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false)

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

          <div className="flex-1 flex justify-end items-center gap-2">
            <LanguageSwitcher currentLang={currentLang} onLanguageChange={onLanguageChange} />
            <button
              type="button"
              className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-md border border-border text-foreground hover:bg-muted transition"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-nav"
              onClick={() => setMenuOpen((open) => !open)}
            >
              {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <nav id="mobile-nav" className="md:hidden flex flex-col border-t border-border py-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="px-2 py-3 text-base font-medium text-foreground/80 hover:text-foreground hover:bg-muted rounded-md transition"
              >
                {item.label}
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  )
}
