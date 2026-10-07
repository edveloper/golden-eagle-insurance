import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { buildPageMetadata } from "@/lib/seo"
import { cn } from "@/lib/utils"
import { CountUp } from "@/components/count-up"
import Link from "next/link"
import Image from "next/image"
import {
  ADVISORY_PHONE_DISPLAY,
  INSURERS,
  PHONE_DISPLAY,
  PHONE_TEL,
  WHATSAPP_NUMBER,
  YEARS_IN_BUSINESS,
} from "@/lib/site"
import { ArrowRight, ArrowUpRight, Phone } from "lucide-react"

export const metadata = buildPageMetadata({
  title: "Golden Eagle Insurance Agency | Insurance & Investment Advice in Nairobi",
  description:
    "IRA-licensed insurance agency in Nairobi, since 2006. Medical, life, professional indemnity, property, business and travel cover from Kenya's leading insurers, plus global investment advice.",
  path: "/",
})

const heroActions = [
  { href: "/quote", title: "Get a Quote", desc: "Compared across insurers, back within one business day" },
  { href: "/claims", title: "File a Claim", desc: "We help with the forms and follow up with the insurer" },
  {
    href: `https://wa.me/${WHATSAPP_NUMBER}`,
    title: "WhatsApp Us",
    desc: "Call, WhatsApp or email our team",
    external: true,
  },
]

const proof = [
  { value: `${YEARS_IN_BUSINESS}+`, label: "Years in Business" },
  { value: "3×", label: "AKI #1, Professional Indemnity" },
  { value: String(INSURERS.length), label: "Insurers We Work With" },
  { value: "Top 10", label: "AKI Agents Nationwide, 2024" },
]

// Professional indemnity leads as the award-winning speciality; business lines share the last row.
const cover: { title: string; href: string; img: string; wide?: boolean; pos?: string }[] = [
  { title: "Medical Insurance", href: "/products#health", img: "/images/cover-medical.jpg" },
  { title: "Life & Pension", href: "/products#life", img: "/images/cover-life-pension.jpg" },
  { title: "Home Insurance", href: "/products#property", img: "/images/cover-home-mombasa.jpg" },
  { title: "Travel Insurance", href: "/products#travel", img: "/images/cover-travel.jpg" },
  { title: "Business Insurance", href: "/products#business", img: "/images/cover-business-nairobi.jpg", wide: true, pos: "object-[center_22%]" },
  { title: "Cyber Insurance", href: "/products#cyber-security", img: "/images/cover-cyber.jpg", wide: true },
]

const moments = [
  { title: "School and University Fees", desc: "Start early, and the money is there when the admission letter arrives.", href: "/advisory#goals" },
  { title: "Your Home", desc: "Cover the house and what's in it against fire, theft and damage.", href: "/products#property" },
  { title: "Retirement", desc: "Build an income for the years after your last payslip.", href: "/advisory#goals" },
  { title: "Your Business", desc: "Insure the risks you carry, and invest what the business earns.", href: "/products#business" },
]

