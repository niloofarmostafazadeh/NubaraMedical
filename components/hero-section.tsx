import { CTAButtons } from "@/components/cta-buttons"

interface HeroSectionProps {
  badge?: string
  title: string
  subtitle: string
  showCTA?: boolean
  backgroundImage?: string
  className?: string
}

export function HeroSection({
  badge,
  title,
  subtitle,
  showCTA = true,
  backgroundImage,
  className = "",
}: HeroSectionProps) {
  return (
    <section
      className={`relative overflow-hidden bg-gradient-to-br from-secondary via-background to-muted py-20 lg:py-28 ${className}`}
    >
      {/* Decorative Elements */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -right-40 -top-40 h-80 w-80 rounded-full bg-primary/5" />
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-accent/5" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          {badge && (
            <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              {badge}
            </span>
          )}
          <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl">
            {subtitle}
          </p>
          {showCTA && (
            <div className="mt-10 flex justify-center">
              <CTAButtons size="lg" />
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
