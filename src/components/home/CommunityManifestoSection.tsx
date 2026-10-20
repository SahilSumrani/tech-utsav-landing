import { BookOpen, Compass, Lightbulb, Sparkles, Trophy, Users } from "lucide-react";

const INTEREST_AREAS = [
  "Artificial Intelligence",
  "Web & Cloud",
  "Design & UX",
  "Open Source",
  "Dev Tooling",
];

// Real student photos chahiye to `src` daal do (e.g. "/images/avatars/a1.jpg"); warna initials dikhenge.
const AVATARS: { initials: string; bg: string; src?: string }[] = [
  { initials: "AS", bg: "#003B27" },
  { initials: "RK", bg: "#E65A24" },
  { initials: "PM", bg: "#5E4E77" },
  { initials: "SN", bg: "#2C6E8F" },
  { initials: "DV", bg: "#B8862F" },
];

type PhotoProps = {
  src: string;
  alt: string;
  label: string;
  caption: string;
  className?: string;
};

function PhotoCard({ src, alt, label, caption, className = "" }: PhotoProps) {
  return (
    <div
      className={`group relative min-h-[200px] overflow-hidden rounded-3xl border border-[#E3D9C9] bg-neutral-900 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md ${className}`}
    >
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="absolute inset-0 size-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5 text-white">
        <span className="mb-1 block text-[10px] font-mono uppercase tracking-wider text-white/70">
          {label}
        </span>
        <p className="font-display text-base sm:text-lg font-semibold leading-snug">{caption}</p>
      </div>
    </div>
  );
}

