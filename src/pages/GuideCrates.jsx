import React from "react";
import { Link } from "react-router-dom";

export default function GuideCrates() {
  return (
    <main className="max-w-6xl mx-auto px-4">
      {/* BREADCRUMB */}
      <section className="py-6 border-t border-[#211c19]">
        <Link
          to="/guides"
          className="text-xs uppercase tracking-[0.15em] text-[#b0a99a] hover:text-[#f6d48b]"
        >
          &larr; Back to Guides
        </Link>
      </section>

      {/* TITLE / INTRO */}
      <section className="pb-4 border-b border-[#211c19]">
        <h1 className="text-3xl font-bold mb-2 text-[#f6e9d2]">
          Crate Tutorial
        </h1>
        <p className="text-[#d9cfbf] text-base max-w-3xl mb-4">
          Crates are packed bundles of resources that you can move around the
          world. They’re used for node progression, reputation, XP, currency,
          and materials. This guide walks through how to create, move, and turn
          in crates efficiently.
        </p>

        <div className="rounded-xl border border-[#302823] bg-[#0b0908] p-4 text-sm text-[#c8bfb1]">
          <p className="mb-1">
            <span className="font-semibold text-[#f6d48b]">
              What crates are used for:
            </span>
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>Building and upgrading nodes</li>
            <li>Gaining node citizen reputation</li>
            <li>Earning character XP and gold</li>
            <li>Transporting materials between nodes and harbors</li>
          </ul>
          <p className="mt-3 text-[11px] text-[#a09586]">
            This is a web adaptation of The Federation’s Crate Guide, originally
            compiled by WumpusAmungus.
          </p>
        </div>
      </section>

      {/* CONSTRUCTION CRATES */}
      <section className="py-8 border-b border-[#211c19] text-sm">
        <h2 className="text-xl font-semibold mb-2 text-[#f6e9d2]">
          Construction Crates
        </h2>
        <p className="text-[#d9cfbf] max-w-3xl mb-4">
          Construction crates are used for node projects like leveling and
          building structures. Higher rarity materials don’t give extra
          benefits here, so use cheap/common materials unless you have a
          specific reason not to.
        </p>

        <h3 className="text-[13px] font-semibold tracking-[0.16em] uppercase text-[#f6d48b] mb-2">
          Where to pack construction crates
        </h3>
        <div className="grid md:grid-cols-2 gap-4 mb-4">
          <div className="rounded-xl border border-[#302823] bg-[#0b0908] p-4">
            <h4 className="font-semibold text-[#f6d48b] mb-1 text-sm">
              Riverlands
            </h4>
            <ul className="list-disc list-inside text-[#c8bfb1] space-y-1">
              <li>Agricultural Supply station west of Lionhold</li>
              <li>Woodshop east of Briarmoor Farm</li>
            </ul>
          </div>
          <div className="rounded-xl border border-[#302823] bg-[#0b0908] p-4">
            <h4 className="font-semibold text-[#f6d48b] mb-1 text-sm">
              Anvils
            </h4>
            <ul className="list-disc list-inside text-[#c8bfb1] space-y-1">
              <li>Crate packing stations at Bonfire</li>
              <li>Crate packing stations at Hammer Rest</li>
            </ul>
          </div>
        </div>

        <h3 className="text-[13px] font-semibold tracking-[0.16em] uppercase text-[#f6d48b] mb-2">
          Construction crate recipes
        </h3>
        <p className="text-[#d9cfbf] max-w-3xl mb-3">
          When you interact with a Crate Packing station, you’ll see multiple
          recipes. Each recipe uses a specific resource type and a fixed silver
          cost. At a high level:
        </p>

        <div className="overflow-x-auto rounded-xl border border-[#302823] bg-[#0b0908] mb-4">
          <table className="min-w-full text-left text-xs text-[#d9cfbf]">
            <thead className="bg-[#15100c] text-[#f2c46b]">
              <tr>
                <th className="px-3 py-2 font-semibold">Crate Recipe</th>
                <th className="px-3 py-2 font-semibold">Resource Type</th>
                <th className="px-3 py-2 font-semibold">
                  Example Requirement
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-[#302823]">
                <td className="px-3 py-2">
                  Mining / Lumberjacking / Herbalism / Hunting / Fishing
                </td>
                <td className="px-3 py-2">Unprocessed gathering materials</td>
                <td className="px-3 py-2">
                  Around 30 common raw resources
                </td>
              </tr>
              <tr className="border-t border-[#302823] bg-black/20">
                <td className="px-3 py-2">Alchemy / Cooking / Farming</td>
                <td className="px-3 py-2">Processed goods</td>
                <td className="px-3 py-2">Around 15 finished products</td>
              </tr>
              <tr className="border-t border-[#302823]">
                <td className="px-3 py-2">
                  Lumbermilling / Metalworking / Stonemasonry / Tanning /
                  Weaving
                </td>
                <td className="px-3 py-2">Processed crafting materials</td>
                <td className="px-3 py-2">Around 15 processed mats</td>
              </tr>
              <tr className="border-t border-[#302823] bg-black/20">
                <td className="px-3 py-2">Animal Husbandry</td>
                <td className="px-3 py-2">Trained creature</td>
                <td className="px-3 py-2">1 trained animal</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-[11px] text-[#a09586] mb-5">
          Exact numbers and costs can change with patches; always double-check
          in-game tooltips.
        </p>

        <h3 className="text-[13px] font-semibold tracking-[0.16em] uppercase text-[#f6d48b] mb-2">
          Carrying &amp; delivering construction crates
        </h3>
        <ul className="list-disc list-inside text-[#d9cfbf] space-y-2 max-w-3xl">
          <li>
            Finished crates equip into your dedicated{" "}
            <span className="font-semibold">crate slot</span>.
          </li>
          <li>
            While carrying a crate, your movement speed is halved (this also
            applies while mounted).
          </li>
          <li>
            Look for structures wrapped in red building cloth/canvas in the
            target node — those are active construction projects.
          </li>
          <li>
            Interact with the project:
            <ul className="list-disc list-inside ml-5 mt-1 space-y-1 text-[#c8bfb1]">
              <li>
                <span className="font-semibold">F</span> – deliver the crate (if
                the prompt is red, that project doesn’t accept your crate type).
              </li>
              <li>
                <span className="font-semibold">V</span> – view which crate
                types are needed and how far along the project is.
              </li>
            </ul>
          </li>
          <li>
            If there’s nothing to build, you can:
            <ul className="list-disc list-inside ml-5 mt-1 space-y-1 text-[#c8bfb1]">
              <li>
                Sell the crate to the Construction Crate Vendor near the node
                storage clerk, or
              </li>
              <li>
                Store it under the <span className="italic">Crates</span> tab in
                node storage.
              </li>
            </ul>
          </li>
        </ul>
      </section>

      {/* COMMODITY CRATES */}
      <section className="py-8 border-b border-[#211c19] text-sm">
        <h2 className="text-xl font-semibold mb-2 text-[#f6e9d2]">
          Commodity Crates
        </h2>
        <p className="text-[#d9cfbf] max-w-3xl mb-4">
          Commodity crates are meant to be moved between locations. Rewards
          scale with both distance and crate rarity. Different crate types use
          different currencies and pay out different rewards when turned in.
        </p>

        <div className="overflow-x-auto rounded-xl border border-[#302823] bg-[#0b0908] mb-5">
          <table className="min-w-full text-left text-xs text-[#d9cfbf]">
            <thead className="bg-[#15100c] text-[#f2c46b]">
              <tr>
                <th className="px-3 py-2 font-semibold">Crate Type</th>
                <th className="px-3 py-2 font-semibold">Currency to Craft</th>
                <th className="px-3 py-2 font-semibold">
                  Reward on Delivery
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-[#302823]">
                <td className="px-3 py-2">Market</td>
                <td className="px-3 py-2">Glint</td>
                <td className="px-3 py-2">Gold (distance + rarity)</td>
              </tr>
              <tr className="border-t border-[#302823] bg-black/20">
                <td className="px-3 py-2">Citizen</td>
                <td className="px-3 py-2">Scrip</td>
                <td className="px-3 py-2">Gold (distance + rarity)</td>
              </tr>
              <tr className="border-t border-[#302823]">
                <td className="px-3 py-2">Guild</td>
                <td className="px-3 py-2">Gold</td>
                <td className="px-3 py-2">Guild XP via Seals of Valor</td>
              </tr>
              <tr className="border-t border-[#302823] bg-black/20">
                <td className="px-3 py-2">Settlement</td>
                <td className="px-3 py-2">Glint</td>
                <td className="px-3 py-2">Scrip (distance + rarity)</td>
              </tr>
              <tr className="border-t border-[#302823]">
                <td className="px-3 py-2">Harbor</td>
                <td className="px-3 py-2">Glint</td>
                <td className="px-3 py-2">Materials (e.g., Verdant Flux)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-[13px] font-semibold tracking-[0.16em] uppercase text-[#f6d48b] mb-2">
          Where to craft commodity crates
        </h3>
        <ul className="list-disc list-inside text-[#d9cfbf] space-y-2 max-w-3xl mb-4">
          <li>
            Market, Citizen, Guild, and Settlement crates are crafted at their
            stations in the node settlement, often near or inside the Town Hall.
          </li>
          <li>
            Harbor crates are crafted at harbor stations and require
            harbor-specific certificates.
          </li>
          <li>
            All commodity crates need a{" "}
            <span className="font-semibold">
              location-specific commodity certificate
            </span>
            , bought with scrip from vendors in that node or harbor.
          </li>
        </ul>

        <h3 className="text-[13px] font-semibold tracking-[0.16em] uppercase text-[#f6d48b] mb-2">
          Basic recipe structure
        </h3>
        <p className="text-[#d9cfbf] max-w-3xl mb-2">
          A typical commodity crate recipe combines four components, themed to
          the biome where you craft it:
        </p>
        <ul className="list-disc list-inside text-[#d9cfbf] space-y-1 max-w-3xl mb-4">
          <li>Stones, metals, or gems from the local biome</li>
          <li>Wood or plants from that biome</li>
          <li>Fish or animal carcasses from that biome</li>
          <li>The correct commodity certificate for that location</li>
        </ul>

        <p className="text-[#c8bfb1] max-w-3xl mb-4">
          At the station, you can{" "}
          <span className="font-semibold">Shift + Left-click</span> a crate
          recipe to preview where you can sell it, how far those nodes are, and
          how much they’ll pay. Distance only updates when you cross a node
          border, not continuously.
        </p>

        <h3 className="text-[13px] font-semibold tracking-[0.16em] uppercase text-[#f6d48b] mb-2">
          Delivering commodity crates
        </h3>
        <ul className="list-disc list-inside text-[#d9cfbf] space-y-2 max-w-3xl">
          <li>
            Crates go in your crate slot and slow your movement speed, like
            construction crates.
          </li>
          <li>
            Travel to the listed destination and find the matching vendor type
            (Market, Citizen, Guild, etc.).
          </li>
          <li>
            Interact and use the{" "}
            <span className="font-semibold">Sell Crate</span> option to turn it
            in.
          </li>
          <li>
            You can store crates in node storage under the{" "}
            <span className="italic">Crates</span> tab if you need to wait.
          </li>
        </ul>
      </section>

      {/* EXTRA / LAWLESS & TIPS */}
      <section className="py-8 text-sm">
        <h2 className="text-xl font-semibold mb-2 text-[#f6e9d2]">
          Lawless Packages &amp; Extra Tips
        </h2>

        <div className="rounded-xl border border-[#302823] bg-[#0b0908] p-4 mb-5">
          <h3 className="text-[13px] font-semibold tracking-[0.16em] uppercase text-[#f6d48b] mb-2">
            Lawless packages
          </h3>
          <p className="text-[#d9cfbf] mb-3">
            Some vendors (for example, smugglers at certain trading posts or
            harbor assistants) sell lawless packages that can be converted into
            special crates and delivered to lawless outposts for material
            rewards. Exact locations and requirements may change as the game is
            updated, so treat these as flexible opportunities rather than fixed
            routes.
          </p>
        </div>

        <h3 className="text-[13px] font-semibold tracking-[0.16em] uppercase text-[#f6d48b] mb-3">
          General crate tips
        </h3>
        <ul className="list-disc list-inside text-[#d9cfbf] space-y-2 max-w-3xl">
          <li>
            Nodes that reach level 3 can build a Construction House, adding
            closer crate packing options in some regions.
          </li>
          <li>
            The crafter doesn’t have to be the deliverer — you can drop crates
            for other players to move.
          </li>
          <li>
            If you die or log out while carrying a crate, it drops and can be
            picked up by anyone nearby.
          </li>
          <li>
            Crate packing counts as carpentry; leveling it can reduce costs on
            higher-rarity crates.
          </li>
          <li>
            Crates each use a 1×1 inventory slot, but caravans and ships can
            carry multiple based on their layout.
          </li>
          <li>
            Crates don’t slow caravans/ships themselves, but the pilot carrying
            a crate is still slowed.
          </li>
          <li>
            You can’t drop a crate while standing on a ship; you must
            disembark first.
          </li>
          <li>
            You gain character XP from delivering construction crates and from
            crafting commodity crates. Delivering commodity crates pays rewards
            but doesn’t add extra crafting XP.
          </li>
          <li>
            Scrip isn’t node-locked, but once you buy a certificate it only
            works in the node/harbor it was purchased from.
          </li>
          <li>
            Crate rarity scales with the average rarity of the four ingredients.
            Some components (like high-rarity fish) can gate how high you can
            push the crate tier.
          </li>
          <li>
            Roughly sixteen commodity crates are enough to reach the “Commoner”
            reputation rank for voting, assuming you don’t earn reputation from
            other activities.
          </li>
        </ul>
      </section>
    </main>
  );
}
