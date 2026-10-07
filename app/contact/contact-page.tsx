"use client"

import type React from "react"

import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { PageHero } from "@/components/page-hero"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { MapPin, Phone, Mail, Clock, TrendingUp } from "lucide-react"
import { useState } from "react"
import { submitContactForm } from "@/lib/actions"
import {
  ADVISORY_PHONE_DISPLAY,
  ADVISORY_PHONE_TEL,
  BUSINESS_HOURS,
  CONTACT_EMAIL,
  PHONE_DISPLAY,
  PHONE_TEL,
  WHATSAPP_NUMBER,
} from "@/lib/site"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    website: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [reference, setReference] = useState("")
  const [errorMessage, setErrorMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")
    setErrorMessage("")

    try {
      const result = await submitContactForm(formData)

      if (result.success) {
        setReference(result.submissionId?.slice(0, 8).toUpperCase() ?? "")
        setSubmitStatus("success")
        setFormData({ name: "", email: "", phone: "", subject: "", message: "", website: "" })
      } else {
        setSubmitStatus("error")
        setErrorMessage(result.error || "Please try again.")
      }
    } catch (error) {
      console.error("Contact form submission error:", error)
      setSubmitStatus("error")
      setErrorMessage("Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <main className="flex-1">
        <PageHero
          image="/nairobi-cityscape-hero.jpg"
          imageAlt="Nairobi cityscape"
          eyebrow="Contact"
          title="Get in Touch"
          subtitle="Call, WhatsApp or write to us. We reply within one business day, and meet clients in person by appointment."
        />

        {/* Contact Information & Form */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Contact Information */}
              <div className="lg:col-span-1">
                <div className="divide-y divide-primary/10 rounded-2xl border border-primary/10">
                  <div className="flex items-start gap-4 p-6">
                    <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-secondary" />
                    <div>
                      <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">Meet Us</h3>
                      <p className="mt-1 text-sm text-primary">
                        Based in Nairobi. We meet clients in person, by appointment.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-6">
                    <Phone className="mt-0.5 h-5 w-5 shrink-0 text-secondary" />
                    <div>
                      <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">Call or WhatsApp</h3>
                      <p className="mt-1 text-sm text-primary">
                        <a href={`tel:${PHONE_TEL}`} className="transition-colors hover:text-secondary">
                          {PHONE_DISPLAY}
                        </a>
                      </p>
                      <a
                        href={`https://wa.me/${WHATSAPP_NUMBER}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-1 inline-block text-sm text-primary underline hover:text-primary/80"
                      >
                        Open WhatsApp
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-6">
                    <TrendingUp className="mt-0.5 h-5 w-5 shrink-0 text-secondary" />
                    <div>
                      <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">Investment Advisory</h3>
                      <p className="mt-1 text-sm text-primary">
                        Lydia Wanjiku Mwangi, Lead Advisor
                        <br />
                        <a href={`tel:${ADVISORY_PHONE_TEL}`} className="transition-colors hover:text-secondary">
                          {ADVISORY_PHONE_DISPLAY}
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-6">
                    <Mail className="mt-0.5 h-5 w-5 shrink-0 text-secondary" />
                    <div>
                      <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">Email Us</h3>
                      <p className="mt-1 text-sm text-primary">
                        <a href={`mailto:${CONTACT_EMAIL}`} className="break-all transition-colors hover:text-secondary">
                          {CONTACT_EMAIL}
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-6">
                    <Clock className="mt-0.5 h-5 w-5 shrink-0 text-secondary" />
                    <div>
                      <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">Business Hours</h3>
                      <ul className="mt-1 text-sm text-primary">
                        {BUSINESS_HOURS.map((line) => (
                          <li key={line}>{line}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                <Card>
                  <CardContent className="p-8">
                    <h2 className="text-2xl font-serif font-bold text-primary mb-6">Send Us a Message</h2>

                    {submitStatus === "success" && (
                      <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-800">
                        Thank you. We&apos;ll get back to you within one business day.
                        {reference ? <span className="mt-1 block text-sm">Your reference: <strong>{reference}</strong></span> : null}
                      </div>
                    )}

                    {submitStatus === "error" && (
                      <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-800">
                        {errorMessage || `We couldn't send your message. Please call or WhatsApp us on ${PHONE_DISPLAY}.`}
                      </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <input
                        type="text"
                        name="website"
                        value={formData.website}
                        onChange={handleChange}
                        className="hidden"
                        tabIndex={-1}
                        autoComplete="off"
                        aria-hidden="true"
                      />
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="name">Full Name *</Label>
                          <Input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address *</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number *</Label>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="+254 7XX XXX XXX"
                            required
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="subject">Subject *</Label>
                          <Input
                            id="subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            placeholder="e.g. Medical cover for my family"
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Message *</Label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Tell us what you need help with."
                          rows={6}
                          required
                        />
                      </div>

                      <Button
                        type="submit"
                        size="lg"
                        className="w-full md:w-auto bg-secondary hover:bg-secondary/90 text-primary font-semibold"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Sending..." : "Send Message"}
                      </Button>
                      <p className="text-xs text-muted-foreground">
                        By sending this form, you agree that we can contact you about your enquiry. See our{" "}
                        <a href="/privacy-policy" className="text-primary underline hover:text-primary/80">
                          Privacy Policy
                        </a>{" "}
                        and{" "}
                        <a href="/terms-of-use" className="text-primary underline hover:text-primary/80">
                          Terms of Use
                        </a>
                        .
                      </p>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

      </main>

      <SiteFooter />
    </div>
  )
}

