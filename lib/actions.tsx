"use server"

import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

// Email recipients
const RECIPIENTS = ["info@goldeneagle.co.ke", "goldeneagleinsagency@gmail.com"]

interface ContactFormData {
  name: string
  email: string
  phone: string
  subject: string
  message: string
}

interface QuoteFormData {
  name: string
  email: string
  phone: string
  insuranceType: string
  coverageAmount: string
  additionalInfo: string
}

export async function submitContactForm(data: ContactFormData) {
  try {
    // Send email to admin
    await resend.emails.send({
      from: "noreply@goldeneagle.co.ke",
      to: RECIPIENTS,
      subject: `New Contact Form Submission: ${data.subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1a3a5c;">New Contact Form Submission</h2>
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${data.name}</p>
            <p><strong>Email:</strong> ${data.email}</p>
            <p><strong>Phone:</strong> ${data.phone}</p>
            <p><strong>Subject:</strong> ${data.subject}</p>
            <p><strong>Message:</strong></p>
            <p style="white-space: pre-wrap;">${data.message}</p>
          </div>
          <p style="color: #666; font-size: 12px;">This is an automated message from your website contact form.</p>
        </div>
      `,
    })

    // Send confirmation email to user
    await resend.emails.send({
      from: "noreply@goldeneagle.co.ke",
      to: data.email,
      subject: "We received your message - Golden Eagle Insurance",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1a3a5c;">Thank You for Contacting Us</h2>
          <p>Hi ${data.name},</p>
          <p>We have received your message and appreciate you reaching out to Golden Eagle Insurance Agency.</p>
          <p>Our team will review your inquiry and get back to you within 24 hours.</p>
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Your Message Details:</strong></p>
            <p><strong>Subject:</strong> ${data.subject}</p>
            <p><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>
          </div>
          <p>If you have any urgent matters, please call us at +254 722 518 485.</p>
          <p>Best regards,<br/>Golden Eagle Insurance Agency Team</p>
        </div>
      `,
    })

    return { success: true }
  } catch (error) {
    console.error("[v0] Contact form submission error:", error)
    return { success: false, error: "Failed to send message" }
  }
}

export async function submitQuoteForm(data: QuoteFormData) {
  try {
    // Send email to admin
    await resend.emails.send({
      from: "noreply@goldeneagle.co.ke",
      to: RECIPIENTS,
      subject: `New Quote Request: ${data.insuranceType}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1a3a5c;">New Quote Request</h2>
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${data.name}</p>
            <p><strong>Email:</strong> ${data.email}</p>
            <p><strong>Phone:</strong> ${data.phone}</p>
            <p><strong>Insurance Type:</strong> ${data.insuranceType}</p>
            <p><strong>Coverage Amount:</strong> ${data.coverageAmount || "Not specified"}</p>
            <p><strong>Additional Information:</strong></p>
            <p style="white-space: pre-wrap;">${data.additionalInfo || "None provided"}</p>
          </div>
          <p style="color: #666; font-size: 12px;">This is an automated message from your website quote form.</p>
        </div>
      `,
    })

    // Send confirmation email to user
    await resend.emails.send({
      from: "noreply@goldeneagle.co.ke",
      to: data.email,
      subject: "Your Quote Request - Golden Eagle Insurance",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1a3a5c;">Quote Request Received</h2>
          <p>Hi ${data.name},</p>
          <p>Thank you for requesting a quote from Golden Eagle Insurance Agency!</p>
          <p>We have received your request for <strong>${data.insuranceType}</strong> and our team will prepare a personalized quote for you.</p>
          <p>You can expect to hear from us within 24 hours with your customized quote.</p>
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Your Request Details:</strong></p>
            <p><strong>Insurance Type:</strong> ${data.insuranceType}</p>
            <p><strong>Coverage Level:</strong> ${data.coverageAmount || "To be discussed"}</p>
            <p><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>
          </div>
          <p>If you need immediate assistance, please call us at +254 791 389 518.</p>
          <p>Best regards,<br/>Golden Eagle Insurance Agency Team</p>
        </div>
      `,
    })

    return { success: true }
  } catch (error) {
    console.error("[v0] Quote form submission error:", error)
    return { success: false, error: "Failed to submit quote request" }
  }
}
