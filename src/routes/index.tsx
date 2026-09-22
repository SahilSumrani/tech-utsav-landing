import { createFileRoute } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import heroButton from "@/assets/hero-button.png.asset.json";
import heroTypography from "@/assets/hero-typography.png.asset.json";
import leftLeaves from "@/assets/left-leaves.png.asset.json";
import logo from "@/assets/techutsav-logo.png.asset.json";
import rightScene from "@/assets/right-scene.png.asset.json";
import topRightFlowers from "@/assets/top-right-flowers.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "TechUtsav India — People, Events & Opportunities" },
      { name: "description", content: "Join TechUtsav India, a nationwide technology community connecting people, events, and opportunities." },
      { property: "og:title", content: "TechUtsav India — People, Events & Opportunities" },
      { property: "og:description", content: "Join TechUtsav India, a nationwide technology community connecting people, events, and opportunities." },
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
          y: 18,
          opacity: 0,
          duration: 0.75,
          stagger: 0.08,
          ease: "power3.out",
        });
        gsap.from("[data-scene]", {
          x: 24,
          opacity: 0,
          duration: 0.9,
          delay: 0.12,
          ease: "power3.out",
        });
      }, pageRef);
    });

    return () => context?.revert();
  }, []);

  return (
    <div ref={pageRef} id="top" className="festival-page">
      <header className="festival-header">
        <a href="#top" aria-label="TechUtsav India home" className="brand-link">
          <img src={logo.url} alt="TechUtsav India" width={501} height={498} />
        </a>

        <nav aria-label="Primary navigation" className="desktop-navigation">
          {navigation.map((item) => (
            <a key={item} href="#top" aria-current={item === "Home" ? "page" : undefined}>
              {item}
            </a>
          ))}
        </nav>

        <Button variant="community" size="community" className="header-community" asChild>
          <a href="https://wa.me/" target="_blank" rel="noreferrer">Join Community</a>
        </Button>

        <Button
          variant="ghost"
          size="icon"
          className="menu-trigger"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X /> : <Menu />}
        </Button>

        <div id="mobile-navigation" className={`mobile-navigation ${menuOpen ? "is-open" : ""}`}>
          <nav aria-label="Mobile navigation">
            {navigation.map((item) => (
              <a key={item} href="#top" onClick={() => setMenuOpen(false)}>{item}</a>
            ))}
            <Button variant="community" size="community" className="w-full" asChild>
              <a href="https://wa.me/" target="_blank" rel="noreferrer">Join Community</a>
            </Button>
          </nav>
        </div>
      </header>

      <main className="festival-hero">
        <img className="top-flowers" src={topRightFlowers.url} alt="" width={1319} height={1192} aria-hidden="true" />
        <img className="left-leaves" src={leftLeaves.url} alt="" width={1319} height={1192} aria-hidden="true" />
        <section className="hero-copy" aria-labelledby="hero-title">
          <p data-enter className="hero-eyebrow">People <span>•</span> Events <span>•</span> Opportunities</p>
          <h1 id="hero-title" className="sr-only">TechUtsav India</h1>
          <img
            data-enter
            className="hero-typography"
            src={heroTypography.url}
            alt=""
            width={1536}
            height={1024}
            aria-hidden="true"
          />
          <a data-enter className="hero-cta" href="https://wa.me/" target="_blank" rel="noreferrer">
            <img src={heroButton.url} alt="" aria-hidden="true" />
            <span>Join Our WhatsApp Community</span>
          </a>
        </section>

        <img
          data-scene
          className="right-scene"
          src={rightScene.url}
          alt="A decorated auto-rickshaw entering a heritage archway toward a lively Indian technology festival"
          width={1536}
          height={1024}
          fetchPriority="high"
        />
      </main>
    </div>
  );
}