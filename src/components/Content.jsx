// src/pages/Content.jsx
import React from "react";
export default function Content() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-10 space-y-8">
      <header>
        <h1 className="text-3xl font-bold text-[#f6e9d2] mb-2">
          Content Hub
        </h1>
        <p className="text-sm md:text-base text-[#c9c3b6] max-w-3xl">
          Streams, VODs, highlights, and community projects created by members
          of The Federation. This is the place to showcase what our players are
          doing in and out of game.
        </p>
      </header>

      <section className="grid md:grid-cols-2 gap-6 text-sm">
        <div className="rounded-xl border border-[#392f28] bg-[#0d0a08] p-4">
          <h2 className="text-lg font-semibold text-[#f6e9d2] mb-2">
            Featured Streams
          </h2>
          <p className="text-[#c9c3b6] mb-2">
            Coming soon: embedded streams and links to Federation members who
            regularly broadcast PvX content, crate runs, and large-scale fights.
          </p>
        </div>

        <div className="rounded-xl border border-[#392f28] bg-[#0d0a08] p-4">
          <h2 className="text-lg font-semibold text-[#f6e9d2] mb-2">
            Highlights &amp; Clips
          </h2>
          <p className="text-[#c9c3b6] mb-2">
            Space reserved for short-form highlights — siege moments, clutch
            saves, and community memes.
          </p>
        </div>

        <div className="rounded-xl border border-[#392f28] bg-[#0d0a08] p-4">
          <h2 className="text-lg font-semibold text-[#f6e9d2] mb-2">
            Community Projects
          </h2>
          <p className="text-[#c9c3b6]">
            Artwork, tools, and other projects created by Federation members.
            This section will grow as the community contributes more.
          </p>
        </div>

        <div className="rounded-xl border border-[#392f28] bg-[#0d0a08] p-4">
          <h2 className="text-lg font-semibold text-[#f6e9d2] mb-2">
            How to Get Featured
          </h2>
          <p className="text-[#c9c3b6]">
            Share your content links in the appropriate Discord channels and
            tag leadership if you&apos;d like to be featured on the site once
            this hub goes fully live.
          </p>
        </div>
      </section>
    </main>
  );
}
