import React from "react";

export default function AshesMap() {
  // Dynamic height using CSS calc + min:
  // - calc(100vh - 220px): fills most of the viewport, leaving space for header/padding
  // - min(..., 1000px): don't let it get taller than 1000px on huge screens
  const mapHeight = "min(1000px, calc(100vh - 220px))";

  return (
    <main className="max-w-6xl mx-auto px-4 py-6 md:py-10 space-y-6 md:space-y-8">
      <section>
        <h1 className="text-3xl font-bold text-[#f6e9d2] mb-2">
          Ashes of Creation Map
        </h1>
        <p className="text-sm md:text-base text-[#c9c3b6] max-w-2xl">
          This interactive map is provided by AshesCodex.com. Zoom and pan to
          explore the world of Verra.
        </p>
      </section>

      <section className="border border-[#392f28] bg-[#0d0a08] rounded-xl p-3">
        <div
          className="bg-[#050609] rounded-lg overflow-hidden"
          style={{ height: mapHeight }}
        >
          <iframe
            src="https://ashescodex.com/map"
            title="Ashes of Creation Interactive Map"
            className="w-full h-full"
            style={{ border: "none" }}
          />
        </div>

        <p className="text-xs text-[#9f9384] mt-2">
          Map data &copy; AshesCodex.com – used via direct embedding. If it
          fails to load, their site may block embedding in iframes.
        </p>
      </section>
    </main>
  );
}
