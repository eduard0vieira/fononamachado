import SiteContainer from "@/components/layout/SiteContainer";
import { Reveal, StaggerItem, StaggerList } from "@/components/motion";
import SectionLabel from "@/components/ui/SectionLabel";
import GoldRule from "@/components/ui/GoldRule";
import { NUMEROS } from "@/lib/perfil";
import { CRFA } from "@/lib/constants";
import { siteEdgePadding } from "@/lib/siteLayout";
import { cn } from "@/lib/utils";

/**
 * Formação e experiência — os fatos verificáveis do dossiê profissional.
 *
 * É a seção que responde à objeção de "recém-formada" com volume e com
 * a experiência hospitalar, e é de onde o Google e os assistentes de IA
 * tiram o histórico dela. Todos os números são agregados: nenhum dado
 * identifica paciente.
 */

function NumeroCard({
  valor,
  label,
  detalhe,
}: {
  valor: string;
  label: string;
  detalhe: string;
}) {
  return (
    <article
      className={cn(
        "h-full rounded-2xl border border-forest/10 bg-cream p-5 shadow-card",
        "transition-all duration-200",
        "lg:hover:-translate-y-0.5 lg:hover:border-sage/40 lg:hover:bg-white lg:hover:shadow-md",
      )}
    >
      {/* lining-nums: a Cormorant usa algarismos antigos por padrão e "111"
          sai parecendo numeral romano nos números grandes */}
      <p className="font-serif text-[2.1rem] font-light leading-none text-forest lining-nums tabular-nums sm:text-[2.4rem]">
        {valor}
      </p>
      <p className="mt-2 text-[0.95rem] font-normal leading-snug text-ink">
        {label}
      </p>
      <p className="mt-1 text-[0.8rem] font-light leading-[1.55] text-ink-muted">
        {detalhe}
      </p>
    </article>
  );
}

export default function ExperienciaSection() {
  return (
    <section
      id="experiencia"
      aria-labelledby="experiencia-titulo"
      /* pb menor que o pt: quem vem logo abaixo é o bloco de avaliações,
         também em fundo branco. Com py cheio dos dois lados sobrava um vão
         enorme de branco no meio. */
      className={cn("bg-white pb-10 pt-20 lg:pb-12 lg:pt-28", siteEdgePadding)}
    >
      <SiteContainer>
        <Reveal>
          <div>
            <SectionLabel className="mb-2.5">Formação e prática</SectionLabel>
            <h2
              id="experiencia-titulo"
              className="mb-4 font-serif text-[clamp(2rem,4.5vw,3.2rem)] font-light leading-[1.15] text-ink"
            >
              Trajetória &amp;{" "}
              <span className="text-forest italic">Experiência</span>
            </h2>
            <GoldRule className="my-5" />
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-start lg:gap-x-16 xl:gap-x-20">
          <Reveal>
            <div>
              <p className="mb-3 font-light text-[0.92rem] leading-[1.75] text-ink-muted sm:text-base sm:leading-[1.9]">
                Sou graduada em Fonoaudiologia pela{" "}
                <strong className="font-normal text-ink">
                  Universidade de Sorocaba (UNISO)
                </strong>
                , com colação de grau em dezembro de 2024. Durante a graduação
                fui premiada quatro vezes com o Aluno TOP da UNISO e recebi
                menção honrosa por trabalho científico sobre hipersensibilidade
                auditiva no Transtorno do Espectro Autista.
              </p>
              <p className="mb-3 font-light text-[0.92rem] leading-[1.75] text-ink-muted sm:text-base sm:leading-[1.9]">
                Meu trabalho de conclusão de curso levou capacitação em disfagia
                para dentro de uma escola pública de educação especial,
                treinando quem alimenta essas crianças todos os dias a
                reconhecer sinais de engasgo e a oferecer alimentação segura.
              </p>
              <p className="mb-3 font-light text-[0.92rem] leading-[1.75] text-ink-muted sm:text-base sm:leading-[1.9]">
                Em 2025 integrei o corpo assistencial do{" "}
                <strong className="font-normal text-ink">
                  Hospital São Miguel Arcanjo
                </strong>
                , da Beneficência Nipo-Brasileira de São Paulo, com atuação em
                disfagia: avaliação da deglutição à beira do
                leito, definição da consistência segura de alimento e de
                líquido, reabilitação, manejo de pacientes traqueostomizados e
                em uso de sonda, e orientação à família e à equipe de
                enfermagem.
              </p>
              <p className="font-light text-[0.92rem] leading-[1.75] text-ink-muted sm:text-base sm:leading-[1.9]">
                Sigo em formação continuada, com mais de 200 horas em cursos
                certificados, concentradas em disfagia e em comunicação
                infantil.
              </p>

              <div className="mt-5 rounded-2xl border border-sage/30 bg-sage-pale/80 px-5 py-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.7)] sm:px-6 sm:py-5">
                <p className="text-[0.88rem] font-normal leading-[1.7] text-forest sm:text-[0.92rem]">
                  Registro profissional{" "}
                  <strong className="font-semibold">{CRFA}</strong>, no
                  CREFONO-2, Conselho Regional de Fonoaudiologia da 2ª Região
                  (São Paulo).
                </p>
              </div>
            </div>
          </Reveal>

          <div>
            <StaggerList
              as="ul"
              className="grid list-none grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4"
            >
              {NUMEROS.map((n) => (
                <StaggerItem key={n.label} as="li">
                  <NumeroCard {...n} />
                </StaggerItem>
              ))}
            </StaggerList>
          </div>
        </div>
      </SiteContainer>
    </section>
  );
}
