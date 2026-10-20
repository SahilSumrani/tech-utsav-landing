import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type MouseEvent,
  type ReactNode,
} from "react";
import { ArrowUpRight, BookOpen, Lightbulb, Sparkles, Trophy, Users } from "lucide-react";
import { cn } from "@/lib/utils"; // shadcn helper

/* ──────────────────────────── Content ──────────────────────────── */

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

// ⚠️ Public site pe daalne se pehle ye numbers REAL numbers se replace karo.
const GROWTH = {
  total: "1,250+",
  totalLabel: "Active Indian builders & students",
  velocity: "+148% MoM",
  points: [
    { x: 10, y: 75, month: "May", val: "120" },
    { x: 90, y: 60, month: "Jul", val: "340" },
    { x: 170, y: 44, month: "Sep", val: "610" },
    { x: 250, y: 25, month: "Nov", val: "940" },
    { x: 350, y: 4, month: "Dec", val: "1.25k" },
  ],
  line: "M 10 75 C 60 70, 90 60, 130 52 C 170 44, 210 40, 250 25 C 290 12, 330 8, 350 4",
  milestones: [
    { big: "42+", small: "Shipped repos", color: "text-[#111814]" },
    { big: "6 cities", small: "Active circles", color: "text-[#003B27]" },
    { big: "100%", small: "Open access", color: "text-[#E65A24]" },
  ],
};

/* ──────────────────────────── Motion helpers ──────────────────────────── */

const d = (ms: number) => ({ "--d": `${ms}ms` }) as CSSProperties;

function useInView<T extends HTMLElement>(threshold = 0.12) {
  const ref = useRef<T>(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSeen(true);
          io.disconnect();
        }
      },
      { threshold },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);
  return [ref, seen] as const;
}

