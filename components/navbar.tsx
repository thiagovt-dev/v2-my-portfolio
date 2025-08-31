"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Languages } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/hooks/use-language"
import { content } from "@/lib/content"
import { TypeAnimation } from "react-type-animation";


export function Navbar() {
  const { language, toggleLanguage } = useLanguage()
  const [activeSection, setActiveSection] = useState("home")
  const [isScrolled, setIsScrolled] = useState(false)

  const navItems = content.nav[language]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      // Update active section based on scroll position
      const sections = ["home", "services", "projects", "experience", "process", "stack", "contact"]
      const current = sections.find((section) => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (current) setActiveSection(current)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass backdrop-blur-xl" : "bg-transparent"
      }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="w-1/4 text-xl font-bold bg-gradient-to-r from-[#55E6FF] to-[#A78BFA] bg-clip-text text-transparent">
            <TypeAnimation
              sequence={[
                "Thiago Vasconcelos", 
                2000,
                "Engenheiro de Software", 
                2000,
                "Web/Mobile", 
                2000,
              ]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
            />
          </motion.div>

          <div className="hidden md:flex items-center space-x-8">
            {Object.entries(navItems).map(([key, label]) => (
              <button
                key={key}
                onClick={() => scrollToSection(key)}
                className={`text-sm font-medium transition-colors duration-200 hover:text-[#55E6FF] ${
                  activeSection === key ? "text-[#55E6FF]" : "text-muted-foreground"
                }`}>
                {label}
              </button>
            ))}
          </div>

          <Button
            variant="ghost"
            size="sm"
            onClick={toggleLanguage}
            className="glass-hover border border-white/10">
            <Languages className="h-4 w-4 mr-2" />
            {language.toUpperCase()}
          </Button>
        </div>
      </div>
    </motion.nav>
  );
}
