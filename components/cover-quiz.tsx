"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, RotateCcw } from "lucide-react"

type Audience = "individual" | "business" | "both"
type Priority = "health" | "life" | "property" | "professional" | "travel" | "wealth"

const CATALOG: Record<string, { title: string; desc: string; href: string; quoteType?: string }> = {
  health: { title: "Medical Insurance", desc: "Hospital stays, doctor's visits, maternity, dental and optical.", href: "/products#health", quoteType: "medical" },
  life: { title: "Life and Pension", desc: "Money for your family, and savings for retirement.", href: "/products#life", quoteType: "life" },
  property: { title: "Home and Property", desc: "Your house and its contents, against fire, theft and damage.", href: "/products#property", quoteType: "home" },
  professional: { title: "Professional Indemnity", desc: "Cover if a client says your work cost them money.", href: "/products#professional-indemnity", quoteType: "professional-indemnity" },
  business: { title: "Business Insurance", desc: "Public liability, staff medical and lost income.", href: "/products#business", quoteType: "business" },
  cyber: { title: "Cyber Insurance", desc: "The cost of a data breach or attack, and the income you lose.", href: "/products#cyber-security", quoteType: "cyber" },
  travel: { title: "Travel Insurance", desc: "Medical emergencies, cancellations and lost luggage abroad.", href: "/products#travel", quoteType: "travel" },
  advisory: { title: "Investment Advisory", desc: "Global portfolios, managed for you and explained clearly.", href: "/advisory" },
}

const AUDIENCE_OPTIONS: { value: Audience; label: string; hint: string }[] = [
  { value: "individual", label: "Me and my family", hint: "Personal and household cover" },
  { value: "business", label: "My business", hint: "Commercial and staff cover" },
  { value: "both", label: "Both", hint: "Personal and business" },
]

const PRIORITY_OPTIONS: { value: Priority; label: string }[] = [
  { value: "health", label: "Health & medical" },
  { value: "life", label: "Life & my family's future" },
  { value: "property", label: "Home & belongings" },
  { value: "professional", label: "My professional work" },
  { value: "travel", label: "Travel" },
  { value: "wealth", label: "Growing my wealth" },
]

const PRIORITY_PICK: Record<Priority, string> = {
  health: "health",
  life: "life",
  property: "property",
  professional: "professional",
  travel: "travel",
  wealth: "advisory",
}

// "both" interleaves personal and business cover so neither side is crowded out by the 4-item cap.
const AUDIENCE_PICKS: Record<Audience, string[]> = {
  individual: ["health", "life", "property"],
  business: ["business", "professional", "cyber"],
  both: ["health", "business", "life", "professional"],
}

function recommend(aud: Audience, pri: Priority): string[] {
  return Array.from(new Set([PRIORITY_PICK[pri], ...AUDIENCE_PICKS[aud]])).slice(0, 4)
}

export function CoverQuiz() {
  const [step, setStep] = useState<1 | 2 | 3>(1)
  const [audience, setAudience] = useState<Audience | null>(null)
  const [priority, setPriority] = useState<Priority | null>(null)

  const reset = () => {
    setStep(1)
    setAudience(null)
    setPriority(null)
  }

  const recs = audience && priority ? recommend(audience, priority) : []
  const firstQuoteType = recs.map((k) => CATALOG[k].quoteType).find(Boolean)
  const quoteHref = firstQuoteType ? `/quote?type=${firstQuoteType}` : "/quote"

  return (
    <div className="mx-auto max-w-3xl rounded-2xl border border-primary/10 bg-white p-6 shadow-[0_10px_30px_rgba(10,29,55,0.06)] md:p-10">
      {step !== 3 ? (
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-gold-ink">Step {step} of 2</p>
      ) : null}

      {step === 1 ? (
        <>
          <h3 className="mb-6 font-serif text-2xl font-bold text-primary">Who Do You Want to Cover?</h3>
          <div className="grid gap-3 sm:grid-cols-3">
            {AUDIENCE_OPTIONS.map((o) => (
              <button
                key={o.value}
                type="button"
                onClick={() => {
                  setAudience(o.value)
                  setStep(2)
                }}
                className="rounded-xl border border-primary/10 p-5 text-left transition-colors hover:border-secondary hover:bg-accent/5"
              >
                <div className="font-semibold text-primary">{o.label}</div>
                <div className="mt-1 text-sm text-muted-foreground">{o.hint}</div>
              </button>
            ))}
          </div>
        </>
      ) : null}

      {step === 2 ? (
        <>
          <h3 className="mb-6 font-serif text-2xl font-bold text-primary">What Matters Most Right Now?</h3>
          <div className="grid gap-3 sm:grid-cols-2">
            {PRIORITY_OPTIONS.map((o) => (
              <button
                key={o.value}
                type="button"
                onClick={() => {
                  setPriority(o.value)
                  setStep(3)
                }}
                className="rounded-xl border border-primary/10 p-4 text-left font-medium text-primary transition-colors hover:border-secondary hover:bg-accent/5"
              >
                {o.label}
              </button>
            ))}
          </div>
          <button
            type="button"
            onClick={() => setStep(1)}
            className="mt-6 text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            &larr; Back
          </button>
        </>
      ) : null}

      {step === 3 ? (
        <>
          <h3 className="mb-2 font-serif text-2xl font-bold text-primary">Cover to Look at First</h3>
          <p className="mb-6 text-sm text-muted-foreground">
            Based on your answers. We&rsquo;ll tailor it once we know more about you.
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            {recs.map((key) => {
              const p = CATALOG[key]
              return (
                <Link
                  key={key}
                  href={p.href}
                  className="group rounded-xl border border-primary/10 p-5 transition-colors hover:border-secondary"
                >
                  <div className="flex items-center gap-1.5 font-semibold text-primary">
                    {p.title}
                    <ArrowRight className="h-4 w-4 text-gold-ink transition-transform group-hover:translate-x-1" />
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">{p.desc}</p>
                </Link>
              )
            })}
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button className="rounded-md bg-secondary font-semibold text-primary hover:bg-secondary/90" asChild>
              <Link href={quoteHref}>
                Get a Quote <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <button
              type="button"
              onClick={reset}
              className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              <RotateCcw className="h-4 w-4" /> Start over
            </button>
          </div>
        </>
      ) : null}
    </div>
  )
}
