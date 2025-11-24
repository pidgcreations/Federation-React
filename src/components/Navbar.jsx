import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeMobile = () => setMobileOpen(false);

  return (
    <header className="border-b border-[#2b2a2a] bg-[#050609]/90 backdrop-blur-sm sticky top-0 z-40">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo + Title */}
        <Link
          to="/"
          className="flex items-center gap-3"
          onClick={closeMobile}
        >
          <div className="w-9 h-9 rounded-full border border-[#f5d08a]/60 bg-black/70 flex items-center justify-center overflow-hidden">
            <img
              src="/Discord_Fed_Logo.png"
              className="w-7 h-7 opacity-90"
              alt="The Federation logo"
            />
          </div>
          <div className="hidden sm:block">
            <div className="text-lg font-semibold tracking-[0.18em] uppercase text-[#f5e9cf]">
              The Federation
            </div>
            <div className="text-[11px] text-[#b0a99a]">
              Cross-game PvX Gaming Community
            </div>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm text-[#d3cec1]">
          <Link to="/#about" className="hover:text-[#f7d48c]">
            About
          </Link>
          <Link to="/events" className="hover:text-[#f7d48c] transition-colors">
            Events
          </Link>
          <Link to="/guides" className="hover:text-[#f7d48c]">
            Guides
          </Link>
          <Link to="/content" className="hover:text-[#f7d48c]">
            Content
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center p-2 rounded-md border border-[#3a3027] text-[#e4ddcf] hover:bg-[#14100c] hover:border-[#f7d48c] focus:outline-none focus:ring-2 focus:ring-[#f7d48c]/70"
          aria-label="Toggle navigation menu"
          onClick={() => setMobileOpen((prev) => !prev)}
        >
          {/* Simple hamburger / X icon */}
          <span className="sr-only">Open main menu</span>
          <div className="space-y-[5px]">
            <span
              className={`block h-[2px] w-5 bg-current transition-transform ${
                mobileOpen ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-[2px] w-5 bg-current transition-opacity ${
                mobileOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`block h-[2px] w-5 bg-current transition-transform ${
                mobileOpen ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile nav panel */}
      {mobileOpen && (
        <div className="md:hidden border-t border-[#2b2a2a] bg-[#050609]/95 backdrop-blur-sm">
          <nav className="max-w-6xl mx-auto px-4 py-3 flex flex-col gap-3 text-sm text-[#d3cec1]">
            <Link
              to="/#about"
              className="hover:text-[#f7d48c]"
              onClick={closeMobile}
            >
              About
            </Link>
            <Link
              to="/events"
              className="hover:text-[#f7d48c]"
              onClick={closeMobile}
            >
              Events
            </Link>
            <Link
              to="/guides"
              className="hover:text-[#f7d48c]"
              onClick={closeMobile}
            >
              Guides
            </Link>
            <Link
              to="/content"
              className="hover:text-[#f7d48c]"
              onClick={closeMobile}
            >
              Content
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
