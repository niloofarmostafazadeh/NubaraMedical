import { Metadata } from "next"
import { BlogPostCard } from "@/components/blog-post-card"
import { HeroSection } from "@/components/hero-section"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Hair Transplant Blog | Guides, Tips & Comparisons 2026",
  description: "Hair transplant blog with guides, comparisons, and tips for 2026. Compare Turkey vs UK, FUE vs DHI, and learn about female hair restoration.",
  keywords: ["hair transplant blog", "hair transplant Turkey 2026", "FUE vs DHI guide", "female hair transplant guide"],
}

const blogPosts = [
  {
    title: "Hair Transplant Turkey vs Poland 2026: Complete Comparison",
    excerpt: "Comparing hair transplant services, costs, and results between Turkey and Poland. Which destination offers better value for female patients?",
    image: "/images/blog/turkey-vs-poland.jpg",
    date: "March 15, 2026",
    category: "Comparisons",
    slug: "turkey-vs-poland-2026",
  },
  {
    title: "FUE vs DHI: Which Hair Transplant Technique is Right for You?",
    excerpt: "A comprehensive guide to understanding the differences between FUE and DHI techniques, including benefits, recovery, and which is better for women.",
    image: "/images/blog/fue-vs-dhi.jpg",
    date: "March 10, 2026",
    category: "Techniques",
    slug: "fue-vs-dhi-guide",
  },
  {
    title: "Hair Transplant UK vs Turkey: Cost, Quality & Results Compared",
    excerpt: "Is it worth traveling to Turkey for a hair transplant? We compare costs, quality standards, and results between UK and Turkish clinics.",
    image: "/images/blog/uk-vs-turkey.jpg",
    date: "March 5, 2026",
    category: "Comparisons",
    slug: "uk-vs-turkey-comparison",
  },
  {
    title: "Female Hair Loss: Causes, Types & Treatment Options",
    excerpt: "Understanding why women experience hair loss and the most effective treatment options available, from medical therapy to surgical restoration.",
    image: "/images/blog/female-hair-loss.jpg",
    date: "February 28, 2026",
    category: "Education",
    slug: "female-hair-loss-guide",
  },
  {
    title: "What to Expect: Your Hair Transplant Journey Timeline",
    excerpt: "A complete timeline of what to expect before, during, and after your hair transplant procedure, from consultation to final results.",
    image: "/images/blog/transplant-timeline.jpg",
    date: "February 20, 2026",
    category: "Guides",
    slug: "hair-transplant-timeline",
  },
  {
    title: "Hair Transplant Recovery: Week by Week Guide",
    excerpt: "Detailed recovery guide covering each week after your hair transplant, including what's normal, aftercare tips, and when to contact your clinic.",
    image: "/images/blog/recovery-guide.jpg",
    date: "February 15, 2026",
    category: "Guides",
    slug: "recovery-week-by-week",
  },
  {
    title: "How to Choose the Best Hair Transplant Clinic in Turkey",
    excerpt: "Essential factors to consider when selecting a hair transplant clinic, including credentials, reviews, techniques, and red flags to avoid.",
    image: "/images/blog/choosing-clinic.jpg",
    date: "February 10, 2026",
    category: "Guides",
    slug: "choosing-clinic-turkey",
  },
  {
    title: "Hair Transplant Turkey vs Spain: 2026 Destination Guide",
    excerpt: "Comparing hair transplant tourism in Turkey and Spain. Costs, clinic quality, travel considerations, and which is better for your needs.",
    image: "/images/blog/turkey-vs-spain.jpg",
    date: "February 5, 2026",
    category: "Comparisons",
    slug: "turkey-vs-spain-2026",
  },
  {
    title: "PRP Therapy for Hair Loss: Does It Really Work?",
    excerpt: "An evidence-based look at PRP (Platelet-Rich Plasma) therapy for hair loss, including how it works, effectiveness, and who it's best for.",
    image: "/images/blog/prp-therapy.jpg",
    date: "January 30, 2026",
    category: "Treatments",
    slug: "prp-therapy-guide",
  },
]

export default function BlogPage() {
  return (
    <>
      <HeroSection
        badge="Blog"
        title="Hair Transplant Insights & Guides"
        subtitle="Expert advice, comparisons, and guides to help you make informed decisions about your hair restoration journey."
        showCTA={false}
      />

      {/* Blog Posts Grid */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <BlogPostCard key={post.slug} {...post} />
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-12 flex items-center justify-center gap-2">
            <Button variant="outline" size="icon" disabled>
              <ChevronLeft className="h-4 w-4" />
              <span className="sr-only">Previous page</span>
            </Button>
            <Button variant="default" size="sm">1</Button>
            <Button variant="outline" size="sm">2</Button>
            <Button variant="outline" size="sm">3</Button>
            <Button variant="outline" size="icon">
              <ChevronRight className="h-4 w-4" />
              <span className="sr-only">Next page</span>
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter / Share Section */}
      <section className="bg-secondary py-16 lg:py-24">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Stay Updated
          </h2>
          <p className="mt-4 text-muted-foreground">
            Follow us on social media for the latest hair transplant news, tips, and patient stories.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <a
              href="https://wa.me/447888888888"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-[#25D366] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#25D366]/90"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp
            </a>
            <a
              href="https://t.me/nubaramedical"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-[#0088cc] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#0088cc]/90"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
              </svg>
              Telegram
            </a>
            <a
              href="https://facebook.com/nubaramedical"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-[#1877F2] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#1877F2]/90"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              Facebook
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
