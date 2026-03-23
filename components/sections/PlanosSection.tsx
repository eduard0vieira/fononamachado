import SectionLabel from '@/components/ui/SectionLabel'
import type { PlanoCard } from '@/types'

const PLANOS: PlanoCard[] = [
  {
    nome: 'Linguagem — Consultório',
    valor: 120,
    moeda: 'R$',
    period: 'Pix ou Dinheiro',
    items: [
      'Linguagem infantil e adulta',
      'Motricidade orofacial',
      'Inclui anamnese e avaliação',
      'R$ 125 no cartão',
    ],
  },
  {
    nome: 'Pagamento Mensal',
    valor: 'Data fixa',
    period: 'flexível conforme o mês',
    items: [
      'Horário exclusivo reservado',
      'Paga todas as sessões do mês',
      'Pode limitar a até 4 sessões',
      'Pix, dinheiro ou cartão',
    ],
    highlighted: true,
  },
  {
    nome: 'Disfagia / Domiciliar',
    valor: 150,
    moeda: 'R$',
    period: 'Pix ou Dinheiro',
    items: [
      'Disfagia (consultório ou domiciliar)',
      'Linguagem domiciliar',
      'Deslocamento adicional para outra cidade',
      'R$ 155 no cartão',
    ],
  },
]

export default function PlanosSection() {
  return (
    <section
      id="planos"
      aria-labelledby="planos-titulo"
      className="bg-white text-center px-[8%] py-24"
    >
      <SectionLabel>Investimento</SectionLabel>
      <h2
        id="planos-titulo"
        className="font-serif text-[clamp(2.2rem,4vw,3.2rem)] font-light leading-[1.15] text-ink"
      >
        Valores e{' '}
        <span className="text-forest italic">Planos</span>
      </h2>

      <div
        className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-12 items-start"
        role="list"
      >
        {PLANOS.map((plano) => (
          <article
            key={plano.nome}
            role="listitem"
            className={`relative overflow-hidden rounded-[20px] px-6 py-9 transition-all duration-300 ${
              plano.highlighted
                ? 'bg-forest border-forest text-white shadow-lg -translate-y-1.5 hover:-translate-y-3'
                : 'bg-cream border border-forest/10 shadow-card hover:-translate-y-1 hover:shadow-lg'
            }`}
          >
            {plano.highlighted && (
              <span className="absolute top-4 right-[-28px] bg-honey text-white text-[0.58rem] tracking-[0.12em] font-semibold py-1 px-10 rotate-[35deg] uppercase">
                Mais Popular
              </span>
            )}

            <p
              className={`text-[0.68rem] font-semibold tracking-[0.16em] uppercase mb-3 ${
                plano.highlighted ? 'text-honey-light' : 'text-honey'
              }`}
            >
              {plano.nome}
            </p>

            {typeof plano.valor === 'number' ? (
              <p
                className={`font-serif text-5xl font-light leading-none mb-1 ${
                  plano.highlighted ? 'text-white' : 'text-ink'
                }`}
              >
                <sup className="text-xl align-super font-light">{plano.moeda}</sup>
                {plano.valor}
              </p>
            ) : (
              <p
                className={`font-serif text-2xl font-light pt-2 mb-1 ${
                  plano.highlighted ? 'text-white' : 'text-ink'
                }`}
              >
                {plano.valor}
              </p>
            )}

            <p
              className={`text-[0.78rem] font-light mb-6 ${
                plano.highlighted ? 'text-white/60' : 'text-ink-muted'
              }`}
            >
              {plano.period}
            </p>

            <div
              className={`h-px mb-5 ${
                plano.highlighted ? 'bg-white/15' : 'bg-forest/10'
              }`}
            />

            <ul className="list-none text-left space-y-0">
              {plano.items.map((item) => (
                <li
                  key={item}
                  className={`flex items-start gap-2.5 py-1.5 text-[0.84rem] font-light leading-[1.5] ${
                    plano.highlighted ? 'text-white/85' : 'text-ink-soft'
                  }`}
                >
                  <span
                    className={`font-semibold flex-shrink-0 ${
                      plano.highlighted ? 'text-sage-light' : 'text-sage'
                    }`}
                  >
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <p className="mt-11 inline-flex items-center gap-3 bg-cream-alt border border-forest/10 rounded-pill px-7 py-4 text-[0.88rem] text-ink-muted font-light">
        <span aria-hidden="true">💳</span>
        Formas de pagamento:{' '}
        <strong className="text-ink-soft font-medium ml-1">Pix · Dinheiro · Cartão</strong>
      </p>
    </section>
  )
}
