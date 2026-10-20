import { createFileRoute } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import heroButton from "@/assets/hero-button.png.asset.json";
import heroTypography from "@/assets/hero-typography.png.asset.json";
import leftLeaves from "@/assets/left-leaves.png.asset.json";
import logo from "@/assets/techutsav-logo.png.asset.json";
import rightScene from "@/assets/right-scene.png.asset.json";
import { OFFICIAL_WHATSAPP_COMMUNITY_URL } from "@/lib/homepage-content";

// Focused Community Hierarchy Components
import { IntroPreloader } from "@/components/home/IntroPreloader";
import { CommunityManifestoSection } from "@/components/home/CommunityManifestoSection";
import { UpcomingEventsSection } from "@/components/home/UpcomingEventsSection";
import { PhotoGallerySection } from "@/components/home/PhotoGallerySection";
import { JoinMovementSection } from "@/components/home/JoinMovementSection";
import { EditorialFooter } from "@/components/home/EditorialFooter";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "TechUtsav India — People, Events & Opportunities" },
      {
        name: "description",
        content:
          "An authentic Indian technology community connecting developers, students, founders, and open-source builders across India.",
      },
      { property: "og:title", content: "TechUtsav India — People, Events & Opportunities" },
      {
        property: "og:description",
        content:
          "An authentic Indian technology community connecting developers, students, founders, and open-source builders across India.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const navigation = [
  { label: "Home", href: "#top" },
  { label: "Who We Are", href: "#about" },
  { label: "Events", href: "#events" },
  { label: "Gallery", href: "#gallery" },
  { label: "Community", href: "#community" },
];

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches || !pageRef.current) return;

    let context: { revert: () => void } | undefined;
    void Promise.all([import("gsap"), import("gsap/ScrollTrigger")]).then(
      ([{ gsap }, { ScrollTrigger }]) => {
        if (!pageRef.current) return;
        gsap.registerPlugin(ScrollTrigger);

        context = gsap.context(() => {
          // Hero entrance animations
          gsap.from("[data-enter]", {
            y: 20,
            opacity: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: "power3.out",
          });
          gsap.from("[data-scene]", {
            x: 28,
            opacity: 0,
            duration: 0.95,
            delay: 0.15,
            ease: "power3.out",
          });

          // Section headings subtle reveal
          const headings = document.querySelectorAll("h2[id]");
          headings.forEach((heading) => {
            gsap.from(heading, {
              scrollTrigger: {
                trigger: heading,
                start: "top 88%",
                once: true,
              },
              y: 24,
              opacity: 0,
              duration: 0.75,
              ease: "power2.out",
            });
          });
        }, pageRef);
      }
    );

    return () => context?.revert();
  }, []);

  return (
    <div ref={pageRef} id="top" className="festival-page">
      {/* Intro Words Preloader Animation (Skiper 8) */}
      <IntroPreloader />

      {/* Top Right Hanging Flowers Artwork */}
      <img
        className="top-right-flowers"
        src="/images/top-right-flowers.png"
        alt=""
        width={1000}
        height={900}
        aria-hidden="true"
      />

      {/* 1. Header and Brand Navigation */}
      <header className="festival-header" role="banner">
        <a href="#top" aria-label="TechUtsav India home" className="brand-link">
          <img src={logo.url} alt="TechUtsav India" width={501} height={498} />
        </a>

        <nav aria-label="Primary navigation" className="desktop-navigation">
          {navigation.map((item) => (
            <a key={item.label} href={item.href} aria-current={item.label === "Home" ? "page" : undefined}>
              {item.label}
            </a>
          ))}
        </nav>

        <Button variant="community" size="community" className="header-community" asChild>
          <a href={OFFICIAL_WHATSAPP_COMMUNITY_URL} target="_blank" rel="noreferrer">
            Join Community
          </a>
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
          {menuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
        </Button>

        {/* Accessible Mobile Navigation Panel */}
        <div id="mobile-navigation" className={`mobile-navigation ${menuOpen ? "is-open" : ""}`} role="navigation">
          <nav aria-label="Mobile navigation links">
            {navigation.map((item) => (
              <a key={item.label} href={item.href} onClick={() => setMenuOpen(false)}>
                {item.label}
              </a>
            ))}
            <Button variant="community" size="community" className="w-full mt-3" asChild>
              <a
                href={OFFICIAL_WHATSAPP_COMMUNITY_URL}
                target="_blank"
                rel="noreferrer"
                onClick={() => setMenuOpen(false)}
              >
                Join Community
              </a>
            </Button>
          </nav>
        </div>
      </header>

      {/* 1. Existing Hero Section (Preserved pixel-perfect) */}
      <main className="festival-hero">
        <img className="left-leaves" src={leftLeaves.url} alt="" width={1319} height={1192} aria-hidden="true" />
        <section className="hero-copy" aria-labelledby="hero-title">
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
          <a data-enter className="hero-cta" href={OFFICIAL_WHATSAPP_COMMUNITY_URL} target="_blank" rel="noreferrer">
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

      {/* 2. Who We Are: Editorial Manifesto with Indian-inspired illustration */}
      <CommunityManifestoSection />

      {/* 3. Upcoming Events: Verified events in Nerds Room card grid */}
      <UpcomingEventsSection />

      {/* 4. Join Our Community: Shifted directly below Upcoming Events */}
      <JoinMovementSection />

      {/* 5. Photo Gallery: 14-Slot Dynamic Mosaic Gallery from Nerds Room */}
      <PhotoGallerySection />

      {/* 6. Refined Minimal & Modern Footer */}
      <EditorialFooter />
    </div>
  );
}