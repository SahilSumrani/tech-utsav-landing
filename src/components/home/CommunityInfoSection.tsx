import { ArrowRight, MessageCircle, ShieldCheck, UserRoundCheck } from "lucide-react";
import { COMMUNITY_GUIDELINES, OFFICIAL_WHATSAPP_COMMUNITY_URL } from "@/lib/homepage-content";

const cards = [
  {
    id: "how-to-join",
    eyebrow: "Start here",
    title: "How to join",
    icon: UserRoundCheck,
    content: (
      <ol className="mt-4 space-y-3 text-sm leading-6 text-[#48574e]">
        <li>1. Open the official WhatsApp invite.</li>
        <li>2. Read the community description and pinned updates.</li>
        <li>3. Say hello and share what you’re learning.</li>
      </ol>
    ),
  },
  {
    id: "guidelines",
    eyebrow: "Learn together",
    title: "Community guidelines",
    icon: ShieldCheck,
    content: (
      <ul className="mt-4 space-y-3 text-sm leading-6 text-[#48574e]">
        {COMMUNITY_GUIDELINES.map((guideline) => (
          <li key={guideline} className="flex gap-2">
            <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-[#b84b2a]" />
            {guideline}
          </li>
        ))}
      </ul>
    ),
  },
  {
    id: "contact",
    eyebrow: "Stay connected",
    title: "Contact & privacy",
    icon: MessageCircle,
    content: (
      <div className="mt-4 space-y-3 text-sm leading-6 text-[#48574e]">
        <p>
          For community questions, contact the admins through the official WhatsApp community. This
          website does not collect a contact form or ask you to create an account.
        </p>
        <p id="privacy">
          Joining opens WhatsApp, which is operated by Meta and follows its own privacy terms.
          Please don’t post personal or sensitive information in community chats.
        </p>
      </div>
    ),
  },
];

export function CommunityInfoSection() {
  return (
    <section
      aria-labelledby="community-info-heading"
      className="bg-[#f8f1e5] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#b84b2a]">
            A clear place to begin
          </p>
          <h2
            id="community-info-heading"
            className="mt-3 font-display text-4xl font-semibold leading-tight text-[#163a2b] sm:text-5xl"
          >
            Join in, learn well, help each other.
          </h2>
          <p className="mt-4 text-sm leading-7 text-[#48574e] sm:text-base">
            TechUtsav is a student learning community. Here’s what to expect when you join.
          </p>
        </div>

        <div className="mt-9 grid gap-4 md:grid-cols-3">
          {cards.map(({ id, eyebrow, title, icon: Icon, content }) => (
            <article
              key={id}
              id={id}
              className="scroll-mt-24 rounded-2xl border border-[#e6dccb] bg-[#fffaf1] p-5 sm:p-6"
            >
              <Icon className="size-5 text-[#b84b2a]" aria-hidden="true" />
              <p className="mt-4 text-[0.65rem] font-extrabold uppercase tracking-[0.16em] text-[#7b6b54]">
                {eyebrow}
              </p>
              <h3 className="mt-1 font-display text-2xl font-semibold text-[#163a2b]">{title}</h3>
              {content}
              {id === "how-to-join" && (
                <a
                  href={OFFICIAL_WHATSAPP_COMMUNITY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-extrabold text-[#07583d] underline-offset-4 hover:underline"
                >
                  Open WhatsApp invite <ArrowRight className="size-4" aria-hidden="true" />
                </a>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
