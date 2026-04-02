import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, ArrowRight } from "lucide-react"

interface BlogPostCardProps {
  title: string
  excerpt: string
  image: string
  date: string
  category: string
  slug: string
}

export function BlogPostCard({
  title,
  excerpt,
  image,
  date,
  category,
  slug,
}: BlogPostCardProps) {
  return (
    <Card className="group overflow-hidden">
      <div className="relative aspect-video overflow-hidden bg-muted">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <CardHeader>
        <div className="flex items-center gap-3">
          <Badge variant="secondary">{category}</Badge>
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <Calendar className="h-3.5 w-3.5" />
            {date}
          </div>
        </div>
        <CardTitle className="mt-2 text-lg transition-colors group-hover:text-primary">
          <Link href={`/hair-transplant-blog/${slug}`}>
            {title}
          </Link>
        </CardTitle>
        <CardDescription className="line-clamp-2">{excerpt}</CardDescription>
      </CardHeader>
      <CardContent>
        <Link
          href={`/hair-transplant-blog/${slug}`}
          className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
        >
          Read More
          <ArrowRight className="h-4 w-4" />
        </Link>
      </CardContent>
    </Card>
  )
}
