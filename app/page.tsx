"use client"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import HeroSection from "@/components/home/hero-section"
import AboutTeam from "@/components/home/about-team"
import PlayerSpotlight from "@/components/home/player-spotlight"
import UpcomingMatches from "@/components/home/upcoming-matches"
import RecentHighlights from "@/components/home/recent-highlights"
import Achievements from "@/components/home/achievements"
import JoinCTA from "@/components/home/join-cta"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutTeam />
      <PlayerSpotlight />
      <UpcomingMatches />
      <RecentHighlights />
      <Achievements />
      <JoinCTA />
      <Footer />
    </main>
  )
}
