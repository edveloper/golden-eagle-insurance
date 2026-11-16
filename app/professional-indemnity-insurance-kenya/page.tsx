import { CoverGuide } from "@/components/cover-guide"
import { buildPageMetadata } from "@/lib/seo"

const PATH = "/professional-indemnity-insurance-kenya"

export const metadata = buildPageMetadata({
  title: "Professional Indemnity Insurance in Kenya | Golden Eagle",
  description:
    "What professional indemnity insurance covers, who must carry it in Kenya, what drives the price and how much cover you need, from the AKI's first-placed agency.",
  path: PATH,
})

export default function ProfessionalIndemnityPage() {
  return (
    <CoverGuide
      path={PATH}
      serviceName="Professional Indemnity Insurance"
      hero={{
        eyebrow: "First in the AKI Professional Indemnity Category in 2018, 2019 and 2023",
        title: "Professional Indemnity Insurance in Kenya",
        subtitle:
          "When a client says your advice or work cost them money, this is the cover that pays for your defence and any compensation you owe.",
        image: "/images/cover-professional-indemnity.jpg",
        imageAlt: "A professional reviewing documents at a desk",
      }}
      answer="Professional indemnity insurance pays when a client claims that your advice or work caused them a financial loss. It covers your legal defence and any compensation you owe, up to the limit you choose. For advocates in Kenya it is a legal requirement, and for doctors, engineers, architects, accountants and consultants it is increasingly expected by clients and professional bodies. We compare terms from ten insurers and arrange the cover that fits your practice."
      sections={[
        {
          kind: "list",
          title: "What It Covers",
          items: [
            { title: "Negligence, Errors and Omissions", desc: "A client says your work or advice was wrong, incomplete or late, and that it cost them money." },
            { title: "Legal Defence Costs", desc: "Lawyers' fees and court costs to defend the claim, even when the claim turns out to be groundless." },
            { title: "Compensation and Settlements", desc: "Damages awarded against you, or agreed in a settlement, up to your policy limit." },
          ],
          note: "Policies differ, and some add cover for things like lost documents or defamation. The wording of your policy is what counts, and we go through it with you before you buy.",
        },
        {
          kind: "list",
          title: "What It Usually Doesn't Cover",
          items: [
            { title: "Dishonesty or Deliberate Wrongdoing", desc: "Fraud and intentional acts are excluded." },
            { title: "Claims You Already Knew About", desc: "A dispute that existed before the cover started is not covered by the new policy." },
            { title: "Injury and Property Damage", desc: "These belong to public liability insurance, which we can arrange alongside." },
            { title: "Promises Beyond Your Professional Duty", desc: "Guarantees in a contract that go further than the standard of care expected of your profession." },
          ],
        },
        {
          kind: "cards",
          title: "Who Needs It in Kenya",
          intro: "Anyone whose advice or work could cost a client money if it goes wrong. For some professions it is the law; for others, clients and tenders ask for it.",
          cards: [
            {
              title: "Advocates",
              desc: "Required. Advocates practising on their own account must carry professional indemnity cover of at least KES 1 million.",
              source: { label: "The Advocates (Professional Indemnity) Regulations", href: "https://new.kenyalaw.org/akn/ke/act/ln/2004/82/eng@2022-12-31" },
            },
            { title: "Doctors and Clinicians", desc: "Cover for doctors starts from KES 6,000 a year, with limits up to KES 100 million. The price depends on your specialty and the limit you choose." },
            { title: "Engineers and Architects", desc: "Clients and tenders often ask for proof of cover before a contract is signed, and design errors can be expensive to put right." },
            { title: "Accountants and Auditors", desc: "A missed filing or an audit that goes wrong can cost a client a great deal. Many firms carry cover as a condition of their engagements." },
            { title: "Consultants and Advisers", desc: "Management, IT, HR and financial consultants, where a client relies on your recommendation to make a decision." },
          ],
        },
        {
          kind: "list",
          title: "What Affects the Price",
          items: [
            { title: "Your Profession and Specialty", desc: "A surgeon pays more than a general practitioner; a structural engineer more than a draughtsman." },
            { title: "The Limit You Choose", desc: "The most the policy will pay for a claim, or for all claims in a year." },
            { title: "Your Fees or Turnover", desc: "A bigger practice usually means bigger clients and larger possible claims." },
            { title: "Your Claims History", desc: "Past claims, and how they were handled, are taken into account." },
          ],
        },
        {
          kind: "text",
          title: "How Much Cover Do You Need?",
          paragraphs: [
            "Start with what you are required to carry. A regulator, a professional body or a client contract may set a minimum, and that is your floor.",
            "Then think about the largest loss a mistake of yours could realistically cause a single client, and add the cost of defending the claim, which can be considerable even when you are in the right. If you work on large projects or advise on large sums, the limit should reflect that. We can show you quotes at two or three limits so you can see what the extra cover costs.",
          ],
        },
        {
          kind: "text",
          title: "If a Client Makes a Claim",
          paragraphs: [
            "Tell us, and your insurer, as soon as you hear of a complaint or a demand, even if you think it has no merit. Most professional indemnity policies cover claims made while the policy is in force, so late notice can put the cover at risk.",
            "Don't admit liability or offer a settlement before your insurer has agreed. Keep your records of the work, and let us handle the paperwork and the follow-up with the insurer.",
          ],
        },
      ]}
      faqs={[
        {
          q: "Is professional indemnity insurance mandatory in Kenya?",
          a: "For advocates, yes. The Advocates (Professional Indemnity) Regulations require advocates practising on their own account to carry at least KES 1 million of cover. For other professions it depends on your professional body and your clients, many of whom ask for it.",
        },
        {
          q: "How much does professional indemnity insurance cost in Kenya?",
          a: "It depends on your profession, the limit you choose, your fees and your claims history. Cover for doctors starts from KES 6,000 a year, with limits up to KES 100 million. Ask us for quotes at the limits you are considering.",
        },
        {
          q: "What is the difference between professional indemnity and public liability?",
          a: "Professional indemnity covers financial loss caused by your advice or work. Public liability covers injury to people and damage to their property, for example a visitor who slips in your office. Many professionals carry both.",
        },
        {
          q: "Am I covered for work I did before the policy started?",
          a: "Often, yes, as long as you didn't already know about the problem. This is called a retroactive date, and it varies between policies. We check it for you.",
        },
        {
          q: "What happens when I retire or close my practice?",
          a: "A claim can arrive years after the work was done. Run-off cover keeps you protected after you stop practising. Ask us about it before your last policy lapses.",
        },
      ]}
      quoteType="professional-indemnity"
      quoteLabel="Get a Professional Indemnity Quote"
      related={[
        { href: "/claims", label: "Making an Insurance Claim" },
        { href: "/cyber-insurance-kenya", label: "Cyber Insurance" },
        { href: "/products", label: "All Cover We Arrange" },
      ]}
    />
  )
}
