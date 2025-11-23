// src/pages/Guides.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function Guides() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-10">
      <section className="mb-8">
        <h1 className="text-3xl font-bold text-[#f6e9d2] mb-2">Guides</h1>
        <p className="text-sm md:text-base text-[#c9c3b6] max-w-3xl">
          Federation-written guides to help members hit the ground running —
          from class fundamentals to crate routes and economic optimization.
        </p>
      </section>

      <section className="grid md:grid-cols-2 gap-6 text-sm">
        <Link
          to="/guides/classes"
          className="block rounded-xl border border-[#392f28] bg-[#0d0a08] p-4 hover:border-[#f6d48b] transition-colors"
        >
          <h2 className="text-lg font-semibold text-[#f6e9d2] mb-2">
            Class &amp; Role Guides
          </h2>
          <p className="text-[#c9c3b6]">
            Learn the fundamentals of your class, role responsibilities in
            group content, and how to contribute effectively in Federation
            operations.
          </p>
        </Link>

        <Link
          to="/guides/crates"
          className="block rounded-xl border border-[#392f28] bg-[#0d0a08] p-4 hover:border-[#f6d48b] transition-colors"
        >
          <h2 className="text-lg font-semibold text-[#f6e9d2] mb-2">
            Crates &amp; Logistics
          </h2>
          <p className="text-[#c9c3b6]">
            Step-by-step breakdowns for crate routes, logistics planning, and
            how to keep the Federation supplied during long campaigns.
          </p>
        </Link>

        <div className="rounded-xl border border-[#392f28] bg-[#0d0a08] p-4">
          <h2 className="text-lg font-semibold text-[#f6e9d2] mb-2">
            Economy &amp; Crafting (Coming Soon)
          </h2>
          <p className="text-[#c9c3b6]">
            Future guides covering crafting specialization, market strategies,
            and how gatherers &amp; crafters tie into Federation goals.
          </p>
        </div>

        <div className="rounded-xl border border-[#392f28] bg-[#0d0a08] p-4">
          <h2 className="text-lg font-semibold text-[#f6e9d2] mb-2">
            New Member Onboarding (Coming Soon)
          </h2>
          <p className="text-[#c9c3b6]">
            Orientation-style resources for brand-new recruits — what to expect,
            how to get set up, and where to plug in.
          </p>
        </div>
      </section>
    </main>
  );
}
