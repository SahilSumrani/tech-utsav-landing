import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Sparkles, Calendar, Image as ImageIcon, Settings } from "lucide-react";
import { EVENT_LISTINGS, OFFICIAL_WHATSAPP_COMMUNITY_URL } from "@/lib/homepage-content";
import type { AdminEvent, AdminTab } from "@/components/admin/types";
import { AdminLogin } from "@/components/admin/AdminLogin";
import { AdminHeader } from "@/components/admin/AdminHeader";
import { AdminOverview } from "@/components/admin/AdminOverview";
import { AdminEventsManager } from "@/components/admin/AdminEventsManager";
import { AdminGalleryManager } from "@/components/admin/AdminGalleryManager";
import { AdminSettings } from "@/components/admin/AdminSettings";

export const Route = createFileRoute("/admin")({
  head: () => ({
    meta: [{ title: "Admin Portal — TechUtsav India" }],
  }),
  component: AdminPage,
});

export function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [activeTab, setActiveTab] = useState<AdminTab>("overview");
  const [events, setEvents] = useState<AdminEvent[]>([]);
  const [galleryImages, setGalleryImages] = useState<string[]>([]);
  const [whatsappUrl, setWhatsappUrl] = useState(OFFICIAL_WHATSAPP_COMMUNITY_URL);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  useEffect(() => {
    // Auth check
    const token = localStorage.getItem("techutsav_admin_auth");
    if (token === "true") setIsAuthenticated(true);

    // Load events
    const savedEvents = localStorage.getItem("techutsav_events_data");
    if (savedEvents) {
      try {
        setEvents(JSON.parse(savedEvents));
      } catch {
        setEvents(getDefaultEvents());
      }
    } else {
      const defaults = getDefaultEvents();
      setEvents(defaults);
      localStorage.setItem("techutsav_events_data", JSON.stringify(defaults));
    }

    // Load gallery
    const savedGallery = localStorage.getItem("techutsav_gallery_data");
    if (savedGallery) {
      try {
        setGalleryImages(JSON.parse(savedGallery));
      } catch {
        setGalleryImages(getDefaultGallery());
      }
    } else {
      const defaults = getDefaultGallery();
      setGalleryImages(defaults);
      localStorage.setItem("techutsav_gallery_data", JSON.stringify(defaults));
    }

    // Load settings
    const savedWa = localStorage.getItem("techutsav_whatsapp_url");
    if (savedWa) setWhatsappUrl(savedWa);
  }, []);

  const showStatus = (msg: string) => {
    setStatusMessage(msg);
    setTimeout(() => setStatusMessage(null), 3000);
  };

  const handleLogout = () => {
    localStorage.removeItem("techutsav_admin_auth");
    setIsAuthenticated(false);
  };

  const handleAddEvent = (newEv: AdminEvent) => {
    const updated = [newEv, ...events];
    setEvents(updated);
    localStorage.setItem("techutsav_events_data", JSON.stringify(updated));
    showStatus("Event added to live roster!");
  };

  const handleDeleteEvent = (id: string) => {
    const updated = events.filter((ev) => ev.id !== id);
    setEvents(updated);
    localStorage.setItem("techutsav_events_data", JSON.stringify(updated));
    showStatus("Event removed.");
  };

  const handleAddImage = (url: string) => {
    const updated = [url, ...galleryImages];
    setGalleryImages(updated);
    localStorage.setItem("techutsav_gallery_data", JSON.stringify(updated));
    showStatus("Photo added to community gallery!");
  };

  const handleDeleteImage = (index: number) => {
    const updated = galleryImages.filter((_, i) => i !== index);
    setGalleryImages(updated);
    localStorage.setItem("techutsav_gallery_data", JSON.stringify(updated));
    showStatus("Photo removed.");
  };

  const handleResetDefaults = () => {
    const defaults = getDefaultGallery();
    setGalleryImages(defaults);
    localStorage.setItem("techutsav_gallery_data", JSON.stringify(defaults));
    showStatus("Default gallery restored.");
  };

  const handleSaveSettings = (newUrl: string) => {
    setWhatsappUrl(newUrl);
    localStorage.setItem("techutsav_whatsapp_url", newUrl);
    showStatus("Settings updated successfully!");
  };

  if (!isAuthenticated) {
    return <AdminLogin onSuccess={() => setIsAuthenticated(true)} />;
  }

  return (
    <div className="min-h-screen bg-[#07130F] text-[#EAE2D7] font-sans antialiased">
      <AdminHeader statusMessage={statusMessage} onLogout={handleLogout} />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Navigation Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-8 border-b border-white/10 pb-4">
          <TabButton
            active={activeTab === "overview"}
            onClick={() => setActiveTab("overview")}
            icon={<Sparkles className="w-4 h-4" />}
            label="Overview & Metrics"
          />
          <TabButton
            active={activeTab === "events"}
            onClick={() => setActiveTab("events")}
            icon={<Calendar className="w-4 h-4" />}
            label={`Upcoming Events (${events.length})`}
          />
          <TabButton
            active={activeTab === "gallery"}
            onClick={() => setActiveTab("gallery")}
            icon={<ImageIcon className="w-4 h-4" />}
            label={`Mosaic Gallery (${galleryImages.length})`}
          />
          <TabButton
            active={activeTab === "settings"}
            onClick={() => setActiveTab("settings")}
            icon={<Settings className="w-4 h-4" />}
            label="Movement Channels"
          />
        </div>

        {activeTab === "overview" && (
          <AdminOverview
            events={events}
            galleryImages={galleryImages}
            onNavigateTab={(tab) => setActiveTab(tab)}
          />
        )}

        {activeTab === "events" && (
          <AdminEventsManager
            events={events}
            onAddEvent={handleAddEvent}
            onDeleteEvent={handleDeleteEvent}
          />
        )}

        {activeTab === "gallery" && (
          <AdminGalleryManager
            galleryImages={galleryImages}
            onAddImage={handleAddImage}
            onDeleteImage={handleDeleteImage}
            onResetDefaults={handleResetDefaults}
          />
        )}

        {activeTab === "settings" && (
          <AdminSettings
            initialWhatsappUrl={whatsappUrl}
            onSave={handleSaveSettings}
          />
        )}
      </main>
    </div>
  );
}

