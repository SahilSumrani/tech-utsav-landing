import { useState, useMemo, useEffect } from "react";
import { ArrowUpRight, Calendar, Clock, MapPin, Sparkles } from "lucide-react";
import { motion } from "motion/react";
import {
  EVENT_LISTINGS,
  type EventListing,
  OFFICIAL_WHATSAPP_COMMUNITY_URL,
} from "@/lib/homepage-content";

const CATEGORIES = ["All", "Hackathon", "Meetup", "Workshop", "Salon"] as const;

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
      // fallback to static list
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
      className="relative z-20 py-16 sm:py-20 lg:py-24 bg-[#FAF5ED] border-t border-[#E3D9C9]"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header with Indian Editorial Typography */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-12">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#003B27]/20 bg-[#003B27]/5 px-3.5 py-1 text-xs font-mono font-bold uppercase tracking-widest text-[#003B27] mb-3">
              <span className="size-1.5 rounded-full bg-[#E65A24]" />
              UPCOMING SESSIONS & SPRINTS
              <span className="size-1.5 rounded-full bg-[#E65A24]" />
            </div>

            <h2
              id="events-heading"
              className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#111814]"
            >
              Learn Together, <span className="text-[#E65A24]">Build in Public</span>
            </h2>

            <p className="mt-2 text-sm sm:text-base text-[#4A554E] max-w-2xl leading-relaxed">
              Curated meetups, prototype hack-sprints, and engineering deep dives designed for
              students, developers, and open-source contributors across Indian cities.
            </p>
          </div>

          {filteredEvents.length > 4 && selectedCategory === "All" && (
            <button
              onClick={() => setShowAllUpcoming(!showAllUpcoming)}
              className="self-start md:self-end inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#003B27] hover:text-[#E65A24] px-4 py-2 rounded-full border border-[#E3D9C9] bg-white transition-all duration-200 cursor-pointer shadow-sm hover:shadow"
            >
              <span>
                {showAllUpcoming
                  ? "Show Featured Events"
                  : `View All ${filteredEvents.length} Events`}
              </span>
              <ArrowUpRight className="size-4" />
            </button>
          )}
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-2.5 mb-10">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`rounded-full px-4 py-1.5 text-xs font-medium tracking-wide transition-all duration-200 cursor-pointer ${
                selectedCategory === cat
                  ? "bg-[#003B27] text-[#FAF5ED] shadow-sm font-semibold"
                  : "border border-[#E3D9C9] bg-white text-[#4A554E] hover:border-[#003B27] hover:text-[#003B27]"
              }`}
            >
              {cat === "All" ? "All Tracks" : cat}
            </button>
          ))}
        </div>

        {/* Responsive Events Grid */}
        {displayedEvents.length === 0 ? (
          <div className="p-12 text-center bg-white border border-[#E3D9C9] rounded-3xl">
            <Calendar className="w-10 h-10 text-[#003B27]/40 mx-auto mb-3" />
            <h3 className="text-base sm:text-lg font-bold text-[#111814]">
              No sessions scheduled under this track
            </h3>
            <p className="text-xs sm:text-sm text-[#4A554E] mt-1">
              Switch filter to "All Tracks" or check back shortly for upcoming community registrations.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6">
            {displayedEvents.map((event: EventListing, idx: number) => (
              <motion.article
                key={event.id || idx}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
                className="group flex flex-col justify-between rounded-3xl border border-[#E3D9C9] bg-white p-4 sm:p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-[#003B27]/40"
              >
                <div>
                  {/* Event Cover Image */}
                  <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-neutral-100 border border-[#E3D9C9]/60">
                    <img
                      src={event.coverUrl || "/images/gallery/gallery-1.jpg"}
                      alt={event.title}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).src =
                          "/images/gallery/gallery-1.jpg";
                      }}
                    />

                    {/* Category Tag pill */}
                    <span className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-[#003B27]/90 text-white backdrop-blur-md border border-white/20">
                      {event.category || "Sprint"}
                    </span>

                    {/* Mode tag */}
                    <span className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded-full text-[10px] font-mono bg-white/90 text-[#111814] backdrop-blur-md border border-black/10">
                      {event.city || "Pan-India"}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="mt-3.5 font-display text-lg sm:text-xl font-bold text-[#111814] leading-snug group-hover:text-[#E65A24] transition-colors line-clamp-2">
                    {event.title}
                  </h3>

                  {/* Description / Summary if available */}
                  {event.description && (
                    <p className="mt-1.5 text-xs text-[#4A554E] line-clamp-2 leading-relaxed">
                      {event.description}
                    </p>
                  )}

                  {/* Meta Information with icons */}
                  <div className="mt-3.5 pt-3 border-t border-[#E3D9C9]/60 space-y-1.5 text-xs text-[#4A554E] font-sans">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-3.5 h-3.5 text-[#003B27] shrink-0" />
                      <span className="truncate">{event.date}</span>
                    </div>
                    {event.time && (
                      <div className="flex items-center gap-2">
                        <Clock className="w-3.5 h-3.5 text-[#003B27] shrink-0" />
                        <span className="truncate">{event.time}</span>
                      </div>
                    )}
                    <div className="flex items-center gap-2">
                      <MapPin className="w-3.5 h-3.5 text-[#E65A24] shrink-0" />
                      <span className="truncate">{event.venue}</span>
                    </div>
                  </div>
                </div>

                {/* Registration CTA Button */}
                <div className="mt-5 pt-3 border-t border-[#E3D9C9]/40">
                  <a
                    href={event.href || OFFICIAL_WHATSAPP_COMMUNITY_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#003B27] hover:bg-[#E65A24] text-white font-medium py-2.5 px-4 rounded-xl text-xs transition-all duration-300 shadow-sm active:scale-[0.99] cursor-pointer"
                  >
                    <span>RSVP & Details</span>
                    <ArrowUpRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
