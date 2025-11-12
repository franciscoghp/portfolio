"use client"

import { Button } from "@/components/ui/button"

interface LanguageSwitcherProps {
  currentLang: "en" | "es"
  onLanguageChange: (lang: "en" | "es") => void
}

export function LanguageSwitcher({ currentLang, onLanguageChange }: LanguageSwitcherProps) {
  return (
    <div className="flex gap-2">
      <Button
        variant={currentLang === "en" ? "default" : "outline"}
        size="sm"
        onClick={() => onLanguageChange("en")}
        className="w-12"
      >
        EN
      </Button>
      <Button
        variant={currentLang === "es" ? "default" : "outline"}
        size="sm"
        onClick={() => onLanguageChange("es")}
        className="w-12"
      >
        ES
      </Button>
    </div>
  )
}
