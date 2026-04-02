"use client"

import { Button } from "@/components/ui/button"
import { Phone, Mail, MessageCircle } from "lucide-react"

// Contact information
const PHONE_LINK = "905488574996"

interface CTAButtonsProps {
  variant?: "inline" | "stacked"
  size?: "default" | "lg"
  className?: string
}

export function CTAButtons({ variant = "inline", size = "default", className = "" }: CTAButtonsProps) {
  const buttonSize = size === "lg" ? "lg" : "default"
  
  if (variant === "stacked") {
    return (
      <div className={`flex flex-col gap-3 ${className}`}>
        <Button asChild size={buttonSize} className="w-full">
          <a
            href={`https://wa.me/${PHONE_LINK}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle className="mr-2 h-4 w-4" />
            WhatsApp Consultation
          </a>
        </Button>
        <Button asChild variant="outline" size={buttonSize} className="w-full">
          <a href="mailto:info@nubaramedical.com">
            <Mail className="mr-2 h-4 w-4" />
            Email Us
          </a>
        </Button>
      </div>
    )
  }

  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`}>
      <Button asChild size={buttonSize}>
        <a
          href={`https://wa.me/${PHONE_LINK}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <MessageCircle className="mr-2 h-4 w-4" />
          WhatsApp Consultation
        </a>
      </Button>
      <Button asChild variant="outline" size={buttonSize}>
        <a href="mailto:info@nubaramedical.com">
          <Mail className="mr-2 h-4 w-4" />
          Email Us
        </a>
      </Button>
    </div>
  )
}

export function FloatingCTA() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-2">
      <a
        href={`https://wa.me/${PHONE_LINK}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110"
        aria-label="Contact via WhatsApp"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
      <a
        href={`tel:+${PHONE_LINK}`}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-transform hover:scale-110"
        aria-label="Call us"
      >
        <Phone className="h-6 w-6" />
      </a>
    </div>
  )
}
