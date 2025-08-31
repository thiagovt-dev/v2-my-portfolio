"use client"

import { Suspense, useEffect } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { ExperienceSection } from "@/components/experience-section"
import { ProjectsSection } from "@/components/projects-section"
import { ProcessSection } from "@/components/process-section"
import { StackSection } from "@/components/stack-section"
import { ContactSection } from "@/components/contact-section"

export default function HomePagePT() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth"
    const link = document.createElement("link")
    link.rel = "preload"
    link.as = "font"
    link.type = "font/woff2"
    link.crossOrigin = "anonymous"
    document.head.appendChild(link)
    return () => {
      document.documentElement.style.scrollBehavior = "auto"
    }
  }, [])

  return (
    <div className="min-h-screen bg-[#0B0F1A] overflow-x-hidden">
      <Suspense fallback={null}>
        <Navbar />
      </Suspense>

      <main>
        <HeroSection />
        <ServicesSection />
        <ExperienceSection />
        <ProjectsSection />
        <ProcessSection />
        <StackSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  )
}

