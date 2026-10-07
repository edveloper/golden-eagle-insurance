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
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import { useState } from "react"
import { submitContactForm } from "@/lib/actions"
import { CONTACT_EMAIL } from "@/lib/site"

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
          eyebrow="Reach Our Team"
          title="Get in Touch"
          subtitle="Have questions about our insurance products? Our team is here to help you find the perfect coverage for your needs."
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
                      <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">Visit Us</h3>
                      <p className="mt-1 text-sm text-primary">
                        Maruti Court
                        <br />
                        East Church Road, Westlands
                        <br />
                        Nairobi, Kenya
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-6">
                    <Phone className="mt-0.5 h-5 w-5 shrink-0 text-secondary" />
                    <div>
                      <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">Call Us</h3>
                      <p className="mt-1 text-sm text-primary">
                        <a href="tel:+254791389518" className="transition-colors hover:text-accent">
                          +254 791 389 518
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-6">
                    <Mail className="mt-0.5 h-5 w-5 shrink-0 text-secondary" />
                    <div>
                      <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">Email Us</h3>
                      <p className="mt-1 text-sm text-primary">
                        <a href={`mailto:${CONTACT_EMAIL}`} className="transition-colors hover:text-accent">
                          {CONTACT_EMAIL}
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-6">
                    <Clock className="mt-0.5 h-5 w-5 shrink-0 text-secondary" />
                    <div>
                      <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">Business Hours</h3>
                      <p className="mt-1 text-sm text-primary">
                        Monday to Friday: 8:00 AM to 5:00 PM
                        <br />
                        Saturday: 9:00 AM to 1:00 PM
                        <br />
                        Sunday: Closed
                      </p>
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
                        Thank you for contacting us! We'll get back to you within one business day.
                        {reference ? <span className="mt-1 block text-sm">Your reference: <strong>{reference}</strong></span> : null}
                      </div>
                    )}

                    {submitStatus === "error" && (
                      <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-800">
                        Sorry, there was an error sending your message. {errorMessage || "Please try again or contact us directly."}
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
                            placeholder="John Doe"
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
                            placeholder="john@example.com"
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
                            placeholder="+254 700 000 000"
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
                            placeholder="How can we help?"
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
                          placeholder="Tell us more about your insurance needs..."
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
                        By submitting, you agree to our{" "}
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

        {/* Map Section */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-serif font-bold text-primary mb-4">Find Us on the Map</h2>
              <p className="text-muted-foreground">Visit our office in the heart of Nairobi</p>
            </div>
            <div className="mx-auto max-w-4xl overflow-hidden rounded-2xl border border-primary/10">
              <iframe
                title="Golden Eagle office location, Westlands, Nairobi"
                src="https://www.google.com/maps?q=Maruti+Court,+East+Church+Road,+Westlands,+Nairobi&output=embed"
                className="h-96 w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
          </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}

