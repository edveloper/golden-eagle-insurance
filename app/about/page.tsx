import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { PageHero } from "@/components/page-hero"
import { Button } from "@/components/ui/button"
import { buildPageMetadata } from "@/lib/seo"
import { YEARS_IN_BUSINESS } from "@/lib/site"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export const metadata = buildPageMetadata({
  title: "About Us | Golden Eagle Insurance Agency, Nairobi",
  description:
    "Founded in 2006 and led by Lydia Wanjiku Mwangi, Golden Eagle is an IRA-licensed insurance agency and investment advisory in Nairobi, ranked first in the AKI professional indemnity category three times.",
  path: "/about",
})

const facts = [
  { label: "Founded", value: "2006, Nairobi" },
  { label: "Licence", value: "IRA Reg. No. 11611" },
  { label: "Insurers", value: "10 of Kenya's Leading Insurers" },
  { label: "AKI Awards", value: "1st in Professional Indemnity, 2018, 2019 and 2023" },
]

const milestones = [
  { year: "2006", title: "Founded", desc: "Golden Eagle Insurance Agency Ltd is founded in Nairobi." },
  { year: "2018", title: "AKI Awards", desc: "First place, Professional Indemnity category." },
  { year: "2019", title: "AKI Awards", desc: "First place, Professional Indemnity category." },
  { year: "2023", title: "AKI Awards", desc: "First place, Professional Indemnity category." },
  { year: "2024", title: "AKI Awards", desc: "Named in the top 10 agents nationwide." },
]

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <main className="flex-1">
        <PageHero
          image="/images/hero-about-golden-hour.jpg"
          imageAlt="Nairobi from the KICC rooftop at golden hour"
          eyebrow="About Us"
          title="Insurance, With a Markets Background"
          subtitle={`Arranging cover for Kenyan families and businesses for ${YEARS_IN_BUSINESS} years, and advising on investments too.`}
        />

        {/* Our story */}
        <section className="py-14 md:py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[1.4fr_1fr]">
              <div>
                <h2 className="mb-6 text-3xl font-serif font-bold text-primary text-balance md:text-4xl">How We Got Here</h2>
                <div className="space-y-4 leading-relaxed text-muted-foreground">
                  <p>
                    Golden Eagle Insurance Agency was founded in Nairobi in 2006. It is led by its founder and director,
                    Lydia Wanjiku Mwangi, who has worked in insurance since 2003, including eight years with UAP
                    Insurance, and was previously a Global Markets Specialist at Dyer &amp; Blair.
                  </p>
                  <p>
                    Today we arrange medical, life, professional indemnity, property, business and travel cover with
                    ten of Kenya&rsquo;s leading insurers. Professional indemnity is where we&rsquo;ve made our name:
                    the Association of Kenya Insurers ranked us first in that category in 2018, 2019 and 2023.
                  </p>
                  <p>
                    Our investment arm, Golden Eagle Global Markets Investment Advisory, draws on that markets
                    background. It helps Kenyan investors put money into shares, funds and bonds around the world, and
                    explains the reasoning behind every holding.
                  </p>
                  <p>
                    When a claim comes in, we help you prepare it and follow it up with the insurer until it&rsquo;s
                    settled.
                  </p>
                </div>
              </div>

              <aside className="reveal border-t-2 border-primary bg-muted p-8">
                <p className="mb-6 text-xs font-semibold uppercase tracking-[0.18em] text-gold-ink">At a Glance</p>
                <dl className="space-y-5">
                  {facts.map((f) => (
                    <div key={f.label} className="border-b border-primary/10 pb-5 last:border-0 last:pb-0">
                      <dt className="text-xs uppercase tracking-[0.14em] text-muted-foreground">{f.label}</dt>
                      <dd className="mt-1 text-base font-semibold text-primary">{f.value}</dd>
                    </div>
                  ))}
                </dl>
              </aside>
            </div>
          </div>
        </section>

        {/* Mission, vision, values */}
        <section className="py-14 md:py-20 bg-muted">
          <div className="container mx-auto px-4">
            <div className="reveal-stagger grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-12">
              <div className="border-t-2 border-secondary pt-6">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-gold-ink">Mission</p>
                <p className="text-lg leading-relaxed text-primary">
                  To empower individuals and organizations to achieve financial freedom and lasting security through
                  expert insurance and investment solutions.
                </p>
              </div>
              <div className="border-t-2 border-secondary pt-6">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-gold-ink">Vision</p>
                <p className="text-lg leading-relaxed text-primary">
                  To be Kenya&rsquo;s most trusted and innovative financial advisory agency, securing lives and growing
                  wealth for generations.
                </p>
              </div>
              <div className="border-t-2 border-secondary pt-6">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-gold-ink">Values</p>
                <p className="text-lg leading-relaxed text-primary">
                  Integrity, excellence, innovation, partnership and commitment.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Leadership */}
        <section className="py-14 md:py-20">
          <div className="container mx-auto px-4">
            <h2 className="mb-10 font-serif text-4xl text-primary text-balance md:text-5xl">Leadership</h2>

            <div className="reveal-stagger grid grid-cols-1 gap-10 md:grid-cols-2">
              <div className="flex gap-6">
                {/* Monogram until team photos arrive */}
                <div className="flex h-24 w-24 shrink-0 items-center justify-center bg-primary font-serif text-3xl text-secondary" aria-hidden="true">LM</div>
                <div>
                <h3 className="font-serif text-2xl text-primary">Lydia Wanjiku Mwangi</h3>
                <p className="mt-1 text-sm font-medium text-gold-ink">Founder &amp; Director</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Founded Golden Eagle in 2006. In insurance since 2003, including eight years with UAP Insurance
                  Kenya. Previously a Global
                  Markets Specialist at Dyer &amp; Blair. Holds an MA in International Relations from the University
                  of Nairobi. Lead Advisor for the investment advisory.
                </p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex h-24 w-24 shrink-0 items-center justify-center bg-primary font-serif text-3xl text-secondary" aria-hidden="true">AW</div>
                <div>
                <h3 className="font-serif text-2xl text-primary">Alvin Lee Waithaka</h3>
                <p className="mt-1 text-sm font-medium text-gold-ink">Marketing Director</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Joined Golden Eagle in 2019 and leads the agency&rsquo;s marketing strategy. Holds a degree in
                  International Relations from United States International University&ndash;Africa.
                </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Awards */}
        <section className="py-14 md:py-20 bg-muted">
          <div className="container mx-auto px-4">
            <div className="mb-10 text-center">
              <h2 className="mb-4 text-3xl font-serif font-bold text-primary text-balance md:text-4xl">Awards</h2>
              <p className="mx-auto max-w-2xl text-lg text-muted-foreground text-pretty">
                The Association of Kenya Insurers (AKI) recognises agents each year.
              </p>
            </div>

            <div className="mx-auto max-w-3xl">
              <ol className="reveal-stagger relative">
                {milestones.map((m) => (
                  <li key={m.year} className="relative border-l-2 border-primary/15 pb-10 pl-8 last:border-transparent last:pb-0">
                    <span className="absolute -left-[7px] top-2 h-3 w-3 rotate-45 bg-secondary" aria-hidden="true" />
                    <p className="font-serif text-xl font-bold text-gold-ink">{m.year}</p>
                    <h3 className="mt-1 font-semibold text-primary">{m.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{m.desc}</p>
                  </li>
                ))}
              </ol>
              <p className="mt-8 border-t border-primary/10 pt-6 text-sm text-muted-foreground">
                Also: Certificate of Excellence, Ruby category, from Commercial Bank of Africa.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-14 md:py-20 bg-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="mb-4 text-3xl font-serif font-bold text-gold-ink text-balance md:text-4xl">
              Talk to Us About Your Cover
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-200 text-pretty">
              Tell us what you want to protect or what you&rsquo;re saving for. We&rsquo;ll reply within one business
              day.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-secondary font-semibold text-primary hover:bg-secondary/90" asChild>
                <Link href="/quote">
                  Get a Free Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white bg-transparent text-white hover:bg-white hover:text-primary"
                asChild
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
