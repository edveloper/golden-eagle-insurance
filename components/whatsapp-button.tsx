"use client"

import { MessageCircle } from "lucide-react"
import { usePathname } from "next/navigation"
import { WHATSAPP_NUMBER } from "@/lib/site"

const PREFILL_BY_PATH: Record<string, string> = {
  "/products": "Hello Golden Eagle, I'd like a quote for insurance.",
  "/quote": "Hello Golden Eagle, I'd like a quote for insurance.",
  "/claims": "Hello Golden Eagle, I need help with a claim.",
  "/advisory": "Hello Golden Eagle, I'd like to talk about investing.",
}
const DEFAULT_PREFILL = "Hello Golden Eagle, I have a question."

export function WhatsAppButton() {
  const pathname = usePathname()
  const prefill = PREFILL_BY_PATH[pathname] ?? DEFAULT_PREFILL
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(prefill)}`

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-5 right-5 z-40 flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(0,0,0,0.25)] transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2"
    >
      <MessageCircle className="h-5 w-5" />
      <span className="hidden sm:inline">Chat With Us</span>
    </a>
  )
}
