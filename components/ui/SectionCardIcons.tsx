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
          {/* peça de quebra-cabeça */}
          <path d="M6 2h5v3a2 2 0 104 0V2h5a2 2 0 012 2v5h-3a2 2 0 100 4h3v5a2 2 0 01-2 2h-5v-3a2 2 0 10-4 0v3H6a2 2 0 01-2-2v-5h3a2 2 0 100-4H4V4a2 2 0 012-2z" />
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
          <circle cx="12" cy="12" r="10" />
          <path d="M8 15s1.5 2 4 2 4-2 4-2" />
          <circle cx="9" cy="9.5" r="1" fill="currentColor" stroke="none" />
          <circle cx="15" cy="9.5" r="1" fill="currentColor" stroke="none" />
        </svg>
      );
    case "dysphagia":
      return (
        <svg viewBox="0 0 24 24" className={c} aria-hidden {...svgProps}>
          {/* garfo (esquerda) */}
          <path d="M7 2v6M7 8v13" />
          <path d="M5 2v4a2 2 0 002 2h0a2 2 0 002-2V2" />
          {/* colher (direita) */}
          <path d="M17 10v12" />
          <ellipse cx="17" cy="6" rx="2.5" ry="4" />
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
