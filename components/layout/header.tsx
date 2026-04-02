"use client"

import Link from "next/link"
import Image from "next/image"
import { Menu, Phone, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet"

const navigation = [
  { name: "Home", href: "/" },
  { name: "Cost", href: "/female-hair-transplant-cost-turkey" },
  { name: "DHI Technique", href: "/dhi-hair-transplant" },
  { name: "FUE Technique", href: "/fue-hair-transplant" },
  { name: "Frontal Hairline", href: "/frontal-hairline-transplant" },
  { name: "Best Clinics", href: "/best-hair-transplant-clinic-in-turkey" },
  { name: "Results", href: "/female-hair-transplant-results" },
  { name: "Blog", href: "/hair-transplant-blog" },
  { name: "About", href: "/about-nubara-medical" },
  { name: "Contact", href: "/contact-nubaramedical" },
]

// Contact information
const PHONE = "+90 548 857 49 96"
const PHONE_LINK = "905488574996"
const TELEGRAM = "https://t.me/nubaramedical"
const INSTAGRAM = "https://www.instagram.com/nubaramedical"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      {/* Top Bar with Contact Info */}
      <div className="border-b border-border bg-primary/5">
        <div className="mx-auto flex h-10 max-w-7xl items-center justify-between px-4 text-sm sm:px-6 lg:px-8">
          <div className="flex items-center gap-4">
            <a
              href={`tel:${PHONE_LINK}`}
              className="flex items-center gap-1.5 text-muted-foreground transition-colors hover:text-primary"
            >
              <Phone className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">{PHONE}</span>
            </a>
          </div>
          <div className="flex items-center gap-4">
            <a
              href={TELEGRAM}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-muted-foreground transition-colors hover:text-primary"
              aria-label="Telegram"
            >
              <Send className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">Telegram</span>
            </a>
            <a
              href={INSTAGRAM}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-muted-foreground transition-colors hover:text-primary"
              aria-label="Instagram"
            >
              <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              <span className="hidden sm:inline">Instagram</span>
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/logo.png"
            alt="Nubara Medical"
            width={48}
            height={48}
            className="h-12 w-12 rounded-full object-cover"
            priority
          />
          <span className="hidden text-lg font-semibold tracking-tight text-foreground sm:inline">
            Nubara Medical
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 lg:flex">
          {navigation.slice(0, 7).map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-secondary hover:text-foreground"
            >
              {item.name}
            </Link>
          ))}
          <div className="group relative">
            <button className="rounded-md px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-secondary hover:text-foreground">
              More
            </button>
            <div className="invisible absolute right-0 top-full z-50 mt-1 w-40 rounded-md border border-border bg-card p-1 opacity-0 shadow-lg transition-all group-hover:visible group-hover:opacity-100">
              {navigation.slice(7).map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block rounded-md px-3 py-2 text-sm text-foreground/80 transition-colors hover:bg-secondary hover:text-foreground"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </nav>

        {/* CTA + Mobile Menu */}
        <div className="flex items-center gap-3">
          <Button asChild className="hidden sm:inline-flex" size="sm">
            <a
              href="https://wa.me/905488574996"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Phone className="mr-2 h-4 w-4" />
              WhatsApp
            </a>
          </Button>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[350px]">
              <div className="flex flex-col gap-6 pt-6">
                <div className="flex items-center gap-3">
                  <Image
                    src="/images/logo.png"
                    alt="Nubara Medical"
                    width={40}
                    height={40}
                    className="h-10 w-10 rounded-full object-cover"
                  />
                  <span className="text-lg font-semibold tracking-tight text-foreground">
                    Nubara Medical
                  </span>
                </div>
                <nav className="flex flex-col gap-1">
                  {navigation.map((item) => (
                    <SheetClose asChild key={item.name}>
                      <Link
                        href={item.href}
                        className="rounded-md px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-secondary hover:text-foreground"
                      >
                        {item.name}
                      </Link>
                    </SheetClose>
                  ))}
                </nav>
                <div className="flex flex-col gap-2 pt-4">
                  <Button asChild>
                    <a
                      href="https://wa.me/905488574996"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Phone className="mr-2 h-4 w-4" />
                      WhatsApp Consultation
                    </a>
                  </Button>
                  <Button variant="outline" asChild>
                    <a href="mailto:info@nubaramedical.com">
                      Email Us
                    </a>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
