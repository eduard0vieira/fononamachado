import SiteContainer from "@/components/layout/SiteContainer";
import { Reveal, StaggerItem, StaggerList } from "@/components/motion";
import SectionLabel from "@/components/ui/SectionLabel";
import GoldRule from "@/components/ui/GoldRule";
import MobileCardCarousel from "@/components/ui/MobileCardCarousel";
import { InfoCardIcon } from "@/components/ui/SectionCardIcons";
import { siteEdgePadding } from "@/lib/siteLayout";
import { cn } from "@/lib/utils";
import type { InfoCard } from "@/types";

const INFO_CARDS: InfoCard[] = [
  {
    iconKey: "weekly",
    title: "Atendimento semanal",
    description:
      "Preferencialmente semanal — a constância é essencial para o processo terapêutico. Você tem um horário exclusivo reservado na agenda.",
  },
  {
    iconKey: "biweekly",
    title: "Atendimento quinzenal",
    description:
      "Disponível em situações específicas, sem reserva de horário fixo. Pagamento por sessão individual.",
  },
  {
    iconKey: "home",
    title: "Atendimento domiciliar",
    description:
      "Disponível para disfagia e linguagem. Mesmo valor do consultório para disfagia (R$ 150). Acréscimo de deslocamento para outra cidade.",
  },
  {
    iconKey: "session",
    title: "Duração da sessão",
    description:
      "45 minutos por sessão. O valor se aplica a todas as consultas: anamnese, avaliação e acompanhamento.",
  },
];

function InfoCardView({
  card,
  carousel,
}: {
  card: InfoCard;
  /** Só no carrossel mobile da seção Sobre */
  carousel?: "sobre";
}) {
  const m = carousel === "sobre";
  return (
    <article
      className={cn(
        "rounded-2xl border border-forest/10 bg-cream shadow-card",
        "transition-all duration-200",
        m ? "flex min-h-[9.75rem] h-full w-full p-4" : "p-5",
        "lg:hover:-translate-y-0.5 lg:hover:border-sage/40 lg:hover:bg-white lg:hover:shadow-md",
      )}
    >
      <div
        className={cn(
          "flex min-h-0",
          m ? "flex-1 gap-3" : "gap-3 sm:gap-4",
        )}
      >
        <span
          className={cn(
            "flex shrink-0 items-center justify-center rounded-xl border border-forest/10 bg-white text-forest",
            m ? "h-11 w-11" : "h-12 w-12",
          )}
          aria-hidden
        >
          <InfoCardIcon name={card.iconKey} />
        </span>
        <div
          className={cn(
            "min-w-0 text-left",
            m ? "flex flex-1 flex-col justify-center" : "flex-1",
          )}
        >
          <h3
            className={cn(
              "mb-1 font-serif font-normal text-ink",
              m ? "text-[0.98rem]" : "text-xl",
            )}
          >
            {card.title}
          </h3>
          <p
            className={cn(
              "font-light text-ink-muted [overflow-wrap:anywhere]",
              m ? "text-[0.8125rem] leading-[1.52]" : "text-[0.84rem] leading-[1.65]",
            )}
          >
            {card.description}
          </p>
        </div>
      </div>
    </article>
  );
}

export default function SobreSection() {
  return (
    <section
      id="sobre"
      aria-labelledby="sobre-titulo"
      className={cn("bg-white py-20 lg:py-28", siteEdgePadding)}
    >
      <SiteContainer className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <div>
            <SectionLabel>Quem sou eu</SectionLabel>
            <h2
              id="sobre-titulo"
              className="mb-5 font-serif text-[clamp(2rem,4.5vw,3.2rem)] font-light leading-[1.15] text-ink lg:mb-6"
            >
              Sobre <span className="text-forest italic">Mim</span>
            </h2>
            <GoldRule />
            <p className="mb-3 font-light text-[0.92rem] leading-[1.75] text-ink-muted sm:mb-4 sm:text-base sm:leading-[1.9]">
              Sou Fonoaudióloga, formada pela Universidade de Sorocaba, e realizo
              atendimentos para crianças e adultos em São Miguel Arcanjo e região.
            </p>
            <p className="mb-3 hidden font-light text-[0.92rem] leading-[1.75] text-ink-muted sm:mb-4 sm:block sm:text-base sm:leading-[1.9]">
              Meu trabalho é guiado pelo cuidado, pela escuta e pelo respeito,
              sempre buscando oferecer um acompanhamento responsável e de qualidade
              de acordo com as necessidades de cada pessoa.
            </p>
            <p className="mb-4 font-light text-[0.92rem] leading-[1.75] text-ink-muted sm:hidden">
              Trabalho com cuidado, escuta e respeito, buscando sempre um
              acompanhamento de qualidade.
            </p>
            <div className="mt-5 rounded-2xl border border-sage/30 bg-sage-pale/80 px-5 py-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.7)] sm:mt-6 sm:px-6 sm:py-5">
              <p className="text-[0.88rem] font-normal leading-[1.7] text-forest sm:hidden">
                Atendimento individual, 45 minutos, com avaliação e plano
                personalizado para cada paciente e família.
              </p>
              <p className="hidden font-normal leading-[1.75] text-forest sm:block sm:text-[0.92rem]">
                O atendimento é individual, com duração de 45 minutos, baseado em
                avaliação detalhada e plano terapêutico personalizado, respeitando
                as necessidades de cada paciente e família.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal className="lg:hidden" delay={0.08}>
          <MobileCardCarousel
            variant="sobre"
            ariaLabel="Informações sobre modalidades de atendimento"
            items={INFO_CARDS.map((card) => (
              <InfoCardView key={card.title} card={card} carousel="sobre" />
            ))}
          />
        </Reveal>

        <StaggerList
          as="div"
          className="hidden flex-col gap-3 lg:flex"
        >
          {INFO_CARDS.map((card) => (
            <StaggerItem as="div" key={card.title}>
              <InfoCardView card={card} />
            </StaggerItem>
          ))}
        </StaggerList>
      </SiteContainer>
    </section>
  );
}
