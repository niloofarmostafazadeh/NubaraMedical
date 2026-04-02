import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Check, Zap, Shield, Target, Layers, ArrowRight } from "lucide-react"
import { HeroSection } from "@/components/hero-section"
import { CTAButtons } from "@/components/cta-buttons"
import { ConsultationForm } from "@/components/consultation-form"
import { FAQSection } from "@/components/faq-section"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "FUE Hair Transplant for Women Turkey | Sapphire FUE Technique",
  description: "FUE hair transplant for women in Turkey. Minimally invasive extraction with Sapphire blades for natural density. Expert clinics, flexible graft planning, and trusted outcomes.",
  keywords: ["fue hair transplant for women", "female hair transplant turkey fue method", "female hairline restoration turkey", "sapphire fue"],
}

const benefits = [
  {
    icon: Zap,
    title: "Minimally Invasive",
    description: "Individual follicles are extracted using tiny micro-punches, leaving virtually no visible scarring and allowing for quick healing.",
  },
  {
    icon: Layers,
    title: "Flexible Graft Planning",
    description: "FUE allows for extracting the optimal grafts from across the donor area, maximizing the quality and quantity available for transplantation.",
  },
  {
    icon: Target,
    title: "Natural Density",
    description: "Our surgeons expertly place grafts to achieve natural-looking density, carefully considering your hair's natural growth pattern.",
  },
  {
    icon: Shield,
    title: "No Linear Scarring",
    description: "Unlike older strip methods, FUE leaves no linear scar. You can wear your hair short without visible marks.",
  },
]

const procedure = [
  {
    step: "1",
    title: "Preparation",
    description: "The donor area is trimmed and prepared. Local anesthesia ensures a completely pain-free experience.",
  },
  {
    step: "2",
    title: "Extraction",
    description: "Using precision micro-punches (0.6-0.8mm), individual follicular units are carefully extracted one by one.",
  },
  {
    step: "3",
    title: "Channel Creation",
    description: "Sapphire blades create tiny channels in the recipient area, allowing precise control over angle and density.",
  },
  {
    step: "4",
    title: "Implantation",
    description: "Extracted grafts are carefully placed into the channels, following your natural hair growth direction.",
  },
]

const dhiVsFue = [
  { aspect: "Technique", fue: "Separate extraction and implantation", dhi: "Simultaneous implantation with Choi pen" },
  { aspect: "Shaving", fue: "Donor area typically shaved", dhi: "Minimal to no shaving possible" },
  { aspect: "Session Size", fue: "Larger sessions possible (4000+ grafts)", dhi: "Usually up to 3000 grafts" },
  { aspect: "Best For", fue: "Crown, larger areas, high density", dhi: "Hairline, no-shave requirements" },
  { aspect: "Price", fue: "From £2,200", dhi: "From £2,500" },
]

const faqs = [
  {
    question: "How is FUE different from DHI?",
    answer: "FUE (Follicular Unit Extraction) extracts follicles individually, then creates channels and implants separately. DHI uses a Choi pen to implant directly. FUE allows for larger sessions and is typically better for crown work, while DHI offers more precision for hairlines with less shaving required.",
  },
  {
    question: "What is the recovery time for FUE?",
    answer: "Most patients return to work within 7-10 days. The tiny extraction points heal within 10-14 days. We provide detailed aftercare instructions and your personal coordinator will guide you through recovery.",
  },
  {
    question: "How many grafts can be done in one FUE session?",
    answer: "FUE allows for larger sessions, typically 3,000-5,000 grafts in a single procedure. The exact number depends on your donor area density and recipient area needs, determined during your consultation.",
  },
  {
    question: "Will FUE work for female pattern hair loss?",
    answer: "Yes, FUE is highly effective for female pattern hair loss, which typically presents as diffuse thinning rather than complete baldness. Our surgeons specialize in addressing the unique patterns of female hair loss.",
  },
  {
    question: "What is Sapphire FUE?",
    answer: "Sapphire FUE uses blades made from sapphire crystal instead of steel for creating recipient channels. This results in smaller incisions, faster healing, less trauma, and the ability to achieve higher density with natural-looking results.",
  },
  {
    question: "How long until I see final results?",
    answer: "Transplanted hair begins growing around 3-4 months post-procedure. You'll see significant progress by 6-8 months, with final results at 12-14 months when hair reaches full length and thickness.",
  },
]

