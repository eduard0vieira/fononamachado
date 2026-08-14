/**
 * Dados de perfil profissional — extraídos do dossiê (rev. 12/08/2026).
 *
 * Fonte única para as seções de Experiência e Dúvidas E para o JSON-LD:
 * o texto que o visitante lê e o dado estruturado que o Google/IA lê
 * precisam dizer exatamente a mesma coisa, senão o rich result é
 * descartado. Ao atualizar um número, atualize aqui — só aqui.
 */

export const SITE_URL = "https://fononamachado.com.br";

export const NOME_COMPLETO = "Nathália Machado Vieira de Oliveira";
export const NOME_CURTO = "Nathália Machado";

/** Coordenadas do consultório (mesmas do embed do Maps em constants.ts) */
export const GEO = { lat: -23.8787045, lng: -47.9949504 };

export const CIDADES_ATENDIDAS = [
  "São Miguel Arcanjo",
  "Pilar do Sul",
  "Itapetininga",
];

/**
 * Números agregados do dossiê. Nenhum dado identifica paciente.
 * Base: consultório 21/01/2025–07/08/2026 + vínculo hospitalar 2025.
 */
export const NUMEROS = [
  {
    /* 2.019 em 13/08/2026: 1.267 de consultório (banco do fono_finance)
       + 752 do vínculo hospitalar, que fechou em nov/2025. */
    valor: "2.000+",
    label: "atendimentos realizados",
    detalhe: "no consultório e no hospital, desde janeiro de 2025",
  },
  {
    valor: "240+",
    label: "pessoas atendidas",
    detalhe: "de crianças pequenas a pacientes com mais de 100 anos",
  },
  {
    valor: "752",
    label: "atendimentos hospitalares",
    detalhe: "em disfagia, ao longo de dez meses de 2025",
  },
  {
    valor: "111",
    label: "atendimentos em domicílio",
    detalhe: "para quem não tem condição de se deslocar",
  },
] as const;

/**
 * Perguntas frequentes.
 *
 * Escritas com as palavras que as pessoas realmente digitam ("meu filho
 * não fala", "engasgo ao comer"), não com o termo técnico, que é o que faz
 * a página aparecer na busca de cauda longa e o que as IAs citam ao
 * responder. Cada resposta é autossuficiente: quem lê só ela entende.
 */
