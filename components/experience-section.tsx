"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { SectionHeader } from "@/components/section-header";
import { useLanguage } from "@/hooks/use-language";
import { content } from "@/lib/content";

export function ExperienceSection() {
  const { language } = useLanguage();
  const experienceContent = content.experience[language];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="experience" className="py-24 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#55E6FF]/5 to-transparent" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <SectionHeader title={experienceContent.title} />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-6">
          {experienceContent.bullets.map((bullet, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex items-start gap-4 p-6 glass border border-white/10 rounded-lg hover:border-[#55E6FF]/30 transition-all duration-300 group">
              <div className="flex-shrink-0 mt-1">
                <CheckCircle className="h-6 w-6 text-[#55E6FF] group-hover:scale-110 transition-transform duration-300" />
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed text-pretty group-hover:text-foreground transition-colors duration-300">
                {bullet}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats decoration */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 text-center">
          <div className="space-y-2">
            <div className="text-3xl font-bold bg-gradient-to-r from-[#55E6FF] to-[#22D3EE] bg-clip-text text-transparent">
              5+
            </div>
            <div className="text-sm text-muted-foreground">
              {content.ui[language].yearsExperience}
            </div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold bg-gradient-to-r from-[#A78BFA] to-[#55E6FF] bg-clip-text text-transparent">
              20+
            </div>
            <div className="text-sm text-muted-foreground">
              {content.ui[language].satisfiedCustormers}
            </div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold bg-gradient-to-r from-[#22D3EE] to-[#A78BFA] bg-clip-text text-transparent">
              99.9%
            </div>
            <div className="text-sm text-muted-foreground">{content.ui[language].uptime}</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold bg-gradient-to-r from-[#55E6FF] to-[#A78BFA] bg-clip-text text-transparent whitespace-nowrap">
              {language === "pt" ? "2–6 semanas" : "2–6 weeks"}
            </div>
            <div className="text-sm text-muted-foreground">{content.ui[language].mvpTime}</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