export function CommunityManifestoSection() {
  return (
    <section
      id="about"
      aria-labelledby="who-we-are-heading"
      className="relative z-20 overflow-hidden border-t border-[var(--color-border)] bg-[#F8F1E5] py-10 sm:py-12 lg:flex lg:min-h-svh lg:flex-col lg:justify-center lg:py-8"
    >
      <div id="manifesto" className="sr-only" />

      {/* Header — compact */}
      <div className="mx-auto max-w-[1240px] px-4 text-center sm:px-6 lg:px-8">
        <div className="inline-flex items-center gap-2 rounded-full border border-[#E65A24]/30 bg-[#E65A24]/8 px-3.5 py-1 text-xs font-mono font-bold uppercase tracking-widest text-[#E65A24]">
          <span className="size-1.5 rounded-full bg-[#E65A24]" />
          WHO WE ARE
          <span className="size-1.5 rounded-full bg-[#E65A24]" />
        </div>

        <h2
          id="who-we-are-heading"
          className="mt-3 font-display text-3xl font-semibold leading-[1.1] tracking-tight text-[#111814] sm:text-4xl lg:text-5xl"
        >
          A Tech Community for{" "}
          <span className="block font-bold text-[#E65A24] sm:inline">India’s Next Generation</span>
        </h2>

        <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-[#4A554E] sm:text-base">
          TechUtsav India is a growing community for students, developers, designers and curious
          builders to explore technology, discover opportunities and grow together.
        </p>
      </div>

      <div className="mx-auto mt-7 flex w-full max-w-[1240px] flex-col gap-4 px-4 sm:mt-9 sm:px-6 lg:mt-6 lg:grid lg:flex-1 lg:grid-rows-[1.5fr_1fr] lg:px-8 2xl:max-w-[1560px]">
        {/* ───────────── ROW 1 ───────────── */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-12">
          {/* A — Identity */}
          <div className="flex flex-col justify-between rounded-3xl border border-[#E3D9C9] bg-[#FAF5ED] p-5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-sm md:col-span-2 lg:col-span-3">
            <div>
              <div className="inline-flex size-9 items-center justify-center rounded-xl bg-[#003B27]/10 text-[#003B27]">
                <Users className="size-4.5" />
              </div>
              <h3 className="mt-3 font-display text-2xl font-bold leading-tight tracking-tight text-[#111814]">
                Students. Builders. Creators.
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#4A554E]">
                A space for curious minds to learn, collaborate and discover what’s possible with
                technology.
              </p>
            </div>

            <div className="mt-4">
              {/* Student avatars */}
              <div className="mb-4 flex items-center">
                {AVATARS.map((a, i) => (
                  <span
                    key={a.initials}
                    style={{ backgroundColor: a.bg }}
                    className={`flex size-9 items-center justify-center rounded-full border-2 border-[#FAF5ED] text-[11px] font-bold text-white ${i > 0 ? "-ml-2.5" : ""}`}
                  >
                    {a.src ? (
                      <img src={a.src} alt="" className="size-full rounded-full object-cover" />
                    ) : (
                      a.initials
                    )}
                  </span>
                ))}
                <span className="-ml-2.5 flex size-9 items-center justify-center rounded-full border-2 border-[#FAF5ED] bg-[#CFE6D8] text-base font-bold text-[#003B27]">
                  +
                </span>
              </div>
              <p className="mb-3 text-xs text-[#4A554E]">
                A growing community across colleges and cities in India.
              </p>
            </div>

            <div className="border-t border-[#E8DFC0]/70 pt-3">
              <span className="mb-2 block text-[10px] font-mono font-bold uppercase tracking-wider text-[#738276]">
                Areas of exploration
              </span>
              <div className="flex flex-wrap gap-1.5">
                {INTEREST_AREAS.map((topic) => (
                  <span
                    key={topic}
                    className="rounded-lg border border-[#E3D9C9] bg-white/80 px-2 py-0.5 text-[11px] font-medium text-[#2C3B32]"
                  >
                    {topic}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* B — Main photo */}
          <PhotoCard
            src="/images/community/meetup-main.jpg"
            alt="Indian students and developers collaborating in an open technology space"
            label="Shared Curiosity"
            caption="Different minds. Shared curiosity."
            className="min-h-[260px] md:col-span-2 lg:col-span-5 lg:h-full"
          />

          {/* Right group: Ideas + photo + info strip */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:grid-rows-[1fr_auto] md:col-span-2 lg:col-span-4">
            {/* C — Ideas into Impact */}
            <div className="flex flex-col justify-between rounded-3xl border border-[#D5E6DC] bg-[#EBF4EE] p-5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-sm">
              <div>
                <div className="mb-3 inline-flex size-9 items-center justify-center rounded-xl bg-[#003B27] text-[#FAF5ED]">
                  <Lightbulb className="size-4.5" />
                </div>
                <h3 className="font-display text-xl font-bold leading-tight tracking-tight text-[#003B27] sm:text-2xl">
                  Ideas into Impact
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#355242]">
                  Explore new technologies, exchange perspectives and turn curiosity into meaningful
                  work.
                </p>
              </div>
              <span className="mt-3 text-xs font-mono font-semibold text-[#003B27]">
                Prototypes & Open Knowledge ↗
              </span>
            </div>

            {/* D — Photo */}
            <PhotoCard
              src="/images/gallery/gallery-3.jpg"
              alt="Developers discussing ideas around a table"
              label="Peer Learning"
              caption="Connecting ideas through shared code"
              className="min-h-[200px]"
            />

            {/* Info strip */}
            <div className="grid grid-cols-3 divide-x divide-[#E3D9C9] rounded-3xl border border-[#E3D9C9] bg-[#FAF5ED] py-3 text-center sm:col-span-2">
              {[
                ["Open to all", "learners"],
                ["Pan-India", "community"],
                ["Always free", "& open"],
              ].map(([a, b]) => (
                <div key={a} className="px-2">
                  <p className="font-display text-sm font-bold text-[#111814] sm:text-base">{a}</p>
                  <p className="text-[11px] font-mono text-[#4A554E]">{b}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ───────────── ROW 2 ───────────── */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-12">
          {/* E — Learn. Build. Connect. */}
          <div className="flex flex-col justify-between rounded-3xl border border-[#003B27] bg-[#003B27] p-5 text-[#F8F1E5] shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md lg:col-span-3">
            <div>
              <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-[#D4A359]">
                Core purpose
              </span>
              <h3 className="mt-1 font-display text-xl font-bold leading-tight text-white sm:text-2xl">
                Learn. Build. Connect.
              </h3>
            </div>
            <ul className="mt-3 grid grid-cols-1 gap-1.5 text-xs text-[#F8F1E5]/90 sm:text-[13px]">
              {[
                [BookOpen, "Discover tech resources"],
                [Trophy, "Find hackathons & opportunities"],
                [Sparkles, "Explore new ideas"],
                [Users, "Connect with fellow builders"],
              ].map(([Icon, text]) => {
                const I = Icon as typeof BookOpen;
                return (
                  <li key={text as string} className="flex items-center gap-2">
                    <span className="flex size-5 shrink-0 items-center justify-center rounded bg-white/10 text-[#D4A359]">
                      <I className="size-3" />
                    </span>
                    {text as string}
                  </li>
                );
              })}
            </ul>
          </div>

          {/* F — Interactive Community Momentum & Growth Graph Card */}
          <div className="relative flex flex-col justify-between overflow-hidden rounded-3xl border border-[#D5E6DC] bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md lg:col-span-5">
            <div>
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-[#003B27]/10 text-[#003B27]">
                  BUILDER MOMENTUM
                </span>
                <span className="inline-flex items-center gap-1 text-[11px] font-mono font-bold text-emerald-600">
                  <span className="size-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  +148% MoM Velocity
                </span>
              </div>

              <div className="mt-2 flex items-baseline gap-2">
                <span className="font-display text-2xl sm:text-3xl font-black text-[#111814]">
                  1,250+
                </span>
                <span className="text-xs font-semibold text-slate-500">
                  Active Indian Builders & Students
                </span>
              </div>

              {/* Interactive SVG Spline Line Graph */}
              <div className="relative mt-3 h-28 w-full">
                <svg
                  viewBox="0 0 360 90"
                  className="h-full w-full overflow-visible"
                  preserveAspectRatio="none"
                >
                  <defs>
                    <linearGradient id="growthArea" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#003B27" stopOpacity="0.22" />
                      <stop offset="100%" stopColor="#003B27" stopOpacity="0.0" />
                    </linearGradient>
                    <linearGradient id="growthStroke" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#D4A359" />
                      <stop offset="50%" stopColor="#E65A24" />
                      <stop offset="100%" stopColor="#003B27" />
                    </linearGradient>
                  </defs>

                  {/* Horizontal Grid guidelines */}
                  {[20, 50, 80].map((y) => (
                    <line
                      key={y}
                      x1="0"
                      y1={y}
                      x2="360"
                      y2={y}
                      stroke="#f1f5f9"
                      strokeWidth="1"
                      strokeDasharray="3 3"
                    />
                  ))}

                  {/* Fill Area */}
                  <path
                    d="M 10 75 C 60 70, 90 60, 130 52 C 170 44, 210 40, 250 25 C 290 12, 330 8, 350 4 L 350 90 L 10 90 Z"
                    fill="url(#growthArea)"
                  />

                  {/* Spline Curve Stroke */}
                  <path
                    d="M 10 75 C 60 70, 90 60, 130 52 C 170 44, 210 40, 250 25 C 290 12, 330 8, 350 4"
                    fill="none"
                    stroke="url(#growthStroke)"
                    strokeWidth="3.2"
                    strokeLinecap="round"
                  />

                  {/* Data Points */}
                  {[
                    { cx: 10, cy: 75, val: "120" },
                    { cx: 90, cy: 60, val: "340" },
                    { cx: 170, cy: 44, val: "610" },
                    { cx: 250, cy: 25, val: "940" },
                    { cx: 350, cy: 4, val: "1.25k" },
                  ].map((pt, i) => (
                    <g key={i} className="group/dot cursor-pointer">
                      <circle
                        cx={pt.cx}
                        cy={pt.cy}
                        r="4"
                        className="fill-white stroke-[#003B27] stroke-2 transition-all duration-200 group-hover/dot:r-6"
                      />
                    </g>
                  ))}
                </svg>

                {/* X-Axis Month Markers */}
                <div className="flex justify-between text-[9px] font-mono font-bold uppercase text-slate-400 mt-1">
                  <span>May</span>
                  <span>Jul</span>
                  <span>Sep</span>
                  <span>Nov</span>
                  <span>Dec</span>
                </div>
              </div>
            </div>

            {/* Bottom Milestone Stats */}
            <div className="mt-3 grid grid-cols-3 gap-2 border-t border-slate-100 pt-3 text-center">
              <div>
                <p className="font-display text-sm font-bold text-[#111814]">42+</p>
                <p className="text-[10px] font-mono text-slate-500">Shipped Repos</p>
              </div>
              <div className="border-x border-slate-100">
                <p className="font-display text-sm font-bold text-[#003B27]">6 Cities</p>
                <p className="text-[10px] font-mono text-slate-500">Active Circles</p>
              </div>
              <div>
                <p className="font-display text-sm font-bold text-[#E65A24]">100%</p>
                <p className="text-[10px] font-mono text-slate-500">Open Access</p>
              </div>
            </div>
          </div>

          {/* G — Photo */}
          <PhotoCard
            src="/images/community/rooftop-meetup.jpg"
            alt="Indian technology enthusiasts sharing perspectives"
            label="Community Exchange"
            caption="Discussions, questions & shared curiosity"
            className="lg:col-span-4 lg:h-full"
          />
        </div>
      </div>
    </section>
  );
}