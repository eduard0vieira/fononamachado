import SiteContainer from "@/components/layout/SiteContainer";
import { Reveal, StaggerItem, StaggerList } from "@/components/motion";
import SectionLabel from "@/components/ui/SectionLabel";
import GoldRule from "@/components/ui/GoldRule";
import MobileCardCarousel from "@/components/ui/MobileCardCarousel";
import { AreaCardIcon } from "@/components/ui/SectionCardIcons";
import { siteEdgePadding } from "@/lib/siteLayout";
import { cn } from "@/lib/utils";
import type { AreaCard } from "@/types";

const AREAS: AreaCard[] = [
  {
    iconKey: "childLanguage",
    title: "Linguagem infantil",
    description:
      "Avaliação e acompanhamento do desenvolvimento da linguagem oral e escrita em crianças, incluindo fala, compreensão, comunicação e dificuldades relacionadas à aprendizagem escolar.",
  },
  {
    iconKey: "adultLanguage",
    title: "Linguagem adulto",
    description:
      "Atendimento terapêutico para adultos com dificuldades de linguagem, fala, voz ou comunicação, promovendo mais autonomia e qualidade de vida no dia a dia.",
  },
  {
    iconKey: "oro",
    title: "Motricidade orofacial",
    description:
      "Avaliação e tratamento das funções orais, incluindo mastigação, deglutição, respiração e musculatura da face.",
  },
  {
    iconKey: "dysphagia",
    title: "Disfagia adulto",
    description:
      "Avaliação e Reabilitação da deglutição em adultos, com cuidado individualizado e possibilidade de atendimento domiciliar para maior conforto e segurança.",
  },
  {
    iconKey: "assessment",
    title: "Avaliação detalhada",
    description:
      "Processo completo de avaliação fonoaudiológica para identificação de necessidades e definição de plano terapêutico individualizado.",
  },
  {
    iconKey: "family",
    title: "Orientação familiar",
    description:
      "Acolhimento e orientação às famílias, fortalecendo sua participação no processo terapêutico e contribuindo para o desenvolvimento da criança.",
  },
];

function AreaCardView({
  area,
  carousel,
}: {
  area: AreaCard;
  carousel?: "areas";
}) {
  const m = carousel === "areas";
  return (
    <article
      className={cn(
        "rounded-2xl border border-forest/10 bg-white text-center shadow-card",
        "transition-all duration-200",
        m ? "w-full px-4 py-4" : "h-full p-8",
        "md:hover:-translate-y-1 md:hover:border-sage/50 md:hover:shadow-md",
      )}
    >
      <span
        className={cn(
          "mx-auto flex items-center justify-center rounded-2xl border border-forest/10 bg-sage-pale/60 text-forest",
          m ? "mb-2 h-9 w-9" : "mb-4 h-14 w-14",
        )}
        aria-hidden
      >
        <AreaCardIcon name={area.iconKey} />
      </span>
      <h3
        className={cn(
          "font-serif font-normal text-forest",
          m ? "mb-1 text-[0.95rem] leading-snug" : "mb-2 text-[1.3rem]",
        )}
      >
        {area.title}
      </h3>
      <p
        className={cn(
          "text-pretty font-light text-ink-muted [overflow-wrap:anywhere]",
          m ? "text-[0.76rem] leading-[1.55]" : "text-[0.84rem] leading-[1.65]",
        )}
      >
        {area.description}
      </p>
    </article>
  );
}

export default function AreasSection() {
  return (
    <section
      id="areas"
      aria-labelledby="areas-titulo"
      className={cn(
        "bg-cream-alt py-20 text-center md:py-24 lg:py-28",
        siteEdgePadding,
      )}
    >
      <SiteContainer>
        <Reveal className="text-center">
          <SectionLabel>Especialidades</SectionLabel>
          <h2
            id="areas-titulo"
            className="font-serif text-[clamp(2rem,4.5vw,3.2rem)] font-light leading-[1.15] text-ink"
          >
            Áreas de <span className="text-forest italic">Atuação</span>
          </h2>
          <GoldRule className="mx-auto" />
        </Reveal>

        <Reveal className="mt-8 md:hidden" delay={0.06}>
          <MobileCardCarousel
            variant="areas"
            ariaLabel="Especialidades e áreas de atuação"
            items={AREAS.map((area) => (
              <AreaCardView key={area.title} area={area} carousel="areas" />
            ))}
          />
        </Reveal>

        <StaggerList
          as="ul"
          className="mt-10 hidden list-none gap-4 md:grid md:grid-cols-2 md:gap-5 lg:grid-cols-3 lg:gap-5"
        >
          {AREAS.map((area) => (
            <StaggerItem key={area.title}>
              <AreaCardView area={area} />
            </StaggerItem>
          ))}
        </StaggerList>
      </SiteContainer>
    </section>
  );
}
