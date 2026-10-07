import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { PageHero } from "@/components/page-hero"
import { buildPageMetadata } from "@/lib/seo"
import { IMAGE_CREDITS, LICENSE_URLS } from "@/lib/image-credits"

export const metadata = buildPageMetadata({
  title: "Photo Credits | Golden Eagle Insurance Agency",
  description: "Sources and licences for the photographs used on the Golden Eagle Insurance Agency website.",
  path: "/credits",
})

export default function CreditsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="mode-functional flex-1">
        <PageHero
          size="text"
          eyebrow="Legal"
          title="Photo Credits"
          subtitle="The photographers whose work appears on this site, and the licences it's used under."
        />
        <section className="py-14 md:py-20">
          <div className="container mx-auto max-w-4xl px-4">
            <ul className="divide-y divide-primary/10 rounded-2xl bg-white shadow-[0_12px_32px_rgba(10,29,55,0.07)]">
              {IMAGE_CREDITS.map((c) => (
                <li key={c.file} className="grid gap-1 p-5 text-sm md:grid-cols-[1fr_auto] md:gap-6">
                  <div>
                    <a href={c.source} target="_blank" rel="noopener noreferrer" className="font-semibold text-primary underline hover:text-primary/80">
                      {c.title}
                    </a>
                    <p className="text-muted-foreground">
                      by {c.author}, via {c.license === "Pexels License" ? "Pexels" : "Wikimedia Commons"}. Used on: {c.usedOn}.
                    </p>
                  </div>
                  <a href={LICENSE_URLS[c.license]} target="_blank" rel="noopener noreferrer" className="self-start text-primary underline hover:text-primary/80">
                    {c.license}
                  </a>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-muted-foreground">
              Photos are resized and some are shown with a navy colour treatment. Adapted CC BY-SA images are shared
              under the same licence.
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
