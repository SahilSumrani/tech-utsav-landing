import { ArrowUpRight, MessageCircle, Github, Linkedin, Twitter } from "lucide-react";
import { OFFICIAL_WHATSAPP_COMMUNITY_URL } from "@/lib/homepage-content";

export function JoinMovementSection() {
  const secondaryLinks = [
    {
      name: "GitHub",
      href: "https://github.com/SahilSumrani/tech-utsav-landing",
      icon: <Github className="size-4" />,
      label: "Open Source Repos",
    },
    {
      name: "Discord",
      href: "https://discord.gg/techutsav",
      icon: (
        <svg className="size-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286z" />
        </svg>
      ),
      label: "Audio Stages & Jam",
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/company/techutsavindia",
      icon: <Linkedin className="size-4" />,
      label: "Professional Network",
    },
    {
      name: "X (Twitter)",
      href: "https://x.com/techutsavindia",
      icon: (
        <svg className="size-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
      label: "Updates & Threads",
    },
  ];

  return (
    <section
      id="community"
      aria-labelledby="community-heading"
      className="relative z-20 py-16 sm:py-20 lg:py-24 bg-[#FAF5ED] border-t border-[#E3D9C9]"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Main Prominent WhatsApp Community Card */}
        <div className="relative overflow-hidden rounded-3xl border border-[#D5E6DC] bg-white p-6 sm:p-8 md:p-12 shadow-sm text-center">
          {/* Subtle brand glow behind card */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 size-72 rounded-full bg-[#003B27]/10 blur-3xl"
          />

          <div className="relative z-10 max-w-2xl mx-auto">
            {/* Pill */}
            <div className="inline-flex items-center gap-2 rounded-full border border-[#003B27]/20 bg-[#003B27]/5 px-3.5 py-1 text-xs font-mono font-bold uppercase tracking-widest text-[#003B27] mb-4">
              <span className="size-1.5 rounded-full bg-[#E65A24]" />
              PRIMARY COMMUNITY CHANNEL
              <span className="size-1.5 rounded-full bg-[#E65A24]" />
            </div>

            <h2
              id="community-heading"
              className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#111814]"
            >
              Join Our <span className="text-[#003B27]">WhatsApp Community</span>
            </h2>

            <p className="mt-3 text-sm sm:text-base text-[#4A554E] leading-relaxed">
              Connect directly with students, developers, designers, and open-source contributors
              across India. Get early access to hackathons, meetups, prototype sprints, and peer learning.
            </p>

            {/* Feature highlights */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3 text-left">
              {[
                "Daily discussions on AI, Cloud, and Systems",
                "Direct registration links for local meetups",
                "Peer reviews and collaborative hackathons",
              ].map((perk, i) => (
                <div
                  key={i}
                  className="rounded-xl border border-[#E3D9C9]/70 bg-[#FAF5ED] p-3 text-xs text-[#2C3B32] font-medium"
                >
                  <span className="text-[#E65A24] font-bold mr-1.5 font-mono">0{i + 1}.</span>
                  {perk}
                </div>
              ))}
            </div>

            {/* Primary Action Button */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={OFFICIAL_WHATSAPP_COMMUNITY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#003B27] hover:bg-[#E65A24] text-white font-medium py-3.5 px-8 rounded-full text-sm sm:text-base transition-all duration-300 shadow-md shadow-[#003B27]/20 active:scale-[0.99] cursor-pointer"
              >
                <MessageCircle className="size-4.5" />
                <span>Join Official WhatsApp Group</span>
                <ArrowUpRight className="size-4" />
              </a>
            </div>
            <p className="mt-2.5 text-[11px] font-mono text-[#738276]">
              100% Free • Open to Students & Developers Across India • No Spam
            </p>
          </div>
        </div>

        {/* Secondary Channels — Quiet, Understated Row */}
        <div className="mt-8 text-center">
          <span className="text-xs font-mono uppercase tracking-wider text-[#738276] mb-3 block">
            Explore other official handles
          </span>

          <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-3">
            {secondaryLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl border border-[#E3D9C9] bg-white text-xs font-medium text-[#4A554E] hover:border-[#003B27] hover:text-[#003B27] hover:bg-[#FAF5ED] transition-all duration-200 shadow-2xs"
                title={link.label}
              >
                <span className="text-[#003B27]">{link.icon}</span>
                <span>{link.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
