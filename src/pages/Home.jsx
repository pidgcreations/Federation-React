import React from "react";

export default function Home() {
  return (
    <>
      {/* HERO IMAGE */}
      <div className="w-full">
        <img
          src="/Federation_Banner.gif"
          className="w-full h-auto object-cover shadow-lg"
          alt="The Federation Hero Banner"
        />
      </div>

      <main className="max-w-6xl mx-auto px-4 pb-12">

        {/* WHO WE ARE */}
        <section id="about" className="py-10 border-t border-[#211c19]">
          <h2 className="text-2xl font-bold mb-3 text-[#f6e9d2]">Who We Are</h2>

          <p className="text-[#d9cfbf] text-sm md:text-base max-w-3xl mb-4">
            The Federation is a premier PvX guild recruiting mature, team-focused
            players for Ashes of Creation and beyond. We welcome adults of all skill
            levels and playstyles — from casual gamers to competitive veterans —
            united by a team-first mindset.
          </p>

          <p className="text-[#d9cfbf] text-sm md:text-base max-w-3xl mb-4">
            We actively participate in economy and node development, PvP scrims and
            large-scale wars, as well as PvE raiding and world bosses. Our structure
            supports both competitive and casual players alike, making room for
            fighters, gatherers, crafters, and everyone in between.
          </p>

          <p className="text-[#d9cfbf] text-sm md:text-base max-w-3xl mb-6">
            With a mature, drama-free culture built on respect and collaboration,
            The Federation is led by experienced officers guiding large-scale MMO
            success across multiple titles.
          </p>

          <div className="mt-6 grid md:grid-cols-3 gap-5 text-sm">
            <div className="rounded-xl border border-[#302823] bg-[#0b0908] p-4">
              <h3 className="font-semibold mb-2 text-[#f6d48b]">
                Mature, Team-Focused Community
              </h3>
              <p className="text-[#b9afa2]">
                A respectful, drama-free environment built for adults who value
                teamwork, communication, and a positive, growth-oriented culture.
              </p>
            </div>

            <div className="rounded-xl border border-[#302823] bg-[#0b0908] p-4">
              <h3 className="font-semibold mb-2 text-[#f6d48b]">
                Support for All Playstyles
              </h3>
              <p className="text-[#b9afa2]">
                Whether you're a PvP warrior, PvE raider, crafter, or gatherer —
                the Federation offers structure and opportunities tailored to your
                playstyle.
              </p>
            </div>

            <div className="rounded-xl border border-[#302823] bg-[#0b0908] p-4">
              <h3 className="font-semibold mb-2 text-[#f6d48b]">
                Experienced Leadership
              </h3>
              <p className="text-[#b9afa2]">
                Led by veteran MMO strategists with a history of large-scale success
                — including siege victories and coordinated multi-guild operations —
                The Federation thrives through organization, clarity, and player-first
                leadership.
              </p>
            </div>
          </div>
        </section>

        {/* GAMES & FOCUS */}
        <section id="games" className="py-10 border-t border-[#211c19]">
          <h2 className="text-2xl font-bold mb-3 text-[#f6e9d2]">Games & Focus</h2>

          <p className="text-[#d9cfbf] text-sm md:text-base max-w-3xl mb-6">
            The Federation is a cross-game community with room for fighters, builders,
            and everything in between. We coordinate large-scale PvP, progress PvE,
            organize gathering operations, and support crafters who take pride in being
            the best at what they do.
          </p>

          <div className="grid md:grid-cols-3 gap-5 text-sm">
            <div className="rounded-xl border border-[#392f28] bg-[#0d0a08] p-4">
              <h3 className="font-semibold mb-1 text-[#f2c46b]">
                Primary Focus Titles
              </h3>
              <ul className="text-[#b9afa2] space-y-1 list-disc list-inside">
                <li>Ashes of Creation</li>
                <li>World of Warcraft</li>
                <li>Old School RuneScape (OSRS)</li>
                <li>Other side games and community events</li>
              </ul>
            </div>

            <div className="rounded-xl border border-[#392f28] bg-[#0d0a08] p-4">
              <h3 className="font-semibold mb-1 text-[#f2c46b]">
                What We Prioritize
              </h3>
              <ul className="text-[#b9afa2] space-y-1 list-disc list-inside">
                <li>Large-scale PvP coordination</li>
                <li>High-execution PvE progression</li>
                <li>Strong, concise voice comms</li>
                <li>Crafting / Profession mastery</li>
                <li>Gathering mains</li>
              </ul>
            </div>

            <div className="rounded-xl border border-[#392f28] bg-[#0d0a08] p-4">
              <h3 className="font-semibold mb-1 text-[#f2c46b]">
                Who Fits Here
              </h3>
              <ul className="text-[#b9afa2] space-y-1 list-disc list-inside">
                <li>Players who care about playing well and supporting their team</li>
                <li>People who can handle feedback like adults</li>
                <li>Members who bring reliability and good energy</li>
              </ul>
            </div>
          </div>
        </section>

      </main>
    </>
  );
}
