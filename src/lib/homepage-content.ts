/**
 * Public, verified homepage facts and links live here so content stays separate
 * from presentation. Keep time-sensitive updates in Supabase instead.
 */
export const WHATSAPP_COMMUNITY_URL =
  import.meta.env["VITE_WHATSAPP_COMMUNITY_URL"] ||
  "https://chat.whatsapp.com/HScAfFkeEA1BLuXEjWTEjg";

export const OFFICIAL_WHATSAPP_COMMUNITY_URL = WHATSAPP_COMMUNITY_URL;
export const COMMUNITY_MEMBER_COUNT = "1K+";

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
      "TechUtsav India is a student-first technology learning community. Members share useful learning resources, ask questions and explore opportunities together.",
  },
  {
    question: "Who can join the community?",
    answer:
      "Students and learners at any experience level are welcome. You do not need to be an expert to join or ask questions.",
  },
  {
    question: "Does TechUtsav India organize hackathons or events?",
    answer:
      "Not currently. The community focuses on helping students learn and upskill, and shares relevant opportunities with members.",
  },
  {
    question: "How do I get updates?",
    answer:
      "Join the official WhatsApp community to see the learning resources and opportunities shared with members.",
  },
];
