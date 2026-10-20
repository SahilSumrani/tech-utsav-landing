import { Calendar, Image as ImageIcon } from "lucide-react";
import type { AdminEvent } from "./types";

interface AdminOverviewProps {
  events: AdminEvent[];
  galleryImages: string[];
  onNavigateTab: (tab: "events" | "gallery") => void;
}

export function AdminOverview({ events, galleryImages, onNavigateTab }: AdminOverviewProps) {
  return (
    <div className="space-y-8 animate-fade-in">
      {/* Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <MetricCard
          label="Registered Builders"
          value="1,420+"
          change="+18% this month"
          badge="Pan-India"
        />
        <MetricCard
          label="Upcoming Roster"
          value={events.length.toString()}
          change="Active workshops"
          badge="Live"
        />
        <MetricCard
          label="Mosaic Photos"
          value={galleryImages.length.toString()}
          change="Curated moments"
          badge="HD"
        />
        <MetricCard
          label="WhatsApp Guild"
          value="Active"
          change="Instant invite enabled"
          badge="24/7"
        />
      </div>

      {/* Quick Actions Panel */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-[#0B1E17] border border-white/10 rounded-2xl p-6">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-base font-semibold text-white flex items-center gap-2">
              <Calendar className="w-4 h-4 text-[#E65A24]" />
              Active Event Pipeline
            </h3>
            <button
              onClick={() => onNavigateTab("events")}
              className="text-xs text-[#E65A24] hover:underline font-mono cursor-pointer"
            >
              Manage all →
            </button>
          </div>
          <p className="text-xs text-[#EAE2D7]/70 mb-4">
            Currently scheduled hack-nights and campus sessions visible on homepage.
          </p>
          <div className="space-y-2.5 max-h-64 overflow-y-auto pr-1">
            {events.length === 0 ? (
              <div className="text-center py-6 text-xs text-white/40">No events scheduled.</div>
            ) : (
              events.map((ev) => (
                <div
                  key={ev.id}
                  className="p-3 rounded-xl bg-black/30 border border-white/5 flex items-center justify-between text-xs"
                >
                  <div>
                    <div className="font-medium text-white">{ev.title}</div>
                    <div className="text-[#EAE2D7]/60 font-mono text-[11px]">
                      {ev.date} • {ev.venue}
                    </div>
                  </div>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                    {ev.tag}
                  </span>
                </div>
              ))
            )}
          </div>
        </div>

        <div className="bg-[#0B1E17] border border-white/10 rounded-2xl p-6">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-base font-semibold text-white flex items-center gap-2">
              <ImageIcon className="w-4 h-4 text-[#E65A24]" />
              Mosaic Photo Pool
            </h3>
            <button
              onClick={() => onNavigateTab("gallery")}
              className="text-xs text-[#E65A24] hover:underline font-mono cursor-pointer"
            >
              Manage all {galleryImages.length} photos →
            </button>
          </div>
          <p className="text-xs text-[#EAE2D7]/70 mb-4">
            Dynamic 14-slot gallery snapshot running on frontend.
          </p>
          <div className="grid grid-cols-4 gap-2">
            {galleryImages.slice(0, 8).map((img, i) => (
              <div
                key={i}
                className="aspect-square rounded-lg overflow-hidden border border-white/10 bg-black/40"
              >
                <img
                  src={img}
                  alt={`Snapshot ${i + 1}`}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=300&q=80";
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function MetricCard({
  label,
  value,
  change,
  badge,
}: {
  label: string;
  value: string;
  change: string;
  badge: string;
}) {
  return (
    <div className="bg-[#0B1E17] border border-white/10 rounded-2xl p-5 relative overflow-hidden">
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs text-[#EAE2D7]/60 font-mono uppercase tracking-wider">{label}</span>
        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-[#E65A24] border border-[#E65A24]/20">
          {badge}
        </span>
      </div>
      <div className="text-2xl font-serif font-bold text-white mb-1">{value}</div>
      <div className="text-[11px] text-emerald-400 font-mono">{change}</div>
    </div>
  );
}
