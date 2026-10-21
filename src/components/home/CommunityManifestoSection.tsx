import { BookOpen, Compass, Users } from "lucide-react";
import { COMMUNITY_MEMBER_COUNT } from "@/lib/homepage-content";

const pillars = [
  {
    icon: Compass,
    title: "Find your next step",
    description:
      "Explore useful learning links, tools and opportunities shared with the community.",
  },
  {
    icon: Users,
    title: "Learn alongside students",
    description:
      "Ask questions, exchange ideas and learn with people who are building their skills too.",
  },
  {
    icon: BookOpen,
    title: "Put learning into practice",
    description:
      "Take what you learn into your studies, personal projects and the work you want to do next.",
  },
];

export function CommunityManifestoSection() {
  return (
    <section
      id="about"
      aria-labelledby="who-we-are-heading"
      className="relative overflow-hidden border-t border-[#E3D9C9] bg-[#F8F1E5] px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#E65A24]">
            A community for learning
          </p>
          <h1
            id="who-we-are-heading"
            className="mt-3 font-display text-4xl font-semibold leading-tight tracking-tight text-[#111814] sm:text-5xl"
          >
            Grow your skills, <span className="text-[#006143]">one step at a time.</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[#4A554E] sm:text-base">
            From students and developers to working professionals and startup founders, TechUtsav
            India shares resources, event announcements and opportunities to help people learn,
            connect and grow.
          </p>
        </div>

        <div className="mt-8 grid gap-3 md:grid-cols-3 md:gap-4">
          {pillars.map(({ icon: Icon, title, description }, index) => (
            <article
              key={title}
              className="rounded-2xl border border-[#E3D9C9] border-t-2 border-t-[#006143] bg-[#fffaf1] p-5 transition-colors duration-200 hover:border-[#b84b2a]/50 sm:p-6"
            >
              <span className="inline-flex size-11 items-center justify-center rounded-2xl bg-[#003B27]/8 text-[#006143]">
                <Icon className="size-5" aria-hidden="true" />
              </span>
              <p className="mt-5 text-xs font-bold uppercase tracking-[0.16em] text-[#E65A24]">
                0{index + 1}
              </p>
              <h3 className="mt-1 font-display text-2xl font-bold text-[#111814]">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-[#4A554E]">{description}</p>
            </article>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-[#4A554E]">
          Already <strong className="text-[#003B27]">{COMMUNITY_MEMBER_COUNT} members</strong> in
          our WhatsApp community.
        </p>
      </div>
    </section>
  );
}
