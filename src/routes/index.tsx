import { createFileRoute } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import heroButton from "@/assets/hero-button.png.asset.json";
import heroTypography from "@/assets/hero-typography.png.asset.json";
import leftLeaves from "@/assets/left-leaves.png.asset.json";
import logo from "@/assets/techutsav-logo.png.asset.json";
import rightScene from "@/assets/right-scene.png.asset.json";
import topRightFlowers from "@/assets/top-right-flowers.png.asset.json";
import { OFFICIAL_WHATSAPP_COMMUNITY_URL } from "@/lib/homepage-content";
import { CommunityManifestoSection } from "@/components/home/CommunityManifestoSection";
import { UpcomingEventsSection } from "@/components/home/UpcomingEventsSection";
import { JoinMovementSection } from "@/components/home/JoinMovementSection";
import { EditorialFooter } from "@/components/home/EditorialFooter";
import { CommunityInfoSection } from "@/components/home/CommunityInfoSection";

const navigation = [
  { label: "About", href: "#about" },
  { label: "Updates", href: "#updates" },
  { label: "How to join", href: "#how-to-join" },
  { label: "Guidelines", href: "#guidelines" },
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
      <img
        className="top-right-flowers"
        src={topRightFlowers.url}
        alt=""
        width={1000}
        height={900}
        aria-hidden="true"
      />
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
        <div className="festival-hero">
          <img
            className="left-leaves"
            src={leftLeaves.url}
            alt=""
            width={1319}
            height={1192}
            aria-hidden="true"
          />
          <section className="hero-copy" aria-labelledby="hero-title">
            <h1 id="hero-title" className="sr-only">
              TechUtsav India
            </h1>
            <img
              className="hero-typography"
              src={heroTypography.url}
              alt=""
              width={1536}
              height={1024}
              aria-hidden="true"
            />
            <p className="hero-supporting-copy">
              Learn about technology, find useful opportunities and grow alongside a community of
              students who want to put their skills to work.
            </p>
            <a
              className="hero-cta"
              href={OFFICIAL_WHATSAPP_COMMUNITY_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={heroButton.url} alt="" aria-hidden="true" />
              <span>Join Our WhatsApp Community</span>
            </a>
          </section>
          <img
            className="right-scene"
            src={rightScene.url}
            alt="A decorated auto-rickshaw entering a heritage archway toward a lively Indian technology festival"
            width={1536}
            height={1024}
            fetchPriority="high"
          />
        </div>

        <CommunityManifestoSection />
        <UpcomingEventsSection />
        <CommunityInfoSection />
        <JoinMovementSection />
      </main>

      <EditorialFooter />
    </div>
  );
}
