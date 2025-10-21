"use client"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import TeamIntro from "@/components/team/team-intro"
import PlayerGrid from "@/components/team/player-grid"
import CaptainProfile from "@/components/team/captain-profile"
import TeamStaff from "@/components/team/team-staff"
import TrainingGallery from "@/components/team/training-gallery"
import CaptainQuote from "@/components/team/captain-quote"
import BehindScenes from "@/components/team/behind-scenes"
import TeamSpirit from "@/components/team/team-spirit"

export default function TeamPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-20">
        <TeamIntro />
        <PlayerGrid />
        <CaptainProfile />
        <TeamStaff />
        <TrainingGallery />
        <CaptainQuote />
        <BehindScenes />
        <TeamSpirit />
      </div>
      <Footer />
    </main>
  )
}