function TabButton({
  active,
  onClick,
  icon,
  label,
}: {
  active: boolean;
  onClick: () => void;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-medium transition-all cursor-pointer ${
        active
          ? "bg-[#E65A24] text-white shadow-md shadow-[#E65A24]/20"
          : "bg-white/5 hover:bg-white/10 text-[#EAE2D7]/70 hover:text-white border border-white/5"
      }`}
    >
      {icon}
      {label}
    </button>
  );
}

function getDefaultEvents(): AdminEvent[] {
  return EVENT_LISTINGS.map((e, i) => ({
    id: e.id || `ev-${i + 1}`,
    title: e.title,
    date: e.date,
    time: e.time,
    venue: e.venue || `${e.city}`,
    mode: "In-Person & Virtual",
    tag: e.category,
    status: (e.registrationStatus as "open" | "waitlist" | "ended") || "open",
    link: e.href || OFFICIAL_WHATSAPP_COMMUNITY_URL,
  }));
}

function getDefaultGallery(): string[] {
  return [
    "/images/gallery/gallery-1.jpg",
    "/images/gallery/gallery-2.jpg",
    "/images/community/pair-coding.jpg",
    "/images/community/rooftop-meetup.jpg",
    "/images/gallery/gallery-4.jpg",
    "/images/gallery/gallery-5.jpg",
    "/images/gallery/gallery-6.jpg",
    "/images/gallery/gallery-7.jpg",
    "/images/gallery/gallery-3.jpg",
    "/images/community/meetup-main.jpg",
    "/images/gallery/gallery-1.jpg",
    "/images/gallery/gallery-2.jpg",
    "/images/gallery/gallery-4.jpg",
    "/images/gallery/gallery-5.jpg",
  ];
}
