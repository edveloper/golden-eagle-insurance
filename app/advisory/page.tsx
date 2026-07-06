import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { buildPageMetadata } from "@/lib/seo"
import Link from "next/link"
import Image from "next/image"
import { GrowthEstimator } from "@/components/growth-estimator"
import {
  ArrowRight,
  Phone,
  Globe,
  LineChart,
  ShieldCheck,
  Building2,
  GraduationCap,
  Landmark,
  Compass,
  CheckCircle,
} from "lucide-react"

export const metadata = buildPageMetadata({
  title: "Global Markets Investment Advisory | Golden Eagle",
  description:
    "Golden Eagle Global Markets Investment Advisory builds and manages globally diversified investment portfolios for Kenyan investors. Disciplined, research-led wealth management through a regulated international platform.",
  path: "/advisory",
})

// Advisory (Lead Advisor) contact line, distinct from the general/insurance line.
const ADVISORY_PHONE_DISPLAY = "0725 162 240"
const ADVISORY_PHONE_TEL = "+254725162240"

export default function AdvisoryPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden bg-primary text-white">
          {/* Background photograph. TODO: replace with a licensed high-res Nairobi/office image.
              Placeholder: Nairobi City County Skyline by Antony Trivet, Wikimedia Commons, CC BY-SA 4.0. */}
          <Image
            src="/nairobi-cityscape-hero.jpg"
            alt="Nairobi cityscape"
            fill
            priority
            sizes="100vw"
            quality={80}
            className="object-cover object-center [filter:grayscale(100%)_contrast(1.05)_brightness(0.78)]"
          />
          <div className="absolute inset-0 bg-primary mix-blend-color" aria-hidden="true" />
          <div
            className="absolute inset-0 bg-[linear-gradient(100deg,rgba(7,20,39,0.95)_0%,rgba(8,23,45,0.85)_45%,rgba(8,23,45,0.5)_100%)]"
            aria-hidden="true"
          />

          <div className="container relative mx-auto px-4 py-20 md:py-28">
            <div className="max-w-3xl">
              <div className="mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-secondary">
                <span className="h-px w-8 bg-secondary" aria-hidden="true" />
                Global Markets Investment Advisory
              </div>
              <h1 className="mb-6 font-serif text-4xl font-bold text-balance text-white md:text-6xl">
                Preserve Capital. Compound Wealth. Invest Globally.
              </h1>
              <p className="mb-8 max-w-2xl text-lg leading-relaxed text-gray-100 text-pretty md:text-xl">
                We believe Kenyan investors deserve the same access to leading global markets as investors in New York,
                London, or Singapore. We build and manage globally diversified portfolios tailored to your objectives,
                risk appetite, and time horizon.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="bg-secondary font-semibold text-primary shadow-[0_12px_36px_rgba(197,161,0,0.3)] hover:bg-secondary/90"
                  >
                    Arrange a Consultation
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <a
                  href={`tel:${ADVISORY_PHONE_TEL}`}
                  className="inline-flex items-center gap-2 text-sm font-medium text-white/90 hover:text-white"
                >
                  <Phone className="h-4 w-4 text-secondary" />
                  Speak to the Lead Advisor: {ADVISORY_PHONE_DISPLAY}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Who we are: mission */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl text-center">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-secondary">Who We Are</p>
              <p className="font-serif text-2xl leading-relaxed text-primary text-balance md:text-3xl">
                An independent global markets investment advisory based in Westlands, Nairobi, committed to building
                long-term wealth through carefully researched, professionally managed portfolios.
              </p>
              <p className="mx-auto mt-6 max-w-2xl text-muted-foreground text-pretty">
                Golden Eagle Global Markets Investment Advisory is the investment advisory division of Golden Eagle
                Insurance Agency Ltd, helping individuals, families, and businesses invest with confidence and clarity.
              </p>
            </div>
          </div>
        </section>

        {/* What we do: our role */}
        <section className="bg-muted py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
              <div>
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-secondary">What We Do</p>
                <h2 className="mb-6 font-serif text-3xl font-bold text-primary text-balance md:text-4xl">
                  Your Adviser, Not Just Your Access
                </h2>
                <p className="mb-6 leading-relaxed text-muted-foreground">
                  Our role extends far beyond providing access to global markets. We research companies, identify
                  long-term opportunities, construct diversified portfolios, monitor changing market conditions, and
                  help you make informed decisions throughout your wealth-building journey.
                </p>
                <p className="leading-relaxed text-muted-foreground">
                  Every portfolio is built on a disciplined philosophy centred on quality, diversification, and prudent
                  risk management. Our education-first approach means you always understand what you own, why you own
                  it, and how it fits your broader financial objectives.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  { icon: Compass, t: "Research-Led", d: "We study markets, sectors, and companies before we commit capital." },
                  { icon: LineChart, t: "Portfolio Construction", d: "Diversified, benchmark-aware portfolios built around your goals." },
                  { icon: ShieldCheck, t: "Risk Management", d: "Position sizing and discipline designed to protect capital." },
                  { icon: Globe, t: "Education-First", d: "You understand every holding and the reasoning behind it." },
                ].map((item) => (
                  <div key={item.t} className="rounded-xl border border-primary/10 bg-white p-5">
                    <item.icon className="mb-3 h-6 w-6 text-secondary" />
                    <h3 className="mb-1 font-semibold text-primary">{item.t}</h3>
                    <p className="text-sm text-muted-foreground">{item.d}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Investment universe */}
        <section id="universe" className="scroll-mt-24 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-secondary">Our Investment Universe</p>
              <h2 className="mb-4 font-serif text-3xl font-bold text-primary text-balance md:text-4xl">
                Investment-Grade Assets From Markets Worldwide
              </h2>
              <p className="mx-auto max-w-2xl text-muted-foreground text-pretty">
                Access recognised stock exchanges across the United States, United Kingdom, Europe, and Asia. You are
                not restricted to a single domestic market.
              </p>
            </div>

            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-px overflow-hidden rounded-2xl border border-primary/10 bg-primary/10 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { t: "Equities", d: "Shares in quality companies on major global exchanges." },
                { t: "ETFs", d: "Low-cost, transparent exposure to markets and sectors." },
                { t: "REITs", d: "Income and diversification through global real estate." },
                { t: "Fixed Income", d: "Bonds for stability and capital preservation." },
                { t: "Managed Funds", d: "Professionally managed, diversified strategies." },
                { t: "Multi-Asset Portfolios", d: "Bespoke blends built around your mandate." },
              ].map((a) => (
                <div key={a.t} className="bg-white p-6">
                  <h3 className="mb-1 font-semibold text-primary">{a.t}</h3>
                  <p className="text-sm text-muted-foreground">{a.d}</p>
                </div>
              ))}
            </div>

            <p className="mx-auto mt-6 max-w-2xl text-center text-sm text-muted-foreground">
              Capital is allocated to sectors and companies offering the strongest long-term opportunities based on
              prevailing market conditions, valuation, competitive advantage, and structural growth trends, and it
              adapts as global markets evolve.
            </p>
          </div>
        </section>

        {/* The platform */}
        <section id="platform" className="scroll-mt-24 bg-muted py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              <div className="mb-10 text-center">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-secondary">The Platform</p>
                <h2 className="mb-4 font-serif text-3xl font-bold text-primary text-balance md:text-4xl">
                  Secure, Regulated Access to International Markets
                </h2>
              </div>

              <Card className="border-primary/10">
                <CardContent className="p-8">
                  <div className="mb-6 flex items-center gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-accent/10">
                      <Globe className="h-7 w-7 text-secondary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-primary">Investors Trust</h3>
                      <p className="text-sm text-muted-foreground">Cayman Islands</p>
                    </div>
                  </div>
                  <p className="leading-relaxed text-muted-foreground">
                    To provide clients with secure and efficient access to international markets, we partner with
                    Investors Trust, a life assurance and investment company regulated in the Cayman Islands. Through its
                    internationally recognised platform, clients benefit from regulatory stability, jurisdictional
                    diversification, and the flexibility to build bespoke global portfolios around their goals.
                  </p>
                  {/* TODO: confirm and reinstate the exact independent financial-strength rating (e.g. AM Best) before
                      publishing a specific rating figure. */}
                  <div className="mt-6 flex flex-wrap gap-3">
                    <span className="inline-flex items-center gap-2 rounded-full border border-primary/10 bg-white px-3 py-1.5 text-xs font-medium text-primary">
                      <ShieldCheck className="h-4 w-4 text-secondary" /> Regulated by CIMA
                    </span>
                    <span className="inline-flex items-center gap-2 rounded-full border border-primary/10 bg-white px-3 py-1.5 text-xs font-medium text-primary">
                      <Globe className="h-4 w-4 text-secondary" /> International platform
                    </span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Growth objective + prominent risk disclosure */}
        <section id="growth" className="scroll-mt-24 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              <div className="mb-8 text-center">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-secondary">Our Growth Objective</p>
                <h2 className="mb-4 font-serif text-3xl font-bold text-primary text-balance md:text-4xl">
                  Guided by Two Principles: Preserve Capital, Compound Wealth
                </h2>
              </div>

              <p className="mx-auto mb-6 max-w-3xl text-center leading-relaxed text-muted-foreground">
                The portfolios we construct are managed toward a long-term objective of compounding capital at a rate
                that, if sustained, would aim to double portfolio value in approximately five years. This objective
                shapes how we select investments, size positions, and manage risk.
              </p>

              {/* Prominent, adjacent risk disclosure (kept immediately beside the target figure). */}
              <div className="rounded-2xl border-2 border-secondary/40 bg-secondary/5 p-6 md:p-8">
                <p className="mb-2 text-sm font-bold uppercase tracking-[0.12em] text-primary">Important information</p>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  This is a long-term target that informs how we build and manage portfolios. It is{" "}
                  <strong className="text-primary">not a promise or guarantee of returns</strong>. Investment values
                  rise and fall, past performance does not indicate future results, currency movements can affect value,
                  and you may get back less than you invest. Any investment decision should be based on your own
                  circumstances and the full terms provided during a personalised suitability assessment.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Growth estimator */}
        <section id="estimator" className="scroll-mt-24 bg-muted py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              <div className="mb-10 text-center">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-secondary">Plan Your Growth</p>
                <h2 className="mb-4 font-serif text-3xl font-bold text-primary text-balance md:text-4xl">
                  Estimate What Disciplined Investing Could Build
                </h2>
                <p className="mx-auto max-w-2xl text-muted-foreground text-pretty">
                  Adjust the inputs to see how regular contributions can compound over time, then talk to us about a
                  strategy built around your goals.
                </p>
              </div>
              <GrowthEstimator />
            </div>
          </div>
        </section>

        {/* Experience through cycles */}
        <section className="bg-primary py-16 text-white md:py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-4 font-serif text-3xl font-bold text-secondary text-balance md:text-4xl">
                Tested Through Real Market Cycles
              </h2>
              <p className="leading-relaxed text-gray-200 text-pretty">
                We bring years of experience navigating international markets, including the 2020 COVID-19 crash, the
                2022 correction following Russia&rsquo;s invasion of Ukraine, and other periods of heightened
                volatility. Managing through these cycles has shaped a disciplined, risk-aware approach to every mandate
                we build today.
              </p>
            </div>
          </div>
        </section>

        {/* Planning around your goals */}
        <section id="goals" className="scroll-mt-24 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-secondary">Planning Around Your Goals</p>
              <h2 className="mb-4 font-serif text-3xl font-bold text-primary text-balance md:text-4xl">
                Investing With a Purpose
              </h2>
              <p className="mx-auto max-w-2xl text-muted-foreground text-pretty">
                Whether you are building long-term wealth, planning for retirement, or funding an education, we tailor
                strategy to the goal.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {[
                {
                  icon: GraduationCap,
                  img: "/education-funds-graduation-kenya.jpg",
                  t: "Education Funds",
                  d: "Dedicated plans that grow over time, designed so funds are available for school and university when needed.",
                },
                {
                  icon: Landmark,
                  img: "/retirement-planning-couple-kenya.jpg",
                  t: "Retirement Planning",
                  d: "Strategies aimed at building financial security and a comfortable, well-structured retirement.",
                },
                {
                  icon: Building2,
                  img: "/wealth-creation-financial-symbols-kenya.jpg",
                  t: "Wealth Creation",
                  d: "Disciplined, diversified investing and professional management tailored to your risk profile.",
                },
              ].map((g) => (
                <Card key={g.t} className="overflow-hidden border-primary/10 transition-all duration-300 hover:shadow-xl">
                  <div className="relative h-44 overflow-hidden">
                    <Image
                      src={g.img}
                      alt={g.t}
                      fill
                      sizes="(min-width: 768px) 33vw, 100vw"
                      quality={80}
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent" />
                  </div>
                  <CardContent className="p-6">
                    <g.icon className="mb-3 h-6 w-6 text-secondary" />
                    <h3 className="mb-2 font-serif text-xl font-bold text-primary">{g.t}</h3>
                    <p className="text-sm text-muted-foreground">{g.d}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why choose us */}
        <section className="bg-muted py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              <div className="mb-10 text-center">
                <h2 className="mb-4 font-serif text-3xl font-bold text-primary text-balance md:text-4xl">
                  Why Invest With Golden Eagle
                </h2>
                <p className="text-muted-foreground text-pretty">
                  Clients invest through platforms, but they choose advisers for trust and expertise.
                </p>
              </div>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {[
                  { t: "Independent & Aligned", d: "Independent advice focused on your objectives, not product sales." },
                  { t: "Global Reach, Local Partner", d: "Leading global markets, guided by an adviser you can meet in Nairobi." },
                  { t: "Disciplined Philosophy", d: "Quality, diversification, and prudent risk management on every mandate." },
                  { t: "Transparent & Educational", d: "Clear reasoning and reporting so you always know where you stand." },
                ].map((w) => (
                  <div key={w.t} className="flex gap-4">
                    <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-secondary" />
                    <div>
                      <h3 className="mb-1 font-semibold text-primary">{w.t}</h3>
                      <p className="text-sm text-muted-foreground">{w.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-primary py-16 text-white md:py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="mb-4 font-serif text-3xl font-bold text-secondary text-balance md:text-4xl">
              Start a Conversation About Your Portfolio
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-200 text-pretty">
              Arrange a confidential consultation with our Lead Advisor to explore a strategy built around your goals.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link href="/contact">
                <Button size="lg" className="bg-secondary font-semibold text-primary hover:bg-secondary/90">
                  Arrange a Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <a href={`tel:${ADVISORY_PHONE_TEL}`}>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white bg-transparent text-white hover:bg-white hover:text-primary"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  {ADVISORY_PHONE_DISPLAY}
                </Button>
              </a>
            </div>
          </div>
        </section>

        {/* Regulatory disclosure */}
        <section className="border-t border-primary/10 bg-background py-10">
          <div className="container mx-auto px-4">
            <p className="mx-auto max-w-4xl text-xs leading-relaxed text-muted-foreground">
              Golden Eagle Global Markets Investment Advisory is the investment advisory division of Golden Eagle
              Insurance Agency Ltd, licensed by the Insurance Regulatory Authority of Kenya (IRA Reg. No.{" "}
              <span className="font-medium">11611</span>). International investment solutions are
              facilitated through Investors Trust, regulated by the Cayman Islands Monetary Authority (CIMA), subject to
              applicable laws, regulations, and investment suitability requirements. Investing involves risk, including
              the possible loss of capital. The value of investments and any income from them can fall as well as rise,
              and past performance is not a reliable indicator of future results.
            </p>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
