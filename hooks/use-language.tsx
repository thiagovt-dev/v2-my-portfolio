"use client"

import { createContext, useContext, useEffect, useMemo, useState } from "react"
import type { ReactNode } from "react"

export type Language = "en" | "pt"

type LanguageContextValue = {
  language: Language
  toggleLanguage: () => void
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined)

export function LanguageProvider({ children, initialLanguage }: { children: ReactNode; initialLanguage?: Language }) {
  const [language, setLanguage] = useState<Language>(initialLanguage ?? "pt")

  useEffect(() => {
    try {
      localStorage.setItem("portfolio-language", language)
    } catch {}
  }, [language])

  useEffect(() => {
    try {
      const saved = localStorage.getItem("portfolio-language") as Language | null
      if (saved === "en" || saved === "pt") {
        if (saved !== language) setLanguage(saved)
      }
    } catch {}
  }, [])

  const value = useMemo<LanguageContextValue>(
    () => ({
      language,
      toggleLanguage: () => setLanguage((prev) => (prev === "en" ? "pt" : "en")),
    }),
    [language]
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext)
  if (ctx) return ctx
  // Fallback for components rendered outside the provider
  // Keeps previous behavior but without cross-component sync
  const [language, setLanguage] = useState<Language>("pt")
  useEffect(() => {
    const saved = localStorage.getItem("portfolio-language") as Language | null
    if (saved === "en" || saved === "pt") setLanguage(saved)
  }, [])
  return {
    language,
    toggleLanguage: () => {
      const next = language === "en" ? "pt" : "en"
      setLanguage(next)
      try {
        localStorage.setItem("portfolio-language", next)
      } catch {}
    },
  }
}
