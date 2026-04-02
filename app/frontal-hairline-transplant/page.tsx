import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Check, Sparkles, Clock, Heart, Eye, ArrowRight } from "lucide-react"
import { HeroSection } from "@/components/hero-section"
import { CTAButtons } from "@/components/cta-buttons"
import { ConsultationForm } from "@/components/consultation-form"
import { FAQSection } from "@/components/faq-section"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Frontal Hairline Transplant for Women Turkey | Natural Results",
  description: "Frontal hairline transplant for women in Turkey. Natural feminine hairline restoration using DHI & FUE techniques. Expert assessment, surgery, and 12-month results.",
  keywords: ["frontal hairline transplant", "female hair transplant cost 2026", "female hairline restoration turkey", "hairline lowering"],
}

const benefits = [
  {
    icon: Eye,
    title: "Natural Feminine Results",
    description: "Our surgeons specialize in creating soft, natural feminine hairlines that frame your face beautifully and look completely natural.",
  },
  {
    icon: Sparkles,
    title: "Personalized Design",
    description: "Every hairline is custom-designed based on your facial structure, existing hair, and personal preferences for a result that's uniquely you.",
  },
  {
    icon: Heart,
    title: "Confidence Restored",
    description: "A natural hairline can dramatically improve confidence. Many patients tell us it's life-changing, affecting everything from styling to self-esteem.",
  },
  {
    icon: Clock,
    title: "Long-Lasting Results",
    description: "Transplanted hair is permanent. Once fully grown, your new hairline will last a lifetime with proper care.",
  },
]

const process = [
  {
    phase: "Assessment",
    title: "Patient Assessment",
    description: "We evaluate your hair loss pattern, donor area density, facial structure, and discuss your goals to create a personalized treatment plan.",
    duration: "1-2 hours consultation",
  },
  {
    phase: "Surgery",
    title: "Surgical Technique",
    description: "Using DHI or FUE (based on your needs), grafts are precisely placed to recreate a natural feminine hairline with appropriate density and direction.",
    duration: "4-8 hours procedure",
  },
  {
    phase: "Recovery",
    title: "Initial Recovery",
    description: "Tiny crusts form and fall off within 7-10 days. Most patients return to work within a week. The transplanted hair may shed initially - this is normal.",
    duration: "7-10 days",
  },
  {
    phase: "Results",
    title: "Full Hairline Results",
    description: "New hair begins growing at 3-4 months. Significant improvement visible by 6-8 months. Full, mature results achieved at 12-14 months.",
    duration: "6-12 months",
  },
]

const techniques = [
  {
    name: "DHI for Hairline",
    description: "DHI is often preferred for hairline work due to its precision. The Choi pen allows exact control over angle, depth, and direction for the most natural results.",
    bestFor: "Frontal hairline, temple points, no-shave requirement",
  },
  {
    name: "FUE for Hairline",
    description: "FUE with Sapphire blades offers excellent results for hairlines, especially when combined with density work behind the hairline.",
    bestFor: "Larger coverage, combined with crown/mid-scalp work",
  },
]

const faqs = [
  {
    question: "Am I a good candidate for hairline transplant?",
    answer: "Ideal candidates have stable hair loss, good donor hair density, and realistic expectations. Women with frontal recession, high natural hairlines, or hairline asymmetry are often excellent candidates. A consultation with our surgeons will determine your suitability.",
  },
  {
    question: "How is a natural hairline designed?",
    answer: "Our surgeons consider your facial proportions, age, existing hair characteristics, and personal preferences. The hairline is drawn with your input before surgery. We create irregularity and gradual density changes to mimic nature - not a harsh, unnatural line.",
  },
  {
    question: "What is the recovery process like?",
    answer: "Days 1-3: Mild swelling possible. Days 4-10: Tiny crusts fall off. Weeks 2-4: Transplanted hair may shed (normal). Months 3-4: New growth begins. Months 6-12: Progressive thickening to final result.",
  },
  {
    question: "How many grafts do I need for hairline restoration?",
    answer: "Hairline restoration typically requires 1,500-2,500 grafts depending on the desired lowering and density. Some patients need fewer for temple point restoration only. Your consultation will include a detailed graft estimate.",
  },
  {
    question: "Will the transplanted hair match my existing hair?",
    answer: "Yes. We select grafts from areas that match your hairline hair in texture and characteristics. The transplanted hair is your own, so it will grow, be styled, and colored just like your natural hair.",
  },
  {
    question: "What results can I realistically expect?",
    answer: "You can expect a natural-looking, permanent improvement in your hairline. Results vary based on graft count, donor quality, and individual healing. We'll show you realistic before/after examples during consultation.",
  },
]