/** Card with a cursor-following soft glow. */
function SpotlightCard({
  children,
  className,
  glow = "rgba(230,90,36,0.13)",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  glow?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - r.left}px`);
    el.style.setProperty("--my", `${e.clientY - r.top}px`);
  };
  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      style={d(delay)}
      className={cn(
        "mx-reveal mx-lift group/card relative isolate flex flex-col justify-between overflow-hidden rounded-3xl border p-5 hover:shadow-[0_18px_40px_-18px_rgba(0,59,39,0.35)]",
        className,
      )}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-px -z-10 opacity-0 transition-opacity duration-500 group-hover/card:opacity-100"
        style={{
          background: `radial-gradient(380px circle at var(--mx,50%) var(--my,50%), ${glow}, transparent 60%)`,
        }}
      />
      {children}
    </div>
  );
}

/** Photo card: mouse parallax + slow zoom + glass caption. */
function PhotoCard({
  src,
  alt,
  label,
  caption,
  className,
  delay = 0,
  large = false,
}: {
  src: string;
  alt: string;
  label: string;
  caption: string;
  className?: string;
  delay?: number;
  large?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--px", String(((e.clientX - r.left) / r.width - 0.5) * 2));
    el.style.setProperty("--py", String(((e.clientY - r.top) / r.height - 0.5) * 2));
  };
  const onLeave = () => {
    ref.current?.style.setProperty("--px", "0");
    ref.current?.style.setProperty("--py", "0");
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={d(delay)}
      className={cn(
        "mx-reveal mx-lift group/photo relative min-h-[200px] overflow-hidden rounded-3xl border border-[#E3D9C9] bg-neutral-900 shadow-sm hover:shadow-[0_24px_50px_-20px_rgba(0,0,0,0.55)]",
        className,
      )}
    >
      {/* zoom layer (hover) → parallax layer (mouse) */}
      <div className="absolute inset-0 transition-transform duration-[1200ms] ease-out group-hover/photo:scale-[1.06]">
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className="size-full object-cover transition-transform duration-300 ease-out will-change-transform"
          style={{
            transform:
              "translate3d(calc(var(--px,0) * -10px), calc(var(--py,0) * -10px), 0) scale(1.1)",
          }}
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent" />
      <div className="mx-sheen-sweep pointer-events-none absolute inset-0" aria-hidden />

      <span className="absolute right-4 top-4 flex size-9 translate-y-1 items-center justify-center rounded-full border border-white/25 bg-white/15 text-white opacity-0 backdrop-blur-md transition-all duration-300 group-hover/photo:translate-y-0 group-hover/photo:opacity-100">
        <ArrowUpRight className="size-4" />
      </span>

      <div className="absolute inset-x-0 bottom-0 p-4 text-white sm:p-5">
        <span className="mb-2 inline-block rounded-full border border-white/20 bg-white/10 px-2.5 py-0.5 text-[11px] font-medium text-white/90 backdrop-blur-md">
          {label}
        </span>
        <p
          className={cn(
            "font-display font-semibold leading-snug",
            large ? "text-2xl sm:text-3xl" : "text-base sm:text-lg",
          )}
        >
          {caption}
        </p>
      </div>
    </div>
  );
}

/* ──────────────────────────── Section ──────────────────────────── */

export function CommunityManifestoSection() {
  const [ref, seen] = useInView<HTMLElement>();

  return (
    <section
      ref={ref}
      data-mx-in={seen}
      id="about"
      aria-labelledby="who-we-are-heading"
      className="relative z-20 overflow-hidden border-t border-[var(--color-border)] bg-[#F8F1E5] py-10 sm:py-12 lg:flex lg:min-h-svh lg:flex-col lg:justify-center lg:py-8"
    >
      <style>{`
        .mx-reveal{opacity:0;transform:translateY(26px);
          transition:
            opacity .9s cubic-bezier(.16,1,.3,1) var(--d,0ms),
            transform .9s cubic-bezier(.16,1,.3,1) var(--d,0ms),
            translate .4s cubic-bezier(.16,1,.3,1),
            box-shadow .4s ease, border-color .4s ease, background-color .4s ease;}
        [data-mx-in="true"] .mx-reveal{opacity:1;transform:none}
        .mx-lift:hover{translate:0 -4px}
        .mx-grain{background-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='.8' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='.55'/></svg>");mix-blend-mode:multiply}
        .mx-gradient-text{background:linear-gradient(90deg,#E65A24,#D4A359,#E65A24);background-size:200% auto;-webkit-background-clip:text;background-clip:text;color:transparent;animation:mx-flow 7s linear infinite}
        .mx-sheen-sweep{background:linear-gradient(115deg,transparent 35%,rgba(255,255,255,.22) 50%,transparent 65%);background-size:250% 100%;background-position:130% 0;transition:background-position 1.1s ease}
        .group\\/photo:hover .mx-sheen-sweep{background-position:-30% 0}
        .mx-blob-a{animation:mx-drift 18s ease-in-out infinite alternate}
        .mx-blob-b{animation:mx-drift 22s ease-in-out infinite alternate-reverse}
        @keyframes mx-flow{to{background-position:200% center}}
        @keyframes mx-drift{from{transform:translate3d(0,0,0) scale(1)}to{transform:translate3d(40px,-30px,0) scale(1.15)}}
        @media (prefers-reduced-motion:reduce){
          .mx-reveal{opacity:1;transform:none;transition:none}
          .mx-gradient-text,.mx-blob-a,.mx-blob-b{animation:none}
          .mx-lift:hover{translate:none}
        }
      `}</style>

      {/* Ambient background */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-0">
        <div className="mx-blob-a absolute -left-24 top-10 size-[420px] rounded-full bg-[#E65A24]/10 blur-3xl" />
        <div className="mx-blob-b absolute -right-20 bottom-0 size-[460px] rounded-full bg-[#003B27]/10 blur-3xl" />
        <div className="mx-grain absolute inset-0 opacity-[0.07]" />
      </div>

      <div id="manifesto" className="sr-only" />

      {/* Header */}
      <div className="relative mx-auto max-w-[1240px] px-4 text-center sm:px-6 lg:px-8">
        <div
          style={d(0)}
          className="mx-reveal inline-flex items-center gap-2 rounded-full border border-[#E65A24]/30 bg-white/60 px-3.5 py-1 text-xs font-medium tracking-wide text-[#E65A24] backdrop-blur"
        >
          <span className="relative flex size-2">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-[#E65A24]/60" />
            <span className="relative inline-flex size-2 rounded-full bg-[#E65A24]" />
          </span>
          Who we are
        </div>

        <h2
          id="who-we-are-heading"
          style={d(80)}
          className="mx-reveal mt-3 font-display text-3xl font-semibold leading-[1.1] tracking-tight text-[#111814] sm:text-4xl lg:text-5xl"
        >
          A Tech Community for{" "}
          <span className="mx-gradient-text block font-bold sm:inline">India’s Next Generation</span>
        </h2>

        <p
          style={d(160)}
          className="mx-reveal mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-[#4A554E] sm:text-base"
        >
          TechUtsav India is a growing community for students, developers, designers and curious
          builders to explore technology, discover opportunities and grow together.
        </p>
      </div>

      <div className="relative mx-auto mt-7 flex w-full max-w-[1240px] flex-col gap-4 px-4 sm:mt-9 sm:px-6 lg:mt-6 lg:grid lg:flex-1 lg:grid-rows-[1.5fr_1fr] lg:px-8 2xl:max-w-[1560px]">
        {/* ───────────── ROW 1 ───────────── */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-12">
          {/* A — Identity */}
          <SpotlightCard
            delay={120}
            glow="rgba(0,59,39,0.10)"
            className="border-[#E3D9C9] bg-[#FAF5ED] md:col-span-2 lg:col-span-3"
          >
            <div>
              <div className="inline-flex size-9 items-center justify-center rounded-xl bg-[#003B27]/10 text-[#003B27] transition-transform duration-500 group-hover/card:rotate-[-8deg] group-hover/card:scale-110">
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
              <div className="group/av mb-3 flex items-center">
                {AVATARS.map((a, i) => (
                  <span
                    key={a.initials}
                    style={{ backgroundColor: a.bg, transitionDelay: `${i * 30}ms` }}
                    className={cn(
                      "flex size-9 items-center justify-center rounded-full border-2 border-[#FAF5ED] text-[11px] font-bold text-white transition-all duration-300 hover:z-10 hover:-translate-y-1 hover:scale-110",
                      i > 0 && "-ml-2.5 group-hover/av:ml-0.5",
                    )}
                  >
                    {a.src ? (
                      <img src={a.src} alt="" className="size-full rounded-full object-cover" />
                    ) : (
                      a.initials
                    )}
                  </span>
                ))}
                <span className="-ml-2.5 flex size-9 items-center justify-center rounded-full border-2 border-[#FAF5ED] bg-[#CFE6D8] text-base font-bold text-[#003B27] transition-all duration-300 group-hover/av:ml-0.5">
                  +
                </span>
              </div>
              <p className="mb-3 text-xs text-[#4A554E]">
                A growing community across colleges and cities in India.
              </p>

              <div className="border-t border-[#E8DFC0]/70 pt-3">
                <div className="flex flex-wrap gap-1.5">
                  {INTEREST_AREAS.map((topic) => (
                    <span
                      key={topic}
                      className="cursor-default rounded-lg border border-[#E3D9C9] bg-white/80 px-2 py-0.5 text-[11px] font-medium text-[#2C3B32] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#003B27] hover:bg-[#003B27] hover:text-white"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </SpotlightCard>

          {/* B — The memorable moment: main photo */}
          <PhotoCard
            delay={240}
            large
            src="/images/community/meetup-main.jpg"
            alt="Indian students and developers collaborating in an open technology space"
            label="Shared curiosity"
            caption="Different minds. Shared curiosity."
            className="min-h-[280px] md:col-span-2 lg:col-span-5 lg:h-full"
          />

          {/* Right group */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:grid-rows-[1fr_auto] md:col-span-2 lg:col-span-4">
            {/* C — Ideas into Impact */}
            <SpotlightCard
              delay={360}
              glow="rgba(0,59,39,0.12)"
              className="border-[#D5E6DC] bg-[#EBF4EE]"
            >
              <div>
                <div className="mb-3 inline-flex size-9 items-center justify-center rounded-xl bg-[#003B27] text-[#FAF5ED] transition-all duration-500 group-hover/card:scale-110 group-hover/card:shadow-[0_0_0_6px_rgba(0,59,39,0.12)]">
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
              <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-[#003B27]">
                Prototypes & open knowledge
                <ArrowUpRight className="size-3.5 transition-transform duration-300 group-hover/card:-translate-y-0.5 group-hover/card:translate-x-0.5" />
              </span>
            </SpotlightCard>

            {/* D — Photo */}
            <PhotoCard
              delay={440}
              src="/images/gallery/gallery-3.jpg"
              alt="Developers discussing ideas around a table"
              label="Peer learning"
              caption="Connecting ideas through shared code"
            />

            {/* Info strip */}
            <div
              style={d(520)}
              className="mx-reveal grid grid-cols-3 divide-x divide-[#E3D9C9] overflow-hidden rounded-3xl border border-[#E3D9C9] bg-[#FAF5ED] text-center sm:col-span-2"
            >
              {[
                ["Open to all", "learners"],
                ["Pan-India", "community"],
                ["Always free", "& open"],
              ].map(([a, b]) => (
                <div
                  key={a}
                  className="px-2 py-3 transition-colors duration-300 hover:bg-[#003B27] hover:text-white [&:hover_p:last-child]:text-white/70"
                >
                  <p className="font-display text-sm font-bold sm:text-base">{a}</p>
                  <p className="text-[11px] text-[#4A554E] transition-colors">{b}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ───────────── ROW 2 ───────────── */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-12">
          {/* E — Learn. Build. Connect. */}
          <SpotlightCard
            delay={560}
            glow="rgba(212,163,89,0.22)"
            className="border-[#003B27] bg-[#003B27] text-[#F8F1E5] lg:col-span-3"
          >
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 -z-10 opacity-[0.12]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,.35) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.35) 1px,transparent 1px)",
                backgroundSize: "28px 28px",
                maskImage: "radial-gradient(circle at 100% 0%, black, transparent 70%)",
                WebkitMaskImage: "radial-gradient(circle at 100% 0%, black, transparent 70%)",
              }}
            />
            <h3 className="font-display text-xl font-bold leading-tight text-white sm:text-2xl">
              Learn. Build. Connect.
            </h3>
            <ul className="mt-3 grid grid-cols-1 gap-1 text-xs text-[#F8F1E5]/90 sm:text-[13px]">
              {[
                [BookOpen, "Discover tech resources"],
                [Trophy, "Find hackathons & opportunities"],
                [Sparkles, "Explore new ideas"],
                [Users, "Connect with fellow builders"],
              ].map(([Icon, text]) => {
                const I = Icon as typeof BookOpen;
                return (
                  <li
                    key={text as string}
                    className="group/li flex items-center gap-2 rounded-lg px-1.5 py-1 transition-all duration-300 hover:translate-x-1 hover:bg-white/8"
                  >
                    <span className="flex size-5 shrink-0 items-center justify-center rounded bg-white/10 text-[#D4A359] transition-colors group-hover/li:bg-[#D4A359] group-hover/li:text-[#003B27]">
                      <I className="size-3" />
                    </span>
                    {text as string}
                  </li>
                );
              })}
            </ul>
          </SpotlightCard>

          {/* F — Growth chart */}
          <SpotlightCard
            delay={660}
            glow="rgba(230,90,36,0.10)"
            className="border-[#D5E6DC] bg-white lg:col-span-5"
          >
            <div>
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-[#003B27]/10 px-2.5 py-0.5 text-[11px] font-medium text-[#003B27]">
                  Builder momentum
                </span>
                <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-600">
                  <span className="size-1.5 animate-pulse rounded-full bg-emerald-500" />
                  {GROWTH.velocity}
                </span>
              </div>

              <div className="mt-2 flex items-baseline gap-2">
                <span className="font-display text-2xl font-black text-[#111814] sm:text-3xl">
                  {GROWTH.total}
                </span>
                <span className="text-xs font-medium text-slate-500">{GROWTH.totalLabel}</span>
              </div>

              <div className="relative mt-3 h-24 w-full sm:h-28">
                {/* Line + area, revealed left → right */}
                <svg
                  viewBox="0 0 360 90"
                  preserveAspectRatio="none"
                  className="absolute inset-0 size-full overflow-visible"
                  style={{
                    clipPath: seen ? "inset(-10px 0 0 0)" : "inset(-10px 100% 0 0)",
                    transition: "clip-path 1.8s cubic-bezier(.65,0,.35,1) .9s",
                  }}
                >
                  <defs>
                    <linearGradient id="mxArea" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#003B27" stopOpacity="0.22" />
                      <stop offset="100%" stopColor="#003B27" stopOpacity="0" />
                    </linearGradient>
                    <linearGradient id="mxStroke" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#D4A359" />
                      <stop offset="50%" stopColor="#E65A24" />
                      <stop offset="100%" stopColor="#003B27" />
                    </linearGradient>
                  </defs>
                  {[20, 50, 80].map((y) => (
                    <line
                      key={y}
                      x1="0"
                      y1={y}
                      x2="360"
                      y2={y}
                      stroke="#eef2f1"
                      strokeWidth="1"
                      strokeDasharray="3 3"
                      vectorEffect="non-scaling-stroke"
                    />
                  ))}
                  <path d={`${GROWTH.line} L 350 90 L 10 90 Z`} fill="url(#mxArea)" />
                  <path
                    d={GROWTH.line}
                    fill="none"
                    stroke="url(#mxStroke)"
                    strokeWidth="3"
                    strokeLinecap="round"
                    vectorEffect="non-scaling-stroke"
                  />
                </svg>

                {/* Hoverable points (HTML so they never stretch) */}
                {GROWTH.points.map((pt, i) => (
                  <div
                    key={pt.month}
                    className="group/dot absolute"
                    style={{
                      left: `${(pt.x / 360) * 100}%`,
                      top: `${(pt.y / 90) * 100}%`,
                      opacity: seen ? 1 : 0,
                      transition: `opacity .5s ease ${1.1 + i * 0.28}s`,
                    }}
                  >
                    <span className="absolute left-1/2 top-1/2 block size-3 -translate-x-1/2 -translate-y-1/2 cursor-pointer rounded-full border-2 border-[#003B27] bg-white transition-transform duration-200 group-hover/dot:scale-150 group-hover/dot:bg-[#E65A24]" />
                    <span className="pointer-events-none absolute bottom-full left-1/2 mb-2 -translate-x-1/2 translate-y-1 whitespace-nowrap rounded-md bg-[#003B27] px-1.5 py-0.5 text-[10px] font-semibold text-white opacity-0 transition-all duration-200 group-hover/dot:translate-y-0 group-hover/dot:opacity-100">
                      {pt.val}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-1 flex justify-between text-[10px] font-medium text-slate-400">
                {GROWTH.points.map((p) => (
                  <span key={p.month}>{p.month}</span>
                ))}
              </div>
            </div>

            <div className="mt-3 grid grid-cols-3 gap-2 border-t border-slate-100 pt-3 text-center">
              {GROWTH.milestones.map((m, i) => (
                <div key={m.small} className={cn(i === 1 && "border-x border-slate-100")}>
                  <p className={cn("font-display text-sm font-bold", m.color)}>{m.big}</p>
                  <p className="text-[10px] text-slate-500">{m.small}</p>
                </div>
              ))}
            </div>
          </SpotlightCard>

          {/* G — Photo */}
          <PhotoCard
            delay={760}
            src="/images/community/rooftop-meetup.jpg"
            alt="Indian technology enthusiasts sharing perspectives"
            label="Community exchange"
            caption="Discussions, questions & shared curiosity"
            className="md:col-span-2 lg:col-span-4 lg:h-full"
          />
        </div>
      </div>
    </section>
  );
}