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
import { CheckCircle } from "lucide-react"
import { useState } from "react"
import { submitQuoteForm } from "@/lib/actions"

export default function QuotePage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    insuranceType: "",
    coverageAmount: "",
    additionalInfo: "",
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
      const result = await submitQuoteForm(formData)

      if (result.success) {
        setSubmitStatus("success")
        setFormData({
          name: "",
          email: "",
          phone: "",
          insuranceType: "",
          coverageAmount: "",
          additionalInfo: "",
          website: "",
        })
        setTimeout(() => setSubmitStatus("idle"), 5000)
      } else {
        setSubmitStatus("error")
        setErrorMessage(result.error || "Please try again.")
        setTimeout(() => setSubmitStatus("idle"), 5000)
      }
    } catch (error) {
      console.error("Quote form submission error:", error)
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

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <main className="flex-1">
        <PageHero
          image="/nairobi-park-skyline-hero.jpg"
          imageAlt="Nairobi skyline viewed from Nairobi National Park"
          eyebrow="Fast Quotation"
          title="Get Your Free Quote"
          subtitle="Fill out the form below and our insurance experts will provide you with a personalized quote within 24 hours."
        />

        {/* Quote Form */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Benefits rail */}
              <div className="lg:col-span-1">
                <div className="rounded-2xl bg-primary p-8 text-white">
                  <p className="mb-6 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-secondary">
                    <span className="h-px w-8 bg-secondary" aria-hidden="true" />
                    Why Get a Quote?
                  </p>
                  <ul className="space-y-5">
                    {[
                      { t: "Free & No Obligation", d: "Get a quote with no commitment required" },
                      { t: "Personalized Coverage", d: "Tailored to your specific needs" },
                      { t: "Competitive Rates", d: "Best value without compromising quality" },
                      { t: "Fast Response", d: "Receive your quote within 24 hours" },
                      { t: "Expert Guidance", d: "Professional advice from our team" },
                    ].map((b) => (
                      <li key={b.t} className="flex items-start gap-3">
                        <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-secondary" />
                        <div>
                          <p className="text-sm font-semibold">{b.t}</p>
                          <p className="text-xs text-gray-300">{b.d}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8 border-t border-white/15 pt-6 text-sm">
                    <p className="font-semibold text-secondary">Need help?</p>
                    <p className="mt-2 text-gray-300">
                      Call{" "}
                      <a href="tel:+254791389518" className="text-white transition-colors hover:text-secondary">
                        +254 791 389 518
                      </a>
                    </p>
                    <p className="text-gray-300">
                      Email{" "}
                      <a href="mailto:info@goldeneagle.co.ke" className="text-white transition-colors hover:text-secondary">
                        info@goldeneagle.co.ke
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              {/* Quote Form */}
              <div className="lg:col-span-2">
                <Card>
                  <CardContent className="p-8">
                    <h2 className="text-2xl font-serif font-bold text-primary mb-6">Request Your Quote</h2>

                    {submitStatus === "success" && (
                      <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-800">
                        Thank you! Your quote request has been received. We'll contact you within 24 hours with your
                        personalized quote.
                      </div>
                    )}

                    {submitStatus === "error" && (
                      <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-800">
                        Sorry, there was an error submitting your quote request. {errorMessage || "Please try again or contact us directly."}
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
                        <Label htmlFor="insuranceType">Type of Insurance *</Label>
                        <Select
                          value={formData.insuranceType}
                          onValueChange={(value) => handleSelectChange("insuranceType", value)}
                          required
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select insurance type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Medical Insurance">Medical Insurance</SelectItem>
                            <SelectItem value="Motor Vehicle Insurance">Motor Vehicle Insurance</SelectItem>
                            <SelectItem value="Professional Indemnity Insurance">
                              Professional Indemnity Insurance
                            </SelectItem>
                            <SelectItem value="Home Insurance">Home Insurance</SelectItem>
                            <SelectItem value="Business Insurance">Business Insurance</SelectItem>
                            <SelectItem value="Travel Insurance">Travel Insurance</SelectItem>
                            <SelectItem value="Life & Pension">Life & Pension</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="coverageAmount">Desired Coverage Amount</Label>
                        <Select
                          value={formData.coverageAmount}
                          onValueChange={(value) => handleSelectChange("coverageAmount", value)}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select coverage amount" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="basic">Basic Coverage</SelectItem>
                            <SelectItem value="standard">Standard Coverage</SelectItem>
                            <SelectItem value="comprehensive">Comprehensive Coverage</SelectItem>
                            <SelectItem value="premium">Premium Coverage</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="additionalInfo">Additional Information</Label>
                        <Textarea
                          id="additionalInfo"
                          name="additionalInfo"
                          value={formData.additionalInfo}
                          onChange={handleChange}
                          placeholder="Tell us more about your insurance needs, any specific requirements, or questions you have..."
                          rows={5}
                        />
                      </div>

                      <div className="bg-muted p-4 rounded-lg text-sm text-muted-foreground">
                        By submitting this form, you agree to be contacted by Golden Eagle Insurance Agency regarding
                        your quote request. We respect your privacy and will never share your information with third parties.
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
              <p className="text-muted-foreground">Nearly two decades protecting Kenyan families and businesses</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">18+</div>
                <div className="text-sm text-muted-foreground">Years of Service</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">AKI</div>
                <div className="text-sm text-muted-foreground">Award-Winning Agency</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">9+</div>
                <div className="text-sm text-muted-foreground">Insurer Partners</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">IRA</div>
                <div className="text-sm text-muted-foreground">Licensed &amp; Regulated</div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}

