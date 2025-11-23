// src/pages/Events.jsx
import React, { useEffect, useState, useMemo } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import { format, parse, startOfWeek, getDay } from "date-fns";
import "react-big-calendar/lib/css/react-big-calendar.css";

// ---------- Helpers ----------

// Clean Discord markup (mentions, emoji, countdowns, IDs)
function cleanDiscordText(str = "") {
  return str
    // remove user mentions <@1234> or <@!1234>
    .replace(/<@!?\d+>/g, "")
    // remove role mentions <@&1234>
    .replace(/<@&\d+>/g, "")
    // remove channel mentions <#1234>
    .replace(/<#\d+>/g, "")
    // remove emoji codes <:emoji:123> or <a:emoji:123>
    .replace(/<a?:\w+:\d+>/g, "")
    // remove empty tags <empty:123>
    .replace(/<empty:\d+>/g, "")
    // remove timestamps <t:12345:R> etc
    .replace(/<t:\d+:\w>/g, "")
    // collapse whitespace
    .replace(/\s+/g, " ")
    .trim();
}

// Escape HTML before we inject our own tags
function escapeHtml(str = "") {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

// Convert basic Discord markdown to safe HTML
function discordMarkdownToHtml(str = "") {
  let s = escapeHtml(str);

  // bold **text**
  s = s.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
  // underline __text__
  s = s.replace(/__(.+?)__/g, "<u>$1</u>");
  // italics *text* or _text_
  s = s.replace(/(^|[\s])\*(.+?)\*(?=[\s]|$)/g, "$1<em>$2</em>");
  s = s.replace(/(^|[\s])_(.+?)_(?=[\s]|$)/g, "$1<em>$2</em>");
  // strikethrough ~~text~~
  s = s.replace(/~~(.+?)~~/g, "<s>$1</s>");
  // inline code `code`
  s = s.replace(/`(.+?)`/g, "<code>$1</code>");
  // links [text](https://...)
  s = s.replace(
    /\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g,
    '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>'
  );
  // newlines -> <br>
  s = s.replace(/\n/g, "<br />");

  return s;
}

// Detect and convert plain URLs into clickable <a> links
function linkify(str = "") {
  return str.replace(
    /(https?:\/\/[^\s]+)/g,
    '<a href="$1" target="_blank" rel="noopener noreferrer" class="text-[#f6d48b] underline">$1</a>'
  );
}

// date-fns localizer for react-big-calendar
const locales = {}; // use browser default locale

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek: () => startOfWeek(new Date(), { weekStartsOn: 0 }),
  getDay,
  locales,
});

// Small custom renderer for events inside the calendar cells
function CalendarEvent({ event }) {
  return (
    <div className="truncate flex items-center gap-1">
      {event.coverImage && (
        <span className="inline-block w-2 h-2 rounded-full bg-[#f6d48b]" />
      )}
      <span className="truncate">{event.title}</span>
    </div>
  );
}

export default function Events() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedEvent, setSelectedEvent] = useState(null);

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

        const mapped = (Array.isArray(data) ? data : []).map((evt) => {
          const start = evt.scheduled_start_time
            ? new Date(evt.scheduled_start_time)
            : new Date();

          const end = evt.scheduled_end_time
            ? new Date(evt.scheduled_end_time)
            : new Date(start.getTime() + 60 * 60 * 1000);

          // Build cover image URL if there is a hash
          const coverImage = evt.image
            ? `https://cdn.discordapp.com/guild-events/${evt.id}/${evt.image}.png?size=512`
            : null;

          const location =
            (evt.entity_metadata && evt.entity_metadata.location) ||
            evt.location ||
            "";

          return {
            id: evt.id,
            title: evt.name || "Guild Event",
            start,
            end,
            allDay: false,
            description: evt.description || "",
            location,
            coverImage,
            raw: evt,
          };
        });

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
            components={{ event: CalendarEvent }}
            onSelectEvent={(evt) => setSelectedEvent(evt)}
          />
        </div>

        <p className="text-xs text-[#9f9384] mt-2">
          Click events in the calendar or cards below to see full details. Event
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
            No upcoming events are currently scheduled. Check back soon, or join
            the Discord to see what&apos;s being planned.
          </p>
        )}

        {featuredEvents.map((evt) => (
          <article
            key={evt.id}
            onClick={() => setSelectedEvent(evt)}
            className="cursor-pointer rounded-xl border border-[#392f28] bg-[#0d0a08] p-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4 transition-transform duration-200 hover:-translate-y-1 hover:border-[#f6d48b] hover:shadow-[0_0_25px_rgba(0,0,0,0.7)]"
          >
            <div className="flex items-start gap-3">
              {evt.coverImage && (
                <img
                  src={evt.coverImage}
                  alt={evt.title}
                  className="hidden sm:block w-24 h-16 object-cover rounded-md border border-[#3a3027]"
                />
              )}
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
                  <div
                    className="text-sm text-[#c9c3b6] mt-2 line-clamp-3"
                    dangerouslySetInnerHTML={{
                      __html: linkify(
                        discordMarkdownToHtml(
                          cleanDiscordText(evt.description)
                        )
                      ),
                    }}
                  />
                )}
              </div>
            </div>

            <div className="text-right text-xs md:text-sm text-[#d3cec1] min-w-[150px]">
              <p className="font-semibold text-[#f6d48b]">
                {format(evt.start, "EEE MMM d • p")}
              </p>
            </div>
          </article>
        ))}
      </section>

      {/* Modal for selected event */}
      {selectedEvent && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
          onClick={() => setSelectedEvent(null)}
        >
          <div
            className="bg-[#050609] border border-[#392f28] rounded-xl max-w-2xl w-full mx-4 shadow-xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Event Banner */}
            {selectedEvent.coverImage && (
              <img
                src={selectedEvent.coverImage}
                alt={selectedEvent.title}
                className="w-full max-h-[400px] object-contain bg-black border-b border-[#392f28]"
                loading="lazy"
              />
            )}

            <div className="p-5 space-y-3">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="text-2xl font-semibold text-[#f6e9d2]">
                    {selectedEvent.title}
                  </h3>
                  <p className="text-xs uppercase tracking-wide text-[#f2c46b]">
                    Federation Event
                  </p>
                </div>
                <button
                  onClick={() => setSelectedEvent(null)}
                  className="text-[#d3cec1] text-sm hover:text-[#f6d48b]"
                >
                  ✕ Close
                </button>
              </div>

              <div className="text-sm text-[#d3cec1]">
                <p className="font-semibold text-[#f6d48b]">
                  {format(selectedEvent.start, "EEE MMM d • p")}
                </p>
                {selectedEvent.location && (
                  <p className="text-xs mt-1">
                    Location: {selectedEvent.location}
                  </p>
                )}
              </div>

              {selectedEvent.description && (
                <div
                  className="text-sm text-[#c9c3b6] mt-2 space-y-1"
                  dangerouslySetInnerHTML={{
                    __html: linkify(
                      discordMarkdownToHtml(
                        cleanDiscordText(selectedEvent.description)
                      )
                    ),
                  }}
                />
              )}
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
