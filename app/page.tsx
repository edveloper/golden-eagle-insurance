import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { QuickActions } from "@/components/quick-actions"
import { Partners } from "@/components/partners"
import { GrowthEstimator } from "@/components/growth-estimator"
import { Button } from "@/components/ui/button"
import { buildPageMetadata } from "@/lib/seo"
import Link from "next/link"
import Image from "next/image"
import { INSURERS, PHONE_DISPLAY, PHONE_TEL, YEARS_IN_BUSINESS } from "@/lib/site"
import {
  Home,
  CheckCircle,
  Scale,
  ShieldCheck,
  Award,
  TrendingUp,
  ArrowRight,
  Phone,
  GraduationCap,
  Landmark,
  Building2,
} from "lucide-react"

export const metadata = buildPageMetadata({
  title: "Golden Eagle Insurance Agency | Insurance & Investment Advice in Nairobi",
  description:
    "IRA-licensed insurance agency in Nairobi, since 2006. Medical, life, professional indemnity, property, business and travel cover from Kenya's leading insurers, plus global investment advice.",
  path: "/",
})

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-primary text-white">
          {/* Background photograph. TODO: replace with a licensed high-res Nairobi/office image.
              Current placeholder: Nairobi skyline by Waceke Kamau, Wikimedia Commons, CC BY-SA 4.0. */}
          <Image
            src="/nairobi-skyline-hero.jpg"
            alt="Nairobi city skyline"
            fill
            priority
            sizes="100vw"
            quality={80}
            className="object-cover object-center [filter:grayscale(100%)_contrast(1.05)_brightness(0.82)]"
          />
          {/* Navy duotone tint */}
          <div className="absolute inset-0 bg-primary mix-blend-color" aria-hidden="true" />
          {/* Legibility scrim */}
          <div
            className="absolute inset-0 bg-[linear-gradient(100deg,rgba(7,20,39,0.94)_0%,rgba(8,23,45,0.82)_42%,rgba(8,23,45,0.45)_100%)]"
            aria-hidden="true"
          />

          <div className="container relative mx-auto px-4 py-20 md:py-28">
            <div className="max-w-3xl">
              <div className="mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-secondary">
                <span className="h-px w-8 bg-secondary" aria-hidden="true" />
                Insurance Agency · Nairobi
              </div>
              <h1 className="mb-6 text-4xl font-serif font-bold text-balance text-white md:text-6xl">
                The Right Cover From Kenya&rsquo;s Leading Insurers, and Help When You Claim
              </h1>
              <p className="mb-8 max-w-2xl text-lg leading-relaxed text-gray-100 text-pretty md:text-xl">
                Founded in 2006 and licensed by the IRA. Ranked first in the AKI&rsquo;s professional indemnity
                category in 2018, 2019 and 2023.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                    size="lg"
                    className="bg-secondary font-semibold text-primary shadow-[0_12px_36px_rgba(197,161,0,0.35)] hover:bg-secondary/90"
                    asChild
                  >
                  <Link href="/quote">
                    Get a Free Quote
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                    size="lg"
                    variant="outline"
                    className="border-white/60 bg-white/5 text-white hover:bg-white hover:text-primary"
                    asChild
                  >
                  <Link href="/contact">
                    Talk to Us
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Quick actions */}
        <QuickActions />

        {/* Trust Indicators */}
        <section className="border-b border-primary/10 bg-muted py-8 md:py-10">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 md:divide-x md:divide-primary/10">
              <div className="px-4 py-3 text-center">
                <div className="font-serif text-4xl font-bold text-primary md:text-5xl">{YEARS_IN_BUSINESS}+</div>
                <div className="mt-1 text-xs uppercase tracking-[0.14em] text-muted-foreground">Years in Business</div>
              </div>
              <div className="px-4 py-3 text-center">
                <div className="font-serif text-4xl font-bold text-primary md:text-5xl">3×</div>
                <div className="mt-1 text-xs uppercase tracking-[0.14em] text-muted-foreground">AKI #1, Professional Indemnity</div>
              </div>
              <div className="px-4 py-3 text-center">
                <div className="font-serif text-4xl font-bold text-primary md:text-5xl">{INSURERS.length}</div>
                <div className="mt-1 text-xs uppercase tracking-[0.14em] text-muted-foreground">Insurers We Work With</div>
              </div>
              <div className="px-4 py-3 text-center">
                <div className="font-serif text-4xl font-bold text-primary md:text-5xl">Top 10</div>
                <div className="mt-1 text-xs uppercase tracking-[0.14em] text-muted-foreground">AKI Agents Nationwide, 2024</div>
              </div>
            </div>
          </div>
        </section>

        {/* Two Divisions Overview */}
        <section className="py-14 md:py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-secondary">What We Do</p>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4 text-balance">
                Protect What You Have, Grow What You Save
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                Most people need both, so we do both. One team can arrange your cover and manage your investments.
              </p>
            </div>

            <div className="mb-16 grid grid-cols-1 gap-6 lg:grid-cols-2">
              {/* Insurance Division: light panel */}
              <div className="rounded-2xl border border-primary/10 bg-white p-8 shadow-[0_10px_30px_rgba(10,29,55,0.06)] md:p-10">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-secondary">Insurance</p>
                <h3 className="mt-3 font-serif text-2xl font-bold text-primary md:text-3xl">Cover for What You&rsquo;ve Built</h3>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  We place cover with ten of Kenya&rsquo;s leading insurers and help you choose between them.
                </p>
                <ul className="mt-6 space-y-3">
                  <li className="flex items-start gap-3 text-sm">
                    <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-secondary" />
                    <span>Medical and life cover</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm">
                    <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-secondary" />
                    <span>Professional indemnity, our award-winning speciality</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm">
                    <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-secondary" />
                    <span>Home, business and travel cover</span>
                  </li>
                </ul>
                <p className="mt-6 text-xs text-muted-foreground">
                  Insurers: {INSURERS.join(", ")}
                </p>
                <Link
                  href="/products"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-all hover:gap-3"
                >
                  See Insurance Cover <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              {/* Global Markets Advisory: navy panel */}
              <div className="relative overflow-hidden rounded-2xl bg-primary p-8 text-white shadow-[0_18px_40px_rgba(10,29,55,0.18)] md:p-10">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-secondary">Investment Advisory</p>
                <h3 className="mt-3 font-serif text-2xl font-bold md:text-3xl">Invest Beyond the Nairobi Securities Exchange</h3>
                <p className="mt-4 leading-relaxed text-gray-300">
                  We build diversified portfolios of global shares, funds, ETFs and bonds, and explain every holding to
                  you.
                </p>
                <ul className="mt-6 space-y-3">
                  <li className="flex items-start gap-3 text-sm text-gray-100">
                    <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-secondary" />
                    <span>School and university fees</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-gray-100">
                    <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-secondary" />
                    <span>Income for retirement</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-gray-100">
                    <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-secondary" />
                    <span>Long-term savings</span>
                  </li>
                </ul>
                <p className="mt-6 text-xs text-gray-400">Investments are held on Investors Trust, regulated in the Cayman Islands</p>
                <Link
                  href="/advisory"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-secondary transition-all hover:gap-3"
                >
                  See the Advisory <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Insurance Products */}
        <section className="py-14 md:py-20 bg-muted">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-secondary">Insurance</p>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4 text-balance">
                Cover We Arrange
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                Pick a category to see what&rsquo;s included.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { title: "Medical Insurance", href: "/products#health", img: "/health-insurance-medical-care-kenya.jpg" },
                { title: "Professional Indemnity", href: "/products#professional-indemnity", img: "/professional-indemnity-insurance-kenya.jpg", award: true },
                { title: "Home Insurance", href: "/products#property", img: "/home-property-insurance-kenya.jpg" },
                { title: "Business Insurance", href: "/products#business", img: "/business-insurance-office-kenya.jpg" },
                { title: "Travel Insurance", href: "/products#travel", img: "/travel-insurance-vacation-kenya.jpg" },
                { title: "Life & Pension", href: "/products#life", img: "/family-life-insurance-protection-kenya.jpg" },
              ].map((p) => (
                <Link key={p.title} href={p.href} className="group relative block overflow-hidden rounded-2xl">
                  <Image
                    src={p.img}
                    alt={p.title}
                    width={640}
                    height={420}
                    className="h-56 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/45 to-transparent" />
                  {p.award ? (
                    <span className="absolute left-4 top-4 rounded-sm bg-secondary px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-primary">
                      AKI #1 · 3 Times
                    </span>
                  ) : null}
                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <h3 className="font-serif text-xl font-bold text-white">{p.title}</h3>
                    <span className="mt-1 inline-flex items-center gap-1.5 text-sm font-medium text-secondary">
                      What&rsquo;s Covered <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Advisory spotlight */}
        <section className="py-14 md:py-20">
          <div className="container mx-auto px-4">
            <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
              <div>
                <div className="mb-3 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-secondary">
                  <span className="h-px w-8 bg-secondary" aria-hidden="true" />
                  Investment Advisory
                </div>
                <h2 className="font-serif text-3xl font-bold text-primary text-balance md:text-4xl">
                  Global Markets, With an Adviser Who Explains Them
                </h2>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  Our advisory gives you shares, funds and bonds listed in the US, UK, Europe and Asia. We research the
                  markets, build a portfolio around your goals and manage it over time. Before you invest, we explain
                  what each holding is and why it&rsquo;s there.
                </p>
                <ul className="mt-6 space-y-3">
                  <li className="flex items-start gap-3 text-sm">
                    <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-secondary" />
                    <span>Portfolios spread across several countries and asset types</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm">
                    <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-secondary" />
                    <span>Held on Investors Trust, a platform regulated in the Cayman Islands</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm">
                    <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-secondary" />
                    <span>Regular reviews, with the reasoning written down</span>
                  </li>
                </ul>
                <Link
                  href="/advisory"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-all hover:gap-3"
                >
                  How the Advisory Works <ArrowRight className="h-4 w-4 text-secondary" />
                </Link>
              </div>
              <figure className="rounded-2xl border border-primary/10 bg-muted p-8 md:p-10">
                <blockquote className="font-serif text-2xl leading-relaxed text-primary text-balance">
                  &ldquo;Preserve capital, compound wealth, and invest only in businesses we understand and believe can
                  create long-term value.&rdquo;
                </blockquote>
                <figcaption className="mt-4 text-sm text-muted-foreground">Our investment philosophy</figcaption>
              </figure>
            </div>

            <div className="mt-16">
              <div className="mb-8 text-center">
                <h3 className="font-serif text-2xl font-bold text-primary md:text-3xl">
                  Try the Numbers
                </h3>
                <p className="mx-auto mt-2 max-w-2xl text-muted-foreground">
                  Move the sliders to see how regular saving can compound. It&rsquo;s an illustration, not a forecast.
                </p>
              </div>
              <GrowthEstimator />
            </div>
          </div>
        </section>

        {/* Life moments */}
        <section className="bg-primary py-14 text-white md:py-20">
          <div className="container mx-auto px-4">
            <div className="mb-10 max-w-2xl">
              <div className="mb-3 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-secondary">
                <span className="h-px w-8 bg-secondary" aria-hidden="true" />
                Planning Ahead
              </div>
              <h2 className="font-serif text-3xl font-bold text-balance md:text-4xl">What Are You Planning For?</h2>
              <p className="mt-3 text-gray-300 text-pretty">
                Pick the one closest to home. We&rsquo;ll start there.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { icon: GraduationCap, title: "School and University Fees", desc: "Start early, and the money is there when the admission letter arrives.", href: "/advisory#goals" },
                { icon: Home, title: "Your Home", desc: "Cover the house and what's in it against fire, theft and damage.", href: "/products#property" },
                { icon: Landmark, title: "Retirement", desc: "Build an income for the years after your last payslip.", href: "/advisory#goals" },
                { icon: Building2, title: "Your Business", desc: "Insure the risks you carry, and invest what the business earns.", href: "/products#business" },
              ].map((m) => (
                <Link key={m.title} href={m.href} className="group border-t border-white/15 pt-5">
                  <m.icon className="mb-3 h-6 w-6 text-secondary" />
                  <h3 className="font-serif text-lg font-bold">{m.title}</h3>
                  <p className="mt-2 text-sm text-gray-300">{m.desc}</p>
                  <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-secondary">
                    Start Here <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-14 md:py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-secondary">Why Golden Eagle</p>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4 text-balance">
                What You Get From Us
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-primary/10 bg-primary/10 sm:grid-cols-2 lg:grid-cols-4">
              <div className="bg-background p-6">
                <Scale className="mb-3 h-6 w-6 text-secondary" />
                <h3 className="mb-2 font-semibold text-primary">Ten Insurers, One Conversation</h3>
                <p className="text-sm text-muted-foreground">We compare cover across insurers, so you don&rsquo;t have to call each one.</p>
              </div>
              <div className="bg-background p-6">
                <ShieldCheck className="mb-3 h-6 w-6 text-secondary" />
                <h3 className="mb-2 font-semibold text-primary">Help When You Claim</h3>
                <p className="text-sm text-muted-foreground">We help you prepare the claim and follow it up with the insurer.</p>
              </div>
              <div className="bg-background p-6">
                <Award className="mb-3 h-6 w-6 text-secondary" />
                <h3 className="mb-2 font-semibold text-primary">Professional Indemnity Specialists</h3>
                <p className="text-sm text-muted-foreground">First in the AKI&rsquo;s professional indemnity category in 2018, 2019 and 2023.</p>
              </div>
              <div className="bg-background p-6">
                <TrendingUp className="mb-3 h-6 w-6 text-secondary" />
                <h3 className="mb-2 font-semibold text-primary">Cover and Investments Together</h3>
                <p className="text-sm text-muted-foreground">The team that insures your family can also help you invest for it.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Partners */}
        <Partners />

        {/* CTA Section */}
        <section className="py-14 md:py-20 bg-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-balance text-secondary">Tell Us What You Need Covered</h2>
            <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto text-pretty">
              The quote is free and you&rsquo;re under no obligation. We&rsquo;ll compare insurers and reply within one business day.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-primary font-semibold" asChild>
                <Link href="/quote">
                  Get a Free Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-primary bg-transparent"
                  asChild
                >
                <a href={`tel:${PHONE_TEL}`}>
                  <Phone className="mr-2 h-5 w-5" />
                  Call {PHONE_DISPLAY}
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
