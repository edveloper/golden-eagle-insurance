import Link from "next/link"
import Image from "next/image"
import { Instagram } from "lucide-react"
import { CookieSettingsButton } from "@/components/cookie-settings-button"
import { CONTACT_EMAIL, INSTAGRAM_URL, INSURERS, PHONE_DISPLAY, PHONE_TEL } from "@/lib/site"

export function SiteFooter() {
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr_1.1fr]">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-3">
              <Image src="/images/eagle-mark.png" alt="Golden Eagle" width={893} height={660} className="h-9 w-auto" />
              <div className="inline-flex flex-col">
                <span className="font-serif text-[1.4rem] uppercase leading-none tracking-[0.09em] text-white">Golden Eagle</span>
                <span className="mt-1.5 whitespace-nowrap border-t border-gold-ink/50 pt-1.5 text-[8.5px] font-semibold uppercase leading-none tracking-[0.3em] text-gold-ink">
                  Insurance &amp; Investments
                </span>
              </div>
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-gray-300">
              An IRA-licensed insurance agency and investment advisory in Nairobi, arranging cover for Kenyan
              families and businesses since 2006.
            </p>
            {/* Keep in sync with organizationSchema.sameAs in lib/seo.ts. */}
            <div className="mt-6 flex gap-5 text-gray-400">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Golden Eagle on Instagram"
                className="transition-colors hover:text-secondary"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Explore */}
          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-white/50">Explore</h4>
            <ul className="space-y-2.5 text-sm text-gray-300">
              <li><Link href="/about" className="transition-colors hover:text-secondary">About Us</Link></li>
              <li><Link href="/products" className="transition-colors hover:text-secondary">Insurance</Link></li>
              <li><Link href="/advisory" className="transition-colors hover:text-secondary">Investment Advisory</Link></li>
              <li><Link href="/faq" className="transition-colors hover:text-secondary">FAQ</Link></li>
              <li><Link href="/claims" className="transition-colors hover:text-secondary">Claims</Link></li>
            </ul>
          </div>

          {/* Cover */}
          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-white/50">Cover</h4>
            <ul className="space-y-2.5 text-sm text-gray-300">
              <li><Link href="/products#professional-indemnity" className="transition-colors hover:text-secondary">Professional Indemnity</Link></li>
              <li><Link href="/products#health" className="transition-colors hover:text-secondary">Medical</Link></li>
              <li><Link href="/products#life" className="transition-colors hover:text-secondary">Life</Link></li>
              <li><Link href="/products#property" className="transition-colors hover:text-secondary">Property</Link></li>
              <li><Link href="/products#business" className="transition-colors hover:text-secondary">Business</Link></li>
              <li><Link href="/products#travel" className="transition-colors hover:text-secondary">Travel</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-white/50">Contact</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-start gap-2.5">
                <span>Nairobi, Kenya. Meetings by appointment.</span>
              </li>
              <li className="flex items-center gap-2.5">
                <a href={`tel:${PHONE_TEL}`} className="transition-colors hover:text-secondary">{PHONE_DISPLAY}</a>
              </li>
              <li className="flex items-center gap-2.5">
                <a href={`mailto:${CONTACT_EMAIL}`} className="transition-colors hover:text-secondary">{CONTACT_EMAIL}</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Partner strip (credibility, borrowed from broker sites) */}
        <div className="mt-14 border-t border-white/10 pt-8">
          <p className="text-xs uppercase tracking-[0.16em] text-white/40">Insurer &amp; Platform Partners</p>
          <p className="mt-2 text-sm text-gray-400">
            {[...INSURERS, "Investors Trust"].join(" · ")}
          </p>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-gray-400 md:flex-row md:items-center md:justify-between">
          <p>&copy; {new Date().getFullYear()} Golden Eagle Insurance Agency Ltd. Licensed by the IRA (Reg. No. 11611).</p>
          <div className="flex flex-wrap gap-6">
            <Link href="/privacy-policy" className="transition-colors hover:text-secondary">Privacy Policy</Link>
            <Link href="/cookie-policy" className="transition-colors hover:text-secondary">Cookie Policy</Link>
            <Link href="/terms-of-use" className="transition-colors hover:text-secondary">Terms of Use</Link>
            <Link href="/credits" className="transition-colors hover:text-secondary">Photo Credits</Link>
            <CookieSettingsButton className="transition-colors hover:text-secondary" />
          </div>
        </div>

      </div>
    </footer>
  )
}
