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
          <h1 className="font-serif text-[clamp(2rem,5vw,2.75rem)] font-light leading-tight tracking-tight text-ink">
            Termos de{" "}
            <span className="text-forest italic">atendimento</span>
          </h1>
          <p className="mt-3 text-[0.8125rem] font-light tracking-wide text-ink-muted">
            Fonoaudiologia · Nathália Machado · CRFa 2-23700
          </p>
          <GoldRule className="mx-auto my-6" />
          <p className="text-[0.7rem] font-medium uppercase tracking-[0.18em] text-ink-muted/90">
            Última atualização: março de 2026
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
