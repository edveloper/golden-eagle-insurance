"use client"

import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { Search, ChevronDown, MessageCircle, Phone, Mail } from "lucide-react"
import { useState } from "react"

export default function FAQPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    setOpenItems((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]))
  }

  const faqs = [
    {
      category: "General Questions",
      questions: [
        {
          q: "What types of insurance does Golden Eagle offer?",
          a: "We offer a comprehensive range of insurance products including Motor Insurance, Health Insurance, Life Insurance, Property Insurance, Business Insurance, and Travel Insurance. Each product is designed to meet specific needs and can be customized to your requirements.",
        },
        {
          q: "How do I get a quote?",
          a: "You can get a free quote by filling out our online quote form, calling us at +254 700 000 000, or visiting our office. Our insurance experts will provide you with a personalized quote within 24 hours based on your specific needs.",
        },
        {
          q: "Is Golden Eagle Insurance licensed?",
          a: "Yes, Golden Eagle Insurance Agency is fully licensed and regulated by the Insurance Regulatory Authority (IRA) of Kenya. We have been operating since 2010 and maintain the highest standards of professionalism and compliance.",
        },
        {
          q: "How can I pay my insurance premium?",
          a: "We offer multiple payment options including bank transfer, M-Pesa, credit/debit cards, and direct debit. You can also pay in person at our office. We offer flexible payment plans including monthly, quarterly, and annual options.",
        },
      ],
    },
    {
      category: "Motor Insurance",
      questions: [
        {
          q: "What's the difference between third party and comprehensive motor insurance?",
          a: "Third party insurance is the legal minimum requirement and covers liability to third parties for injury or property damage. Comprehensive insurance covers third party liability plus damage to your own vehicle from accidents, theft, fire, and other perils.",
        },
        {
          q: "What documents do I need for motor insurance?",
          a: "You'll need a copy of your driving license, vehicle logbook (registration certificate), current insurance certificate (if renewing), and a valid vehicle inspection certificate. For new vehicles, you'll need the purchase invoice.",
        },
        {
          q: "Does motor insurance cover windscreen damage?",
          a: "Yes, our comprehensive motor insurance includes windscreen coverage. You can get your windscreen repaired or replaced at our approved service centers with minimal or no excess depending on your policy.",
        },
      ],
    },
    {
      category: "Health Insurance",
      questions: [
        {
          q: "Which hospitals are covered under your health insurance?",
          a: "We have partnerships with over 200 hospitals and clinics across Kenya, including major facilities like Aga Khan Hospital, Nairobi Hospital, MP Shah Hospital, and many others. Contact us for a complete list of our network providers.",
        },
        {
          q: "Does health insurance cover pre-existing conditions?",
          a: "Pre-existing conditions may be covered after a waiting period, typically 12 months, depending on the specific condition and policy terms. We recommend discussing your medical history with our advisors for accurate guidance.",
        },
        {
          q: "Can I add family members to my health insurance?",
          a: "Yes, we offer family health insurance plans that cover you, your spouse, and your children. Family plans are often more cost-effective than individual policies and ensure your entire family has access to quality healthcare.",
        },
      ],
    },
    {
      category: "Life Insurance",
      questions: [
        {
          q: "What's the difference between term and whole life insurance?",
          a: "Term life insurance provides coverage for a specific period (e.g., 10, 20, or 30 years) at lower premiums. Whole life insurance provides lifetime coverage and includes a savings component that builds cash value over time.",
        },
        {
          q: "How much life insurance coverage do I need?",
          a: "A general rule is to have coverage worth 10-12 times your annual income. However, the right amount depends on your financial obligations, dependents, debts, and future goals. Our advisors can help you determine the appropriate coverage.",
        },
        {
          q: "Can I change my life insurance beneficiaries?",
          a: "Yes, you can change your beneficiaries at any time by submitting a written request to us. We recommend reviewing your beneficiaries regularly, especially after major life events like marriage, divorce, or the birth of a child.",
        },
      ],
    },
    {
      category: "Claims",
      questions: [
        {
          q: "How long does it take to process a claim?",
          a: "Most claims are processed within 7-14 business days once we receive all required documentation. Emergency claims and medical claims are prioritized and can be processed faster. We maintain a 98% claim success rate.",
        },
        {
          q: "What documents do I need to file a claim?",
          a: "Required documents vary by claim type but generally include your policy document, claim form, police report (if applicable), medical reports (for health claims), photos of damage (for motor/property claims), and any other relevant documentation.",
        },
        {
          q: "Can I track my claim status?",
          a: "Yes, once you submit a claim, you'll receive a claim reference number. You can track your claim status by calling our claims department at +254 700 000 000 or emailing claims@goldeneagle.co.ke with your reference number.",
        },
      ],
    },
    {
      category: "Policy Management",
      questions: [
        {
          q: "How do I renew my insurance policy?",
          a: "We'll send you a renewal notice 30 days before your policy expires. You can renew online, by phone, or in person at our office. We recommend renewing early to avoid any gaps in coverage.",
        },
        {
          q: "Can I cancel my insurance policy?",
          a: "Yes, you can cancel your policy at any time. Depending on when you cancel and your policy terms, you may be eligible for a pro-rata refund of your premium. Contact us to discuss the cancellation process and any applicable fees.",
        },
        {
          q: "What happens if I miss a premium payment?",
          a: "Most policies have a grace period of 14-30 days for premium payments. If payment is not received within the grace period, your policy may lapse. Contact us immediately if you're having difficulty making a payment to discuss options.",
        },
      ],
    },
  ]

  const filteredFaqs = faqs
    .map((category) => ({
      ...category,
      questions: category.questions.filter(
        (item) =>
          item.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.a.toLowerCase().includes(searchQuery.toLowerCase()),
      ),
    }))
    .filter((category) => category.questions.length > 0)

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-primary text-white py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-secondary text-balance">
                Frequently Asked Questions
              </h1>
              <p className="text-lg md:text-xl text-gray-200 leading-relaxed text-pretty mb-8">
                Find answers to common questions about our insurance products and services
              </p>

              {/* Search Bar */}
              <div className="relative max-w-2xl mx-auto">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Search for answers..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 py-6 text-lg bg-white text-gray-900"
                />
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Content */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {filteredFaqs.length === 0 ? (
                <Card>
                  <CardContent className="p-12 text-center">
                    <p className="text-muted-foreground mb-4">No results found for "{searchQuery}"</p>
                    <Button onClick={() => setSearchQuery("")} variant="outline">
                      Clear Search
                    </Button>
                  </CardContent>
                </Card>
              ) : (
                <div className="space-y-8">
                  {filteredFaqs.map((category, categoryIndex) => (
                    <div key={categoryIndex}>
                      <h2 className="text-2xl font-serif font-bold text-primary mb-4">{category.category}</h2>
                      <div className="space-y-4">
                        {category.questions.map((item, itemIndex) => {
                          const globalIndex = categoryIndex * 100 + itemIndex
                          const isOpen = openItems.includes(globalIndex)

                          return (
                            <Card key={itemIndex} className="overflow-hidden">
                              <button
                                onClick={() => toggleItem(globalIndex)}
                                className="w-full text-left p-6 flex items-center justify-between hover:bg-muted/50 transition-colors"
                              >
                                <h3 className="font-semibold pr-4">{item.q}</h3>
                                <ChevronDown
                                  className={`h-5 w-5 flex-shrink-0 transition-transform ${
                                    isOpen ? "transform rotate-180" : ""
                                  }`}
                                />
                              </button>
                              {isOpen && (
                                <CardContent className="px-6 pb-6 pt-0">
                                  <p className="text-muted-foreground leading-relaxed">{item.a}</p>
                                </CardContent>
                              )}
                            </Card>
                          )
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Still Have Questions */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-serif font-bold text-primary mb-4">Still Have Questions?</h2>
              <p className="text-muted-foreground">Our team is here to help you find the answers you need</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Phone className="h-7 w-7 text-secondary" />
                  </div>
                  <h3 className="font-semibold mb-2">Call Us</h3>
                  <p className="text-sm text-muted-foreground mb-4">Speak to our customer service team</p>
                  <a href="tel:+254791389518" className="text-accent hover:underline font-medium">
                    +254 791 389 518
                  </a>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mail className="h-7 w-7 text-secondary" />
                  </div>
                  <h3 className="font-semibold mb-2">Email Us</h3>
                  <p className="text-sm text-muted-foreground mb-4">Send us your questions</p>
                  <a href="mailto:info@goldeneagle.co.ke" className="text-accent hover:underline font-medium">
                    info@goldeneagle.co.ke
                  </a>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MessageCircle className="h-7 w-7 text-secondary" />
                  </div>
                  <h3 className="font-semibold mb-2">Contact Form</h3>
                  <p className="text-sm text-muted-foreground mb-4">Fill out our contact form</p>
                  <Link href="/contact" className="text-accent hover:underline font-medium">
                    Go to Contact Page
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-balance text-secondary">Ready to Get Protected?</h2>
            <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto text-pretty">
              Get a free quote today and discover how affordable comprehensive insurance can be.
            </p>
            <Link href="/quote">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-primary font-semibold">
                Get Your Free Quote
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
