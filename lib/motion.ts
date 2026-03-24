/** Curva suave: entra devagar e “assenta” no fim (menos seco que linear) */
export const EASE_OUT = [0.16, 1, 0.3, 1] as const;

export const DURATION = {
  /** Blocos grandes (Reveal de seção) */
  section: 1.05,
  /** Itens em lista / grade com stagger */
  item: 0.78,
  /** Hero: linhas de texto */
  hero: 1,
} as const;
