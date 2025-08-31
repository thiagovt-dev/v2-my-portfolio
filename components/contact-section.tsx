"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Send, Mail, MapPin, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { SectionHeader } from "@/components/section-header"
import { useLanguage } from "@/hooks/use-language"
import { content } from "@/lib/content"

export function ContactSection() {
  const { language } = useLanguage()
  const contactContent = content.contact[language]
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    company: "", // honeypot
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, language }),
      })

      const data = await res.json().catch(() => ({}))
      if (res.status === 429) {
        throw new Error(
          language === "en"
            ? "You've reached the message limit. Please try again later."
            : "Você atingiu o limite de envios. Tente novamente mais tarde."
        )
      }
      if (!res.ok || data?.ok === false) {
        throw new Error(data?.error || "Falha ao enviar mensagem")
      }

      setIsSubmitted(true)
      setFormData({ name: "", email: "", subject: "", message: "" })

      // Oculta o sucesso depois de alguns segundos
      setTimeout(() => setIsSubmitted(false), 3000)
    } catch (err: any) {
      setError(
        language === "en"
          ? "Unable to send your message. Please try again later."
          : "Não foi possível enviar sua mensagem. Tente novamente mais tarde."
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  const isEmailValid = emailRegex.test(formData.email)
  const isFormValid = Boolean(formData.name && isEmailValid && formData.message)

  return (
    <section id="contact" className="py-24 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F1A] via-transparent to-transparent" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <SectionHeader title={contactContent.title} subtitle={contactContent.subtitle} />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-[#55E6FF] to-[#A78BFA] bg-clip-text text-transparent">
                {language === "en" ? "Get in Touch" : "Entre em Contato"}
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
                {language === "en"
                  ? "Ready to bring your ideas to life? Let's discuss your project and explore how we can work together to create something amazing."
                  : "Pronto para dar vida às suas ideias? Vamos discutir seu projeto e explorar como podemos trabalhar juntos para criar algo incrível."}
              </p>
            </div>

            <div className="space-y-6">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="flex items-center gap-4 p-4 glass border border-white/10 rounded-lg hover:border-[#55E6FF]/30 transition-all duration-300"
              >
                <div className="p-3 rounded-lg bg-gradient-to-r from-[#55E6FF]/20 to-[#22D3EE]/20">
                  <Mail className="h-6 w-6 text-[#55E6FF]" />
                </div>
                <div>
                  <div className="font-semibold">Email</div>
                  <div className="text-muted-foreground">{content.profile.email}</div>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="flex items-center gap-4 p-4 glass border border-white/10 rounded-lg hover:border-[#A78BFA]/30 transition-all duration-300"
              >
                <div className="p-3 rounded-lg bg-gradient-to-r from-[#A78BFA]/20 to-[#55E6FF]/20">
                  <MapPin className="h-6 w-6 text-[#A78BFA]" />
                </div>
                <div>
                  <div className="font-semibold">{language === "en" ? "Location" : "Localização"}</div>
                  <div className="text-muted-foreground">{content.profile.location}</div>
                </div>
              </motion.div>
            </div>

            <div className="pt-6">
              <p className="text-sm text-muted-foreground mb-4">
                {language === "en"
                  ? "Response time: Usually within 24 hours"
                  : "Tempo de resposta: Geralmente em 24 horas"}
              </p>
              <div className="flex items-center gap-2 text-sm text-[#55E6FF]">
                <CheckCircle className="h-4 w-4" />
                {language === "en" ? "Available for new projects" : "Disponível para novos projetos"}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Card className="glass border-white/10 hover:border-[#55E6FF]/30 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl font-bold">
                  {language === "en" ? "Send a Message" : "Enviar Mensagem"}
                </CardTitle>
              </CardHeader>
              <CardContent>
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-8"
                  >
                    <CheckCircle className="h-16 w-16 text-[#55E6FF] mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2 text-[#55E6FF]">
                      {language === "en" ? "Message Sent!" : "Mensagem Enviada!"}
                    </h3>
                    <p className="text-muted-foreground">{contactContent.success}</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Honeypot field (should remain empty) */}
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      autoComplete="organization"
                      tabIndex={-1}
                      aria-hidden
                      className="hidden"
                    />
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">
                          {language === "en" ? "Name" : "Nome"} <span className="text-red-400">*</span>
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="glass border-white/20 focus:border-[#55E6FF]/50 bg-white/5"
                          placeholder={language === "en" ? "Your name" : "Seu nome"}
                          maxLength={100}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">
                          Email <span className="text-red-400">*</span>
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="glass border-white/20 focus:border-[#55E6FF]/50 bg-white/5"
                          placeholder={language === "en" ? "your@email.com" : "seu@email.com"}
                        />
                        {!!formData.email && !isEmailValid && (
                          <p className="text-xs text-red-400">
                            {language === "en" ? "Enter a valid email." : "Informe um email válido."}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">{language === "en" ? "Subject" : "Assunto"}</Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        maxLength={150}
                        className="glass border-white/20 focus:border-[#55E6FF]/50 bg-white/5"
                        placeholder={language === "en" ? "Project discussion" : "Discussão de projeto"}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">
                        {language === "en" ? "Message" : "Mensagem"} <span className="text-red-400">*</span>
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={5}
                        maxLength={5000}
                        className="glass border-white/20 focus:border-[#55E6FF]/50 bg-white/5 resize-none"
                        placeholder={
                          language === "en"
                            ? "Tell me about your project, timeline, and requirements..."
                            : "Conte-me sobre seu projeto, cronograma e requisitos..."
                        }
                      />
                    </div>

                    {error && (
                      <p className="text-sm text-red-400 -mt-2">{error}</p>
                    )}

                    <Button
                      type="submit"
                      disabled={!isFormValid || isSubmitting}
                      className="w-full bg-gradient-to-r from-[#55E6FF] to-[#22D3EE] hover:from-[#22D3EE] hover:to-[#55E6FF] text-black font-semibold py-3 neon-glow transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                          {language === "en" ? "Sending..." : "Enviando..."}
                        </div>
                      ) : (
                        <div className="flex items-center gap-2">
                          <Send className="h-4 w-4" />
                          {contactContent.cta}
                        </div>
                      )}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
