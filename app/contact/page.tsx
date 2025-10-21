"use client"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ContactForm from "@/components/contact/contact-form"
import ContactInfo from "@/components/contact/contact-info"
import LocationMap from "@/components/contact/location-map"
import SponsorshipInquiry from "@/components/contact/sponsorship-inquiry"
import Newsletter from "@/components/contact/newsletter"
import JoinTeam from "@/components/contact/join-team"
import FAQ from "@/components/contact/faq"

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-20">
        <ContactForm />
        <ContactInfo />
        <LocationMap />
        <SponsorshipInquiry />
        <Newsletter />
        <JoinTeam />
        <FAQ />
      </div>
      <Footer />
    </main>
  )
}
