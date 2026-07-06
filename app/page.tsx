import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { QuickActions } from "@/components/quick-actions"
import { Partners } from "@/components/partners"
import { GrowthEstimator } from "@/components/growth-estimator"
import { Button } from "@/components/ui/button"
import { buildPageMetadata } from "@/lib/seo"
import Link from "next/link"
import Image from "next/image"
import {
  Home,
  CheckCircle,
  Clock,
  Award,
  TrendingUp,
  ArrowRight,
  Phone,
  GraduationCap,
  Landmark,
  Building2,
} from "lucide-react"

export const metadata = buildPageMetadata({
  title: "Golden Eagle Insurance Agency | Trusted Insurance Solutions",
  description:
    "Golden Eagle Insurance Agency provides comprehensive insurance and investment solutions for individuals and businesses.",
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
                Insurance + Global Markets Advisory
              </div>
              <h1 className="mb-6 text-4xl font-serif font-bold text-balance text-white md:text-6xl">
                Trusted Financial &amp; Insurance Partner Since 2006
              </h1>
              <p className="mb-8 max-w-2xl text-lg leading-relaxed text-gray-100 text-pretty md:text-xl">
                Golden Eagle Insurance Agency Limited offers trusted financial and risk management solutions. We
                represent multiple reputable insurance companies and investment partners globally, providing tailored
                services that empower our clients to protect, grow, and secure their wealth.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/quote">
                  <Button
                    size="lg"
                    className="bg-secondary font-semibold text-primary shadow-[0_12px_36px_rgba(197,161,0,0.35)] hover:bg-secondary/90"
                  >
                    Get a Free Quote
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white/60 bg-white/5 text-white hover:bg-white hover:text-primary"
                  >
                    Contact Us
                  </Button>
                </Link>
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
                <div className="font-serif text-4xl font-bold text-primary md:text-5xl">18+</div>
                <div className="mt-1 text-xs uppercase tracking-[0.14em] text-muted-foreground">Years of Excellence</div>
              </div>
              <div className="px-4 py-3 text-center">
                <div className="font-serif text-4xl font-bold text-primary md:text-5xl">2</div>
                <div className="mt-1 text-xs uppercase tracking-[0.14em] text-muted-foreground">Powerful Divisions</div>
              </div>
              <div className="px-4 py-3 text-center">
                <div className="font-serif text-4xl font-bold text-primary md:text-5xl">9+</div>
                <div className="mt-1 text-xs uppercase tracking-[0.14em] text-muted-foreground">Insurance Partners</div>
              </div>
              <div className="px-4 py-3 text-center">
                <div className="font-serif text-4xl font-bold text-primary md:text-5xl">AKI</div>
                <div className="mt-1 text-xs uppercase tracking-[0.14em] text-muted-foreground">Award Winner</div>
              </div>
            </div>
          </div>
        </section>

        {/* Two Divisions Overview */}
        <section className="py-14 md:py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-secondary">Integrated Advisory</p>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4 text-balance">
                Two Powerful Divisions
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                A considered blend of insurance protection and investment growth for your financial future.
              </p>
            </div>

            <div className="mb-16 grid grid-cols-1 gap-6 lg:grid-cols-2">
              {/* Insurance Division: light panel */}
              <div className="rounded-2xl border border-primary/10 bg-white p-8 shadow-[0_10px_30px_rgba(10,29,55,0.06)] md:p-10">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-secondary">Insurance Division</p>
                <h3 className="mt-3 font-serif text-2xl font-bold text-primary md:text-3xl">Protect What You've Built</h3>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  Comprehensive cover across Kenya's leading insurers: medical, life, professional indemnity, property,
                  business and travel.
                </p>
                <ul className="mt-6 space-y-3">
                  <li className="flex items-start gap-3 text-sm">
                    <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-secondary" />
                    <span>Medical &amp; Life Insurance</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm">
                    <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-secondary" />
                    <span>Professional Indemnity (award-winning)</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm">
                    <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-secondary" />
                    <span>Home, Business &amp; Travel Insurance</span>
                  </li>
                </ul>
                <p className="mt-6 text-xs text-muted-foreground">
                  Partners: ICEA Lion, Heritage, Old Mutual, Britam, Prudential, AAR, Jubilee, CIC, NCBA
                </p>
                <Link
                  href="/products"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-all hover:gap-3"
                >
                  Explore insurance <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              {/* Global Markets Advisory: navy panel */}
              <div className="relative overflow-hidden rounded-2xl bg-primary p-8 text-white shadow-[0_18px_40px_rgba(10,29,55,0.18)] md:p-10">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-secondary">Global Markets Advisory</p>
                <h3 className="mt-3 font-serif text-2xl font-bold md:text-3xl">Grow Your Wealth, Globally</h3>
                <p className="mt-4 leading-relaxed text-gray-300">
                  Access global instruments (equities, funds, ETFs and bonds) built into diversified portfolios, with
                  expert guidance at every step.
                </p>
                <ul className="mt-6 space-y-3">
                  <li className="flex items-start gap-3 text-sm text-gray-100">
                    <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-secondary" />
                    <span>Children's education &amp; college funds</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-gray-100">
                    <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-secondary" />
                    <span>Retirement &amp; pension planning</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-gray-100">
                    <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-secondary" />
                    <span>Long-term wealth creation</span>
                  </li>
                </ul>
                <p className="mt-6 text-xs text-gray-400">Platform: Investors Trust (Cayman Islands)</p>
                <Link
                  href="/advisory"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-secondary transition-all hover:gap-3"
                >
                  Explore the advisory <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Insurance Products */}
        <section className="py-14 md:py-20 bg-muted">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-secondary">Insurance Coverage</p>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4 text-balance">
                Our Insurance Products
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                Comprehensive protection for every aspect of your life and business.
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
                      Award-winning
                    </span>
                  ) : null}
                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <h3 className="font-serif text-xl font-bold text-white">{p.title}</h3>
                    <span className="mt-1 inline-flex items-center gap-1.5 text-sm font-medium text-secondary">
                      Learn more <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
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
                  Global Markets Advisory
                </div>
                <h2 className="font-serif text-3xl font-bold text-primary text-balance md:text-4xl">
                  The Same Access as New York, London or Singapore
                </h2>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  Golden Eagle is your adviser, not just your access. We research global markets, construct diversified
                  portfolios, and manage them with discipline, so Kenyan investors can build wealth on the world stage.
                  Every client understands what they own, why they own it, and how it fits their goals.
                </p>
                <ul className="mt-6 space-y-3">
                  <li className="flex items-start gap-3 text-sm">
                    <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-secondary" />
                    <span>Globally diversified portfolios across US, UK, European and Asian markets</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm">
                    <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-secondary" />
                    <span>Access through Investors Trust, a regulated international platform</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm">
                    <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-secondary" />
                    <span>An education-first approach, built on preserving and compounding capital</span>
                  </li>
                </ul>
                <Link
                  href="/advisory"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-all hover:gap-3"
                >
                  Explore the Advisory <ArrowRight className="h-4 w-4 text-secondary" />
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
                  See What Disciplined Investing Could Build
                </h3>
                <p className="mx-auto mt-2 max-w-2xl text-muted-foreground">
                  Adjust the inputs, then talk to us about a strategy built around your goals.
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
                Planning ahead
              </div>
              <h2 className="font-serif text-3xl font-bold text-balance md:text-4xl">What Are You Planning For?</h2>
              <p className="mt-3 text-gray-300 text-pretty">
                Whatever stage you're at, we help you protect it and build on it.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { icon: GraduationCap, title: "Your Children's Education", desc: "Dedicated plans so school and university fees are ready when needed.", href: "/advisory#goals" },
                { icon: Home, title: "Your Home", desc: "Protect the place your family lives, and everything in it.", href: "/products#property" },
                { icon: Landmark, title: "A Secure Retirement", desc: "Build an income that lasts well beyond your working years.", href: "/advisory#goals" },
                { icon: Building2, title: "Your Business", desc: "Cover the risks, and invest the surplus as your business grows.", href: "/products#business" },
              ].map((m) => (
                <Link key={m.title} href={m.href} className="group border-t border-white/15 pt-5">
                  <m.icon className="mb-3 h-6 w-6 text-secondary" />
                  <h3 className="font-serif text-lg font-bold">{m.title}</h3>
                  <p className="mt-2 text-sm text-gray-300">{m.desc}</p>
                  <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-secondary">
                    Explore <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
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
                Why Choose Golden Eagle?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                We're committed to exceptional service and comprehensive coverage that gives you genuine confidence.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-primary/10 bg-primary/10 sm:grid-cols-2 lg:grid-cols-4">
              <div className="bg-background p-6">
                <CheckCircle className="mb-3 h-6 w-6 text-secondary" />
                <h3 className="mb-2 font-semibold text-primary">18+ Years of Excellence</h3>
                <p className="text-sm text-muted-foreground">Trusted by clients across Kenya since 2006</p>
              </div>
              <div className="bg-background p-6">
                <TrendingUp className="mb-3 h-6 w-6 text-secondary" />
                <h3 className="mb-2 font-semibold text-primary">Two Powerful Divisions</h3>
                <p className="text-sm text-muted-foreground">A considered blend of insurance protection and investment growth</p>
              </div>
              <div className="bg-background p-6">
                <Award className="mb-3 h-6 w-6 text-secondary" />
                <h3 className="mb-2 font-semibold text-primary">Award-Winning Performance</h3>
                <p className="text-sm text-muted-foreground">Multiple AKI Awards for outstanding service</p>
              </div>
              <div className="bg-background p-6">
                <Clock className="mb-3 h-6 w-6 text-secondary" />
                <h3 className="mb-2 font-semibold text-primary">Global Partnerships</h3>
                <p className="text-sm text-muted-foreground">Access to leading international investment platforms and insurers</p>
              </div>
            </div>
          </div>
        </section>

        {/* Partners */}
        <Partners />

        {/* CTA Section */}
        <section className="py-14 md:py-20 bg-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-balance text-secondary">Ready to Get Protected?</h2>
            <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto text-pretty">
              Get a free, no-obligation quote today and discover how we can help you protect and grow your wealth.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/quote">
                <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-primary font-semibold">
                  Get Your Free Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <a href="tel:+254791389518">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-primary bg-transparent"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Call Us Now
                </Button>
              </a>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
