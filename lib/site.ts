export const FOUNDED_YEAR = 2006

// Computed at build time; the next deploy after New Year picks up the new figure.
export const YEARS_IN_BUSINESS = new Date().getFullYear() - FOUNDED_YEAR

// Interim: the agency Gmail until @goldeneagleltd.org forwarding is live (see docs/email-setup.md).
// Then switch to "info@goldeneagleltd.org" and "claims@goldeneagleltd.org".
export const CONTACT_EMAIL = "goldeneagleinsagency@gmail.com"
export const CLAIMS_EMAIL = "goldeneagleinsagency@gmail.com"

export const INSTAGRAM_URL = "https://www.instagram.com/goldeneagleinsuranceagencyke/"

// Insurers the agency places cover with (confirmed by the client, Oct 2026). Copy says "ten"; update it if this changes.
export const INSURERS = [
  "ICEA Lion",
  "Britam",
  "Jubilee",
  "CIC",
  "AAR",
  "AIG",
  "Old Mutual",
  "Heritage",
  "Prudential",
  "NCBA",
]

export const PHONE_DISPLAY = "+254 791 389 518"
export const PHONE_TEL = "+254791389518"
// WhatsApp Business (client-confirmed).
export const WHATSAPP_NUMBER = "254791389518"
export const ADVISORY_PHONE_DISPLAY = "0725 162 240"
export const ADVISORY_PHONE_TEL = "+254725162240"

// Client-confirmed. No after-hours cover.
export const BUSINESS_HOURS = ["Monday to Friday: 8:00 AM to 5:00 PM", "Saturday: 9:00 AM to 1:00 PM", "Sunday: Closed"]
