import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { PageHero } from "@/components/page-hero"
import { CoverQuiz } from "@/components/cover-quiz"
import { Button } from "@/components/ui/button"
import { buildPageMetadata } from "@/lib/seo"
import Link from "next/link"
import Image from "next/image"
import { CheckCircle, ArrowRight } from "lucide-react"

export const metadata = buildPageMetadata({
  title: "Insurance Products | Golden Eagle Insurance Agency",
  description:
    "Explore our comprehensive range of insurance products including professional indemnity, health, cyber security, life, property, business, and travel insurance tailored for individuals and businesses.",
  path: "/products",
})

export default function ProductsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <main className="flex-1">
        <PageHero
          image="/nairobi-skyline-hero.jpg"
          imageAlt="Nairobi city skyline"
          eyebrow="Coverage Portfolio"
          title="Comprehensive Insurance Solutions"
          subtitle="Discover our wide range of insurance products designed to protect what matters most to you and your business."
        />

        {/* Cover finder quiz */}
        <section className="border-b border-primary/10 bg-muted py-14 md:py-20">
          <div className="container mx-auto px-4">
            <div className="mb-8 text-center">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-secondary">Not sure where to start?</p>
              <h2 className="mb-3 font-serif text-3xl font-bold text-primary text-balance md:text-4xl">
                Find the Right Cover in 30 Seconds
              </h2>
              <p className="mx-auto max-w-2xl text-muted-foreground text-pretty">
                Answer two quick questions and we'll point you to the cover that fits.
              </p>
            </div>
            <CoverQuiz />
          </div>
        </section>

        {/* Coverage index */}
        <section className="border-b border-primary/10 py-14 md:py-20">
          <div className="container mx-auto px-4">
            <div className="mb-8">
              <p className="mb-3 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-secondary">
                <span className="h-px w-8 bg-secondary" aria-hidden="true" />
                Coverage at a Glance
              </p>
              <h2 className="font-serif text-3xl font-bold text-primary text-balance md:text-4xl">Everything We Protect</h2>
            </div>
            <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-primary/10 bg-primary/10 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { name: "Professional Indemnity", href: "#professional-indemnity", note: "Award-winning" },
                { name: "Health Insurance", href: "#health" },
                { name: "Cyber Security", href: "#cyber-security" },
                { name: "Life Insurance", href: "#life" },
                { name: "Property Insurance", href: "#property" },
                { name: "Business Insurance", href: "#business" },
                { name: "Travel Insurance", href: "#travel" },
              ].map((c) => (
                <a
                  key={c.href}
                  href={c.href}
                  className="group flex items-center justify-between gap-3 bg-background p-6 transition-colors hover:bg-muted"
                >
                  <span>
                    <span className="font-serif text-lg font-semibold text-primary">{c.name}</span>
                    {c.note ? (
                      <span className="ml-2 text-[10px] font-bold uppercase tracking-wider text-secondary">{c.note}</span>
                    ) : null}
                  </span>
                  <ArrowRight className="h-4 w-4 shrink-0 text-secondary transition-transform group-hover:translate-x-1" />
                </a>
              ))}
            </div>
          </div>
        </section>

        <section id="professional-indemnity" className="py-14 md:py-20 scroll-mt-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-2">
              <div className="flex flex-col justify-center">
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6 text-balance">
                  Professional Indemnity Insurance
                </h2>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Protect your professional reputation and financial security with our comprehensive professional
                  indemnity insurance. Designed for consultants, accountants, lawyers, engineers, and other
                  professionals.
                </p>
                <p className="text-sm text-secondary font-semibold mb-6">
                  Award-Winning Coverage: Multiple AKI Awards Winner (2018, 2019, 2023, 2024)
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold mb-1">Professional Negligence Coverage</h4>
                      <p className="text-sm text-muted-foreground">
                        Protection against claims of professional errors or omissions
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold mb-1">Legal Defense Costs</h4>
                      <p className="text-sm text-muted-foreground">Coverage for legal fees and court expenses</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold mb-1">Damages & Settlements</h4>
                      <p className="text-sm text-muted-foreground">Full coverage for awarded damages and settlements</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold mb-1">Tailored Coverage Options</h4>
                      <p className="text-sm text-muted-foreground">
                        Customized policies for different professional sectors
                      </p>
                    </div>
                  </div>
                </div>

                <Button className="bg-secondary hover:bg-secondary/90 text-primary font-semibold" asChild>
                  <Link href="/quote">
                    Get Professional Indemnity Quote
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <div className="group relative h-72 overflow-hidden rounded-2xl border border-primary/10 shadow-[0_18px_40px_rgba(10,29,55,0.14)] md:h-80 lg:h-full lg:min-h-[24rem]">
                <Image
                  src="/professional-indemnity-insurance-kenya.jpg"
                  alt="Professional Indemnity Insurance"
                  fill
                  sizes="(min-width: 1024px) 42vw, 92vw"
                  quality={82}
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-primary/18 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </section>

        {/* Health Insurance */}
        <section id="health" className="py-14 md:py-20 bg-muted scroll-mt-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-2">
              <div className="order-2 lg:order-1 group relative h-72 overflow-hidden rounded-2xl border border-primary/10 shadow-[0_18px_40px_rgba(10,29,55,0.14)] md:h-80 lg:h-full lg:min-h-[24rem]">
                <Image
                  src="/health-insurance-medical-care-kenya.jpg"
                  alt="Health Insurance"
                  fill
                  sizes="(min-width: 1024px) 42vw, 92vw"
                  quality={82}
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-primary/18 via-transparent to-transparent" />
              </div>
              <div className="order-1 flex flex-col justify-center lg:order-2">
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6 text-balance">
                  Health Insurance
                </h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Access quality healthcare for you and your family with our comprehensive health insurance plans.
                  Choose from individual, family, or corporate packages.
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold mb-1">Inpatient & Outpatient Cover</h4>
                      <p className="text-sm text-muted-foreground">
                        Comprehensive coverage for hospital visits and treatments
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold mb-1">Maternity Coverage</h4>
                      <p className="text-sm text-muted-foreground">Support for expectant mothers and newborns</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold mb-1">Dental & Optical</h4>
                      <p className="text-sm text-muted-foreground">Coverage for dental and eye care services</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold mb-1">Wide Hospital Network</h4>
                      <p className="text-sm text-muted-foreground">Access to top hospitals across Kenya</p>
                    </div>
                  </div>
                </div>

                <Button className="bg-secondary hover:bg-secondary/90 text-primary font-semibold" asChild>
                  <Link href="/quote">
                    Get Health Insurance Quote
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section id="cyber-security" className="py-14 md:py-20 scroll-mt-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-2">
              <div className="flex flex-col justify-center">
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6 text-balance">
                  Cyber Security Insurance
                </h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Protect your business from cyber threats and data breaches. Our comprehensive cyber security insurance
                  covers financial losses and recovery costs from cyber incidents.
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold mb-1">Data Breach Coverage</h4>
                      <p className="text-sm text-muted-foreground">
                        Protection against costs of data breaches and cyber attacks
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold mb-1">Business Interruption</h4>
                      <p className="text-sm text-muted-foreground">Coverage for lost income due to cyber incidents</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold mb-1">Ransomware Protection</h4>
                      <p className="text-sm text-muted-foreground">Coverage for ransomware attacks and extortion</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold mb-1">24/7 Incident Response</h4>
                      <p className="text-sm text-muted-foreground">
                        Immediate support and expert guidance during cyber incidents
                      </p>
                    </div>
                  </div>
                </div>

                <Button className="bg-secondary hover:bg-secondary/90 text-primary font-semibold" asChild>
                  <Link href="/quote">
                    Get Cyber Security Quote
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <div className="group relative h-72 overflow-hidden rounded-2xl border border-primary/10 shadow-[0_18px_40px_rgba(10,29,55,0.14)] md:h-80 lg:h-full lg:min-h-[24rem]">
                <Image
                  src="/cyber-security-insurance-kenya.jpg"
                  alt="Cyber Security Insurance"
                  fill
                  sizes="(min-width: 1024px) 42vw, 92vw"
                  quality={82}
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-primary/18 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </section>

        {/* Life Insurance */}
        <section id="life" className="py-14 md:py-20 bg-muted scroll-mt-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-2">
              <div className="order-2 lg:order-1 group relative h-72 overflow-hidden rounded-2xl border border-primary/10 shadow-[0_18px_40px_rgba(10,29,55,0.14)] md:h-80 lg:h-full lg:min-h-[24rem]">
                <Image
                  src="/family-life-insurance-protection-kenya.jpg"
                  alt="Life Insurance"
                  fill
                  sizes="(min-width: 1024px) 42vw, 92vw"
                  quality={82}
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-primary/18 via-transparent to-transparent" />
              </div>
              <div className="order-1 flex flex-col justify-center lg:order-2">
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6 text-balance">
                  Life Insurance
                </h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Secure your family's financial future with our flexible life insurance plans, so your loved ones are
                  protected whatever happens.
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold mb-1">Term Life Insurance</h4>
                      <p className="text-sm text-muted-foreground">Affordable coverage for a specific period</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold mb-1">Whole Life Insurance</h4>
                      <p className="text-sm text-muted-foreground">Lifetime protection with savings component</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold mb-1">Education Plans</h4>
                      <p className="text-sm text-muted-foreground">Secure your children's educational future</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold mb-1">Retirement Planning</h4>
                      <p className="text-sm text-muted-foreground">Build wealth for your golden years</p>
                    </div>
                  </div>
                </div>

                <Button className="bg-secondary hover:bg-secondary/90 text-primary font-semibold" asChild>
                  <Link href="/quote">
                    Get Life Insurance Quote
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Property Insurance */}
        <section id="property" className="py-14 md:py-20 bg-muted scroll-mt-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-2">
              <div className="order-2 lg:order-1 group relative h-72 overflow-hidden rounded-2xl border border-primary/10 shadow-[0_18px_40px_rgba(10,29,55,0.14)] md:h-80 lg:h-full lg:min-h-[24rem]">
                <Image
                  src="/home-property-insurance-kenya.jpg"
                  alt="Property Insurance"
                  fill
                  sizes="(min-width: 1024px) 42vw, 92vw"
                  quality={82}
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-primary/18 via-transparent to-transparent" />
              </div>
              <div className="order-1 flex flex-col justify-center lg:order-2">
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6 text-balance">
                  Property Insurance
                </h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Protect your home and belongings from unexpected events. Our property insurance covers residential and
                  commercial properties.
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold mb-1">Fire & Perils Coverage</h4>
                      <p className="text-sm text-muted-foreground">
                        Protection against fire, lightning, and explosions
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold mb-1">Theft & Burglary</h4>
                      <p className="text-sm text-muted-foreground">Coverage for stolen or damaged property</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold mb-1">Natural Disasters</h4>
                      <p className="text-sm text-muted-foreground">Protection from floods, storms, and earthquakes</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold mb-1">Contents Insurance</h4>
                      <p className="text-sm text-muted-foreground">Coverage for household items and valuables</p>
                    </div>
                  </div>
                </div>

                <Button className="bg-secondary hover:bg-secondary/90 text-primary font-semibold" asChild>
                  <Link href="/quote">
                    Get Property Insurance Quote
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Business Insurance */}
        <section id="business" className="py-14 md:py-20 scroll-mt-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-2">
              <div className="flex flex-col justify-center">
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6 text-balance">
                  Business Insurance
                </h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Comprehensive insurance solutions for businesses of all sizes. Protect your assets, employees, and
                  operations from various risks.
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold mb-1">Public Liability</h4>
                      <p className="text-sm text-muted-foreground">Protection against third-party claims</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold mb-1">Professional Indemnity</h4>
                      <p className="text-sm text-muted-foreground">Coverage for professional negligence claims</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold mb-1">Group Medical Cover</h4>
                      <p className="text-sm text-muted-foreground">Health insurance for your employees</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold mb-1">Business Interruption</h4>
                      <p className="text-sm text-muted-foreground">Coverage for loss of income due to disruptions</p>
                    </div>
                  </div>
                </div>

                <Button className="bg-secondary hover:bg-secondary/90 text-primary font-semibold" asChild>
                  <Link href="/quote">
                    Get Business Insurance Quote
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <div className="group relative h-72 overflow-hidden rounded-2xl border border-primary/10 shadow-[0_18px_40px_rgba(10,29,55,0.14)] md:h-80 lg:h-full lg:min-h-[24rem]">
                <Image
                  src="/business-insurance-office-kenya.jpg"
                  alt="Business Insurance"
                  fill
                  sizes="(min-width: 1024px) 42vw, 92vw"
                  quality={82}
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-primary/18 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </section>

        {/* Travel Insurance */}
        <section id="travel" className="py-14 md:py-20 bg-muted scroll-mt-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-2">
              <div className="order-2 lg:order-1 group relative h-72 overflow-hidden rounded-2xl border border-primary/10 shadow-[0_18px_40px_rgba(10,29,55,0.14)] md:h-80 lg:h-full lg:min-h-[24rem]">
                <Image
                  src="/travel-insurance-vacation-kenya.jpg"
                  alt="Travel Insurance"
                  fill
                  sizes="(min-width: 1024px) 42vw, 92vw"
                  quality={82}
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-primary/18 via-transparent to-transparent" />
              </div>
              <div className="order-1 flex flex-col justify-center lg:order-2">
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6 text-balance">
                  Travel Insurance
                </h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Travel with confidence knowing you're protected. Our travel insurance covers medical emergencies, trip
                  cancellations, and more.
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold mb-1">Medical Emergency Coverage</h4>
                      <p className="text-sm text-muted-foreground">Healthcare costs while traveling abroad</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold mb-1">Trip Cancellation</h4>
                      <p className="text-sm text-muted-foreground">Reimbursement for cancelled or interrupted trips</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold mb-1">Lost Luggage Protection</h4>
                      <p className="text-sm text-muted-foreground">Coverage for lost or delayed baggage</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold mb-1">24/7 Travel Assistance</h4>
                      <p className="text-sm text-muted-foreground">Round-the-clock support wherever you are</p>
                    </div>
                  </div>
                </div>

                <Button className="bg-secondary hover:bg-secondary/90 text-primary font-semibold" asChild>
                  <Link href="/quote">
                    Get Travel Insurance Quote
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-14 md:py-20 bg-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-balance text-secondary">
              Not Sure Which Product is Right for You?
            </h2>
            <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto text-pretty">
              Our insurance experts are here to help you find the perfect coverage for your needs.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-primary font-semibold" asChild>
                <Link href="/contact">
                  Speak to an Expert
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-primary bg-transparent"
                  asChild
                >
                <Link href="/quote">
                  Get a Quote
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}

