"use client"

import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { PageHero } from "@/components/page-hero"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { Search, ChevronDown } from "lucide-react"
import { useState } from "react"
import { CONTACT_EMAIL, PHONE_DISPLAY, PHONE_TEL, WHATSAPP_NUMBER } from "@/lib/site"
import { FAQS } from "./faqs"

export default function FAQPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    setOpenItems((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]))
  }

  const filteredFaqs = FAQS
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

      <main className="mode-functional flex-1">
        <PageHero
          size="text"
          align="center"
          eyebrow="FAQ"
          title="Frequently Asked Questions"
          subtitle="Answers to the questions clients ask us most. Can't find yours? Call or WhatsApp us."
        >
          <div className="relative mx-auto mt-8 max-w-2xl">
            <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
            <Input
              type="text"
              placeholder="Search the questions..."
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
                                type="button"
                                aria-expanded={isOpen}
                                onClick={() => toggleItem(globalIndex)}
                                className="flex w-full items-center justify-between gap-4 p-5 text-left transition-colors hover:bg-muted/50"
                              >
                                <h3 className="font-semibold text-primary">{item.q}</h3>
                                <ChevronDown
                                  className={`h-5 w-5 flex-shrink-0 text-gold-ink transition-transform ${
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
              <p className="mt-2 text-muted-foreground">Call, WhatsApp or email us. We reply within one business day.</p>
            </div>
            <div className="mx-auto mt-8 grid max-w-4xl grid-cols-1 gap-px overflow-hidden rounded-2xl border border-primary/10 bg-primary/10 sm:grid-cols-3">
              <a href={`tel:${PHONE_TEL}`} className="bg-background p-6 text-center transition-colors hover:bg-muted">
                <h3 className="font-semibold text-primary">Call Us</h3>
                <p className="mt-1 text-sm text-muted-foreground">{PHONE_DISPLAY}</p>
              </a>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-background p-6 text-center transition-colors hover:bg-muted"
              >
                <h3 className="font-semibold text-primary">WhatsApp Us</h3>
                <p className="mt-1 text-sm text-muted-foreground">{PHONE_DISPLAY}</p>
              </a>
              <a href={`mailto:${CONTACT_EMAIL}`} className="bg-background p-6 text-center transition-colors hover:bg-muted">
                <h3 className="font-semibold text-primary">Email Us</h3>
                <p className="mt-1 break-all text-sm text-muted-foreground">{CONTACT_EMAIL}</p>
              </a>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-balance text-gold-ink">Tell Us What You Need Covered</h2>
            <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto text-pretty">
              The quote is free and you&rsquo;re under no obligation. We&rsquo;ll compare insurers and reply within one business day.
            </p>
            <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-primary font-semibold" asChild>
              <Link href="/quote">
                Get a Free Quote
              </Link>
            </Button>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}

