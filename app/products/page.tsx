import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { PageHero } from "@/components/page-hero"
import { CoverQuiz } from "@/components/cover-quiz"
import { Button } from "@/components/ui/button"
import { buildPageMetadata } from "@/lib/seo"
import { cn } from "@/lib/utils"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

export const metadata = buildPageMetadata({
  title: "Insurance Cover | Golden Eagle Insurance Agency, Nairobi",
  description:
    "Professional indemnity, medical, cyber, life, home, business and travel insurance from ten of Kenya's leading insurers, arranged by an AKI award-winning agency in Nairobi.",
  path: "/products",
})

type Product = {
  id: string
  name: string
  indexNote?: string
  badge?: string
  intro: string
  features: { title: string; desc: string }[]
  image: string
  quoteType: string
  quoteLabel: string
}

// Section ids are linked from the homepage, footer and cover quiz; keep them stable.
const products: Product[] = [
  {
    id: "professional-indemnity",
    name: "Professional Indemnity",
    indexNote: "AKI #1",
    badge: "First in the AKI Professional Indemnity Category in 2018, 2019 and 2023",
    intro:
      "If a client says your advice or work cost them money, professional indemnity pays for your defence and any compensation you owe. We arrange it for doctors, lawyers, accountants, engineers, architects and consultants.",
    features: [
      { title: "Negligence, Errors and Omissions", desc: "Cover when a client says your work or advice caused them a loss." },
      { title: "Legal Defence Costs", desc: "Lawyers' fees and court costs to defend the claim." },
      { title: "Compensation and Settlements", desc: "Damages awarded against you or agreed in a settlement, up to your policy limit." },
      { title: "Cover for Doctors", desc: "Doctors' indemnity starts from KES 6,000 a year, with limits up to KES 100 million." },
    ],
    image: "/images/cover-professional-indemnity.jpg",
    quoteType: "professional-indemnity",
    quoteLabel: "Get a Professional Indemnity Quote",
  },
  {
    id: "health",
    name: "Medical Insurance",
    intro: "Cover for hospital bills and doctor's visits, for you, your family or your staff.",
    features: [
      { title: "Inpatient and Outpatient", desc: "Hospital stays, and visits to the doctor." },
      { title: "Maternity", desc: "Antenatal care, delivery and care for the newborn." },
      { title: "Dental and Optical", desc: "Check-ups, treatment, glasses and lenses." },
      { title: "Help With Approvals and Claims", desc: "Our team helps with hospital pre-approvals and follows up claims with the insurer." },
    ],
    image: "/images/cover-medical.jpg",
    quoteType: "medical",
    quoteLabel: "Get a Medical Insurance Quote",
  },
  {
    id: "cyber-security",
    name: "Cyber Insurance",
    intro:
      "For businesses that hold customer data or rely on their systems. It pays for dealing with a breach or attack, and for the income you lose while you recover.",
    features: [
      { title: "Data Breaches", desc: "Investigating the breach, notifying customers and restoring data." },
      { title: "Business Interruption", desc: "Income lost while your systems are down." },
      { title: "Ransomware and Extortion", desc: "Costs from ransomware attacks, where the policy includes them." },
      { title: "Specialist Help During an Attack", desc: "Many policies include access to IT and legal specialists when it happens." },
    ],
    image: "/images/cover-cyber.jpg",
    quoteType: "cyber",
    quoteLabel: "Get a Cyber Insurance Quote",
  },
  {
    id: "life",
    name: "Life and Pension",
    intro: "Money for your family if you pass away, and savings for the years after you stop working.",
    features: [
      { title: "Term Life", desc: "Cover for a set number of years, at a lower premium." },
      { title: "Whole Life", desc: "Cover for the rest of your life, with a savings element." },
      { title: "Education Plans", desc: "Save steadily towards school and university fees." },
      { title: "Pension Plans", desc: "Build an income for when you stop working." },
    ],
    image: "/images/cover-life-pension.jpg",
    quoteType: "life",
    quoteLabel: "Get a Life Cover Quote",
  },
  {
    id: "property",
    name: "Home and Property",
    intro: "Cover for your house and what's in it, or for commercial buildings.",
    features: [
      { title: "Fire and Related Damage", desc: "Fire, lightning and explosion." },
      { title: "Theft and Burglary", desc: "Stolen goods, and damage from a break-in." },
      { title: "Floods and Storms", desc: "Weather damage, depending on the policy." },
      { title: "Contents", desc: "Furniture, electronics and valuables." },
    ],
    image: "/images/cover-home-mombasa.jpg",
    quoteType: "home",
    quoteLabel: "Get a Home Insurance Quote",
  },
  {
    id: "business",
    name: "Business Insurance",
    intro:
      "Cover for the risks a business carries: claims from the public, your staff's medical costs, and lost income when something stops you trading.",
    features: [
      { title: "Public Liability", desc: "Claims from customers or the public for injury or damage." },
      { title: "Professional Indemnity", desc: "Claims that your advice or service caused a loss." },
      { title: "Group Medical", desc: "Medical cover for your staff." },
      { title: "Business Interruption", desc: "Income lost after an insured event, such as a fire." },
    ],
    image: "/images/cover-business-nairobi.jpg",
    quoteType: "business",
    quoteLabel: "Get a Business Insurance Quote",
  },
  {
    id: "travel",
    name: "Travel Insurance",
    intro: "Cover for medical emergencies, cancellations, delays and lost luggage when you travel abroad.",
    features: [
      { title: "Medical Emergencies", desc: "Treatment if you fall ill or are injured abroad." },
      { title: "Cancelled or Cut-Short Trips", desc: "Costs you can't recover when plans change." },
      { title: "Flight Delays", desc: "Compensation for long delays." },
      { title: "Lost or Delayed Luggage", desc: "Replacing essentials while your bags are missing." },
    ],
    image: "/images/cover-travel.jpg",
    quoteType: "travel",
    quoteLabel: "Get a Travel Insurance Quote",
  },
]

