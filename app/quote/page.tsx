"use client"

import type React from "react"

import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
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
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

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
        })
        setTimeout(() => setSubmitStatus("idle"), 5000)
      } else {
        setSubmitStatus("error")
        setTimeout(() => setSubmitStatus("idle"), 5000)
      }
    } catch (error) {
      console.error("[v0] Form submission error:", error)
      setSubmitStatus("error")
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
        {/* Hero Section */}
        <section className="bg-primary text-white py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-secondary text-balance">Get Your Free Quote</h1>
              <p className="text-lg md:text-xl text-gray-200 leading-relaxed text-pretty">
                Fill out the form below and our insurance experts will provide you with a personalized quote within 24
                hours.
              </p>
            </div>
          </div>
        </section>

        {/* Quote Form */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Benefits */}
              <div className="lg:col-span-1 space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4">Why Get a Quote?</h3>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="text-sm font-medium">Free & No Obligation</p>
                          <p className="text-xs text-muted-foreground">Get a quote with no commitment required</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="text-sm font-medium">Personalized Coverage</p>
                          <p className="text-xs text-muted-foreground">Tailored to your specific needs</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="text-sm font-medium">Competitive Rates</p>
                          <p className="text-xs text-muted-foreground">Best prices without compromising quality</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="text-sm font-medium">Fast Response</p>
                          <p className="text-xs text-muted-foreground">Receive your quote within 24 hours</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="text-sm font-medium">Expert Guidance</p>
                          <p className="text-xs text-muted-foreground">Professional advice from our team</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-accent text-white">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2">Need Help?</h3>
                    <p className="text-sm mb-4 text-white/90">
                      Our insurance experts are available to assist you with any questions.
                    </p>
                    <div className="space-y-2 text-sm">
                      <p>
                        <strong>Call:</strong> +254 791 389 518
                      </p>
                      <p>
                        <strong>Email:</strong> info@goldeneagle.co.ke
                      </p>
                    </div>
                  </CardContent>
                </Card>
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
                        Sorry, there was an error submitting your quote request. Please try again or contact us
                        directly.
                      </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-6">
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
                        your quote request. We respect your privacy and will never share your information with third
                        parties.
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
              <h2 className="text-3xl font-serif font-bold text-primary mb-4">Trusted by Thousands</h2>
              <p className="text-muted-foreground">Join over 50,000 satisfied clients across Kenya</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">18+</div>
                <div className="text-sm text-muted-foreground">Years of Service</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">50K+</div>
                <div className="text-sm text-muted-foreground">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">98%</div>
                <div className="text-sm text-muted-foreground">Claim Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">24/7</div>
                <div className="text-sm text-muted-foreground">Customer Support</div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
