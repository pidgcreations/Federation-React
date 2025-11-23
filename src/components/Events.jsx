// src/pages/Events.jsx
import React from "react";
export default function Events() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-10 space-y-10">
      {/* Header */}
      <section>
        <h1 className="text-3xl font-bold text-[#f6e9d2] mb-2">
          Upcoming Events
        </h1>
        <p className="text-sm md:text-base text-[#c9c3b6] max-w-2xl">
          Guild events, PvP scrims, raids, community nights, and more. Times are
          shown in your local time zone unless noted otherwise.
        </p>
      </section>

      {/* Calendar placeholder – will be upgraded to full clickable calendar */}
      <section className="border border-[#392f28] bg-[#0d0a08] rounded-xl p-4">
        <h2 className="text-lg font-semibold text-[#f6e9d2] mb-2">
          Calendar View
        </h2>
        <p className="text-sm text-[#c9c3b6] mb-4">
          This will be a full clickable calendar (React calendar component)
          showing Federation events. For now, it&apos;s a placeholder while we
          wire up the library.
        </p>
        <div className="h-64 md:h-80 flex items-center justify-center border border-dashed border-[#4a3b31] rounded-lg text-xs md:text-sm text-[#9f9384]">
          Calendar component coming next step…
        </div>
      </section>

      {/* Upcoming events list */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-[#f6e9d2]">
          Featured Upcoming Events
        </h2>

        <article className="rounded-xl border border-[#392f28] bg-[#0d0a08] p-4 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <div>
            <h3 className="text-lg font-semibold text-[#f6e9d2]">
              Node War Prep & Strategy
            </h3>
            <p className="text-xs uppercase tracking-wide text-[#f2c46b]">
              Ashes of Creation • PvP / Strategy
            </p>
            <p className="text-xs text-[#a89f93] mt-1">
              Hosted by: FED Onyx Leadership
            </p>
            <p className="text-sm text-[#c9c3b6] mt-2">
              Reviewing node politics, scouting reports, and assignments for the
              upcoming siege cycle.
            </p>
          </div>
          <div className="text-right text-xs md:text-sm text-[#d3cec1]">
            <p className="font-semibold text-[#f6d48b]">Friday • 9:00 PM</p>
            <p>Voice: Onyx War Room</p>
          </div>
        </article>

        <article className="rounded-xl border border-[#392f28] bg-[#0d0a08] p-4 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <div>
            <h3 className="text-lg font-semibold text-[#f6e9d2]">
              Guild Dungeon Night
            </h3>
            <p className="text-xs uppercase tracking-wide text-[#f2c46b]">
              World of Warcraft • PvE
            </p>
            <p className="text-xs text-[#a89f93] mt-1">
              Hosted by: Raid & PvE Team
            </p>
            <p className="text-sm text-[#c9c3b6] mt-2">
              Organized dungeon runs, key pushing, and gearing for Federation
              members of all experience levels.
            </p>
          </div>
          <div className="text-right text-xs md:text-sm text-[#d3cec1]">
            <p className="font-semibold text-[#f6d48b]">Saturday • 8:00 PM</p>
            <p>Voice: PvE Comms</p>
          </div>
        </article>
      </section>
    </main>
  );
}
