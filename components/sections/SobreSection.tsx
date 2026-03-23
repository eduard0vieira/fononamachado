import SectionLabel from '@/components/ui/SectionLabel'
import GoldRule from '@/components/ui/GoldRule'
import type { InfoCard } from '@/types'

const INFO_CARDS: InfoCard[] = [
  {
    icon: '📅',
    title: 'Atendimento Semanal',
    description:
      'Preferencialmente semanal — a constância é essencial para o processo terapêutico. Você tem um horário exclusivo reservado na agenda.',
  },
  {
    icon: '📋',
    title: 'Atendimento Quinzenal',
    description:
      'Disponível em situações específicas, sem reserva de horário fixo. Pagamento por sessão individual.',
  },
  {
    icon: '🏠',
    title: 'Atendimento Domiciliar',
    description:
      'Disponível para disfagia e linguagem. Mesmo valor do consultório para disfagia (R$ 150). Acréscimo de deslocamento para outra cidade.',
  },
  {
    icon: '⏱️',
    title: 'Duração da Sessão',
    description:
      '45 minutos por sessão. O valor se aplica a todas as consultas: anamnese, avaliação e acompanhamento.',
  },
]

export default function SobreSection() {
  return (
    <section
      id="sobre"
      aria-labelledby="sobre-titulo"
      className="bg-white grid grid-cols-1 lg:grid-cols-2 gap-20 px-[8%] py-24"
    >
      {/* Text */}
      <div>
        <SectionLabel>Quem sou eu</SectionLabel>
        <h2
          id="sobre-titulo"
          className="font-serif text-[clamp(2.2rem,4vw,3.2rem)] font-light leading-[1.15] text-ink mb-6"
        >
          Sobre{' '}
          <span className="text-forest italic">Mim</span>
        </h2>
        <GoldRule />
        <p className="font-light leading-[1.9] text-ink-muted mb-4">
          Sou Fonoaudióloga, formada pela Universidade de Sorocaba, e realizo atendimentos para
          crianças e adultos em São Miguel Arcanjo e região.
        </p>
        <p className="font-light leading-[1.9] text-ink-muted mb-4">
          Meu trabalho é guiado pelo cuidado, pela escuta e pelo respeito, sempre buscando oferecer
          um acompanhamento responsável e de qualidade de acordo com as necessidades de cada pessoa.
        </p>
        <div className="border-l-[3px] border-sage bg-sage-pale px-6 py-5 rounded-r-xl mt-6">
          <p className="text-forest text-[0.92rem] leading-[1.75] font-normal">
            O atendimento é individual, com duração de 45 minutos, baseado em avaliação detalhada e
            plano terapêutico personalizado, respeitando as necessidades de cada paciente e família.
          </p>
        </div>
      </div>

      {/* Cards */}
      <div className="flex flex-col gap-3.5">
        {INFO_CARDS.map((card) => (
          <article
            key={card.title}
            className="bg-cream border border-forest/10 p-5 rounded-xl shadow-card transition-all duration-250 hover:bg-white hover:shadow-md hover:-translate-y-0.5"
          >
            <h3 className="font-serif text-xl font-normal text-ink mb-1.5">
              {card.icon} {card.title}
            </h3>
            <p className="text-[0.84rem] text-ink-muted font-light leading-[1.65]">
              {card.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  )
}
