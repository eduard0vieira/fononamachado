import SiteContainer from "@/components/layout/SiteContainer";
import { siteEdgePadding } from "@/lib/siteLayout";

interface ValorItem {
  label: string;
  price: string;
  description: string;
}

const VALORES: ValorItem[] = [
  {
    label: "Linguagem · Consultório",
    price: "R$120",
    description: "Pix ou dinheiro · R$ 125 no cartão",
  },
  {
    label: "Disfagia · Domiciliar",
    price: "R$150",
    description: "Pix ou dinheiro · R$ 155 no cartão",
  },
  {
    label: "Área rural · Outra cidade",
    price: "A combinar",
    description: "Valor adicional de deslocamento aplicável",
  },
];

export default function ValoresCard() {
  return (
    <div className={`-translate-y-7 ${siteEdgePadding}`}>
      <SiteContainer className="max-w-3xl">
        <div className="rounded-xl border-t-[3px] border-honey bg-white px-8 py-7 shadow-md">
        <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-cream-alt">
          {VALORES.map((v) => (
            <div
              key={v.label}
              className="px-6 py-4 sm:py-0 text-center first:pl-0 last:pr-0"
            >
              <p className="text-[0.64rem] font-semibold tracking-[0.2em] uppercase text-honey mb-1.5">
                {v.label}
              </p>
              <p className="font-serif text-[2rem] font-normal text-ink leading-none">
                {v.price}
              </p>
              <p className="text-[0.78rem] text-ink-muted font-light mt-1.5 leading-[1.5]">
                {v.description}
              </p>
            </div>
          ))}
        </div>
        <p className="mt-4 pt-4 border-t border-cream-alt text-[0.78rem] text-ink-muted text-center leading-[1.6]">
          <strong className="text-honey-DEFAULT font-medium">Atenção:</strong>{" "}
          Os valores vigentes se aplicam a todos os atendimentos, incluindo
          anamnese, avaliação e sessões terapêuticas. Para deslocamento a área rural
          ou outra cidade, entre em contato para combinar o valor adicional.
        </p>
        </div>
      </SiteContainer>
    </div>
  );
}
