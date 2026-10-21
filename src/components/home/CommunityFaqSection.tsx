import { ChevronDown } from "lucide-react";
import { COMMUNITY_FAQS } from "@/lib/homepage-content";

export function CommunityFaqSection() {
  return (
    <section
      id="faq"
      aria-labelledby="community-faq-heading"
      className="border-t border-[#E3D9C9] bg-white px-5 py-12 sm:px-8 sm:py-16 lg:px-12 lg:py-20"
    >
      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-[0.8fr_1.2fr] md:gap-14">
        <div>
          <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#b84b2a]">
            Good to know
          </p>
          <h2
            id="community-faq-heading"
            className="mt-3 max-w-md font-display text-4xl font-semibold leading-tight text-[#163a2b] sm:text-5xl"
          >
            A few things students ask.
          </h2>
          <p className="mt-4 max-w-md text-sm leading-7 text-[#48574e]">
            A quick introduction to the community and what to expect when you join.
          </p>
        </div>

        <div className="divide-y divide-[#e6dccb] border-y border-[#e6dccb]">
          {COMMUNITY_FAQS.map(({ question, answer }) => (
            <details key={question} className="group py-4 sm:py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-left text-base font-bold text-[#163a2b] marker:hidden sm:text-lg [&::-webkit-details-marker]:hidden">
                {question}
                <ChevronDown
                  className="size-5 shrink-0 text-[#b84b2a] transition-transform group-open:rotate-180"
                  aria-hidden="true"
                />
              </summary>
              <p className="max-w-2xl pr-8 pt-3 text-sm leading-7 text-[#48574e]">{answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
