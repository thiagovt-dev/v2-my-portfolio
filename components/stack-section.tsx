"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { SectionHeader } from "@/components/section-header"
import { useLanguage } from "@/hooks/use-language"
import { content } from "@/lib/content"

export function StackSection() {
  const { language } = useLanguage()
  const stackContent = content.stack[language]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const groupVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  }

  const badgeVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
      },
    },
  }

  // Color schemes for different tech groups
  const groupColors = [
    { border: "#55E6FF", bg: "#55E6FF", text: "#55E6FF" }, // Frontend - Cyan
    { border: "#22D3EE", bg: "#22D3EE", text: "#22D3EE" }, // Backend - Light Blue
    { border: "#A78BFA", bg: "#A78BFA", text: "#A78BFA" }, // Data - Purple
    { border: "#55E6FF", bg: "#55E6FF", text: "#55E6FF" }, // AI/Automation - Cyan
    { border: "#22D3EE", bg: "#22D3EE", text: "#22D3EE" }, // Mobile - Light Blue
    { border: "#A78BFA", bg: "#A78BFA", text: "#A78BFA" }, // DevOps - Purple
  ]

  return (
    <section id="stack" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader title={stackContent.title} />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {stackContent.groups.map((group, groupIndex) => {
            const colors = groupColors[groupIndex % groupColors.length]
            return (
              <motion.div key={groupIndex} variants={groupVariants}>
                <Card className="glass border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 group h-full">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-lg font-bold text-center mb-4" style={{ color: colors.text }}>
                      {group.name}
                    </CardTitle>
                  </CardHeader>

                  <CardContent>
                    <motion.div variants={containerVariants} className="flex flex-wrap gap-2 justify-center">
                      {group.items.map((tech, techIndex) => (
                        <motion.div key={`${groupIndex}-${techIndex}`} variants={badgeVariants} custom={techIndex}>
                          <Badge
                            variant="secondary"
                            className="glass border transition-all duration-300 hover:scale-110 cursor-default"
                            style={{
                              borderColor: `${colors.border}30`,
                              color: colors.text,
                              backgroundColor: `${colors.bg}10`,
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.borderColor = `${colors.border}60`
                              e.currentTarget.style.backgroundColor = `${colors.bg}20`
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.borderColor = `${colors.border}30`
                              e.currentTarget.style.backgroundColor = `${colors.bg}10`
                            }}
                          >
                            {tech}
                          </Badge>
                        </motion.div>
                      ))}
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Additional tech info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-lg text-muted-foreground text-pretty max-w-3xl mx-auto leading-relaxed">
            {language === "en"
              ? "Always learning and adapting to new technologies. I choose the right tool for each project, prioritizing performance, maintainability, and client satisfaction."
              : "Sempre aprendendo e me adaptando a novas tecnologias. Escolho a ferramenta certa para cada projeto, priorizando performance, manutenibilidade e satisfação do cliente."}
          </p>
        </motion.div>
      </div>
    </section>
  )
}
