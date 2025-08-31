import type { NextRequest } from "next/server"
import { NextResponse } from "next/server"
import nodemailer from "nodemailer"
import { z } from "zod"

// Simple in-memory rate limiter per IP
const RATE_WINDOW_MS = 60 * 60 * 1000 // 1 hour
const RATE_MAX = 5 // max submissions per window
type Entry = { count: number; resetAt: number }
const globalAny = globalThis as unknown as { __rateMap?: Map<string, Entry> }
const rateMap = (globalAny.__rateMap = globalAny.__rateMap || new Map<string, Entry>())

function getClientIp(req: NextRequest) {
  const xf = req.headers.get("x-forwarded-for") || ""
  if (xf) return xf.split(",")[0].trim()
  const xr = req.headers.get("x-real-ip")
  if (xr) return xr
  // Last resort: use user agent hash to avoid crashing; not ideal
  return req.headers.get("user-agent") || "unknown"
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()

    const schema = z.object({
      name: z.string().min(1).max(100),
      email: z.string().email().max(254),
      subject: z.string().max(150).optional().or(z.literal("")),
      message: z.string().min(1).max(5000),
      language: z.enum(["en", "pt"]).optional(),
      // Honeypot: must be empty if present
      company: z.string().length(0).optional(),
    })

    const parsed = schema.safeParse(body)
    if (!parsed.success) {
      return NextResponse.json(
        { ok: false, error: "Invalid payload" },
        { status: 400 }
      )
    }

    // If honeypot was filled, pretend success and drop
    if (typeof body.company === "string" && body.company.trim() !== "") {
      return NextResponse.json({ ok: true })
    }

    const { name, email, message } = parsed.data
    const subject = (parsed.data.subject || "").trim()
    const language = (parsed.data.language || "pt") as "en" | "pt"

    // Rate limit by IP
    const ip = getClientIp(req)
    const now = Date.now()
    const entry = rateMap.get(ip)
    if (!entry || entry.resetAt < now) {
      rateMap.set(ip, { count: 1, resetAt: now + RATE_WINDOW_MS })
    } else {
      if (entry.count >= RATE_MAX) {
        const seconds = Math.max(1, Math.floor((entry.resetAt - now) / 1000))
        return new NextResponse(
          JSON.stringify({ ok: false, error: "Rate limit exceeded" }),
          { status: 429, headers: { "Content-Type": "application/json", "Retry-After": String(seconds) } }
        )
      }
      entry.count += 1
    }

    const host = process.env.SMTP_HOST
    const port = Number(process.env.SMTP_PORT || 587)
    const user = process.env.SMTP_USER
    const pass = process.env.SMTP_PASS
    const to = process.env.CONTACT_TO || process.env.SMTP_USER
    const from = process.env.CONTACT_FROM || process.env.SMTP_USER

    if (!host || !user || !pass || !to || !from) {
      return NextResponse.json(
        { ok: false, error: "Email transport not configured" },
        { status: 500 }
      )
    }

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: { user, pass },
    })

    const mailSubject = subject
      ? `${language === "pt" ? "[Portfólio]" : "[Portfolio]"} ${subject}`
      : language === "pt" ? "Novo contato pelo portfólio" : "New contact from portfolio"

    const plain = (language === "pt"
      ? `Novo contato recebido\n\n` +
        `Nome: ${name}\n` +
        `Email: ${email}\n` +
        `Assunto: ${subject || "(não informado)"}\n\n` +
        `Mensagem:\n${message}`
      : `New contact received\n\n` +
        `Name: ${name}\n` +
        `Email: ${email}\n` +
        `Subject: ${subject || "(not provided)"}\n\n` +
        `Message:\n${message}`)

    const html = `
      <div style="font-family: system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif; line-height:1.5; color:#111">
        <h2 style="margin:0 0 12px">${language === "pt" ? "Novo contato pelo portfólio" : "New contact from portfolio"}</h2>
        <p style="margin:0 0 8px"><strong>${language === "pt" ? "Nome" : "Name"}:</strong> ${escapeHtml(name)}</p>
        <p style="margin:0 0 8px"><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p style="margin:0 0 16px"><strong>${language === "pt" ? "Assunto" : "Subject"}:</strong> ${escapeHtml(subject || (language === "pt" ? "(não informado)" : "(not provided)"))}</p>
        <div style="padding:12px;border:1px solid #eee;border-radius:8px;white-space:pre-wrap">${escapeHtml(message)}</div>
      </div>
    `

    await transporter.sendMail({
      from,
      to,
      subject: mailSubject,
      replyTo: email,
      text: plain,
      html,
    })

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error("/api/contact error:", err)
    return NextResponse.json({ ok: false, error: "Internal error" }, { status: 500 })
  }
}

function escapeHtml(input: string) {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;")
}

export const dynamic = "force-dynamic"
export const revalidate = 0
export const runtime = "nodejs"
