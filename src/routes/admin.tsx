import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import {
  Lock,
  Mail,
  LogOut,
  Calendar,
  Image as ImageIcon,
  Users,
  Settings,
  Plus,
  Trash2,
  ExternalLink,
  CheckCircle2,
  ShieldCheck,
  AlertCircle,
  Eye,
  EyeOff,
  Sparkles,
  RefreshCw,
} from "lucide-react";
import { EVENT_LISTINGS, OFFICIAL_WHATSAPP_COMMUNITY_URL } from "@/lib/homepage-content";

export const Route = createFileRoute("/admin")({
  head: () => ({
    meta: [{ title: "Admin Portal — TechUtsav India" }],
  }),
  component: AdminPage,
});

interface AdminEvent {
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

export function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [email, setEmail] = useState("admin@techutsav.in");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState("");
  const [activeTab, setActiveTab] = useState<"overview" | "events" | "gallery" | "settings">("overview");

  // Events state synced to localStorage
  const [events, setEvents] = useState<AdminEvent[]>([]);
  // Form state for adding an event
  const [newEventTitle, setNewEventTitle] = useState("");
  const [newEventDate, setNewEventDate] = useState("");
  const [newEventTime, setNewEventTime] = useState("");
  const [newEventVenue, setNewEventVenue] = useState("");
  const [newEventTag, setNewEventTag] = useState("AI & Cloud");
  const [newEventLink, setNewEventLink] = useState("");

  // Gallery items synced to localStorage
  const [galleryImages, setGalleryImages] = useState<string[]>([]);
  const [newImageUrl, setNewImageUrl] = useState("");

  // Community settings
  const [whatsappUrl, setWhatsappUrl] = useState(OFFICIAL_WHATSAPP_COMMUNITY_URL);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  // Check auth on load
  useEffect(() => {
    const token = localStorage.getItem("techutsav_admin_auth");
    if (token === "true") {
      setIsAuthenticated(true);
    }

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

    // Load community settings
    const savedWa = localStorage.getItem("techutsav_whatsapp_url");
    if (savedWa) setWhatsappUrl(savedWa);
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError("");

    // Standard credential check (admin@techutsav.in / admin123 or admin / admin)
    if (
      (email === "admin@techutsav.in" || email === "admin") &&
      (password === "admin123" || password === "techutsav2026")
    ) {
      localStorage.setItem("techutsav_admin_auth", "true");
      setIsAuthenticated(true);
    } else {
      setLoginError("Invalid credentials. Try: admin@techutsav.in / admin123");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("techutsav_admin_auth");
    setIsAuthenticated(false);
    setPassword("");
  };

  const handleAddEvent = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newEventTitle.trim()) return;

    const newEv: AdminEvent = {
      id: Date.now().toString(),
      title: newEventTitle.trim(),
      date: newEventDate || "TBA",
      time: newEventTime || "11:00 AM IST",
      venue: newEventVenue || "Virtual / Discord Stage",
      mode: "In-Person & Virtual",
      tag: newEventTag,
      status: "open",
      link: newEventLink.trim() || OFFICIAL_WHATSAPP_COMMUNITY_URL,
    };

    const updated = [newEv, ...events];
    setEvents(updated);
    localStorage.setItem("techutsav_events_data", JSON.stringify(updated));
    setNewEventTitle("");
    setNewEventDate("");
    setNewEventTime("");
    setNewEventVenue("");
    setNewEventLink("");
    showSuccess("Event added to live roster!");
  };

  const handleDeleteEvent = (id: string) => {
    const updated = events.filter((ev) => ev.id !== id);
    setEvents(updated);
    localStorage.setItem("techutsav_events_data", JSON.stringify(updated));
    showSuccess("Event removed successfully.");
  };

