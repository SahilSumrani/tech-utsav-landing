import { Link } from "@tanstack/react-router";
import { LogOut, ExternalLink, CheckCircle2 } from "lucide-react";

interface AdminHeaderProps {
  statusMessage: string | null;
  onLogout: () => void;
}

export function AdminHeader({ statusMessage, onLogout }: AdminHeaderProps) {
  return (
    <header className="border-b border-white/10 bg-[#0B1E17]/80 backdrop-blur-md sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="font-serif font-bold text-lg text-white tracking-tight">
            TechUtsav{" "}
            <span className="text-[#E65A24] font-sans text-xs px-2 py-0.5 rounded bg-[#E65A24]/10 border border-[#E65A24]/30 uppercase font-mono">
              Admin
            </span>
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
            onClick={onLogout}
            className="text-xs text-red-300 hover:text-red-200 bg-red-500/10 hover:bg-red-500/20 px-3 py-1.5 rounded-lg border border-red-500/20 transition-all flex items-center gap-1.5 cursor-pointer"
          >
            <LogOut className="w-3.5 h-3.5" />
            Logout
          </button>
        </div>
      </div>
    </header>
  );
}
