"use client"

import type React from "react"

import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { PageHero } from "@/components/page-hero"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { useEffect, useState } from "react"
import { submitQuoteForm } from "@/lib/actions"
import { CONTACT_EMAIL, INSURERS, PHONE_DISPLAY, PHONE_TEL, YEARS_IN_BUSINESS } from "@/lib/site"

// /quote?type=<slug> preselects the insurance type (used by the product pages and cover quiz).
const TYPE_FROM_SLUG: Record<string, string> = {
  medical: "Medical Insurance",
  "professional-indemnity": "Professional Indemnity Insurance",
  home: "Home Insurance",
  business: "Business Insurance",
  cyber: "Cyber Security Insurance",
  travel: "Travel Insurance",
  life: "Life & Pension",
}

export default function QuotePage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    insuranceType: "",
    situation: "",
    additionalInfo: "",
    website: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [reference, setReference] = useState("")
  const [errorMessage, setErrorMessage] = useState("")

  useEffect(() => {
    const preset = TYPE_FROM_SLUG[new URLSearchParams(window.location.search).get("type") ?? ""]
    if (preset) setFormData((prev) => ({ ...prev, insuranceType: preset }))
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")
    setErrorMessage("")

    try {
      const result = await submitQuoteForm(formData)

      if (result.success) {
        setReference(result.submissionId?.slice(0, 8).toUpperCase() ?? "")
        setSubmitStatus("success")
        setFormData({
          name: "",
          email: "",
          phone: "",
          insuranceType: "",
          situation: "",
          additionalInfo: "",
          website: "",
        })
      } else {
        setSubmitStatus("error")
        setErrorMessage(result.error || "Please try again.")
      }
    } catch (error) {
      console.error("Quote form submission error:", error)
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

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <main className="mode-functional flex-1">
        <PageHero
          size="text"
          eyebrow="Free Quote"
          title="Get a Free Quote"
          subtitle="Tell us what you need covered. We'll compare insurers and reply within one business day."
        />

        {/* Quote Form */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Benefits rail */}
              <div className="lg:col-span-1">
                <div className="rounded-2xl bg-primary p-8 text-white">
                  <p className="mb-6 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-gold-ink">
                    Why Ask Us
                  </p>
                  <ul className="space-y-5">
                    {[
                      { t: "Free, No Obligation", d: "A quote costs nothing and commits you to nothing." },
                      { t: "Ten Insurers Compared", d: "We check what's on offer, so you don't have to." },
                      { t: "Back Within One Business Day", d: "We reply with options, not an automated estimate." },
                      { t: "Help When You Claim", d: "We prepare claims and follow them up with the insurer." },
                    ].map((b) => (
                      <li key={b.t} className="flex items-start gap-3">
                        <span className="mt-[0.55rem] h-1.5 w-1.5 shrink-0 bg-secondary" aria-hidden="true" />
                        <div>
                          <p className="text-sm font-semibold">{b.t}</p>
                          <p className="text-xs text-gray-300">{b.d}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8 border-t border-white/15 pt-6 text-sm">
                    <p className="font-semibold text-gold-ink">Rather Talk It Through?</p>
                    <p className="mt-2 text-gray-300">
                      Call or WhatsApp{" "}
                      <a href={`tel:${PHONE_TEL}`} className="text-white transition-colors hover:text-secondary">
                        {PHONE_DISPLAY}
                      </a>
                    </p>
                    <p className="text-gray-300">
                      Email{" "}
                      <a href={`mailto:${CONTACT_EMAIL}`} className="text-white transition-colors hover:text-secondary">
                        {CONTACT_EMAIL}
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              {/* Quote Form */}
              <div className="lg:col-span-2">
                <Card>
                  <CardContent className="p-8">
                    <h2 className="text-2xl font-serif font-bold text-primary mb-6">Tell Us What You Need</h2>

                    {submitStatus === "success" && (
                      <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-800">
                        Thank you. We&apos;ve received your request and will be in touch within one business day with
                        your quote.
                        {reference ? <span className="mt-1 block text-sm">Your reference: <strong>{reference}</strong></span> : null}
                      </div>
                    )}

                    {submitStatus === "error" && (
                      <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-800">
                        {errorMessage || `We couldn't send your request. Please call or WhatsApp us on ${PHONE_DISPLAY}.`}
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
                        <Label htmlFor="insuranceType">Type of Insurance *</Label>
                        <Select
                          value={formData.insuranceType}
                          onValueChange={(value) => handleSelectChange("insuranceType", value)}
                          required
                        >
                          <SelectTrigger id="insuranceType">
                            <SelectValue placeholder="Select insurance type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Medical Insurance">Medical Insurance</SelectItem>
                            <SelectItem value="Professional Indemnity Insurance">
                              Professional Indemnity Insurance
                            </SelectItem>
                            <SelectItem value="Home Insurance">Home Insurance</SelectItem>
                            <SelectItem value="Business Insurance">Business Insurance</SelectItem>
                            <SelectItem value="Cyber Security Insurance">Cyber Security Insurance</SelectItem>
                            <SelectItem value="Travel Insurance">Travel Insurance</SelectItem>
                            <SelectItem value="Life & Pension">Life & Pension</SelectItem>
                            <SelectItem value="Not Sure">Not Sure Yet</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="situation">Your Situation</Label>
                        <Select
                          value={formData.situation}
                          onValueChange={(value) => handleSelectChange("situation", value)}
                        >
                          <SelectTrigger id="situation">
                            <SelectValue placeholder="Select one" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="New cover">I don&apos;t have this cover yet</SelectItem>
                            <SelectItem value="Renewing">My policy is due for renewal</SelectItem>
                            <SelectItem value="Switching">I want to compare or switch insurer</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="additionalInfo">Anything Else We Should Know?</Label>
                        <Textarea
                          id="additionalInfo"
                          name="additionalInfo"
                          value={formData.additionalInfo}
                          onChange={handleChange}
                          placeholder="Who needs cover, your current insurer, renewal date, budget. Anything that helps."
                          rows={5}
                        />
                      </div>

                      <div className="bg-muted p-4 rounded-lg text-sm text-muted-foreground">
                        By sending this form, you agree that we can contact you about your quote. We share your details
                        only with the insurers we approach for your quote, and never sell them.
                        {" "}
                        <a href="/privacy-policy" className="text-primary underline hover:text-primary/80">
                          Privacy Policy
                        </a>
                        {" "}and{" "}
                        <a href="/terms-of-use" className="text-primary underline hover:text-primary/80">
                          Terms of Use
                        </a>
                        .
                      </div>

                      <Button
                        type="submit"
                        size="lg"
                        className="w-full md:w-auto bg-secondary hover:bg-secondary/90 text-primary font-semibold"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Submitting..." : "Get My Free Quote"}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Indicators */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-serif font-bold text-primary mb-4">Trusted Since 2006</h2>
              <p className="text-muted-foreground">{YEARS_IN_BUSINESS} years arranging cover for Kenyan families and businesses.</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{YEARS_IN_BUSINESS}+</div>
                <div className="text-sm text-muted-foreground">Years in Business</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">3×</div>
                <div className="text-sm text-muted-foreground">AKI #1, Professional Indemnity</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{INSURERS.length}</div>
                <div className="text-sm text-muted-foreground">Insurers We Work With</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">IRA</div>
                <div className="text-sm text-muted-foreground">Licensed, Reg. No. 11611</div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}

