import { useState, useEffect, useRef } from "react";

// Helper component for smooth image transitions (exact from nerds-room)
const MosaicImage = ({
  src,
  alt,
  className,
  onClick,
}: {
  src: string;
  alt: string;
  className: string;
  onClick: () => void;
}) => {
  const [currentSrc, setCurrentSrc] = useState(src);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    if (src !== currentSrc) {
      setIsFading(true);
      const timer = setTimeout(() => {
        setCurrentSrc(src);
        setIsFading(false);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [src]);

  return (
    <div className={`${className} bg-slate-100 overflow-hidden`}>
      <img
        src={currentSrc}
        alt={alt}
        loading="lazy"
        decoding="async"
        onClick={onClick}
        className={`w-full h-full object-cover transition-opacity duration-500 ease-in-out ${
          isFading ? "opacity-0" : "opacity-100"
        }`}
        onError={(e) => {
          (e.currentTarget as HTMLImageElement).src = "/images/gallery/gallery-1.jpg";
        }}
      />
    </div>
  );
};

const DEFAULT_POOL = [
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

export function PhotoGallerySection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [visibleImages, setVisibleImages] = useState<string[]>(DEFAULT_POOL);
  const allImagesRef = useRef<string[]>(DEFAULT_POOL);

  // Initialize from localStorage (Admin panel updates) or default
  useEffect(() => {
    try {
      const stored =
        localStorage.getItem("techutsav_gallery_pool") ||
        localStorage.getItem("techutsav_gallery_data");
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed) && parsed.length > 0) {
          allImagesRef.current = parsed;
          setVisibleImages(parsed.slice(0, 14));
          return;
        }
      }
    } catch {}
    allImagesRef.current = DEFAULT_POOL;
    setVisibleImages(DEFAULT_POOL);
  }, []);

  // Subtle rotation timer like Nerds Room
  useEffect(() => {
    const interval = setInterval(() => {
      const pool = allImagesRef.current;
      if (pool.length <= 14) return;

      setVisibleImages((current) => {
        const next = [...current];
        const randomSlot = Math.floor(Math.random() * 14);
        const unshown = pool.filter((img) => !next.includes(img));
        if (unshown.length > 0) {
          next[randomSlot] = unshown[Math.floor(Math.random() * unshown.length)];
        }
        return next;
      });
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  // Split into columns for 2 + 3 + 4 + 3 + 2 layout
  const col1 = visibleImages.slice(0, 2);
  const col2 = visibleImages.slice(2, 5);
  const center = visibleImages.slice(5, 9);
  const col3 = visibleImages.slice(9, 12);
  const col4 = visibleImages.slice(12, 14);

  return (
    <section
      id="gallery"
      className="relative w-full overflow-hidden bg-gradient-to-b from-gray-50 to-white pt-12 pb-6 lg:pt-20 lg:pb-10 border-t border-slate-200/80"
    >
      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 cursor-zoom-out"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors cursor-pointer"
            onClick={() => setSelectedImage(null)}
            aria-label="Close lightbox"
          >
            <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <img
            src={selectedImage}
            className="max-w-full max-h-full object-contain rounded-2xl shadow-2xl animate-in zoom-in duration-300"
            alt="Full view"
          />
        </div>
      )}

      <div className="relative mx-auto max-w-[1920px]">
        {/* Mobile View - Simplified Subset */}
        <div className="lg:hidden px-2 sm:px-4">
          <div className="mb-6 sm:mb-8 text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#003B27]/20 bg-[#003B27]/5 px-3 py-1 text-xs font-mono font-bold uppercase tracking-widest text-[#003B27] mb-2">
              <span className="size-1.5 rounded-full bg-[#E65A24]" />
              MOMENTS & SNAPSHOTS
              <span className="size-1.5 rounded-full bg-[#E65A24]" />
            </div>
            <h2 className="font-display text-3xl font-bold sm:text-4xl text-[#111814] tracking-tight">
              Community <span className="text-[#003B27]">Gallery</span>
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-[#4A554E] font-medium max-w-sm mx-auto">
              Real moments from meetups, hackathons, and campus sessions.
            </p>
          </div>
          <div className="flex items-center justify-center gap-3 sm:gap-5 md:gap-8 max-w-full">
            {/* Left Column (2 items) */}
            <div className="flex flex-col gap-3 sm:gap-4 md:gap-6 flex-shrink-0">
              {col1.map((img, index) => (
                <div
                  key={`mob-col1-${index}`}
                  className="group relative h-[120px] w-[85px] sm:h-[150px] sm:w-[105px] md:h-[182px] md:w-[134px] overflow-hidden rounded-xl sm:rounded-2xl md:rounded-3xl shadow-lg hover:scale-105 transition-all duration-300"
                >
                  <MosaicImage
                    src={img}
                    alt={`Gallery ${index}`}
                    className="h-full w-full"
                    onClick={() => setSelectedImage(img)}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-10 pointer-events-none" />
                </div>
              ))}
            </div>

            {/* Center (1 main item) */}
            <div className="flex items-center justify-center flex-shrink-0">
              <div className="group relative h-[200px] w-[140px] sm:h-[250px] sm:w-[175px] md:h-[300px] md:w-[220px] overflow-hidden rounded-xl sm:rounded-2xl md:rounded-3xl shadow-xl hover:scale-105 transition-all duration-300">
                <MosaicImage
                  src={center[0] || DEFAULT_POOL[0]}
                  alt="Center Gallery"
                  className="h-full w-full"
                  onClick={() => setSelectedImage(center[0] || DEFAULT_POOL[0])}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-10 pointer-events-none" />
              </div>
            </div>

            {/* Right Column (2 items) */}
            <div className="flex flex-col gap-3 sm:gap-4 md:gap-6 flex-shrink-0">
              {col4.map((img, index) => (
                <div
                  key={`mob-col4-${index}`}
                  className="group relative h-[120px] w-[85px] sm:h-[150px] sm:w-[105px] md:h-[182px] md:w-[134px] overflow-hidden rounded-xl sm:rounded-2xl md:rounded-3xl shadow-lg hover:scale-105 transition-all duration-300"
                >
                  <MosaicImage
                    src={img}
                    alt={`Gallery R ${index}`}
                    className="h-full w-full"
                    onClick={() => setSelectedImage(img)}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-10 pointer-events-none" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Desktop View - Full 14 Mosaic Layout */}
        <div className="hidden lg:block relative">
          <div className="relative flex items-start justify-center gap-[30px]">
            {/* Left Columns */}
            <div className="flex gap-[30px]">
              {/* Column 1 (2 items) */}
              <div className="flex flex-col items-center justify-start gap-[30px] pt-[70px]">
                {col1.map((img, index) => (
                  <div
                    key={`d-c1-${index}`}
                    className="group relative h-[182px] w-[134px] overflow-hidden rounded-3xl shadow-md hover:scale-105 transition-all duration-300 cursor-zoom-in border-2 border-[#E3D9C9]/80 hover:border-[#003B27]"
                  >
                    <MosaicImage
                      src={img}
                      alt=""
                      className="h-full w-full"
                      onClick={() => setSelectedImage(img)}
                    />
                  </div>
                ))}
              </div>
              {/* Column 2 (3 items) */}
              <div className="flex flex-col items-center justify-start gap-[19px]">
                {col2.map((img, index) => (
                  <div
                    key={`d-c2-${index}`}
                    className="group relative h-[146px] w-[134px] overflow-hidden rounded-3xl shadow-md hover:scale-105 transition-all duration-300 cursor-zoom-in border-2 border-[#E3D9C9]/80 hover:border-[#003B27]"
                  >
                    <MosaicImage
                      src={img}
                      alt=""
                      className="h-full w-full"
                      onClick={() => setSelectedImage(img)}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Center Section with Title (4 arched items) */}
            <div className="relative flex flex-col items-center justify-center">
              <div className="relative flex flex-col items-center justify-center">
                <div className="relative flex items-start justify-center gap-[30px] mt-2 mb-[113px]">
                  {center.map((img, index) => (
                    <div
                      key={`d-center-${index}`}
                      className="group relative h-[250px] w-[135px] overflow-hidden rounded-3xl shadow-lg hover:scale-105 transition-all duration-300 cursor-zoom-in border-2 border-[#E3D9C9] hover:border-[#E65A24]"
                      style={{
                        marginTop:
                          index === 0 ? "63px" : index === 1 ? "27px" : index === 2 ? "0px" : "63px",
                      }}
                    >
                      <MosaicImage
                        src={img}
                        alt=""
                        className="h-full w-full"
                        onClick={() => setSelectedImage(img)}
                      />
                    </div>
                  ))}
                </div>
                <div className="relative text-center">
                  <div className="inline-flex items-center gap-2 rounded-full border border-[#003B27]/20 bg-[#003B27]/5 px-3.5 py-1 text-xs font-mono font-bold uppercase tracking-widest text-[#003B27] mb-2.5">
                    <span className="size-1.5 rounded-full bg-[#E65A24]" />
                    MOMENTS & SNAPSHOTS
                    <span className="size-1.5 rounded-full bg-[#E65A24]" />
                  </div>
                  <h2 className="whitespace-nowrap font-display font-bold text-4xl sm:text-5xl md:text-6xl text-[#111814] tracking-tight">
                    Community <span className="text-[#003B27]">Gallery</span>
                  </h2>
                  <p className="mt-2 text-base text-[#4A554E] font-medium">
                    A glimpse into real Indian builders, meetups, and hackathon prototypes.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Columns */}
            <div className="flex gap-[30px]">
              {/* Column 3 (3 items) */}
              <div className="flex flex-col items-center justify-start gap-[19px]">
                {col3.map((img, index) => (
                  <div
                    key={`d-c3-${index}`}
                    className="group relative h-[146px] w-[134px] overflow-hidden rounded-3xl shadow-md hover:scale-105 transition-all duration-300 cursor-zoom-in border-2 border-[#E3D9C9]/80 hover:border-[#003B27]"
                  >
                    <MosaicImage
                      src={img}
                      alt=""
                      className="h-full w-full"
                      onClick={() => setSelectedImage(img)}
                    />
                  </div>
                ))}
              </div>
              {/* Column 4 (2 items) */}
              <div className="flex flex-col items-center justify-start gap-[30px] pt-[70px]">
                {col4.map((img, index) => (
                  <div
                    key={`d-c4-${index}`}
                    className="group relative h-[182px] w-[134px] overflow-hidden rounded-3xl shadow-md hover:scale-105 transition-all duration-300 cursor-zoom-in border-2 border-[#E3D9C9]/80 hover:border-[#003B27]"
                  >
                    <MosaicImage
                      src={img}
                      alt=""
                      className="h-full w-full"
                      onClick={() => setSelectedImage(img)}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