export default function FUEPage() {
  return (
    <>
      <HeroSection
        badge="FUE Technique"
        title="FUE Hair Transplant for Women"
        subtitle="Minimally invasive follicular unit extraction for natural density. Ideal for larger coverage areas with flexible graft planning."
      />

      {/* What is FUE */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <span className="text-sm font-medium uppercase tracking-wider text-primary">
                Modern Excellence
              </span>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                What is FUE Hair Transplant?
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Follicular Unit Extraction (FUE) is a state-of-the-art hair transplant technique where individual hair follicles are extracted directly from the donor area using precision micro-punches.
              </p>
              <p className="mt-4 text-muted-foreground">
                Unlike older strip methods, FUE leaves no linear scar and offers a faster recovery. Our clinics use advanced Sapphire FUE technology for even smaller incisions and better results. This technique is particularly effective for women needing larger coverage or higher density.
              </p>
              <div className="mt-8">
                <CTAButtons />
              </div>
            </div>
            <div className="relative aspect-square overflow-hidden rounded-2xl bg-muted lg:aspect-auto lg:h-[500px]">
              <Image
                src="/images/fue-technique.jpg"
                alt="FUE hair transplant procedure"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-secondary py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Benefits of FUE for Women
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              FUE offers numerous advantages for female patients seeking natural-looking hair restoration.
            </p>
          </div>
          <div className="mt-16 grid gap-8 md:grid-cols-2">
            {benefits.map((benefit) => (
              <Card key={benefit.title} className="border-0 bg-card">
                <CardHeader>
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <benefit.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="mt-4">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {benefit.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Procedure Steps */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="text-sm font-medium uppercase tracking-wider text-primary">
              The Procedure
            </span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              How FUE Works
            </h2>
          </div>
          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {procedure.map((step) => (
              <div key={step.step} className="text-center">
                <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground">
                  {step.step}
                </span>
                <h3 className="mt-4 text-lg font-semibold text-foreground">{step.title}</h3>
                <p className="mt-2 text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FUE vs DHI Comparison */}
      <section className="bg-card py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              FUE vs DHI: Which is Right for You?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              Both techniques offer excellent results. The best choice depends on your specific needs.
            </p>
          </div>
          <div className="mt-12 overflow-hidden rounded-lg border border-border">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-muted">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Aspect</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">
                      <span className="flex items-center gap-2">
                        FUE <Badge variant="outline" className="text-xs">More Flexible</Badge>
                      </span>
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">DHI</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border bg-background">
                  {dhiVsFue.map((row) => (
                    <tr key={row.aspect}>
                      <td className="px-6 py-4 font-medium">{row.aspect}</td>
                      <td className="px-6 py-4 text-muted-foreground">{row.fue}</td>
                      <td className="px-6 py-4 text-muted-foreground">{row.dhi}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p className="text-muted-foreground">
              Not sure which technique is best for you?{" "}
              <Link href="/contact-nubaramedical" className="text-primary hover:underline">
                Book a free consultation
              </Link>{" "}
              and our experts will recommend the optimal approach.
            </p>
          </div>
        </div>
      </section>

      {/* Cost & Clinics */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <Badge className="w-fit">Pricing</Badge>
                <CardTitle className="mt-4">FUE Cost in Turkey</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-foreground">From £2,200</p>
                <p className="mt-2 text-muted-foreground">
                  All-inclusive Sapphire FUE packages with accommodation, transfers, and 12-month aftercare. Save up to 70% compared to UK prices.
                </p>
                <Link
                  href="/female-hair-transplant-cost-turkey"
                  className="mt-4 inline-flex items-center gap-2 text-primary hover:underline"
                >
                  View full pricing
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Badge className="w-fit">Expert Clinics</Badge>
                <CardTitle className="mt-4">Trusted FUE Clinics</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Our partner clinics feature internationally trained surgeons using the latest Sapphire FUE technology for optimal results.
                </p>
                <Link
                  href="/best-hair-transplant-clinic-in-turkey"
                  className="mt-4 inline-flex items-center gap-2 text-primary hover:underline"
                >
                  View our partner clinics
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Results Preview */}
      <section className="bg-primary py-16 text-primary-foreground lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              See Real FUE Results
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-foreground/80">
              Browse our gallery of before and after photos from real female FUE patients.
            </p>
            <Link
              href="/female-hair-transplant-results"
              className="mt-8 inline-flex items-center gap-2 rounded-md bg-primary-foreground px-6 py-3 font-medium text-primary transition-colors hover:bg-primary-foreground/90"
            >
              View Results Gallery
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection
        title="FUE Hair Transplant FAQ"
        subtitle="Common questions about FUE for women"
        faqs={faqs}
      />

      {/* Consultation CTA */}
      <section className="bg-secondary py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Book Your Free FUE Consultation
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Our specialists will assess your hair loss pattern and create a personalized FUE treatment plan tailored to your goals.
              </p>
              <div className="mt-8">
                <CTAButtons size="lg" />
              </div>
            </div>
            <ConsultationForm
              title="Free FUE Consultation"
              description="Share your photos and goals - we'll recommend the best approach for you."
            />
          </div>
        </div>
      </section>
    </>
  )
}
