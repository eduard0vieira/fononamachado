import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { WHATSAPP_URL, EMAIL, INSTAGRAM_URL, ADDRESS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Termos de Atendimento — Nathália Machado Fonoaudióloga",
};

interface TermoSectionProps {
  number: string;
  title: string;
  children: React.ReactNode;
}

function TermoSection({ number, title, children }: TermoSectionProps) {
  return (
    <div className="mb-14 opacity-0 animate-fade-up [animation-fill-mode:forwards]">
      <div className="flex items-center gap-4 mb-4">
        <span className="font-serif text-2xl italic text-honey">{number}.</span>
        <span className="font-serif text-[clamp(17px,3vw,21px)] font-medium tracking-[0.1em] uppercase text-forest">
          {title}
        </span>
        <div className="flex-1 h-px bg-gradient-to-r from-sage-light to-transparent" />
      </div>
      <div className="text-[15px] text-ink-muted leading-[1.9] space-y-3">
        {children}
      </div>
    </div>
  );
}

function AlertBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-honey-pale border-l-[3px] border-honey rounded-r-lg px-5 py-4 my-4">
      <p className="text-[14px] text-ink-soft leading-[1.8]">{children}</p>
    </div>
  );
}

function HighlightCard({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white border-l-[3px] border-honey rounded-r-lg px-5 py-4 shadow-card my-3">
      <p className="text-[10px] font-medium tracking-[0.22em] uppercase text-honey mb-1.5">
        {label}
      </p>
      <div>{children}</div>
    </div>
  );
}

function Ornament() {
  return (
    <div
      className="text-center text-sage my-8 text-lg select-none"
      aria-hidden="true"
    >
      ✦
    </div>
  );
}

