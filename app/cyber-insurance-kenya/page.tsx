import { CoverGuide } from "@/components/cover-guide"
import { buildPageMetadata } from "@/lib/seo"

const PATH = "/cyber-insurance-kenya"

export const metadata = buildPageMetadata({
  title: "Cyber Insurance in Kenya | Golden Eagle Insurance Agency",
  description:
    "What cyber insurance pays for after a data breach or ransomware attack, why Kenya's Data Protection Act makes it a real question, and what affects the price.",
  path: PATH,
})

export default function CyberInsurancePage() {
  return (
    <CoverGuide
      path={PATH}
      serviceName="Cyber Insurance"
      hero={{
        eyebrow: "Cover for Businesses",
        title: "Cyber Insurance in Kenya",
        subtitle:
          "For businesses that hold customer data or depend on their systems. It pays for dealing with a breach or attack, and for the income lost while you recover.",
        image: "/images/cover-cyber.jpg",
        imageAlt: "A laptop screen showing lines of code",
      }}
      answer="Cyber insurance pays for what a data breach or cyber attack costs a business. That means investigating what happened, notifying the people affected, restoring data and systems, and the income lost while the business is down. In Kenya, the Data Protection Act makes any business that holds personal data answerable when that data leaks, which is why the question now comes up for clinics, schools, SACCOs and online shops as much as for large companies."
      sections={[
        {
          kind: "list",
          title: "What It Covers",
          items: [
            { title: "Data Breaches", desc: "Investigating the breach, notifying customers and restoring data." },
            { title: "Business Interruption", desc: "Income lost while your systems are down." },
            { title: "Ransomware and Extortion", desc: "Costs from ransomware attacks, where the policy includes them." },
            { title: "Specialist Help During an Attack", desc: "Many policies include access to IT and legal specialists when it happens." },
            { title: "Claims From Third Parties", desc: "Customers or partners who say your breach exposed their information." },
          ],
          note: "Cover varies a lot between insurers, especially for ransomware and for money stolen through fake payment instructions. We compare the wording, not just the price.",
        },
        {
          kind: "list",
          title: "What It Usually Doesn't Cover",
          items: [
            { title: "Problems You Already Knew About", desc: "A breach or weakness discovered before the cover started." },
            { title: "Upgrading Your Systems", desc: "Improving your security after an attack is your own cost, though the policy pays to restore what you had." },
            { title: "Physical Damage to Equipment", desc: "That belongs to your property or business cover." },
          ],
        },
        {
          kind: "text",
          title: "The Data Protection Act and Your Business",
          paragraphs: [
            "The Data Protection Act, 2019 applies to any business that collects personal information about customers, patients, students, members or staff. The Office of the Data Protection Commissioner can investigate a breach and issue fines of up to KES 5 million under section 63. Its first penalty, in December 2022, was for the full KES 5 million.",
            "Whether a policy pays regulatory fines depends on its wording and on the law, so ask before you rely on it. What cyber insurance reliably pays for is the work a breach creates, from finding out what happened to getting the business running again.",
          ],
        },
        {
          kind: "cards",
          title: "Who Should Consider It",
          cards: [
            { title: "Clinics and Pharmacies", desc: "Patient records are among the most sensitive data a business can hold." },
            { title: "Schools and Colleges", desc: "Student and parent records, fee payments and online learning systems." },
            { title: "SACCOs and Microfinance", desc: "Member data and payments, where a breach damages trust quickly." },
            { title: "Online Shops", desc: "Customer details and payments, with sales that stop when the site does." },
            { title: "Professional Firms", desc: "Law, accounting and consulting firms holding client files and confidential documents." },
          ],
        },
        {
          kind: "list",
          title: "What Affects the Price",
          items: [
            { title: "Your Turnover and Sector", desc: "Larger businesses and sectors that hold sensitive data pay more." },
            { title: "How Many Records You Hold", desc: "The more personal data, the bigger a breach can be." },
            { title: "Your Security Measures", desc: "Offline backups, two-step login and staff training can lower the premium." },
            { title: "Past Incidents", desc: "Previous breaches and how they were handled." },
          ],
        },
      ]}
      faqs={[
        {
          q: "Is cyber insurance mandatory in Kenya?",
          a: "No law requires businesses in general to carry it. The Data Protection Act does make you responsible for protecting personal data, and some clients and partners now ask for proof of cyber cover before working with you.",
        },
        {
          q: "Does cyber insurance cover M-Pesa or bank transfer fraud?",
          a: "Sometimes. Money lost through fake payment instructions is often an optional extra rather than standard cover. Tell us how your business pays and gets paid and we'll find policies that include it.",
        },
        {
          q: "How much does cyber insurance cost in Kenya?",
          a: "It depends on your turnover, your sector, how much personal data you hold and the security you have in place. Ask us for quotes and we'll compare several insurers' terms side by side.",
        },
        {
          q: "We're a small business. Are we really a target?",
          a: "Most attacks aren't aimed at a particular business. They look for any system that is easy to get into, and small businesses often have the least protection.",
        },
      ]}
      quoteType="cyber"
      quoteLabel="Get a Cyber Insurance Quote"
      related={[
        { href: "/professional-indemnity-insurance-kenya", label: "Professional Indemnity" },
        { href: "/claims", label: "Making an Insurance Claim" },
        { href: "/products", label: "All Cover We Arrange" },
      ]}
    />
  )
}
