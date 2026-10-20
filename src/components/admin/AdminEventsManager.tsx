import { useState } from "react";
import { Plus, Trash2, ExternalLink } from "lucide-react";
import type { AdminEvent } from "./types";
import { OFFICIAL_WHATSAPP_COMMUNITY_URL } from "@/lib/homepage-content";

interface AdminEventsManagerProps {
  events: AdminEvent[];
  onAddEvent: (event: AdminEvent) => void;
  onDeleteEvent: (id: string) => void;
}

export function AdminEventsManager({
  events,
  onAddEvent,
  onDeleteEvent,
}: AdminEventsManagerProps) {
  const [newEventTitle, setNewEventTitle] = useState("");
  const [newEventDate, setNewEventDate] = useState("");
  const [newEventTime, setNewEventTime] = useState("");
  const [newEventVenue, setNewEventVenue] = useState("");
  const [newEventTag, setNewEventTag] = useState("AI & Cloud");
  const [newEventLink, setNewEventLink] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newEventTitle.trim()) return;

    const newEv: AdminEvent = {
      id: Date.now().toString(),
      title: newEventTitle.trim(),
      date: newEventDate || "TBA",
      time: newEventTime || "11:00 AM IST",
      venue: newEventVenue || "Virtual / Discord Stage",
      mode: "In-Person & Virtual",
      tag: newEventTag,
      status: "open",
      link: newEventLink.trim() || OFFICIAL_WHATSAPP_COMMUNITY_URL,
    };

    onAddEvent(newEv);
    setNewEventTitle("");
    setNewEventDate("");
    setNewEventTime("");
    setNewEventVenue("");
    setNewEventLink("");
  };

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Create New Event Form */}
      <div className="bg-[#0B1E17] border border-white/10 rounded-2xl p-6">
        <h2 className="text-lg font-serif font-bold text-white mb-1">
          Schedule New TechUtsav Event
        </h2>
        <p className="text-xs text-[#EAE2D7]/70 mb-6">
          Publish a meet, workshop, or open-source hack-day directly to the live homepage.
        </p>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="lg:col-span-2">
            <label className="block text-xs font-mono uppercase tracking-wider text-[#EAE2D7]/70 mb-1">
              Event Title *
            </label>
            <input
              type="text"
              value={newEventTitle}
              onChange={(e) => setNewEventTitle(e.target.value)}
              required
              placeholder="e.g. Building with Llama 3 & Agentic Systems"
              className="w-full bg-black/40 border border-white/15 rounded-xl px-3.5 py-2 text-sm text-white focus:outline-none focus:border-[#E65A24]"
            />
          </div>

          <div>
            <label className="block text-xs font-mono uppercase tracking-wider text-[#EAE2D7]/70 mb-1">
              Track / Category
            </label>
            <select
              value={newEventTag}
              onChange={(e) => setNewEventTag(e.target.value)}
              className="w-full bg-black/40 border border-white/15 rounded-xl px-3.5 py-2 text-sm text-white focus:outline-none focus:border-[#E65A24]"
            >
              <option value="AI & Agents">AI & Agents</option>
              <option value="Open Source & Rust">Open Source & Rust</option>
              <option value="Web3 & Distributed">Web3 & Distributed</option>
              <option value="Fullstack & Devops">Fullstack & Devops</option>
              <option value="Hardware & Robotics">Hardware & Robotics</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-mono uppercase tracking-wider text-[#EAE2D7]/70 mb-1">
              Date
            </label>
            <input
              type="text"
              value={newEventDate}
              onChange={(e) => setNewEventDate(e.target.value)}
              placeholder="e.g. November 14, 2026"
              className="w-full bg-black/40 border border-white/15 rounded-xl px-3.5 py-2 text-sm text-white focus:outline-none focus:border-[#E65A24]"
            />
          </div>

          <div>
            <label className="block text-xs font-mono uppercase tracking-wider text-[#EAE2D7]/70 mb-1">
              Time
            </label>
            <input
              type="text"
              value={newEventTime}
              onChange={(e) => setNewEventTime(e.target.value)}
              placeholder="e.g. 5:00 PM – 8:00 PM IST"
              className="w-full bg-black/40 border border-white/15 rounded-xl px-3.5 py-2 text-sm text-white focus:outline-none focus:border-[#E65A24]"
            />
          </div>

          <div>
            <label className="block text-xs font-mono uppercase tracking-wider text-[#EAE2D7]/70 mb-1">
              Venue / Platform
            </label>
            <input
              type="text"
              value={newEventVenue}
              onChange={(e) => setNewEventVenue(e.target.value)}
              placeholder="e.g. Bengaluru / Discord Live Stage"
              className="w-full bg-black/40 border border-white/15 rounded-xl px-3.5 py-2 text-sm text-white focus:outline-none focus:border-[#E65A24]"
            />
          </div>

          <div className="lg:col-span-2">
            <label className="block text-xs font-mono uppercase tracking-wider text-[#EAE2D7]/70 mb-1">
              RSVP / Registration Link
            </label>
            <input
              type="url"
              value={newEventLink}
              onChange={(e) => setNewEventLink(e.target.value)}
              placeholder="https://chat.whatsapp.com/... or Luma link"
              className="w-full bg-black/40 border border-white/15 rounded-xl px-3.5 py-2 text-sm text-white focus:outline-none focus:border-[#E65A24]"
            />
          </div>

          <div className="flex items-end">
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 bg-[#E65A24] hover:bg-[#d54e1b] text-white font-medium py-2.5 rounded-xl transition-all shadow-md shadow-[#E65A24]/20 cursor-pointer"
            >
              <Plus className="w-4 h-4" />
              Publish Event
            </button>
          </div>
        </form>
      </div>

      {/* Existing Events List */}
      <div className="bg-[#0B1E17] border border-white/10 rounded-2xl p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-base font-semibold text-white">Current Event Roster</h3>
          <span className="text-xs text-[#EAE2D7]/60 font-mono">
            {events.length} events loaded
          </span>
        </div>

        <div className="divide-y divide-white/10">
          {events.length === 0 ? (
            <div className="text-center py-8 text-sm text-[#EAE2D7]/50">
              No events scheduled yet. Fill out the form above to publish your first event!
            </div>
          ) : (
            events.map((ev) => (
              <div
                key={ev.id}
                className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2.5">
                    <span className="font-semibold text-white text-sm">{ev.title}</span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/5 border border-white/10 text-[#EAE2D7]/70">
                      {ev.tag}
                    </span>
                  </div>
                  <div className="text-xs text-[#EAE2D7]/60 flex items-center gap-3 font-mono">
                    <span>{ev.date}</span>
                    <span>•</span>
                    <span>{ev.time}</span>
                    <span>•</span>
                    <span>{ev.venue}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 self-end sm:self-center">
                  <a
                    href={ev.link}
                    target="_blank"
                    rel="noreferrer"
                    className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-xs text-white border border-white/10 inline-flex items-center gap-1 transition-colors"
                  >
                    <ExternalLink className="w-3 h-3" />
                    RSVP
                  </a>
                  <button
                    onClick={() => onDeleteEvent(ev.id)}
                    className="p-1.5 rounded-lg bg-red-500/10 hover:bg-red-500/20 text-red-300 border border-red-500/20 transition-colors cursor-pointer"
                    title="Delete event"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
