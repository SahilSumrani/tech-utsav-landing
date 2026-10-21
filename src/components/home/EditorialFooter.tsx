import { ArrowUp } from "lucide-react";
import logo from "@/assets/techutsav-logo.png.asset.json";

export function EditorialFooter() {
  return (
    <footer className="bg-[#101412] px-5 py-8 text-white sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 sm:flex-row">
        <a href="#top" aria-label="TechUtsav India home" className="w-28">
          <img
            src={logo.url}
            alt="TechUtsav India"
            width={501}
            height={498}
            className="h-auto w-full"
          />
        </a>
        <p className="text-center text-xs text-slate-400">
          © {new Date().getFullYear()} TechUtsav India · Built for learners
        </p>
        <a
          href="#top"
          className="inline-flex items-center gap-2 text-xs font-semibold text-slate-300 transition-colors hover:text-white"
        >
          Back to top <ArrowUp className="size-3.5" aria-hidden="true" />
        </a>
      </div>
    </footer>
  );
}
