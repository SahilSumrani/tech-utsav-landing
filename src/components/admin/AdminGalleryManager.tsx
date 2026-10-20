import { useState } from "react";
import { Plus, Trash2, RefreshCw } from "lucide-react";

interface AdminGalleryManagerProps {
  galleryImages: string[];
  onAddImage: (url: string) => void;
  onDeleteImage: (index: number) => void;
  onResetDefaults: () => void;
}

export function AdminGalleryManager({
  galleryImages,
  onAddImage,
  onDeleteImage,
  onResetDefaults,
}: AdminGalleryManagerProps) {
  const [newImageUrl, setNewImageUrl] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newImageUrl.trim()) return;
    onAddImage(newImageUrl.trim());
    setNewImageUrl("");
  };

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Add Image Card */}
      <div className="bg-[#0B1E17] border border-white/10 rounded-2xl p-6">
        <h2 className="text-lg font-serif font-bold text-white mb-1">
          Add Photo to Mosaic Gallery
        </h2>
        <p className="text-xs text-[#EAE2D7]/70 mb-4">
          Paste any high-resolution image URL to rotate inside the 14-slot arched gallery.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
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
            className="inline-flex items-center justify-center gap-2 bg-[#E65A24] hover:bg-[#d54e1b] text-white px-5 py-2.5 rounded-xl font-medium text-sm transition-all shadow-md shadow-[#E65A24]/20 cursor-pointer"
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
            onClick={onResetDefaults}
            className="text-xs text-[#EAE2D7]/60 hover:text-white flex items-center gap-1 font-mono cursor-pointer"
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
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&q=80";
                }}
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-2">
                <button
                  onClick={() => onDeleteImage(idx)}
                  className="px-2.5 py-1.5 rounded-lg bg-red-600 hover:bg-red-700 text-white text-xs flex items-center gap-1 shadow-lg cursor-pointer"
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
  );
}
