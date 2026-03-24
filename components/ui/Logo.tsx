import type { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

/** Proporção aproximada do arquivo logo.png (largura / altura) — usada quando só um eixo é informado */
const LOGO_ASPECT_RATIO = 160 / 72;

export interface LogoProps {
  /** Caminho em `public/` (default: logo principal) */
  src?: string;
  /** Texto alternativo da imagem */
  alt?: string;
  /**
   * Altura de exibição em px.
   * Se `width` não for passado, a largura segue a proporção do logo (`w-auto`).
   */
  height?: number;
  /**
   * Largura de exibição em px (opcional).
   * Se só `width` existir, a altura é calculada pela proporção.
   * Se ambos existirem, o box é fixo nos dois eixos.
   */
  width?: number;
  /**
   * Dimensões intrínsecas passadas ao `next/image` (otimização / layout).
   * Default 160×72 alinhado ao asset atual.
   */
  intrinsicWidth?: number;
  intrinsicHeight?: number;
  priority?: boolean;
  loading?: "lazy" | "eager";
  /** Se true, envolve com `Link` para a home */
  linked?: boolean;
  href?: string;
  /** `aria-label` do link (quando `linked`) */
  ariaLabel?: string;
  className?: string;
  imgClassName?: string;
  sizes?: string;
}

function resolveDisplaySize(
  height: number | undefined,
  width: number | undefined,
): CSSProperties {
  if (height != null && width != null) {
    return { height, width };
  }
  if (height != null) {
    return { height, width: "auto" };
  }
  if (width != null) {
    return { width, height: Math.round(width / LOGO_ASPECT_RATIO) };
  }
  return { height: 72, width: "auto" };
}

export default function Logo({
  src = "/images/logo.png",
  alt = "Nathália Machado Fonoaudióloga",
  height,
  width,
  intrinsicWidth = 160,
  intrinsicHeight = 72,
  priority = false,
  loading,
  linked = true,
  href = "/",
  ariaLabel = "Nathália Machado Fonoaudióloga",
  className,
  imgClassName,
  sizes,
}: LogoProps) {
  const display = resolveDisplaySize(height, width);

  const image = (
    <Image
      src={src}
      alt={alt}
      width={intrinsicWidth}
      height={intrinsicHeight}
      priority={priority}
      loading={loading ?? (priority ? "eager" : "lazy")}
      sizes={sizes}
      className={cn("object-contain", imgClassName)}
      style={display}
    />
  );

  if (!linked) {
    return <span className={cn("inline-flex shrink-0", className)}>{image}</span>;
  }

  return (
    <Link
      href={href}
      className={cn("inline-flex shrink-0", className)}
      aria-label={ariaLabel}
    >
      {image}
    </Link>
  );
}
