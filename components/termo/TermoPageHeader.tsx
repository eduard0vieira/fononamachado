import Link from "next/link";
import SiteContainer from "@/components/layout/SiteContainer";
import SectionLabel from "@/components/ui/SectionLabel";
import GoldRule from "@/components/ui/GoldRule";
import { siteEdgePadding } from "@/lib/siteLayout";
import { cn } from "@/lib/utils";

const ChevronLeft = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M15 18l-6-6 6-6" />
  </svg>
);

export default function TermoPageHeader() {
  return (
    <header
      className={cn(
        "border-b border-forest/10 bg-cream-alt/90 pb-10 pt-[calc(72px+2.5rem)] backdrop-blur-md supports-[backdrop-filter]:bg-cream-alt/75",
        siteEdgePadding,
      )}
    >
      <SiteContainer>
        <div className="mx-auto max-w-3xl text-center">
          <SectionLabel>Documento legal</SectionLabel>
          <h1 className="font-serif text-[clamp(1.35rem,4vw,1.875rem)] font-medium uppercase leading-snug tracking-[0.12em] text-ink sm:tracking-[0.14em]">
            Termos de Atendimento Fonoaudiológico
          </h1>
          <GoldRule className="mx-auto my-5 sm:my-6" />
          <p className="text-[0.72rem] font-medium uppercase tracking-[0.18em] text-ink-muted">
            Última atualização: Março de 2026
          </p>
          <p className="mt-4 text-[0.8125rem] font-light tracking-wide text-ink-muted">
            Nathália Machado Vieira de Oliveira · CRFa 2-23700
          </p>
          <Link
            href="/"
            className="mt-8 inline-flex items-center gap-2 text-[0.78rem] font-medium uppercase tracking-[0.12em] text-forest/80 transition-colors hover:text-forest"
          >
            <ChevronLeft />
            Voltar ao site
          </Link>
        </div>
      </SiteContainer>
    </header>
  );
}
