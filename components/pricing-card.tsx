import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

interface PricingCardProps {
  name: string
  price: string
  description: string
  features: string[]
  popular?: boolean
  ctaText?: string
  ctaHref?: string
}

export function PricingCard({
  name,
  price,
  description,
  features,
  popular = false,
  ctaText = "Get Quote",
  ctaHref = "https://wa.me/447888888888",
}: PricingCardProps) {
  return (
    <Card className={`relative flex flex-col ${popular ? "border-primary shadow-lg" : ""}`}>
      {popular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span className="rounded-full bg-primary px-4 py-1 text-xs font-semibold text-primary-foreground">
            Most Popular
          </span>
        </div>
      )}
      <CardHeader className="text-center">
        <CardTitle className="text-xl">{name}</CardTitle>
        <CardDescription>{description}</CardDescription>
        <div className="mt-4">
          <span className="text-4xl font-bold text-foreground">{price}</span>
        </div>
      </CardHeader>
      <CardContent className="flex-1">
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3">
              <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <span className="text-sm text-muted-foreground">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full" variant={popular ? "default" : "outline"}>
          <a href={ctaHref} target="_blank" rel="noopener noreferrer">
            {ctaText}
          </a>
        </Button>
      </CardFooter>
    </Card>
  )
}
