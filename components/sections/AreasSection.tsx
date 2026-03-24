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
      "Avaliação e intervenção no desenvolvimento da linguagem em crianças, trabalhando comunicação, fala e compreensão.",
  },
  {
    iconKey: "adultLanguage",
    title: "Linguagem adulto",
    description:
      "Acompanhamento terapêutico para adultos com alterações de linguagem, voz ou comunicação em geral.",
  },
  {
    iconKey: "oro",
    title: "Motricidade orofacial",
    description:
      "Avaliação e tratamento de alterações nos músculos da face, boca, mastigação, deglutição e respiração.",
  },
  {
    iconKey: "dysphagia",
    title: "Disfagia adulto",
    description:
      "Reabilitação da deglutição em adultos, com atendimento domiciliar disponível para casos que exigem.",
  },
  {
    iconKey: "assessment",
    title: "Avaliação detalhada",
    description:
      "Processo avaliativo completo com elaboração de plano terapêutico individualizado para cada paciente.",
  },
  {
    iconKey: "family",
    title: "Orientação familiar",
    description:
      "Suporte e orientação para famílias, integrando o núcleo familiar no processo terapêutico da criança.",
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
        m ? "h-full min-h-[17.5rem] w-full px-5 py-6" : "h-full p-8",
        "md:hover:-translate-y-1 md:hover:border-sage/50 md:hover:shadow-md",
      )}
    >
      <span
        className={cn(
          "mx-auto flex items-center justify-center rounded-2xl border border-forest/10 bg-sage-pale/60 text-forest",
          m ? "mb-3 h-12 w-12" : "mb-4 h-14 w-14",
        )}
        aria-hidden
      >
        <AreaCardIcon name={area.iconKey} />
      </span>
      <h3
        className={cn(
          "font-serif font-normal text-forest",
          m ? "mb-2 text-[1.12rem] leading-snug" : "mb-2 text-[1.3rem]",
        )}
      >
        {area.title}
      </h3>
      <p
        className={cn(
          "text-pretty font-light text-ink-muted [overflow-wrap:anywhere]",
          m ? "text-[0.8125rem] leading-[1.58]" : "text-[0.84rem] leading-[1.65]",
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
