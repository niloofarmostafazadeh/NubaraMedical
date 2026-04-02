import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Star, Users } from "lucide-react"

interface ClinicCardProps {
  name: string
  location: string
  description: string
  image: string
  rating?: number
  specialties: string[]
  patientsServed?: string
}

export function ClinicCard({
  name,
  location,
  description,
  image,
  rating = 4.9,
  specialties,
  patientsServed = "5,000+",
}: ClinicCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className="relative aspect-video bg-muted">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
        />
      </div>
      <CardHeader>
        <div className="flex items-start justify-between">
          <div>
            <CardTitle className="text-lg">{name}</CardTitle>
            <div className="mt-1 flex items-center gap-1 text-sm text-muted-foreground">
              <MapPin className="h-3.5 w-3.5" />
              {location}
            </div>
          </div>
          <div className="flex items-center gap-1 rounded-md bg-primary/10 px-2 py-1">
            <Star className="h-4 w-4 fill-primary text-primary" />
            <span className="text-sm font-medium">{rating}</span>
          </div>
        </div>
        <CardDescription className="mt-2">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {specialties.map((specialty) => (
            <Badge key={specialty} variant="secondary">
              {specialty}
            </Badge>
          ))}
        </div>
        <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
          <Users className="h-4 w-4" />
          <span>{patientsServed} patients served</span>
        </div>
      </CardContent>
    </Card>
  )
}
