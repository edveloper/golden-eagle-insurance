"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, RotateCcw } from "lucide-react"

type Audience = "individual" | "business" | "both"
type Priority = "health" | "life" | "property" | "professional" | "travel" | "wealth"

const CATALOG: Record<string, { title: string; desc: string; href: string }> = {
  health: { title: "Health Insurance", desc: "Inpatient, outpatient, maternity, dental and optical cover.", href: "/products#health" },
  life: { title: "Life & Pension", desc: "Protect your family's future and plan for retirement.", href: "/products#life" },
  property: { title: "Property Insurance", desc: "Cover your home and belongings against fire, theft and more.", href: "/products#property" },
  professional: { title: "Professional Indemnity", desc: "Award-winning cover against professional negligence claims.", href: "/products#professional-indemnity" },
  business: { title: "Business Insurance", desc: "Protect your assets, employees and operations.", href: "/products#business" },
  cyber: { title: "Cyber Security", desc: "Cover for data breaches, ransomware and business interruption.", href: "/products#cyber-security" },
  travel: { title: "Travel Insurance", desc: "Medical emergencies, cancellations and lost luggage abroad.", href: "/products#travel" },
  advisory: { title: "Global Markets Advisory", desc: "Grow wealth through globally diversified portfolios.", href: "/advisory" },
}

const AUDIENCE_OPTIONS: { value: Audience; label: string; hint: string }[] = [
  { value: "individual", label: "Myself & family", hint: "Personal and household cover" },
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

function recommend(aud: Audience, pri: Priority): string[] {
  const set = new Set<string>()
  if (pri === "health") set.add("health")
  if (pri === "life") set.add("life")
  if (pri === "property") set.add("property")
  if (pri === "professional") set.add("professional")
  if (pri === "travel") set.add("travel")
  if (pri === "wealth") set.add("advisory")
  if (aud === "business" || aud === "both") {
    set.add("business")
    set.add("professional")
    set.add("cyber")
  }
  if (aud === "individual" || aud === "both") {
    set.add("health")
    set.add("life")
  }
  return Array.from(set).slice(0, 4)
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

  return (
    <div className="mx-auto max-w-3xl rounded-2xl border border-primary/10 bg-white p-6 shadow-[0_10px_30px_rgba(10,29,55,0.06)] md:p-10">
      {step !== 3 ? (
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-secondary">Step {step} of 2</p>
      ) : null}

      {step === 1 ? (
        <>
          <h3 className="mb-6 font-serif text-2xl font-bold text-primary">Who Are You Looking to Protect?</h3>
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
          <h3 className="mb-2 font-serif text-2xl font-bold text-primary">Cover Worth Considering</h3>
          <p className="mb-6 text-sm text-muted-foreground">
            Based on your answers. Our advisers can tailor this to your exact situation.
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
                    <ArrowRight className="h-4 w-4 text-secondary transition-transform group-hover:translate-x-1" />
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">{p.desc}</p>
                </Link>
              )
            })}
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link href="/quote">
              <Button className="rounded-md bg-secondary font-semibold text-primary hover:bg-secondary/90">
                Get a tailored quote <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
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
