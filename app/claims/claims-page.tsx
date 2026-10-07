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
import { FileText, Clock, Phone, AlertCircle, MessageCircle } from "lucide-react"
import { useState } from "react"
import { submitClaimForm } from "@/lib/actions"
import { BUSINESS_HOURS, CLAIMS_EMAIL, PHONE_DISPLAY, PHONE_TEL, WHATSAPP_NUMBER } from "@/lib/site"

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
  const [reference, setReference] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      const result = await submitClaimForm(formData)

      if (result.success) {
        setReference(result.submissionId?.slice(0, 8).toUpperCase() ?? "")
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
      } else {
        setSubmitStatus("error")
      }
    } catch (error) {
      console.error("Claim submission error:", error)
      setSubmitStatus("error")
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
          image="/nairobi-skyline-hero.jpg"
          imageAlt="Nairobi city skyline"
          eyebrow="Claims Support"
          title="File a Claim"
          subtitle="Tell us what happened. We'll help you prepare the claim and follow it up with your insurer until it's settled."
        />

        {/* How a claim works */}
        <section className="py-16 md:py-24 bg-muted">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4 text-balance">
                How a Claim Works
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                We handle the paperwork and the follow-up. Your insurer assesses the claim and pays it.
              </p>
            </div>

            <div className="relative mx-auto grid max-w-5xl grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
              <div
                className="absolute left-[12.5%] right-[12.5%] top-5 hidden h-px bg-primary/15 md:block"
                aria-hidden="true"
              />
              {[
                { t: "Tell Us", d: "Use the form below, call or WhatsApp us. Do it as soon as you can after the incident." },
                { t: "We Prepare It", d: "We tell you which documents are needed and help you complete the insurer's claim form." },
                { t: "We Follow It Up", d: "We submit the claim, chase the insurer and keep you posted." },
                { t: "Settlement", d: "The insurer pays according to your policy terms." },
              ].map((step, i) => (
                <div key={step.t} className="relative text-center">
                  <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full border-2 border-secondary bg-background font-serif text-lg font-bold text-secondary">
                    {i + 1}
                  </div>
                  <h3 className="mt-4 font-semibold text-primary">{step.t}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{step.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Urgent contact */}
        <section className="py-8 bg-primary text-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <AlertCircle className="h-8 w-8 flex-shrink-0 text-secondary" />
                <div>
                  <h3 className="font-semibold text-lg">Urgent Claim?</h3>
                  <p className="text-sm text-white/80">
                    Don&apos;t wait for the form. Call or WhatsApp us during working hours. Out of hours, use the
                    emergency number on your policy or medical card, then tell us the next working day.
                  </p>
                </div>
              </div>
              <Button size="lg" className="bg-secondary text-primary hover:bg-secondary/90 font-semibold" asChild>
                <a href={`tel:${PHONE_TEL}`}>
                  <Phone className="mr-2 h-5 w-5" />
                  Call {PHONE_DISPLAY}
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Claims Form */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-serif font-bold text-primary mb-6">Tell Us What Happened</h2>

                  {submitStatus === "success" && (
                    <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-800">
                      Thank you. We&apos;ve received your claim and will contact you within one business day.
                      {reference ? <span className="mt-1 block text-sm">Your reference: <strong>{reference}</strong></span> : null}
                    </div>
                  )}
                  {submitStatus === "error" && (
                    <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-800">
                      We couldn&apos;t submit your claim online. Please call {PHONE_DISPLAY} or message us on WhatsApp
                      and we&apos;ll take it by phone.
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="policyNumber">Policy Number (If You Have It)</Label>
                      <Input
                        id="policyNumber"
                        name="policyNumber"
                        value={formData.policyNumber}
                        onChange={handleChange}
                        placeholder="As shown on your policy document"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="claimType">Type of Claim *</Label>
                      <Select
                        value={formData.claimType}
                        onValueChange={(value) => handleSelectChange("claimType", value)}
                        required
                      >
                        <SelectTrigger id="claimType">
                          <SelectValue placeholder="Select claim type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="health-medical">Medical – Treatment</SelectItem>
                          <SelectItem value="health-hospitalization">Medical – Hospitalisation</SelectItem>
                          <SelectItem value="life-death">Life – Death Benefit</SelectItem>
                          <SelectItem value="property-fire">Property – Fire Damage</SelectItem>
                          <SelectItem value="property-theft">Property – Theft or Burglary</SelectItem>
                          <SelectItem value="business-liability">Business – Liability</SelectItem>
                          <SelectItem value="professional-indemnity">Professional Indemnity – Claim Against You</SelectItem>
                          <SelectItem value="cyber-incident">Cyber – Data Breach or Attack</SelectItem>
                          <SelectItem value="travel-medical">Travel – Medical Emergency</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input id="name" name="name" value={formData.name} onChange={handleChange} required />
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
                      <Label htmlFor="description">What Happened? *</Label>
                      <Textarea
                        id="description"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        placeholder="What happened, when and where. Include anything the insurer will need to know."
                        rows={6}
                        required
                      />
                    </div>

                    <div className="bg-muted p-4 rounded-lg text-sm text-muted-foreground">
                      <p className="font-semibold mb-2 text-primary">Documents You&apos;ll Usually Need</p>
                      <ul className="list-disc list-inside space-y-1">
                        <li>Your policy document or policy number</li>
                        <li>A police abstract, for theft or break-ins</li>
                        <li>Medical reports and receipts, for medical claims</li>
                        <li>Photos of the damage, for property claims</li>
                      </ul>
                      <p className="mt-2">
                        Don&apos;t wait until you have everything. Send the form now, then email documents to{" "}
                        <a href={`mailto:${CLAIMS_EMAIL}`} className="text-primary underline hover:text-primary/80">
                          {CLAIMS_EMAIL}
                        </a>{" "}
                        or send photos of them on WhatsApp.
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
              <h2 className="text-3xl font-serif font-bold text-primary mb-4">Need Help With Your Claim?</h2>
              <p className="text-muted-foreground">Call or WhatsApp us, or email your documents.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <Card>
                <CardContent className="p-6 text-center">
                  <Phone className="h-8 w-8 text-secondary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Call Us</h3>
                  <p className="text-sm text-muted-foreground mb-2">Talk your claim through with us</p>
                  <a href={`tel:${PHONE_TEL}`} className="text-primary underline hover:text-primary/80 text-sm">
                    {PHONE_DISPLAY}
                  </a>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <MessageCircle className="h-8 w-8 text-secondary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">WhatsApp Us</h3>
                  <p className="text-sm text-muted-foreground mb-2">Send photos of documents and damage</p>
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary underline hover:text-primary/80 text-sm"
                  >
                    {PHONE_DISPLAY}
                  </a>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <FileText className="h-8 w-8 text-secondary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Email Us</h3>
                  <p className="text-sm text-muted-foreground mb-2">Send your claim documents</p>
                  <a href={`mailto:${CLAIMS_EMAIL}`} className="break-all text-primary underline hover:text-primary/80 text-sm">
                    {CLAIMS_EMAIL}
                  </a>
                </CardContent>
              </Card>
            </div>

            <p className="mt-8 flex flex-wrap items-center justify-center gap-2 text-center text-sm text-muted-foreground">
              <Clock className="h-4 w-4 text-secondary" />
              {BUSINESS_HOURS.join(" · ")}
            </p>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