export default function TermoPage() {
  return (
    <>
      {/* Header */}
      <div className="bg-forest px-10 pt-5 pb-5 text-center">
        <div className="mb-7">
          <Image
            src="/images/logo.png"
            alt="Nathália Machado Fonoaudióloga"
            width={160}
            height={80}
            className="h-20 w-auto object-contain mx-auto"
          />
        </div>
        <h1 className="font-serif text-[clamp(26px,5vw,42px)] font-normal text-white tracking-[0.08em] uppercase leading-[1.2]">
          Nathália Machado
        </h1>
        <p className="text-[12px] font-sans tracking-[0.2em] text-honey-light uppercase mt-1.5">
          Fonoaudióloga · CRFa 2-23700
        </p>
        <div className="w-14 h-px bg-honey mx-auto mt-5" />
        <p className="font-serif italic text-[clamp(13px,2.5vw,17px)] text-white/60 tracking-[0.12em] mt-4">
          Termos de Atendimento Fonoaudiológico
        </p>
      </div>

      {/* Doc title */}
      <div className="bg-cream-alt border-t-[3px] border-honey border-b px-10 py-7 text-center">
        <h2 className="font-serif text-[clamp(20px,4vw,30px)] font-medium tracking-[0.14em] uppercase text-ink">
          Termos de Atendimento Fonoaudiológico
        </h2>
        <p className="text-[11.5px] tracking-[0.18em] text-ink-muted uppercase mt-1.5">
          Última atualização: Março de 2026
        </p>
      </div>

      {/* Content */}
      <main className="max-w-[860px] mx-auto px-8 py-16">
        <TermoSection number="01" title="Sobre os Atendimentos">
          <p>
            Os atendimentos são realizados pela fonoaudióloga{" "}
            <strong>Nathália Machado Vieira de Oliveira</strong>, formada pela
            Universidade de Sorocaba, com atuação nas áreas de:
          </p>
          <ul className="list-none space-y-1 my-2">
            {[
              "Linguagem infantil e adulta;",
              "Motricidade orofacial;",
              "Disfagia em adultos.",
            ].map((item) => (
              <li
                key={item}
                className="pl-5 relative before:content-[''] before:absolute before:left-0 before:top-[13px] before:w-1.5 before:h-1.5 before:rounded-full before:border before:border-honey"
              >
                {item}
              </li>
            ))}
          </ul>
          <p>
            Cada atendimento possui duração média de <strong>45 minutos</strong>{" "}
            e é conduzido de forma individual, com base em avaliação detalhada e
            plano terapêutico personalizado, respeitando as necessidades de cada
            paciente e família.
          </p>
          <p>
            A frequência <strong>semanal</strong> é recomendada, pois a
            constância é um fator essencial para o progresso terapêutico.
          </p>
          <p>
            Em situações específicas, o acompanhamento é ajustado da melhor
            forma possível, respeitando a realidade familiar, sem perder de
            vista os objetivos terapêuticos.
          </p>
        </TermoSection>

        <Ornament />

        <TermoSection number="02" title="Reserva de Horário">
          <p>
            Nos atendimentos semanais, o paciente possui um{" "}
            <strong>horário exclusivo</strong> reservado na agenda da
            profissional. A manutenção desse horário fixo depende da
            continuidade do acompanhamento e do cumprimento das condições
            estabelecidas nestes termos.
          </p>
          <AlertBox>
            Por esse motivo,{" "}
            <strong>faltas e cancelamentos sem aviso prévio</strong> impactam
            diretamente na organização da agenda e no atendimento de outros
            pacientes.
          </AlertBox>
        </TermoSection>

        <Ornament />

        <TermoSection number="03" title="Valores das Sessões">
          <p>
            Os valores dos atendimentos serão informados previamente ao
            responsável e poderão sofrer reajustes mediante comunicação prévia.
          </p>
          <p>
            O valor vigente na data do atendimento será considerado como
            referência para cobrança.
          </p>
          <p>
            Os valores se aplicam a <strong>todos os atendimentos</strong>,
            incluindo anamnese, avaliação e sessões terapêuticas.
          </p>
        </TermoSection>

        <Ornament />

        <TermoSection number="04" title="Formas de Pagamento">
          <p>
            Os pagamentos poderão ser realizados por <strong>Pix</strong>,{" "}
            <strong>dinheiro</strong> ou <strong>cartão</strong>, de acordo com
            a preferência do responsável.
          </p>
          <p>
            O responsável poderá optar por uma das modalidades de periodicidade:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3">
            <HighlightCard label="Pagamento por sessão">
              <p className="text-[14px] text-ink-muted leading-[1.7]">
                Realizado até o dia da sessão.
              </p>
            </HighlightCard>
            <HighlightCard label="Pagamento mensal">
              <p className="text-[14px] text-ink-muted leading-[1.7]">
                Em data fixa acordada. O responsável pode optar por incluir
                todas as sessões do mês ou limitar a no máximo 4 sessões
                mensais.
              </p>
            </HighlightCard>
          </div>
        </TermoSection>

        <Ornament />

        <TermoSection number="05" title="Faltas e Cancelamentos">
          <p>
            Imprevistos podem acontecer, por isso solicitamos atenção às regras
            de organização da agenda.
          </p>
          <ul className="list-none space-y-1 my-2">
            {[
              <>
                Cancelamentos realizados com{" "}
                <strong>mínimo de 12 horas de antecedência</strong> não serão
                cobrados;
              </>,
              <>
                Cancelamentos realizados fora desse prazo serão cobrados
                normalmente;
              </>,
              <>Faltas sem aviso prévio não geram reposição;</>,
              <>
                A partir de <strong>duas faltas consecutivas</strong> sem aviso,
                o paciente poderá ter seu atendimento encerrado, com risco de
                perda do horário reservado.
              </>,
            ].map((item, i) => (
              <li
                key={i}
                className="pl-5 relative before:content-[''] before:absolute before:left-0 before:top-[13px] before:w-1.5 before:h-1.5 before:rounded-full before:border before:border-honey"
              >
                {item}
              </li>
            ))}
          </ul>
        </TermoSection>

        <Ornament />

        <TermoSection number="06" title="Atrasos">
          <p>
            Em caso de atraso do paciente, o atendimento será realizado{" "}
            <strong>dentro do tempo restante</strong> da sessão.
          </p>
          <p>O tempo perdido não será compensado ao final do atendimento.</p>
        </TermoSection>

        <Ornament />

        <TermoSection number="07" title="Reposição de Sessões">
          <p>
            Sessões canceladas dentro do prazo poderão ser repostas dentro de
            até <strong>30 dias</strong>, conforme disponibilidade de horário na
            agenda.
          </p>
          <AlertBox>
            Caso não haja horário disponível para reposição dentro desse prazo,
            o valor da sessão poderá ser utilizado como{" "}
            <strong>crédito no mês seguinte</strong>, reduzindo o valor do
            pagamento do período. Esse crédito não é cumulativo para períodos
            posteriores e não será convertido em reembolso.
          </AlertBox>
        </TermoSection>

        <Ornament />

        <TermoSection number="08" title="Ausência Prolongada">
          <p>
            Caso o paciente precise se ausentar por período prolongado, poderá
            solicitar uma <strong>pausa temporária</strong> no atendimento,
            desde que comunique com mínimo de{" "}
            <strong>30 dias de antecedência</strong>.
          </p>
          <p>
            Será possível manter a vaga reservada por até{" "}
            <strong>30 dias de ausência</strong>. Períodos superiores poderão
            resultar na liberação do horário para outros pacientes.
          </p>
          <AlertBox>
            Essa possibilidade poderá ser utilizada{" "}
            <strong>uma vez a cada 12 meses</strong>.
          </AlertBox>
        </TermoSection>

        <Ornament />

        <TermoSection number="09" title="Atraso de Pagamento">
          <p>Pagamentos realizados após a data combinada poderão sofrer:</p>
          <ul className="list-none space-y-1 my-2">
            {["Multa de 2%;", "Juros de 1% ao mês."].map((item) => (
              <li
                key={item}
                className="pl-5 relative before:content-[''] before:absolute before:left-0 before:top-[13px] before:w-1.5 before:h-1.5 before:rounded-full before:border before:border-honey"
              >
                {item}
              </li>
            ))}
          </ul>
          <p>Em caso de atraso recorrente poderá ocorrer:</p>
          <ul className="list-none space-y-1 my-2">
            {[
              "Suspensão temporária dos atendimentos;",
              "Perda do horário reservado na agenda.",
            ].map((item) => (
              <li
                key={item}
                className="pl-5 relative before:content-[''] before:absolute before:left-0 before:top-[13px] before:w-1.5 before:h-1.5 before:rounded-full before:border before:border-honey"
              >
                {item}
              </li>
            ))}
          </ul>
          <AlertBox>
            Caso existam mais de{" "}
            <strong>5 sessões com pagamento pendente</strong>, novos
            atendimentos poderão deixar de ser agendados até regularização da
            situação.
          </AlertBox>
        </TermoSection>

        <Ornament />

        <TermoSection number="10" title="Nota Fiscal">
          <p>
            A nota fiscal será emitida em até <strong>3 dias úteis</strong> após
            a confirmação do pagamento, respeitando o mês de competência da
            prestação do serviço.
          </p>
          <p>
            Por padrão, a nota fiscal será emitida com o{" "}
            <strong>nome e CPF do responsável financeiro</strong>. Caso o
            responsável deseje incluir também telefone e endereço, deverá
            solicitar expressamente essa inclusão.
          </p>
        </TermoSection>

        <Ornament />

        <TermoSection number="11" title="Reajuste de Valores">
          <p>
            Os valores poderão ser reajustados <strong>anualmente</strong>,
            mediante comunicação prévia de <strong>60 dias</strong> aos
            responsáveis.
          </p>
        </TermoSection>

        <Ornament />

        <TermoSection number="12" title="Uso de Imagem e Voz">
          <p>
            O responsável autoriza a gravação de imagem e voz do paciente
            durante sessões de avaliação e/ou tratamento, exclusivamente para:
          </p>
          <ul className="list-none space-y-1 my-2">
            {[
              "Análise clínica;",
              "Acompanhamento terapêutico;",
              "Desenvolvimento do tratamento.",
            ].map((item) => (
              <li
                key={item}
                className="pl-5 relative before:content-[''] before:absolute before:left-0 before:top-[13px] before:w-1.5 before:h-1.5 before:rounded-full before:border before:border-honey"
              >
                {item}
              </li>
            ))}
          </ul>
          <p>
            As gravações são destinadas apenas ao <strong>uso interno</strong>,
            não sendo utilizadas para divulgação pública.
          </p>
          <p>
            Esta autorização poderá ser{" "}
            <strong>revogada a qualquer momento</strong> mediante solicitação
            formal realizada via WhatsApp.
          </p>
        </TermoSection>

        <Ornament />

        <TermoSection number="13" title="Comunicação">
          <p>
            As comunicações relacionadas a agendamentos, cancelamentos,
            orientações administrativas e atualização destes termos serão
            realizadas preferencialmente via <strong>WhatsApp</strong>.
          </p>
          <p>
            Solicitamos que o responsável mantenha seus dados de contato
            atualizados para garantir o recebimento de todas as informações
            relevantes ao acompanhamento.
          </p>
        </TermoSection>

        <Ornament />

        <TermoSection number="14" title="Sobre a Evolução Terapêutica">
          <p>
            O acompanhamento fonoaudiológico é realizado com base em critérios
            técnicos e científicos, com dedicação e comprometimento em cada
            etapa do tratamento.
          </p>
          <p>
            No entanto, a evolução terapêutica depende de fatores individuais de
            cada paciente, como histórico clínico, engajamento nas atividades
            propostas e o apoio do ambiente familiar. Por esse motivo,{" "}
            <strong>
              não é possível garantir resultados em prazo determinado
            </strong>
            .
          </p>
          <p>
            O plano terapêutico é construído de forma personalizada e revisado
            continuamente, sempre com o objetivo de oferecer o melhor
            acompanhamento possível.
          </p>
        </TermoSection>

        <Ornament />

        <TermoSection number="15" title="Atualização dos Termos">
          <p>
            Estes Termos de Atendimento poderão ser atualizados sempre que
            necessário, para melhorar a organização dos atendimentos ou realizar
            adequações administrativas.
          </p>
          <p>
            Em caso de alterações relevantes, os responsáveis serão comunicados
            previamente via <strong>WhatsApp</strong>. A continuidade dos
            atendimentos após a comunicação será considerada como aceite das
            novas condições.
          </p>
        </TermoSection>

        <Ornament />

        {/* 16 — Aceite */}
        <div className="bg-forest/5 border border-sage-light rounded-2xl px-8 py-8 text-center mt-8">
          <p className="text-[0.68rem] font-semibold tracking-[0.2em] uppercase text-honey mb-3">
            aceite dos termos
          </p>
          <h3 className="font-serif text-2xl font-medium text-ink mb-4">
            16. Aceite dos Termos
          </h3>
          <p className="text-[15px] text-ink-muted leading-[1.9] max-w-xl mx-auto">
            O responsável declara ter tido acesso prévio a estes termos antes do
            início ou continuidade do atendimento, e que o envio de dados para
            cadastro, confirmação de agendamento, realização de pagamento ou
            continuidade dos atendimentos caracteriza ciência e concordância com
            todas as condições aqui estabelecidas.
          </p>
          <div className="h-px w-24 bg-sage-light mx-auto mt-6" />
        </div>
      </main>

      {/* Footer do termo */}
      <footer className="bg-forest px-[8%] py-10 text-center text-white/70">
        <p className="font-serif text-lg font-normal text-white mb-1">
          Nathália Machado Vieira de Oliveira
        </p>
        <p className="text-[0.78rem] tracking-widest uppercase text-sage-light mb-4">
          CRFa 2-23700
        </p>
        <div className="text-[0.8rem] font-light space-y-1">
          <p>{ADDRESS.replace("\n", " — ")}</p>
          <p className="text-white/50">
            Nathalia Machado Vieira de Oliveira Ltda · CNPJ 65.304.270/0001-31
          </p>
          <p className="mt-3 flex items-center justify-center gap-4 flex-wrap">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="border-b border-sage-light hover:text-white transition-colors"
            >
              (15) 99666-1683
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="border-b border-sage-light hover:text-white transition-colors"
            >
              {EMAIL}
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="border-b border-sage-light hover:text-white transition-colors"
            >
              @fononamachado
            </a>
          </p>
        </div>
        <div className="mt-6">
          <Link
            href="/"
            className="text-[0.74rem] tracking-wide text-white/50 hover:text-white/80 transition-colors border-b border-white/20"
          >
            ← Voltar ao site
          </Link>
        </div>
      </footer>
    </>
  );
}
