"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { SectionHeader } from "@/components/section-header"
import { useLanguage } from "@/hooks/use-language"
import { content } from "@/lib/content"

export function ProjectsSection() {
  const { language } = useLanguage()
  const { scrollY } = useScroll()
  const projectsContent = content.projects[language]

  // Parallax effect for background
  const backgroundY = useTransform(scrollY, [0, 2000], [0, -400])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  }

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Parallax Background */}
      <motion.div style={{ y: backgroundY }} className="absolute inset-0 -z-10">
        {/* Gradient Background Band */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#55E6FF]/10 via-[#A78BFA]/10 to-[#22D3EE]/10" />

        {/* Animated Background Elements */}
        <motion.div
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 50,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-[#55E6FF]/5 to-[#A78BFA]/5 rounded-full blur-3xl"
        />

        <motion.div
          animate={{
            rotate: [360, 0],
          }}
          transition={{
            duration: 40,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-[#22D3EE]/5 to-[#55E6FF]/5 rounded-full blur-3xl"
        />

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
              linear-gradient(rgba(85, 230, 255, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(85, 230, 255, 0.1) 1px, transparent 1px)
            `,
              backgroundSize: "50px 50px",
            }}
          />
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader title={projectsContent.title} />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {projectsContent.cards.map((project, index) => (
            <motion.div key={project.slug} variants={cardVariants}>
              <Card className="glass border-white/10 hover:border-[#55E6FF]/50 transition-all duration-500 hover:scale-[1.02] group h-full neon-glow-secondary hover:neon-glow">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <CardTitle className="text-xl font-bold text-balance leading-tight group-hover:text-[#55E6FF] transition-colors duration-300">
                      {project.title}
                    </CardTitle>
                    <div className="flex gap-2 flex-shrink-0">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="p-2 h-auto glass-hover border border-white/10 hover:border-[#55E6FF]/50"
                        asChild
                      >
                        <a href={project.links.demo} target="_blank" rel="noopener noreferrer" aria-label="View demo">
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="p-2 h-auto glass-hover border border-white/10 hover:border-[#55E6FF]/50"
                        asChild
                      >
                        <a
                          href={project.links.repo}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="View repository"
                        >
                          <Github className="h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </div>
                  <CardDescription className="text-muted-foreground leading-relaxed text-pretty">
                    {project.summary}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* Highlights */}
                  <div>
                    <h4 className="text-sm font-semibold mb-3 text-[#55E6FF]">{content.ui[language].keyHighlights}</h4>
                    <ul className="space-y-2">
                      {project.highlights.map((highlight, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#55E6FF] mt-2 flex-shrink-0" />
                          <span className="text-pretty">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack */}
                  <div>
                    <h4 className="text-sm font-semibold mb-3 text-[#A78BFA]">{content.ui[language].techStack}</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.stack.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="glass border border-[#A78BFA]/30 text-[#A78BFA] hover:bg-[#A78BFA]/10 text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-lg text-muted-foreground mb-6 text-pretty">{content.ui[language].wantToSeeMore}</p>
          <Button
            size="lg"
            onClick={() => {
              const element = document.getElementById("contact")
              if (element) element.scrollIntoView({ behavior: "smooth" })
            }}
            className="bg-gradient-to-r from-[#A78BFA] to-[#55E6FF] hover:from-[#55E6FF] hover:to-[#A78BFA] text-black font-semibold px-8 py-3 neon-glow-secondary transition-all duration-300 hover:scale-105"
          >
            {content.ui[language].letsTalk}
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
