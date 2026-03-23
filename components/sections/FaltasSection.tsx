import Link from 'next/link'
import SectionLabel from '@/components/ui/SectionLabel'
import GoldRule from '@/components/ui/GoldRule'
import type { FaltaItem } from '@/types'

const FALTAS: FaltaItem[] = [
  {
    number: 1,
    text: 'Cancelamentos com mínimo 12h de antecedência não são cobrados.',
  },
  {
    number: 2,
    text: 'Cancelamentos fora desse prazo são cobrados normalmente.',
  },
  {
    number: 3,
    text: 'Faltas sem aviso não geram reposição e o tempo perdido por atraso não é compensado.',
  },
  {
    number: 4,
    text: 'Reposições em até 30 dias; sem horário disponível, o valor vira crédito para o mês seguinte.',
  },
  {
    number: 5,
    text: 'Ausência prolongada: pausa de até 30 dias mantendo a vaga, com aviso de 30 dias. Disponível 1x por ano.',
  },
  {
    number: 6,
    text: 'A partir de 2 faltas consecutivas sem aviso, o paciente poderá perder sua vaga e horário preferencial.',
  },
]

const DocumentIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14,2 14,8 20,8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
  </svg>
)

export default function FaltasSection() {
  return (
    <section
      id="faltas"
      aria-labelledby="faltas-titulo"
      className="bg-cream-alt grid grid-cols-1 lg:grid-cols-2 gap-20 px-[8%] py-24"
    >
      {/* Policy list */}
      <div>
        <SectionLabel>Organização</SectionLabel>
        <h2
          id="faltas-titulo"
          className="font-serif text-[clamp(2.2rem,4vw,3.2rem)] font-light leading-[1.15] text-ink"
        >
          Faltas e{' '}
          <span className="text-forest italic">Reposições</span>
        </h2>
        <GoldRule />
        <ul className="list-none mt-7 space-y-0">
          {FALTAS.map((falta) => (
            <li
              key={falta.number}
              className="flex gap-4 py-3.5 border-b border-forest/10 last:border-b-0 text-[0.88rem] font-light leading-[1.65] text-ink-soft"
            >
              <span className="flex-shrink-0 mt-0.5 w-7 h-7 bg-forest text-white rounded-full flex items-center justify-center text-[0.68rem] font-semibold">
                {falta.number}
              </span>
              <span>{falta.text}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Terms box */}
      <div className="bg-white border border-forest/10 rounded-[20px] p-9 text-center shadow-card self-start">
        <SectionLabel>Documentação</SectionLabel>
        <h3 className="font-serif text-[1.8rem] font-light leading-[1.15] text-ink mb-4">
          Termos de{' '}
          <span className="text-forest italic">Atendimento</span>
        </h3>
        <p className="text-[0.9rem] font-light leading-[1.75] text-ink-muted mb-6">
          Antes de iniciar o acompanhamento terapêutico, os responsáveis ou pacientes tomam ciência
          e concordam com os termos e condições do atendimento fonoaudiológico.
        </p>
        <Link
          href="/termo"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2.5 bg-forest text-white rounded-pill px-6 py-3 text-[0.8rem] font-medium tracking-wide uppercase transition-all duration-250 hover:bg-forest-light hover:-translate-y-0.5 hover:shadow-md"
        >
          <DocumentIcon />
          Ler Termos de Atendimento
        </Link>
      </div>
    </section>
  )
}
