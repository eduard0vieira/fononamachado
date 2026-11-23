import {
  TermoSection,
  TermoAlert,
  TermoHighlightCard,
  TermoSpacer,
  TermoList,
} from "@/components/termo/TermoBlocks";
import { CENTRAL_PHONE_DISPLAY, PHONE_DISPLAY } from "@/lib/constants";

/*
 * Termos de Atendimento 2027 (revisão de 15/11/2026; ajustes de 23/11/2026:
 * chave Pix CNPJ, falta e atestado pela Central, sem a cláusula de
 * débitos anteriores e transição, reajuste sem IPCA).
 * Fonte: "Plano 2027/Termo de atendimento 2027 - rascunho.html", na pasta FONO.
 * O termo é público: nenhum valor em reais aparece aqui. Os valores ficam no
 * portfólio e no combinado por escrito com cada família.
 * O sábado não é citado em lugar nenhum: reposição é sempre "conforme a vaga".
 */

/** Texto jurídico do aceite — mesma redação no aside da /termo e no cadastro. */
function TermoAceiteParagrafo({ className }: { className?: string }) {
  return (
    <p className={className}>
      O agendamento só é feito depois de o responsável realizar o cadastro no
      site e concordar com estes termos. Não é necessário assinar nenhum
      documento. O responsável declara ter tido acesso prévio a estes termos
      antes do início ou da continuidade do atendimento, e que o envio de dados
      para cadastro, o pagamento ou a continuidade dos atendimentos caracteriza
      ciência e concordância com todas as condições aqui estabelecidas.
    </p>
  );
}

/**
 * Cláusula de aceite (18) no mesmo formato das demais — use no cadastro
 * (expandable), onde não há o aside da /termo. O nome ficou o antigo para não
 * mexer nos imports.
 */
export function TermoClause17Section() {
  return (
    <>
      <TermoSection number="18" title="Cadastro e aceite dos termos">
        <TermoAceiteParagrafo />
      </TermoSection>
    </>
  );
}

