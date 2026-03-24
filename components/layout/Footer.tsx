import Link from "next/link";
import SiteContainer from "@/components/layout/SiteContainer";
import { Reveal } from "@/components/motion";
import Logo from "@/components/ui/Logo";
import { INSTAGRAM_URL } from "@/lib/constants";
import { siteEdgePadding } from "@/lib/siteLayout";
import { cn } from "@/lib/utils";

const footerLinkClass = cn(
  "relative inline-block text-[0.8125rem] font-medium tracking-wide text-ink-muted",
  "transition-[color,transform] duration-200 ease-out",
  "hover:-translate-y-0.5 hover:text-forest",
  "motion-reduce:transition-colors motion-reduce:hover:translate-y-0",
  "after:pointer-events-none after:absolute after:inset-x-0 after:-bottom-1 after:h-0.5 after:origin-left after:scale-x-0 after:rounded-full after:bg-forest/60 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:after:duration-0",
  "hover:after:scale-x-100",
  "focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest/35 focus-visible:ring-offset-2 focus-visible:ring-offset-cream-alt",
  "focus-visible:after:scale-x-100",
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
        <Reveal>
        <div className="flex flex-col items-center gap-10 sm:flex-row sm:items-center sm:justify-between sm:gap-8">
          {/* Logo maior — bloco com “respiro” para parecer mais editorial */}
          <div className="flex shrink-0 flex-col items-center sm:items-start">
            <Logo
              height={78}
              linked={false}
              imgClassName="opacity-[0.92] drop-shadow-[0_1px_12px_rgba(94,114,82,0.06)]"
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
          <br />
          <span className="text-ink-muted/75">Nathalia Machado Vieira de Oliveira Ltda · CNPJ 65.304.270/0001-31</span>
        </p>
        </Reveal>
      </SiteContainer>
    </footer>
  );
}
