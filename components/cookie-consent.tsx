"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

type ConsentState = {
  essential: true
  analytics: boolean
  marketing: boolean
  updatedAt: string
}

const CONSENT_KEY = "ge_cookie_consent_v1"

function getDefaultConsent(): ConsentState {
  return {
    essential: true,
    analytics: false,
    marketing: false,
    updatedAt: new Date().toISOString(),
  }
}

export function CookieConsent() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const existing = window.localStorage.getItem(CONSENT_KEY)
    if (!existing) {
      setVisible(true)
    }
  }, [])

  const saveConsent = (next: ConsentState) => {
    window.localStorage.setItem(CONSENT_KEY, JSON.stringify(next))
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="fixed inset-x-0 bottom-0 z-[60] border-t border-primary/10 bg-white/95 backdrop-blur">
      <div className="container mx-auto flex flex-col gap-4 px-4 py-4 md:flex-row md:items-center md:justify-between">
        <p className="text-sm text-muted-foreground md:max-w-3xl">
          We use essential cookies to run this site and optional analytics cookies to improve your experience.
          See our{" "}
          <Link href="/cookie-policy" className="text-primary underline hover:text-primary/80">
            Cookie Policy
          </Link>{" "}
          and{" "}
          <Link href="/privacy-policy" className="text-primary underline hover:text-primary/80">
            Privacy Policy
          </Link>
          .
        </p>
        <div className="flex flex-wrap gap-2">
          <Button
            variant="outline"
            className="border-primary/20 text-primary hover:bg-primary/5 bg-transparent"
            onClick={() => saveConsent({ ...getDefaultConsent(), analytics: false, marketing: false })}
          >
            Essential Only
          </Button>
          <Button
            className="bg-secondary text-primary hover:bg-secondary/90"
            onClick={() => saveConsent({ ...getDefaultConsent(), analytics: true, marketing: false })}
          >
            Accept Analytics
          </Button>
        </div>
      </div>
    </div>
  )
}