const reasons = [
  { title: "Ten Insurers, One Conversation", desc: "We compare cover across insurers, so you don’t have to call each one." },
  { title: "Help When You Claim", desc: "We help you prepare the claim and follow it up with the insurer." },
  { title: "Professional Indemnity Specialists", desc: "First in the AKI’s professional indemnity category in 2018, 2019 and 2023." },
  { title: "Cover and Investments Together", desc: "The team that insures your family can also help you invest for it." },
]

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <main className="flex-1">
        {/* 1 · Hero with actions (Large tier: navy duotone) */}
        <section className="relative overflow-hidden bg-primary text-white">
          <Image
            src="/images/hero-home-skyline.jpg"
            alt="Nairobi skyline with Times Tower"
            fill
            priority
            sizes="100vw"
            quality={70}
            className="parallax-img object-cover object-[70%_center] [filter:grayscale(100%)_contrast(1.05)_brightness(0.82)]"
          />
          <div className="absolute inset-0 bg-primary mix-blend-color" aria-hidden="true" />
          <div
            className="absolute inset-0 bg-[linear-gradient(100deg,rgba(7,20,39,0.95)_0%,rgba(8,23,45,0.82)_45%,rgba(8,23,45,0.4)_100%)]"
            aria-hidden="true"
          />

          <div className="container relative mx-auto px-4 pb-10 pt-16 md:pb-12 md:pt-24">
            <div className="anim-hero max-w-3xl">
              <p className="mb-6 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-gold-ink">
                Insurance Agency · Nairobi
              </p>
              <h1 className="font-serif text-[2.6rem] leading-[1.05] text-balance text-white md:text-6xl">
                The Right Cover, and Help When You Claim
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-100 text-pretty">
                Founded in 2006 and licensed by the IRA. Ranked first in the AKI&rsquo;s professional indemnity
                category in 2018, 2019 and 2023.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button size="lg" className="bg-secondary font-semibold text-primary hover:bg-secondary/90" asChild>
                  <Link href="/quote">
                    Get a Free Quote
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/50 bg-transparent text-white hover:bg-white hover:text-primary"
                  asChild
                >
                  <Link href="/contact">Talk to Us</Link>
                </Button>
              </div>
            </div>

            <div className="anim-late mt-14 grid grid-cols-1 border-t border-white/15 sm:grid-cols-3 md:mt-20">
              {heroActions.map((a) => (
                <Link
                  key={a.title}
                  href={a.href}
                  {...(a.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="group flex items-start gap-3 border-b border-white/10 py-5 sm:border-b-0 sm:border-r sm:pr-6 sm:last:border-r-0 sm:[&:not(:first-child)]:pl-6"
                >
                  <span>
                    <span className="flex items-center gap-1.5 font-semibold text-white">
                      {a.title}
                      <ArrowRight className="h-4 w-4 text-gold-ink transition-transform group-hover:translate-x-1" />
                    </span>
                    <span className="mt-0.5 block text-sm text-white/70">{a.desc}</span>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* 2 · Proof band */}
        <section className="border-b border-primary/10 bg-paper">
          <div className="container mx-auto px-4 py-12 md:py-14">
            <div className="reveal-stagger grid grid-cols-2 gap-x-6 gap-y-8 lg:grid-cols-4">
              {proof.map((p) => (
                <div key={p.label} className="border-t-2 border-primary pt-4">
                  <p className="font-serif text-5xl leading-none text-primary tabular-nums md:text-6xl">
                    <CountUp value={p.value} />
                  </p>
                  <p className="mt-3 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">{p.label}</p>
                </div>
              ))}
            </div>
            <div className="mt-10 flex items-center gap-6 border-t border-primary/10 pt-6">
              <span className="shrink-0 text-xs font-semibold uppercase tracking-[0.14em] text-primary">Insurers</span>
              <div className="marquee min-w-0 flex-1">
                <ul className="marquee-track">
                  {[...INSURERS, ...INSURERS].map((name, i) => (
                    <li
                      key={`${name}-${i}`}
                      aria-hidden={i >= INSURERS.length || undefined}
                      className={`${i >= INSURERS.length ? "marquee-dup " : ""}whitespace-nowrap pr-10 font-serif text-xl text-primary/70`}
                    >
                      {name}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 3 · Cover we arrange */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="reveal mb-10 flex flex-wrap items-end justify-between gap-4">
              <div className="max-w-2xl">
                <h2 className="font-serif text-4xl text-balance text-primary md:text-5xl">Cover We Arrange</h2>
                <p className="mt-3 text-lg text-muted-foreground">Pick a category to see what&rsquo;s included.</p>
              </div>
              <Link href="/products" className="inline-flex items-center gap-1.5 font-semibold text-primary hover:gap-2.5 transition-all">
                See All Cover <ArrowRight className="h-4 w-4 text-gold-ink" />
              </Link>
            </div>

            <div className="reveal-stagger grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-[repeat(3,minmax(13rem,auto))]">
              {/* Featured: professional indemnity */}
              <Link
                href="/products#professional-indemnity"
                className="group relative flex min-h-[22rem] flex-col justify-end overflow-hidden bg-primary p-7 text-white sm:col-span-2 lg:row-span-2"
              >
                <Image
                  src="/images/cover-professional-indemnity.jpg"
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  quality={80}
                  className="object-cover opacity-45 transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/70 to-primary/10" aria-hidden="true" />
                <div className="relative">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-ink">
                    AKI #1 · 2018, 2019, 2023
                  </p>
                  <h3 className="mt-3 font-serif text-4xl md:text-5xl">Professional Indemnity</h3>
                  <p className="mt-3 max-w-md text-white/80">
                    Cover if a client says your work cost them money. Doctors&rsquo; indemnity from KES 6,000 a year.
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-gold-ink">
                    What&rsquo;s Covered <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>

              {cover.map((c) => (
                <Link
                  key={c.title}
                  href={c.href}
                  className={cn(
                    "group relative flex min-h-[13rem] flex-col justify-end overflow-hidden p-5",
                    c.wide && "lg:col-span-2",
                  )}
                >
                  <Image
                    src={c.img}
                    alt=""
                    fill
                    sizes={c.wide ? "(min-width: 1024px) 50vw, 100vw" : "(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"}
                    quality={80}
                    className={cn("object-cover transition-transform duration-700 group-hover:scale-105", c.pos)}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent" aria-hidden="true" />
                  <h3 className="relative flex items-center justify-between gap-2 font-serif text-2xl text-white">
                    {c.title}
                    <ArrowUpRight className="h-5 w-5 shrink-0 text-gold-ink transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </h3>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* 4 · What are you planning for? */}
        <section className="bg-muted py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="reveal mb-10 max-w-2xl">
              <h2 className="font-serif text-4xl text-balance text-primary md:text-5xl">What Are You Planning For?</h2>
              <p className="mt-3 text-lg text-muted-foreground">Pick the one closest to home. We&rsquo;ll start there.</p>
            </div>
            <div className="reveal-stagger grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {moments.map((m) => (
                <Link key={m.title} href={m.href} className="group border-t border-primary/20 pt-5">
                  <h3 className="font-serif text-2xl text-primary">{m.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{m.desc}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                    Start Here <ArrowRight className="h-4 w-4 text-gold-ink transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* 5 · Advisory band (Private Office mode) */}
        <section className="theme-private bg-primary py-16 text-white md:py-24">
          <div className="container mx-auto px-4">
            <div className="reveal-stagger grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-center">
              <div>
                <p className="mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-gold-ink">
                  Golden Eagle Global Markets
                </p>
                <h2 className="font-serif text-4xl text-balance md:text-5xl">
                  Global Markets, With an Adviser Who Explains Them
                </h2>
                <p className="mt-5 max-w-xl leading-relaxed text-white/75">
                  Our advisory gives you shares, funds and bonds listed in the US, UK, Europe and Asia. We research the
                  markets, build a portfolio around your goals and manage it over time. Before you invest, we explain
                  what each holding is and why it&rsquo;s there.
                </p>
                <ul className="mt-7 space-y-3 text-sm text-white/85">
                  {[
                    "Portfolios spread across several countries and asset types",
                    "Held on Investors Trust, a platform regulated in the Cayman Islands",
                    "Regular reviews, with the reasoning written down",
                  ].map((t) => (
                    <li key={t} className="flex gap-3">
                      <span className="mt-[0.45rem] h-1.5 w-1.5 shrink-0 bg-secondary" aria-hidden="true" />
                      {t}
                    </li>
                  ))}
                </ul>
                <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3">
                  <Button className="bg-secondary font-semibold text-primary hover:bg-secondary/90" asChild>
                    <Link href="/advisory">
                      How the Advisory Works
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <span className="text-sm text-white/70">
                    Led by Lydia Wanjiku Mwangi, Lead Advisor · {ADVISORY_PHONE_DISPLAY}
                  </span>
                </div>
              </div>

              <figure className="border-l border-secondary/50 pl-8">
                <blockquote className="font-serif text-3xl leading-snug text-balance md:text-4xl">
                  &ldquo;Preserve capital, compound wealth, and invest only in businesses we understand and believe can
                  create long-term value.&rdquo;
                </blockquote>
                <figcaption className="mt-5 text-xs font-semibold uppercase tracking-[0.18em] text-gold-ink">
                  Our Investment Philosophy
                </figcaption>
              </figure>
            </div>
          </div>
        </section>

        {/* 6 · Why us + reviews */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="reveal-stagger grid gap-12 lg:grid-cols-[1.4fr_1fr]">
              <div>
                <h2 className="font-serif text-4xl text-balance text-primary md:text-5xl">What You Get From Us</h2>
                <dl className="mt-10 grid gap-x-10 gap-y-8 sm:grid-cols-2">
                  {reasons.map((r) => (
                    <div key={r.title}>
                      <dt className="font-serif text-2xl text-primary">{r.title}</dt>
                      <dd className="mt-2 text-sm leading-relaxed text-muted-foreground">{r.desc}</dd>
                    </div>
                  ))}
                </dl>
              </div>
              <aside className="self-start border-t-2 border-secondary bg-white p-8 shadow-[0_12px_32px_rgba(10,29,55,0.06)]">
                <p className="font-serif text-6xl leading-none text-secondary" aria-hidden="true">&ldquo;</p>
                <h3 className="mt-2 font-serif text-2xl text-primary">See What Clients Say</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Our clients review us on Google. Read what they say before you decide.
                </p>
                <Link
                  href="https://maps.app.goo.gl/7hgLi5YSYaAoDYou8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary/80"
                >
                  Read Our Google Reviews <ArrowUpRight className="h-4 w-4 text-gold-ink" />
                </Link>
              </aside>
            </div>
          </div>
        </section>

        {/* 7 · Closing call to action */}
        <section className="bg-primary py-16 text-white md:py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-serif text-4xl text-balance md:text-5xl">Tell Us What You Need Covered</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-200 text-pretty">
              The quote is free and you&rsquo;re under no obligation. We&rsquo;ll compare insurers and reply within one
              business day.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button size="lg" className="bg-secondary font-semibold text-primary hover:bg-secondary/90" asChild>
                <Link href="/quote">
                  Get a Free Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/60 bg-transparent text-white hover:bg-white hover:text-primary"
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
