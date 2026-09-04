import SiteContainer from "@/components/layout/SiteContainer";
import { Reveal, StaggerItem, StaggerList } from "@/components/motion";
import SectionLabel from "@/components/ui/SectionLabel";
import GoldRule from "@/components/ui/GoldRule";
import Button from "@/components/ui/Button";
import { FAQ } from "@/lib/perfil";
import { WHATSAPP_AGENDAMENTO_URL } from "@/lib/constants";
import { siteEdgePadding } from "@/lib/siteLayout";
import { cn } from "@/lib/utils";

/**
 * Dúvidas frequentes.
 *
 * Usa <details>/<summary> nativo: abre sem JavaScript, o texto das
 * respostas já vem no HTML (indexável mesmo fechado) e é acessível por
 * teclado de graça. As mesmas perguntas alimentam o FAQPage do JSON-LD.
 */

export default function DuvidasSection() {
  return (
    <section
      id="duvidas"
      aria-labelledby="duvidas-titulo"
      className={cn("bg-cream-alt py-20 lg:py-28", siteEdgePadding)}
    >
      <SiteContainer>
        <Reveal className="text-center">
          <SectionLabel>Perguntas frequentes</SectionLabel>
          <h2
            id="duvidas-titulo"
            className="font-serif text-[clamp(2rem,4.5vw,3.2rem)] font-light leading-[1.15] text-ink"
          >
            Dúvidas <span className="text-forest italic">comuns</span>
          </h2>
          <GoldRule className="mx-auto" />
          <p className="mx-auto mt-4 max-w-2xl text-[0.92rem] font-light leading-[1.8] text-ink-muted">
            As perguntas que mais chegam antes da primeira consulta. Se a sua
            não estiver aqui, é só chamar no WhatsApp.
          </p>
        </Reveal>

        <StaggerList
          as="ul"
          className="mx-auto mt-10 flex max-w-3xl list-none flex-col gap-3"
        >
          {FAQ.map((item) => (
            <StaggerItem key={item.pergunta} as="li">
              <details
                className={cn(
                  "group rounded-2xl border border-forest/10 bg-white shadow-card",
                  "transition-colors duration-200 hover:border-sage/40",
                  "open:border-sage/40",
                )}
              >
                <summary
                  className={cn(
                    "flex cursor-pointer list-none items-start gap-4 px-5 py-4 sm:px-6 sm:py-5",
                    "text-left font-serif text-[1.05rem] font-normal leading-snug text-ink sm:text-[1.15rem]",
                    "rounded-2xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-honey",
                    "[&::-webkit-details-marker]:hidden",
                  )}
                >
                  <span className="min-w-0 flex-1">{item.pergunta}</span>
                  <span
                    className={cn(
                      "mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full",
                      "border border-forest/15 bg-sage-pale/70 text-forest",
                      "transition-transform duration-200 group-open:rotate-45",
                    )}
                    aria-hidden="true"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={1.8}
                      className="h-3.5 w-3.5"
                    >
                      <path strokeLinecap="round" d="M12 5v14M5 12h14" />
                    </svg>
                  </span>
                </summary>
                <div className="px-5 pb-5 sm:px-6 sm:pb-6">
                  <p className="text-[0.9rem] font-light leading-[1.8] text-ink-muted">
                    {item.resposta}
                  </p>
                </div>
              </details>
            </StaggerItem>
          ))}
        </StaggerList>

        <Reveal className="mt-10 text-center" delay={0.08}>
          <div>
            <p className="mb-4 text-[0.92rem] font-light text-ink-muted">
              Ficou com alguma dúvida sobre o seu caso?
            </p>
            <Button
              as="link"
              href={WHATSAPP_AGENDAMENTO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="min-h-[48px] rounded-pill px-7 py-3.5"
            >
              Falar no WhatsApp
            </Button>
          </div>
        </Reveal>
      </SiteContainer>
    </section>
  );
}
