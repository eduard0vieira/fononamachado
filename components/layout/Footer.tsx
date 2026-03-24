import Link from "next/link";
import SiteContainer from "@/components/layout/SiteContainer";
import Logo from "@/components/ui/Logo";
import { INSTAGRAM_URL } from "@/lib/constants";
import { siteEdgePadding } from "@/lib/siteLayout";
import { cn } from "@/lib/utils";

const footerLinkClass = cn(
  "text-[0.8125rem] font-medium tracking-wide text-ink-muted",
  "underline-offset-4 transition-colors hover:text-forest hover:underline",
);

export default function Footer() {
  return (
    <footer
      className={cn(
        "border-t border-forest/10 bg-cream-alt/90 py-12 backdrop-blur-md supports-[backdrop-filter]:bg-cream-alt/75",
        siteEdgePadding,
      )}
    >
      <SiteContainer>
        <div className="flex flex-col items-center gap-10 sm:flex-row sm:items-center sm:justify-between sm:gap-8">
          {/* Logo maior — bloco com “respiro” para parecer mais editorial */}
          <div className="flex shrink-0 flex-col items-center sm:items-start">
            <Logo
              height={78}
              linked={false}
              imgClassName="opacity-[0.92] drop-shadow-[0_1px_12px_rgba(38,77,59,0.06)]"
              loading="lazy"
            />
          </div>

          <nav
            aria-label="Links do rodapé"
            className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 sm:justify-end"
          >
            <Link href="/termo" className={footerLinkClass}>
              Termos de atendimento
            </Link>
            <Link
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={footerLinkClass}
            >
              Instagram
            </Link>
          </nav>
        </div>

        <div
          className="mx-auto mt-10 h-px max-w-md bg-gradient-to-r from-transparent via-forest/15 to-transparent sm:max-w-none"
          aria-hidden="true"
        />

        <p className="mt-8 text-center text-[0.7rem] font-light leading-relaxed tracking-wide text-ink-muted/90 sm:text-left">
          © 2026 Nathália Machado · Fonoaudióloga · CRFa 2-23700
          <br />
          <span className="text-ink-muted/75">São Miguel Arcanjo — SP</span>
        </p>
      </SiteContainer>
    </footer>
  );
}
