export const FOUNDED_YEAR = 2006

// Computed at build time; the next deploy after New Year picks up the new figure.
export const YEARS_IN_BUSINESS = new Date().getFullYear() - FOUNDED_YEAR

// Interim: the agency Gmail until @goldeneagleltd.org forwarding is live (see docs/email-setup.md).
// Then switch to "info@goldeneagleltd.org" and "claims@goldeneagleltd.org".
export const CONTACT_EMAIL = "goldeneagleinsagency@gmail.com"
export const CLAIMS_EMAIL = "goldeneagleinsagency@gmail.com"
