"use client"

import { useEffect, useState } from "react"
import Script from "next/script"
import { usePathname, useSearchParams } from "next/navigation"
import { CONSENT_EVENT, CONSENT_KEY } from "@/components/cookie-consent"

const GA_MEASUREMENT_ID = "G-1KQ3655T5W"

type ConsentState = {
  analytics?: boolean
}

declare global {
  interface Window {
    dataLayer: unknown[]
    gtag?: (...args: unknown[]) => void
  }
}

function hasAnalyticsConsent(value: string | null) {
  if (!value) return false

  try {
    const parsed = JSON.parse(value) as ConsentState
    return Boolean(parsed.analytics)
  } catch {
    return false
  }
}

export function GoogleAnalytics() {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    const syncConsent = () => {
      setEnabled(hasAnalyticsConsent(window.localStorage.getItem(CONSENT_KEY)))
    }

    const handleConsentChange = () => syncConsent()

    syncConsent()
    window.addEventListener(CONSENT_EVENT, handleConsentChange)

    return () => window.removeEventListener(CONSENT_EVENT, handleConsentChange)
  }, [])

  useEffect(() => {
    if (!enabled || !window.gtag) return

    const query = searchParams.toString()
    const pagePath = query ? `${pathname}?${query}` : pathname
    window.gtag("config", GA_MEASUREMENT_ID, { page_path: pagePath })
  }, [enabled, pathname, searchParams])

  if (!enabled) return null

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = gtag;
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}', { send_page_view: false });
        `}
      </Script>
    </>
  )
}
