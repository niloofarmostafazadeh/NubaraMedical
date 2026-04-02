import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Check, Sparkles, Clock, Shield, Target, ArrowRight } from "lucide-react"
import { HeroSection } from "@/components/hero-section"
import { CTAButtons } from "@/components/cta-buttons"
import { ConsultationForm } from "@/components/consultation-form"
import { FAQSection } from "@/components/faq-section"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "DHI Hair Transplant for Women Turkey | Choi Pen Technique",
  description: "DHI hair transplant for women in Turkey. Advanced Choi pen implantation for natural hairlines with minimal shaving. Expert surgeons, best clinics, and natural-looking results.",
  keywords: ["dhi hair transplant for women", "female dhi hair transplant result", "female hairline restoration dhi", "choi pen hair transplant"],
}

const benefits = [
  {
    icon: Sparkles,
    title: "Frontal Hairline Softening",
    description: "The Choi pen allows precise angle and depth control, creating a natural, soft feminine hairline that blends seamlessly with your existing hair.",
  },
  {
    icon: Target,
    title: "Minimal Shaving Required",
    description: "Unlike traditional FUE, DHI often requires little to no shaving of the recipient area - perfect for women who want to maintain their hair length.",
  },
  {
    icon: Clock,
    title: "Faster Recovery",
    description: "No channel opening means less trauma to the scalp. Most patients return to normal activities within 5-7 days with minimal visible signs.",
  },
  {
    icon: Shield,
    title: "Higher Graft Survival",
    description: "Grafts spend less time outside the body, increasing survival rates up to 98% and ensuring maximum density from your procedure.",
  },
]

const procedure = [
  {
    step: "1",
    title: "Extraction",
    description: "Individual hair follicles are carefully extracted from the donor area using micro punches, preserving the integrity of each graft.",
  },
  {
    step: "2",
    title: "Loading",
    description: "Each follicle is immediately loaded into the Choi implanter pen, minimizing time outside the body.",
  },
  {
    step: "3",
    title: "Implantation",
    description: "The surgeon uses the Choi pen to simultaneously create the channel and implant the graft, controlling angle, depth, and direction.",
  },
  {
    step: "4",
    title: "Recovery",
    description: "Tiny puncture wounds heal quickly without stitches. New hair begins growing within 3-4 months.",
  },
]

const idealCandidates = [
  "Women with frontal hairline recession",
  "Those seeking minimal to no shaving",
  "Patients wanting natural hairline design",
  "Those with good donor hair density",
  "Women with mild to moderate hair thinning",
]

const faqs = [
  {
    question: "Is DHI hair transplant safe for women?",
    answer: "Yes, DHI is completely safe and is often the preferred technique for women due to its precision and minimal shaving requirements. Our surgeons have extensive experience performing DHI procedures specifically for female patients.",
  },
  {
    question: "How long does the DHI procedure take?",
    answer: "A typical DHI procedure takes 6-8 hours depending on the number of grafts. This includes breaks for comfort. The procedure is performed under local anesthesia, so you'll be awake and comfortable throughout.",
  },
  {
    question: "When will I see results from DHI?",
    answer: "Initial growth begins around 3-4 months post-procedure. You'll see significant improvement by 6-8 months, with final results visible at 12-14 months when the transplanted hair reaches full maturity.",
  },
  {
    question: "How many grafts will I need?",
    answer: "This varies based on your hair loss pattern and goals. For frontal hairline restoration, women typically need 1,500-2,500 grafts. Our surgeons will provide a personalized assessment during your consultation.",
  },
  {
    question: "Will the transplanted hair look natural?",
    answer: "Absolutely. The Choi pen technique allows our surgeons to precisely control the angle and direction of each implanted hair, mimicking your natural hair growth pattern for completely undetectable results.",
  },
  {
    question: "What is the recovery time?",
    answer: "Most patients return to work within 5-7 days. The tiny puncture wounds heal within 10-14 days. We provide detailed aftercare instructions and support throughout your recovery.",
  },
]

export default function DHIPage() {
  return (
    <>
      <HeroSection
        badge="DHI Technique"
        title="DHI Hair Transplant for Women"
        subtitle="Advanced Choi pen implantation for natural-looking results. Perfect for frontal hairline restoration with minimal to no shaving required."
      />

      {/* What is DHI */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <span className="text-sm font-medium uppercase tracking-wider text-primary">
                The Gold Standard
              </span>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                What is DHI Hair Transplant?
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Direct Hair Implantation (DHI) is an advanced hair transplant technique that uses a specialized Choi implanter pen to place hair follicles directly into the scalp without creating separate incisions.
              </p>
              <p className="mt-4 text-muted-foreground">
                This revolutionary approach offers several advantages for women: precise hairline design, minimal shaving requirements, faster healing, and higher graft survival rates. The technique is particularly effective for frontal hairline restoration and adding density to thinning areas.
              </p>
              <div className="mt-8">
                <CTAButtons />
              </div>
            </div>
            <div className="relative aspect-square overflow-hidden rounded-2xl bg-muted lg:aspect-auto lg:h-[500px]">
              <Image
                src="/images/dhi-technique.jpg"
                alt="DHI hair transplant procedure"
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
              Why Women Choose DHI
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              DHI offers unique advantages that make it the preferred choice for female hair restoration.
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
              How DHI Works
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

      {/* Ideal Candidates */}
      <section className="bg-card py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="relative aspect-video overflow-hidden rounded-2xl bg-muted lg:aspect-square">
              <Image
                src="/images/dhi-consultation.jpg"
                alt="DHI consultation"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Is DHI Right for You?
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                DHI is ideal for women seeking precise, natural-looking results with minimal downtime.
              </p>
              <ul className="mt-8 space-y-4">
                {idealCandidates.map((candidate) => (
                  <li key={candidate} className="flex items-center gap-3">
                    <Check className="h-5 w-5 shrink-0 text-primary" />
                    <span className="text-muted-foreground">{candidate}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Link
                  href="/contact-nubaramedical"
                  className="inline-flex items-center gap-2 font-medium text-primary hover:underline"
                >
                  Book a free consultation to find out
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
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
                <CardTitle className="mt-4">DHI Cost in Turkey</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-foreground">From £2,500</p>
                <p className="mt-2 text-muted-foreground">
                  All-inclusive packages include accommodation, transfers, and 12-month aftercare. Compare to £8,000-£15,000 in the UK.
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
                <Badge className="w-fit">Our Clinics</Badge>
                <CardTitle className="mt-4">Best DHI Clinics</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We partner exclusively with Turkey&apos;s top-rated DHI clinics, featuring board-certified surgeons with extensive female hair restoration experience.
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

      {/* Before & After Preview */}
      <section className="bg-primary py-16 text-primary-foreground lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              See Real DHI Results
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-foreground/80">
              Browse our gallery of before and after photos from real female DHI patients.
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
        title="DHI Hair Transplant FAQ"
        subtitle="Common questions about DHI for women"
        faqs={faqs}
      />

      {/* Consultation CTA */}
      <section className="bg-secondary py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Book Your Private DHI Consultation
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Our specialists will assess your hair loss pattern and recommend whether DHI is the right technique for your goals.
              </p>
              <div className="mt-8">
                <CTAButtons size="lg" />
              </div>
            </div>
            <ConsultationForm
              title="Free DHI Consultation"
              description="Share your photos and goals - we'll provide a personalized DHI treatment plan."
            />
          </div>
        </div>
      </section>
    </>
  )
}
