// src/pages/Events.jsx
import React, { useEffect, useState, useMemo } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import { format, parse, startOfWeek, getDay } from "date-fns";
import "react-big-calendar/lib/css/react-big-calendar.css";

// date-fns localizer for react-big-calendar
const locales = {}; // use browser default locale

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek: () => startOfWeek(new Date(), { weekStartsOn: 0 }),
  getDay,
  locales,
});

export default function Events() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch events from Netlify → Discord
  useEffect(() => {
    async function loadEvents() {
      setLoading(true);
      setError("");

      try {
        const res = await fetch("/.netlify/functions/discord-events");
        if (!res.ok) {
          throw new Error(`HTTP ${res.status}`);
        }

        const data = await res.json();

        // Map Discord scheduled events → calendar events
        const mapped = (Array.isArray(data) ? data : []).map((evt) => {
          const start = evt.scheduled_start_time
            ? new Date(evt.scheduled_start_time)
            : new Date();

          const end = evt.scheduled_end_time
            ? new Date(evt.scheduled_end_time)
            : new Date(start.getTime() + 60 * 60 * 1000); // default 1h

          return {
            id: evt.id,
            title: evt.name || "Guild Event",
            start,
            end,
            allDay: false,
            description: evt.description || "",
            location:
              (evt.entity_metadata && evt.entity_metadata.location) ||
              evt.location ||
              "",
          };
        });

        // Keep only upcoming events
        const now = new Date();
        const upcoming = mapped
          .filter((e) => e.start >= now)
          .sort((a, b) => a.start - b.start);

        setEvents(upcoming);
      } catch (err) {
        console.error("Failed to load Discord events:", err);
        setError("Failed to load events from Discord.");
        setEvents([]);
      } finally {
        setLoading(false);
      }
    }

    loadEvents();
  }, []);

  // First few events for the list view
  const featuredEvents = useMemo(() => events.slice(0, 3), [events]);

  return (
    <main className="max-w-6xl mx-auto px-4 py-10 space-y-10">
      {/* Header */}
      <section>
        <h1 className="text-3xl font-bold text-[#f6e9d2] mb-2">
          Upcoming Events
        </h1>
        <p className="text-sm md:text-base text-[#c9c3b6] max-w-2xl">
          Guild events, PvP scrims, raids, community nights, and more. Times are
          shown in your local time zone.
        </p>
      </section>

      {/* Calendar */}
      <section className="border border-[#392f28] bg-[#0d0a08] rounded-xl p-4">
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-lg font-semibold text-[#f6e9d2]">
            Calendar View
          </h2>
          {loading && (
            <span className="text-xs text-[#f6d48b]">
              Loading events from Discord…
            </span>
          )}
          {!loading && error && (
            <span className="text-xs text-red-300">{error}</span>
          )}
        </div>

        <div className="bg-[#050609] rounded-lg p-2">
          <Calendar
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
            style={{ height: 500 }}
          />
        </div>

        <p className="text-xs text-[#9f9384] mt-2">
          Click or hover events to see details in the calendar tooltips. Event
          data is synced from the Federation Discord scheduled events.
        </p>
      </section>

      {/* Featured list */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-[#f6e9d2]">
          Featured Upcoming Events
        </h2>

        {!loading && !error && featuredEvents.length === 0 && (
          <p className="text-sm text-[#c9c3b6]">
            No upcoming events are currently scheduled. Check back soon or join
            the Discord to see what&apos;s being planned.
          </p>
        )}

        {featuredEvents.map((evt) => (
          <article
            key={evt.id}
            className="rounded-xl border border-[#392f28] bg-[#0d0a08] p-4 flex flex-col md:flex-row md:items-center md:justify-between gap-3"
          >
            <div>
              <h3 className="text-lg font-semibold text-[#f6e9d2]">
                {evt.title}
              </h3>
              <p className="text-xs uppercase tracking-wide text-[#f2c46b]">
                Federation Event
              </p>
              {evt.location && (
                <p className="text-xs text-[#a89f93] mt-1">
                  Location: {evt.location}
                </p>
              )}
              {evt.description && (
                <p className="text-sm text-[#c9c3b6] mt-2">
                  {evt.description}
                </p>
              )}
            </div>
            <div className="text-right text-xs md:text-sm text-[#d3cec1]">
              <p className="font-semibold text-[#f6d48b]">
                {format(evt.start, "EEE • MMM d, p")}
              </p>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
