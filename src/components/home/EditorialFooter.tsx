import { ArrowUp } from "lucide-react";
import logo from "@/assets/techutsav-logo.png.asset.json";

export function EditorialFooter() {
  const links = [
    { label: "About", href: "#about" },
    { label: "Opportunities", href: "#opportunities" },
    { label: "Updates", href: "#updates" },
    { label: "How to join", href: "#how-to-join" },
    { label: "Guidelines", href: "#guidelines" },
    { label: "FAQs", href: "#faq" },
    { label: "Contact & privacy", href: "#contact" },
  ];

  return (
    <footer className="bg-[#101412] px-5 py-9 text-white sm:px-8 sm:py-11">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 border-b border-white/10 pb-8 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-start sm:gap-12">
          <div className="flex max-w-lg items-start gap-4">
            <a href="#top" aria-label="TechUtsav India home" className="w-24 shrink-0">
              <img
                src={logo.url}
                alt="TechUtsav India"
                width={501}
                height={498}
                className="h-auto w-full"
              />
            </a>
            <p className="pt-2 text-sm leading-6 text-slate-300">
              A community sharing tech events, learning resources and opportunities to connect.
            </p>
          </div>

          <div>
            <p className="mb-3 text-[0.65rem] font-extrabold uppercase tracking-[0.18em] text-[#D4A359]">
              Explore TechUtsav
            </p>
            <nav aria-label="Footer navigation" className="grid grid-cols-2 gap-x-8 gap-y-3">
              {links.map(({ label, href }) => (
                <a
                  key={href}
                  href={href}
                  className="text-xs font-semibold text-slate-300 underline-offset-4 transition-colors hover:text-white hover:underline"
                >
                  {label}
                </a>
              ))}
            </nav>
          </div>
        </div>

        <div className="flex flex-col gap-3 pt-5 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} TechUtsav India · For people building in tech</p>
          <a
            href="#top"
            className="inline-flex items-center gap-2 font-semibold text-slate-300 transition-colors hover:text-white"
          >
            Back to top <ArrowUp className="size-3.5" aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}
