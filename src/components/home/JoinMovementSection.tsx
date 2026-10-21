import { ArrowUpRight, MessageCircle } from "lucide-react";
import { COMMUNITY_MEMBER_COUNT, OFFICIAL_WHATSAPP_COMMUNITY_URL } from "@/lib/homepage-content";

export function JoinMovementSection() {
  return (
    <section
      id="community"
      aria-labelledby="community-heading"
      className="border-t border-[#E3D9C9] bg-[#F8F1E5] px-5 py-10 sm:px-8 sm:py-14 lg:px-12"
    >
      <div className="mx-auto grid max-w-6xl gap-6 rounded-3xl bg-[#003B27] p-6 text-[#FAF5ED] sm:p-9 md:grid-cols-[1fr_auto] md:items-center md:gap-10">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#D4A359]">
            Join {COMMUNITY_MEMBER_COUNT} community members
          </p>
          <h2
            id="community-heading"
            className="mt-2 font-display text-3xl font-semibold leading-tight sm:text-4xl"
          >
            Stay close to what’s next.
          </h2>
          <p className="mt-2 max-w-xl text-sm leading-6 text-white/75">
            Events, learning links and opportunities for people building in tech.
          </p>
        </div>
        <a
          href={OFFICIAL_WHATSAPP_COMMUNITY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-12 items-center justify-center gap-2 self-start rounded-full bg-[#D4A359] px-6 py-3 text-sm font-extrabold text-[#14251C] transition-colors hover:bg-white md:self-center"
        >
          <MessageCircle className="size-4" aria-hidden="true" />
          Join on WhatsApp
          <ArrowUpRight className="size-4" aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