export default function FrontalHairlinePage() {
  return (
    <>
      <HeroSection
        badge="Hairline Restoration"
        title="Frontal Hairline Transplant for Women"
        subtitle="Reclaim your natural hairline with precision DHI and FUE techniques. Expert surgeons creating soft, feminine results that restore confidence."
      />

      {/* Overview */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <span className="text-sm font-medium uppercase tracking-wider text-primary">
                Natural Feminine Hairlines
              </span>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Frame Your Face Beautifully
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                The hairline is one of the most defining features of your face. Whether you&apos;ve experienced recession, always had a high hairline, or want to refine your temples, frontal hairline transplant can create the natural frame you deserve.
              </p>
              <p className="mt-4 text-muted-foreground">
                Our surgeons specialize in female hairline restoration, understanding that women&apos;s hairlines require different design principles than men&apos;s. The result is a soft, natural hairline that enhances your facial features.
              </p>
              <div className="mt-8">
                <CTAButtons />
              </div>
            </div>
            <div className="relative aspect-square overflow-hidden rounded-2xl bg-muted lg:aspect-auto lg:h-[500px]">
              <Image
                src="/images/hairline-hero.jpg"
                alt="Natural feminine hairline result"
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
              Why Women Choose Hairline Restoration
            </h2>
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

      {/* Process Timeline */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="text-sm font-medium uppercase tracking-wider text-primary">
              Your Journey
            </span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              From Consultation to Results
            </h2>
          </div>
          <div className="mt-16 space-y-8">
            {process.map((step, index) => (
              <div key={step.phase} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                    {index + 1}
                  </span>
                  {index < process.length - 1 && (
                    <div className="my-2 h-full w-0.5 bg-border" />
                  )}
                </div>
                <div className="pb-8">
                  <span className="text-sm font-medium uppercase text-primary">{step.phase}</span>
                  <h3 className="mt-1 text-xl font-semibold text-foreground">{step.title}</h3>
                  <p className="mt-2 text-muted-foreground">{step.description}</p>
                  <p className="mt-2 text-sm font-medium text-primary">{step.duration}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Techniques */}
      <section className="bg-card py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Surgical Techniques for Hairline
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              We use DHI and FUE techniques based on your specific needs for optimal results.
            </p>
          </div>
          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            {techniques.map((technique) => (
              <Card key={technique.name}>
                <CardHeader>
                  <CardTitle>{technique.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{technique.description}</p>
                  <p className="mt-4 text-sm">
                    <span className="font-medium text-foreground">Best for: </span>
                    <span className="text-muted-foreground">{technique.bestFor}</span>
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-8 text-center">
            <p className="text-muted-foreground">
              Our surgeons will recommend the best technique during your consultation.{" "}
              <Link href="/dhi-hair-transplant" className="text-primary hover:underline">Learn about DHI</Link>{" "}
              or{" "}
              <Link href="/fue-hair-transplant" className="text-primary hover:underline">learn about FUE</Link>.
            </p>
          </div>
        </div>
      </section>

      {/* Cost */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <span className="text-sm font-medium uppercase tracking-wider text-primary">
                Transparent Pricing
              </span>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Hairline Transplant Cost
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Frontal hairline restoration in Turkey costs significantly less than in the UK or USA, without compromising on quality.
              </p>
              <div className="mt-6 rounded-lg border border-border bg-card p-6">
                <p className="text-sm text-muted-foreground">Hairline Restoration Package</p>
                <p className="mt-2 text-4xl font-bold text-foreground">From £2,200</p>
                <ul className="mt-4 space-y-2">
                  {["1,500-2,500 grafts typical", "All-inclusive package", "5-star accommodation", "12-month aftercare"].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Check className="h-4 w-4 text-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <Link
                href="/female-hair-transplant-cost-turkey"
                className="mt-6 inline-flex items-center gap-2 font-medium text-primary hover:underline"
              >
                View full pricing details
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="relative aspect-video overflow-hidden rounded-2xl bg-muted lg:aspect-square">
              <Image
                src="/images/hairline-result.jpg"
                alt="Hairline transplant result"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Results CTA */}
      <section className="bg-primary py-16 text-primary-foreground lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              See Real Hairline Results
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-foreground/80">
              Browse before and after photos of our female hairline restoration patients.
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
        title="Hairline Transplant FAQ"
        subtitle="Common questions about frontal hairline restoration"
        faqs={faqs}
      />

      {/* Consultation CTA */}
      <section className="bg-secondary py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Book Your Personalized Hairline Plan
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Every hairline is unique. Share your photos and goals with us, and our specialists will create a personalized treatment plan just for you.
              </p>
              <div className="mt-8">
                <CTAButtons size="lg" />
              </div>
            </div>
            <ConsultationForm
              title="Free Hairline Consultation"
              description="Get a personalized hairline design recommendation from our experts."
            />
          </div>
        </div>
      </section>
    </>
  )
}
