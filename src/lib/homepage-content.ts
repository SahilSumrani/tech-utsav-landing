/**
 * Public, verified homepage facts and links live here so content stays separate
 * from presentation. Keep time-sensitive updates in Supabase instead.
 */
export const WHATSAPP_COMMUNITY_URL =
  import.meta.env["VITE_WHATSAPP_COMMUNITY_URL"] ||
  "https://chat.whatsapp.com/HScAfFkeEA1BLuXEjWTEjg";

export const OFFICIAL_WHATSAPP_COMMUNITY_URL = WHATSAPP_COMMUNITY_URL;
export const COMMUNITY_MEMBER_COUNT = "1K+";
export const COMMUNITY_DESCRIPTION =
  "TechUtsav India shares technology events, learning resources and opportunities for students, developers, working professionals and startup founders.";
export const HOMEPAGE_SEO_TITLE = "TechUtsav India | Tech Events, Meetups & Conferences";
export const HOMEPAGE_SEO_DESCRIPTION =
  "Discover tech conferences, hackathons, college fests, DevFest, meetups and startup events shared for students, developers and professionals across India.";

export const COMMUNITY_AUDIENCES = [
  "Students",
  "Developers",
  "Working professionals",
  "Startup founders",
  "Tech enthusiasts",
];

export const COMMUNITY_OPPORTUNITIES = [
  "Technology conferences and industry events",
  "Google, Meta and Amazon events",
  "Government technology programs and conferences",
  "Hackathons and college fests",
  "DevFest, DevDay and developer meetups",
  "IIT Delhi events and campus programs",
  "Business summits and founder networking meetups",
];

export const COMMUNITY_SOCIAL_LINKS: { label: string; href: string }[] = [];

export const COMMUNITY_GUIDELINES = [
  "Be respectful and welcoming to learners at every experience level.",
  "Keep messages relevant to learning, technology and useful student opportunities.",
  "Avoid spam, unsolicited promotions and sharing anyone’s private information.",
  "Check links and claims before sharing them; label personal opinions clearly.",
];

export const COMMUNITY_FAQS = [
  {
    question: "What is TechUtsav India?",
    answer:
      "TechUtsav India is a community that helps people discover technology learning resources, events and opportunities, then put what they learn into practice.",
  },
  {
    question: "What kind of events and opportunities do you share?",
    answer:
      "We share technology conferences, Google, Meta and Amazon events, government programs, hackathons, college fests, DevFest and DevDay meetups, IIT Delhi events, business summits and founder networking opportunities.",
  },
  {
    question: "Who is the TechUtsav community for?",
    answer:
      "Students, developers, working professionals, startup founders and anyone curious about technology and learning are welcome.",
  },
  {
    question: "Does TechUtsav India organize the events it shares?",
    answer:
      "TechUtsav shares event announcements from campus, community, industry and public organizers. Check each listing for its host, eligibility and official details.",
  },
  {
    question: "How do I get updates?",
    answer:
      "Join the official WhatsApp community to see the learning resources and opportunities shared with members.",
  },
];
