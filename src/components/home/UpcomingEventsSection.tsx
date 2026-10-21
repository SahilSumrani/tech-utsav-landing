import { ArrowUpRight, BellRing } from "lucide-react";
import { useEffect, useState } from "react";
import { OFFICIAL_WHATSAPP_COMMUNITY_URL } from "@/lib/homepage-content";
import { isSupabaseConfigured, supabase, type CommunityUpdate } from "@/lib/supabase";

/** Community updates are shared in WhatsApp until verified public listings exist. */
export function UpcomingEventsSection() {
  const [updates, setUpdates] = useState<CommunityUpdate[]>([]);

  useEffect(() => {
    if (!supabase) return;
    void supabase
      .from("community_updates")
      .select("id, title, summary, category, source_url, deadline, published_at, created_at")
      .eq("status", "published")
      .order("published_at", { ascending: false })
      .limit(6)
      .then(({ data }) => setUpdates((data as CommunityUpdate[] | null) ?? []));
  }, []);

  return (
    <section
      id="updates"
      aria-labelledby="updates-heading"
      className="border-t border-[#E3D9C9] bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#E65A24]">
              Community updates
            </p>
            <h2
              id="updates-heading"
              className="mt-3 font-display text-4xl font-semibold tracking-tight text-[#111814] sm:text-5xl"
            >
              Events and opportunities worth knowing about.
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-[#4A554E] sm:text-base">
              We share technology conferences, hackathons, college fests, developer meetups and
              other useful opportunities with members. Join WhatsApp for current updates; public
              listings will appear here when they are published.
            </p>
          </div>
          <a
            href={OFFICIAL_WHATSAPP_COMMUNITY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 items-center justify-center gap-2 self-start rounded-full bg-[#003B27] px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-[#E65A24] md:self-end"
          >
            <BellRing className="size-4" aria-hidden="true" />
            Get community updates
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </a>
        </div>
        {updates.length > 0 && (
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {updates.map((update) => (
              <article
                key={update.id}
                className="rounded-2xl border border-[#E3D9C9] bg-[#FAF5ED] p-5"
              >
                <p className="text-xs font-bold uppercase tracking-widest text-[#E65A24]">
                  {update.category}
                </p>
                <h3 className="mt-2 font-display text-2xl font-bold text-[#111814]">
                  {update.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-[#4A554E]">{update.summary}</p>
                {update.deadline && (
                  <p className="mt-3 text-xs font-semibold text-[#003B27]">
                    Deadline: {update.deadline}
                  </p>
                )}
                <a
                  href={update.source_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-[#003B27] hover:text-[#E65A24]"
                >
                  View original source <ArrowUpRight className="size-4" aria-hidden="true" />
                </a>
              </article>
            ))}
          </div>
        )}
        {!isSupabaseConfigured && (
          <p className="mt-5 text-xs text-[#738276]">
            Public updates will appear here once the updates database is configured.
          </p>
        )}
      </div>
    </section>
  );
}
