import Link from "next/link"
import { FileText, ShieldCheck, MessageSquare, ArrowRight } from "lucide-react"

const actions = [
  { href: "/quote", icon: FileText, title: "Get a Quote", desc: "Free, no-obligation cover quote" },
  { href: "/claims", icon: ShieldCheck, title: "File a Claim", desc: "Fast, supported claims assistance" },
  { href: "/contact", icon: MessageSquare, title: "Talk to an Adviser", desc: "Speak with our team" },
]

export function QuickActions() {
  return (
    <section className="border-b border-primary/10 bg-background">
      <div className="container mx-auto grid grid-cols-1 divide-y divide-primary/10 px-4 md:grid-cols-3 md:divide-x md:divide-y-0">
        {actions.map((a) => (
          <Link key={a.href} href={a.href} className="group flex items-center gap-4 py-6 md:px-8 md:py-8">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-accent/10">
              <a.icon className="h-5 w-5 text-secondary" />
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-1.5 font-semibold text-primary">
                {a.title}
                <ArrowRight className="h-4 w-4 text-secondary transition-transform group-hover:translate-x-1" />
              </div>
              <p className="text-sm text-muted-foreground">{a.desc}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
