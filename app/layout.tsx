import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { LanguageProvider } from "@/hooks/use-language"
import "./globals.css"

export const metadata: Metadata = {
  title: "Thiago - Full-Stack Software Engineer | Next.js, Node.js, Flutter",
  description:
    "Full-Stack Software Engineer specialized in Next.js, Node.js/TypeScript, PHP (PHP/Laravel), NestJS, SQL databases, LLM models, N8N chatbots/automations, and Flutter development.",
  keywords: [
    "Full-Stack Software Engineer",
    "Next.js",
    "Node.js",
    "TypeScript",
    "PHP/Laravel",
    "NestJS",
    "Flutter",
    "LLM",
    "N8N",
    "SQL",
  ],
  authors: [{ name: "Thiago Vasconcelos" }],
  creator: "Thiago Vasconcelos",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    alternateLocale: ["en_US"],
    title: "Thiago - Full-Stack Software Engineer",
    description:
      "Full-Stack Software Engineer specialized in Next.js, Node.js/TypeScript, PHP (PHP/Laravel), NestJS, SQL databases, LLM models, N8N chatbots/automations, and Flutter development.",
    siteName: "Thiago Portfolio",
  },
  alternates: {
    canonical: "/",
    languages: {
      // PT como padrão do site
      "pt-BR": "/",
      // Página em EN opcional (ajuste a rota se existir)
      "en-US": "/",
    },
  },
  twitter: {
    card: "summary_large_image",
    title: "Thiago - Full-Stack Software Engineer",
    description:
      "Full-Stack Software Engineer specialized in Next.js, Node.js/TypeScript, PHP (PHP/Laravel), NestJS, SQL databases, LLM models, N8N chatbots/automations, and Flutter development.",
  },
  robots: {
    index: true,
    follow: true,
  },
  generator: "Thiago Vasconcelos",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt" className="dark">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <LanguageProvider initialLanguage="pt">
          <Suspense fallback={null}>{children}</Suspense>
        </LanguageProvider>
        <Analytics />
      </body>
    </html>
  )
}
