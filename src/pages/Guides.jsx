import React from "react";
import { Link } from "react-router-dom";

export default function Guides() {
  return (
    <main className="max-w-6xl mx-auto px-4">
      {/* PAGE HEADER */}
      <section className="py-10 border-t border-[#211c19]">
        <h1 className="text-3xl font-bold mb-2 text-[#f6e9d2]">Guides</h1>
        <p className="text-[#d9cfbf] text-base max-w-3xl mb-6">
          Class primers, crate tutorials, and PvX resources for members of The
          Federation. Use these guides to get up to speed on systems, roles, and
          end-game content.
        </p>

        {/* GRID OF GUIDE CARDS */}
        <div className="grid md:grid-cols-3 gap-5 text-sm">
          {/* Crate Tutorial */}
          <article className="rounded-xl border border-[#302823] bg-[#0b0908] p-4 flex flex-col justify-between">
            <div>
              <h2 className="font-semibold text-[#f6d48b] mb-2">
                Crate Tutorial
              </h2>
              <p className="text-[#b9afa2] mb-3">
                Learn how to create, move, and turn in crates for XP, node
                progress, currency, and materials.
              </p>
            </div>
            <Link
              to="/guides/crates"
              className="inline-block mt-2 text-center bg-[#f6d48b] text-black font-semibold px-4 py-2 rounded-lg shadow hover:bg-[#ffdf9c] transition-all text-xs uppercase tracking-[0.15em]"
            >
              Open Crate Guide
            </Link>
          </article>

          {/* Classes */}
          <article className="rounded-xl border border-[#302823] bg-[#0b0908] p-4 flex flex-col justify-between">
            <div>
              <h2 className="font-semibold text-[#f6d48b] mb-2">Classes</h2>
              <p className="text-[#b9afa2] mb-3">
                Overviews and future builds for all primary archetypes: Bard,
                Cleric, Fighter, Mage, Ranger, Rogue, Summoner, and Tank.
              </p>
            </div>
            <Link
              to="/guides/classes"
              className="inline-block mt-2 text-center bg-[#f6d48b] text-black font-semibold px-4 py-2 rounded-lg shadow hover:bg-[#ffdf9c] transition-all text-xs uppercase tracking-[0.15em]"
            >
              Open Class Guides
            </Link>
          </article>

          {/* Artisan */}
          <article className="rounded-xl border border-[#302823] bg-[#0b0908] p-4 flex flex-col justify-between">
            <div>
              <h2 className="font-semibold text-[#f6d48b] mb-2">Artisan</h2>
              <p className="text-[#b9afa2] mb-3">
                Crafting, processing, and economic gameplay across the node
                network. (Coming soon)
              </p>
            </div>
            <button
              type="button"
              disabled
              aria-disabled="true"
              className="inline-block mt-2 text-center bg-[#27231f] text-[#e2d7c2] font-semibold px-4 py-2 rounded-lg border border-[#3a3029] text-xs uppercase tracking-[0.15em] cursor-not-allowed opacity-60"
            >
              Coming Soon
            </button>
          </article>

          {/* Gathering */}
          <article className="rounded-xl border border-[#302823] bg-[#0b0908] p-4 flex flex-col justify-between">
            <div>
              <h2 className="font-semibold text-[#f6d48b] mb-2">Gathering</h2>
              <p className="text-[#b9afa2] mb-3">
                Routes, tools, and priorities for resource-focused players.
                (Coming soon)
              </p>
            </div>
            <button
              type="button"
              disabled
              aria-disabled="true"
              className="inline-block mt-2 text-center bg-[#27231f] text-[#e2d7c2] font-semibold px-4 py-2 rounded-lg border border-[#3a3029] text-xs uppercase tracking-[0.15em] cursor-not-allowed opacity-60"
            >
              Coming Soon
            </button>
          </article>

          {/* Raids */}
          <article className="rounded-xl border border-[#302823] bg-[#0b0908] p-4 flex flex-col justify-between">
            <div>
              <h2 className="font-semibold text-[#f6d48b] mb-2">Raids</h2>
              <p className="text-[#b9afa2] mb-3">
                Raid prep, role expectations, and progression mindset. (Coming
                soon)
              </p>
            </div>
            <button
              type="button"
              disabled
              aria-disabled="true"
              className="inline-block mt-2 text-center bg-[#27231f] text-[#e2d7c2] font-semibold px-4 py-2 rounded-lg border border-[#3a3029] text-xs uppercase tracking-[0.15em] cursor-not-allowed opacity-60"
            >
              Coming Soon
            </button>
          </article>

          {/* Quests */}
          <article className="rounded-xl border border-[#302823] bg-[#0b0908] p-4 flex flex-col justify-between">
            <div>
              <h2 className="font-semibold text-[#f6d48b] mb-2">Quests</h2>
              <p className="text-[#b9afa2] mb-3">
                Story progression, side-quest value, and what to never skip.
                (Coming soon)
              </p>
            </div>
            <button
              type="button"
              disabled
              aria-disabled="true"
              className="inline-block mt-2 text-center bg-[#27231f] text-[#e2d7c2] font-semibold px-4 py-2 rounded-lg border border-[#3a3029] text-xs uppercase tracking-[0.15em] cursor-not-allowed opacity-60"
            >
              Coming Soon
            </button>
          </article>
        </div>
      </section>
    </main>
  );
}
