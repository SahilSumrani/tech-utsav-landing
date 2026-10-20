export interface AdminEvent {
  id: string;
  title: string;
  date: string;
  time: string;
  venue: string;
  mode: string;
  tag: string;
  status: "open" | "waitlist" | "ended";
  link: string;
}

export type AdminTab = "overview" | "events" | "gallery" | "settings";
