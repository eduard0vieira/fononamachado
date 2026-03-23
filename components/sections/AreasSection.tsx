import SectionLabel from '@/components/ui/SectionLabel'
import type { AreaCard } from '@/types'

const AREAS: AreaCard[] = [
  {
    icon: '💬',
    title: 'Linguagem Infantil',
    description:
      'Avaliação e intervenção no desenvolvimento da linguagem em crianças, trabalhando comunicação, fala e compreensão.',
  },
  {
    icon: '🗣️',
    title: 'Linguagem Adulto',
    description:
      'Acompanhamento terapêutico para adultos com alterações de linguagem, voz ou comunicação em geral.',
  },
  {
    icon: '👄',
    title: 'Motricidade Orofacial',
    description:
      'Avaliação e tratamento de alterações nos músculos da face, boca, mastigação, deglutição e respiração.',
  },
  {
    icon: '🍽️',
    title: 'Disfagia Adulto',
    description:
      'Reabilitação da deglutição em adultos, com atendimento domiciliar disponível para casos que exigem.',
  },
  {
    icon: '📊',
    title: 'Avaliação Detalhada',
    description:
      'Processo avaliativo completo com elaboração de plano terapêutico individualizado para cada paciente.',
  },
  {
    icon: '👨‍👩‍👧',
    title: 'Orientação Familiar',
    description:
      'Suporte e orientação para famílias, integrando o núcleo familiar no processo terapêutico da criança.',
  },
]

export default function AreasSection() {
  return (
    <section
      id="areas"
      aria-labelledby="areas-titulo"
      className="bg-cream-alt text-center px-[8%] py-24"
    >
      <SectionLabel>Especialidades</SectionLabel>
      <h2
        id="areas-titulo"
        className="font-serif text-[clamp(2.2rem,4vw,3.2rem)] font-light leading-[1.15] text-ink"
      >
        Áreas de{' '}
        <span className="text-forest italic">Atuação</span>
      </h2>

      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[18px] mt-12"
        role="list"
      >
        {AREAS.map((area) => (
          <article
            key={area.title}
            role="listitem"
            className="bg-white border border-forest/10 p-9 rounded-[20px] text-center shadow-card transition-all duration-300 hover:border-sage-light hover:-translate-y-1.5 hover:shadow-lg"
          >
            <span className="text-[1.9rem] mb-3.5 block" aria-hidden="true">
              {area.icon}
            </span>
            <h3 className="font-serif text-[1.35rem] font-normal text-forest mb-2.5">
              {area.title}
            </h3>
            <p className="text-[0.84rem] text-ink-muted font-light leading-[1.7]">
              {area.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  )
}
