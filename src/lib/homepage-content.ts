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
