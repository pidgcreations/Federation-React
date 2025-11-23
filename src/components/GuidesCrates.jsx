// src/pages/GuideCrates.jsx
import React from "react";
export default function GuideCrates() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-10 space-y-8">
      <header>
        <h1 className="text-3xl font-bold text-[#f6e9d2] mb-2">
          Crates &amp; Logistics Guide
        </h1>
        <p className="text-sm md:text-base text-[#c9c3b6] max-w-3xl">
          A high-level overview of how the Federation handles crate runs,
          logistics planning, and support for large-scale operations.
        </p>
      </header>

      <section className="rounded-xl border border-[#392f28] bg-[#0d0a08] p-5 text-sm space-y-3">
        <h2 className="text-lg font-semibold text-[#f6e9d2] mb-1">
          Role of Crates in The Federation
        </h2>
        <p className="text-[#c9c3b6]">
          Crates fuel the Federation&apos;s war machine. From siege prep to
          long campaigns, coordinated crate runs keep materials, consumables,
          and gear flowing to the players who need them most.
        </p>
        <p className="text-[#c9c3b6]">
          Dedicated logistics players work closely with gatherers, crafters,
          and FED Onyx leadership to time crate runs around major operations.
        </p>
      </section>

      <section className="grid md:grid-cols-2 gap-5 text-sm">
        <div className="rounded-xl border border-[#392f28] bg-[#0d0a08] p-4">
          <h3 className="text-base font-semibold text-[#f6e9d2] mb-2">
            Basic Crate Run Structure
          </h3>
          <ul className="list-disc list-inside text-[#c9c3b6] space-y-1">
            <li>Route planning and risk assessment</li>
            <li>Assigning haulers, scouts, and escorts</li>
            <li>Coordinating timings with other guild events</li>
            <li>Reporting results and stock levels in Discord</li>
          </ul>
        </div>

        <div className="rounded-xl border border-[#392f28] bg-[#0d0a08] p-4">
          <h3 className="text-base font-semibold text-[#f6e9d2] mb-2">
            Expectations for Participants
          </h3>
          <ul className="list-disc list-inside text-[#c9c3b6] space-y-1">
            <li>Arrive on time and in appropriate gear</li>
            <li>Stay in assigned comms channels</li>
            <li>Follow convoy leader instructions</li>
            <li>Be prepared to pivot if the situation changes</li>
          </ul>
        </div>
      </section>

      <section className="rounded-xl border border-[#392f28] bg-[#0d0a08] p-5 text-sm">
        <h2 className="text-lg font-semibold text-[#f6e9d2] mb-2">
          Getting Involved
        </h2>
        <p className="text-[#c9c3b6]">
          If you&apos;re interested in running crates or helping with logistics,
          ping the logistics or leadership roles in Discord. We&apos;re always
          looking for reliable players who enjoy planning, coordination, and
          keeping the Federation supplied.
        </p>
      </section>
    </main>
  );
}