/** Cláusulas 01–17 (sem o aceite) — reutilizado na página /termo e no cadastro. */
export function TermoSectionsBody() {
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
          Cada atendimento tem duração média de <strong>45 minutos</strong> e
          é conduzido de forma individual, com base em avaliação detalhada e
          plano terapêutico personalizado, respeitando as necessidades de cada
          paciente e família.
        </p>
        <p>
          A frequência <strong>semanal</strong> é a regra do atendimento,
          porque a constância é um fator essencial para o progresso
          terapêutico. Outra frequência só é definida pela fonoaudióloga,
          conforme avaliação clínica e evolução do paciente.
        </p>
      </TermoSection>

      <TermoSpacer />

      <TermoSection number="02" title="Horário fixo">
        <p>
          No atendimento semanal, o paciente tem um{" "}
          <strong>dia e horário exclusivos</strong> reservados na agenda da
          profissional, toda semana. A manutenção do horário depende da
          continuidade do acompanhamento e do cumprimento destes termos.
        </p>
        <TermoAlert>
          Por esse motivo, cada sessão reservada e não utilizada impacta
          diretamente a organização da agenda e o atendimento de outros
          pacientes.
        </TermoAlert>
      </TermoSection>

      <TermoSpacer />

      <TermoSection number="03" title="Valores">
        <p>
          Os valores dos atendimentos são informados previamente ao
          responsável, por escrito, antes do início ou da continuidade do
          atendimento, e podem ser reajustados mediante comunicação prévia. O
          valor vigente na data do atendimento é a referência para cobrança.
        </p>
        <p>
          O atendimento semanal é contratado por <strong>mensalidade</strong>{" "}
          (horário fixo), calculada sobre quatro sessões por mês. A mensalidade
          é <strong>igual em todos os meses</strong>: mês com cinco semanas não
          cobra a mais, e mês com feriado ou recesso não cobra a menos. Ao
          longo do ano, um mês vai compensando o outro. Feriados e recessos
          (uma semana entre o Natal e o Ano-Novo e uma semana no meio do ano)
          são publicados no calendário do ano.
        </p>
        <p>
          Atendimentos com condições diferentes (outras frequências,
          atendimento em casa, vaga social) têm o valor combinado
          individualmente e informado por escrito ao responsável. Os valores se
          aplicam a <strong>todos os atendimentos</strong>, incluindo anamnese,
          avaliação e sessões terapêuticas.
        </p>
        <TermoAlert>
          <strong>Atendimento em casa.</strong> Dentro da cidade de São Miguel
          Arcanjo, o deslocamento já está incluído no valor do atendimento. Na{" "}
          <strong>zona rural</strong> e em outras cidades, o deslocamento é
          cobrado à parte, <strong>por quilômetro</strong>, contado a partir do
          consultório, e o valor é informado ao responsável antes do início.
        </TermoAlert>
        <p>
          <strong>Primeira consulta.</strong> A primeira consulta (anamnese) é
          paga antes e conta como a primeira sessão do primeiro mês. Se a
          família decidir continuar, o restante do primeiro mês é cobrado de
          forma proporcional às semanas que faltam; a partir do mês seguinte,
          vale a mensalidade cheia. Se não decidir continuar, nada mais é
          devido. Não há sessão avulsa.
        </p>
      </TermoSection>

      <TermoSpacer />

      <TermoSection number="04" title="Pagamento">
        <p>
          O pagamento é feito <strong>antes</strong> do atendimento, por{" "}
          <strong>Pix</strong>, <strong>cartão de crédito em 1×</strong> (pelo
          link de pagamento enviado pela clínica) ou <strong>dinheiro</strong>,
          que pode ser entregue na recepção da Medvance, sempre dentro do prazo
          abaixo. No cartão, o valor informado ao responsável já inclui a
          tarifa da operadora.
        </p>
        <TermoAlert>
          <strong>
            A mensalidade é paga de uma vez, até o meio-dia do dia útil
            anterior à primeira sessão do mês
          </strong>{" "}
          (dia útil: segunda a sexta, exceto feriados; para sessão de segunda,
          até sexta ao meio-dia). Não há outro dia de vencimento: o responsável
          pode pagar antes, no dia que for melhor para a família, desde que
          dentro desse prazo.
        </TermoAlert>
        <p>
          O Pix é feito na <strong>chave CNPJ 65.304.270/0001-31</strong>; no
          banco, aparece o nome <strong>Nathalia Machado Fonoaudiologia</strong>.
          A clínica não pede pagamento em nenhuma outra chave ou conta: em caso
          de dúvida, confirme antes pela Central de Atendimento.
        </p>
        <p>
          O sistema identifica os pagamentos recebidos e os associa às sessões.
          O responsável pode enviar o comprovante pelo WhatsApp{" "}
          <strong>Nathália Machado | Central de Atendimento</strong>,{" "}
          {CENTRAL_PHONE_DISPLAY}, para acelerar a identificação.
        </p>
      </TermoSection>

      <TermoSpacer />

      <TermoSection
        number="05"
        title="Lembrete, confirmação e sessão computada"
      >
        <p>
          Todas as sessões do horário fixo já estão confirmadas. A clínica
          envia mensagens <strong>automáticas</strong> pelo WhatsApp da Central
          de Atendimento ({CENTRAL_PHONE_DISPLAY}):
        </p>
        <TermoList
          items={[
            <>
              <strong>Ao meio-dia do dia útil anterior ao prazo:</strong> se o
              pagamento ainda não foi identificado, a família recebe um aviso.
            </>,
            <>
              <strong>Às 8h do dia do prazo:</strong> se o pagamento ainda não
              foi identificado, a família recebe o último aviso.
            </>,
            <>
              <strong>
                Ao meio-dia do dia útil anterior à sessão (o prazo):
              </strong>{" "}
              se o pagamento foi identificado depois do aviso, a família recebe
              a confirmação da sessão. Se não foi identificado, o paciente{" "}
              <strong>perde o horário fixo</strong>, que é oferecido ao próximo
              da lista de espera; o paciente entra no fim da lista e só volta
              quando houver vaga.
            </>,
            <>
              <strong>Às 8h da véspera:</strong> a família recebe um{" "}
              <strong>lembrete informativo</strong> do horário. Não é
              necessário responder.
            </>,
          ]}
        />
        <TermoAlert>
          A partir do prazo (meio-dia do dia útil anterior), a sessão fica{" "}
          <strong>computada</strong> (considerada realizada para fins de
          cobrança).
        </TermoAlert>
      </TermoSection>

      <TermoSpacer />

      <TermoSection number="06" title="Faltas e cancelamentos">
        <p>
          Como o horário é reservado exclusivamente ao paciente e a mensalidade
          não varia, o responsável deve{" "}
          <strong>
            avisar até o meio-dia do dia útil anterior
          </strong>
          , pela Central de Atendimento ({CENTRAL_PHONE_DISPLAY}), caso o
          paciente não possa comparecer. Avisando nesse prazo, a sessão
          é <strong>reposta em outro horário, no mesmo mês</strong>, conforme a
          vaga disponível, sem garantia de horário. A mensalidade continua
          devida no mesmo prazo: sem o pagamento, o paciente perde o horário
          fixo. O WhatsApp automático não serve para cancelar ou reagendar
          sessões.
        </p>
        <TermoList
          items={[
            <>
              Depois do prazo, o cancelamento, com ou sem aviso, só é aprovado
              mediante <strong>atestado médico</strong>, que pode ser{" "}
              <strong>do paciente</strong> (por exemplo, doença repentina na
              véspera ou na madrugada da sessão){" "}
              <strong>ou do responsável que o leva</strong> (mal-estar que
              exigiu atendimento médico).
            </>,
            <>
              O atestado deve ser <strong>enviado em até 3 dias</strong> após a
              sessão, pela Central de Atendimento. A sessão só deixa de ser computada quando o{" "}
              <strong>arquivo do atestado é anexado</strong> ao cadastro; sem o
              arquivo, ela continua computada.
            </>,
            <>
              Com o atestado aprovado, a sessão é{" "}
              <strong>remarcada (reposição)</strong> ou{" "}
              <strong>descontada da mensalidade do mês seguinte</strong>.
            </>,
            <>
              Faltas sem atestado, não avisadas até o prazo, contam como sessão
              realizada e não geram reposição nem desconto.
            </>,
            <>
              <strong>Três semanas seguidas</strong> sem comparecer, sem
              atestado, liberam o horário reservado.
            </>,
          ]}
        />
      </TermoSection>

      <TermoSpacer />

      <TermoSection number="07" title="Sessão desmarcada pela fonoaudióloga">
        <p>
          Se a fonoaudióloga precisar desmarcar uma sessão, ela é reposta no
          mesmo mês ou o valor correspondente é descontado da mensalidade
          seguinte. Nunca se cobra por uma sessão que não aconteceu.
        </p>
      </TermoSection>

      <TermoSpacer />

      <TermoSection number="08" title="Atrasos">
        <p>
          Em caso de atraso do paciente, o atendimento é realizado{" "}
          <strong>dentro do tempo restante</strong> da sessão. O tempo perdido
          não é compensado ao final.
        </p>
      </TermoSection>

      <TermoSpacer />

      <TermoSection number="09" title="Pausa e encerramento">
        <p>
          Para encerrar o atendimento ou pedir uma pausa, o responsável deve
          avisar até o <strong>dia 20 do mês anterior</strong>. Sem aviso
          nesse prazo, vale a mensalidade do mês seguinte.
        </p>
        <p>
          É possível uma pausa de até <strong>2 semanas por ano</strong> sem
          cobrança, mediante atestado ou aviso no prazo; nesse período o
          horário continua reservado. Pausa maior libera o horário, e o
          paciente volta na primeira vaga disponível.
        </p>
      </TermoSection>

      <TermoSpacer />

      <TermoSection number="10" title="Nota fiscal">
        <p>
          A nota fiscal é emitida em até <strong>3 dias úteis</strong> após a
          confirmação do pagamento, respeitando o mês de competência da
          prestação do serviço.
        </p>
        <p>
          Por padrão, a nota é emitida com o{" "}
          <strong>nome e CPF do responsável financeiro</strong>. Telefone e
          endereço só entram na nota mediante solicitação expressa.
        </p>
      </TermoSection>

      <TermoSpacer />

      <TermoSection number="11" title="Reajuste de valores">
        <p>
          Os valores podem ser reajustados{" "}
          <strong>uma vez por ano</strong>, em regra no mês de janeiro, com
          comunicação prévia de pelo menos <strong>30 dias</strong>. O novo
          valor é informado por escrito a cada família.
        </p>
      </TermoSection>

      <TermoSpacer />

      <TermoSection number="12" title="Pacote trimestral">
        <p>
          A partir do primeiro mês completo, o
          responsável pode contratar o <strong>pacote trimestral</strong> (12
          sessões), com pagamento à vista e valor informado por escrito. O
          valor fica travado nos três meses.
        </p>
        <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
          <TermoHighlightCard label="Até 7 dias">
            <p>
              Devolução integral, descontadas as sessões já realizadas pelo
              valor da mensalidade.
            </p>
          </TermoHighlightCard>
          <TermoHighlightCard label="Depois de 7 dias">
            <p>
              Com aviso até o dia 20, as sessões realizadas passam a ser
              calculadas pelo valor normal (perde-se o desconto do pacote) e o
              saldo é devolvido por Pix em até 10 dias ou mantido como crédito
              por 6 meses.
            </p>
          </TermoHighlightCard>
          <TermoHighlightCard label="Alta ou encerramento">
            <p>
              Pela fonoaudióloga: devolução do saldo sem recalcular o
              desconto.
            </p>
          </TermoHighlightCard>
        </div>
      </TermoSection>

      <TermoSpacer />

      <TermoSection number="13" title="Uso de imagem e voz">
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
          não sendo utilizadas para divulgação pública em redes sociais, sites
          ou qualquer outro meio de comunicação.
        </p>
        <p>
          Esta autorização poderá ser{" "}
          <strong>revogada a qualquer momento</strong> mediante solicitação
          formal realizada via WhatsApp.
        </p>
      </TermoSection>

      <TermoSpacer />

      <TermoSection number="14" title="Comunicação">
        <p>
          O <strong>primeiro contato</strong> de quem procura o atendimento é
          feito com a fonoaudióloga, pelo WhatsApp{" "}
          <strong>{PHONE_DISPLAY}</strong>, para acolher a família e conhecer o
          caso.
        </p>
        <p>
          A partir daí, agendamentos, pagamentos, comprovantes, atestados, nota
          fiscal, lembretes, orientações administrativas e atualização destes
          termos são tratados pelo WhatsApp{" "}
          <strong>Nathália Machado | Central de Atendimento</strong>,{" "}
          <strong>{CENTRAL_PHONE_DISPLAY}</strong>. Assuntos sobre o
          atendimento e o tratamento continuam sendo tratados diretamente com a
          fonoaudióloga.
        </p>
        <p>
          Solicitamos que o responsável mantenha seus dados de contato
          atualizados para garantir o recebimento de todas as informações
          relevantes ao acompanhamento.
        </p>
      </TermoSection>

      <TermoSpacer />

      <TermoSection number="15" title="Sobre a evolução terapêutica">
        <p>
          O acompanhamento fonoaudiológico é realizado com base em critérios
          técnicos e científicos, com dedicação e comprometimento em cada etapa
          do tratamento.
        </p>
        <p>
          No entanto, a evolução terapêutica depende de fatores individuais de
          cada paciente, como histórico clínico, engajamento nas atividades
          propostas, adesão ao tratamento e o apoio do ambiente familiar. A
          participação ativa da família é fundamental para reforçar os
          estímulos, orientar rotinas e contribuir para a continuidade do
          processo terapêutico fora das sessões. Por esse motivo,{" "}
          <strong>
            não é possível garantir resultados em prazo determinado
          </strong>
          .
        </p>
      </TermoSection>

      <TermoSpacer />

      <TermoSection number="16" title="Atualização dos termos">
        <p>
          Estes Termos de Atendimento podem ser atualizados sempre que
          necessário. Alterações relevantes são comunicadas previamente por{" "}
          <strong>WhatsApp</strong>, e a continuidade dos atendimentos após a
          comunicação é considerada aceite das novas condições.
        </p>
      </TermoSection>

      <TermoSpacer />

      <TermoSection number="17" title="Proteção de dados pessoais">
        <p>
          Os dados pessoais do paciente e/ou responsável serão utilizados
          exclusivamente para fins de cadastro, contato, emissão de documentos
          fiscais e condução do atendimento, sendo armazenados de forma segura e
          sigilosa, em conformidade com a{" "}
          <strong>LGPD (Lei nº 13.709/2018)</strong>.
        </p>
      </TermoSection>

      <TermoSpacer />
    </>
  );
}

export default function TermoSections() {
  return (
    <>
      <TermoSectionsBody />

      <aside
        className="relative mt-14 overflow-hidden rounded-md bg-[#8FAA8A] px-6 py-9 text-center shadow-md sm:px-10 sm:py-10"
        aria-labelledby="termo-aceite-titulo"
      >
        <p className="font-serif text-[0.8125rem] italic tracking-[0.18em] text-honey-light">
          aceite dos termos
        </p>
        <h2
          id="termo-aceite-titulo"
          className="mt-4 font-serif text-[clamp(1.2rem,3.5vw,1.375rem)] font-normal uppercase tracking-[0.12em] text-white"
        >
          18. Cadastro e aceite dos termos
        </h2>
        <TermoAceiteParagrafo className="mx-auto mt-4 max-w-[560px] text-[0.875rem] leading-[1.9] text-white/70" />
        <div
          className="mx-auto mt-5 h-px w-10 bg-honey"
          aria-hidden="true"
        />
      </aside>
    </>
  );
}
