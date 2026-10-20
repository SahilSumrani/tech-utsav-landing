import { useState, useMemo, useEffect } from "react";
import { ArrowRight, Calendar, MapPin } from "lucide-react";
import { motion } from "motion/react";
import {
  EVENT_LISTINGS,
  type EventListing,
  OFFICIAL_WHATSAPP_COMMUNITY_URL,
} from "@/lib/homepage-content";

const CATEGORIES = ["All", "Hackathon", "Meetup", "Workshop", "Salon"] as const;

const getBadgeStyle = (badge?: string) => {
  switch (badge) {
    case "Unstop":
      return "bg-[#4338CA] text-white border-[#4338CA]";
    case "Devfolio":
      return "bg-[#2762EA] text-white border-[#2762EA]";
    case "HackerEarth":
      return "bg-[#2C3454] text-white border-[#2C3454]";
    case "Nerds Room":
    case "TechUtsav":
      return "bg-[#9BE600] text-[#00308F] border-[#00308F]";
    case "Luma":
    default:
      return "bg-[#00308F] text-white border-[#00308F]";
  }
};

export function UpcomingEventsSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [showAllUpcoming, setShowAllUpcoming] = useState(false);
  const [allEvents, setAllEvents] = useState<EventListing[]>(EVENT_LISTINGS);

  useEffect(() => {
    try {
      const stored = localStorage.getItem("techutsav_events_data");
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed) && parsed.length > 0) {
          // Map admin events to EventListing schema if needed
          const mapped: EventListing[] = parsed.map((e: any, idx: number) => ({
            id: e.id || `custom-${idx}`,
            title: e.title,
            date: e.date,
            time: e.time,
            venue: e.venue,
            city: e.venue?.split("/")[0]?.trim() || "India",
            category: (e.tag || "Meetup") as any,
            registrationStatus: (e.status || "open") as any,
            href: e.link || OFFICIAL_WHATSAPP_COMMUNITY_URL,
            coverUrl: e.coverUrl || `/images/gallery/gallery-${(idx % 4) + 1}.jpg`,
            badge: "TechUtsav",
          }));
          setAllEvents(mapped);
        }
      }
    } catch {
      // fallback to static
    }
  }, []);

  const filteredEvents = useMemo(() => {
    return allEvents.filter((e) =>
      selectedCategory === "All" ? true : e.category === selectedCategory
    );
  }, [allEvents, selectedCategory]);

  const displayedEvents = useMemo(() => {
    if (showAllUpcoming || selectedCategory !== "All") {
      return filteredEvents;
    }
    return filteredEvents.slice(0, 4);
  }, [filteredEvents, showAllUpcoming, selectedCategory]);

  return (
    <section
      id="events"
      aria-labelledby="events-heading"
      className="relative z-20 py-16 sm:py-24 bg-white"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        {/* Section Header (Matching Nerds Room Exact) */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 sm:mb-10">
          <div>
            <span className="text-[#9BE600] font-black tracking-widest text-xs uppercase mb-1 block">
              WHAT'S NEXT
            </span>
            <h2
              id="events-heading"
              className="text-3xl sm:text-4xl md:text-5xl font-black text-[#00308F] tracking-tight flex items-center gap-3"
            >
              Upcoming <span className="text-black">Events</span>
            </h2>
            <p className="text-gray-500 text-sm sm:text-base mt-1.5 font-semibold">
              Discover and join exciting hackathons, buildathons, workshops and meetups.
            </p>
          </div>

          {filteredEvents.length > 4 && selectedCategory === "All" && (
            <button
              onClick={() => setShowAllUpcoming(!showAllUpcoming)}
              className="group self-start sm:self-auto text-sm font-black text-[#00308F] hover:text-[#002570] transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <span>
                {showAllUpcoming
                  ? "Show Less"
                  : `View All Events (${filteredEvents.length})`}
              </span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          )}
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`rounded-full px-4 py-1.5 text-xs font-bold transition-all cursor-pointer ${
                selectedCategory === cat
                  ? "bg-[#00308F] text-white shadow-sm"
                  : "border border-slate-200 bg-white text-slate-700 hover:border-[#9BE600]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 4-Column Card Grid with 1:1 Aspect Ratio Covers */}
        {displayedEvents.length === 0 ? (
          <div className="p-12 text-center bg-slate-50 border-2 border-dashed border-slate-200 rounded-3xl">
            <Calendar className="w-12 h-12 text-slate-300 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-slate-700">No Upcoming Events Right Now</h3>
            <p className="text-sm text-gray-500 mt-1">Check back soon or explore our community archives!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5 justify-items-center sm:justify-items-stretch">
            {displayedEvents.map((event: EventListing, idx: number) => (
              <motion.article
                key={event.id || idx}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.06 }}
                className="bg-white border-2 border-[#00308F] rounded-2xl p-3 sm:p-3.5 flex flex-col justify-between shadow-[4px_4px_0px_rgba(0,48,143,0.16)] hover:shadow-[6px_6px_0px_#00308F] hover:-translate-y-1 transition-all duration-300 group max-w-[280px] w-full mx-auto sm:mx-0"
              >
                <div>
                  {/* 800x800 Exact 1:1 Square Cover Container */}
                  <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-slate-100 border border-slate-200/80 shadow-inner">
                    <img
                      src={event.coverUrl || "/images/gallery/gallery-1.jpg"}
                      alt={event.title}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).src =
                          "https://images.lumacdn.com/uploads/06/f0fb4a76-6cd8-419c-9c8a-0b682d506b9b.png";
                      }}
                    />
                  </div>

                  {/* Platform Badge & Chapter / City Tag */}
                  <div className="flex flex-wrap items-center gap-1.5 mt-2.5 mb-2">
                    <span
                      className={`inline-block px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-wider border ${getBadgeStyle(
                        event.badge
                      )}`}
                    >
                      {event.badge || "TechUtsav"}
                    </span>
                    {(event.chapterName || event.city) && (
                      <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[10px] font-bold bg-blue-50 text-[#00308F] border border-[#00308F]/30">
                        <MapPin className="w-2.5 h-2.5 text-[#00308F]" />
                        {event.chapterName || event.city}
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="text-sm sm:text-base font-black text-slate-900 leading-snug group-hover:text-[#00308F] transition-colors line-clamp-2 mb-2">
                    {event.title}
                  </h3>

                  {/* Meta Information */}
                  <div className="flex flex-col gap-1 text-gray-500 text-[11px] font-semibold mb-3">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-[#00308F] shrink-0" />
                      <span className="truncate">{event.date}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[#00308F] shrink-0" />
                      <span className="truncate">
                        {event.venue}, {event.city}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Compact Register Button */}
                <a
                  href={event.href || OFFICIAL_WHATSAPP_COMMUNITY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2 px-3 bg-[#00308F] hover:bg-[#002570] text-white font-black rounded-lg text-center text-xs flex items-center justify-center gap-1 shadow-[2px_2px_0px_#9BE600] hover:shadow-[1px_1px_0px_#9BE600] hover:translate-y-0.5 active:translate-y-1 transition-all"
                >
                  <span>Register Now</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </a>
              </motion.article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
