"use server"

import { headers } from "next/headers"
import { Resend } from "resend"
import { z } from "zod"
import { randomUUID } from "node:crypto"
import { persistLead } from "@/lib/lead-store"

const resend = new Resend(process.env.RESEND_API_KEY)

const RECIPIENT_EMAILS = ["goldeneagleinsagency@gmail.com"]
const FROM_EMAIL = "onboarding@resend.dev"
const SEND_USER_CONFIRMATIONS = process.env.SEND_USER_CONFIRMATIONS === "true"

const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000
const RATE_LIMIT_MAX_REQUESTS = 5
const requestLogByIp = new Map<string, number[]>()

const contactSchema = z.object({
  name: z.string().trim().min(2).max(120),
  email: z.string().trim().email().max(254),
  phone: z.string().trim().min(7).max(30),
  subject: z.string().trim().min(2).max(160),
  message: z.string().trim().min(10).max(5000),
  website: z.string().optional().default(""),
})

const quoteSchema = z.object({
  name: z.string().trim().min(2).max(120),
  email: z.string().trim().email().max(254),
  phone: z.string().trim().min(7).max(30),
  insuranceType: z.string().trim().min(2).max(120),
  coverageAmount: z.string().trim().max(120).optional().default(""),
  additionalInfo: z.string().trim().max(5000).optional().default(""),
  website: z.string().optional().default(""),
})

const claimSchema = z.object({
  policyNumber: z.string().trim().min(3).max(120),
  claimType: z.string().trim().min(2).max(120),
  name: z.string().trim().min(2).max(120),
  email: z.string().trim().email().max(254),
  phone: z.string().trim().min(7).max(30),
  incidentDate: z.string().trim().min(8).max(30),
  description: z.string().trim().min(10).max(5000),
})

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;")
}

async function getClientIp() {
  const h = await headers()
  const forwarded = h.get("x-forwarded-for")
  if (forwarded) return forwarded.split(",")[0].trim()
  return h.get("x-real-ip")?.trim() || "unknown"
}

function isRateLimited(ip: string) {
  const now = Date.now()
  const windowStart = now - RATE_LIMIT_WINDOW_MS
  const existing = requestLogByIp.get(ip) ?? []
  const recent = existing.filter((t) => t > windowStart)
  if (recent.length >= RATE_LIMIT_MAX_REQUESTS) return true
  recent.push(now)
  requestLogByIp.set(ip, recent)
  return false
}

function isHoneypotFilled(value: string | undefined) {
  return Boolean(value && value.trim().length > 0)
}

type FormResult = {
  success: boolean
  error?: string
  submissionId?: string
}

