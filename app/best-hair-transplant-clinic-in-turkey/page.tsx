import { Metadata } from "next"
import Image from "next/image"
import { Check, Shield, Award, Users, Globe, ArrowRight } from "lucide-react"
import { HeroSection } from "@/components/hero-section"
import { ClinicCard } from "@/components/clinic-card"
import { ConsultationForm } from "@/components/consultation-form"
import { CTAButtons } from "@/components/cta-buttons"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Best Hair Transplant Clinics in Turkey | Partner Clinics",
  description: "Discover the best female hair transplant clinics in Turkey. Internationally trusted partners with expert teams, modern techniques, and proven female portfolios.",
  keywords: ["best hair transplant clinic in Turkey", "internationally trusted clinics", "partner clinics hair transplant", "female hair transplant Turkey"],
}

const clinics = [
  {
    name: "Clinica Europa",
    location: "Istanbul, Sisli",
    description: "Leading hair transplant clinic specializing in female hair restoration. State-of-the-art facilities with over 15,000 procedures performed.",
    image: "/images/clinic-1.jpg",
    rating: 4.9,
    specialties: ["DHI", "Sapphire FUE", "Female Hairline"],
    patientsServed: "8,000+",
  },
  {
    name: "MedTrust Istanbul",
    location: "Istanbul, Besiktas",
    description: "JCI-accredited facility known for premium patient care and natural results. Dedicated female hair restoration department.",
    image: "/images/clinics/medtrust-istanbul.jpg",
    rating: 4.8,
    specialties: ["FUE", "DHI", "PRP Therapy"],
    patientsServed: "6,500+",
  },
  {
    name: "NeoSurg Medical",
    location: "Istanbul, Levent",
    description: "Modern clinic featuring the latest hair transplant technology. Internationally trained surgeons with UK and European credentials.",
    image: "/images/clinics/neosurg-medical.jpg",
    rating: 4.9,
    specialties: ["DHI", "Unshaven FUE", "Density Work"],
    patientsServed: "5,000+",
  },
]

const whyPartner = [
  {
    icon: Users,
    title: "Female Portfolios",
    description: "All partner clinics have extensive experience with female patients, understanding the unique needs of women's hair restoration.",
  },
  {
    icon: Award,
    title: "Expert Teams",
    description: "Board-certified surgeons and trained technicians with specialized training in female hair transplant techniques.",
  },
  {
    icon: Shield,
    title: "Modern Techniques",
    description: "Access to the latest DHI, Sapphire FUE, and no-shave techniques for optimal results.",
  },
  {
    icon: Globe,
    title: "International Standards",
    description: "JCI-accredited facilities meeting rigorous UK and EU medical standards for safety and quality.",
  },
]

const partnerBenefits = [
  "Access to international patient flow",
  "SEO-driven traffic and leads",
  "Complete patient coordination",
  "Quality assurance standards",
  "Marketing support",
  "Translation services",
]

export default function BestClinicsPage() {
  return (
    <>
      <HeroSection
        badge="Partner Clinics"
        title="Best Hair Transplant Clinics in Turkey"
        subtitle="We partner exclusively with Turkey's top-rated clinics that meet our rigorous standards for female hair restoration."
      />

      {/* Clinics Grid */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Our Trusted Partner Clinics
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              Every clinic in our network is carefully vetted for quality, safety, and patient satisfaction.
            </p>
          </div>
          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {clinics.map((clinic) => (
              <ClinicCard key={clinic.name} {...clinic} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Our Partners */}
      <section className="bg-secondary py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Why These Clinics?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              We carefully select our partner clinics based on strict criteria.
            </p>
          </div>
          <div className="mt-16 grid gap-8 md:grid-cols-2">
            {whyPartner.map((item) => (
              <Card key={item.title} className="border-0 bg-card">
                <CardHeader>
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="mt-4">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {item.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Selection Process */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <span className="text-sm font-medium uppercase tracking-wider text-primary">
                Quality Assurance
              </span>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                How We Select Our Partners
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Every clinic in our network undergoes a rigorous evaluation process before being approved as a Nubara Medical partner.
              </p>
              <ul className="mt-8 space-y-4">
                {[
                  "On-site facility inspection and accreditation verification",
                  "Surgeon credentials and training review",
                  "Patient outcome analysis and satisfaction surveys",
                  "Hygiene and safety protocol assessment",
                  "Technology and equipment evaluation",
                  "Ongoing quality monitoring and patient feedback",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative aspect-video overflow-hidden rounded-2xl bg-muted lg:aspect-square">
              <Image
                src="/images/clinic-selection.jpg"
                alt="Clinic quality assessment"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* For Clinics Section */}
      <section className="bg-card py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="relative aspect-video overflow-hidden rounded-2xl bg-muted lg:aspect-square lg:order-2">
              <Image
                src="/images/clinic-partnership.jpg"
                alt="Clinic partnership"
                fill
                className="object-cover"
              />
            </div>
            <div className="lg:order-1">
              <span className="text-sm font-medium uppercase tracking-wider text-primary">
                For Clinics
              </span>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Partner With Nubara Medical
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Are you a hair transplant clinic looking to reach more international patients? Nubara Medical connects quality clinics with patients worldwide.
              </p>
              <p className="mt-4 text-muted-foreground">
                Our partnership offers clinics access to a steady stream of qualified patients, complete with patient coordination, translation services, and marketing support.
              </p>
              <h3 className="mt-8 font-semibold text-foreground">Partnership Benefits:</h3>
              <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                {partnerBenefits.map((benefit) => (
                  <li key={benefit} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span className="text-sm text-muted-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Clinic Registration Form */}
      <section className="bg-secondary py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Register Your Clinic
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Interested in becoming a Nubara Medical partner clinic? Fill out the form and our team will contact you to discuss partnership opportunities.
              </p>
              <ul className="mt-6 space-y-3">
                {["No upfront fees", "Performance-based partnership", "Complete patient coordination", "Marketing included"].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-primary" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <ConsultationForm
              title="Clinic Partnership Inquiry"
              description="Fill out your clinic details and we'll be in touch."
              showMessage={true}
            />
          </div>
        </div>
      </section>

      {/* Patient CTA */}
      <section className="bg-primary py-16 text-primary-foreground lg:py-24">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Ready to Start Your Journey?
          </h2>
          <p className="mt-4 text-lg text-primary-foreground/80">
            Let us match you with the perfect clinic for your needs. Book your free consultation today.
          </p>
          <div className="mt-8 flex justify-center">
            <CTAButtons size="lg" />
          </div>
        </div>
      </section>
    </>
  )
}
