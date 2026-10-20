export const WHATSAPP_COMMUNITY_URL = "";
export const COMMUNITY_MEMBER_COUNT = 1000;

export interface EventListing {
  title: string;
  date: string;
  time: string;
  venue: string;
  city: string;
  category: string;
  registrationStatus: "open" | "coming-soon" | "closed";
  href?: string;
}

export const EVENT_LISTINGS: EventListing[] = [];
export const SOCIAL_PROFILE_LINKS: { label: string; href: string }[] = [];

export const DISCOVERY_CATEGORIES = [
  {
    title: "Tech Events",
    description: "Discover meetups, workshops, hackathons, and technology gatherings.",
    href: "#events",
  },
  {
    title: "Career Opportunities",
    description: "Explore relevant internships, jobs, developer programs, and career resources.",
    href: "#opportunities",
  },
  {
    title: "Learning Resources",
    description: "Find useful guides, learning material, and resources to support your growth.",
    href: "#resources",
  },
  {
    title: "Community Connections",
    description: "Meet fellow learners, developers, founders, and people who enjoy building.",
    href: "#community",
  },
] as const;

export const OPPORTUNITY_CATEGORIES = [
  {
    title: "Internships & Jobs",
    description: "Find relevant roles and early-career opportunities as verified listings become available.",
  },
  {
    title: "Hackathons & Buildathons",
    description: "Discover places to turn an idea into a project alongside other builders.",
  },
  {
    title: "Scholarships & Programs",
    description: "Explore learning programs and scholarships when confirmed opportunities are shared.",
  },
  {
    title: "Open-Source & Community Contributions",
    description: "Look for ways to contribute to useful projects and help the community grow.",
  },
] as const;

export const RESOURCE_CATEGORIES = [
  "Developer Guides",
  "AI & Emerging Technology",
  "System Design",
  "Project Ideas",
  "Tools & Tutorials",
] as const;

export const PARTICIPATION_PATHWAYS = [
  {
    title: "Learn Together",
    description: "Ask questions, exchange ideas, and keep learning alongside the community.",
  },
  {
    title: "Share What You Build",
    description: "Share a project, a lesson, or a new perspective with fellow builders.",
  },
  {
    title: "Help Others Grow",
    description: "Offer a thoughtful answer and make the community more welcoming for someone new.",
  },
] as const;