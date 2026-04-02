import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Award, Shield, Users, HeartPulse, CheckCircle, Globe, Clock, Stethoscope } from "lucide-react"
import { HeroSection } from "@/components/hero-section"
import { CTAButtons } from "@/components/cta-buttons"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "About Nubara Medical | Female Hair Transplant Experts Turkey",
  description: "Learn about Nubara Medical - trusted female hair transplant specialists in Turkey. Board-certified surgeons, UK medical standards, and patient-focused care since 2018.",
  keywords: ["Nubara Medical", "hair transplant Turkey", "female hair transplant clinic Turkey", "about nubara"],
}

const values = [
  {
    icon: Shield,
    title: "UK Medical Standards",
    description: "All our partner clinics adhere to strict UK and EU medical standards, ensuring the highest levels of safety, hygiene, and patient care throughout your journey.",
  },
  {
    icon: Award,
    title: "Board-Certified Surgeons",
    description: "Our surgeons are internationally certified with extensive experience in female hair restoration. Many have trained at leading institutions in Europe and the USA.",
  },
  {
    icon: HeartPulse,
    title: "Patient-Focused Care",
    description: "We understand that every patient is unique. Our personalized approach ensures your treatment plan is tailored to your specific needs, goals, and lifestyle.",
  },
  {
    icon: CheckCircle,
    title: "Fully Accredited Clinics",
    description: "Our partner clinics are accredited by Turkish Ministry of Health and international bodies, featuring state-of-the-art facilities and the latest hair transplant technology.",
  },
]

const stats = [
  { icon: Users, value: "5,000+", label: "Patients Served" },
  { icon: Globe, value: "50+", label: "Countries" },
  { icon: Clock, value: "6+", label: "Years Experience" },
  { icon: Stethoscope, value: "15+", label: "Partner Clinics" },
]

const process = [
  {
    step: "01",
    title: "Free Consultation",
    description: "Contact us via WhatsApp or email. Share your photos and concerns, and our medical team will assess your case and provide initial recommendations.",
  },
  {
    step: "02",
    title: "Personalized Plan",
    description: "Receive a detailed treatment plan including technique recommendation, graft estimate, costs, and timeline tailored to your specific needs.",
  },
  {
    step: "03",
    title: "Travel & Treatment",
    description: "We arrange everything - flights guidance, airport transfers, accommodation, and your procedure. Just arrive and we handle the rest.",
  },
  {
    step: "04",
    title: "Recovery & Follow-up",
    description: "Return home with comprehensive aftercare instructions. Our team monitors your progress for 12 months with regular check-ins and support.",
  },
]

const techniques = [
  {
    name: "DHI (Direct Hair Implantation)",
    description: "Using the Choi pen for precise, angle-controlled implantation. Ideal for frontal hairline work and cases requiring minimal shaving.",
    benefits: ["Minimal shaving", "Precise angle control", "Natural hairline design"],
  },
  {
    name: "Sapphire FUE",
    description: "Using sapphire blades for cleaner incisions, faster healing, and minimal scarring. Perfect for larger sessions and crown work.",
    benefits: ["Faster healing", "Minimal scarring", "Higher density possible"],
  },
]

export default function AboutPage() {
  return (
    <>
      <HeroSection
        badge="About Nubara Medical"
        title="Your Trusted Partner in Female Hair Restoration"
        subtitle="Since 2018, we've helped thousands of women regain their confidence through expert hair transplant services in Turkey."
        showCTA={false}
      />

      {/* Mission Section */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="relative aspect-square overflow-hidden rounded-2xl bg-muted lg:aspect-auto lg:h-[500px]">
              <Image
                src="/images/about-hero.jpg"
                alt="Nubara Medical team"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <span className="text-sm font-medium uppercase tracking-wider text-primary">
                Our Mission
              </span>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Empowering Women Through Expert Care
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                At Nubara Medical, we specialize exclusively in female hair restoration. We understand that hair loss affects women differently - both physically and emotionally - and requires a specialized approach.
              </p>
              <p className="mt-4 text-muted-foreground">
                Our team bridges the gap between world-class Turkish medical expertise and the standards expected by international patients. We carefully vet every partner clinic, surgeon, and facility to ensure you receive exceptional care.
              </p>
              <p className="mt-4 text-muted-foreground">
                From your first consultation to your 12-month follow-up, we&apos;re with you every step of the way. Our dedicated patient coordinators speak English fluently and are available around the clock to address your concerns.
              </p>
              <div className="mt-8">
                <CTAButtons />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-primary py-12 text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <stat.icon className="mx-auto h-8 w-8 opacity-80" />
                <div className="mt-2 text-3xl font-bold">{stat.value}</div>
                <div className="mt-1 text-sm text-primary-foreground/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Why Patients Trust Nubara Medical
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              Our commitment to excellence in every aspect of your hair restoration journey.
            </p>
          </div>
          <div className="mt-16 grid gap-8 md:grid-cols-2">
            {values.map((value) => (
              <Card key={value.title} className="border-0 bg-secondary/50">
                <CardHeader>
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <value.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="mt-4">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-card py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="text-sm font-medium uppercase tracking-wider text-primary">
              Transparent Process
            </span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Your Journey With Us
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              A clear, transparent process from consultation to recovery.
            </p>
          </div>
          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {process.map((step, index) => (
              <div key={step.step} className="relative">
                {index < process.length - 1 && (
                  <div className="absolute right-0 top-8 hidden h-0.5 w-full bg-border lg:block" style={{ width: 'calc(100% - 4rem)', left: '4rem' }} />
                )}
                <div className="relative">
                  <span className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground">
                    {step.step}
                  </span>
                  <h3 className="mt-4 text-lg font-semibold text-foreground">{step.title}</h3>
                  <p className="mt-2 text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Techniques Section */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="text-sm font-medium uppercase tracking-wider text-primary">
              Modern Techniques
            </span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Advanced Hair Transplant Technology
            </h2>
          </div>
          <div className="mt-16 grid gap-8 lg:grid-cols-2">
            {techniques.map((technique) => (
              <Card key={technique.name}>
                <CardHeader>
                  <CardTitle>{technique.name}</CardTitle>
                  <CardDescription className="text-base">
                    {technique.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {technique.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span className="text-sm text-muted-foreground">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={technique.name.includes("DHI") ? "/dhi-hair-transplant" : "/fue-hair-transplant"}
                    className="mt-4 inline-flex items-center text-sm font-medium text-primary hover:underline"
                  >
                    Learn more
                    <span aria-hidden="true" className="ml-1">&rarr;</span>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-secondary py-16 lg:py-24">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Ready to Start Your Transformation?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Book your free consultation today and take the first step towards restoring your confidence.
          </p>
          <div className="mt-8 flex justify-center">
            <CTAButtons size="lg" />
          </div>
        </div>
      </section>
    </>
  )
}
