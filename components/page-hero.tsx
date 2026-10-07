import Image from "next/image"
import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

type PageHeroProps = {
  /**
   * "medium": navy-duotone photo band (About, Insurance).
   * "text": no photo, a clean title block on paper (functional pages: quote, contact, FAQ, claims, legal).
   * Home and Advisory build their own large heroes.
   */
  size?: "medium" | "text"
  /** Required for "medium". Path under /public; source recorded in docs/image-credits.md. */
  image?: string
  imageAlt?: string
  eyebrow?: string
  title: ReactNode
  subtitle?: ReactNode
  align?: "left" | "center"
  children?: ReactNode
}

export function PageHero({ size = "medium", image, imageAlt = "", eyebrow, title, subtitle, align = "left", children }: PageHeroProps) {
  const centered = align === "center"

  if (size === "text") {
    return (
      <section className="border-b border-primary/10 bg-paper">
        <div className="container mx-auto px-4 pb-10 pt-12 md:pb-14 md:pt-16">
          <div className={cn("anim-hero max-w-3xl", centered && "mx-auto text-center")}>
            {eyebrow ? (
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-gold-ink">{eyebrow}</p>
            ) : null}
            <h1 className="font-serif text-4xl text-balance text-primary md:text-5xl">{title}</h1>
            {subtitle ? (
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground text-pretty">{subtitle}</p>
            ) : null}
            {children}
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="relative overflow-hidden bg-primary text-white">
      {image ? (
        <Image
          src={image}
          alt={imageAlt}
          fill
          priority
          sizes="100vw"
          quality={70}
          className="parallax-img object-cover object-center [filter:grayscale(100%)_contrast(1.05)_brightness(0.8)]"
        />
      ) : null}
      <div className="absolute inset-0 bg-primary mix-blend-color" aria-hidden="true" />
      <div
        className="absolute inset-0 bg-[linear-gradient(100deg,rgba(7,20,39,0.95)_0%,rgba(8,23,45,0.85)_45%,rgba(8,23,45,0.5)_100%)]"
        aria-hidden="true"
      />
      <div className="container relative mx-auto px-4 py-14 md:py-20">
        <div className={cn("anim-hero max-w-3xl", centered && "mx-auto text-center")}>
          {eyebrow ? (
            <div
              className={cn(
                "mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-gold-ink",
                centered && "justify-center",
              )}
            >
              {eyebrow}
            </div>
          ) : null}
          <h1 className="mb-5 font-serif text-4xl text-balance text-white md:text-5xl">{title}</h1>
          {subtitle ? (
            <p className="max-w-2xl text-lg leading-relaxed text-gray-100 text-pretty">{subtitle}</p>
          ) : null}
          {children}
        </div>
      </div>
    </section>
  )
}
