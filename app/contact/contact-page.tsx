"use client"

import type React from "react"

import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import { useState } from "react"
import { submitContactForm } from "@/lib/actions"

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
  const [errorMessage, setErrorMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")
    setErrorMessage("")

    try {
      const result = await submitContactForm(formData)

      if (result.success) {
        setSubmitStatus("success")
        setFormData({ name: "", email: "", phone: "", subject: "", message: "", website: "" })
        setTimeout(() => setSubmitStatus("idle"), 5000)
      } else {
        setSubmitStatus("error")
        setErrorMessage(result.error || "Please try again.")
        setTimeout(() => setSubmitStatus("idle"), 5000)
      }
    } catch (error) {
      console.error("[v0] Form submission error:", error)
      setSubmitStatus("error")
      setErrorMessage("Please try again.")
      setTimeout(() => setSubmitStatus("idle"), 5000)
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
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-primary py-16 text-white md:py-24">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(197,161,0,0.2),transparent_34%),radial-gradient(circle_at_84%_82%,rgba(0,119,190,0.22),transparent_40%),linear-gradient(120deg,#09172d_0%,#0a1d37_52%,#0d2749_100%)]" />
          <div className="container relative mx-auto px-4">
            <div className="max-w-3xl">
              <div className="mb-5 inline-flex items-center rounded-full border border-secondary/25 bg-white/8 px-4 py-1.5 text-xs tracking-[0.14em] text-white/90 uppercase">
                Reach Our Team
              </div>
              <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-secondary text-balance">Get in Touch</h1>
              <p className="text-lg md:text-xl text-gray-200 leading-relaxed text-pretty">
                Have questions about our insurance products? Our team is here to help you find the perfect coverage for
                your needs.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Information & Form */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Contact Information */}
              <div className="lg:col-span-1 space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <MapPin className="h-6 w-6 text-secondary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">Visit Us</h3>
                        <p className="text-sm text-muted-foreground">
                          Maruti Court
                          <br />
                          East Church Road, Westlands
                          <br />
                          Nairobi, Kenya
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Phone className="h-6 w-6 text-secondary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">Call Us</h3>
                        <p className="text-sm text-muted-foreground">
                          <a href="tel:+254791389518" className="hover:text-accent transition-colors">
                            +254 791 389 518
                          </a>
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Mail className="h-6 w-6 text-secondary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">Email Us</h3>
                        <p className="text-sm text-muted-foreground">
                          <a
                            href="mailto:info@goldeneagle.co.ke"
                            className="hover:text-accent transition-colors"
                          >
                            info@goldeneagle.co.ke
                          </a>
                          <br />
                          <a
                            href="mailto:goldeneagleinsagency@gmail.com"
                            className="hover:text-accent transition-colors"
                          >
                            goldeneagleinsagency@gmail.com
                          </a>
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Clock className="h-6 w-6 text-secondary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">Business Hours</h3>
                        <p className="text-sm text-muted-foreground">
                          Monday - Friday: 8:00 AM - 5:00 PM
                          <br />
                          Saturday: 9:00 AM - 1:00 PM
                          <br />
                          Sunday: Closed
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                <Card>
                  <CardContent className="p-8">
                    <h2 className="text-2xl font-serif font-bold text-primary mb-6">Send Us a Message</h2>

                    {submitStatus === "success" && (
                      <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-800">
                        Thank you for contacting us! We'll get back to you within 24 hours.
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
            <div className="flex justify-center">
              <div className="relative h-96 w-full max-w-2xl rounded-lg overflow-hidden">
              <img
                src="/map-of-nairobi-kenya-with-location-marker-showing-.jpg"
                alt="Golden Eagle Insurance Location Map"
                className="object-cover w-160 h-120"
              />
            </div>
          </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}

