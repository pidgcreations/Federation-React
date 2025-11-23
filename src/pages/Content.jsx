// src/pages/Content.jsx
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

        {/* COMING SOON PANEL */}
        <div className="grid md:grid-cols-3 gap-5 text-sm">
          {/* Main “coming soon” description */}
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
                runs, and funny wipes.
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
                activities, and cross-game nights.
              </li>
            </ul>
          </article>

          {/* Side cards */}
          <article className="rounded-2xl border border-[#302823] bg-[#0b0908] p-4 flex flex-col justify-between">
            <div>
              <h3 className="font-semibold text-[#f6d48b] mb-2">
                Featured Videos
              </h3>
              <p className="text-[#b9afa2]">
                A curated selection of raid clears, PvP highlights, and
                community moments from Federation members.
              </p>
            </div>
            <p className="mt-3 text-[11px] text-[#a09586]">
              Once submissions go live, officers will rotate standout clips
              onto this page.
            </p>
          </article>

          <article className="rounded-2xl border border-[#302823] bg-[#0b0908] p-4 flex flex-col justify-between">
            <div>
              <h3 className="font-semibold text-[#f6d48b] mb-2">
                Streamers &amp; Creators
              </h3>
              <p className="text-[#b9afa2]">
                A future directory of Federation-affiliated creators so members
                can easily find and support one another.
              </p>
            </div>
            <p className="mt-3 text-[11px] text-[#a09586]">
              If you stream or produce videos, keep an eye here for how to get
              listed.
            </p>
          </article>
        </div>
      </section>

      {/* DISCORD INVITE (matches bottom of original content.html) */}
      <section className="py-12 border-t border-[#211c19] text-center">
        <h2 className="text-2xl font-bold mb-4 text-[#f6e9d2]">
          Join The Federation Discord
        </h2>
        <p className="text-[#c9c3b6] max-w-xl mx-auto mb-6 text-sm md:text-base">
          Hop into Discord to share clips, coordinate groups, and stay in the
          loop on upcoming events and new content features.
        </p>
        <a
          href="https://discord.gg/thefederation"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[#f6d48b] text-black font-semibold px-8 py-3 rounded-lg shadow-lg hover:bg-[#ffdf9c] transition-all"
        >
          Join Our Discord
        </a>
      </section>
    </main>
  );
}
