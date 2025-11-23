// src/pages/GuideClasses.jsx
import React from "react";
export default function GuideClasses() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-10 space-y-8">
      <header>
        <h1 className="text-3xl font-bold text-[#f6e9d2] mb-2">
          Class &amp; Role Guides
        </h1>
        <p className="text-sm md:text-base text-[#c9c3b6] max-w-3xl">
          A summary of how The Federation approaches roles and responsibilities
          in group content. More detailed, class-specific breakdowns will live
          here as the games we support evolve.
        </p>
      </header>

      <section className="grid md:grid-cols-3 gap-5 text-sm">
        <div className="rounded-xl border border-[#392f28] bg-[#0d0a08] p-4">
          <h2 className="text-base font-semibold text-[#f6e9d2] mb-2">
            Frontline &amp; Bruisers
          </h2>
          <p className="text-[#c9c3b6]">
            Responsible for anchoring the front line, creating space, and
            protecting our damage dealers and supports. Clean comms and
            discipline are critical.
          </p>
        </div>

        <div className="rounded-xl border border-[#392f28] bg-[#0d0a08] p-4">
          <h2 className="text-base font-semibold text-[#f6e9d2] mb-2">
            Damage Dealers
          </h2>
          <p className="text-[#c9c3b6]">
            Focused on executing priority targets, following kill calls, and
            maximizing output without breaking formation or overextending.
          </p>
        </div>

        <div className="rounded-xl border border-[#392f28] bg-[#0d0a08] p-4">
          <h2 className="text-base font-semibold text-[#f6e9d2] mb-2">
            Supports &amp; Utility
          </h2>
          <p className="text-[#c9c3b6]">
            Healers, buffers, and control specialists who keep the team alive,
            stabilize pushes, and enable turnarounds in bad fights.
          </p>
        </div>
      </section>

      <section className="rounded-xl border border-[#392f28] bg-[#0d0a08] p-5 text-sm">
        <h2 className="text-lg font-semibold text-[#f6e9d2] mb-2">
          Expectations in Organized Content
        </h2>
        <ul className="list-disc list-inside text-[#c9c3b6] space-y-1">
          <li>Be in the correct voice channel before content begins.</li>
          <li>Listen first, speak with intent, and respect shot-caller decisions.</li>
          <li>Show up with appropriate gear, consumables, and builds.</li>
          <li>Be willing to swap roles or builds when the group needs it.</li>
        </ul>
      </section>
    </main>
  );
}