  const handleAddImage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newImageUrl.trim()) return;
    const updated = [newImageUrl.trim(), ...galleryImages];
    setGalleryImages(updated);
    localStorage.setItem("techutsav_gallery_data", JSON.stringify(updated));
    setNewImageUrl("");
    showSuccess("Photo added to community gallery!");
  };

  const handleDeleteImage = (index: number) => {
    const updated = galleryImages.filter((_, i) => i !== index);
    setGalleryImages(updated);
    localStorage.setItem("techutsav_gallery_data", JSON.stringify(updated));
    showSuccess("Image removed from gallery.");
  };

  const handleSaveSettings = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem("techutsav_whatsapp_url", whatsappUrl);
    showSuccess("Settings updated successfully!");
  };

  const showSuccess = (msg: string) => {
    setStatusMessage(msg);
    setTimeout(() => setStatusMessage(null), 3000);
  };

  // LOGIN SCREEN
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#07130F] flex flex-col justify-center items-center px-4 py-12 relative overflow-hidden font-sans">
        {/* Subtle background glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#E65A24]/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#005A3C]/20 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative z-10 w-full max-w-md">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[#E65A24] text-xs font-mono font-medium tracking-wider uppercase mb-3">
              <ShieldCheck className="w-3.5 h-3.5" />
              TechUtsav Operations
            </div>
            <h1 className="text-3xl font-serif font-bold text-white tracking-tight">
              Community Admin Portal
            </h1>
            <p className="mt-2 text-sm text-[#EAE2D7]/65">
              Secure console for events, gallery snapshots, and movement channels.
            </p>
          </div>

          {/* Login Card */}
          <div className="bg-[#0B1E17]/90 backdrop-blur-xl border border-white/10 rounded-2xl p-7 shadow-2xl shadow-black/60">
            <form onSubmit={handleLogin} className="space-y-4">
              {loginError && (
                <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-300 text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{loginError}</span>
                </div>
              )}

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-[#EAE2D7]/80 mb-1.5">
                  Admin Identity / Email
                </label>
                <div className="relative">
                  <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                  <input
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full bg-black/40 border border-white/15 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#E65A24] transition-colors font-sans"
                    placeholder="admin@techutsav.in"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-[#EAE2D7]/80 mb-1.5">
                  Security Passkey
                </label>
                <div className="relative">
                  <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="w-full bg-black/40 border border-white/15 rounded-xl pl-10 pr-10 py-2.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#E65A24] transition-colors font-sans"
                    placeholder="Enter passkey (e.g. admin123)"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-white/40 hover:text-white transition-colors"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <div className="p-2.5 rounded-lg bg-white/5 border border-white/5 text-[11px] text-[#EAE2D7]/70 font-mono">
                <span className="text-[#E65A24] font-semibold">Demo Access:</span> Use{" "}
                <span className="text-white">admin@techutsav.in</span> with key{" "}
                <span className="text-white">admin123</span>
              </div>

              <button
                type="submit"
                className="w-full mt-2 inline-flex items-center justify-center gap-2 bg-[#E65A24] hover:bg-[#d54e1b] text-white font-medium py-3 rounded-xl transition-all shadow-lg shadow-[#E65A24]/20 active:scale-[0.99]"
              >
                <Lock className="w-4 h-4" />
                Authenticate & Enter Console
              </button>
            </form>

            <div className="mt-6 pt-5 border-t border-white/10 text-center">
              <Link
                to="/"
                className="text-xs text-[#EAE2D7]/60 hover:text-white transition-colors inline-flex items-center gap-1.5"
              >
                ← Return to Public TechUtsav Website
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // AUTHENTICATED ADMIN DASHBOARD
  return (
    <div className="min-h-screen bg-[#07130F] text-[#EAE2D7] font-sans antialiased">
      {/* Top Navigation */}
      <header className="border-b border-white/10 bg-[#0B1E17]/80 backdrop-blur-md sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-serif font-bold text-lg text-white tracking-tight">
              TechUtsav <span className="text-[#E65A24] font-sans text-xs px-2 py-0.5 rounded bg-[#E65A24]/10 border border-[#E65A24]/30 uppercase font-mono">Admin</span>
            </span>
          </div>

          <div className="flex items-center gap-3">
            {statusMessage && (
              <span className="text-xs text-emerald-300 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full animate-fade-in flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" />
                {statusMessage}
              </span>
            )}
            <Link
              to="/"
              className="text-xs text-[#EAE2D7]/70 hover:text-white px-3 py-1.5 rounded-lg border border-white/10 hover:border-white/20 transition-all flex items-center gap-1.5"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              Live Site
            </Link>
            <button
              onClick={handleLogout}
              className="text-xs text-red-300 hover:text-red-200 bg-red-500/10 hover:bg-red-500/20 px-3 py-1.5 rounded-lg border border-red-500/20 transition-all flex items-center gap-1.5"
            >
              <LogOut className="w-3.5 h-3.5" />
              Logout
            </button>
          </div>
        </div>
      </header>

      {/* Main Workspace */}
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

        {/* TAB 1: OVERVIEW */}
        {activeTab === "overview" && (
          <div className="space-y-8 animate-fade-in">
            {/* Stat Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <MetricCard
                label="Registered Builders"
                value="1,420+"
                change="+18% this month"
                badge="Pan-India"
              />
              <MetricCard
                label="Upcoming Roster"
                value={events.length.toString()}
                change="Active workshops"
                badge="Live"
              />
              <MetricCard
                label="Mosaic Photos"
                value={galleryImages.length.toString()}
                change="Curated moments"
                badge="HD"
              />
              <MetricCard
                label="WhatsApp Guild"
                value="Active"
                change="Instant invite enabled"
                badge="24/7"
              />
            </div>

            {/* Quick Actions Panel */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-[#0B1E17] border border-white/10 rounded-2xl p-6">
                <h3 className="text-base font-semibold text-white mb-2 flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-[#E65A24]" />
                  Active Event Pipeline
                </h3>
                <p className="text-xs text-[#EAE2D7]/70 mb-4">
                  Currently scheduled hack-nights and campus sessions visible on homepage.
                </p>
                <div className="space-y-2.5 max-h-64 overflow-y-auto pr-1">
                  {events.map((ev) => (
                    <div
                      key={ev.id}
                      className="p-3 rounded-xl bg-black/30 border border-white/5 flex items-center justify-between text-xs"
                    >
                      <div>
                        <div className="font-medium text-white">{ev.title}</div>
                        <div className="text-[#EAE2D7]/60 font-mono text-[11px]">
                          {ev.date} • {ev.venue}
                        </div>
                      </div>
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                        {ev.tag}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-[#0B1E17] border border-white/10 rounded-2xl p-6">
                <h3 className="text-base font-semibold text-white mb-2 flex items-center gap-2">
                  <ImageIcon className="w-4 h-4 text-[#E65A24]" />
                  Mosaic Photo Pool
                </h3>
                <p className="text-xs text-[#EAE2D7]/70 mb-4">
                  Dynamic 14-slot gallery snapshot running on frontend.
                </p>
                <div className="grid grid-cols-4 gap-2">
                  {galleryImages.slice(0, 8).map((img, i) => (
                    <div
                      key={i}
                      className="aspect-square rounded-lg overflow-hidden border border-white/10 bg-black/40"
                    >
                      <img
                        src={img}
                        alt={`Snapshot ${i + 1}`}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src =
                            "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=300&q=80";
                        }}
                      />
                    </div>
                  ))}
                </div>
                <div className="mt-4 text-right">
                  <button
                    onClick={() => setActiveTab("gallery")}
                    className="text-xs text-[#E65A24] hover:underline font-mono"
                  >
                    Manage all {galleryImages.length} photos →
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: EVENTS MANAGEMENT */}
        {activeTab === "events" && (
          <div className="space-y-8 animate-fade-in">
            {/* Create New Event Form */}
            <div className="bg-[#0B1E17] border border-white/10 rounded-2xl p-6">
              <h2 className="text-lg font-serif font-bold text-white mb-1">
                Schedule New TechUtsav Event
              </h2>
              <p className="text-xs text-[#EAE2D7]/70 mb-6">
                Publish a meet, workshop, or open-source hack-day directly to the live homepage.
              </p>

              <form onSubmit={handleAddEvent} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="lg:col-span-2">
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#EAE2D7]/70 mb-1">
                    Event Title *
                  </label>
                  <input
                    type="text"
                    value={newEventTitle}
                    onChange={(e) => setNewEventTitle(e.target.value)}
                    required
                    placeholder="e.g. Building with Llama 3 & Agentic Systems"
                    className="w-full bg-black/40 border border-white/15 rounded-xl px-3.5 py-2 text-sm text-white focus:outline-none focus:border-[#E65A24]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#EAE2D7]/70 mb-1">
                    Track / Category
                  </label>
                  <select
                    value={newEventTag}
                    onChange={(e) => setNewEventTag(e.target.value)}
                    className="w-full bg-black/40 border border-white/15 rounded-xl px-3.5 py-2 text-sm text-white focus:outline-none focus:border-[#E65A24]"
                  >
                    <option value="AI & Agents">AI & Agents</option>
                    <option value="Open Source & Rust">Open Source & Rust</option>
                    <option value="Web3 & Distributed">Web3 & Distributed</option>
                    <option value="Fullstack & Devops">Fullstack & Devops</option>
                    <option value="Hardware & Robotics">Hardware & Robotics</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#EAE2D7]/70 mb-1">
                    Date
                  </label>
                  <input
                    type="text"
                    value={newEventDate}
                    onChange={(e) => setNewEventDate(e.target.value)}
                    placeholder="e.g. November 14, 2026"
                    className="w-full bg-black/40 border border-white/15 rounded-xl px-3.5 py-2 text-sm text-white focus:outline-none focus:border-[#E65A24]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#EAE2D7]/70 mb-1">
                    Time
                  </label>
                  <input
                    type="text"
                    value={newEventTime}
                    onChange={(e) => setNewEventTime(e.target.value)}
                    placeholder="e.g. 5:00 PM – 8:00 PM IST"
                    className="w-full bg-black/40 border border-white/15 rounded-xl px-3.5 py-2 text-sm text-white focus:outline-none focus:border-[#E65A24]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#EAE2D7]/70 mb-1">
                    Venue / Platform
                  </label>
                  <input
                    type="text"
                    value={newEventVenue}
                    onChange={(e) => setNewEventVenue(e.target.value)}
                    placeholder="e.g. Bengaluru / Discord Live Stage"
                    className="w-full bg-black/40 border border-white/15 rounded-xl px-3.5 py-2 text-sm text-white focus:outline-none focus:border-[#E65A24]"
                  />
                </div>

                <div className="lg:col-span-2">
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#EAE2D7]/70 mb-1">
                    RSVP / Registration Link
                  </label>
                  <input
                    type="url"
                    value={newEventLink}
                    onChange={(e) => setNewEventLink(e.target.value)}
                    placeholder="https://chat.whatsapp.com/... or Luma link"
                    className="w-full bg-black/40 border border-white/15 rounded-xl px-3.5 py-2 text-sm text-white focus:outline-none focus:border-[#E65A24]"
                  />
                </div>

                <div className="flex items-end">
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#E65A24] hover:bg-[#d54e1b] text-white font-medium py-2.5 rounded-xl transition-all shadow-md shadow-[#E65A24]/20"
                  >
                    <Plus className="w-4 h-4" />
                    Publish Event
                  </button>
                </div>
              </form>
            </div>

            {/* Existing Events List */}
            <div className="bg-[#0B1E17] border border-white/10 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-base font-semibold text-white">Current Event Roster</h3>
                <span className="text-xs text-[#EAE2D7]/60 font-mono">
                  {events.length} events loaded
                </span>
              </div>

              <div className="divide-y divide-white/10">
                {events.map((ev) => (
                  <div
                    key={ev.id}
                    className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-2.5">
                        <span className="font-semibold text-white text-sm">{ev.title}</span>
                        <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/5 border border-white/10 text-[#EAE2D7]/70">
                          {ev.tag}
                        </span>
                      </div>
                      <div className="text-xs text-[#EAE2D7]/60 flex items-center gap-3 font-mono">
                        <span>{ev.date}</span>
                        <span>•</span>
                        <span>{ev.time}</span>
                        <span>•</span>
                        <span>{ev.venue}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 self-end sm:self-center">
                      <a
                        href={ev.link}
                        target="_blank"
                        rel="noreferrer"
                        className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-xs text-white border border-white/10 inline-flex items-center gap-1"
                      >
                        <ExternalLink className="w-3 h-3" />
                        RSVP
                      </a>
                      <button
                        onClick={() => handleDeleteEvent(ev.id)}
                        className="p-1.5 rounded-lg bg-red-500/10 hover:bg-red-500/20 text-red-300 border border-red-500/20 transition-colors"
                        title="Delete event"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: GALLERY MANAGEMENT */}
        {activeTab === "gallery" && (
          <div className="space-y-8 animate-fade-in">
            {/* Add Image Card */}
            <div className="bg-[#0B1E17] border border-white/10 rounded-2xl p-6">
              <h2 className="text-lg font-serif font-bold text-white mb-1">
                Add Photo to Mosaic Gallery
              </h2>
              <p className="text-xs text-[#EAE2D7]/70 mb-4">
                Paste any high-resolution image URL to rotate inside the 14-slot arched gallery.
              </p>

              <form onSubmit={handleAddImage} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="url"
                  value={newImageUrl}
                  onChange={(e) => setNewImageUrl(e.target.value)}
                  required
                  placeholder="https://images.unsplash.com/... or your CDN link"
                  className="flex-1 bg-black/40 border border-white/15 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#E65A24]"
                />
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 bg-[#E65A24] hover:bg-[#d54e1b] text-white px-5 py-2.5 rounded-xl font-medium text-sm transition-all shadow-md shadow-[#E65A24]/20"
                >
                  <Plus className="w-4 h-4" />
                  Add Photo
                </button>
              </form>
            </div>

            {/* Gallery Grid */}
            <div className="bg-[#0B1E17] border border-white/10 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-base font-semibold text-white">Active Photo Pool</h3>
                  <p className="text-xs text-[#EAE2D7]/60">
                    Showing {galleryImages.length} photos active in dynamic rotation
                  </p>
                </div>
                <button
                  onClick={() => {
                    const defaults = getDefaultGallery();
                    setGalleryImages(defaults);
                    localStorage.setItem("techutsav_gallery_data", JSON.stringify(defaults));
                    showSuccess("Restored default gallery photos.");
                  }}
                  className="text-xs text-[#EAE2D7]/60 hover:text-white flex items-center gap-1 font-mono"
                >
                  <RefreshCw className="w-3 h-3" />
                  Reset to default
                </button>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                {galleryImages.map((img, idx) => (
                  <div
                    key={idx}
                    className="group relative aspect-[4/3] rounded-xl overflow-hidden border border-white/10 bg-black/50"
                  >
                    <img
                      src={img}
                      alt={`Gallery slot ${idx + 1}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-2">
                      <button
                        onClick={() => handleDeleteImage(idx)}
                        className="px-2.5 py-1.5 rounded-lg bg-red-600 hover:bg-red-700 text-white text-xs flex items-center gap-1 shadow-lg"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                        Remove
                      </button>
                    </div>
                    <div className="absolute top-1.5 left-1.5 px-1.5 py-0.5 rounded bg-black/70 text-[10px] font-mono text-white/80">
                      #{idx + 1}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: SETTINGS */}
        {activeTab === "settings" && (
          <div className="max-w-2xl space-y-6 animate-fade-in">
            <div className="bg-[#0B1E17] border border-white/10 rounded-2xl p-6">
              <h2 className="text-lg font-serif font-bold text-white mb-1">
                Movement & Community URLs
              </h2>
              <p className="text-xs text-[#EAE2D7]/70 mb-6">
                Direct all primary CTA buttons on the landing page to these communication rooms.
              </p>

              <form onSubmit={handleSaveSettings} className="space-y-4">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#EAE2D7]/80 mb-1.5">
                    Official WhatsApp Group URL
                  </label>
                  <input
                    type="url"
                    value={whatsappUrl}
                    onChange={(e) => setWhatsappUrl(e.target.value)}
                    required
                    className="w-full bg-black/40 border border-white/15 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#E65A24] font-mono"
                  />
                  <p className="text-[11px] text-[#EAE2D7]/50 mt-1">
                    Updates the "Join Our Community" and "Register Now" CTA buttons on the homepage.
                  </p>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 bg-[#E65A24] hover:bg-[#d54e1b] text-white px-5 py-2.5 rounded-xl font-medium text-sm transition-all shadow-md shadow-[#E65A24]/20"
                  >
                    <CheckCircle2 className="w-4 h-4" />
                    Save Channel Configuration
                  </button>
                </div>
              </form>
            </div>
          </div>
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
      className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-medium transition-all ${
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

function MetricCard({
  label,
  value,
  change,
  badge,
}: {
  label: string;
  value: string;
  change: string;
  badge: string;
}) {
  return (
    <div className="bg-[#0B1E17] border border-white/10 rounded-2xl p-5 relative overflow-hidden">
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs text-[#EAE2D7]/60 font-mono uppercase tracking-wider">{label}</span>
        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-[#E65A24] border border-[#E65A24]/20">
          {badge}
        </span>
      </div>
      <div className="text-2xl font-serif font-bold text-white mb-1">{value}</div>
      <div className="text-[11px] text-emerald-400 font-mono">{change}</div>
    </div>
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
    "/images/x.com/1.jpeg",
    "/images/x.com/2.jpeg",
    "/images/x.com/3.jpeg",
    "/images/x.com/4.jpeg",
    "/images/x.com/5.jpeg",
    "/images/x.com/6.jpeg",
    "/images/x.com/7.jpeg",
    "/images/x.com/8.jpeg",
    "/images/x.com/9.jpeg",
    "/images/x.com/10.jpeg",
    "/images/x.com/11.jpeg",
    "/images/x.com/12.jpeg",
    "/images/x.com/13.jpeg",
    "/images/x.com/14.jpeg",
    "/images/x.com/19.jpeg",
    "/images/x.com/20.jpeg",
    "/images/x.com/21.jpeg",
    "/images/x.com/22.jpeg",
  ];
}
