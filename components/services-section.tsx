"use client"

import { motion } from "framer-motion"
import { Code, Database, Smartphone, Bot, Cloud } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { SectionHeader } from "@/components/section-header"
import { useLanguage } from "@/hooks/use-language"
import { content } from "@/lib/content"

const serviceIcons = [
  Code, // Web Apps (Next.js)
  Database, // APIs & Backends
  Database, // SQL Data Modeling
  Bot, // LLMs & N8N
  Smartphone, // Flutter Mobile
  Cloud, // DevOps & Observability
]

export function ServicesSection() {
  const { language } = useLanguage()
  const servicesContent = content.services[language]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  }

  return (
    <section id="services" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader title={servicesContent.title} subtitle={servicesContent.intro} />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {servicesContent.items.map((service, index) => {
            const Icon = serviceIcons[index] ?? Code
            return (
              <motion.div key={index} variants={itemVariants}>
                <Card className="glass border-white/10 hover:border-[#55E6FF]/30 transition-all duration-300 hover:scale-105 group h-full">
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 rounded-lg bg-gradient-to-r from-[#55E6FF]/20 to-[#22D3EE]/20 group-hover:from-[#55E6FF]/30 group-hover:to-[#22D3EE]/30 transition-all duration-300">
                        <Icon className="h-6 w-6 text-[#55E6FF]" />
                      </div>
                      <CardTitle className="text-lg font-semibold text-balance">{service.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-muted-foreground leading-relaxed text-pretty">
                      {service.desc}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
