import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface BeforeAfterCardProps {
  title: string
  description?: string
  beforeImage: string
  afterImage: string
  technique: "DHI" | "FUE"
  grafts: number
  timeframe?: string
}

export function BeforeAfterCard({
  title,
  description,
  beforeImage,
  afterImage,
  technique,
  grafts,
  timeframe = "12 months",
}: BeforeAfterCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className="grid sm:grid-cols-2">
        <div className="relative aspect-square bg-muted">
          <Image
            src={beforeImage}
            alt={`Before - ${title}`}
            fill
            className="object-cover"
          />
          <span className="absolute bottom-3 left-3 rounded-md bg-background/90 px-2 py-1 text-xs font-medium">
            Before
          </span>
        </div>
        <div className="relative aspect-square bg-muted">
          <Image
            src={afterImage}
            alt={`After - ${title}`}
            fill
            className="object-cover"
          />
          <span className="absolute bottom-3 left-3 rounded-md bg-background/90 px-2 py-1 text-xs font-medium">
            After {timeframe}
          </span>
        </div>
      </div>
      <CardHeader className="pb-2">
        <div className="flex items-center gap-2">
          <Badge variant="secondary">{technique}</Badge>
          <Badge variant="outline">{grafts.toLocaleString()} Grafts</Badge>
        </div>
        <CardTitle className="mt-2 text-lg">{title}</CardTitle>
        {description && (
          <CardDescription>{description}</CardDescription>
        )}
      </CardHeader>
    </Card>
  )
}
