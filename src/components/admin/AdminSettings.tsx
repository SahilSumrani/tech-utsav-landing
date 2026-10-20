import { useState } from "react";
import { CheckCircle2 } from "lucide-react";

interface AdminSettingsProps {
  initialWhatsappUrl: string;
  onSave: (whatsappUrl: string) => void;
}

export function AdminSettings({ initialWhatsappUrl, onSave }: AdminSettingsProps) {
  const [whatsappUrl, setWhatsappUrl] = useState(initialWhatsappUrl);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(whatsappUrl.trim());
  };

  return (
    <div className="max-w-2xl space-y-6 animate-fade-in">
      <div className="bg-[#0B1E17] border border-white/10 rounded-2xl p-6">
        <h2 className="text-lg font-serif font-bold text-white mb-1">
          Movement & Community URLs
        </h2>
        <p className="text-xs text-[#EAE2D7]/70 mb-6">
          Direct all primary CTA buttons on the landing page to these communication rooms.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
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
              Updates the "Join Our Community" and "Register Now" CTA buttons across the live site.
            </p>
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 bg-[#E65A24] hover:bg-[#d54e1b] text-white px-5 py-2.5 rounded-xl font-medium text-sm transition-all shadow-md shadow-[#E65A24]/20 cursor-pointer"
            >
              <CheckCircle2 className="w-4 h-4" />
              Save Channel Configuration
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
