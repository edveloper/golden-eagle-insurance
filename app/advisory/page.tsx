import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { buildPageMetadata } from "@/lib/seo"
import Link from "next/link"
import Image from "next/image"
import { GrowthEstimator } from "@/components/growth-estimator"
import { ArrowRight, Phone } from "lucide-react"

export const metadata = buildPageMetadata({
  title: "Global Markets Investment Advisory | Golden Eagle",
  description:
    "Golden Eagle Global Markets Investment Advisory builds and manages diversified portfolios of global shares, funds and bonds for Kenyan investors, held on Investors Trust. Led by Lydia Wanjiku Mwangi in Nairobi.",
  path: "/advisory",
})

// Advisory line: Lydia Wanjiku Mwangi, Lead Advisor. Distinct from the general/insurance line.
const ADVISORY_PHONE_DISPLAY = "0725 162 240"
const ADVISORY_PHONE_TEL = "+254725162240"

export default function AdvisoryPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <main className="theme-private flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden bg-primary text-white">
          <Image
            src="/images/hero-advisory-blue-hour.jpg"
            alt="Nairobi at blue hour"
            fill
            priority
            sizes="100vw"
            quality={80}
            className="parallax-img object-cover object-center [filter:grayscale(100%)_contrast(1.05)_brightness(0.78)]"
          />
          <div className="absolute inset-0 bg-primary mix-blend-color" aria-hidden="true" />
          <div
            className="absolute inset-0 bg-[linear-gradient(100deg,rgba(7,20,39,0.95)_0%,rgba(8,23,45,0.85)_45%,rgba(8,23,45,0.5)_100%)]"
            aria-hidden="true"
          />

          <div className="container relative mx-auto px-4 py-20 md:py-28">
            <div className="anim-hero max-w-3xl">
              <div className="mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-gold-ink">
                Golden Eagle Global Markets Investment Advisory
              </div>
              <h1 className="mb-6 font-serif text-4xl text-balance text-white md:text-6xl">
                Global Markets, Clearly Explained
              </h1>
              <p className="mb-8 max-w-2xl text-lg leading-relaxed text-gray-100 text-pretty md:text-xl">
                Portfolios of shares, funds and bonds from the US, UK, Europe and Asia, built around your goals.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Button
                  size="lg"
                  className="bg-secondary font-semibold text-primary shadow-[0_12px_36px_rgba(197,161,0,0.3)] hover:bg-secondary/90"
                  asChild
                >
                  <Link href="/contact">
                    Book a Consultation
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <a
                  href={`tel:${ADVISORY_PHONE_TEL}`}
                  className="inline-flex items-center gap-2 text-sm font-medium text-white/90 hover:text-white"
                >
                  <Phone className="h-4 w-4 text-gold-ink" />
                  Call Lydia, Lead Advisor: {ADVISORY_PHONE_DISPLAY}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Who we are + adviser */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl text-center">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-gold-ink">Who We Are</p>
              <p className="font-serif text-2xl leading-relaxed text-primary text-balance md:text-3xl">
                The investment arm of Golden Eagle Insurance Agency, based in Nairobi. We help Kenyan individuals,
                families and businesses invest beyond the local market, with a clear plan.
              </p>
            </div>
            <div className="reveal mx-auto mt-12 max-w-3xl border-l-2 border-secondary pl-6">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-ink">Your Adviser</p>
              <h2 className="mt-2 font-serif text-2xl font-bold text-primary">Lydia Wanjiku Mwangi, Lead Advisor</h2>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                Lydia founded Golden Eagle and leads the advisory. She has worked in insurance since 2003 and was
                previously a Global Markets Specialist at Dyer &amp; Blair. You deal with her directly, in person and by
                appointment.
              </p>
            </div>
          </div>
        </section>

        {/* What we do */}
        <section className="bg-muted py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
              <div>
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-gold-ink">What We Do</p>
                <h2 className="mb-6 font-serif text-3xl text-primary text-balance md:text-4xl">
                  What Your Adviser Does
                </h2>
                <p className="mb-6 leading-relaxed text-muted-foreground">
                  We research companies and markets, build a diversified portfolio around your goals, and adjust it as
                  conditions change.
                </p>
                <p className="leading-relaxed text-muted-foreground">
                  Before you invest, we explain what each holding is, why it&rsquo;s there and how it fits your plan.
                  After that, we keep you updated.
                </p>
              </div>

              <div className="reveal-stagger grid gap-4 sm:grid-cols-2">
                {[
                  { t: "Research", d: "We study markets, sectors and companies before investing." },
                  { t: "Portfolio Construction", d: "A spread of holdings, built around your goals." },
                  { t: "Risk Management", d: "Position sizes and diversification designed to protect capital." },
                  { t: "Plain Explanations", d: "Every holding, and the reason for it, explained before you invest." },
                ].map((item) => (
                  <div key={item.t} className="border-t-2 border-secondary bg-white p-5">
                    <h3 className="mb-1 font-serif text-xl text-primary">{item.t}</h3>
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
            <div className="mb-12 max-w-3xl">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-gold-ink">What You Can Invest In</p>
              <h2 className="mb-4 font-serif text-3xl text-primary text-balance md:text-4xl">
                Shares, Funds and Bonds From Markets Worldwide
              </h2>
              <p className="max-w-2xl text-muted-foreground text-pretty">
                Investments listed on recognised exchanges in the United States, United Kingdom, Europe and Asia.
              </p>
            </div>

            <div className="reveal-stagger grid grid-cols-1 gap-px overflow-hidden border border-primary/10 bg-primary/10 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { t: "Equities", d: "Shares in established companies on major exchanges." },
                { t: "ETFs", d: "Low-cost funds that track a market or sector." },
                { t: "REITs", d: "Income from property, through listed real estate funds." },
                { t: "Fixed Income", d: "Bonds, to add stability to a portfolio." },
                { t: "Managed Funds", d: "Diversified funds run by professional managers." },
                { t: "Multi-Asset Portfolios", d: "A blend of the above, built around your goals." },
              ].map((a) => (
                <div key={a.t} className="bg-white p-6">
                  <h3 className="mb-1 font-serif text-xl text-primary">{a.t}</h3>
                  <p className="text-sm text-muted-foreground">{a.d}</p>
                </div>
              ))}
            </div>

            <p className="mt-6 max-w-2xl text-sm text-muted-foreground">
              Where we invest changes with market conditions, valuations and long-term trends.
            </p>
          </div>
        </section>

        {/* The platform */}
        <section id="platform" className="scroll-mt-24 bg-primary py-16 text-white md:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              <div className="mb-10 text-center">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-gold-ink">The Platform</p>
                <h2 className="mb-4 font-serif text-3xl text-balance md:text-4xl">
                  Where Your Investments Are Held
                </h2>
              </div>

              <div className="border-l border-secondary/60 pl-8">
                  <div className="mb-6">
                    <h3 className="font-serif text-3xl">Investors Trust</h3>
                    <p className="mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-gold-ink">Cayman Islands</p>
                  </div>
                  <p className="leading-relaxed text-white/80">
                    Your investments are held on Investors Trust, a life assurance and investment company regulated by
                    the Cayman Islands Monetary Authority (CIMA). Its international platform gives you access to global
                    markets and keeps part of your savings outside a single jurisdiction.
                  </p>
                  {/* TODO: confirm and reinstate the exact independent financial-strength rating (e.g. AM Best) before
                      publishing a specific rating figure. */}
                  <div className="mt-6 flex flex-wrap gap-3">
                    <span className="rounded-full border border-secondary/50 px-3 py-1.5 text-xs font-medium text-white">
                      Regulated by CIMA
                    </span>
                    <span className="rounded-full border border-secondary/50 px-3 py-1.5 text-xs font-medium text-white">
                      International Platform
                    </span>
                  </div>
              </div>
            </div>
          </div>
        </section>

        {/* Growth objective + prominent risk disclosure. Wording agreed with the client; keep the disclosure adjacent. */}
        <section id="growth" className="scroll-mt-24 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              <div className="mb-8 text-center">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-gold-ink">Our Growth Objective</p>
                <h2 className="mb-4 font-serif text-3xl text-primary text-balance md:text-4xl">
                  Preserve Capital, Then Compound It
                </h2>
              </div>

              <p className="mx-auto mb-6 max-w-3xl text-center leading-relaxed text-muted-foreground">
                The portfolios we construct are managed toward a long-term objective of compounding capital at a rate
                that, if sustained, would aim to double portfolio value in approximately five years. This objective
                shapes how we select investments, size positions, and manage risk.
              </p>

              <div className="border-l-4 border-secondary bg-white p-6 shadow-[0_12px_32px_rgba(10,29,55,0.06)] md:p-8">
                <p className="mb-2 text-sm font-bold uppercase tracking-[0.12em] text-primary">Important Information</p>
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
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-gold-ink">Try the Numbers</p>
                <h2 className="mb-4 font-serif text-3xl text-primary text-balance md:text-4xl">
                  See How Regular Investing Can Compound
                </h2>
                <p className="mx-auto max-w-2xl text-muted-foreground text-pretty">
                  Move the sliders to see how monthly contributions could grow. It&rsquo;s an illustration, not a
                  forecast.
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
              <h2 className="mb-4 font-serif text-3xl text-gold-ink text-balance md:text-4xl">
                Experience Through Real Market Cycles
              </h2>
              <p className="leading-relaxed text-gray-200 text-pretty">
                We&rsquo;ve invested through the 2020 COVID-19 crash, the 2022 correction after Russia&rsquo;s invasion
                of Ukraine, and other volatile periods. That experience shapes how carefully we manage risk today.
              </p>
            </div>
          </div>
        </section>

        {/* Planning around your goals */}
        <section id="goals" className="scroll-mt-24 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mb-12 max-w-3xl">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-gold-ink">Planning Around Your Goals</p>
              <h2 className="mb-4 font-serif text-3xl text-primary text-balance md:text-4xl">
                Investing With a Purpose
              </h2>
              <p className="max-w-2xl text-muted-foreground text-pretty">
                Tell us what the money is for, and we&rsquo;ll build the plan around it.
              </p>
            </div>

            <div className="reveal-stagger grid grid-cols-1 gap-8 md:grid-cols-3">
              {[
                {
                  img: "/images/goal-education.jpg",
                  t: "Education Funds",
                  d: "Save steadily, so the fees are ready when school and university begin.",
                },
                {
                  img: "/images/goal-retirement-couple.jpg",
                  t: "Retirement Planning",
                  d: "Build savings that can fund the years after you stop working.",
                },
                {
                  img: "/images/goal-wealth-upper-hill.jpg",
                  t: "Wealth Creation",
                  d: "Grow long-term savings through a diversified, managed portfolio.",
                },
              ].map((g) => (
                <Card key={g.t} className="gap-0 overflow-hidden rounded-none border-0 bg-white py-0 shadow-none">
                  <div className="relative h-52 overflow-hidden">
                    <Image
                      src={g.img}
                      alt=""
                      fill
                      sizes="(min-width: 768px) 33vw, 100vw"
                      quality={80}
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent" />
                  </div>
                  <CardContent className="border-t-2 border-secondary p-6">
                    <h3 className="mb-2 font-serif text-2xl text-primary">{g.t}</h3>
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
                <h2 className="mb-4 font-serif text-3xl text-primary text-balance md:text-4xl">
                  Why Invest With Golden Eagle
                </h2>
                <p className="text-muted-foreground text-pretty">
                  The platform holds your investments. Your adviser is the person you deal with.
                </p>
              </div>
              <div className="reveal-stagger grid grid-cols-1 gap-6 md:grid-cols-2">
                {[
                  { t: "Your Goals First", d: "We start from what you're saving for, then choose the investments." },
                  { t: "Global Markets, Local Adviser", d: "Invest worldwide, with an adviser you meet in person in Nairobi." },
                  { t: "A Disciplined Approach", d: "Quality holdings, diversification and careful risk management." },
                  { t: "Clear Reporting", d: "Regular updates, with the reasoning written down." },
                ].map((w) => (
                  <div key={w.t} className="flex gap-4">
                    <span className="mt-[0.55rem] h-1.5 w-1.5 shrink-0 bg-secondary" aria-hidden="true" />
                    <div>
                      <h3 className="mb-1 font-serif text-xl text-primary">{w.t}</h3>
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
            <h2 className="mb-4 font-serif text-3xl text-gold-ink text-balance md:text-4xl">
              Talk to Lydia About Your Portfolio
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-200 text-pretty">
              Book a confidential consultation. We&rsquo;ll talk through your goals and how a global portfolio could fit
              them.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button size="lg" className="bg-secondary font-semibold text-primary hover:bg-secondary/90" asChild>
                <Link href="/contact">
                  Book a Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white bg-transparent text-white hover:bg-white hover:text-primary"
                asChild
              >
                <a href={`tel:${ADVISORY_PHONE_TEL}`}>
                  <Phone className="mr-2 h-5 w-5" />
                  {ADVISORY_PHONE_DISPLAY}
                </a>
              </Button>
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
