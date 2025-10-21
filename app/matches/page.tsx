"use client"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import MatchSchedule from "@/components/matches/match-schedule"
import PastResults from "@/components/matches/past-results"
import MatchGallery from "@/components/matches/match-gallery"
import LiveScore from "@/components/matches/live-score"
import PointsTable from "@/components/matches/points-table"
import MatchLocation from "@/components/matches/match-location"
import BookTickets from "@/components/matches/book-tickets"
import CountdownTimer from "@/components/matches/countdown-timer"

export default function MatchesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-20">
        <MatchSchedule />
        <PastResults />
        <MatchGallery />
        <LiveScore />
        <PointsTable />
        <MatchLocation />
        <BookTickets />
        <CountdownTimer />
      </div>
      <Footer />
    </main>
  )
}
