import React from "react";
import { Link } from "react-router-dom";

export default function GuideClasses() {
  return (
    <main className="max-w-6xl mx-auto px-4">
      {/* PAGE HEADER / BREADCRUMB */}
      <section className="py-6 border-t border-[#211c19]">
        <Link
          to="/guides"
          className="text-xs uppercase tracking-[0.15em] text-[#b0a99a] hover:text-[#f6d48b]"
        >
          &larr; Back to Guides
        </Link>
      </section>

      <section className="pb-4 border-b border-[#211c19]">
        <h1 className="text-3xl font-bold mb-2 text-[#f6e9d2]">
          Class Guides
        </h1>
        <p className="text-[#d9cfbf] text-base max-w-3xl mb-4">
          A quick look at each primary archetype in our community. These
          sections will be expanded with builds, rotations, gearing tips, and
          role guidance as testing continues.
        </p>
        <p className="text-xs text-[#a09586]">
          Alphabetical list: Bard, Cleric, Fighter, Mage, Ranger, Rogue,
          Summoner, Tank.
        </p>
      </section>

      {/* CLASS GRID (ALPHABETICAL) */}
      <section className="py-8 text-sm">
        <div className="grid md:grid-cols-3 gap-5">
          {[
            {
              name: "Bard",
              desc: "Buffs, tempo control, and group utility for organized PvE and PvP. (Coming soon)",
            },
            {
              name: "Cleric",
              desc: "Core healing, mitigation tools, and raid-saving cooldowns. (Coming soon)",
            },
            {
              name: "Fighter",
              desc: "Gap closing, front-line pressure, and target control. (Coming soon)",
            },
            {
              name: "Mage",
              desc: "Burst windows, AoE control, and high-risk, high-reward damage. (Coming soon)",
            },
            {
              name: "Ranger",
              desc: "Ranged pressure, target calling, and battlefield vision. (Coming soon)",
            },
            {
              name: "Rogue",
              desc: "Flanks, picks, and disruption in both small-scale and mass PvP. (Coming soon)",
            },
            {
              name: "Summoner",
              desc: "Pet management, hybrid damage, and utility builds. (Coming soon)",
            },
            {
              name: "Tank",
              desc: "Threat control, positioning, and defensive tools to keep the raid alive. (Coming soon)",
            },
          ].map((cls) => (
            <article
              key={cls.name}
              className="rounded-xl border border-[#302823] bg-[#0b0908] p-4 flex flex-col justify-between"
            >
              <div>
                <h2 className="font-semibold text-[#f6d48b] mb-2">
                  {cls.name}
                </h2>
                <p className="text-[#b9afa2] mb-3">{cls.desc}</p>
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
          ))}
        </div>
      </section>
    </main>
  );
}