export default function ProductsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <main className="flex-1">
        <PageHero
          image="/images/hero-insurance-kicc-trees.jpg"
          imageAlt="Nairobi skyline with the KICC and Times Tower above the trees"
          eyebrow="Insurance"
          title="Insurance, Explained"
          subtitle="Cover from ten of Kenya's leading insurers, with the terms explained before you buy."
        />

        {/* Cover finder quiz */}
        <section className="border-b border-primary/10 bg-muted py-14 md:py-20">
          <div className="container mx-auto px-4">
            <div className="mb-8 text-center">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-gold-ink">Not Sure Where to Start?</p>
              <h2 className="mb-3 font-serif text-3xl font-bold text-primary text-balance md:text-4xl">
                Two Questions to Narrow It Down
              </h2>
              <p className="mx-auto max-w-2xl text-muted-foreground text-pretty">
                Answer them and we&rsquo;ll suggest the cover to look at first.
              </p>
            </div>
            <CoverQuiz />
          </div>
        </section>

        {/* Sticky product nav (sits under the slim header) */}
        <nav
          aria-label="Types of cover"
          className="sticky top-16 z-30 md:top-20 border-b border-primary/10 bg-paper/95 backdrop-blur-sm"
        >
          <div className="container mx-auto flex gap-6 overflow-x-auto px-4 [scrollbar-width:none]">
            {products.map((p) => (
              <a
                key={p.id}
                href={`#${p.id}`}
                className="shrink-0 whitespace-nowrap border-b-2 border-transparent py-4 text-sm font-medium text-primary/70 transition-colors hover:border-secondary hover:text-primary"
              >
                {p.name}
                {p.indexNote ? (
                  <span className="ml-1.5 text-[10px] font-bold uppercase tracking-wider text-gold-ink">{p.indexNote}</span>
                ) : null}
              </a>
            ))}
          </div>
        </nav>

        {products.map((p, i) => {
          const imageFirst = i % 2 === 1
          return (
            <section key={p.id} id={p.id} className={cn("scroll-mt-32 py-14 md:scroll-mt-40 md:py-20", imageFirst && "bg-muted")}>
              <div className="container mx-auto px-4">
                <div className="reveal-stagger grid grid-cols-1 items-stretch gap-10 lg:grid-cols-2">
                  <div className={cn("flex flex-col justify-center", imageFirst && "lg:order-2")}>
                    <h2 className="mb-5 font-serif text-4xl text-primary text-balance md:text-5xl">{p.name}</h2>
                    <p className="mb-4 leading-relaxed text-muted-foreground">{p.intro}</p>
                    {p.badge ? <p className="mb-6 text-sm font-semibold text-gold-ink">{p.badge}</p> : null}

                    <div className="mb-8 mt-2 space-y-4">
                      {p.features.map((f) => (
                        <div key={f.title} className="flex items-start gap-3">
                          <span className="mt-[0.55rem] h-1.5 w-1.5 shrink-0 bg-secondary" aria-hidden="true" />
                          <div>
                            <h3 className="mb-1 font-semibold">{f.title}</h3>
                            <p className="text-sm text-muted-foreground">{f.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>

                    <Button className="self-start bg-secondary font-semibold text-primary hover:bg-secondary/90" asChild>
                      <Link href={`/quote?type=${p.quoteType}`}>
                        {p.quoteLabel}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                  <div
                    className={cn(
                      "group relative h-72 overflow-hidden md:h-80 lg:h-full lg:min-h-[24rem]",
                      imageFirst && "lg:order-1",
                    )}
                  >
                    <Image
                      src={p.image}
                      alt=""
                      fill
                      sizes="(min-width: 1024px) 60vw, 100vw"
                      quality={80}
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-primary/18 via-transparent to-transparent" />
                  </div>
                </div>
              </div>
            </section>
          )
        })}

        <section className="border-t border-primary/10 py-10">
          <div className="container mx-auto px-4">
            <p className="mx-auto max-w-3xl text-center text-sm text-muted-foreground">
              Exact cover, limits and exclusions depend on the insurer and the policy. We&rsquo;ll take you through
              them before you buy.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-14 md:py-20 bg-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="mb-4 text-3xl font-serif font-bold text-gold-ink text-balance md:text-4xl">
              Not Sure Which Cover You Need?
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-200 text-pretty">
              Tell us about your situation and we&rsquo;ll suggest where to start. We reply within one business day.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-secondary font-semibold text-primary hover:bg-secondary/90" asChild>
                <Link href="/contact">
                  Talk to Us
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white bg-transparent text-white hover:bg-white hover:text-primary"
                asChild
              >
                <Link href="/quote">Get a Quote</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
