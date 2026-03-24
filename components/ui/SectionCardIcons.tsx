import { cn } from "@/lib/utils";
import type { AreaCardIconKey, InfoCardIconKey } from "@/types";

const svgProps = {
  fill: "none" as const,
  stroke: "currentColor" as const,
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

type IconBaseProps = { className?: string };

/** Ícones dos cards da seção Sobre (substitui emojis) */
export function InfoCardIcon({
  name,
  className,
}: IconBaseProps & { name: InfoCardIconKey }) {
  const c = cn("h-6 w-6 shrink-0", className);
  switch (name) {
    case "weekly":
      return (
        <svg viewBox="0 0 24 24" className={c} aria-hidden {...svgProps}>
          <rect x="3" y="4" width="18" height="18" rx="2" />
          <path d="M16 2v4M8 2v4M3 10h18" />
          <path d="M12 14v3" />
          <circle cx="12" cy="14" r="1" fill="currentColor" stroke="none" />
        </svg>
      );
    case "biweekly":
      return (
        <svg viewBox="0 0 24 24" className={c} aria-hidden {...svgProps}>
          <rect x="3" y="4" width="18" height="18" rx="2" />
          <path d="M16 2v4M8 2v4M3 10h18" />
          <circle cx="9" cy="15" r="1.25" fill="currentColor" stroke="none" />
          <circle cx="15" cy="15" r="1.25" fill="currentColor" stroke="none" />
        </svg>
      );
    case "home":
      return (
        <svg viewBox="0 0 24 24" className={c} aria-hidden {...svgProps}>
          <path d="M3 10.5L12 3l9 7.5" />
          <path d="M5 10v10a1 1 0 001 1h4v-6h4v6h4a1 1 0 001-1V10" />
        </svg>
      );
    case "session":
      return (
        <svg viewBox="0 0 24 24" className={c} aria-hidden {...svgProps}>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v5l3 2" />
        </svg>
      );
    default:
      return null;
  }
}

/** Ícones das áreas de atuação (substitui emojis) */
export function AreaCardIcon({
  name,
  className,
}: IconBaseProps & { name: AreaCardIconKey }) {
  const c = cn("h-7 w-7 shrink-0", className);
  switch (name) {
    case "childLanguage":
      return (
        <svg viewBox="0 0 24 24" className={c} aria-hidden {...svgProps}>
          <path d="M21 11.5a8.5 8.5 0 01-8.5 8.5H6l-3 3v-6.5a8.5 8.5 0 018.5-8.5h10z" />
          <circle cx="9" cy="10" r="1" fill="currentColor" stroke="none" />
          <circle cx="15" cy="10" r="1" fill="currentColor" stroke="none" />
          <path d="M9.5 14.5c1 1.2 2.2 1.8 3.5 1.8s2.5-.6 3.5-1.8" />
        </svg>
      );
    case "adultLanguage":
      return (
        <svg viewBox="0 0 24 24" className={c} aria-hidden {...svgProps}>
          <path d="M12 2a3 3 0 013 3v6a3 3 0 11-6 0V5a3 3 0 013-3z" />
          <path d="M19 10v1a7 7 0 01-14 0v-1M12 19v3M8 23h8" />
        </svg>
      );
    case "oro":
      return (
        <svg viewBox="0 0 24 24" className={c} aria-hidden {...svgProps}>
          <ellipse cx="12" cy="11" rx="7" ry="5" />
          <path d="M9 11h6" />
          <path d="M8 16c1.5 2 4.5 2.2 8 .5" />
        </svg>
      );
    case "dysphagia":
      return (
        <svg viewBox="0 0 24 24" className={c} aria-hidden {...svgProps}>
          <path d="M12 3.5c-1.8 3.2-4.5 6.4-4.5 10a4.5 4.5 0 109 0c0-3.6-2.7-6.8-4.5-10z" />
          <path d="M5 18c2 2.5 5 4 7 4s5-1.5 7-4" />
        </svg>
      );
    case "assessment":
      return (
        <svg viewBox="0 0 24 24" className={c} aria-hidden {...svgProps}>
          <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2" />
          <rect x="9" y="3" width="6" height="4" rx="1" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      );
    case "family":
      return (
        <svg viewBox="0 0 24 24" className={c} aria-hidden {...svgProps}>
          <circle cx="9" cy="7" r="3" />
          <path d="M3 21v-2a4 4 0 014-4h4a4 4 0 014 4v2" />
          <circle cx="17" cy="10" r="2.5" />
          <path d="M21 21v-1.5a3 3 0 00-3-3h-1" />
        </svg>
      );
    default:
      return null;
  }
}
