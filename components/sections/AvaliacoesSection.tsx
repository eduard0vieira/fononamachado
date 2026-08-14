import SiteContainer from "@/components/layout/SiteContainer";
import { Reveal } from "@/components/motion";
import SectionLabel from "@/components/ui/SectionLabel";
import {
  GOOGLE_AVALIACOES,
  GOOGLE_NOTA,
  MAPS_URL,
} from "@/lib/constants";
import { siteEdgePadding } from "@/lib/siteLayout";
import { cn } from "@/lib/utils";

/**
 * Prova social — nota e contagem da ficha do Google, com link para a fonte.
 *
 * De propósito NÃO reproduz o texto das avaliações aqui dentro: republicar
 * depoimento de paciente como peça do próprio consultório esbarra nas regras
 * de publicidade do conselho, e avaliação hospedada no próprio site não
 * conta para o Google de todo jeito. Quem quiser ler vai à ficha, que é
 * onde a avaliação de fato pesa.
 */

function Estrela() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 text-honey" aria-hidden="true">
      <path
        fill="currentColor"
        d="M12 2.6l2.9 5.88 6.5.94-4.7 4.58 1.11 6.46L12 17.4l-5.81 3.06 1.11-6.46-4.7-4.58 6.5-.94L12 2.6z"
      />
    </svg>
  );
}

function LogoGoogle() {
  return (
    <svg viewBox="0 0 48 48" className="h-5 w-5" aria-hidden="true">
      <path
        fill="#4285F4"
        d="M45.12 24.5c0-1.56-.14-3.06-.4-4.5H24v8.51h11.84c-.51 2.75-2.06 5.08-4.39 6.64v5.52h7.11c4.16-3.83 6.56-9.47 6.56-16.17z"
      />
      <path
        fill="#34A853"
        d="M24 46c5.94 0 10.92-1.97 14.56-5.33l-7.11-5.52c-1.97 1.32-4.49 2.1-7.45 2.1-5.73 0-10.58-3.87-12.31-9.07H4.34v5.7C7.96 41.07 15.4 46 24 46z"
      />
      <path
        fill="#FBBC05"
        d="M11.69 28.18c-.44-1.32-.69-2.73-.69-4.18s.25-2.86.69-4.18v-5.7H4.34A21.99 21.99 0 002 24c0 3.55.85 6.91 2.34 9.88l7.35-5.7z"
      />
      <path
        fill="#EA4335"
        d="M24 10.75c3.23 0 6.13 1.11 8.41 3.29l6.31-6.31C34.91 4.18 29.93 2 24 2 15.4 2 7.96 6.93 4.34 14.12l7.35 5.7c1.73-5.2 6.58-9.07 12.31-9.07z"
      />
    </svg>
  );
}

export default function AvaliacoesSection() {
  return (
    <section
      id="avaliacoes"
      aria-labelledby="avaliacoes-titulo"
      /* sem padding no topo: continua a seção de experiência, que já
         reserva o respiro acima */
      className={cn("bg-white pb-16 pt-0 lg:pb-20", siteEdgePadding)}
    >
      <SiteContainer>
        <Reveal>
          <div
            className={cn(
              "mx-auto flex max-w-3xl flex-col items-center gap-6 rounded-2xl",
              "border border-forest/10 bg-cream px-6 py-8 text-center shadow-card",
              "sm:flex-row sm:justify-between sm:gap-8 sm:px-9 sm:py-8 sm:text-left",
            )}
          >
            <div className="flex flex-col items-center gap-2 sm:items-start">
              <SectionLabel className="mb-0">Quem já foi atendido</SectionLabel>
              <div className="flex items-baseline gap-3">
                <span className="font-serif text-[2.6rem] font-light leading-none text-forest lining-nums">
                  {GOOGLE_NOTA}
                </span>
                <span
                  className="flex gap-0.5"
                  role="img"
                  aria-label={`Nota ${GOOGLE_NOTA} de 5 no Google`}
                >
                  {Array.from({ length: 5 }, (_, i) => (
                    <Estrela key={i} />
                  ))}
                </span>
              </div>
              <p className="text-[0.9rem] font-light text-ink-muted">
                {GOOGLE_AVALIACOES} avaliações de pacientes e familiares na
                ficha do Google.
              </p>
            </div>

            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "inline-flex min-h-[48px] shrink-0 items-center justify-center gap-2.5 rounded-pill",
                "border border-stone-300/90 bg-white px-6 py-3 text-sm font-medium tracking-wide text-ink-soft shadow-sm",
                "transition-all duration-200 hover:border-stone-400 hover:bg-stone-50/90",
                "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest/35",
              )}
            >
              <LogoGoogle />
              Ler as avaliações
            </a>
          </div>
        </Reveal>
      </SiteContainer>
    </section>
  );
}
