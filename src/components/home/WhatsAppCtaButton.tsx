import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { OFFICIAL_WHATSAPP_COMMUNITY_URL } from "@/lib/homepage-content";

interface WhatsAppCtaButtonProps {
  className?: string;
  variant?: "primary" | "secondary";
  showSubtitle?: boolean;
}

export function WhatsAppCtaButton({
  className,
  variant = "primary",
}: WhatsAppCtaButtonProps) {
  const isPrimary = variant === "primary";

  return (
    <a
      href={OFFICIAL_WHATSAPP_COMMUNITY_URL}
      target="_blank"
      rel="noreferrer"
      aria-label="Join Our WhatsApp Community (opens in new tab)"
      className={cn(
        "group relative inline-flex items-center justify-between sm:justify-center gap-3 sm:gap-4",
        "w-full sm:w-auto min-h-[50px] sm:min-h-[54px] px-5 sm:px-7 py-3 sm:py-3.5",
        "rounded-full transition-all duration-300 ease-out select-none",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-ring)] focus-visible:ring-offset-2",
        isPrimary
          ? "bg-[oklch(0.245_0.07_154)] text-[oklch(0.976_0.016_84)] border-2 border-[oklch(0.78_0.15_79)] shadow-[0_8px_24px_rgba(6,61,44,0.18)] hover:bg-[oklch(0.285_0.075_154)] hover:shadow-[0_12px_32px_rgba(6,61,44,0.28)] hover:border-[oklch(0.85_0.16_79)]"
          : "bg-[oklch(0.985_0.012_83)] text-[oklch(0.245_0.055_155)] border-2 border-[oklch(0.285_0.068_154)] shadow-sm hover:bg-[oklch(0.927_0.025_83)]",
        className
      )}
    >
      {/* Decorative inner hairline for Indian heritage luxury finish */}
      {isPrimary && (
        <span
          className="pointer-events-none absolute inset-[3px] rounded-full border border-[oklch(0.78_0.15_79_/_40%)] group-hover:border-[oklch(0.78_0.15_79_/_70%)] transition-colors"
          aria-hidden="true"
        />
      )}

      {/* Button label */}
      <span className="relative z-10 text-[14px] sm:text-[15px] md:text-[16px] font-semibold tracking-wide text-center">
        Join Our WhatsApp Community
      </span>

      {/* Trailing arrow icon */}
      <span
        aria-hidden="true"
        className={cn(
          "relative z-10 flex size-7 shrink-0 items-center justify-center rounded-full transition-transform duration-300 group-hover:translate-x-1",
          isPrimary
            ? "bg-[oklch(0.78_0.15_79)] text-[oklch(0.20_0.06_154)]"
            : "bg-[oklch(0.285_0.068_154)] text-[oklch(0.976_0.016_84)]"
        )}
      >
        <ArrowRight className="size-3.5 stroke-[2.5]" />
      </span>
    </a>
  );
}
