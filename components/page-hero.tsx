import Image from "next/image"
import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

type PageHeroProps = {
  /**
   * Hero background image (path under /public).
   * NOTE: current images are Creative Commons placeholders (Wikimedia Commons);
   * replace with licensed or owned photography before launch.
   */
  image: string
  imageAlt: string
  eyebrow?: string
  title: ReactNode
  subtitle?: ReactNode
  align?: "left" | "center"
  children?: ReactNode
}

/**
 * Shared page hero: a single navy-duotone photographic treatment used across the
 * site so every page can carry its own image while staying visually consistent.
 */
export function PageHero({ image, imageAlt, eyebrow, title, subtitle, align = "left", children }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-primary text-white">
      <Image
        src={image}
        alt={imageAlt}
        fill
        priority
        sizes="100vw"
        quality={80}
        className="object-cover object-center [filter:grayscale(100%)_contrast(1.05)_brightness(0.8)]"
      />
      <div className="absolute inset-0 bg-primary mix-blend-color" aria-hidden="true" />
      <div
        className="absolute inset-0 bg-[linear-gradient(100deg,rgba(7,20,39,0.95)_0%,rgba(8,23,45,0.85)_45%,rgba(8,23,45,0.5)_100%)]"
        aria-hidden="true"
      />
      <div className="container relative mx-auto px-4 py-16 md:py-24">
        <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center")}>
          {eyebrow ? (
            <div
              className={cn(
                "mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-secondary",
                align === "center" && "justify-center",
              )}
            >
              <span className="h-px w-8 bg-secondary" aria-hidden="true" />
              {eyebrow}
            </div>
          ) : null}
          <h1 className="mb-6 font-serif text-4xl font-bold text-balance text-white md:text-5xl">{title}</h1>
          {subtitle ? (
            <p className="text-lg leading-relaxed text-gray-100 text-pretty md:text-xl">{subtitle}</p>
          ) : null}
          {children}
        </div>
      </div>
    </section>
  )
}
