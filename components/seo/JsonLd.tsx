import {
  ASSUNTOS,
  CIDADES_ATENDIDAS,
  FAQ,
  GEO,
  HORARIO,
  NOME_COMPLETO,
  NOME_CURTO,
  SITE_URL,
} from "@/lib/perfil";
import {
  EMAIL,
  INSTAGRAM_URL,
  MAPS_URL,
  WHATSAPP_NUMBER,
} from "@/lib/constants";

/**
 * Dados estruturados (schema.org) da home.
 *
 * É o que o Google usa para montar o painel de conhecimento e o que os
 * assistentes de IA leem para responder "quem é a fonoaudióloga de São
 * Miguel Arcanjo?". Vai num @graph único: os nós se referenciam por @id
 * em vez de repetir os mesmos dados.
 *
 * As perguntas do FAQPage são as MESMAS que aparecem na tela (lib/perfil).
 * Schema de FAQ sem o texto visível correspondente é penalizado.
 */

const CONSULTORIO_ID = `${SITE_URL}/#consultorio`;
const PESSOA_ID = `${SITE_URL}/#nathalia`;

export default function JsonLd() {
  const graph = [
    {
      "@type": ["MedicalBusiness", "LocalBusiness"],
      "@id": CONSULTORIO_ID,
      name: `${NOME_CURTO}, Fonoaudióloga`,
      alternateName: "Fono Na Machado",
      description:
        "Consultório de fonoaudiologia em São Miguel Arcanjo (SP). Atendimento particular, com horário agendado, em linguagem infantil, linguagem adulto, motricidade orofacial e disfagia, com opção de atendimento domiciliar.",
      url: SITE_URL,
      telephone: `+${WHATSAPP_NUMBER}`,
      email: EMAIL,
      image: `${SITE_URL}/images/nathalia.png`,
      logo: `${SITE_URL}/images/logo.png`,
      hasMap: MAPS_URL,
      sameAs: [INSTAGRAM_URL],
      currenciesAccepted: "BRL",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Rua Miguel Terra, 385",
        addressLocality: "São Miguel Arcanjo",
        addressRegion: "SP",
        addressCountry: "BR",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: GEO.lat,
        longitude: GEO.lng,
      },
      areaServed: CIDADES_ATENDIDAS.map((cidade) => ({
        "@type": "City",
        name: cidade,
        containedInPlace: {
          "@type": "State",
          name: "São Paulo",
          address: { "@type": "PostalAddress", addressCountry: "BR" },
        },
      })),
      availableLanguage: { "@type": "Language", name: "Português" },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: HORARIO.dias,
          opens: HORARIO.abre,
          closes: HORARIO.fecha,
        },
      ],
      /** Atende no consultório e na casa do paciente */
      availableService: [
        {
          "@type": "Service",
          name: "Atendimento fonoaudiológico em consultório",
          areaServed: { "@type": "City", name: "São Miguel Arcanjo" },
        },
        {
          "@type": "Service",
          name: "Atendimento fonoaudiológico domiciliar",
          areaServed: CIDADES_ATENDIDAS.map((cidade) => ({
            "@type": "City",
            name: cidade,
          })),
        },
      ],
      paymentAccepted: "Particular. Emite nota fiscal para reembolso junto ao plano de saúde.",
      founder: { "@id": PESSOA_ID },
      employee: { "@id": PESSOA_ID },
      knowsAbout: ASSUNTOS,
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Áreas de atuação",
        itemListElement: [
          {
            nome: "Linguagem infantil",
            desc: "Avaliação e acompanhamento do desenvolvimento da linguagem oral e escrita em crianças, incluindo fala, compreensão, comunicação e dificuldades relacionadas à aprendizagem escolar.",
          },
          {
            nome: "Linguagem adulto",
            desc: "Atendimento terapêutico para adultos com dificuldades de linguagem, fala, voz ou comunicação.",
          },
          {
            nome: "Motricidade orofacial",
            desc: "Avaliação e tratamento das funções orais: mastigação, deglutição, respiração e musculatura da face.",
          },
          {
            nome: "Disfagia adulto",
            desc: "Avaliação e reabilitação da deglutição em adultos e idosos, com possibilidade de atendimento domiciliar.",
          },
          {
            nome: "Avaliação fonoaudiológica completa",
            desc: "Anamnese e vínculo na primeira consulta, aplicação de protocolos padronizados nos atendimentos de avaliação seguintes, devolutiva à família e à escola e planejamento terapêutico.",
          },
          {
            nome: "Orientação familiar",
            desc: "Acolhimento e orientação às famílias, fortalecendo sua participação no processo terapêutico.",
          },
          {
            nome: "Atendimento domiciliar",
            desc: "Atendimento em casa para pacientes sem condição de se deslocar, em linguagem e em disfagia.",
          },
        ].map((s) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: s.nome,
            description: s.desc,
            serviceType: s.nome,
            provider: { "@id": PESSOA_ID },
          },
        })),
      },
    },
    {
      "@type": "Person",
      "@id": PESSOA_ID,
      name: NOME_CURTO,
      alternateName: NOME_COMPLETO,
      jobTitle: "Fonoaudióloga",
      description:
        "Fonoaudióloga (CRFa 2-23700), graduada pela Universidade de Sorocaba (UNISO), com atuação em linguagem infantil, motricidade orofacial e disfagia, e experiência hospitalar em disfagia.",
      url: SITE_URL,
      image: `${SITE_URL}/images/nathalia.png`,
      telephone: `+${WHATSAPP_NUMBER}`,
      email: EMAIL,
      sameAs: [INSTAGRAM_URL],
      worksFor: { "@id": CONSULTORIO_ID },
      knowsAbout: ASSUNTOS,
      knowsLanguage: "pt-BR",
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: "Universidade de Sorocaba (UNISO)",
      },
      hasCredential: [
        {
          "@type": "EducationalOccupationalCredential",
          credentialCategory: "Registro profissional",
          name: "CRFa 2-23700, CREFONO-2",
          recognizedBy: {
            "@type": "Organization",
            name: "Conselho Regional de Fonoaudiologia da 2ª Região (CREFONO-2)",
          },
        },
        {
          "@type": "EducationalOccupationalCredential",
          credentialCategory: "degree",
          name: "Bacharelado em Fonoaudiologia",
          educationalLevel: "Graduação",
          recognizedBy: {
            "@type": "CollegeOrUniversity",
            name: "Universidade de Sorocaba (UNISO)",
          },
        },
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#site`,
      url: SITE_URL,
      name: `${NOME_CURTO} | Fonoaudióloga`,
      inLanguage: "pt-BR",
      publisher: { "@id": PESSOA_ID },
    },
    {
      "@type": "FAQPage",
      "@id": `${SITE_URL}/#duvidas`,
      inLanguage: "pt-BR",
      mainEntity: FAQ.map((item) => ({
        "@type": "Question",
        name: item.pergunta,
        acceptedAnswer: { "@type": "Answer", text: item.resposta },
      })),
    },
  ];

  return (
    <script
      type="application/ld+json"
      // O conteúdo é estático e vem do nosso próprio módulo — não há
      // entrada de usuário aqui. O replace fecha o vetor clássico de
      // quebrar o <script> caso algum texto passe a conter "</script>".
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": graph,
        }).replace(/</g, "\\u003c"),
      }}
    />
  );
}
