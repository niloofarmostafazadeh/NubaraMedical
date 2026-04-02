import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Check, Shield, Users, Award, Clock, HeartPulse, Sparkles } from "lucide-react"
import { HeroSection } from "@/components/hero-section"
import { PricingCard } from "@/components/pricing-card"
import { CTAButtons } from "@/components/cta-buttons"
import { ConsultationForm } from "@/components/consultation-form"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Female Hair Transplant Turkey | DHI & FUE Experts",
  description: "Expert female hair transplant services in Turkey. DHI & FUE techniques with comprehensive care, 12-month result monitoring, and international patient support. Get your free consultation today.",
  keywords: ["female hair transplant turkey", "female hair transplant cost 2026", "female hairline restoration turkey", "DHI hair transplant women", "FUE hair transplant women"],
}

const features = [
  {
    icon: Sparkles,
    title: "Female-Centric Methods",
    description: "Specialized DHI and FUE techniques designed specifically for women, ensuring natural-looking results with minimal shaving requirements.",
  },
  {
    icon: Award,
    title: "Expert Turkish Clinics",
    description: "Partner with Turkey's top-rated hair transplant clinics, featuring board-certified surgeons with extensive female hair restoration experience.",
  },
  {
    icon: HeartPulse,
    title: "Comprehensive Care",
    description: "From initial consultation to 12-month follow-up, we provide complete support including accommodation, transfers, and aftercare.",
  },
]

const whyChooseUs = [
  {
    icon: Shield,
    title: "UK Medical Standards",
    description: "All partner clinics meet rigorous UK and EU medical standards for safety and quality.",
  },
  {
    icon: Users,
    title: "International Patient Support",
    description: "Dedicated coordinators fluent in English to guide you through every step of your journey.",
  },
  {
    icon: Clock,
    title: "12-Month Monitoring",
    description: "Comprehensive result monitoring with regular check-ins throughout your hair growth journey.",
  },
]

const pricingPackages = [
  {
    name: "DHI Premium",
    price: "£2,500",
    description: "Advanced Choi pen implantation for precise, natural results",
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
  {
    name: "All-Inclusive",
    price: "£3,200",
    description: "Complete package with premium accommodation and VIP service",
    features: [
      "Up to 4,500 grafts",
      "Choice of DHI or FUE",
      "5-star hotel (5 nights)",
      "VIP airport transfers",
      "Personal translator",
      "PRP treatment included",
      "12-month monitoring",
    ],
    popular: true,
  },
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
]

const stats = [
  { value: "5,000+", label: "Happy Patients" },
  { value: "98%", label: "Success Rate" },
  { value: "15+", label: "Partner Clinics" },
  { value: "12", label: "Months Aftercare" },
]

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection
        badge="Trusted Female Hair Transplant Services"
        title="Restore Your Confidence with Expert Hair Transplant in Turkey"
        subtitle="Specialized DHI & FUE techniques designed for women. Experience world-class care at affordable prices with our network of Turkey's finest clinics."
      />

      {/* Trust Indicators */}
      <section className="border-b border-border bg-card py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-bold text-primary">{stat.value}</div>
                <div className="mt-1 text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Why Women Choose Nubara Medical
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              We specialize exclusively in female hair restoration, understanding the unique needs and aesthetic goals of women seeking natural-looking results.
            </p>
          </div>
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {features.map((feature) => (
              <Card key={feature.title} className="border-0 bg-secondary/50">
                <CardHeader>
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="mt-4">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Techniques Overview */}
      <section className="bg-card py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <span className="text-sm font-medium uppercase tracking-wider text-primary">
                Our Techniques
              </span>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Advanced Hair Transplant Methods for Women
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                We offer both DHI and FUE techniques, each with unique benefits for female patients. Our surgeons will recommend the best approach based on your specific needs.
              </p>
              <div className="mt-8 space-y-6">
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <Check className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">DHI (Direct Hair Implantation)</h3>
                    <p className="mt-1 text-muted-foreground">
                      Precise Choi pen implantation allowing for natural hairline design with minimal to no shaving.
                    </p>
                    <Link href="/dhi-hair-transplant" className="mt-2 inline-block text-sm font-medium text-primary hover:underline">
                      Learn more about DHI
                    </Link>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <Check className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">FUE (Follicular Unit Extraction)</h3>
                    <p className="mt-1 text-muted-foreground">
                      Minimally invasive extraction for natural density with flexible graft planning options.
                    </p>
                    <Link href="/fue-hair-transplant" className="mt-2 inline-block text-sm font-medium text-primary hover:underline">
                      Learn more about FUE
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative aspect-square overflow-hidden rounded-2xl bg-muted lg:aspect-auto lg:h-[500px]">
              <Image
                src="/images/techniques-hero.jpg"
                alt="Hair transplant consultation"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="text-sm font-medium uppercase tracking-wider text-primary">
              Transparent Pricing
            </span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              All-Inclusive Packages for 2026
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              No hidden fees. Our packages include everything you need for a successful hair transplant journey.
            </p>
          </div>
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {pricingPackages.map((pkg) => (
              <PricingCard key={pkg.name} {...pkg} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <p className="text-muted-foreground">
              Need a custom package? <Link href="/contact-nubaramedical" className="font-medium text-primary hover:underline">Contact us</Link> for a personalized quote.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-primary py-16 text-primary-foreground lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Your Safety & Results Are Our Priority
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-foreground/80">
              We partner only with accredited clinics that meet the highest international standards.
            </p>
          </div>
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {whyChooseUs.map((item) => (
              <div key={item.title} className="text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary-foreground/10">
                  <item.icon className="h-7 w-7" />
                </div>
                <h3 className="mt-4 text-xl font-semibold">{item.title}</h3>
                <p className="mt-2 text-primary-foreground/80">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Preview */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="order-2 grid grid-cols-2 gap-4 lg:order-1">
              <div className="space-y-4">
                <div className="relative aspect-[3/4] overflow-hidden rounded-lg bg-muted">
                  <Image
                    src="/images/result-1.jpg"
                    alt="Hair transplant result"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-square overflow-hidden rounded-lg bg-muted">
                  <Image
                    src="/images/result-2.jpg"
                    alt="Hair transplant result"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="relative aspect-square overflow-hidden rounded-lg bg-muted">
                  <Image
                    src="/images/result-3.jpg"
                    alt="Hair transplant result"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-[3/4] overflow-hidden rounded-lg bg-muted">
                  <Image
                    src="/images/result-4.jpg"
                    alt="Hair transplant result"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <span className="text-sm font-medium uppercase tracking-wider text-primary">
                Real Results
              </span>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                See the Transformation
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Our patients achieve natural, lasting results. Browse our gallery of before and after photos to see what&apos;s possible.
              </p>
              <ul className="mt-6 space-y-3">
                {["Natural hairline restoration", "Improved density", "Minimal scarring", "Long-lasting results"].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-primary" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Link
                  href="/female-hair-transplant-results"
                  className="inline-flex items-center gap-2 font-medium text-primary hover:underline"
                >
                  View Full Results Gallery
                  <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Consultation CTA */}
      <section className="bg-secondary py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Ready to Start Your Journey?
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Book your free consultation today. Our team will assess your needs and create a personalized treatment plan tailored to your goals.
              </p>
              <ul className="mt-6 space-y-3">
                {["No obligation consultation", "Personalized treatment plan", "Transparent pricing", "Expert medical advice"].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-primary" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <CTAButtons size="lg" />
              </div>
            </div>
            <div>
              <ConsultationForm />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
