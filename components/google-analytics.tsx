"use client"

import { useEffect, useState } from "react"
import Script from "next/script"
import { CONSENT_EVENT, CONSENT_KEY } from "@/components/cookie-consent"

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID

declare global {
  interface Window {
    dataLayer: unknown[]
    gtag?: (...args: unknown[]) => void
  }
}

function hasAnalyticsConsent() {
  try {
    const stored = window.localStorage.getItem(CONSENT_KEY)
    return stored ? JSON.parse(stored).analytics === true : false
  } catch {
    return false
  }
}

/**
 * Loads GA4 only after the visitor has accepted analytics cookies (Kenya DPA 2019).
 * Client-side navigations are counted by GA4's enhanced measurement
 * ("Page changes based on browser history events"), so no manual page_view calls are made.
 */
export function GoogleAnalytics() {
  const [allowed, setAllowed] = useState(false)

  useEffect(() => {
    setAllowed(hasAnalyticsConsent())
    const onConsent = () => setAllowed(hasAnalyticsConsent())
    window.addEventListener(CONSENT_EVENT, onConsent)
    return () => window.removeEventListener(CONSENT_EVENT, onConsent)
  }, [])

  if (!GA_MEASUREMENT_ID || !allowed) return null

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
          gtag('config', '${GA_MEASUREMENT_ID}');
        `}
      </Script>
    </>
  )
}
