import { ArrowUpRight, CalendarDays } from "lucide-react";
import {
  COMMUNITY_AUDIENCES,
  COMMUNITY_OPPORTUNITIES,
  OFFICIAL_WHATSAPP_COMMUNITY_URL,
} from "@/lib/homepage-content";

export function CommunityOpportunitiesSection() {
  return (
    <section
      id="opportunities"
      aria-labelledby="opportunities-heading"
      className="border-y border-[#E3D9C9] bg-white px-5 py-12 sm:px-8 sm:py-16 lg:px-12 lg:py-20"
    >
      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-[0.85fr_1.15fr] md:items-start md:gap-14">
        <div>
          <span className="inline-flex size-10 items-center justify-center rounded-full bg-[#f8f1e5] text-[#b84b2a]">
            <CalendarDays className="size-5" aria-hidden="true" />
          </span>
          <p className="mt-5 text-xs font-extrabold uppercase tracking-[0.2em] text-[#b84b2a]">
            Opportunities shared with the community
          </p>
          <h2
            id="opportunities-heading"
            className="mt-3 max-w-lg font-display text-4xl font-semibold leading-tight text-[#163a2b] sm:text-5xl"
          >
            Tech events, fests and meetups worth knowing about.
          </h2>
          <p className="mt-4 max-w-lg text-sm leading-7 text-[#48574e] sm:text-base">
            Discover conferences, campus events and ways to meet people building in technology. We
            share opportunities hosted by others; follow each listing for its official details.
          </p>
          <a
            href={OFFICIAL_WHATSAPP_COMMUNITY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex min-h-11 items-center gap-2 text-sm font-extrabold text-[#07583d] underline-offset-4 hover:underline"
          >
            Get updates on WhatsApp <ArrowUpRight className="size-4" aria-hidden="true" />
          </a>
        </div>

        <div className="space-y-7 rounded-3xl border border-[#e6dccb] bg-[#fffaf1] p-5 sm:p-7">
          <div>
            <h3 className="text-xs font-extrabold uppercase tracking-[0.16em] text-[#7b6b54]">
              What we share
            </h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {COMMUNITY_OPPORTUNITIES.map((opportunity) => (
                <li
                  key={opportunity}
                  className="rounded-full border border-[#e6dccb] bg-white px-3.5 py-2 text-sm leading-5 text-[#284337]"
                >
                  {opportunity}
                </li>
              ))}
            </ul>
          </div>
          <div className="border-t border-[#e6dccb] pt-5">
            <h3 className="text-xs font-extrabold uppercase tracking-[0.16em] text-[#7b6b54]">
              Who it is for
            </h3>
            <ul className="mt-3 flex flex-wrap gap-x-2 gap-y-1 text-sm leading-6 text-[#284337]">
              {COMMUNITY_AUDIENCES.map((audience, index) => (
                <li key={audience}>
                  {audience}
                  {index < COMMUNITY_AUDIENCES.length - 1 ? (
                    <span aria-hidden="true"> · </span>
                  ) : null}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
