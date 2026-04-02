import { Metadata } from "next"
import Image from "next/image"
import { Check, ArrowRight } from "lucide-react"
import { HeroSection } from "@/components/hero-section"
import { PricingCard } from "@/components/pricing-card"
import { ConsultationForm } from "@/components/consultation-form"
import { FAQSection } from "@/components/faq-section"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "Female Hair Transplant Cost Turkey 2026 | Prices & Packages",
  description: "Compare female hair transplant costs in Turkey for 2026. FUE from £2,200, DHI from £2,500. All-inclusive packages with accommodation, transfers, and aftercare. Save up to 70% vs UK/USA.",
  keywords: ["female hair transplant cost turkey", "fue hair transplant for women turkey", "DHI hair transplant cost", "hair transplant turkey price 2026"],
}

const pricingPackages = [
  {
    name: "FUE Elite",
    price: "£2,200",
    description: "Minimally invasive extraction for natural density",
    features: [
      "Up to 4,000 grafts",
      "Sapphire FUE technique",
      "Flexible graft planning",
      "3-night hotel stay",
      "Airport transfers",
      "12-month aftercare",
    ],
    popular: false,
  },
  {
    name: "All-Inclusive VIP",
    price: "£3,200",
    description: "Complete package with premium accommodation",
    features: [
      "Up to 4,500 grafts",
      "Choice of DHI or FUE",
      "5-star hotel (5 nights)",
      "VIP airport transfers",
      "Personal translator",
      "PRP treatment included",
      "12-month monitoring",
      "Priority scheduling",
    ],
    popular: true,
  },
  {
    name: "DHI Premium",
    price: "£2,500",
    description: "Advanced Choi pen implantation",
    features: [
      "Up to 3,000 grafts",
      "DHI Choi pen technique",
      "Minimal shaving required",
      "3-night hotel stay",
      "Airport transfers",
      "12-month aftercare",
    ],
    popular: false,
  },
]

const costComparison = [
  { country: "Turkey", fue: "£2,200 - £3,200", dhi: "£2,500 - £3,500", savings: "Base Price" },
  { country: "United Kingdom", fue: "£6,000 - £12,000", dhi: "£8,000 - £15,000", savings: "Save up to 70%" },
  { country: "United States", fue: "$8,000 - $15,000", dhi: "$10,000 - $20,000", savings: "Save up to 75%" },
  { country: "Germany", fue: "€5,000 - €10,000", dhi: "€7,000 - €12,000", savings: "Save up to 65%" },
]

const whatsIncluded = [
  "Pre-operative blood tests and analysis",
  "Consultation with specialist surgeon",
  "Hair transplant procedure",
  "Post-operative medications",
  "Aftercare kit with specialized products",
  "Hotel accommodation (3-5 nights)",
  "Airport-hotel-clinic transfers",
  "Personal patient coordinator",
  "12-month follow-up monitoring",
]

const faqs = [
  {
    question: "Why is hair transplant cheaper in Turkey?",
    answer: "Turkey offers significantly lower costs due to lower operating expenses, favorable exchange rates, and high competition among clinics. However, the quality of care matches or exceeds Western standards, with many surgeons trained internationally and clinics equipped with the latest technology.",
  },
  {
    question: "How many grafts will I need?",
    answer: "The number of grafts depends on your specific hair loss pattern and desired density. During your free consultation, our surgeons will assess your condition and provide a personalized treatment plan. Women typically need between 1,500 to 3,500 grafts for frontal hairline and density restoration.",
  },
  {
    question: "Are there any hidden costs?",
    answer: "No. Our all-inclusive packages cover everything from airport pickup to follow-up care. The price you see is the price you pay. We provide a detailed breakdown before you commit so there are no surprises.",
  },
  {
    question: "What payment options are available?",
    answer: "We accept bank transfers, credit/debit cards, and can arrange flexible payment plans. A deposit is required to secure your booking, with the balance due before the procedure.",
  },
  {
    question: "Is the cost per graft or per session?",
    answer: "Our packages are all-inclusive with unlimited grafts up to the specified maximum. This ensures you get the coverage you need without worrying about per-graft pricing which can lead to higher costs.",
  },
]

export default function CostPage() {
  return (
    <>
      <HeroSection
        badge="Transparent Pricing 2026"
        title="Female Hair Transplant Cost in Turkey"
        subtitle="World-class results at a fraction of UK and USA prices. Our all-inclusive packages cover everything you need for a successful hair restoration journey."
      />

      {/* Cost Comparison Section */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Compare Costs Worldwide
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              See how much you can save by choosing Turkey for your hair transplant procedure.
            </p>
          </div>
          <div className="mt-12 overflow-hidden rounded-lg border border-border">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-muted">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Country</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">FUE Cost</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">DHI Cost</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Your Savings</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border bg-card">
                  {costComparison.map((row, index) => (
                    <tr key={row.country} className={index === 0 ? "bg-primary/5" : ""}>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          {row.country}
                          {index === 0 && (
                            <Badge variant="default" className="text-xs">Best Value</Badge>
                          )}
                        </div>
                      </td>
                      <td className="px-6 py-4 font-medium">{row.fue}</td>
                      <td className="px-6 py-4 font-medium">{row.dhi}</td>
                      <td className="px-6 py-4">
                        <span className={index === 0 ? "text-primary font-semibold" : "text-muted-foreground"}>
                          {row.savings}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Packages */}
      <section className="bg-secondary py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              2026 All-Inclusive Packages
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              Everything you need for a successful hair transplant journey, all in one transparent price.
            </p>
          </div>
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {pricingPackages.map((pkg) => (
              <PricingCard key={pkg.name} {...pkg} />
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <span className="text-sm font-medium uppercase tracking-wider text-primary">
                All-Inclusive
              </span>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                What&apos;s Included in Your Package
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                No hidden fees, no surprises. Your package includes everything from the moment you land to your follow-up care.
              </p>
              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {whatsIncluded.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative aspect-video overflow-hidden rounded-2xl bg-muted lg:aspect-square">
              <Image
                src="/images/clinic-interior.jpg"
                alt="Modern hair transplant clinic interior"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Value Highlights */}
      <section className="bg-primary py-16 text-primary-foreground lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-4">
            {[
              { title: "Before & After Results", description: "View real patient transformations in our gallery" },
              { title: "Experienced Surgeons", description: "Board-certified specialists with 10+ years experience" },
              { title: "Advanced Techniques", description: "Latest DHI and Sapphire FUE technology" },
              { title: "Tourism Support", description: "Make your trip memorable with optional tours" },
            ].map((item) => (
              <div key={item.title} className="text-center">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-primary-foreground/80">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection
        title="Cost & Pricing FAQ"
        subtitle="Common questions about hair transplant costs in Turkey"
        faqs={faqs}
      />

      {/* Consultation Form */}
      <section className="bg-secondary py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Get Your Personalized Quote
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Every patient is unique. Fill out the form and our team will provide a detailed, personalized quote based on your specific needs and goals.
              </p>
              <ul className="mt-6 space-y-3">
                {["No obligation consultation", "Detailed cost breakdown", "Customized treatment plan", "Response within 24 hours"].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-primary" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <ConsultationForm
              title="Free Cost Consultation"
              description="Get a detailed quote tailored to your needs."
            />
          </div>
        </div>
      </section>
    </>
  )
}
