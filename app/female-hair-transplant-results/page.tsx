import { Metadata } from "next"
import Image from "next/image"
import { HeroSection } from "@/components/hero-section"
import { CTAButtons } from "@/components/cta-buttons"
import { BeforeAfterCard } from "@/components/before-after-card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export const metadata: Metadata = {
  title: "Female Hair Transplant Results Turkey | Before & After Gallery",
  description: "View real female hair transplant before and after results from Turkey. DHI and FUE techniques, frontal hairline restoration, and crown density enhancement.",
  keywords: ["female hair transplant before after turkey", "DHI hair transplant", "FUE hair transplant", "hair transplant results"],
}

const results = {
  hairline: [
    {
      title: "Frontal Hairline Restoration",
      description: "Significant improvement in hairline density and shape using DHI technique.",
      beforeImage: "/images/hairline-1-before.jpg",
      afterImage: "/images/hairline-1-after.jpg",
      technique: "DHI" as const,
      grafts: 2200,
      timeframe: "12 months",
    },
    {
      title: "Temple Point Restoration",
      description: "Natural temple point reconstruction with soft, feminine hairline design.",
      beforeImage: "/images/hairline-2-before.jpg",
      afterImage: "/images/hairline--after.jpg",
      technique: "DHI" as const,
      grafts: 1800,
      timeframe: "10 months",
    },
    {
      title: "Receding Hairline Correction",
      description: "Complete frontal hairline redesign addressing recession and thinning.",
      beforeImage: "/images/hairline-3-before.jpg",
      afterImage: "/images/hairline-3-after.jpg",
      technique: "FUE" as const,
      grafts: 2500,
      timeframe: "12 months",
    },
  ],
  diffuse: [
    {
      title: "Diffuse Thinning Correction",
      description: "Overall density improvement throughout the top of the scalp.",
      beforeImage: "/images/diffuse-1-before.jpg",
      afterImage: "/images/diffuse-1-after.jpg",
      technique: "FUE" as const,
      grafts: 3200,
      timeframe: "14 months",
    },
    {
      title: "Mid-Scalp Density Enhancement",
      description: "Targeted density restoration in the central scalp area.",
      beforeImage: "/images/diffuse-2-before.jpg",
      afterImage: "/images/diffuse-2-after.jpg",
      technique: "FUE" as const,
      grafts: 2800,
      timeframe: "12 months",
    },
  ],
  advanced: [
    {
      title: "Advanced Hairline Rebuild",
      description: "Complete hairline reconstruction for advanced female pattern hair loss.",
      beforeImage: "/images/advanced-1-before.jpg",
      afterImage: "/images/advanced-1-after.jpg",
      technique: "DHI" as const,
      grafts: 3000,
      timeframe: "14 months",
    },
    {
      title: "Full Frontal Restoration",
      description: "Extensive frontal area restoration combining hairline and density work.",
      beforeImage: "/images/advanced-2-before.jpg",
      afterImage: "/images/advanced-2-after.jpg",
      technique: "FUE" as const,
      grafts: 3500,
      timeframe: "12 months",
    },
  ],
  crown: [
    {
      title: "Crown Density Enhancement",
      description: "Improved density in the crown area addressing female pattern thinning.",
      beforeImage: "/images/crown-1-before.jpg",
      afterImage: "/images/crown-1-after.jpg",
      technique: "FUE" as const,
      grafts: 2400,
      timeframe: "12 months",
    },
    {
      title: "Vertex Thinning Correction",
      description: "Natural density restoration at the crown with seamless blending.",
      beforeImage: "/images/crown-2-before.jpg",
      afterImage: "/images/crown-2-after.jpg",
      technique: "FUE" as const,
      grafts: 2000,
      timeframe: "10 months",
    },
  ],
}

const stats = [
  { value: "98%", label: "Patient Satisfaction" },
  { value: "95%+", label: "Graft Survival Rate" },
  { value: "5,000+", label: "Successful Procedures" },
  { value: "12 mo", label: "Result Monitoring" },
]

export default function ResultsPage() {
  return (
    <>
      <HeroSection
        badge="Real Results"
        title="Female Hair Transplant Before & After"
        subtitle="Browse our gallery of verified results from real patients. See the natural, lasting transformations achieved with DHI and FUE techniques."
      />

      {/* Stats */}
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

      {/* Results Gallery */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="hairline" className="w-full">
            <div className="flex justify-center">
              <TabsList className="grid w-full max-w-2xl grid-cols-4">
                <TabsTrigger value="hairline">Hairline</TabsTrigger>
                <TabsTrigger value="diffuse">Diffuse</TabsTrigger>
                <TabsTrigger value="advanced">Advanced</TabsTrigger>
                <TabsTrigger value="crown">Crown</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="hairline" className="mt-12">
              <div className="mb-8 text-center">
                <h2 className="text-2xl font-bold text-foreground">Frontal Hairline Restoration</h2>
                <p className="mt-2 text-muted-foreground">
                  Natural feminine hairlines created with precision DHI and FUE techniques.
                </p>
              </div>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {results.hairline.map((result, index) => (
                  <BeforeAfterCard key={index} {...result} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="diffuse" className="mt-12">
              <div className="mb-8 text-center">
                <h2 className="text-2xl font-bold text-foreground">Diffuse Thinning Correction</h2>
                <p className="mt-2 text-muted-foreground">
                  Overall density improvement for women experiencing diffuse hair loss.
                </p>
              </div>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {results.diffuse.map((result, index) => (
                  <BeforeAfterCard key={index} {...result} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="advanced" className="mt-12">
              <div className="mb-8 text-center">
                <h2 className="text-2xl font-bold text-foreground">Advanced Female Hairline Rebuild</h2>
                <p className="mt-2 text-muted-foreground">
                  Comprehensive restoration for advanced hair loss patterns.
                </p>
              </div>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {results.advanced.map((result, index) => (
                  <BeforeAfterCard key={index} {...result} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="crown" className="mt-12">
              <div className="mb-8 text-center">
                <h2 className="text-2xl font-bold text-foreground">Crown Density Enhancement</h2>
                <p className="mt-2 text-muted-foreground">
                  Targeted restoration for thinning at the crown and vertex areas.
                </p>
              </div>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {results.crown.map((result, index) => (
                  <BeforeAfterCard key={index} {...result} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Results Disclaimer */}
      <section className="bg-muted py-8">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm text-muted-foreground">
            <strong>Results Disclaimer:</strong> Individual results may vary. The before and after photos shown represent actual patient results. Your results will depend on factors including your hair loss pattern, donor area quality, and adherence to post-operative care instructions.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16 text-primary-foreground lg:py-24">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Ready to See Your Own Transformation?
          </h2>
          <p className="mt-4 text-lg text-primary-foreground/80">
            Book your free consultation today. Share your photos and our experts will show you what results are possible for your specific case.
          </p>
          <div className="mt-8 flex justify-center">
            <CTAButtons size="lg" />
          </div>
        </div>
      </section>
    </>
  )
}
