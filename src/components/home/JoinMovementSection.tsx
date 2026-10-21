import { ArrowUpRight, MessageCircle } from "lucide-react";
import { COMMUNITY_MEMBER_COUNT, OFFICIAL_WHATSAPP_COMMUNITY_URL } from "@/lib/homepage-content";

export function JoinMovementSection() {
  return (
    <section
      id="community"
      aria-labelledby="community-heading"
      className="bg-[#003B27] px-4 py-16 text-[#FAF5ED] sm:px-6 sm:py-20 lg:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-4xl text-center">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#D4A359]">
          {COMMUNITY_MEMBER_COUNT} learners and growing
        </p>
        <h2
          id="community-heading"
          className="mt-3 font-display text-4xl font-semibold leading-tight sm:text-5xl"
        >
          Your next step starts with a conversation.
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/75 sm:text-base">
          Join the TechUtsav India WhatsApp community for student-focused learning resources, useful
          opportunities and a place to keep growing.
        </p>
        <a
          href={OFFICIAL_WHATSAPP_COMMUNITY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#D4A359] px-7 py-3 text-sm font-extrabold text-[#14251C] transition-colors hover:bg-white"
        >
          <MessageCircle className="size-4" aria-hidden="true" />
          Join the WhatsApp community
          <ArrowUpRight className="size-4" aria-hidden="true" />
        </a>
        <p className="mt-3 text-xs text-white/60">Free to join · Students welcome</p>
      </div>
    </section>
  );
}
