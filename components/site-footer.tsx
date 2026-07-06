import Link from "next/link"
import Image from "next/image"
import { Linkedin, Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr_1.1fr]">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-3">
              <Image src="/golden-eagle-logo.png" alt="Golden Eagle" width={44} height={44} className="h-11 w-11" />
              <div className="leading-tight">
                <span className="block font-serif text-xl font-bold text-secondary">Golden Eagle</span>
                <span className="text-[10px] uppercase tracking-[0.18em] text-white/50">Insurance &amp; Investments</span>
              </div>
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-gray-300">
              A Nairobi-based insurance agency and global markets investment advisory, helping Kenyan families and
              businesses protect and grow their wealth since 2006.
            </p>
            {/* TODO: replace platform homepages with Golden Eagle's real profile URLs (or remove any without an active profile). */}
            <div className="mt-6 flex gap-5 text-gray-400">
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="transition-colors hover:text-secondary">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="transition-colors hover:text-secondary">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="transition-colors hover:text-secondary">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://x.com" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)" className="transition-colors hover:text-secondary">
                <Twitter className="h-5 w-5" />
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
              <li><Link href="/products#health" className="transition-colors hover:text-secondary">Health</Link></li>
              <li><Link href="/products#life" className="transition-colors hover:text-secondary">Life</Link></li>
              <li><Link href="/products#property" className="transition-colors hover:text-secondary">Property</Link></li>
              <li><Link href="/products#business" className="transition-colors hover:text-secondary">Business</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-white/50">Contact</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-secondary" />
                <span>Maruti Court, East Church Road, Westlands, Nairobi</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 shrink-0 text-secondary" />
                <a href="tel:+254791389518" className="transition-colors hover:text-secondary">+254 791 389 518</a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 shrink-0 text-secondary" />
                <a href="mailto:info@goldeneagle.co.ke" className="transition-colors hover:text-secondary">info@goldeneagle.co.ke</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Partner strip (credibility, borrowed from broker sites) */}
        <div className="mt-14 border-t border-white/10 pt-8">
          <p className="text-xs uppercase tracking-[0.16em] text-white/40">Insurer &amp; platform partners</p>
          <p className="mt-2 text-sm text-gray-400">
            ICEA Lion · Britam · Jubilee · CIC · AAR · Old Mutual · Heritage · Prudential · NCBA · Investors Trust
          </p>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-gray-400 md:flex-row md:items-center md:justify-between">
          <p>&copy; {new Date().getFullYear()} Golden Eagle Insurance Agency Ltd. Licensed by the IRA (Reg. No. 11611).</p>
          <div className="flex flex-wrap gap-6">
            <Link href="/privacy-policy" className="transition-colors hover:text-secondary">Privacy Policy</Link>
            <Link href="/cookie-policy" className="transition-colors hover:text-secondary">Cookie Policy</Link>
            <Link href="/terms-of-use" className="transition-colors hover:text-secondary">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