export async function submitContactForm(rawData: unknown): Promise<FormResult> {
  const parsed = contactSchema.safeParse(rawData)
  if (!parsed.success) {
    return { success: false, error: "Please check your details and try again." }
  }

  const data = parsed.data
  if (isHoneypotFilled(data.website)) {
    return { success: true }
  }

  const ip = await getClientIp()
  if (isRateLimited(ip)) {
    return { success: false, error: "Too many attempts. Please try again shortly." }
  }

  const submissionId = randomUUID()
  let emailStatus: "sent" | "skipped" | "failed" = "skipped"
  let emailError = ""

  try {
    if (!process.env.RESEND_API_KEY) {
      throw new Error("Missing RESEND_API_KEY")
    }

    await resend.emails.send({
      from: FROM_EMAIL,
      to: RECIPIENT_EMAILS,
      subject: `New Contact Form Submission - ${escapeHtml(data.subject)}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px;">
          <h2 style="color: #1a3a5c;">New Contact Form Submission</h2>
          <p><strong>Submission ID:</strong> ${submissionId}</p>
          <p><strong>Name:</strong> ${escapeHtml(data.name)}</p>
          <p><strong>Email:</strong> ${escapeHtml(data.email)}</p>
          <p><strong>Phone:</strong> ${escapeHtml(data.phone)}</p>
          <p><strong>Subject:</strong> ${escapeHtml(data.subject)}</p>
          <p><strong>Message:</strong></p>
          <p style="background-color: #f5f5f5; padding: 10px; border-radius: 5px;">${escapeHtml(data.message)}</p>
          <hr />
          <p style="color: #666; font-size: 12px;">This email was sent from www.goldeneagleltd.org contact form</p>
        </div>
      `,
    })

    if (SEND_USER_CONFIRMATIONS) {
      await resend.emails.send({
        from: FROM_EMAIL,
        to: data.email,
        subject: "We Received Your Message - Golden Eagle Insurance",
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px;">
            <h2 style="color: #1a3a5c;">Thank You for Contacting Us</h2>
            <p>Hi ${escapeHtml(data.name)},</p>
            <p>We've received your message and will respond within 24 business hours.</p>
            <p><strong>Submission ID:</strong> ${submissionId}</p>
            <p>If urgent, call +254 791 389 518.</p>
          </div>
        `,
      })
    }

    emailStatus = "sent"
  } catch (error) {
    emailStatus = "failed"
    emailError = error instanceof Error ? error.message : "Unknown email error"
    console.error("[contact] Email pipeline failed:", error)
  }

  await persistLead({
    submissionId,
    type: "contact",
    createdAt: new Date().toISOString(),
    ip,
    payload: {
      name: data.name,
      email: data.email,
      phone: data.phone,
      subject: data.subject,
      message: data.message,
    },
    emailStatus,
    emailError: emailError || undefined,
  })

  return { success: true, submissionId }
}

export async function submitQuoteForm(rawData: unknown): Promise<FormResult> {
  const parsed = quoteSchema.safeParse(rawData)
  if (!parsed.success) {
    return { success: false, error: "Please check your details and try again." }
  }

  const data = parsed.data
  if (isHoneypotFilled(data.website)) {
    return { success: true }
  }

  const ip = await getClientIp()
  if (isRateLimited(ip)) {
    return { success: false, error: "Too many attempts. Please try again shortly." }
  }

  const submissionId = randomUUID()
  let emailStatus: "sent" | "skipped" | "failed" = "skipped"
  let emailError = ""

  try {
    if (!process.env.RESEND_API_KEY) {
      throw new Error("Missing RESEND_API_KEY")
    }

    await resend.emails.send({
      from: FROM_EMAIL,
      to: RECIPIENT_EMAILS,
      subject: `New Quote Request - ${escapeHtml(data.insuranceType)}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px;">
          <h2 style="color: #1a3a5c;">New Quote Request</h2>
          <p><strong>Submission ID:</strong> ${submissionId}</p>
          <p><strong>Name:</strong> ${escapeHtml(data.name)}</p>
          <p><strong>Email:</strong> ${escapeHtml(data.email)}</p>
          <p><strong>Phone:</strong> ${escapeHtml(data.phone)}</p>
          <p><strong>Insurance Type:</strong> ${escapeHtml(data.insuranceType)}</p>
          <p><strong>Desired Coverage:</strong> ${escapeHtml(data.coverageAmount || "Not specified")}</p>
          <p><strong>Additional Information:</strong></p>
          <p style="background-color: #f5f5f5; padding: 10px; border-radius: 5px;">${escapeHtml(data.additionalInfo || "No additional details provided")}</p>
          <hr />
          <p style="color: #666; font-size: 12px;">This email was sent from www.goldeneagleltd.org quote form</p>
        </div>
      `,
    })

    if (SEND_USER_CONFIRMATIONS) {
      await resend.emails.send({
        from: FROM_EMAIL,
        to: data.email,
        subject: "Quote Request Received - Golden Eagle Insurance",
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px;">
            <h2 style="color: #1a3a5c;">Your Quote Request is Being Processed</h2>
            <p>Hi ${escapeHtml(data.name)},</p>
            <p>We've received your request and will contact you within 24-48 business hours.</p>
            <p><strong>Submission ID:</strong> ${submissionId}</p>
          </div>
        `,
      })
    }

    emailStatus = "sent"
  } catch (error) {
    emailStatus = "failed"
    emailError = error instanceof Error ? error.message : "Unknown email error"
    console.error("[quote] Email pipeline failed:", error)
  }

  await persistLead({
    submissionId,
    type: "quote",
    createdAt: new Date().toISOString(),
    ip,
    payload: {
      name: data.name,
      email: data.email,
      phone: data.phone,
      insuranceType: data.insuranceType,
      coverageAmount: data.coverageAmount || "",
      additionalInfo: data.additionalInfo || "",
    },
    emailStatus,
    emailError: emailError || undefined,
  })

  return { success: true, submissionId }
}

export async function submitClaimForm(rawData: unknown): Promise<FormResult> {
  const parsed = claimSchema.safeParse(rawData)
  if (!parsed.success) {
    return { success: false, error: "Please check your details and try again." }
  }

  const data = parsed.data
  const ip = await getClientIp()
  if (isRateLimited(ip)) {
    return { success: false, error: "Too many attempts. Please try again shortly." }
  }

  const submissionId = randomUUID()
  let emailStatus: "sent" | "skipped" | "failed" = "skipped"
  let emailError = ""

  try {
    if (!process.env.RESEND_API_KEY) {
      throw new Error("Missing RESEND_API_KEY")
    }

    await resend.emails.send({
      from: FROM_EMAIL,
      to: RECIPIENT_EMAILS,
      subject: `New Claim Submission - ${escapeHtml(data.claimType)}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px;">
          <h2 style="color: #1a3a5c;">New Claim Submission</h2>
          <p><strong>Submission ID:</strong> ${submissionId}</p>
          <p><strong>Policy Number:</strong> ${escapeHtml(data.policyNumber)}</p>
          <p><strong>Claim Type:</strong> ${escapeHtml(data.claimType)}</p>
          <p><strong>Name:</strong> ${escapeHtml(data.name)}</p>
          <p><strong>Email:</strong> ${escapeHtml(data.email)}</p>
          <p><strong>Phone:</strong> ${escapeHtml(data.phone)}</p>
          <p><strong>Incident Date:</strong> ${escapeHtml(data.incidentDate)}</p>
          <p><strong>Description:</strong></p>
          <p style="background-color: #f5f5f5; padding: 10px; border-radius: 5px;">${escapeHtml(data.description)}</p>
          <hr />
          <p style="color: #666; font-size: 12px;">This email was sent from www.goldeneagleltd.org claims form</p>
        </div>
      `,
    })

    emailStatus = "sent"
  } catch (error) {
    emailStatus = "failed"
    emailError = error instanceof Error ? error.message : "Unknown email error"
    console.error("[claim] Email pipeline failed:", error)
  }

  await persistLead({
    submissionId,
    type: "claim",
    createdAt: new Date().toISOString(),
    ip,
    payload: data,
    emailStatus,
    emailError: emailError || undefined,
  })

  return { success: true, submissionId }
}

