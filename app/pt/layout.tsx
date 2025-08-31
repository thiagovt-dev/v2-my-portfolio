import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { LanguageProvider } from "@/hooks/use-language"
import "../globals.css"

export const metadata: Metadata = {
  title: "Thiago - Engenheiro de Software Full-Stack | Next.js, Node.js, Flutter",
  description:
    "Engenheiro de Software Full-Stack especializado em Next.js, Node.js/TypeScript, PHP (PHP/Laravel), NestJS, bancos SQL, LLMs, automações/chatbots N8N e Flutter.",
  keywords: [
    "Engenheiro Full-Stack",
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
  authors: [{ name: "Thiago" }],
  creator: "Thiago",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    alternateLocale: ["en_US"],
    title: "Thiago - Engenheiro de Software Full-Stack",
    description:
      "Engenheiro de Software Full-Stack especializado em Next.js, Node.js/TypeScript, PHP (PHP/Laravel), NestJS, bancos SQL, LLMs, automações/chatbots N8N e Flutter.",
    siteName: "Portfólio Thiago",
  },
  alternates: {
    canonical: "/pt",
    languages: {
      "en-US": "/",
      "pt-BR": "/pt",
    },
  },
  twitter: {
    card: "summary_large_image",
    title: "Thiago - Engenheiro de Software Full-Stack",
    description:
      "Engenheiro de Software Full-Stack especializado em Next.js, Node.js/TypeScript, PHP (PHP/Laravel), NestJS, SQL, LLMs, N8N e Flutter.",
  },
  robots: {
    index: true,
    follow: true,
  },
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

