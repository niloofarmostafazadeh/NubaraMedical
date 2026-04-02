import { Metadata } from "next"
import { Mail, Phone, MapPin, Clock, MessageCircle, Facebook, Instagram, Youtube } from "lucide-react"
import { HeroSection } from "@/components/hero-section"
import { ConsultationForm } from "@/components/consultation-form"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Contact Nubara Medical | Free Hair Transplant Consultation",
  description: "Contact Nubara Medical for your free female hair transplant consultation. WhatsApp, email, or phone - we're here to help you start your hair restoration journey.",
  keywords: ["contact Nubara Medical", "female hair transplant consultation", "hair transplant Turkey contact"],
}

const contactMethods = [
  {
    icon: MessageCircle,
    title: "WhatsApp",
    description: "Fastest response - usually within 30 minutes",
    action: "Start Chat",
    href: "https://wa.me/905013543732",
    highlight: true,
  },
  {
    icon: Mail,
    title: "Email",
    description: "Send us your photos and questions",
    action: "info@nubaramedical.com",
    href: "mailto:info@nubaramedical.com",
    highlight: false,
  },
  {
    icon: Phone,
    title: "Phone",
    description: "Speak directly with our team",
    action: "+90 501 354 37 32",
    href: "tel:+905013543732",
    highlight: false,
  },
]

const officeInfo = {
  address: "Istanbul, Turkey",
  hours: "Monday - Saturday: 9:00 AM - 7:00 PM (GMT+3)",
  note: "Available for international consultations via WhatsApp and video call",
}

const socialLinks = [
  { name: "Facebook", icon: Facebook, href: "https://facebook.com/nubaramedical" },
  { name: "Instagram", icon: Instagram, href: "https://instagram.com/nubaramedical" },
  { name: "YouTube", icon: Youtube, href: "https://youtube.com/nubaramedical" },
]

export default function ContactPage() {
  return (
    <>
      <HeroSection
        badge="Get In Touch"
        title="Contact Nubara Medical"
        subtitle="Ready to start your hair restoration journey? Our team is here to answer your questions and guide you through the process."
        showCTA={false}
      />

      {/* Contact Methods */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-3">
            {contactMethods.map((method) => (
              <Card key={method.title} className={method.highlight ? "border-primary bg-primary/5" : ""}>
                <CardHeader>
                  <div className={`flex h-12 w-12 items-center justify-center rounded-lg ${method.highlight ? "bg-primary text-primary-foreground" : "bg-primary/10"}`}>
                    <method.icon className={`h-6 w-6 ${method.highlight ? "" : "text-primary"}`} />
                  </div>
                  <CardTitle className="mt-4">{method.title}</CardTitle>
                  <CardDescription>{method.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button
                    asChild
                    variant={method.highlight ? "default" : "outline"}
                    className="w-full"
                  >
                    <a
                      href={method.href}
                      target={method.href.startsWith("http") ? "_blank" : undefined}
                      rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    >
                      {method.action}
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="bg-secondary py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-start gap-12 lg:grid-cols-2">
            {/* Form */}
            <ConsultationForm
              title="Send Us a Message"
              description="Fill out the form below and we'll get back to you within 24 hours."
              showMessage={true}
            />

            {/* Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-foreground">Office Information</h3>
                <div className="mt-6 space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Location</p>
                      <p className="text-muted-foreground">{officeInfo.address}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <Clock className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Working Hours</p>
                      <p className="text-muted-foreground">{officeInfo.hours}</p>
                    </div>
                  </div>
                </div>
                <p className="mt-6 text-sm text-muted-foreground">{officeInfo.note}</p>
              </div>

              {/* Map Placeholder */}
              <div className="overflow-hidden rounded-lg border border-border">
                <div className="aspect-video bg-muted">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d385396.3509804824!2d28.731994799999998!3d41.0054958!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa7040068086b%3A0xe1ccfe98bc01b0d0!2sIstanbul%2C%20Turkey!5e0!3m2!1sen!2suk!4v1640000000000!5m2!1sen!2suk"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Nubara Medical Location"
                  />
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="text-lg font-semibold text-foreground">Follow Us</h3>
                <p className="mt-2 text-muted-foreground">Stay updated with our latest results and news.</p>
                <div className="mt-4 flex gap-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-10 w-10 items-center justify-center rounded-lg bg-card text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                      aria-label={social.name}
                    >
                      <social.icon className="h-5 w-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Have Questions?
          </h2>
          <p className="mt-4 text-muted-foreground">
            Visit our FAQ sections on the{" "}
            <a href="/dhi-hair-transplant#faq" className="text-primary hover:underline">DHI</a>{" "}
            or{" "}
            <a href="/fue-hair-transplant#faq" className="text-primary hover:underline">FUE</a>{" "}
            pages, or reach out directly - we&apos;re happy to help!
          </p>
        </div>
      </section>
    </>
  )
}
