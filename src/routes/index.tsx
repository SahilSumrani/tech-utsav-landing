import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Menu, MessageCircle, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/techutsav-heritage-hero.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "TechUtsav India — India Builds Together" },
      { name: "description", content: "Join an India-wide technology community where ideas, people, and opportunities come together." },
      { property: "og:title", content: "TechUtsav India — India Builds Together" },
      { property: "og:description", content: "Join an India-wide technology community where ideas, people, and opportunities come together." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const navigation = ["Home", "Events", "Community", "Opportunities", "Resources", "About"];

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches || !pageRef.current) return;

    let context: { revert: () => void } | undefined;
    void import("gsap").then(({ gsap }) => {
      if (!pageRef.current) return;
      context = gsap.context(() => {
        gsap.from("[data-enter]", {
          y: 24,
          opacity: 0,
          duration: 0.85,
          stagger: 0.1,
          ease: "power3.out",
        });
        gsap.from("[data-visual]", {
          x: 26,
          opacity: 0,
          scale: 0.985,
          duration: 1.05,
          delay: 0.12,
          ease: "power3.out",
        });
      }, pageRef);
    });

    return () => context?.revert();
  }, []);

  return (
    <div ref={pageRef} id="top" className="min-h-screen overflow-hidden bg-background text-foreground">
      <header className="relative z-30 border-b border-border/70">
        <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:h-24 lg:px-12 xl:px-16">
          <a href="#top" aria-label="TechUtsav India home" className="group inline-flex flex-col leading-none">
            <span className="font-display text-[1.45rem] font-bold uppercase tracking-[0.06em] sm:text-[1.65rem]">TechUtsav</span>
            <span className="mt-1 text-[0.52rem] font-bold uppercase tracking-[0.5em] text-terracotta group-hover:text-primary">India</span>
          </a>

          <nav aria-label="Primary navigation" className="hidden items-center gap-5 lg:flex xl:gap-8">
            {navigation.map((item) => (
              <a key={item} href={item === "Home" ? "#top" : `#${item.toLowerCase()}`} className="text-[0.69rem] font-bold uppercase tracking-[0.09em] text-ink-soft transition-colors hover:text-terracotta">
                {item}
              </a>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Button variant="community" size="community" asChild>
              <a href="https://wa.me/" target="_blank" rel="noreferrer">Join Community <ArrowUpRight /></a>
            </Button>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="relative z-40 lg:hidden"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        <div id="mobile-navigation" className={`absolute inset-x-0 top-full border-b border-border bg-background px-5 transition-all duration-300 lg:hidden ${menuOpen ? "visible translate-y-0 opacity-100" : "invisible -translate-y-2 opacity-0"}`}>
          <nav aria-label="Mobile navigation" className="flex flex-col py-5">
            {navigation.map((item) => (
              <a key={item} href={item === "Home" ? "#top" : `#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)} className="border-b border-border/60 py-3 text-sm font-semibold text-foreground last:border-0">
                {item}
              </a>
            ))}
            <Button variant="community" size="community" className="mt-5 w-full" asChild>
              <a href="https://wa.me/" target="_blank" rel="noreferrer">Join Community <ArrowUpRight /></a>
            </Button>
          </nav>
        </div>
      </header>

      <main>
        <section aria-labelledby="hero-title" className="relative mx-auto grid min-h-[calc(100svh-5rem)] max-w-[1440px] grid-cols-1 gap-8 px-5 pb-8 pt-10 sm:px-8 sm:pt-14 md:grid-cols-[0.9fr_1.1fr] md:items-center md:gap-10 lg:min-h-[calc(100svh-6rem)] lg:grid-cols-[0.88fr_1.12fr] lg:gap-16 lg:px-12 lg:py-12 xl:px-16">
          <div className="relative z-10 flex flex-col items-start md:pb-4">
            <p data-enter className="mb-5 flex items-center gap-3 text-[0.62rem] font-bold uppercase tracking-[0.21em] text-terracotta sm:text-[0.68rem]">
              <span className="h-px w-8 bg-terracotta" aria-hidden="true" />
              Ideas <span aria-hidden="true">•</span> People <span aria-hidden="true">•</span> Opportunities
            </p>
            <h1 id="hero-title" data-enter className="font-display max-w-[8.5ch] text-[clamp(3.7rem,15vw,6rem)] font-semibold leading-[0.82] tracking-normal text-primary md:text-[clamp(4.3rem,7vw,7.4rem)]">
              India Builds <em className="font-medium text-terracotta">Together</em>
            </h1>
            <p data-enter className="mt-6 max-w-md text-sm leading-7 text-ink-soft sm:text-base md:mt-8">
              An India-wide technology community connecting ambitious minds with ideas and opportunities that move us forward.
            </p>
            <div data-enter className="mt-7 sm:mt-9">
              <Button variant="community" size="community" asChild>
                <a href="https://wa.me/" target="_blank" rel="noreferrer"><MessageCircle /> Join Our WhatsApp Community <ArrowUpRight className="hidden min-[360px]:block" /></a>
              </Button>
            </div>
          </div>

          <div data-visual className="relative mx-auto w-full max-w-[650px] md:mx-0 md:ml-auto">
            <div className="absolute -left-3 top-[13%] z-10 hidden h-24 w-px bg-mustard md:block" aria-hidden="true" />
            <div className="hero-image-mask relative aspect-[4/4.45] overflow-hidden border border-primary/20 bg-muted shadow-[0_26px_70px_color-mix(in_oklab,var(--primary)_18%,transparent)] md:aspect-[4/4.8] lg:aspect-[4/4.5]">
              <img src={heroImage} alt="An Indian heritage arch overlooking a monument-lined street with an auto-rickshaw and flowering plants" width={1280} height={1536} fetchPriority="high" className="h-full w-full object-cover" />
              <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-primary/20 to-transparent" aria-hidden="true" />
            </div>
            <p className="absolute -bottom-3 right-3 bg-background px-3 py-1 font-display text-base italic text-terracotta sm:right-5 sm:text-lg">Bharat, connected.</p>
          </div>
        </section>
      </main>
    </div>
  );
}
