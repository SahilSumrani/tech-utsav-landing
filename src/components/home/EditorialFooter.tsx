import { ArrowRight, ArrowUp } from "lucide-react";
import logo from "@/assets/techutsav-logo.png.asset.json";
import { OFFICIAL_WHATSAPP_COMMUNITY_URL } from "@/lib/homepage-content";

export function EditorialFooter() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative mt-8 overflow-hidden rounded-t-[40px] bg-[#101412] text-white md:mt-12 md:rounded-t-[60px] border-t border-white/10">
      {/* Top 4-Color Indian Brand Accent Bar */}
      <div aria-hidden="true" className="absolute inset-x-0 top-0 flex h-[3px]">
        <span className="flex-1 bg-[oklch(0.62_0.16_42)]" /> {/* Terracotta */}
        <span className="flex-1 bg-[oklch(0.78_0.15_79)]" /> {/* Muted Gold */}
        <span className="flex-1 bg-[#003B27]" />             {/* Forest Green */}
        <span className="flex-1 bg-[#9BE600]" />             {/* Electric Lime */}
      </div>

      {/* Subtle Top Ambient Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 left-1/2 h-64 w-[min(900px,90%)] -translate-x-1/2 rounded-full bg-[#003B27]/20 blur-[120px]"
      />

      <div className="relative mx-auto w-full max-w-[1240px] px-5 pt-12 pb-8 sm:px-8 md:px-12 md:pt-16">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:gap-16">
          {/* Left Column: Brand, Tagline, Join Button & Social Circles */}
          <div className="flex flex-col items-center gap-5 text-center lg:items-start lg:text-left">
            <a href="#top" aria-label="TechUtsav India home" className="inline-block w-36 sm:w-44">
              <img
                src={logo.url}
                alt="TechUtsav India"
                width={501}
                height={498}
                className="h-auto w-full object-contain brightness-110"
              />
            </a>

            <p className="max-w-[360px] text-sm leading-relaxed text-slate-400">
              Empowering India&apos;s developers, students, and open-source creators to build, learn, and grow together across Bharat.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-4 lg:justify-start">
              <a
                href={OFFICIAL_WHATSAPP_COMMUNITY_URL}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-bold text-[#101412] transition-all duration-300 hover:bg-slate-100 hover:shadow-md active:scale-95"
              >
                <span>Join our community</span>
                <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>

              {/* Verified High-Quality Social Icons */}
              <div className="flex items-center gap-2">
                {/* X / Twitter */}
                <a
                  href="https://x.com/techutsavindia"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="X (formerly Twitter)"
                  className="flex size-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-slate-300 transition-all duration-200 hover:-translate-y-0.5 hover:border-white hover:text-white"
                >
                  <svg viewBox="0 0 24 24" className="size-4" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>

                {/* GitHub */}
                <a
                  href="https://github.com/SahilSumrani/tech-utsav-landing"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="flex size-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-slate-300 transition-all duration-200 hover:-translate-y-0.5 hover:border-white hover:text-white"
                >
                  <svg viewBox="0 0 24 24" className="size-4" fill="currentColor">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://linkedin.com/company/techutsavindia"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="flex size-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-slate-300 transition-all duration-200 hover:-translate-y-0.5 hover:border-[#0A66C2] hover:text-[#0A66C2]"
                >
                  <svg viewBox="0 0 24 24" className="size-4" fill="currentColor">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>

                {/* Discord */}
                <a
                  href="https://discord.gg/techutsav"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Discord"
                  className="flex size-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-slate-300 transition-all duration-200 hover:-translate-y-0.5 hover:border-[#5865F2] hover:text-[#5865F2]"
                >
                  <svg viewBox="0 0 24 24" className="size-4" fill="currentColor">
                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.894.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
                  </svg>
                </a>

                {/* WhatsApp */}
                <a
                  href={OFFICIAL_WHATSAPP_COMMUNITY_URL}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="WhatsApp Community"
                  className="flex size-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-slate-300 transition-all duration-200 hover:-translate-y-0.5 hover:border-[#25D366] hover:text-[#25D366]"
                >
                  <svg viewBox="0 0 24 24" className="size-4" fill="currentColor">
                    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.928 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-2.846-.823-.927-.38-1.529-.949-1.618-1.071-.087-.121-.654-.872-.654-1.658 0-.787.408-1.171.554-1.328.163-.17.356-.211.475-.211.119 0 .238.001.335.006.108.005.253-.042.404.321.163.393.555 1.357.604 1.456.048.1.08.216.012.353-.068.136-.102.221-.202.341-.1.121-.212.27-.3.364-.1.107-.205.223-.088.423.117.201.517.853 1.107 1.379.76.677 1.401.887 1.606.985.205.098.326.084.448-.055.122-.139.524-.61.664-.818.14-.208.28-.173.473-.102.194.071 1.229.58 1.44.685.211.105.352.157.404.248.052.091.052.529-.092.934zM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C9.813 20 7.828 19.263 6.307 18.064L3.84 18.783L4.621 16.326C3.308 14.771 2.502 12.684 2.502 10.422C2.502 5.176 6.703 0.941 12 0.941C17.297 0.941 21.498 5.176 21.498 10.422C21.498 15.668 17.297 20 12 20Z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Clean, relevant links */}
          <div className="grid w-full grid-cols-2 gap-8 sm:gap-12">
            <div className="flex flex-col items-center gap-3 text-center lg:items-start lg:gap-4 lg:text-left">
              <h3 className="text-xs font-mono font-bold tracking-[0.2em] text-[#9BE600] uppercase">
                Explore
              </h3>
              <div className="flex flex-col gap-2.5">
                <a
                  href="#top"
                  className="text-sm text-slate-300 transition-colors duration-200 hover:text-white"
                >
                  Home
                </a>
                <a
                  href="#about"
                  className="text-sm text-slate-300 transition-colors duration-200 hover:text-white"
                >
                  Who We Are
                </a>
                <a
                  href="#events"
                  className="text-sm text-slate-300 transition-colors duration-200 hover:text-white"
                >
                  Upcoming Events
                </a>
                <a
                  href="#gallery"
                  className="text-sm text-slate-300 transition-colors duration-200 hover:text-white"
                >
                  Photo Gallery
                </a>
                <a
                  href="#community"
                  className="text-sm text-slate-300 transition-colors duration-200 hover:text-white"
                >
                  Join Community
                </a>
              </div>
            </div>

            <div className="flex flex-col items-center gap-3 text-center lg:items-start lg:gap-4 lg:text-left">
              <h3 className="text-xs font-mono font-bold tracking-[0.2em] text-[#D4A359] uppercase">
                Initiatives
              </h3>
              <div className="flex flex-col gap-2.5">
                <a
                  href="#events"
                  className="text-sm text-slate-300 transition-colors duration-200 hover:text-white"
                >
                  Hackathons & Sprints
                </a>
                <a
                  href="#events"
                  className="text-sm text-slate-300 transition-colors duration-200 hover:text-white"
                >
                  Tech Salons & Meetups
                </a>
                <a
                  href="#about"
                  className="text-sm text-slate-300 transition-colors duration-200 hover:text-white"
                >
                  Open Source Mentorship
                </a>
                <a
                  href="/admin"
                  className="text-sm text-amber-300/80 transition-colors duration-200 hover:text-amber-200 font-semibold"
                >
                  Admin Portal ↗
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright, Code of Conduct, and Back to Top Button */}
        <div className="mt-10 border-t border-white/10 pt-6 md:mt-12 md:pt-6">
          <div className="flex flex-col items-center gap-5 md:flex-row md:justify-between">
            <div className="order-2 flex items-center gap-1 text-center text-xs text-slate-400 md:order-none font-mono">
              <span>© {currentYear} TechUtsav India • Built for Bharat</span>
            </div>

            <div className="order-1 flex max-w-[340px] flex-wrap items-center justify-center gap-x-6 gap-y-3 md:order-none md:max-w-none">
              <a
                href="#about"
                className="text-xs text-slate-400 transition-colors duration-200 hover:text-white font-mono"
              >
                Community Guidelines
              </a>
              <a
                href="/admin"
                className="text-xs text-slate-400 transition-colors duration-200 hover:text-white font-mono"
              >
                Admin Access
              </a>

              {/* Interactive Back-to-Top Button */}
              <button
                type="button"
                onClick={scrollToTop}
                aria-label="Back to top"
                className="group flex items-center gap-2 text-xs text-slate-400 transition-colors duration-200 hover:text-white md:border-l md:border-white/10 md:pl-6 cursor-pointer font-mono"
              >
                <span>TOP</span>
                <span className="flex size-6 items-center justify-center rounded-full border border-white/15 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:border-white/40 group-hover:bg-white/10">
                  <ArrowUp className="size-3" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
