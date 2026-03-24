import {
  TermoSection,
  TermoAlert,
  TermoHighlightCard,
  TermoSpacer,
  TermoList,
} from "@/components/termo/TermoBlocks";

export default function TermoSections() {
  return (
    <>
      <TermoSection number="01" title="Sobre os atendimentos">
        <p>
          Os atendimentos são realizados pela fonoaudióloga{" "}
          <strong>Nathália Machado Vieira de Oliveira</strong>, formada pela
          Universidade de Sorocaba, com atuação nas áreas de:
        </p>
        <TermoList
          items={[
            "Linguagem infantil e adulta;",
            "Motricidade orofacial;",
            "Disfagia em adultos.",
          ]}
        />
        <p>
          Cada atendimento possui duração média de <strong>45 minutos</strong>{" "}
          e é conduzido de forma individual, com base em avaliação detalhada e
          plano terapêutico personalizado, respeitando as necessidades de cada
          paciente e família.
        </p>
        <p>
          A frequência <strong>semanal</strong> é recomendada, pois a constância
          é um fator essencial para o progresso terapêutico.
        </p>
        <p>
          Em situações específicas, o acompanhamento é ajustado da melhor forma
          possível, respeitando a realidade familiar, sem perder de vista os
          objetivos terapêuticos.
        </p>
      </TermoSection>

      <TermoSpacer />

      <TermoSection number="02" title="Reserva de horário">
        <p>
          Nos atendimentos semanais, o paciente possui um{" "}
          <strong>horário exclusivo</strong> reservado na agenda da
          profissional. A manutenção desse horário fixo depende da continuidade
          do acompanhamento e do cumprimento das condições estabelecidas nestes
          termos.
        </p>
        <TermoAlert>
          Por esse motivo,{" "}
          <strong>faltas e cancelamentos sem aviso prévio</strong> impactam
          diretamente na organização da agenda e no atendimento de outros
          pacientes.
        </TermoAlert>
      </TermoSection>

      <TermoSpacer />

      <TermoSection number="03" title="Valores das sessões">
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

      <TermoSpacer />

      <TermoSection number="04" title="Formas de pagamento">
        <p>
          Os pagamentos poderão ser realizados por <strong>Pix</strong>,{" "}
          <strong>dinheiro</strong> ou <strong>cartão</strong>, de acordo com a
          preferência do responsável.
        </p>
        <p>
          O responsável poderá optar por uma das modalidades de periodicidade:
        </p>
        <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
          <TermoHighlightCard label="Pagamento por sessão">
            <p>Realizado até o dia da sessão.</p>
          </TermoHighlightCard>
          <TermoHighlightCard label="Pagamento mensal">
            <p>
              Em data fixa acordada. O responsável pode optar por incluir todas
              as sessões do mês ou limitar a no máximo 4 sessões mensais.
            </p>
          </TermoHighlightCard>
        </div>
      </TermoSection>

      <TermoSpacer />

      <TermoSection number="05" title="Faltas e cancelamentos">
        <p>
          Imprevistos podem acontecer, por isso solicitamos atenção às regras
          de organização da agenda.
        </p>
        <TermoList
          items={[
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
              A partir de <strong>duas faltas consecutivas</strong> sem aviso, o
              paciente poderá ter seu atendimento encerrado, com risco de perda
              do horário reservado.
            </>,
          ]}
        />
      </TermoSection>

      <TermoSpacer />

      <TermoSection number="06" title="Atrasos">
        <p>
          Em caso de atraso do paciente, o atendimento será realizado{" "}
          <strong>dentro do tempo restante</strong> da sessão.
        </p>
        <p>O tempo perdido não será compensado ao final do atendimento.</p>
      </TermoSection>

      <TermoSpacer />

      <TermoSection number="07" title="Reposição de sessões">
        <p>
          Sessões canceladas dentro do prazo poderão ser repostas dentro de até{" "}
          <strong>30 dias</strong>, conforme disponibilidade de horário na
          agenda.
        </p>
        <TermoAlert>
          Caso não haja horário disponível para reposição dentro desse prazo, o
          valor da sessão poderá ser utilizado como{" "}
          <strong>crédito no mês seguinte</strong>, reduzindo o valor do
          pagamento do período. Esse crédito não é cumulativo para períodos
          posteriores e não será convertido em reembolso.
        </TermoAlert>
      </TermoSection>

      <TermoSpacer />

      <TermoSection number="08" title="Ausência prolongada">
        <p>
          Caso o paciente precise se ausentar por período prolongado, poderá
          solicitar uma <strong>pausa temporária</strong> no atendimento, desde
          que comunique com mínimo de{" "}
          <strong>30 dias de antecedência</strong>.
        </p>
        <p>
          Será possível manter a vaga reservada por até{" "}
          <strong>30 dias de ausência</strong>. Períodos superiores poderão
          resultar na liberação do horário para outros pacientes.
        </p>
        <TermoAlert>
          Essa possibilidade poderá ser utilizada{" "}
          <strong>uma vez a cada 12 meses</strong>.
        </TermoAlert>
      </TermoSection>

      <TermoSpacer />

      <TermoSection number="09" title="Atraso de pagamento">
        <p>Pagamentos realizados após a data combinada poderão sofrer:</p>
        <TermoList items={["Multa de 2%;", "Juros de 1% ao mês."]} />
        <p>Em caso de atraso recorrente poderá ocorrer:</p>
        <TermoList
          items={[
            "Suspensão temporária dos atendimentos;",
            "Perda do horário reservado na agenda.",
          ]}
        />
        <TermoAlert>
          Caso existam mais de{" "}
          <strong>5 sessões com pagamento pendente</strong>, novos atendimentos
          poderão deixar de ser agendados até regularização da situação.
        </TermoAlert>
      </TermoSection>

      <TermoSpacer />

      <TermoSection number="10" title="Nota fiscal">
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

      <TermoSpacer />

      <TermoSection number="11" title="Reajuste de valores">
        <p>
          Os valores poderão ser reajustados <strong>anualmente</strong>,
          mediante comunicação prévia de <strong>60 dias</strong> aos
          responsáveis.
        </p>
      </TermoSection>

      <TermoSpacer />

      <TermoSection number="12" title="Uso de imagem e voz">
        <p>
          O responsável autoriza a gravação de imagem e voz do paciente durante
          sessões de avaliação e/ou tratamento, exclusivamente para:
        </p>
        <TermoList
          items={[
            "Análise clínica;",
            "Acompanhamento terapêutico;",
            "Desenvolvimento do tratamento.",
          ]}
        />
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

      <TermoSpacer />

      <TermoSection number="13" title="Comunicação">
        <p>
          As comunicações relacionadas a agendamentos, cancelamentos, orientações
          administrativas e atualização destes termos serão realizadas
          preferencialmente via <strong>WhatsApp</strong>.
        </p>
        <p>
          Solicitamos que o responsável mantenha seus dados de contato
          atualizados para garantir o recebimento de todas as informações
          relevantes ao acompanhamento.
        </p>
      </TermoSection>

      <TermoSpacer />

      <TermoSection number="14" title="Sobre a evolução terapêutica">
        <p>
          O acompanhamento fonoaudiológico é realizado com base em critérios
          técnicos e científicos, com dedicação e comprometimento em cada etapa
          do tratamento.
        </p>
        <p>
          No entanto, a evolução terapêutica depende de fatores individuais de
          cada paciente, como histórico clínico, engajamento nas atividades
          propostas e o apoio do ambiente familiar. Por esse motivo,{" "}
          <strong>não é possível garantir resultados em prazo determinado</strong>
          .
        </p>
        <p>
          O plano terapêutico é construído de forma personalizada e revisado
          continuamente, sempre com o objetivo de oferecer o melhor
          acompanhamento possível.
        </p>
      </TermoSection>

      <TermoSpacer />

      <TermoSection number="15" title="Atualização dos termos">
        <p>
          Estes Termos de Atendimento poderão ser atualizados sempre que
          necessário, para melhorar a organização dos atendimentos ou realizar
          adequações administrativas.
        </p>
        <p>
          Em caso de alterações relevantes, os responsáveis serão comunicados
          previamente via <strong>WhatsApp</strong>. A continuidade dos
          atendimentos após a comunicação será considerada como aceite das novas
          condições.
        </p>
      </TermoSection>

      <TermoSpacer />

      <aside
        className="mt-14 rounded-2xl border border-forest/12 bg-gradient-to-br from-sage-pale/90 to-cream-alt/80 px-6 py-8 text-center shadow-card sm:px-10"
        aria-labelledby="termo-aceite-titulo"
      >
        <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-honey">
          Aceite dos termos
        </p>
        <h2
          id="termo-aceite-titulo"
          className="mt-3 font-serif text-[clamp(1.35rem,3.5vw,1.75rem)] font-medium text-ink"
        >
          16. Aceite dos termos
        </h2>
        <div
          className="mx-auto my-5 h-px w-12 bg-gradient-to-r from-transparent via-honey/50 to-transparent"
          aria-hidden="true"
        />
        <p className="mx-auto max-w-xl text-[0.9375rem] leading-[1.85] text-ink-muted">
          O responsável declara ter tido acesso prévio a estes termos antes do
          início ou continuidade do atendimento, e que o envio de dados para
          cadastro, confirmação de agendamento, realização de pagamento ou
          continuidade dos atendimentos caracteriza ciência e concordância com
          todas as condições aqui estabelecidas.
        </p>
      </aside>
    </>
  );
}
