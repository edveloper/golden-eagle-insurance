"use client"

import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { PageHero } from "@/components/page-hero"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { Search, ChevronDown, MessageCircle, Phone, Mail } from "lucide-react"
import { useState } from "react"
import { CLAIMS_EMAIL, CONTACT_EMAIL } from "@/lib/site"

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
          a: "You can get a free quote by filling out our online quote form, calling us at +254 791 389 518, or messaging us on WhatsApp. We'll send a personalised quote within one business day.",
        },
        {
          q: "Is Golden Eagle Insurance licensed?",
          a: "Yes, Golden Eagle Insurance Agency is fully licensed and regulated by the Insurance Regulatory Authority (IRA) of Kenya. We have been operating since 2006 and maintain the highest standards of professionalism and compliance.",
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
          a: "Through our insurer partners, you gain access to an extensive hospital network across Kenya, including major facilities such as Aga Khan Hospital, Nairobi Hospital, and MP Shah Hospital. The exact panel depends on your chosen insurer and plan; contact us for the current provider list.",
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
          a: "Most claims are processed within 7-14 business days once we receive all required documentation. Emergency and medical claims are prioritized and can be processed faster. We guide you through every step to give your claim the best chance of a smooth outcome.",
        },
        {
          q: "What documents do I need to file a claim?",
          a: "Required documents vary by claim type but generally include your policy document, claim form, police report (if applicable), medical reports (for health claims), photos of damage (for motor/property claims), and any other relevant documentation.",
        },
        {
          q: "Can I track my claim status?",
          a: `Yes, once you submit a claim, you'll receive a claim reference number. You can track your claim status by calling our claims department at +254 791 389 518 or emailing ${CLAIMS_EMAIL} with your reference number.`,
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
        <PageHero
          image="/nairobi-cityscape-hero.jpg"
          imageAlt="Nairobi cityscape"
          align="center"
          eyebrow="Knowledge Base"
          title="Frequently Asked Questions"
          subtitle="Find answers to common questions about our insurance products and services"
        >
          <div className="relative mx-auto mt-8 max-w-2xl">
            <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
            <Input
              type="text"
              placeholder="Search for answers..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-white py-6 pl-12 text-lg text-gray-900"
            />
          </div>
        </PageHero>

        {/* FAQ Content */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            {filteredFaqs.length === 0 ? (
              <div className="mx-auto max-w-2xl rounded-2xl border border-primary/10 p-12 text-center">
                <p className="mb-4 text-muted-foreground">No results found for "{searchQuery}"</p>
                <Button onClick={() => setSearchQuery("")} variant="outline">
                  Clear Search
                </Button>
              </div>
            ) : (
              <div className="grid gap-10 lg:grid-cols-[220px_1fr]">
                {/* Sticky category nav */}
                <aside className="lg:sticky lg:top-28 lg:self-start">
                  <p className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">Categories</p>
                  <nav className="flex flex-col gap-1">
                    {filteredFaqs.map((category, i) => (
                      <a
                        key={i}
                        href={`#faq-${i}`}
                        className="border-l-2 border-transparent py-1.5 pl-3 text-sm text-primary/70 transition-colors hover:border-secondary hover:text-primary"
                      >
                        {category.category}
                      </a>
                    ))}
                  </nav>
                </aside>

                {/* Questions */}
                <div className="space-y-10">
                  {filteredFaqs.map((category, categoryIndex) => (
                    <div key={categoryIndex} id={`faq-${categoryIndex}`} className="scroll-mt-28">
                      <h2 className="mb-4 font-serif text-2xl font-bold text-primary">{category.category}</h2>
                      <div className="divide-y divide-primary/10 overflow-hidden rounded-2xl border border-primary/10">
                        {category.questions.map((item, itemIndex) => {
                          const globalIndex = categoryIndex * 100 + itemIndex
                          const isOpen = openItems.includes(globalIndex)

                          return (
                            <div key={itemIndex}>
                              <button
                                onClick={() => toggleItem(globalIndex)}
                                className="flex w-full items-center justify-between gap-4 p-5 text-left transition-colors hover:bg-muted/50"
                              >
                                <h3 className="font-semibold text-primary">{item.q}</h3>
                                <ChevronDown
                                  className={`h-5 w-5 flex-shrink-0 text-secondary transition-transform ${
                                    isOpen ? "rotate-180" : ""
                                  }`}
                                />
                              </button>
                              {isOpen ? (
                                <div className="px-5 pb-5 pt-0">
                                  <p className="leading-relaxed text-muted-foreground">{item.a}</p>
                                </div>
                              ) : null}
                            </div>
                          )
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Still Have Questions */}
        <section className="border-t border-primary/10 bg-muted py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl text-center">
              <h2 className="font-serif text-3xl font-bold text-primary">Still Have Questions?</h2>
              <p className="mt-2 text-muted-foreground">Our team is here to help you find the answers you need.</p>
            </div>
            <div className="mx-auto mt-8 grid max-w-4xl grid-cols-1 gap-px overflow-hidden rounded-2xl border border-primary/10 bg-primary/10 sm:grid-cols-3">
              <a href="tel:+254791389518" className="bg-background p-6 text-center transition-colors hover:bg-muted">
                <Phone className="mx-auto mb-3 h-6 w-6 text-secondary" />
                <h3 className="font-semibold text-primary">Call Us</h3>
                <p className="mt-1 text-sm text-muted-foreground">+254 791 389 518</p>
              </a>
              <a href={`mailto:${CONTACT_EMAIL}`} className="bg-background p-6 text-center transition-colors hover:bg-muted">
                <Mail className="mx-auto mb-3 h-6 w-6 text-secondary" />
                <h3 className="font-semibold text-primary">Email Us</h3>
                <p className="mt-1 text-sm text-muted-foreground">{CONTACT_EMAIL}</p>
              </a>
              <Link href="/contact" className="bg-background p-6 text-center transition-colors hover:bg-muted">
                <MessageCircle className="mx-auto mb-3 h-6 w-6 text-secondary" />
                <h3 className="font-semibold text-primary">Contact Form</h3>
                <p className="mt-1 text-sm text-muted-foreground">Send us a message</p>
              </Link>
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
            <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-primary font-semibold" asChild>
              <Link href="/quote">
                Get Your Free Quote
              </Link>
            </Button>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}

