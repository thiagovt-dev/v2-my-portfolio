"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Twitter } from "lucide-react"
import { useLanguage } from "@/hooks/use-language"
import { content } from "@/lib/content"

export function Footer() {
  const { language } = useLanguage()
  const currentYear = new Date().getFullYear()
  const footerText = content.footer[language].replace("{{year}}", currentYear.toString())

  const socialLinks = [
    { icon: Github, href: content.profile.social.github, label: content.ui[language].github },
    { icon: Linkedin, href: content.profile.social.linkedin, label: content.ui[language].linkedin },
    { icon: Twitter, href: content.profile.social.x, label: content.ui[language].twitter },
  ]

  return (
    <footer className="border-t border-white/10 bg-black/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold mb-2">{content.profile.name}</h3>
            <p className="text-muted-foreground text-sm">{content.profile.location}</p>
          </div>

          <div className="flex items-center gap-4">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 glass glass-hover rounded-full border border-white/10 hover:border-[#55E6FF]/50 transition-colors"
                aria-label={label}
              >
                <Icon className="h-5 w-5" />
              </motion.a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/10 text-center">
          <p className="text-sm text-muted-foreground">{footerText}</p>
        </div>
      </div>
    </footer>
  )
}
