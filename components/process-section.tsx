"use client"

import { motion } from "framer-motion"
import { Search, Palette, Code, TestTube, Rocket, RotateCcw } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { SectionHeader } from "@/components/section-header"
import { useLanguage } from "@/hooks/use-language"
import { content } from "@/lib/content"

const processIcons = [
  Search, // Discover
  Palette, // Design
  Code, // Build
  TestTube, // Test
  Rocket, // Deploy
  RotateCcw, // Iterate
]

export function ProcessSection() {
  const { language } = useLanguage()
  const processContent = content.process[language]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const stepVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  }

  return (
    <section id="process" className="py-24 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#A78BFA]/5 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <SectionHeader title={processContent.title} />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {processContent.steps.map((step, index) => {
            const Icon = processIcons[index] ?? Search
            return (
              <motion.div key={index} variants={stepVariants}>
                <Card className="glass border-white/10 hover:border-[#A78BFA]/30 transition-all duration-300 hover:scale-105 group h-full relative overflow-hidden">
                  {/* Step number background */}
                  <div className="absolute top-4 right-4 text-6xl font-bold text-[#A78BFA]/10 group-hover:text-[#A78BFA]/20 transition-colors duration-300">
                    {(index + 1).toString().padStart(2, "0")}
                  </div>

                  <CardHeader className="pb-4 relative z-10">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-3 rounded-lg bg-gradient-to-r from-[#A78BFA]/20 to-[#55E6FF]/20 group-hover:from-[#A78BFA]/30 group-hover:to-[#55E6FF]/30 transition-all duration-300">
                        <Icon className="h-6 w-6 text-[#A78BFA]" />
                      </div>
                      <div>
                        <div className="text-sm text-[#A78BFA] font-medium mb-1">
                          {content.ui[language].step} {index + 1}
                        </div>
                        <CardTitle className="text-lg font-bold text-balance">{step.name}</CardTitle>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="relative z-10">
                    <CardDescription className="text-muted-foreground leading-relaxed text-pretty">
                      {step.desc}
                    </CardDescription>
                  </CardContent>

                  {/* Connecting line for larger screens */}
                  {index < processContent.steps.length - 1 && (
                    <div className="hidden lg:block absolute -right-3 top-1/2 transform -translate-y-1/2 z-20">
                      <div className="w-6 h-0.5 bg-gradient-to-r from-[#A78BFA]/50 to-transparent" />
                    </div>
                  )}
                </Card>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Process flow visualization for mobile */}
        <div className="lg:hidden mt-8 flex justify-center">
          <div className="flex flex-col items-center space-y-2">
            {Array.from({ length: processContent.steps.length - 1 }).map((_, index) => (
              <motion.div
                key={index}
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="w-0.5 h-8 bg-gradient-to-b from-[#A78BFA]/50 to-[#55E6FF]/50"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
