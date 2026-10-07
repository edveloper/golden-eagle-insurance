import { ADVISORY_PHONE_DISPLAY, CLAIMS_EMAIL, PHONE_DISPLAY } from "@/lib/site"

export type FaqCategory = { category: string; questions: { q: string; a: string }[] }

// Shared by the FAQ page and its FAQPage structured data. Answers are plain text (no markup).
export const FAQS: FaqCategory[] = [
  {
    category: "Working With Us",
    questions: [
      {
        q: "Are you an insurance company?",
        a: "No. We're an insurance agency, licensed by the Insurance Regulatory Authority (IRA Reg. No. 11611). We arrange cover with ten of Kenya's leading insurers, help you choose between them, and help you claim. The insurer is the company that pays out.",
      },
      {
        q: "What types of insurance do you arrange?",
        a: "Professional indemnity, medical, life and pension, home and property, business, cyber and travel insurance. We also advise on investments through Golden Eagle Global Markets Investment Advisory.",
      },
      {
        q: "How do I get a quote?",
        a: `Fill in our quote form, call ${PHONE_DISPLAY} or message us on WhatsApp. We'll compare insurers and send you a quote within one business day.`,
      },
      {
        q: "Can I meet you in person?",
        a: "Yes, by appointment. We don't have a walk-in office, so call or WhatsApp us and we'll arrange to meet.",
      },
      {
        q: "How do I pay my premium?",
        a: "You pay the insurer directly, usually by M-Pesa or bank transfer, and some policies let you pay in instalments. If you pay by cheque, we can bank it for you. We'll give you the exact payment details with your quote.",
      },
    ],
  },
  {
    category: "Professional Indemnity",
    questions: [
      {
        q: "Who needs professional indemnity insurance?",
        a: "Anyone whose advice or work could cost a client money if it goes wrong: doctors, lawyers, accountants, engineers, architects and consultants. Some professional bodies and clients require it.",
      },
      {
        q: "How much does doctors' indemnity cost?",
        a: "Cover for doctors starts from KES 6,000 a year, with limits up to KES 100 million. The price depends on your specialty and the limit you choose.",
      },
    ],
  },
  {
    category: "Medical Insurance",
    questions: [
      {
        q: "Which hospitals can I use?",
        a: "It depends on the insurer and plan you choose. Most plans include major Nairobi hospitals such as Aga Khan, Nairobi Hospital and MP Shah. We'll send you the current hospital list for any plan you're considering.",
      },
      {
        q: "Are pre-existing conditions covered?",
        a: "Often, after a waiting period, commonly 12 months. Some conditions may be excluded altogether. Tell us your medical history up front and we'll look for a plan that covers as much as possible.",
      },
      {
        q: "Can I add my family?",
        a: "Yes. Family plans cover you, your spouse and your children, and usually cost less than separate policies.",
      },
    ],
  },
  {
    category: "Life Insurance",
    questions: [
      {
        q: "What's the difference between term and whole life insurance?",
        a: "Term life covers you for a set period, such as 10 or 20 years, at a lower premium. Whole life covers you for the rest of your life and builds a cash value over time.",
      },
      {
        q: "How much life cover do I need?",
        a: "A common starting point is 10 to 12 times your annual income. The right amount depends on your dependants, debts and plans, and we'll help you work it out.",
      },
      {
        q: "Can I change my beneficiaries?",
        a: "Yes. Let us know in writing and we'll update it with the insurer. It's worth checking after a marriage, a divorce or the birth of a child.",
      },
    ],
  },
  {
    category: "Claims",
    questions: [
      {
        q: "How long does a claim take?",
        a: "It depends on the insurer and the type of claim. Straightforward medical claims can settle quickly; larger claims take longer, especially if documents are missing. We help you prepare the claim, follow it up with the insurer and keep you informed.",
      },
      {
        q: "What documents do I need?",
        a: "It depends on the claim. Usually: your policy details, the insurer's claim form, a police abstract for theft or break-ins, medical reports for health claims, and photos for property damage. We'll tell you exactly what's needed.",
      },
      {
        q: "How do I check on my claim?",
        a: `When you submit a claim on our website, you get a reference number. Call or WhatsApp us on ${PHONE_DISPLAY}, or email ${CLAIMS_EMAIL}, with that number for an update.`,
      },
    ],
  },
  {
    category: "Your Policy",
    questions: [
      {
        q: "How do I renew my policy?",
        a: "We'll contact you before your policy is due for renewal. You can renew by phone, WhatsApp or email. Renew before the expiry date so you're never without cover.",
      },
      {
        q: "Can I cancel my policy?",
        a: "Usually, yes. Depending on the insurer and how long the policy has run, you may get part of your premium back. Talk to us first and we'll explain what you'd get.",
      },
      {
        q: "What if I miss a premium payment?",
        a: "Most policies have a short grace period. If you still haven't paid when it ends, the policy can lapse and you won't be covered. If you're struggling to pay, call us early.",
      },
    ],
  },
  {
    category: "Investment Advisory",
    questions: [
      {
        q: "Are investment returns guaranteed?",
        a: "No. Investment values rise and fall, and you could get back less than you invest. Our long-term objective is set out on the Advisory page, together with the risks.",
      },
      {
        q: "Where are my investments held?",
        a: "On Investors Trust, an international investment platform regulated by the Cayman Islands Monetary Authority (CIMA).",
      },
      {
        q: "Who will I deal with?",
        a: `Lydia Wanjiku Mwangi, our founder and Lead Advisor. You can reach her on ${ADVISORY_PHONE_DISPLAY}.`,
      },
    ],
  },
]
