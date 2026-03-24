import type { Metadata } from "next";
import SiteContainer from "@/components/layout/SiteContainer";
import TermoPageHeader from "@/components/termo/TermoPageHeader";
import TermoSections from "@/components/termo/TermoSections";
import { siteEdgePadding } from "@/lib/siteLayout";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Termos de Atendimento — Nathália Machado Fonoaudióloga",
  description:
    "Termos de atendimento fonoaudiológico: horários, valores, faltas, pagamentos, privacidade e comunicação. Nathália Machado · CRFa 2-23700 · São Miguel Arcanjo — SP.",
  robots: { index: true, follow: true },
};

export default function TermoPage() {
  return (
    <article className="min-h-screen bg-cream-warm">
      <TermoPageHeader />

      <div
        className={cn(
          "pb-16 pt-10 sm:pb-20 sm:pt-14",
          siteEdgePadding,
        )}
      >
        <SiteContainer>
          {/*
            “Folha” de leitura: contraste suave com o fundo cream-warm,
            mesma linguagem das seções (borda forest / sombra leve).
          */}
          <div
            className={cn(
              "mx-auto max-w-[860px] rounded-2xl border border-forest/10",
              "bg-white/85 px-5 py-10 shadow-card backdrop-blur-[2px]",
              "sm:px-9 sm:py-12 lg:px-12 lg:py-14",
            )}
          >
            <TermoSections />
          </div>
        </SiteContainer>
      </div>
    </article>
  );
}
