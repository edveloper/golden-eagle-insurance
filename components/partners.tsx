import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { INSURERS } from "@/lib/site"

// Interim wordmark treatment. TODO: replace each name with the insurer's official brand-kit logo
// (<Image src=... />) once available; the grid layout stays the same.

export function Partners() {
  return (
    <section className="bg-muted py-14 md:py-20">
      <div className="container mx-auto px-4">
        <div className="mb-10 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-secondary">Insurers</p>
          <h2 className="mb-4 font-serif text-3xl font-bold text-primary text-balance md:text-4xl">
            Who We Place Your Cover With
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground text-pretty">
            Ten of Kenya&rsquo;s leading insurers for your cover, and Investors Trust for international investments.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-primary/10 bg-primary/10 sm:grid-cols-5">
          {INSURERS.map((name) => (
            <div key={name} className="flex items-center justify-center bg-background px-4 py-8 text-center">
              <span className="font-serif text-lg font-semibold tracking-wide text-primary/70">{name}</span>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-4 rounded-2xl border border-primary/10 bg-background p-6 text-center sm:flex-row sm:text-left">
          <span className="text-sm text-muted-foreground">See what clients say about us on Google.</span>
          <Link
            href="https://maps.app.goo.gl/7hgLi5YSYaAoDYou8"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
          >
            Read Our Google Reviews <ArrowRight className="h-4 w-4 text-secondary" />
          </Link>
        </div>
      </div>
    </section>
  )
}
