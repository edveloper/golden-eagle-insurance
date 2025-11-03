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
import { FileText, Clock, CheckCircle, Phone, AlertCircle } from "lucide-react"
import { useState } from "react"

export default function ClaimsPage() {
  const [formData, setFormData] = useState({
    policyNumber: "",
    claimType: "",
    name: "",
    email: "",
    phone: "",
    incidentDate: "",
    description: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus("success")
      setFormData({
        policyNumber: "",
        claimType: "",
        name: "",
        email: "",
        phone: "",
        incidentDate: "",
        description: "",
      })

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus("idle"), 5000)
    }, 1500)
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
              <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-balance">File a Claim</h1>
              <p className="text-lg md:text-xl text-gray-200 leading-relaxed text-pretty">
                We're here to support you when you need us most. File your claim quickly and easily, and our team will
                process it promptly.
              </p>
            </div>
          </div>
        </section>

        {/* Claims Process */}
        <section className="py-16 md:py-24 bg-muted">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4 text-balance">
                Our Claims Process
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                Simple, transparent, and efficient - we make filing claims easy
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FileText className="h-8 w-8 text-secondary" />
                  </div>
                  <div className="text-2xl font-bold text-primary mb-2">Step 1</div>
                  <h3 className="font-semibold mb-2">Submit Claim</h3>
                  <p className="text-sm text-muted-foreground">
                    Fill out the claim form with all necessary details and documentation
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="h-8 w-8 text-secondary" />
                  </div>
                  <div className="text-2xl font-bold text-primary mb-2">Step 2</div>
                  <h3 className="font-semibold mb-2">Review Process</h3>
                  <p className="text-sm text-muted-foreground">
                    Our team reviews your claim and may contact you for additional information
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="h-8 w-8 text-secondary" />
                  </div>
                  <div className="text-2xl font-bold text-primary mb-2">Step 3</div>
                  <h3 className="font-semibold mb-2">Approval</h3>
                  <p className="text-sm text-muted-foreground">
                    Once approved, you'll receive confirmation and next steps
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Phone className="h-8 w-8 text-secondary" />
                  </div>
                  <div className="text-2xl font-bold text-primary mb-2">Step 4</div>
                  <h3 className="font-semibold mb-2">Settlement</h3>
                  <p className="text-sm text-muted-foreground">
                    Receive your claim settlement according to your policy terms
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Emergency Contact */}
        <section className="py-8 bg-accent text-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <AlertCircle className="h-8 w-8 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg">Emergency Claims Hotline</h3>
                  <p className="text-sm text-white/90">Available 24/7 for urgent claims</p>
                </div>
              </div>
              <a href="tel:+254700000000">
                <Button size="lg" className="bg-white text-accent hover:bg-white/90 font-semibold">
                  <Phone className="mr-2 h-5 w-5" />
                  Call +254 700 000 000
                </Button>
              </a>
            </div>
          </div>
        </section>

        {/* Claims Form */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-serif font-bold text-primary mb-6">Submit Your Claim</h2>

                  {submitStatus === "success" && (
                    <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-800">
                      Your claim has been submitted successfully! Our team will review it and contact you within 48
                      hours. Your claim reference number will be sent to your email.
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="policyNumber">Policy Number *</Label>
                      <Input
                        id="policyNumber"
                        name="policyNumber"
                        value={formData.policyNumber}
                        onChange={handleChange}
                        placeholder="GE-2024-XXXXX"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="claimType">Type of Claim *</Label>
                      <Select
                        value={formData.claimType}
                        onValueChange={(value) => handleSelectChange("claimType", value)}
                        required
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select claim type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="motor-accident">Motor - Accident</SelectItem>
                          <SelectItem value="motor-theft">Motor - Theft</SelectItem>
                          <SelectItem value="health-medical">Health - Medical Treatment</SelectItem>
                          <SelectItem value="health-hospitalization">Health - Hospitalization</SelectItem>
                          <SelectItem value="life-death">Life - Death Benefit</SelectItem>
                          <SelectItem value="property-fire">Property - Fire Damage</SelectItem>
                          <SelectItem value="property-theft">Property - Theft/Burglary</SelectItem>
                          <SelectItem value="business-liability">Business - Liability</SelectItem>
                          <SelectItem value="travel-medical">Travel - Medical Emergency</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

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
                        <Label htmlFor="incidentDate">Date of Incident *</Label>
                        <Input
                          id="incidentDate"
                          name="incidentDate"
                          type="date"
                          value={formData.incidentDate}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="description">Incident Description *</Label>
                      <Textarea
                        id="description"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        placeholder="Please provide detailed information about the incident, including what happened, when, where, and any other relevant details..."
                        rows={6}
                        required
                      />
                    </div>

                    <div className="bg-muted p-4 rounded-lg text-sm text-muted-foreground">
                      <p className="font-semibold mb-2">Required Documents (to be submitted separately):</p>
                      <ul className="list-disc list-inside space-y-1">
                        <li>Copy of your insurance policy</li>
                        <li>Police report (if applicable)</li>
                        <li>Medical reports (for health claims)</li>
                        <li>Photos of damage (for motor/property claims)</li>
                        <li>Any other relevant documentation</li>
                      </ul>
                      <p className="mt-2">
                        You can email documents to{" "}
                        <a href="mailto:claims@goldeneagle.co.ke" className="text-accent hover:underline">
                          claims@goldeneagle.co.ke
                        </a>
                      </p>
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full md:w-auto bg-secondary hover:bg-secondary/90 text-primary font-semibold"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Submitting..." : "Submit Claim"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Claims Support */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-serif font-bold text-primary mb-4">Need Help with Your Claim?</h2>
              <p className="text-muted-foreground">Our claims team is here to assist you</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <Card>
                <CardContent className="p-6 text-center">
                  <Phone className="h-8 w-8 text-accent mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Call Us</h3>
                  <p className="text-sm text-muted-foreground mb-2">Speak to a claims specialist</p>
                  <a href="tel:+254700000000" className="text-accent hover:underline text-sm">
                    +254 700 000 000
                  </a>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <FileText className="h-8 w-8 text-accent mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Email Us</h3>
                  <p className="text-sm text-muted-foreground mb-2">Send your claim documents</p>
                  <a href="mailto:claims@goldeneagle.co.ke" className="text-accent hover:underline text-sm">
                    claims@goldeneagle.co.ke
                  </a>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <Clock className="h-8 w-8 text-accent mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Office Hours</h3>
                  <p className="text-sm text-muted-foreground">Monday - Friday: 8AM - 6PM</p>
                  <p className="text-sm text-muted-foreground">Saturday: 9AM - 2PM</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
