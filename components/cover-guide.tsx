import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { PageHero } from "@/components/page-hero"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ORGANIZATION_NAME, SITE_URL } from "@/lib/seo"

export type GuideSection =
  | { kind: "text"; title: string; paragraphs: string[] }
  | { kind: "list"; title: string; intro?: string; items: { title: string; desc: string }[]; note?: string }
  | { kind: "cards"; title: string; intro?: string; cards: { title: string; desc: string; source?: { label: string; href: string } }[] }

export type CoverGuideProps = {
  path: string
  serviceName: string
  hero: { eyebrow: string; title: string; subtitle: string; image: string; imageAlt: string }
  /** The direct answer to the page's main question, shown first. */
  answer: string
  sections: GuideSection[]
  faqs: { q: string; a: string }[]
  quoteType: string
  quoteLabel: string
  related: { href: string; label: string }[]
}

/**
 * A long-form page for one type of cover, built to answer what people search for
 * ("professional indemnity insurance kenya") before asking for a quote.
 */
export function CoverGuide({ path, serviceName, hero, answer, sections, faqs, quoteType, quoteLabel, related }: CoverGuideProps) {
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: serviceName,
      serviceType: serviceName,
      url: `${SITE_URL}${path}`,
      areaServed: { "@type": "Country", name: "Kenya" },
      provider: { "@type": "InsuranceAgency", "@id": `${SITE_URL}/#agency`, name: ORGANIZATION_NAME },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} />

      <main className="flex-1">
        <PageHero image={hero.image} imageAlt={hero.imageAlt} eyebrow={hero.eyebrow} title={hero.title} subtitle={hero.subtitle} />

        <section className="py-12 md:py-16">
          <div className="container mx-auto max-w-3xl px-4">
            <p className="text-lg leading-relaxed text-foreground md:text-xl">{answer}</p>
            <div className="mt-8">
              <Button className="bg-secondary font-semibold text-primary hover:bg-secondary/90" asChild>
                <Link href={`/quote?type=${quoteType}`}>
                  {quoteLabel}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {sections.map((s, i) => (
          <section key={s.title} className={i % 2 === 0 ? "bg-muted py-12 md:py-16" : "py-12 md:py-16"}>
            <div className={s.kind === "cards" ? "container mx-auto max-w-5xl px-4" : "container mx-auto max-w-3xl px-4"}>
              <h2 className="mb-6 font-serif text-2xl font-bold text-balance text-primary md:text-3xl">{s.title}</h2>

              {s.kind === "text" && (
                <div className="space-y-4 text-muted-foreground">
                  {s.paragraphs.map((p) => (
                    <p key={p.slice(0, 40)}>{p}</p>
                  ))}
                </div>
              )}

              {s.kind === "list" && (
                <>
                  {s.intro ? <p className="mb-5 text-muted-foreground">{s.intro}</p> : null}
                  <ul className="space-y-4">
                    {s.items.map((item) => (
                      <li key={item.title} className="border-l-2 border-secondary pl-4">
                        <p className="font-semibold text-primary">{item.title}</p>
                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                      </li>
                    ))}
                  </ul>
                  {s.note ? <p className="mt-5 text-sm text-muted-foreground">{s.note}</p> : null}
                </>
              )}

              {s.kind === "cards" && (
                <>
                  {s.intro ? <p className="mb-6 max-w-3xl text-muted-foreground">{s.intro}</p> : null}
                  <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
                    {s.cards.map((c) => (
                      <Card key={c.title}>
                        <CardContent className="p-6">
                          <h3 className="mb-2 text-lg font-semibold text-primary">{c.title}</h3>
                          <p className="text-sm text-muted-foreground">{c.desc}</p>
                          {c.source ? (
                            <a href={c.source.href} target="_blank" rel="noopener noreferrer" className="mt-3 inline-block text-xs text-primary underline">
                              {c.source.label}
                            </a>
                          ) : null}
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </>
              )}
            </div>
          </section>
        ))}

        <section className="py-12 md:py-16">
          <div className="container mx-auto max-w-3xl px-4">
            <h2 className="mb-6 font-serif text-2xl font-bold text-primary md:text-3xl">Common Questions</h2>
            <div className="divide-y rounded-lg border">
              {faqs.map((f) => (
                <details key={f.q} className="group p-5">
                  <summary className="cursor-pointer list-none font-semibold text-primary marker:hidden">{f.q}</summary>
                  <p className="mt-3 text-muted-foreground">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-primary py-12 text-white md:py-16">
          <div className="container mx-auto max-w-3xl px-4 text-center">
            <h2 className="mb-4 font-serif text-2xl font-bold md:text-3xl">Compare Quotes From Ten Insurers</h2>
            <p className="mb-6 text-white/80">Tell us what you need and we&apos;ll come back within one business day.</p>
            <Button className="bg-secondary font-semibold text-primary hover:bg-secondary/90" asChild>
              <Link href={`/quote?type=${quoteType}`}>
                {quoteLabel}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            {related.length ? (
              <p className="mt-6 text-sm text-white/70">
                <span className="font-semibold text-white/90">Read Next</span>
                {"  "}
                {related.map((r, i) => (
                  <span key={r.href}>
                    {i ? " · " : ""}
                    <Link href={r.href} className="underline hover:text-white">
                      {r.label}
                    </Link>
                  </span>
                ))}
              </p>
            ) : null}
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
