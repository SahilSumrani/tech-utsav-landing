import { createFileRoute } from "@tanstack/react-router";
import { ArrowDown, ArrowUpRight, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import heroTypography from "@/assets/hero-typography.png.asset.json";
import logo from "@/assets/techutsav-logo.png.asset.json";
import rightScene from "@/assets/right-scene.png.asset.json";
import { COMMUNITY_MEMBER_COUNT, OFFICIAL_WHATSAPP_COMMUNITY_URL } from "@/lib/homepage-content";
import { CommunityManifestoSection } from "@/components/home/CommunityManifestoSection";
import { UpcomingEventsSection } from "@/components/home/UpcomingEventsSection";
import { JoinMovementSection } from "@/components/home/JoinMovementSection";
import { EditorialFooter } from "@/components/home/EditorialFooter";

const navigation = [
  { label: "About", href: "#about" },
  { label: "Updates", href: "#updates" },
  { label: "Community", href: "#community" },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "TechUtsav India — A student-first tech learning community" },
      {
        name: "description",
        content:
          "Join 1K+ learners in the TechUtsav India WhatsApp community. Discover student-friendly technology resources, useful opportunities and ways to grow your skills.",
      },
      { property: "og:title", content: "TechUtsav India — Grow your tech skills together" },
      {
        property: "og:description",
        content:
          "A student-first technology community sharing learning resources and opportunities to help learners grow.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div id="top" className="festival-page">
      <header className="festival-header">
        <a href="#top" aria-label="TechUtsav India home" className="brand-link">
          <img src={logo.url} alt="TechUtsav India" width={501} height={498} />
        </a>

        <nav aria-label="Primary navigation" className="desktop-navigation">
          {navigation.map((item) => (
            <a key={item.label} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <Button variant="community" size="community" className="header-community" asChild>
          <a href={OFFICIAL_WHATSAPP_COMMUNITY_URL} target="_blank" rel="noopener noreferrer">
            Join community
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

        <div id="mobile-navigation" className={`mobile-navigation ${menuOpen ? "is-open" : ""}`}>
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
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
              >
                Join community
              </a>
            </Button>
          </nav>
        </div>
      </header>

      <main>
        <section className="community-hero" aria-labelledby="hero-title">
          <div className="community-hero-copy">
            <p className="hero-eyebrow">
              A STUDENT-FIRST TECH COMMUNITY <span>·</span> INDIA
            </p>
            <h1 id="hero-title">
              Your curiosity can take you <span>further.</span>
            </h1>
            <p className="community-hero-description">
              Learn about technology, find useful opportunities and grow alongside a community of
              students who want to put their skills to work.
            </p>
            <a
              className="community-hero-cta"
              href={OFFICIAL_WHATSAPP_COMMUNITY_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Join {COMMUNITY_MEMBER_COUNT} learners on WhatsApp
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </a>
            <a className="community-hero-secondary" href="#about">
              Get to know us <ArrowDown className="size-4" aria-hidden="true" />
            </a>
          </div>
          <div className="community-hero-art" aria-hidden="true">
            <img src={heroTypography.url} alt="" width={1536} height={1024} />
            <img src={rightScene.url} alt="" width={1536} height={1024} />
          </div>
          <p className="community-hero-note">A year of learning together. 1K+ members.</p>
        </section>

        <CommunityManifestoSection />
        <UpcomingEventsSection />
        <JoinMovementSection />
      </main>

      <EditorialFooter />
    </div>
  );
}
