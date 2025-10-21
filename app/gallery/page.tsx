"use client"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import GalleryHero from "@/components/gallery/gallery-hero"
import FilteredGallery from "@/components/gallery/filtered-gallery"
import ParallaxGallery from "@/components/gallery/parallax-gallery"
import FanArt from "@/components/gallery/fan-art"
import SocialHighlights from "@/components/gallery/social-highlights"
import UploadFanPhoto from "@/components/gallery/upload-fan-photo"

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-20">
        <GalleryHero />
        <FilteredGallery />
        <ParallaxGallery />
        <FanArt />
        <SocialHighlights />
        <UploadFanPhoto />
      </div>
      <Footer />
    </main>
  )
}
