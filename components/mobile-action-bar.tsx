"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { FileText, MessageCircle, Phone } from "lucide-react"
import { whatsappHref } from "@/components/whatsapp-button"
import { PHONE_TEL } from "@/lib/site"

/** Phone and tablet: the three things people come to do, always one tap away. */
export function MobileActionBar() {
  const pathname = usePathname()
  const item = "flex flex-1 flex-col items-center justify-center gap-1 py-2.5 text-[11px] font-semibold"

  return (
    <nav
      aria-label="Quick actions"
      className="fixed inset-x-0 bottom-0 z-40 flex border-t border-primary/10 bg-paper pb-[env(safe-area-inset-bottom)] shadow-[0_-6px_24px_rgba(10,29,55,0.08)] lg:hidden"
    >
      <a href={`tel:${PHONE_TEL}`} className={`${item} text-primary`}>
        <Phone className="h-5 w-5 text-gold-ink" />
        Call
      </a>
      <a href={whatsappHref(pathname)} target="_blank" rel="noopener noreferrer" className={`${item} text-primary`}>
        <MessageCircle className="h-5 w-5 text-[#1da851]" />
        WhatsApp
      </a>
      <Link href="/quote" className={`${item} bg-secondary text-primary`}>
        <FileText className="h-5 w-5" />
        Get a Quote
      </Link>
    </nav>
  )
}
