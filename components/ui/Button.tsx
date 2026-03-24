import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "forest" | "ghost" | "cream";

interface BaseProps {
  variant?: Variant;
  className?: string;
  children: React.ReactNode;
}

type ButtonAsButton = BaseProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseProps> & {
    as?: "button";
    href?: never;
  };

type ButtonAsLink = BaseProps & {
  as: "link";
  href: string;
  target?: string;
  rel?: string;
};

type ButtonProps = ButtonAsButton | ButtonAsLink;

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-[#25D366] text-white shadow-[0_4px_16px_rgba(37,211,102,0.32)] hover:bg-[#1daa56] hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(37,211,102,0.42)]",
  secondary:
    "bg-transparent text-forest border border-sage-light hover:bg-sage-pale hover:border-sage",
  forest:
    "bg-forest text-white hover:bg-forest-light hover:-translate-y-0.5 hover:shadow-md",
  ghost: "bg-transparent text-ink-muted hover:text-forest hover:bg-sage-pale",
  /** Destaque em fundos escuros (ex.: seção Localização) — alinhado à paleta editorial */
  cream:
    "border border-white/15 bg-cream text-forest shadow-[0_4px_24px_rgba(0,0,0,0.2)] hover:-translate-y-0.5 hover:border-white/25 hover:bg-white hover:shadow-[0_12px_40px_rgba(0,0,0,0.22)]",
};

const baseClasses =
  "inline-flex items-center justify-center gap-2.5 rounded-pill px-6 py-3 text-sm font-medium tracking-wide transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none";

export default function Button(props: ButtonProps) {
  const { variant = "primary", className, children } = props;
  const classes = cn(baseClasses, variantClasses[variant], className);

  if (props.as === "link") {
    const { href, target, rel } = props;
    return (
      <Link href={href} target={target} rel={rel} className={classes}>
        {children}
      </Link>
    );
  }

  const {
    as: _as,
    href: _href,
    ...rest
  } = props as ButtonAsButton & { as?: "button"; href?: never };
  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