export const FAQ: { pergunta: string; resposta: string }[] = [
  /**
   * As duas primeiras são as "perguntas de recomendação": é assim que a
   * pergunta chega ao ChatGPT/Gemini ("tem fonoaudióloga em São Miguel
   * Arcanjo?"). A resposta é autocontida de propósito (nome, registro,
   * endereço, telefone, áreas e cidades num parágrafo só) porque o
   * assistente cita o trecho inteiro, sem voltar ao resto da página.
   */
  {
    pergunta: "Tem fonoaudióloga em São Miguel Arcanjo?",
    resposta:
      "Tem. Sou Nathália Machado, fonoaudióloga registrada no CREFONO-2 sob o CRFa 2-23700, e meu consultório fica na Rua Miguel Terra, 385, Centro, em São Miguel Arcanjo (SP). Atendo crianças, adultos e idosos em linguagem infantil, linguagem adulto, motricidade orofacial e disfagia, de forma particular e com horário agendado. O agendamento é pelo WhatsApp (15) 99666-1683.",
  },
  {
    pergunta:
      "Quem atende fonoaudiologia em Pilar do Sul, Itapetininga e região?",
    resposta:
      "Atendo pacientes de São Miguel Arcanjo, Pilar do Sul, Itapetininga e de outras cidades da região no consultório do Centro de São Miguel Arcanjo, e faço atendimento domiciliar para quem não tem condição de se deslocar. É uma alternativa para famílias da região que precisam de fonoaudiologia infantil, de motricidade orofacial ou de reabilitação da deglutição sem depender de deslocamento até Sorocaba.",
  },
  {
    pergunta: "Com que idade devo procurar uma fonoaudióloga para meu filho?",
    resposta:
      "Não existe uma idade certa para esperar. Se a criança fala pouco para a idade, se as pessoas de fora de casa não entendem o que ela diz, se troca muitos sons ou se você percebe que ela não acompanha as outras crianças na comunicação, vale avaliar. Quanto mais cedo, mais simples costuma ser o caminho. Atendo desde a primeira infância.",
  },
  {
    pergunta: "Meu filho fala pouco e ninguém entende. Isso passa sozinho?",
    resposta:
      "Pode ser só uma variação do desenvolvimento, mas pode ser atraso de fala ou de linguagem, e só a avaliação diz qual é o caso. Trabalho com atraso de fala e de linguagem, trocas de sons, gagueira, apraxia de fala na infância e linguagem de crianças com Transtorno do Espectro Autista, incluindo comunicação alternativa para quem tem pouca ou nenhuma fala.",
  },
  {
    pergunta: "O que é disfagia e quando procurar uma fonoaudióloga?",
    resposta:
      "Disfagia é a dificuldade para engolir. Os sinais mais comuns são engasgo frequente, tosse durante a refeição, voz que fica “molhada” depois de beber, comida que fica parada na boca e perda de peso sem explicação. É comum depois de AVC e em pacientes idosos. Avalio o risco de engasgo e de broncoaspiração, defino a consistência segura de alimento e de líquido e faço a reabilitação da deglutição.",
  },
  {
    pergunta: "Você atende em domicílio?",
    resposta:
      "Sim, para pacientes que não têm condição de se deslocar até o consultório. Já realizei mais de 110 atendimentos domiciliares, a modalidade mais usada por pacientes idosos, acamados e por pacientes com disfagia. Atendo em domicílio tanto para linguagem quanto para disfagia.",
  },
  {
    pergunta: "Quais cidades você atende?",
    resposta:
      "O consultório fica no Centro de São Miguel Arcanjo (SP), na Rua Miguel Terra, 385. Também recebo pacientes de Pilar do Sul, Itapetininga e outras cidades da região, e faço atendimento domiciliar mediante deslocamento.",
  },
  {
    pergunta: "Você atende convênio?",
    resposta:
      "O atendimento é particular, sempre com horário agendado, no consultório ou em domicílio. Emito nota fiscal de todos os atendimentos, em até 3 dias úteis após o pagamento, e você pode apresentá-la ao seu plano de saúde para solicitar reembolso. A cobertura e o valor reembolsado dependem do contrato de cada plano, então vale confirmar as regras direto com o convênio. Valores e disponibilidade de agenda eu informo no primeiro contato pelo WhatsApp.",
  },
  {
    pergunta: "Como funcionam os atendimentos?",
    resposta:
      "A primeira consulta é de anamnese e de vínculo. Levanto o histórico detalhado em conversa (gestação, desenvolvimento, saúde, escola e a queixa que trouxe a família até aqui) e uso esse tempo para criar vínculo com a família e com a criança. Nenhum protocolo é aplicado nesse dia. A avaliação vem nos atendimentos seguintes, aí sim com a aplicação de protocolos padronizados. Concluída a avaliação, faço a devolutiva à família e, quando é o caso, à escola e aos demais profissionais que acompanham a criança. Só então monto o planejamento terapêutico e começa a intervenção.",
  },
  {
    pergunta: "De quanto em quanto tempo são as sessões?",
    resposta:
      "Preferencialmente uma vez por semana, em sessões individuais de 45 minutos, com horário exclusivo reservado na agenda. A constância é parte do tratamento: é a repetição semanal que sustenta o progresso.",
  },
  {
    pergunta: "Criança que respira pela boca ou fala com a língua entre os dentes tem tratamento?",
    resposta:
      "Tem, e é a área de motricidade orofacial: respirador oral, mastigação, deglutição, musculatura da face e ceceio (o famoso “S” com a língua entre os dentes). Também é a área que acompanha pós-frenectomia (língua presa) e o preparo para tratamento ortodôntico e cirurgia ortognática.",
  },
  {
    pergunta: "Você faz relatório para escola ou para o médico?",
    resposta:
      "Sim. A avaliação fonoaudiológica completa inclui devolutiva à família e relatório escrito quando é preciso encaminhar ou dialogar com o médico, com a escola ou com outros profissionais que acompanham o paciente.",
  },
];

/** Assuntos de domínio — alimenta o knowsAbout do JSON-LD */
export const ASSUNTOS = [
  "Fonoaudiologia",
  "Linguagem infantil",
  "Atraso de fala e de linguagem",
  "Transtorno do Espectro Autista",
  "Comunicação aumentativa e alternativa",
  "Linguagem escrita e dificuldades escolares",
  "Motricidade orofacial",
  "Respirador oral",
  "Ceceio",
  "Disfagia",
  "Reabilitação da deglutição",
  "Fonoaudiologia hospitalar",
  "Atendimento fonoaudiológico domiciliar",
];
