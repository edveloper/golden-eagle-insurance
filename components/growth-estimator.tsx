"use client"

import { useEffect, useRef, useState } from "react"
import type { ReactNode } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const fmt = (n: number) => "KES " + Math.round(n).toLocaleString("en-US")

function Field({ label, value, children }: { label: string; value: string; children: ReactNode }) {
  return (
    <div>
      <div className="mb-2 flex items-baseline justify-between">
        <span className="text-sm font-medium text-primary">{label}</span>
        <span className="font-serif text-lg font-bold text-primary">{value}</span>
      </div>
      {children}
    </div>
  )
}

/** Eases a displayed number towards its target, so the totals glide rather than jump as sliders move. */
function useTweened(target: number, ms = 350) {
  const [value, setValue] = useState(target)
  const from = useRef(target)
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setValue(target)
      return
    }
    const start = performance.now()
    const begin = from.current
    let frame = 0
    const tick = (now: number) => {
      const t = Math.min((now - start) / ms, 1)
      const v = begin + (target - begin) * (1 - Math.pow(1 - t, 3))
      from.current = v
      setValue(v)
      if (t < 1) frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [target, ms])
  return value
}

export function GrowthEstimator() {
  const [monthly, setMonthly] = useState(20000)
  const [years, setYears] = useState(10)
  const [rate, setRate] = useState(10)

  const r = rate / 100 / 12
  const n = years * 12
  const projected = r === 0 ? monthly * n : monthly * ((Math.pow(1 + r, n) - 1) / r)
  const contributed = monthly * n
  const growth = Math.max(projected - contributed, 0)
  const growthShare = projected > 0 ? (growth / projected) * 100 : 0
  const shownProjected = useTweened(projected)
  const shownContributed = useTweened(contributed)
  const shownGrowth = useTweened(growth)

  return (
    <div className="grid items-start gap-8 lg:grid-cols-2">
      {/* Inputs */}
      <div className="space-y-8 rounded-2xl border border-primary/10 bg-white p-8">
        <Field label="Monthly contribution" value={fmt(monthly)}>
          <input
            type="range"
            min={5000}
            max={200000}
            step={5000}
            value={monthly}
            onChange={(e) => setMonthly(Number(e.target.value))}
            aria-label="Monthly contribution in Kenya shillings"
            className="w-full accent-secondary"
          />
        </Field>
        <Field label="Time horizon" value={`${years} years`}>
          <input
            type="range"
            min={1}
            max={30}
            step={1}
            value={years}
            onChange={(e) => setYears(Number(e.target.value))}
            aria-label="Time horizon in years"
            className="w-full accent-secondary"
          />
        </Field>
        <Field label="Assumed annual return" value={`${rate}%`}>
          <input
            type="range"
            min={4}
            max={15}
            step={0.5}
            value={rate}
            onChange={(e) => setRate(Number(e.target.value))}
            aria-label="Assumed annual return percentage"
            className="w-full accent-secondary"
          />
        </Field>
      </div>

      {/* Result */}
      <div className="rounded-2xl bg-primary p-8 text-white">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-ink">Estimated Value</p>
        <p className="mt-2 font-serif text-4xl font-bold text-gold-ink md:text-5xl">{fmt(shownProjected)}</p>
        <p className="mt-1 text-sm text-gray-300">after {years} years</p>

        <div className="mt-6 h-2 w-full overflow-hidden rounded-full bg-white/15">
          <div className="h-full rounded-full bg-secondary" style={{ width: `${growthShare}%`, transition: "width 350ms ease-out" }} />
        </div>
        <div className="mt-3 flex items-center justify-between text-sm">
          <span className="text-gray-300">
            You contribute <strong className="text-white">{fmt(shownContributed)}</strong>
          </span>
          <span className="text-gray-300">
            Growth <strong className="text-gold-ink">{fmt(shownGrowth)}</strong>
          </span>
        </div>

        <p className="mt-6 text-xs leading-relaxed text-gray-400">
          Illustrative only. Investment returns are not guaranteed, values can fall as well as rise, and you may get
          back less than you invest. Actual results depend on markets, charges, and your circumstances.
        </p>

        <Button className="mt-6 rounded-md bg-secondary font-semibold text-primary hover:bg-secondary/90" asChild>
          <Link href="/contact">
            Discuss your plan <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  )
}
