import React from "react";

export default function Content() {
  return (
    <main className="max-w-6xl mx-auto px-4">
      {/* PAGE HEADER */}
      <section className="py-10 border-t border-[#211c19]">
        <h1 className="text-3xl font-bold mb-2 text-[#f6e9d2]">Content Hub</h1>
        <p className="text-[#d9cfbf] text-base max-w-3xl mb-6">
          Soon, members of The Federation will be able to submit their own
          content to be featured here — from epic raid clears and clutch PvP
          moments to quest highlights and community events.
        </p>

        <div className="grid md:grid-cols-3 gap-5 text-sm">
          {/* Main coming-soon panel */}
          <article className="md:col-span-2 rounded-2xl border border-[#302823] bg-[#0b0908] p-5">
            <h2 className="font-semibold text-[#f6d48b] mb-2 text-lg">
              Player Content Submissions Coming Soon
            </h2>
            <p className="text-[#c8bfb1] mb-4">
              We’re building a system where Federation members can submit their
              videos and VODs to be showcased on this page. Whether you’re into
              sweaty PvP, clean raid execution, or chill questing and
              exploration, we want to highlight what{" "}
              <span className="font-semibold">you</span> are doing in game.
            </p>
            <ul className="list-disc list-inside space-y-2 text-[#d9cfbf]">
              <li>
                <span className="font-semibold">Raids:</span> first kills, clean
                runs, funny wipes.
              </li>
              <li>
                <span className="font-semibold">PvP:</span> arenas, sieges, node
                wars, duels, and montages.
              </li>
              <li>
                <span className="font-semibold">Quests:</span> story moments,
                discoveries, and memorable NPC encounters.
              </li>
              <li>
                <span className="font-semibold">Community:</span> events, guild
                activities, and crossover game nights.
              </li>
            </
